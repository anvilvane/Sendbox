import Redis from "ioredis";

let client = null;

export function getStatusRedis() {
  if (client) return client;
  const url = process.env.REDIS_STATUS_URL;
  if (!url) return null;

  client = new Redis(url, {
    maxRetriesPerRequest: 2,
    connectTimeout: 4000,
    retryStrategy(times) {
      return Math.min(times * 100, 1500);
    },
  });
  client.on("error", (err) => {
    if (process.env.NODE_ENV === "development") {
      console.error("status redis error:", err.message);
    }
  });
  return client;
}

export function dayKeysForLast(days = 90) {
  const keys = [];
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setUTCDate(now.getUTCDate() - i);
    keys.push({
      date: d.toISOString().slice(0, 10),
      key: `status:day:${d.toISOString().slice(0, 10)}`,
    });
  }
  return keys;
}
