import { describe, expect, it } from "vitest";
import { InMemoryRateLimiter } from "@/lib/rate-limit";

describe("InMemoryRateLimiter", () => {
  it("limits requests after the configured threshold", () => {
    const limiter = new InMemoryRateLimiter(60_000, 2);
    expect(limiter.isLimited("ip-hash")).toBe(false);
    expect(limiter.isLimited("ip-hash")).toBe(false);
    expect(limiter.isLimited("ip-hash")).toBe(true);
  });

  it("tracks keys independently", () => {
    const limiter = new InMemoryRateLimiter(60_000, 1);
    expect(limiter.isLimited("first")).toBe(false);
    expect(limiter.isLimited("second")).toBe(false);
  });
});
