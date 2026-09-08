import { createHash, randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { rateLimiter } from "@/lib/rate-limit";
import { getLeadRepository, LeadStorageUnavailableError, type Lead } from "@/lib/leads";

const MAX_BODY_BYTES = 20_000;
const MAX_LENGTHS = {
  name: 100,
  company: 150,
  email: 254,
  phone: 50,
  projectType: 100,
  estimatedBudget: 100,
  expectedTimeline: 100,
  existingSystem: 100,
  message: 3000
} as const;

type ContactPayload = {
  [key: string]: unknown;
};

const jsonError = (message: string, code: string, status: number) =>
  NextResponse.json({ success: false, message, code }, { status });

function textValue(payload: ContactPayload, field: keyof typeof MAX_LENGTHS) {
  const value = payload[field];
  return typeof value === "string" ? value.trim() : "";
}

function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${process.env.IP_HASH_SECRET || "nxenable-rate-limit"}:${ip}`)
    .digest("hex");
}

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonError("Request must use JSON", "INVALID_CONTENT_TYPE", 400);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonError("Request is too large", "PAYLOAD_TOO_LARGE", 400);
  }

  let payload: ContactPayload;
  try {
    payload = JSON.parse(rawBody) as ContactPayload;
  } catch {
    return jsonError("Invalid JSON request", "INVALID_JSON", 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonError("Invalid request body", "INVALID_BODY", 400);
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ success: true, message: "Thanks, your message was received." });
  }

  const values = Object.fromEntries(
    Object.keys(MAX_LENGTHS).map((field) => [field, textValue(payload, field as keyof typeof MAX_LENGTHS)])
  ) as Record<keyof typeof MAX_LENGTHS, string>;

  for (const [field, value] of Object.entries(values)) {
    if (value.length > MAX_LENGTHS[field as keyof typeof MAX_LENGTHS]) {
      return jsonError(`${field} is too long`, "FIELD_TOO_LONG", 400);
    }
  }

  if (!values.name || !values.email || !values.message) {
    return jsonError("Name, email and message are required", "REQUIRED_FIELDS", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return jsonError("Please enter a valid email address", "INVALID_EMAIL", 400);
  }

  const ip = getClientIp(request);
  if (rateLimiter.isLimited(hashIp(ip))) {
    return jsonError("Too many requests. Please try again later.", "RATE_LIMITED", 429);
  }

  const now = new Date().toISOString();
  const lead: Lead = {
    id: randomUUID(),
    ...values,
    status: "NEW",
    source: "nxenable.co",
    ipHash: hashIp(ip),
    userAgent: request.headers.get("user-agent")?.slice(0, 300),
    createdAt: now,
    updatedAt: now
  };

  try {
    await getLeadRepository().create(lead);
  } catch (error) {
    if (error instanceof LeadStorageUnavailableError) {
      return jsonError("Lead storage is not configured", "LEAD_STORAGE_UNAVAILABLE", 503);
    }
    console.error("Lead storage failed", error instanceof Error ? error.message : "unknown error");
    return jsonError("Unable to save your message", "STORAGE_FAILED", 500);
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const recipientId = process.env.LINE_TO_USER_ID;
  if (!token || !recipientId) {
    console.error("LINE notification configuration is missing");
    return NextResponse.json({ success: true, message: "Your message was received." });
  }

  const lineMessage = [
    "🔔 NEW NXENABLE LEAD",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company || "-"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "-"}`,
    "",
    `Project Type: ${values.projectType || "-"}`,
    `Budget: ${values.estimatedBudget || "-"}`,
    `Timeline: ${values.expectedTimeline || "-"}`,
    `Existing System: ${values.existingSystem || "-"}`,
    "",
    `Message: ${values.message}`,
    "",
    `Received: ${now}`,
    "Source: nxenable.co"
  ].join("\n");

  try {
    const lineResponse = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: recipientId,
        messages: [{ type: "text", text: lineMessage }]
      })
    });

    if (!lineResponse.ok) {
      console.error("LINE notification failed", lineResponse.status);
    }
  } catch (error) {
    console.error("LINE notification request failed", error instanceof Error ? error.message : "unknown error");
  }

  return NextResponse.json({ success: true, message: "Your message was received." });
}