import { NextResponse } from "next/server";
import { getStatusRedis, dayKeysForLast } from "@/lib/redis-status";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const redis = getStatusRedis();
  if (!redis) {
    return NextResponse.json(
      { error: "REDIS_STATUS_URL not configured" },
      { status: 500 }
    );
  }

  try {
    const dayEntries = dayKeysForLast(90);
    const [latestRaw, ...dayRaw] = await redis.mget(
      "status:latest",
      ...dayEntries.map((d) => d.key)
    );

    const latest = latestRaw ? JSON.parse(latestRaw) : null;
    const days = dayEntries.map((entry, i) => {
      const raw = dayRaw[i];
      return raw ? { ...JSON.parse(raw), date: entry.date } : { date: entry.date, empty: true };
    });

    return NextResponse.json(
      { latest, days, serverTime: Date.now() },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "redis read failed", detail: err.message },
      { status: 500 }
    );
  }
}
