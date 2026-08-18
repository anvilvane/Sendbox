const solutionsData = [
  {
    slug: 'agencies',
    name: 'For Agencies',
    category: 'Solutions',
    headline: 'Cold email infrastructure built for agencies',
    description: 'Run campaigns for multiple clients on dedicated IPs with isolated infrastructure. White-label from the Pro plan at $499/mo. Each client gets their own sending reputation that never bleeds into another.',

    benefitsHeadline: 'Scale clients without scaling risk',
    benefitsEyebrow: 'agency features',
    whySectionHeadline: 'How agencies use Sendbox',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'Why agencies switch to Sendbox',
    detailsEyebrow: 'the infrastructure difference',

    howItWorks: [
      { step: 1, title: 'Onboard clients in minutes', description: 'Create workspaces per client. Connect their mailboxes, import leads via CSV, and configure sending schedules. Each workspace runs on its own dedicated IP.' },
      { step: 2, title: 'Launch campaigns with isolation', description: 'Every client sends from isolated infrastructure. If one client has deliverability issues, your other clients are unaffected. No shared IP pools, no cross-contamination.' },
      { step: 3, title: 'White-label everything', description: 'Custom branding on reports and dashboards from the Pro plan at $499/mo. The Agency plan at $899/mo adds a dedicated account manager and 2.5M emails per month.' },
    ],
    useCases: [
      { title: 'Lead generation agencies', description: 'Run cold email campaigns for 10, 50, or 100+ clients simultaneously. Dedicated IPs per workspace mean one bad client never burns another client\'s domain reputation.' },
      { title: 'Sales outsourcing firms', description: 'Manage SDR teams across multiple client accounts. Unified inbox, AI reply tagging, and per-campaign analytics let you report results per client without switching tools.' },
      { title: 'Growth consultancies', description: 'Combine Sendbox\'s built-in dialer, CRM, and sequences into a single platform for each engagement. Webhook integrations push data to your client\'s CRM automatically.' },
    ],

    competitorCallout: {
      title: 'Your clients deserve their own IPs. Not shared ones.',
      description: 'Most agency tools run all clients on shared infrastructure. One client sends spam, every client\'s deliverability drops. Sendbox isolates each workspace on dedicated IPs. Your clients\' reputations are fully independent.',
      competitors: ['Instantly', 'Smartlead', 'Saleshandy'],
    },
    detailBlocks: [
      {
        title: 'White-label from $499/mo',
        description: 'The Pro plan includes white-label branding on reports and dashboards. The Agency plan at $899/mo adds custom branded reports, a dedicated account manager, and 2.5M emails per month. Competitors like Saleshandy offer white-label from $139/mo but on shared infrastructure.',
      },
      {
        title: 'Per-client isolation, not just per-client workspaces',
        description: 'Other tools offer multi-client workspaces but share the underlying infrastructure. Sendbox goes further: each workspace gets its own dedicated IPs. If client A gets blacklisted, client B is completely unaffected.',
      },
    ],

    benefits: [
      { title: 'Dedicated IPs per workspace', description: 'Each client runs on their own IP. No shared pools, no cross-client reputation risk.' },
      { title: 'White-label from Pro plan', description: 'Custom branding on reports and dashboards starting at $499/mo. Agency plan adds dedicated account manager.' },
      { title: 'Unlimited mailboxes', description: 'Connect as many email accounts as needed per client. No per-seat charges.' },
      { title: 'Built-in deliverability suite', description: 'Warmup, validation, inbox placement testing, and blacklist monitoring included on every plan.' },
    ],

    faqs: [
      { question: 'How much does Sendbox cost for agencies?', answer: 'White-label starts on the Pro plan at $499/mo with 500,000 emails and unlimited leads. The Agency plan at $899/mo adds 2.5M emails, custom branded reports, and a dedicated account manager.' },
      { question: 'Can I run multiple clients on Sendbox?', answer: 'Yes. Create separate workspaces per client, each with its own mailboxes, leads, campaigns, and dedicated IPs. One client\'s sending behavior never affects another.' },
      { question: 'Is Sendbox better than Instantly for agencies?', answer: 'Sendbox offers dedicated IPs and isolated infrastructure per client on every plan. Instantly runs all accounts on shared IP pools, so one client\'s spam complaints can affect your other clients\' deliverability.' },
      { question: 'Does Sendbox charge per seat?', answer: 'No. Sendbox uses plan-based pricing, not per-seat. Your entire team accesses the platform on a single plan. Compare this to Lemlist at $109/user/mo or Apollo at $79/user/mo.' },
      { question: 'What white-label features does Sendbox include?', answer: 'Custom branding on reports and dashboards. The Agency plan also includes custom branded reports for client presentations and a dedicated account manager for hands-on support.' },
    ],

    seo: {
      title: 'Best Cold Email Tool for Agencies in 2026',
      description: 'Sendbox for agencies: dedicated IPs per client, white-label from $499/mo, isolated infrastructure. Run campaigns for multiple clients without shared IP risk.',
      keywords: ['cold email for agencies', 'cold email tool for agencies', 'cold email agency software', 'white label cold email', 'white label cold email platform', 'sendbox for agencies', 'sendbox', 'best cold email software for agencies', 'cold email tool for lead gen agency', 'agency cold email tool 2026', 'dedicated ip cold email agency', 'cold email whitelabel software', 'multi client cold email', 'cold email infrastructure for agencies', 'lead gen agency tools'],
    },
  },

  {
    slug: 'sdr-teams',
    name: 'For SDR Teams',
    category: 'Solutions',
    headline: 'Cold email that SDR teams can trust to land in primary',
    description: 'Give your SDR team dedicated IPs, auto-optimizing sequences, a built-in dialer, and a unified inbox. No shared infrastructure, no deliverability lottery. Every rep sends from IPs that only your team controls.',

    benefitsHeadline: 'More pipeline, less deliverability headaches',
    benefitsEyebrow: 'sdr features',
    whySectionHeadline: 'How SDR teams use Sendbox',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'Why SDR teams switch to Sendbox',
    detailsEyebrow: 'the infrastructure difference',

    howItWorks: [
      { step: 1, title: 'Connect your team\'s mailboxes', description: 'Add unlimited Gmail, Outlook, or IMAP accounts. No per-seat charges. Warmup runs automatically in the background. DNS health checks validate SPF, DKIM, and DMARC.' },
      { step: 2, title: 'Build sequences with A/B testing', description: 'Create multi-step sequences with conditional logic, spintax, and A/B variants per step. Smart optimization auto-pauses underperforming variants so your team focuses on what works.' },
      { step: 3, title: 'Manage replies and call leads', description: 'All replies land in a unified inbox. AI tagging auto-categorizes responses by intent (interested, not interested, out of office, etc.). Use the built-in dialer to call warm leads directly.' },
    ],
    useCases: [
      { title: 'Scaling outbound volume', description: 'SDR teams sending 50K-500K emails per month need infrastructure that can handle it. Sendbox\'s dedicated IPs and sender rotation across unlimited mailboxes let you scale without burning domains.' },
      { title: 'Multi-rep team management', description: 'No per-seat pricing means adding a new SDR costs $0 on Sendbox. Compare that to Lemlist ($109/user/mo) or Apollo ($79/user/mo). Your entire team shares one plan.' },
      { title: 'Multichannel with email + calling', description: 'Run email sequences and use the built-in dialer from the same platform. No need for a separate calling tool. Call recordings and health scores track rep performance.' },
    ],

    competitorCallout: {
      title: 'Your SDR team deserves infrastructure that scales',
      description: 'Most cold email tools charge per seat and run everyone on shared IPs. When your team grows from 3 to 10 SDRs, your costs multiply. Sendbox charges per plan, not per seat, and gives every rep dedicated IPs.',
      competitors: ['Lemlist', 'Apollo', 'Reply.io'],
    },
    detailBlocks: [
      {
        title: 'No per-seat pricing',
        description: 'Sendbox charges per plan, not per user. A team of 5 SDRs on Sendbox Plus costs $249/mo total. That same team on Lemlist Multichannel Expert costs $545/mo ($109/user). On Apollo Professional, $395/mo ($79/user). The savings compound as your team grows.',
      },
      {
        title: 'Built-in dialer for warm follow-ups',
        description: 'When a lead replies positively, your SDR can call them directly from Sendbox. No switching to a separate dialer tool. Call recording, health scores, and analytics are built in. Most competitors either lack a dialer (Instantly, Woodpecker) or charge extra for it.',
      },
    ],

    benefits: [
      { title: 'No per-seat charges', description: 'Entire team on one plan. Add SDRs without increasing costs. $249/mo covers your whole team.' },
      { title: 'Dedicated IPs per team', description: 'Your team sends from IPs that only your organization controls. No shared pools with other companies.' },
      { title: 'Built-in dialer', description: 'Call leads directly from the platform. Call recording, health scores, and analytics included.' },
      { title: 'AI reply tagging', description: 'Auto-categorize replies by intent. Route hot leads to the right rep. Skip the manual sorting.' },
    ],

    faqs: [
      { question: 'How much does Sendbox cost for an SDR team?', answer: 'The Plus plan at $249/mo covers your entire team with 250,000 emails, 100,000 leads, and dedicated IPs. No per-seat charges. Compare: Lemlist at $109/user/mo costs $545/mo for 5 SDRs.' },
      { question: 'Does Sendbox have a built-in dialer?', answer: 'Yes. Sendbox includes a VoIP dialer on every plan. Call leads directly from the platform with call recording, health scores, and performance analytics. No separate tool needed.' },
      { question: 'Can multiple SDRs use Sendbox at the same time?', answer: 'Yes. Unlimited team members on every plan. Sender rotation distributes emails across mailboxes. The unified inbox lets managers see all replies across all reps in one place.' },
      { question: 'Is Sendbox better than Apollo for SDR teams?', answer: 'Apollo has a 275M+ contact database with sales intelligence features like intent signals. But Apollo charges per user ($79/user/mo), uses shared infrastructure, and has less mature email features. Sendbox offers a 350M+ lead database, dedicated IPs, a built-in dialer, and no per-seat pricing.' },
      { question: 'How does Sendbox handle team email deliverability?', answer: 'Every account runs on dedicated IPs with isolated infrastructure. Auto mailbox protection pauses sending if bounce rates or spam complaints spike. Inbox placement testing lets you verify deliverability before scaling.' },
    ],

    seo: {
      title: 'Best Cold Email Tool for SDR Teams in 2026',
      description: 'Sendbox for SDR teams: dedicated IPs, no per-seat pricing, built-in dialer, AI reply tagging. Scale outbound without shared infrastructure or per-user costs.',
      keywords: ['cold email for sdr teams', 'sdr cold email tool', 'best cold email software for sdr', 'cold email for sales teams', 'email outreach for sales teams', 'sendbox for sdr', 'sendbox', 'cold email no per seat pricing', 'cold email with dialer', 'sdr outbound tool 2026', 'sales email sequencing', 'cold email platform for sales', 'email sequencing software', 'cold email automation', 'best cold email tool 2026'],
    },
  },

  {
    slug: 'recruiters',
    name: 'For Recruiters',
    category: 'Solutions',
    headline: 'Reach candidates who never see your InMail',
    description: 'Most recruiter outreach dies in LinkedIn InMail. Cold email gets you into the inbox directly. Sendbox gives recruiters dedicated IPs so your emails land in primary, not spam, every time you reach out to a candidate.',

    benefitsHeadline: 'Fill roles faster with email that actually arrives',
    benefitsEyebrow: 'recruiter features',
    whySectionHeadline: 'How recruiters use Sendbox',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'Why recruiters choose Sendbox',
    detailsEyebrow: 'the deliverability edge',

    howItWorks: [
      { step: 1, title: 'Import your candidate list', description: 'Upload candidates from CSV with email validation built in. Sendbox checks every email before sending, so you never waste outreach on invalid addresses. Import from your ATS or any spreadsheet.' },
      { step: 2, title: 'Build personalized sequences', description: 'Create multi-step email sequences with variables like {{firstName}}, {{role}}, {{company}}. Spintax and conditional logic make each email feel one-to-one. Set timezone-aware sending schedules.' },
      { step: 3, title: 'Manage responses and follow up', description: 'All candidate replies land in one unified inbox. AI tagging auto-sorts responses (interested, not now, wrong person). Use the built-in dialer to call interested candidates immediately.' },
    ],
    useCases: [
      { title: 'Staffing agencies', description: 'Run outreach for multiple hiring clients simultaneously. Each client workspace runs on dedicated IPs, so one client\'s campaign never affects another\'s deliverability. White-label available from $499/mo.' },
      { title: 'In-house talent teams', description: 'Supplement LinkedIn outreach with cold email to reach passive candidates who ignore InMail. Dedicated IPs mean your company\'s domain reputation stays clean and under your control.' },
      { title: 'Executive search firms', description: 'Personalized, low-volume outreach to senior candidates requires perfect deliverability. Dedicated IPs and inbox placement testing ensure every email reaches the primary inbox.' },
    ],

    competitorCallout: {
      title: 'Your recruiting emails deserve better than shared IPs',
      description: 'Generic cold email tools share IP pools across thousands of users, including aggressive sales teams. If someone else on your pool gets flagged for spam, your carefully crafted candidate emails end up in spam too. Sendbox gives recruiters their own dedicated IPs.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Email validation catches bad addresses before you send',
        description: 'Recruiters often work with lists from job boards or LinkedIn exports where email accuracy varies. Sendbox\'s built-in email validation checks every address before sending. No bounces, no reputation damage, no wasted outreach.',
      },
      {
        title: 'Timezone-aware sending for candidate experience',
        description: 'Candidates are more likely to respond when your email arrives during their working hours. Sendbox detects each candidate\'s timezone from their imported location data and schedules sends accordingly. First impressions matter in recruiting.',
      },
    ],

    benefits: [
      { title: 'Dedicated IPs', description: 'Your recruiting emails send from IPs that only your organization uses. No shared pools with sales teams.' },
      { title: 'Email validation built in', description: 'Verify every candidate email before sending. Reduce bounces and protect your domain reputation.' },
      { title: 'Unified inbox + AI tagging', description: 'All candidate replies in one place. AI auto-sorts by intent: interested, not now, wrong person.' },
      { title: 'Built-in dialer', description: 'Call interested candidates directly from the platform. No switching to a separate phone tool.' },
    ],

    faqs: [
      { question: 'Can I use Sendbox for recruiting emails?', answer: 'Yes. Sendbox works for any cold email use case including recruiting. Build candidate sequences with personalization variables, A/B test subject lines, and manage all replies in a unified inbox.' },
      { question: 'Is cold email effective for recruiting?', answer: 'Cold email reaches candidates who ignore LinkedIn InMail. Response rates for well-targeted, personalized recruiting emails typically range from 10-25%, often higher than InMail response rates for passive candidates.' },
      { question: 'How does Sendbox protect my domain reputation?', answer: 'Dedicated IPs mean your domain reputation is entirely under your control. Built-in email validation prevents bounces. Auto mailbox protection pauses sending if metrics degrade. Inbox placement testing verifies you land in primary before scaling.' },
      { question: 'Can staffing agencies use Sendbox for multiple clients?', answer: 'Yes. Create separate workspaces per client with dedicated IPs for each. White-label is available from the Pro plan at $499/mo. The Agency plan at $899/mo adds custom reports and a dedicated account manager.' },
      { question: 'Does Sendbox integrate with ATS platforms?', answer: 'Sendbox supports webhook integrations and CSV import/export. You can push candidate data between Sendbox and your ATS via webhooks or manual CSV transfer. CRM integrations sync lead data with external systems.' },
    ],

    seo: {
      title: 'Cold Email for Recruiters: Land in Primary',
      description: 'Sendbox for recruiters: dedicated IPs, email validation, timezone-aware sending. Reach candidates who ignore InMail with cold email that lands in primary.',
      keywords: ['cold email for recruiters', 'recruiting email tool', 'cold email for staffing agencies', 'recruiter outreach tool', 'email outreach recruiting', 'sendbox for recruiters', 'sendbox', 'cold email for talent acquisition', 'recruiting email software 2026', 'candidate outreach platform', 'staffing agency cold email', 'recruiting email sequences', 'cold email platform for recruiters', 'email automation recruiting', 'best recruiting outreach tool'],
    },
  },
];

export const getSolutionBySlug = (slug) => solutionsData.find((s) => s.slug === slug);
export const solutionSlugs = solutionsData.map((s) => s.slug);
export { solutionsData };
