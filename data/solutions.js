const solutionsData = [
  {
    slug: 'agencies',
    name: 'For Agencies',
    category: 'Solutions',
    headline: 'Cold email infrastructure built for agencies',
    description: 'Run campaigns for multiple clients on dedicated IPs with fully isolated infrastructure. White-label branding is available starting on the Pro plan, and every client keeps a sending reputation that never bleeds into anyone else\'s.',

    benefitsHeadline: 'Add more clients without adding more risk',
    benefitsEyebrow: 'agency features',
    whySectionHeadline: 'The way agencies put Sendbox to work',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'What pulls agencies over to Sendbox',
    detailsEyebrow: 'the infrastructure difference',

    howItWorks: [
      { step: 1, title: 'Onboard clients in minutes', description: 'Spin up a dedicated workspace for each client, connect their mailboxes, bring leads in through CSV import, and set your sending schedule. Every workspace runs on its own dedicated IP from the start.' },
      { step: 2, title: 'Launch campaigns with isolation', description: 'Each client\'s campaigns run on infrastructure that\'s isolated from every other client\'s. A deliverability problem on one account stays contained there, with no shared IP pools and no risk of it spilling over.' },
      { step: 3, title: 'White-label everything', description: 'Custom branding on reports and dashboards is available from the Pro plan onward. Step up to the Agency plan and you also get a dedicated account manager plus 2.5M emails a month.' },
    ],
    useCases: [
      { title: 'Lead generation agencies', description: 'Run campaigns for 10, 50, or well over 100 clients at once. Because every workspace gets its own dedicated IP, one problem client can never burn another client\'s domain reputation.' },
      { title: 'Sales outsourcing firms', description: 'Run SDR teams across several client accounts from one place. A unified inbox, AI reply tagging, and per-campaign analytics make client-by-client reporting possible without jumping between tools.' },
      { title: 'Growth consultancies', description: 'Bring the built-in dialer, CRM, and sequencing together in one platform for every engagement. Webhook integrations handle pushing data into your client\'s CRM automatically.' },
    ],

    competitorCallout: {
      title: 'Your clients deserve dedicated IPs, not a shared pool',
      description: 'Most tools built for agencies still put every client on shared infrastructure, so one client\'s spam complaint drags down deliverability for the rest. Sendbox isolates each workspace behind its own dedicated IP, keeping every client\'s reputation entirely independent of the others.',
      competitors: ['Instantly', 'Smartlead', 'Saleshandy'],
    },
    detailBlocks: [
      {
        title: 'White-label built for agency workflows',
        description: 'The Pro plan includes white-label branding across reports and dashboards, and the Agency plan layers on custom branded reports, a dedicated account manager, and 2.5M emails a month. Saleshandy offers white-label starting at $139/mo, but on shared infrastructure rather than dedicated.',
      },
      {
        title: 'Per-client isolation, not just per-client workspaces',
        description: 'Plenty of tools give you separate workspaces per client while still running them on shared infrastructure underneath. Sendbox takes it a step further and gives each workspace its own dedicated IPs, so if client A gets blacklisted, client B never even notices.',
      },
    ],

    benefits: [
      { title: 'Dedicated IPs per workspace', description: 'Every client sends from an IP that belongs only to them, with no shared pool and no cross-client reputation risk.' },
      { title: 'White-label from Pro plan', description: 'Custom branding on reports and dashboards is available starting on the Pro plan, and the Agency plan adds a dedicated account manager on top.' },
      { title: 'Unlimited mailboxes', description: 'Connect as many mailboxes per client as the work calls for, with no per-seat charges attached.' },
      { title: 'Built-in deliverability suite', description: 'Warmup, validation, inbox placement testing, and blacklist monitoring all ship standard, on every plan.' },
    ],

    faqs: [
      { question: 'How much does Sendbox cost for agencies?', answer: 'White-label branding starts on the Pro plan, which includes 500,000 emails and unlimited leads. Moving up to the Agency plan adds 2.5M emails, custom branded reports, and a dedicated account manager.' },
      { question: 'Can I run multiple clients on Sendbox?', answer: 'Yes. Set up a separate workspace for each client, complete with its own mailboxes, leads, campaigns, and dedicated IPs. One client\'s sending behavior has zero effect on any other client.' },
      { question: 'Is Sendbox better than Instantly for agencies?', answer: 'Sendbox gives every client dedicated IPs and isolated infrastructure on every plan. Instantly, by contrast, runs all accounts through shared IP pools, meaning one client\'s spam complaints can end up hurting deliverability for your other clients too.' },
      { question: 'Does Sendbox charge per seat?', answer: 'No. Pricing is plan-based rather than per seat, so your whole team works from a single plan. Compare that to Lemlist at $109/user/mo or Apollo at $79/user/mo, where costs climb with every added user.' },
      { question: 'What white-label features does Sendbox include?', answer: 'Custom branding across reports and dashboards. The Agency plan goes further with custom branded reports built for client presentations plus a dedicated account manager for hands-on support.' },
    ],

    seo: {
      title: 'Cold Email Software Built for Agencies in 2026',
      description: 'Sendbox for agencies: dedicated IPs per client, white-label branding, and fully isolated infrastructure. Run campaigns for multiple clients without shared IP risk.',
      keywords: ['cold email for agencies', 'cold email tool for agencies', 'cold email agency software', 'white label cold email', 'white label cold email platform', 'sendbox for agencies', 'sendbox', 'best cold email software for agencies', 'cold email tool for lead gen agency', 'agency cold email tool 2026', 'dedicated ip cold email agency', 'cold email whitelabel software', 'multi client cold email', 'cold email infrastructure for agencies', 'lead gen agency tools'],
    },
  },

  {
    slug: 'sdr-teams',
    name: 'For SDR Teams',
    category: 'Solutions',
    headline: 'Cold email that SDR teams can trust to land in primary',
    description: 'Equip your SDR team with dedicated IPs, sequences that optimize themselves, a built-in dialer, and one unified inbox. No shared infrastructure, no gambling on deliverability, every rep sends from IPs that answer to your team alone.',

    benefitsHeadline: 'More pipeline, fewer deliverability fires to put out',
    benefitsEyebrow: 'sdr features',
    whySectionHeadline: 'The way SDR teams put Sendbox to work',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'What pulls SDR teams over to Sendbox',
    detailsEyebrow: 'the infrastructure difference',

    howItWorks: [
      { step: 1, title: 'Connect your team\'s mailboxes', description: 'Add as many Gmail, Outlook, or IMAP accounts as your team needs, with no per-seat charges attached. Warmup kicks off automatically in the background while DNS health checks confirm your SPF, DKIM, and DMARC records are in order.' },
      { step: 2, title: 'Build sequences with A/B testing', description: 'Build multi-step sequences with conditional logic, spintax, and A/B variants at every step. Smart optimization automatically pauses whatever isn\'t working, so your team\'s attention stays on what is.' },
      { step: 3, title: 'Manage replies and call leads', description: 'Every reply funnels into one unified inbox. AI tagging sorts responses by intent automatically (interested, not interested, out of office, and so on), and the built-in dialer lets you call warm leads without leaving the platform.' },
    ],
    useCases: [
      { title: 'Scaling outbound volume', description: 'Teams pushing 50K-500K emails a month need infrastructure built to handle that load. Dedicated IPs paired with sender rotation across unlimited mailboxes let you scale up without torching your domains along the way.' },
      { title: 'Multi-rep team management', description: 'Because there\'s no per-seat pricing, bringing on another SDR adds nothing to your bill on Sendbox. Compare that to Lemlist at $109/user/mo or Apollo at $79/user/mo, where every new hire is a new line item. Your whole team shares a single plan instead.' },
      { title: 'Multichannel with email + calling', description: 'Run your email sequences and place calls through the built-in dialer without switching platforms. Call recordings and health scores keep track of how each rep is actually performing.' },
    ],

    competitorCallout: {
      title: 'Your SDR team deserves infrastructure built to scale with them',
      description: 'Most cold email tools bill per seat and put everyone on shared IPs, so growing from 3 SDRs to 10 multiplies your costs right along with your headcount. Sendbox bills per plan instead of per seat, and every rep still gets their own dedicated IP.',
      competitors: ['Lemlist', 'Apollo', 'Reply.io'],
    },
    detailBlocks: [
      {
        title: 'No per-seat pricing',
        description: 'Sendbox bills per plan, not per user, so a five-person SDR team costs the same as a solo one. That same five-person team on Lemlist\'s Multichannel Expert runs $545/mo (at $109/user), and on Apollo Professional it\'s $395/mo (at $79/user). The gap only grows as your headcount does.',
      },
      {
        title: 'Built-in dialer for warm follow-ups',
        description: 'The moment a lead replies with interest, your SDR can call them straight from Sendbox, no jumping to a separate dialer tool. Call recording, health scores, and analytics all come built in. Most competitors either skip a dialer entirely (Instantly, Woodpecker) or charge extra to unlock one.',
      },
    ],

    benefits: [
      { title: 'No per-seat charges', description: 'Your whole team runs on a single plan, so adding SDRs doesn\'t add to your bill.' },
      { title: 'Dedicated IPs per team', description: 'Your team sends from IPs that belong to your organization alone, with no shared pool touching other companies.' },
      { title: 'Built-in dialer', description: 'Call leads without ever leaving the platform. Call recording, health scores, and analytics all come standard.' },
      { title: 'AI reply tagging', description: 'Replies get sorted by intent automatically, routing hot leads to the right rep without anyone doing it by hand.' },
    ],

    faqs: [
      { question: 'How much does Sendbox cost for an SDR team?', answer: 'The Plus plan covers your entire team, 250,000 emails, 100,000 leads, and dedicated IPs, with no per-seat charges added on. For comparison, Lemlist at $109/user/mo runs $545/mo for a team of 5 SDRs.' },
      { question: 'Does Sendbox have a built-in dialer?', answer: 'Yes, a VoIP dialer ships on every plan. Call leads right from the platform, with call recording, health scores, and performance analytics included, no separate tool required.' },
      { question: 'Can multiple SDRs use Sendbox at the same time?', answer: 'Yes. Every plan supports unlimited team members. Sender rotation spreads sends across mailboxes automatically, and the unified inbox gives managers one place to see every rep\'s replies.' },
      { question: 'Is Sendbox better than Apollo for SDR teams?', answer: 'Apollo brings a 275M+ contact database and sales intelligence features like intent signals to the table. It also charges per user at $79/user/mo, runs on shared infrastructure, and its email tooling is less developed. Sendbox counters with a 350M+ lead database, dedicated IPs, a built-in dialer, and pricing that doesn\'t scale with headcount.' },
      { question: 'How does Sendbox handle team email deliverability?', answer: 'Every account sits on dedicated IPs behind isolated infrastructure. If bounce rates or spam complaints spike, auto mailbox protection pauses sending on its own, and inbox placement testing lets you confirm deliverability before you scale up volume.' },
    ],

    seo: {
      title: 'Cold Email Software for SDR Teams in 2026',
      description: 'Sendbox for SDR teams: dedicated IPs, pricing that doesn\'t scale per seat, a built-in dialer, and AI reply tagging. Scale outbound without shared infrastructure or per-user costs stacking up.',
      keywords: ['cold email for sdr teams', 'sdr cold email tool', 'best cold email software for sdr', 'cold email for sales teams', 'email outreach for sales teams', 'sendbox for sdr', 'sendbox', 'cold email no per seat pricing', 'cold email with dialer', 'sdr outbound tool 2026', 'sales email sequencing', 'cold email platform for sales', 'email sequencing software', 'cold email automation', 'best cold email tool 2026'],
    },
  },

  {
    slug: 'recruiters',
    name: 'For Recruiters',
    category: 'Solutions',
    headline: 'Reach candidates who never see your InMail',
    description: 'Most recruiter outreach never makes it past LinkedIn InMail. Cold email puts you directly in the inbox instead, and dedicated IPs mean your outreach lands in primary rather than spam every time you reach out to a candidate.',

    benefitsHeadline: 'Fill roles faster when your outreach actually gets read',
    benefitsEyebrow: 'recruiter features',
    whySectionHeadline: 'The way recruiters put Sendbox to work',
    whySectionEyebrow: 'workflows',
    detailsHeadline: 'What pulls recruiters over to Sendbox',
    detailsEyebrow: 'the deliverability edge',

    howItWorks: [
      { step: 1, title: 'Import your candidate list', description: 'Upload your candidate list from CSV, validation happens automatically, so every address gets checked before a single email goes out and you never waste outreach on a dead inbox. Import straight from your ATS or from any spreadsheet you\'ve got.' },
      { step: 2, title: 'Build personalized sequences', description: 'Build multi-step sequences using variables like {{firstName}}, {{role}}, and {{company}}. Spintax and conditional logic keep every email reading like it was written for one person, and sends can be scheduled around each candidate\'s timezone.' },
      { step: 3, title: 'Manage responses and follow up', description: 'Candidate replies all land in one unified inbox, and AI tagging sorts them automatically into interested, not now, or wrong person. The built-in dialer lets you call an interested candidate the moment they reply.' },
    ],
    useCases: [
      { title: 'Staffing agencies', description: 'Run outreach for several hiring clients at once. Each client workspace runs on its own dedicated IP, so one client\'s campaign never touches another\'s deliverability, and white-label branding is available from the Pro plan.' },
      { title: 'In-house talent teams', description: 'Layer cold email on top of LinkedIn outreach to reach passive candidates who never open their InMail. Dedicated IPs keep your company\'s domain reputation clean and fully under your own control.' },
      { title: 'Executive search firms', description: 'Low-volume, highly personalized outreach to senior candidates leaves no room for deliverability slip-ups. Dedicated IPs paired with inbox placement testing make sure every email lands in the primary inbox.' },
    ],

    competitorCallout: {
      title: 'Your recruiting emails deserve better than a shared IP pool',
      description: 'General-purpose cold email tools pool IPs across thousands of users, aggressive sales teams included. If anyone sharing that pool gets flagged for spam, your carefully written candidate emails end up in spam right alongside theirs. Sendbox gives recruiters an IP that belongs to them alone.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Email validation catches bad addresses before you send',
        description: 'Recruiter lists sourced from job boards or LinkedIn exports often have shaky email accuracy. Built-in validation checks every address before it gets sent to, cutting out bounces, reputation damage, and outreach wasted on addresses that never existed.',
      },
      {
        title: 'Timezone-aware sending for candidate experience',
        description: 'A candidate is far more likely to respond when your email lands during their working hours. Sendbox reads each candidate\'s timezone from their imported location data and schedules the send to match. First impressions count for a lot in recruiting.',
      },
    ],

    benefits: [
      { title: 'Dedicated IPs', description: 'Recruiting emails go out from IPs used only by your organization, with no shared pool touching sales teams elsewhere on the platform.' },
      { title: 'Email validation built in', description: 'Every candidate email gets verified before it\'s sent, cutting bounces and keeping your domain reputation intact.' },
      { title: 'Unified inbox + AI tagging', description: 'Every candidate reply lands in one place, sorted automatically by intent: interested, not now, or wrong person.' },
      { title: 'Built-in dialer', description: 'Call an interested candidate straight from the platform, no separate phone tool required.' },
    ],

    faqs: [
      { question: 'Can I use Sendbox for recruiting emails?', answer: 'Yes. Sendbox handles any cold email use case, recruiting included. Build candidate sequences with personalization variables, A/B test your subject lines, and manage every reply from one unified inbox.' },
      { question: 'Is cold email effective for recruiting?', answer: 'It reaches the candidates who never open their LinkedIn InMail. Well-targeted, personalized recruiting emails typically pull response rates in the 10-25% range, often outperforming InMail with passive candidates.' },
      { question: 'How does Sendbox protect my domain reputation?', answer: 'Dedicated IPs put your domain reputation entirely in your own hands. Built-in validation heads off bounces before they happen, auto mailbox protection pauses sending if metrics start slipping, and inbox placement testing confirms you\'re landing in primary before you scale up.' },
      { question: 'Can staffing agencies use Sendbox for multiple clients?', answer: 'Yes. Set up a separate workspace per client, each with its own dedicated IP. White-label branding is available from the Pro plan, and the Agency plan adds custom reports plus a dedicated account manager.' },
      { question: 'Does Sendbox integrate with ATS platforms?', answer: 'Sendbox supports webhook integrations plus CSV import and export, so candidate data can move between Sendbox and your ATS through webhooks or a manual CSV transfer. CRM integrations keep lead data in sync with outside systems too.' },
    ],

    seo: {
      title: 'Cold Email for Recruiters: Reach Primary Inbox',
      description: 'Sendbox for recruiters: dedicated IPs, built-in email validation, and timezone-aware sending. Reach candidates who ignore InMail with cold email that actually lands in primary.',
      keywords: ['cold email for recruiters', 'recruiting email tool', 'cold email for staffing agencies', 'recruiter outreach tool', 'email outreach recruiting', 'sendbox for recruiters', 'sendbox', 'cold email for talent acquisition', 'recruiting email software 2026', 'candidate outreach platform', 'staffing agency cold email', 'recruiting email sequences', 'cold email platform for recruiters', 'email automation recruiting', 'best recruiting outreach tool'],
    },
  },
];

export const getSolutionBySlug = (slug) => solutionsData.find((s) => s.slug === slug);
export const solutionSlugs = solutionsData.map((s) => s.slug);
export { solutionsData };
