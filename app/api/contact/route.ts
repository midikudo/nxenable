import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const recipientId = process.env.LINE_TO_USER_ID;

  if (!token || !recipientId) {
    return NextResponse.json({ error: "LINE configuration is missing" }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
  }

  const lineMessage = [
    "New project enquiry from nxenable.co",
    `Name: ${name}`,
    `Company: ${payload.company?.trim() || "-"}`,
    `Email: ${email}`,
    `Phone: ${payload.phone?.trim() || "-"}`,
    "",
    "Project details:",
    message
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
      console.error("LINE Push API error", lineResponse.status, await lineResponse.text());
      return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("LINE Push API request failed", error);
    return NextResponse.json({ error: "Unable to send message" }, { status: 502 });
  }
}