/** Naive in-memory rate limiter (per IP). Sufficient for a single-instance
 *  deployment; swap for Upstash/Redis in multi-instance production. */

const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60 * 1000 }: { limit?: number; windowMs?: number } = {}
): { ok: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const entry = buckets.get(key);

  if (!entry || entry.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  entry.count += 1;
  if (entry.count > limit) {
    return { ok: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { ok: true };
}

/** Best-effort client IP extraction behind a proxy/gateway */
export function clientKey(req: Request, scope: string): string {
  const fwd = req.headers.get("x-forwarded-for") || "";
  const ip = fwd.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  return `${scope}:${ip}`;
}
