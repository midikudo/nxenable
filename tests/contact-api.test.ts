import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const validPayload = {
  name: "Test Lead",
  email: "lead@example.com",
  message: "A valid project enquiry"
};

function request(body: unknown, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body)
  });
}

describe("contact API", () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.LINE_CHANNEL_ACCESS_TOKEN;
    delete process.env.LINE_TO_USER_ID;
    vi.stubEnv("NODE_ENV", "test");
  });

  afterEach(() => {
    vi.doUnmock("@/lib/leads");
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("accepts a valid lead in development fallback mode", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const response = await POST(request(validPayload, { "x-forwarded-for": "valid-test" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true });
  });

  it("rejects an invalid lead with a standard error", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const response = await POST(request({ ...validPayload, email: "bad-email" }, { "x-forwarded-for": "invalid-test" }));
    expect(response.status).toBe(400);
    expect(await response.json()).toMatchObject({ success: false, code: "INVALID_EMAIL" });
  });

  it("accepts a honeypot submission without saving or notifying", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const response = await POST(request({ website: "bot", ...validPayload }, { "x-forwarded-for": "honeypot-test" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true });
  });

  it("returns 503 when production storage is unavailable", async () => {
    vi.stubEnv("NODE_ENV", "production");
    const { POST } = await import("@/app/api/contact/route");
    const response = await POST(request(validPayload, { "x-forwarded-for": "missing-db-test" }));
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ success: false, code: "LEAD_STORAGE_UNAVAILABLE" });
  });

  it("returns success when LINE fails after the lead is saved", async () => {
    process.env.LINE_CHANNEL_ACCESS_TOKEN = "test-token";
    process.env.LINE_TO_USER_ID = "test-recipient";
    const create = vi.fn().mockResolvedValue(undefined);
    vi.doMock("@/lib/leads", async () => {
      const actual = await vi.importActual<typeof import("@/lib/leads")>("@/lib/leads");
      return { ...actual, getLeadRepository: () => ({ create, getLeads: vi.fn(), getLeadById: vi.fn(), updateLeadStatus: vi.fn() }) };
    });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));

    const { POST } = await import("@/app/api/contact/route");
    const response = await POST(request(validPayload, { "x-forwarded-for": "line-failure-test" }));
    expect(create).toHaveBeenCalledOnce();
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ success: true });
  });
});
