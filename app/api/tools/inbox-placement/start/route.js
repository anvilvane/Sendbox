import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const apiKey = process.env.SENDKIT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
    }

    const body = await request.json();
    const { test_code, complete_early, expected_senders } = body;

    if (!test_code) {
      return NextResponse.json({ error: 'Missing test_code' }, { status: 400 });
    }

    const response = await fetch('https://api-2.sendkit.ai/api/v1/inbox-placement/start', {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test_code, complete_early: complete_early ?? true, expected_senders: expected_senders ?? 1 }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Inbox placement start error:', errText);
      return NextResponse.json({ error: 'Failed to start test' }, { status: response.status });
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Inbox placement start error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
