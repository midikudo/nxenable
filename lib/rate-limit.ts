export interface RateLimiter {
  isLimited(key: string): boolean;
}

type RateLimitEntry = { count: number; resetAt: number };

export class InMemoryRateLimiter implements RateLimiter {
  private readonly entries = new Map<string, RateLimitEntry>();

  constructor(
    private readonly windowMs = 10 * 60 * 1000,
    private readonly maxRequests = 5
  ) {}

  isLimited(key: string) {
    const now = Date.now();
    const entry = this.entries.get(key);

    if (!entry || entry.resetAt <= now) {
      this.entries.set(key, { count: 1, resetAt: now + this.windowMs });
      return false;
    }

    entry.count += 1;
    return entry.count > this.maxRequests;
  }
}

// This adapter is intentionally replaceable with an Upstash/Redis implementation for distributed limits.
export const rateLimiter: RateLimiter = new InMemoryRateLimiter();
