// Keyword -> URL mapping for auto-linking within prose content.
// Keys are matched case-insensitively. Only the first occurrence per paragraph is linked.
// Keep keys specific enough to avoid false matches.

const internalLinksMap = {
  // Sendbox features
  'dedicated IPs': '/deliverability/dedicated-ips',
  'isolated infrastructure': '/deliverability/isolated-infrastructure',
  'email warmup': '/deliverability/human-like-warmup',
  'AI warmup': '/deliverability/human-like-warmup',
  'mailbox health visibility': '/deliverability/auto-mailbox-protection',
  'per-mailbox reply rate': '/deliverability/auto-mailbox-protection',
  'per-mailbox bounce rate': '/deliverability/auto-mailbox-protection',
  'bounce monitoring': '/deliverability/bounce-monitoring',
  'blacklist monitoring': '/deliverability/blacklist-monitoring',
  'inbox placement testing': '/deliverability/inbox-placement-testing',
  'inbox placement test': '/deliverability/inbox-placement-testing',
  'blacklist check': '/deliverability/blacklist-check',
  'email validation': '/deliverability/email-validation',
  'built-in dialer': '/features/dialer',
  'built-in CRM': '/features/crm',
  'unified inbox': '/features/unified-inbox',
  'A/B testing': '/features/ab-testing',
  'AI reply tagging': '/features/ai-tagging',
  'AI tagging': '/features/ai-tagging',
  'ESP matching': '/features/esp-matching',
  'SEG detection': '/features/seg-detection',
  'lead finder': '/features/lead-finder',
  'CSV import': '/features/csv-import',
  'webhooks': '/features/webhooks',
  'email sequences': '/features/campaigns',
  'cold email campaigns': '/features/campaigns',

  // Solution pages
  'cold email for agencies': '/for-agencies',
  'for agencies': '/for-agencies',
  'for SDR teams': '/for-sdr-teams',
  'for recruiters': '/for-recruiters',

  // Hub pages
  'What is Sendbox': '/what-is-sendbox',

  // Competitor comparisons (only link competitor names when in comparison context)
  'Sendbox vs Instantly': '/sendbox-vs-instantly',
  'Sendbox vs Smartlead': '/sendbox-vs-smartlead',
  'Sendbox vs Lemlist': '/sendbox-vs-lemlist',
  'Sendbox vs Apollo': '/sendbox-vs-apollo',
  'Sendbox vs Reply.io': '/sendbox-vs-replyio',
  'Sendbox vs Saleshandy': '/sendbox-vs-saleshandy',
  'Sendbox vs Woodpecker': '/sendbox-vs-woodpecker',

  // Roundups
  'best cold email software': '/best-cold-email-software',
  'best email warmup tools': '/best-email-warmup-tools',
  'cold email infrastructure': '/best-cold-email-infrastructure',
};

export default internalLinksMap;
