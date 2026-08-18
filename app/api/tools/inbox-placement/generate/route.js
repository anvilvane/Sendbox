import { NextResponse } from 'next/server';
import { securityCheck } from '@/libs/tool-security';

export async function POST(request) {
  try {
    const security = await securityCheck(request, 'inbox-placement', 3);
    if (!security.allowed) {
      return NextResponse.json({ error: security.error }, { status: security.status });
    }

    const apiKey = process.env.SENDKIT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
    }

    const body = await request.json();
    const { types } = body;

    const response = await fetch('https://api-2.sendkit.ai/api/v1/inbox-placement/generate', {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ types: types || ['personal_gmail', 'personal_outlook', 'business_gmail', 'business_outlook'] }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Inbox placement generate error:', errText);
      return NextResponse.json({ error: 'Failed to generate test' }, { status: response.status });
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      ...result,
      remaining_tests: security.remaining,
    });
  } catch (error) {
    console.error('Inbox placement generate error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
