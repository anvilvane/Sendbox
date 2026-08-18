import { NextResponse } from 'next/server';
import { securityCheck } from '@/libs/tool-security';

const SENDKIT_API_URL = 'https://api-2.sendkit.ai/v1/blacklist-check';

export async function POST(request) {
  try {
    // Security: Turnstile + rate limit
    const security = await securityCheck(request, 'blacklist', 10);
    if (!security.allowed) {
      return NextResponse.json({ error: security.error }, { status: security.status });
    }

    const body = await request.json();
    const { email, ip, domain } = body;

    if (!email && !ip && !domain) {
      return NextResponse.json(
        { error: 'Please provide an email, IP address, or domain' },
        { status: 400 }
      );
    }

    const apiKey = process.env.SENDKIT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
    }

    let queryParams = '';
    if (email) queryParams = `email=${encodeURIComponent(email)}`;
    else if (ip) queryParams = `ip=${encodeURIComponent(ip)}`;
    else if (domain) queryParams = `domain=${encodeURIComponent(domain)}`;

    const response = await fetch(`${SENDKIT_API_URL}?${queryParams}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to check blacklist status' },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      ...result,
      remaining_checks: security.remaining,
    });
  } catch (error) {
    console.error('Blacklist check error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
