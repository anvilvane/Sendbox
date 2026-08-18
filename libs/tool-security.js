// Shared security utilities for free tool API routes
// - Cloudflare Turnstile verification
// - IP + fingerprint rate limiting

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

// In-memory rate limit store (resets on deploy)
const rateLimitStore = new Map();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore) {
    if (now - entry.start > 86400000) {
      rateLimitStore.delete(key);
    }
  }
}, 600000);

/**
 * Get client IP from request headers
 */
export function getClientIP(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

/**
 * Verify Cloudflare Turnstile token
 * Returns { success: true } or { success: false, error: string }
 */
export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Skip verification if no secret configured (dev mode)
  if (!secret) return { success: true };

  if (!token) return { success: false, error: 'We detected unusual activity. Please refresh the page and try again.' };

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await res.json();
    if (data.success) return { success: true };
    return { success: false, error: 'Verification failed. Please refresh the page and try again.' };
  } catch (err) {
    console.error('Turnstile verification error:', err);
    // Allow request if verification service is down
    return { success: true };
  }
}

/**
 * Rate limit by IP + optional fingerprint
 * @param {string} ip - Client IP
 * @param {string} fingerprint - Browser fingerprint (optional)
 * @param {string} tool - Tool identifier (e.g., 'blacklist', 'dns')
 * @param {number} maxPerDay - Max requests per day
 * @returns {{ allowed: boolean, remaining: number }}
 */
export function checkRateLimit(ip, fingerprint, tool, maxPerDay = 10) {
  const now = Date.now();

  // Check both IP and fingerprint limits
  const keys = [`${tool}:ip:${ip}`];
  if (fingerprint) keys.push(`${tool}:fp:${fingerprint}`);

  for (const key of keys) {
    const entry = rateLimitStore.get(key);
    if (entry && now - entry.start < 86400000) {
      if (entry.count >= maxPerDay) {
        return { allowed: false, remaining: 0 };
      }
    }
  }

  // Increment all keys
  for (const key of keys) {
    const entry = rateLimitStore.get(key);
    if (!entry || now - entry.start >= 86400000) {
      rateLimitStore.set(key, { count: 1, start: now });
    } else {
      entry.count++;
    }
  }

  const ipEntry = rateLimitStore.get(keys[0]);
  return {
    allowed: true,
    remaining: maxPerDay - (ipEntry?.count || 1),
  };
}

/**
 * Full security check: Turnstile + rate limit
 * Use this in every tool API route
 */
export async function securityCheck(request, tool, maxPerDay = 10) {
  const ip = getClientIP(request);

  // Parse body to get turnstile token and fingerprint
  let body;
  try {
    body = await request.clone().json();
  } catch {
    body = {};
  }

  const turnstileToken = body._turnstile_token;
  const fingerprint = body._fingerprint;

  // Verify Turnstile
  const turnstile = await verifyTurnstile(turnstileToken, ip);
  if (!turnstile.success) {
    return { allowed: false, status: 403, error: turnstile.error };
  }

  // Check rate limit
  const limit = checkRateLimit(ip, fingerprint, tool, maxPerDay);
  if (!limit.allowed) {
    return {
      allowed: false,
      status: 429,
      error: `Daily limit reached (${maxPerDay} checks/day). Get unlimited checks with Sendbox.`,
    };
  }

  return { allowed: true, remaining: limit.remaining, ip };
}
