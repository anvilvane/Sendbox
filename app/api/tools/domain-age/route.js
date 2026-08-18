import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { domain } = await request.json();
    if (!domain) return NextResponse.json({ error: 'Domain is required' }, { status: 400 });

    const clean = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').trim().toLowerCase();

    // Try RDAP first (modern WHOIS replacement, returns JSON)
    const rdapRes = await fetch(`https://rdap.org/domain/${clean}`, {
      headers: { 'Accept': 'application/rdap+json' },
    });

    if (!rdapRes.ok) {
      return NextResponse.json({ error: 'Could not look up domain. Check the domain name and try again.' }, { status: 404 });
    }

    const data = await rdapRes.json();

    // Extract dates from RDAP events
    let created = null, updated = null, expires = null, registrar = null;

    if (data.events) {
      for (const event of data.events) {
        if (event.eventAction === 'registration') created = event.eventDate;
        if (event.eventAction === 'last changed' || event.eventAction === 'last update of RDAP database') updated = event.eventDate;
        if (event.eventAction === 'expiration') expires = event.eventDate;
      }
    }

    // Extract registrar
    if (data.entities) {
      for (const entity of data.entities) {
        if (entity.roles?.includes('registrar')) {
          registrar = entity.vcardArray?.[1]?.find(v => v[0] === 'fn')?.[3] || entity.handle || null;
        }
      }
    }

    // Calculate age
    let ageInDays = null;
    let ageText = null;
    if (created) {
      const createdDate = new Date(created);
      const now = new Date();
      ageInDays = Math.floor((now - createdDate) / (1000 * 60 * 60 * 24));
      const years = Math.floor(ageInDays / 365);
      const months = Math.floor((ageInDays % 365) / 30);
      const days = ageInDays % 30;
      const parts = [];
      if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
      if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
      if (days > 0 || parts.length === 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
      ageText = parts.join(', ');
    }

    return NextResponse.json({
      success: true,
      domain: clean,
      created,
      updated,
      expires,
      registrar,
      ageInDays,
      ageText,
    });
  } catch (error) {
    console.error('Domain age error:', error);
    return NextResponse.json({ error: 'Failed to check domain age' }, { status: 500 });
  }
}
