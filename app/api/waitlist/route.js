import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/utils/rateLimit';

export async function POST(request) {
  const timestamp = new Date().toISOString();
  const isDev = process.env.NODE_ENV === 'development';

  try {
    const body = await request.json();
    const { email, fingerprint } = body;

    if (isDev) {
      console.log(`[${timestamp}] Waitlist request received for email: ${email}, fingerprint: ${fingerprint}`);
    }

    if (!email) {
      if (isDev) {
        console.log(`[${timestamp}] Error: Email is required`);
      }
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get client IP
    const clientIp = getClientIp(request);

    if (isDev) {
      console.log(`[${timestamp}] Client IP: ${clientIp}`);
    }

    // Check rate limit based on fingerprint and IP
    const isRateLimited = await checkRateLimit(fingerprint, clientIp);

    if (isRateLimited) {
      if (isDev) {
        console.log(`[${timestamp}] Rate limited: fingerprint=${fingerprint}, ip=${clientIp}`);
      }
      // Return success to the frontend without actually submitting
      // This prevents showing error messages to legitimate users
      return NextResponse.json({ success: true, rateLimited: true });
    }

    if (isDev) {
      console.log(`[${timestamp}] Sending request to Sendbox API...`);
    }

    const res = await fetch(`${process.env.SENDBOX_API_URL || 'http://localhost:4000'}/marketing-leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'waitlist', name: body.name, email: body.email, company: body.company || undefined }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      if (isDev) {
        console.error(`[${timestamp}] Sendbox API error (${res.status}):`, data);
      }
      return NextResponse.json(data, { status: res.status });
    }

    if (isDev) {
      console.log(`[${timestamp}] Successfully added to waitlist: ${email}`, data);
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    if (isDev) {
      console.error(`[${timestamp}] Waitlist error:`, error.message || error);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
