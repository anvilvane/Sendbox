import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const apiKey = process.env.SENDKIT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
    }

    const { code } = await params;

    if (!code) {
      return NextResponse.json({ error: 'Missing test code' }, { status: 400 });
    }

    const response = await fetch(`https://api-2.sendkit.ai/api/v1/inbox-placement/status/${code}`, {
      method: 'GET',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Inbox placement status error:', errText);
      return NextResponse.json({ error: 'Failed to fetch status' }, { status: response.status });
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Inbox placement status error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
