import { NextResponse } from 'next/server';
import { securityCheck } from '@/libs/tool-security';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export async function POST(request) {
  try {
    const security = await securityCheck(request, 'validate', 20);
    if (!security.allowed) {
      return NextResponse.json({ error: security.error }, { status: security.status });
    }

    const apiKey = process.env.ENRICH_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 500 });
    }

    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Please provide an email address' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const formatValid = EMAIL_REGEX.test(cleanEmail);

    if (!formatValid) {
      return NextResponse.json({
        success: true,
        email: cleanEmail,
        format_valid: false,
        mx_found: false,
        mx_records: [],
        status: 'undeliverable',
        reason: 'Invalid email format',
        remaining_checks: security.remaining,
      });
    }

    const response = await fetch('https://dev.enrich.so/api/v3/email-validation', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: cleanEmail }),
    });

    if (!response.ok) {
      console.error('Enrich API error:', await response.text());
      return NextResponse.json({ error: 'Failed to validate email' }, { status: 500 });
    }

    const data = await response.json();
    const result = data.data;

    // Map Enrich result to our format
    const statusMap = {
      valid: 'deliverable',
      invalid: 'undeliverable',
      catch_all: 'risky',
      unknown: 'unknown',
    };

    const status = statusMap[result?.result] || 'unknown';

    return NextResponse.json({
      success: true,
      email: cleanEmail,
      format_valid: true,
      mx_found: status !== 'undeliverable',
      mx_records: [],
      status,
      reason: result?.message || 'Verification complete',
      is_catch_all: result?.isCatchAll || false,
      provider: result?.provider || null,
      confidence: result?.confidence || null,
      remaining_checks: security.remaining,
    });
  } catch (error) {
    console.error('Email validation error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
