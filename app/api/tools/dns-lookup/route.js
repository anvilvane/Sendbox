import { NextResponse } from 'next/server';
import dns from 'dns/promises';

export async function POST(request) {
  try {
    const { domain } = await request.json();
    if (!domain) return NextResponse.json({ error: 'Domain is required' }, { status: 400 });

    const clean = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim().toLowerCase();

    const results = {};

    // Fetch all record types in parallel
    const [mx, a, aaaa, cname, txt, ns] = await Promise.allSettled([
      dns.resolveMx(clean),
      dns.resolve4(clean),
      dns.resolve6(clean),
      dns.resolveCname(clean),
      dns.resolveTxt(clean),
      dns.resolveNs(clean),
    ]);

    results.mx = mx.status === 'fulfilled' ? mx.value.sort((a, b) => a.priority - b.priority) : [];
    results.a = a.status === 'fulfilled' ? a.value : [];
    results.aaaa = aaaa.status === 'fulfilled' ? aaaa.value : [];
    results.cname = cname.status === 'fulfilled' ? cname.value : [];
    results.txt = txt.status === 'fulfilled' ? txt.value.map(r => r.join('')) : [];
    results.ns = ns.status === 'fulfilled' ? ns.value : [];

    return NextResponse.json({ success: true, domain: clean, records: results });
  } catch (error) {
    console.error('DNS lookup error:', error);
    return NextResponse.json({ error: 'Failed to look up DNS records' }, { status: 500 });
  }
}
