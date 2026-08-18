import Redis from 'ioredis';

let redis = null;

export function getRedisClient() {
  if (!redis) {
    const redisUrl = process.env.REDIS_URL;
    const isDev = process.env.NODE_ENV === 'development';

    if (!redisUrl) {
      if (isDev) {
        console.warn('REDIS_URL not configured. Rate limiting will be disabled.');
      }
      return null;
    }

    try {
      redis = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
        retryStrategy(times) {
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
      });

      redis.on('error', (err) => {
        if (isDev) {
          console.error('Redis connection error:', err);
        }
      });

      redis.on('connect', () => {
        if (isDev) {
          console.log('Redis connected successfully');
        }
      });
    } catch (error) {
      if (isDev) {
        console.error('Failed to initialize Redis:', error);
      }
      return null;
    }
  }

  return redis;
}
