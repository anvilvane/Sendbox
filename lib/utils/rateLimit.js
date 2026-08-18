import { getRedisClient } from '../redis';

/**
 * Check if a request should be rate limited based on fingerprint and IP
 * @param {string} fingerprint - Browser fingerprint
 * @param {string} ip - Client IP address
 * @returns {Promise<boolean>} - Returns true if rate limited, false if allowed
 */
export async function checkRateLimit(fingerprint, ip) {
  const redis = getRedisClient();

  // If Redis is not available, allow the request
  if (!redis) {
    return false;
  }

  try {
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour window
    const maxRequests = 2; // Maximum 2 requests per hour per fingerprint/IP

    // Check both fingerprint and IP
    const fingerprintKey = `sendbox-landing:ratelimit:fingerprint:${fingerprint}`;
    const ipKey = `sendbox-landing:ratelimit:ip:${ip}`;

    // Use pipeline for efficient Redis operations
    const pipeline = redis.pipeline();

    // Get current counts
    pipeline.get(fingerprintKey);
    pipeline.get(ipKey);

    const results = await pipeline.exec();
    const fingerprintCount = parseInt(results[0][1] || '0', 10);
    const ipCount = parseInt(results[1][1] || '0', 10);

    // If either fingerprint or IP has exceeded the limit, rate limit
    if (fingerprintCount >= maxRequests || ipCount >= maxRequests) {
      return true;
    }

    // Increment counters with expiry
    const incrPipeline = redis.pipeline();

    if (fingerprintCount === 0) {
      // First request, set with expiry
      incrPipeline.set(fingerprintKey, 1, 'PX', windowMs);
    } else {
      // Increment existing counter
      incrPipeline.incr(fingerprintKey);
    }

    if (ipCount === 0) {
      // First request, set with expiry
      incrPipeline.set(ipKey, 1, 'PX', windowMs);
    } else {
      // Increment existing counter
      incrPipeline.incr(ipKey);
    }

    await incrPipeline.exec();

    return false; // Not rate limited
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Rate limit check error:', error);
    }
    // On error, allow the request (fail open)
    return false;
  }
}

/**
 * Get the client IP address from the request
 * @param {Request} request - Next.js request object
 * @returns {string} - Client IP address
 */
export function getClientIp(request) {
  // Check various headers for the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback to a default (though this shouldn't happen in production)
  return 'unknown';
}
