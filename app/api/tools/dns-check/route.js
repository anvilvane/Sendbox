export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import dns from 'node:dns/promises';
import { securityCheck } from '@/libs/tool-security';

async function lookupTxt(domain) {
  try {
    const records = await dns.resolveTxt(domain);
    return records.map((r) => r.join(''));
  } catch {
    return [];
  }
}

export async function POST(request) {
  try {
    const security = await securityCheck(request, 'dns', 20);
    if (!security.allowed) {
      return NextResponse.json({ error: security.error }, { status: security.status });
    }

    const body = await request.json();
    const { domain } = body;

    if (!domain || typeof domain !== 'string') {
      return NextResponse.json({ error: 'Please provide a domain' }, { status: 400 });
    }

    const cleanDomain = domain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '');

    // SPF
    const rootTxt = await lookupTxt(cleanDomain);
    const spfRecord = rootTxt.find((r) => r.startsWith('v=spf1'));
    const spf = {
      found: !!spfRecord,
      record: spfRecord || null,
      valid: spfRecord ? spfRecord.startsWith('v=spf1') : false,
    };

    // DMARC
    const dmarcTxt = await lookupTxt(`_dmarc.${cleanDomain}`);
    const dmarcRecord = dmarcTxt.find((r) => r.startsWith('v=DMARC1'));
    let dmarcPolicy = null;
    if (dmarcRecord) {
      const pMatch = dmarcRecord.match(/;\s*p=([^;\s]+)/);
      dmarcPolicy = pMatch ? pMatch[1] : null;
    }
    const dmarc = {
      found: !!dmarcRecord,
      record: dmarcRecord || null,
      policy: dmarcPolicy,
    };

    // DKIM - try common selectors
    const selectors = ['google', 'default', 'selector1', 'selector2', 'k1'];
    let dkim = { found: false, selector: null, record: null };

    for (const selector of selectors) {
      const dkimTxt = await lookupTxt(`${selector}._domainkey.${cleanDomain}`);
      const dkimRecord = dkimTxt.find((r) => r.includes('v=DKIM1') || r.includes('k=rsa') || r.includes('p='));
      if (dkimRecord) {
        dkim = { found: true, selector, record: dkimRecord };
        break;
      }
    }

    return NextResponse.json({
      success: true,
      domain: cleanDomain,
      spf,
      dkim,
      dmarc,
      remaining_checks: security.remaining,
    });
  } catch (error) {
    console.error('DNS check error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
