// Deliverability page data for SEO landing pages

export const deliverabilityData = [
  // Infrastructure
  {
    slug: 'dedicated-ips',
    name: 'Dedicated IPs',
    category: 'Infrastructure',
    headline: 'One IP, one reputation, no shared risk.',
    description: 'Each Sendbox account gets an IP address that belongs to it exclusively. That means your inbox placement rises and falls with your own sending habits, never with whatever a stranger sharing your plan did last week.',
    icon: 'GlobeIcon',
    benefitsHeadline: 'A reputation that answers to you alone.',
    benefitsEyebrow: 'ip isolation',
    whySectionHeadline: 'Every account gets its own IP, no exceptions.',
    whySectionEyebrow: 'dedicated sending',
    detailsHeadline: 'Skip the shared IP, skip the shared risk.',
    detailsEyebrow: 'reputation control',
    howItWorks: [
      { step: 1, title: 'IP assigned at signup', description: 'As soon as your account exists, Sendbox provisions an IP address that\'s yours and only yours, no sharing, no pooling with anyone else.' },
      { step: 2, title: 'Sticky hash assignment per mailbox', description: 'A hash-based system permanently ties each mailbox to one specific IP. Because that mailbox always sends from the same address, the reputation signals it builds stay consistent over time.' },
      { step: 3, title: 'Reputation reflects your sending', description: 'Clean sending habits earn good deliverability, and sloppy lists earn bad deliverability, but either outcome traces back to your own practices, never to a stranger\'s spam run.' },
    ],
    useCases: [
      { title: 'Agency client isolation', description: 'Assign a dedicated IP to each client, so when one of them tries an aggressive angle, none of your other clients feel it.' },
      { title: 'Enterprise audit requirements', description: 'Security teams often need to trace exactly which IP sent which email. Sticky IP assignment makes that audit trail straightforward to produce.' },
      { title: 'Multi-mailbox campaigns', description: 'Running dozens of mailboxes at once? Each one maps permanently to a single IP, letting reputation build steadily instead of resetting.' },
    ],
    competitorCallout: {
      title: 'Dedicated IPs on every tier, not reserved for enterprise',
      description: 'Most cold email platforms gate dedicated IPs behind an enterprise tier, or skip the feature altogether. Sendbox includes them on every plan from Starter through Power, because reputation isolation shouldn\'t hinge on how big your budget is.',
      competitors: ['Instantly', 'Smartlead'],
    },
    detailBlocks: [
      {
        title: 'Shared IPs are a gamble with your inbox placement',
        description: 'On shared infrastructure, your emails go out from the same IP as hundreds of other accounts. Let one of them get blacklisted for spam, and suddenly your carefully written outreach ends up in spam too, through no fault of your own, just bad luck sharing an address with someone who did the wrong thing. Dedicated IPs remove that risk from the equation entirely.',
      },
      {
        title: 'Multi-IP support with permanent mailbox mapping',
        description: 'An account can hold multiple dedicated IPs, and a sticky hash system permanently maps each mailbox to one of them, keeping reputation signals steady over time. Sendbox deliberately doesn\'t rotate IPs automatically: a consistent mailbox-to-IP pairing gives ESPs a clean, predictable pattern to evaluate, which works in your favor.',
      },
    ],
    benefits: [
      { title: 'Total reputation isolation', description: 'Nothing another sender does can touch your deliverability. Full stop.' },
      { title: 'Included on every plan', description: 'Dedicated IPs are baked into the infrastructure from day one, not something sold separately as an upgrade.' },
      { title: 'Sticky IP assignment', description: 'A hash-based system permanently pairs each mailbox with one IP, with no random rotation involved.' },
      { title: 'Multi-IP support', description: 'Accounts can hold several dedicated IPs at once, each with its own permanently assigned set of mailboxes.' },
    ],
    faqs: [
      { question: 'Do all Sendbox plans include a dedicated IP?', answer: 'Yes, every plan includes a dedicated IP at no extra charge. It\'s part of the core infrastructure rather than something you pay more to unlock.' },
      { question: 'How does Sendbox assign mailboxes to IPs?', answer: 'Through a sticky hash assignment system: each mailbox gets permanently mapped to one specific IP, and that mapping never changes, keeping your sending pattern consistent from an ESP\'s point of view.' },
      { question: 'What is the difference between a shared IP and a dedicated IP for email?', answer: 'A shared IP is used by several senders at once, so if any of them send spam or hit a spam trap, your reputation takes the hit alongside theirs. A dedicated IP belongs to you exclusively, which means your inbox placement depends on nothing but your own practices.' },
      { question: 'Can I get more than one dedicated IP?', answer: 'Yes. Accounts can hold multiple dedicated IPs, with each mailbox permanently assigned to one of them through hash-based mapping.' },
    ],
    seo: {
      title: 'Dedicated IP Cold Email Sending',
      description: 'Sendbox assigns every account its own dedicated IP for cold email sending, keeping your sender reputation fully isolated from other users so inbox placement depends only on you.',
      keywords: ['dedicated ip cold email', 'cold email dedicated ip', 'dedicated ip email sending', 'dedicated vs shared ip cold email', 'why dedicated ip for cold email', 'sendbox dedicated ip', 'dedicated ip address email', 'email sender reputation isolation', 'cold email deliverability 2026', 'dedicated ip vs shared ip', 'ip reputation cold email', 'sendbox', 'cold email infrastructure', 'dedicated sending ip'],
    },
  },
  {
    slug: 'isolated-infrastructure',
    name: 'Isolated Infrastructure',
    category: 'Infrastructure',
    headline: 'Nothing about your sending environment is shared.',
    description: 'Isolated infrastructure underpins every Sendbox account: your IPs, your sending activity, and your reputation all stay separate from every other user on the platform.',
    icon: 'HardDrivesIcon',
    benefitsHeadline: 'No cross-contamination, by default.',
    benefitsEyebrow: 'full isolation',
    whySectionHeadline: 'Every account gets its own servers.',
    whySectionEyebrow: 'environment design',
    detailsHeadline: 'Shared platforms carry a weakness that costs you later.',
    detailsEyebrow: 'architecture matters',
    howItWorks: [
      { step: 1, title: 'Isolated from day one', description: 'Your sending environment is fully separate from every other user the moment your account exists, with no resources shared between accounts.' },
      { step: 2, title: 'Hard boundaries between accounts', description: 'Emails, lead data, and sending infrastructure all sit behind strict isolation boundaries, with no crossover into any other account.' },
      { step: 3, title: 'Metrics that reflect reality', description: 'Your bounce rate, engagement numbers, and spam complaints belong entirely to you, with none of the noise other senders on the platform might generate.' },
    ],
    useCases: [
      { title: 'Agencies with multiple clients', description: 'Client A tries something risky while Client B is mid-campaign with a Fortune 500 account. On a shared platform, A\'s gamble drags B down too. On Sendbox, they might as well be on different platforms entirely.' },
      { title: 'Regulated industries', description: 'Finance, healthcare, and legal teams often need to demonstrate that their email infrastructure doesn\'t touch anyone else\'s. Sendbox makes that easy to prove.' },
      { title: 'Mission-critical campaigns', description: 'When your biggest deal of the quarter hinges on one email landing in the inbox, sharing infrastructure with an unknown sender simply isn\'t a risk worth taking.' },
    ],
    competitorCallout: {
      title: 'Why agencies actually leave shared platforms behind',
      description: 'Shared infrastructure is the quiet weak point in most cold email platforms: your account runs through the same servers as everyone else\'s, so when another user gets flagged, your deliverability can suffer right along with them. Sendbox isolates every account by default, not as something reserved for a premium tier.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'What "shared infrastructure" actually costs you',
        description: 'Most cold email tools pool their users onto shared servers and IP ranges. The instant any account in that pool buys a bad list, hits a spam trap, or gets reported, the whole pool absorbs the reputation damage. Your inbox placement can drop for reasons that have nothing to do with you, meaning you could write a flawless email and still land in spam because of someone else\'s mistake.',
      },
      {
        title: 'True isolation means separate everything',
        description: 'Sendbox doesn\'t hand you a dedicated IP and call the job done. Your account gets its own servers, its own IPs, and its own resources, with no sending infrastructure shared between accounts anywhere in the stack. Isolation, here, means exactly what it says.',
      },
    ],
    benefits: [
      { title: 'Complete environment isolation', description: 'Servers, IPs, and resources are all fully separate from every other account on the platform.' },
      { title: 'Zero cross-contamination risk', description: 'If another user gets blacklisted, your sending doesn\'t feel a thing.' },
      { title: 'Data separation', description: 'Lead data and email content never sit alongside another account\'s data.' },
      { title: 'Consistent inbox placement', description: 'Results track your own sending practices, not the platform\'s average sender quality.' },
    ],
    faqs: [
      { question: 'What does isolated email infrastructure mean?', answer: 'It means your emails travel through servers and IPs that no other Sendbox user touches. Your sending environment is provisioned exclusively for your account, with dedicated resources across the board.' },
      { question: 'Do other cold email tools use shared infrastructure?', answer: 'Most of them, yes. The majority of cold email platforms pool multiple users onto shared servers and IPs, so when one user\'s behavior trips a spam filter, everyone else sharing those resources can see their deliverability drop too.' },
      { question: 'Does isolated infrastructure cost extra on Sendbox?', answer: 'No. It\'s the default across every plan, Sendbox doesn\'t even offer a shared-infrastructure option.' },
      { question: 'What exactly is isolated per account?', answer: 'Servers, IPs, and resources are all kept separate on a per-account basis, with no sending infrastructure shared between any two Sendbox users.' },
    ],
    seo: {
      title: 'Fully Isolated Sending Infrastructure',
      description: 'Sendbox runs every account on its own isolated sending infrastructure, no shared servers, no shared IPs, and zero cross-contamination between users on the platform.',
      keywords: ['cold email isolated infrastructure', 'isolated sending infrastructure', 'cold email infrastructure', 'shared vs isolated email sending', 'sendbox isolated infrastructure', 'email sending isolation', 'dedicated email servers', 'cold email server infrastructure 2026', 'sendbox', 'isolated email environment', 'no shared ip email', 'email deliverability infrastructure', 'cold email platform architecture', 'account isolation email'],
    },
  },
  {
    slug: 'human-like-warmup',
    name: 'Human-like Warmup',
    category: 'Infrastructure',
    headline: 'Warmup that adjusts itself to protect your mailbox.',
    description: 'Sendbox warmup builds sender reputation gradually by trading real emails with real accounts, generating opens, replies, and spam-folder rescues on its own. If mailbox health starts to dip, warmup automatically throttles volume and shifts timing to protect it.',
    icon: 'FireIcon',
    benefitsHeadline: 'Reputation built before your first campaign even launches.',
    benefitsEyebrow: 'warmup engine',
    whySectionHeadline: 'It\'s real engagement doing the work, not raw volume.',
    whySectionEyebrow: 'sender reputation',
    detailsHeadline: 'Why so many warmup tools end up flagged.',
    detailsEyebrow: 'the difference',
    howItWorks: [
      { step: 1, title: 'Set your volume ramp', description: 'Pick a starting volume, a daily increase, and a target. Before warmup even starts, Sendbox checks your DNS records (SPF, DKIM, DMARC) so nothing is quietly holding you back.' },
      { step: 2, title: 'Engagement happens automatically', description: 'Warmup emails go out to real accounts across the network, where they get opened, replied to, and rescued out of spam, exactly the kind of signals ESPs rely on to decide whether you\'re trustworthy.' },
      { step: 3, title: 'Auto-adjusts when health dips', description: 'If bounce rates climb or more mail starts landing in spam, Sendbox automatically throttles volume and adjusts settings to bring the mailbox back to health, without you having to babysit it.' },
    ],
    useCases: [
      { title: 'New domains', description: 'Just picked up ten new sending domains? Turn warmup on across all of them at once, and they\'ll build reputation in parallel while you get campaigns ready.' },
      { title: 'Reputation recovery', description: 'If a mailbox has landed in spam, warmup rebuilds trust gradually through controlled volume and genuine engagement signals.' },
      { title: 'Keeping idle mailboxes ready', description: 'Between campaigns, warmup keeps mailboxes active so their reputation doesn\'t decay from sitting idle.' },
    ],
    competitorCallout: {
      title: 'Warmup that reacts, instead of just running on autopilot',
      description: 'Most warmup tools just blast out a fixed volume and hope for the best. Sendbox instead watches health in real time and auto-throttles the moment something looks off, adjusting volume and timing to protect the mailbox rather than letting it burn out.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Set-and-forget warmup that actually protects you',
        description: 'Other tools ramp volume on a fixed schedule no matter what\'s actually happening, so if your mailbox starts landing in spam, they just keep sending at the same rate regardless. Sendbox catches the problem and auto-throttles instead, cutting volume, shifting timing, and healing the mailbox before real damage sets in.',
      },
      {
        title: 'Real engagement, not just volume',
        description: 'Volume by itself doesn\'t build reputation. What ESPs actually weigh is engagement, opens, replies, spam-folder rescues, and Sendbox warmup generates that engagement from real accounts, building the exact signals that move you out of spam and into the inbox.',
      },
    ],
    benefits: [
      { title: 'Real engagement signals', description: 'Opens, replies, and spam rescues from genuine accounts, the actual signals ESPs use to size up a sender.' },
      { title: 'Auto-throttle on health dips', description: 'The moment metrics slip, volume and settings adjust automatically to heal the mailbox rather than push it further into trouble.' },
      { title: 'Configurable volume ramp', description: 'Set your own starting volume, daily increase, and target, adjust it whenever you like, or leave auto-throttle to manage it.' },
      { title: 'Per-mailbox health tracking', description: 'Inbox rate, spam rate, bounce rate, and reply rate, all broken out per mailbox, so you know precisely when it\'s ready to send.' },
    ],
    faqs: [
      { question: 'How does Sendbox email warmup work?', answer: 'Your mailbox sends emails to real accounts inside a warmup network, and those accounts open, reply to, and rescue your emails from spam, building up the engagement signals ESPs use to judge your sender reputation. If health starts to dip, volume and settings adjust automatically to protect the mailbox.' },
      { question: 'Can I configure warmup volume?', answer: 'Yes, you control the starting volume, the daily increase, and the target, and you can pause or resume warmup whenever you want.' },
      { question: 'How long does warmup take?', answer: 'Usually 2-4 weeks for a new mailbox, though it varies with your volume ramp and how the provider responds. Health metrics will tell you when you\'re actually ready.' },
      { question: 'What makes Sendbox warmup different from others?', answer: 'The auto-throttling. Most warmup tools push a fixed schedule no matter what\'s happening to your mailbox, but Sendbox watches health continuously and adjusts volume and settings automatically when something goes wrong, protecting the mailbox instead of burning through it.' },
    ],
    seo: {
      title: 'Email Warmup Built to Pass ESP Detection',
      description: 'Sendbox email warmup builds sender reputation through real opens, replies, and spam rescues, and auto-throttles the moment mailbox health dips to protect inbox placement.',
      keywords: ['email warmup tool', 'cold email warmup service', 'email warmup that passes detection', 'best email warmup 2026', 'ai email warmup', 'sendbox email warmup', 'human like email warmup', 'mailbox warmup tool', 'sendbox', 'email warmup auto throttle', 'warm up cold email account', 'sender reputation warmup', 'email warmup with real engagement', 'cold email warmup 2026'],
    },
  },

  // Monitoring
  {
    slug: 'auto-mailbox-protection',
    name: 'Mailbox Health Visibility',
    category: 'Monitoring',
    headline: 'Reply rate and bounce rate, broken out by mailbox.',
    description: 'Spot the mailboxes that are starting to slip, pull them from rotation, run warmup, and bring them back healthy.',
    icon: 'ShieldCheckIcon',
    benefitsHeadline: 'The per-mailbox signals worth acting on.',
    benefitsEyebrow: 'mailbox visibility',
    whySectionHeadline: 'Signals broken out by mailbox, not blurred into a campaign average.',
    whySectionEyebrow: 'mailbox health',
    detailsHeadline: 'Why visibility at the mailbox level matters once you scale.',
    detailsEyebrow: 'seeing the real signal',
    howItWorks: [
      { step: 1, title: 'Reply rate tracked per mailbox', description: 'Reply rate is shown for every mailbox across all your campaigns, so you can see exactly which ones are pulling real engagement and which ones aren\'t.' },
      { step: 2, title: 'Bounce rate tracked per mailbox', description: 'Bounce rate is broken out per mailbox rather than just per campaign, so if one mailbox is bouncing more than the others, it stands out right away.' },
      { step: 3, title: 'Protection and recovery run through warmup', description: 'When a mailbox starts looking unhealthy, pull it from your campaigns and run warmup on it. Reputation rebuilds through genuine engagement, and the health dashboard tells you when it\'s safe to put it back to work.' },
    ],
    useCases: [
      { title: 'Managing 50+ mailboxes', description: 'Per-mailbox reply and bounce rates let you spot the weak links without manually checking every single account every day.' },
      { title: 'Spotting reputation decline early', description: 'A dropping reply rate or a creeping bounce rate is usually the first sign a mailbox is starting to struggle, and you catch it before the problem spreads further.' },
      { title: 'Agency multi-client setups', description: 'See at a glance which client mailboxes are performing and which need attention, without digging through each account one by one.' },
    ],
    competitorCallout: {
      title: 'Reply and bounce rate per mailbox, not blended into a campaign average',
      description: 'Most platforms surface aggregate campaign metrics while keeping per-mailbox data hidden, and without that breakdown, there\'s no way to tell which specific mailboxes are healthy versus which are dragging your overall numbers down. Sendbox exposes reply rate and bounce rate for every individual mailbox, so you\'re acting on the right signal.',
      competitors: ['Instantly', 'Smartlead'],
    },
    detailBlocks: [
      {
        title: 'Aggregate numbers hide the real story',
        description: 'Campaign-wide reply and bounce rates blend your healthy mailboxes together with the failing ones, so a mailbox can be sitting deep in spam while the campaign average still looks perfectly fine. Sendbox breaks reply rate and bounce rate out per mailbox instead, showing exactly where the problem lives rather than a number that averages it away.',
      },
      {
        title: 'Protection and recovery happen in warmup',
        description: 'Sendbox won\'t silently pause a mailbox on your behalf. Instead, when one looks unhealthy, you\'re the one pulling it from campaigns and running warmup to rebuild engagement and reputation. Recovery actually happens inside warmup, and the health dashboard tells you when to act and when you\'re clear again.',
      },
    ],
    benefits: [
      { title: 'Reply rate per mailbox', description: 'See exactly which mailboxes are generating genuine replies, so your best lists can be routed to your best senders.' },
      { title: 'Bounce rate per mailbox', description: 'Track bounce rate at the individual mailbox level to catch reputation problems before they spread into the rest of your campaigns.' },
      { title: 'Real-time dashboard', description: 'Reply and bounce data refreshes continuously, so you\'re always looking at the current state of every mailbox in your account.' },
      { title: 'Recovery through warmup', description: 'Pull a slipping mailbox from campaigns and run warmup on it; reputation rebuilds through real engagement, with no hidden auto-pause happening behind the scenes.' },
    ],
    faqs: [
      { question: 'Does Sendbox automatically pause unhealthy mailboxes?', answer: 'No. Reply rate and bounce rate are surfaced for every mailbox so that you\'re the one deciding when to pull it from campaigns. Automatic pausing can end up masking the real issue, whereas visibility lets you act on the signals with the full picture in front of you.' },
      { question: 'How do I recover a mailbox that\'s bouncing or underperforming?', answer: 'Recovery happens through warmup: pull the mailbox from active campaigns, start warmup to rebuild engagement and reputation, and bring it back once the metrics look healthy again.' },
      { question: 'What mailbox metrics does Sendbox track?', answer: 'Reply rate and bounce rate, tracked per mailbox in real time, so you can see which ones are performing and which are starting to slip, broken out individually rather than buried in a campaign average.' },
    ],
    seo: {
      title: 'Mailbox Health Visibility - Per-Mailbox Reply and Bounce Rate',
      description: 'Sendbox surfaces reply rate and bounce rate for every mailbox in real time, so unhealthy mailboxes get caught early and recovered through warmup.',
      keywords: ['mailbox health monitoring', 'per mailbox reply rate', 'per mailbox bounce rate', 'mailbox visibility cold email', 'sendbox mailbox health', 'cold email mailbox dashboard', 'mailbox reputation signals', 'sendbox', 'reply rate per mailbox', 'bounce rate per mailbox', 'cold email mailbox analytics 2026', 'mailbox performance tracking', 'email deliverability visibility', 'cold email reputation dashboard'],
    },
  },
  {
    slug: 'bounce-monitoring',
    name: 'Bounce Tracking',
    category: 'Monitoring',
    headline: 'Every bounce, tracked down to the campaign and mailbox.',
    description: 'Sendbox logs the delivery status of every email that goes out, tracking bounces both by campaign and by mailbox so you know exactly where a problem is originating and which list or mailbox needs your attention.',
    icon: 'PulseIcon',
    benefitsHeadline: 'Pinpoint precisely which sends failed.',
    benefitsEyebrow: 'bounce tracking',
    whySectionHeadline: 'Trace bounces to the exact campaign and mailbox.',
    whySectionEyebrow: 'delivery signals',
    detailsHeadline: 'Bounce data at a granular level, not just an average.',
    detailsEyebrow: 'per-send clarity',
    howItWorks: [
      { step: 1, title: 'Delivery status tracked per send', description: 'Every single email\'s delivery outcome gets recorded, and that bounce data shows up in both your campaign analytics and your mailbox metrics.' },
      { step: 2, title: 'Bounce data visible in analytics', description: 'Bounce rates sit right alongside open rates and reply rates in your campaign analytics, and you can drill down by campaign, mailbox, or time period.' },
      { step: 3, title: 'Use the data to make decisions', description: 'A high bounce rate on one campaign usually points to bad list data, while a high bounce rate on one mailbox usually points to a reputation problem. Either way, the data helps you track down the actual cause.' },
    ],
    useCases: [
      { title: 'Evaluating data providers', description: 'Just imported a list from a new data vendor? Check the bounce rate on that campaign. Anything above 2% signals poor data quality, and you know not to buy from that vendor again.' },
      { title: 'Comparing mailbox performance', description: 'Track bounce rates per mailbox to figure out which ones might be carrying a reputation issue worth addressing.' },
      { title: 'Campaign-level diagnostics', description: 'When bounce rates swing significantly between campaigns, it usually points to differences in list quality, and per-campaign tracking makes that easy to catch.' },
    ],
    competitorCallout: {
      title: 'Bounce data right where you need it, not buried in a separate report',
      description: 'Bounce tracking lives directly inside your campaign and mailbox analytics, so there\'s no need to open a separate tool or export data just to understand what\'s bouncing and why.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Per-campaign and per-mailbox visibility',
        description: 'An aggregate bounce rate hides the real story: a 2% overall rate could mean one campaign is sitting at 10% while the rest hover around 0.5%. By tracking bounces per campaign and per mailbox, Sendbox lets you pinpoint exactly where the problem is rather than guess at it.',
      },
      {
        title: 'Bounce data feeds into the bigger picture',
        description: 'Bounce rates don\'t exist on their own, they\'re one thread in your overall deliverability story alongside open rates, reply rates, and spam placement. Sendbox presents bounce data next to every other metric so you get the full picture at once.',
      },
    ],
    benefits: [
      { title: 'Per-send tracking', description: 'Every email\'s delivery outcome gets logged, so nothing slips through unnoticed.' },
      { title: 'Campaign-level bounce rates', description: 'Bounce rates broken out per campaign make list quality issues easy to spot quickly.' },
      { title: 'Mailbox-level bounce rates', description: 'Bounces tracked per mailbox surface reputation problems tied to specific sending addresses.' },
      { title: 'Integrated analytics', description: 'Bounce data sits right alongside open rates, reply rates, and every other metric in one analytics dashboard.' },
    ],
    faqs: [
      { question: 'How does Sendbox track email bounces?', answer: 'The delivery status of every email sent gets recorded, and bounce data shows up in both your campaign analytics and mailbox metrics, broken out by campaign and by mailbox.' },
      { question: 'Does Sendbox automatically alert me about high bounce rates?', answer: 'Bounce data lives in your analytics dashboard, where you can monitor rates per campaign and per mailbox. It\'s worth checking regularly, especially right after launching a campaign against a new list.' },
      { question: 'What bounce rate is considered too high?', answer: 'Most ESPs start penalizing senders once bounce rates cross 2%. Rates climbing above that on any campaign usually mean the list data needs cleaning up, which is exactly what email validation on import is meant to prevent.' },
    ],
    seo: {
      title: 'Real-time Email Bounce Monitoring',
      description: 'Sendbox tracks every bounce by campaign and by mailbox, giving you granular delivery analytics to pinpoint list quality issues and reputation problems.',
      keywords: ['email bounce monitoring', 'cold email bounce rate', 'bounce tracking tool', 'email bounce detection', 'sendbox bounce monitoring', 'bounce rate per campaign', 'mailbox bounce tracking', 'sendbox', 'email delivery tracking', 'cold email bounce tracking 2026', 'reduce email bounce rate', 'bounce analytics tool', 'email bounce rate monitor', 'per mailbox bounce data'],
    },
  },
  {
    slug: 'blacklist-monitoring',
    name: 'Blacklist Monitoring',
    category: 'Monitoring',
    headline: 'Find out the same day your sender reputation takes a hit.',
    description: 'Every sending IP and domain on your account gets watched around the clock through continuous blacklist monitoring. The moment a listing appears, you\'re alerted, well before it shows up as a dip in reply rates. What actually matters isn\'t the scan itself, it\'s how little time passes between a listing happening and you finding out.',
    icon: 'ProhibitIcon',
    benefitsHeadline: 'Hours, not weeks, between a listing and finding out about it.',
    benefitsEyebrow: 'ongoing surveillance',
    whySectionHeadline: 'Manual checks don\'t scale. Continuous monitoring does.',
    whySectionEyebrow: 'reputation tracking',
    detailsHeadline: 'Why speed of detection beats scan accuracy.',
    detailsEyebrow: 'mean time to detect',
    howItWorks: [
      { step: 1, title: 'Add IPs and domains to the watchlist', description: 'Every IP and sender domain connected to Sendbox lands on the monitoring watchlist automatically, no scans to kick off manually, the system just runs them.' },
      { step: 2, title: 'Continuous scanning across major blocklists', description: 'Watched assets get re-checked on a rolling schedule against every major email blocklist, so a new listing surfaces within hours of appearing rather than weeks later once your open rates have already cratered.' },
      { step: 3, title: 'Alert when status changes', description: 'A listing triggers a dashboard alert naming the affected asset, the source of the listing, and the recommended next step. Clean scans generate no notification at all, so the noise stays low.' },
    ],
    useCases: [
      { title: 'Mailbox fleet reputation tracking', description: 'Agencies managing hundreds of mailboxes need rolling visibility rather than manually scanning each one, and monitoring handles a scale that manual checks simply can\'t.' },
      { title: 'Mailbox warmup phase oversight', description: 'New mailboxes are at their most vulnerable to an early listing. Continuous monitoring catches trouble during warmup, before it turns into a production-level incident.' },
      { title: 'Long-tail campaign reputation drift', description: 'Reputation can erode slowly over months of sending, and monitoring catches that gradual drift in a way a single point-in-time check never would.' },
    ],
    competitorCallout: {
      title: 'Monitoring ships standard, not metered by usage',
      description: 'Most cold email tools either sell blacklist monitoring as a separate paid product or skip it altogether. Sendbox ships continuous monitoring with every plan, covering every connected IP and domain automatically.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'The cost of not knowing is measured in campaigns, not scans',
        description: 'A blacklisted IP that keeps sending burns through leads for exactly as long as it takes you to notice. Teams without monitoring in place typically catch on after a week or two of declining reply rates, by which point the listing has already spread and the leads spent in those campaigns are gone for good. Continuous monitoring shrinks that discovery window down to hours.',
      },
      {
        title: 'Watchlists scale where manual checks cannot',
        description: 'A solo operator can reasonably scan two IPs by hand before each campaign. An agency running 200 mailboxes across 40 IPs cannot. Watchlists move that work out of a per-campaign ritual and into background infrastructure, the only approach that actually holds up past a handful of mailboxes.',
      },
    ],
    benefits: [
      { title: 'Automatic watchlist coverage', description: 'Every connected IP and domain is watched by default, nothing to switch on, nothing to remember to check.' },
      { title: 'Alerts, not dashboards', description: 'Status changes come to you as alerts, instead of requiring you to log in and run scans yourself.' },
      { title: 'Multi-blocklist aggregation', description: 'Every major blocklist rolls into a single alert stream, instead of a separate subscription for each one.' },
      { title: 'Hours to detection, not weeks', description: 'Rolling scans catch a listing shortly after it appears, rather than after it\'s already damaged several campaigns.' },
    ],
    faqs: [
      { question: 'How often does monitoring re-scan my IPs and domains?', answer: 'On a rolling schedule tuned so any given asset gets re-checked often enough to catch a new listing within hours of it appearing, without hammering blocklist providers with redundant queries.' },
      { question: 'How do I know if a listing is detected?', answer: 'A status change triggers an in-dashboard alert naming the affected asset, the source, and the recommended action. Clean rescans don\'t generate notifications, so what you see in the alert stream is signal, not noise.' },
      { question: 'How is monitoring different from the on-demand blacklist check tool?', answer: 'Monitoring runs continuously in the background across every connected asset, while the check tool is a manual, on-demand lookup for one specific IP or domain when you need an answer right now. They\'re built for different jobs.' },
    ],
    seo: {
      title: 'Continuous Blacklist Monitoring for Cold Email Senders',
      description: 'Every connected IP and domain gets automatic watchlist monitoring against major blocklists, with alerts on new listings arriving within hours instead of weeks.',
      keywords: ['blacklist monitoring service', 'continuous ip blacklist alert', 'email reputation monitoring', 'sender reputation watchlist', 'sendbox blacklist monitoring', 'automated blocklist tracker', 'ip blacklist notification', 'mailbox fleet reputation', 'long-term blacklist surveillance', 'cold email mtbf monitoring', 'email sender reputation tracking', 'blocklist alert system', 'ongoing deliverability monitoring'],
    },
  },

  // Testing
  {
    slug: 'inbox-placement-testing',
    name: 'Inbox Placement Testing',
    category: 'Testing',
    headline: 'Know where an email lands before you commit to sending it.',
    description: 'Send your email to a set of seed accounts and see exactly where it ends up, inbox, spam, or somewhere in between. Sendbox reports back an inbox rate, a spam rate, and an overall score so you know whether you\'re actually ready to launch.',
    icon: 'TargetIcon',
    benefitsHeadline: 'Test placement before it costs you a single lead.',
    benefitsEyebrow: 'placement testing',
    whySectionHeadline: 'Test before you send, launch only once you are ready.',
    whySectionEyebrow: 'pre-launch checks',
    detailsHeadline: 'Catch placement problems before they cost you leads.',
    detailsEyebrow: 'zero-risk testing',
    howItWorks: [
      { step: 1, title: 'Start a placement test', description: 'Pick the email you want to check and kick off a placement test right from your dashboard. It goes out to seed accounts spread across all the major providers.' },
      { step: 2, title: 'Test progresses through stages', description: 'The test moves through pending, sending, monitoring, and completed, and you can watch its status the whole way through.' },
      { step: 3, title: 'Results show inbox and spam rates', description: 'Once it wraps up, you get back an inbox rate percentage, a spam rate percentage, and an overall placement score.' },
    ],
    useCases: [
      { title: 'Pre-launch validation', description: 'Test every campaign before it goes live. Discovering you\'re landing in spam after 5,000 emails have already gone out is expensive. Discovering it beforehand costs nothing.' },
      { title: 'Subject line and copy testing', description: 'Swap the subject line, tweak the body copy, and run the test again. You\'ll see exactly which changes move you out of spam and into the inbox.' },
      { title: 'Post-warmup readiness check', description: 'Just finished warming up a new domain? Run a placement test to confirm you\'re genuinely hitting inbox before your first real campaign goes out.' },
    ],
    competitorCallout: {
      title: 'Know your placement before a single lead gets burned',
      description: 'A lot of cold email platforms skip inbox placement testing entirely, so you send your campaign and just hope for the best. Sendbox lets you test first instead, fixing issues while the cost of doing so is still zero.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Fix placement problems before they cost you leads',
        description: 'Most teams find out they\'re landing in spam only after a campaign has already gone out and the reply rates come in terrible. By that point the damage is done and the leads are already burned. Placement testing lets you catch and fix that before a single campaign email leaves the building, when the cost of fixing it is still nothing.',
      },
      {
        title: 'Clear results, not a wall of data',
        description: 'Inbox rate, spam rate, an overall score, that\'s the whole picture, with no complicated charts to interpret or cryptic metrics to decode. High inbox rate and low spam rate means you\'re clear to launch; anything else means it\'s time to tweak and test again.',
      },
    ],
    benefits: [
      { title: 'Test before sending', description: 'Know your inbox placement before a campaign ever goes live, instead of burning leads to find out you\'re in spam.' },
      { title: 'Clear metrics', description: 'Inbox rate, spam rate, and an overall score, simple numbers you can actually act on.' },
      { title: 'Status tracking', description: 'Watch your test move from pending through sending and monitoring to completed, so you always know exactly where it stands.' },
      { title: 'Iterate and retest', description: 'Adjust your email and run the test again, iterating for as long as it takes to get placement right.' },
    ],
    faqs: [
      { question: 'How does inbox placement testing work?', answer: 'Your email goes out to seed accounts spread across email providers, and Sendbox checks where each one landed before reporting back an inbox rate, spam rate, and overall placement score.' },
      { question: 'How long do inbox placement test results take?', answer: 'Tests move through pending, sending, monitoring, and completed. The whole process usually takes a few minutes, though provider response times can push that either way.' },
      { question: 'What statuses can a placement test have?', answer: 'A test passes through pending, sending, and monitoring before ending as completed, failed, or expired, and you can track its status from your dashboard the whole way.' },
    ],
    seo: {
      title: 'Inbox Placement Testing Tool',
      description: 'Sendbox inbox placement testing shows exactly where your email lands before you send it, returning inbox rate, spam rate, and a score so you fix issues before burning leads.',
      keywords: ['inbox placement test', 'email placement testing tool', 'inbox delivery test', 'email spam test tool', 'where do my emails land', 'sendbox inbox placement', 'test email deliverability', 'sendbox', 'inbox vs spam test', 'email placement score', 'pre send email test 2026', 'cold email placement test', 'email seed test tool', 'check inbox placement'],
    },
  },
  {
    slug: 'blacklist-check',
    name: 'Blacklist Check Tool',
    category: 'Testing',
    headline: 'Look up any IP or domain and get an answer immediately.',
    description: 'An on-demand lookup for one IP or domain at a time: type in the address and get back its listing status across every major blocklist, plus a 0-100 health score. It\'s built for one-off verification rather than ongoing background monitoring.',
    icon: 'ShieldWarningIcon',
    benefitsHeadline: 'A direct lookup with an answer right away.',
    benefitsEyebrow: 'on-demand tool',
    whySectionHeadline: 'Sometimes you just need the answer on one specific IP, immediately.',
    whySectionEyebrow: 'targeted lookups',
    detailsHeadline: 'A lookup tool, distinct from a monitoring service.',
    detailsEyebrow: 'manual verification',
    howItWorks: [
      { step: 1, title: 'Type an IP address or domain', description: 'Paste any IPv4 address or domain into the lookup box, it doesn\'t need to be connected to your Sendbox account first.' },
      { step: 2, title: 'Lookup queries blocklists in parallel', description: 'The query fans out across every major email blocklist at once, so results come back in seconds instead of the minutes a sequential check would take.' },
      { step: 3, title: 'Read the score and per-list breakdown', description: 'A single 0-100 health score gives you a quick read, and a per-blocklist breakdown is there if you need to know exactly which list flagged the asset and what delisting process applies.' },
    ],
    useCases: [
      { title: 'Vetting a domain you are about to buy', description: 'A domain you inherit also inherits any listings that came with it. Run the lookup before buying to avoid paying for a domain that already needs delisting work.' },
      { title: 'Diagnosing a deliverability drop', description: 'If one campaign\'s open rates suddenly crater, the lookup can tell you within seconds whether a fresh listing on the sending IP is to blame.' },
      { title: 'Verifying a delisting request worked', description: 'After filing a delisting request, run the lookup a few hours later to confirm it actually went through before you resume sending.' },
    ],
    competitorCallout: {
      title: 'A free standalone lookup instead of a metered API plan',
      description: 'Most blacklist lookup services charge per query or gate access behind an API plan. Sendbox\'s in-dashboard lookup is free and unmetered for its customers, which means it stops feeling like something to ration and becomes a tool you actually reach for.',
      competitors: ['Instantly'],
    },
    detailBlocks: [
      {
        title: 'When to reach for the lookup vs the monitoring service',
        description: 'The lookup exists for verifying one specific asset on demand, a domain you\'re about to buy, an IP a colleague flagged, a sending address you suspect is causing a problem. Continuous monitoring handles the ongoing surveillance for assets already sitting in your account. They\'re different tools solving different jobs, and most teams end up reaching for both at different moments.',
      },
      {
        title: 'Per-blocklist visibility, not just a score',
        description: 'The 0-100 score gives you the fast answer, while the per-blocklist breakdown gives you the actionable one. Which specific list flagged the asset determines which delisting workflow applies, since every major blocklist runs its own removal process, and the lookup surfaces that detail instead of hiding it behind a single number.',
      },
    ],
    benefits: [
      { title: 'Lookup any address, even outside your account', description: 'No need to add the IP or domain to Sendbox first, run the lookup on anything you\'re evaluating, vetting, or troubleshooting.' },
      { title: 'Parallel blocklist queries', description: 'Queries fire concurrently across every major list, returning results in seconds instead of the minutes a sequential check would take.' },
      { title: 'Per-blocklist breakdown', description: 'See precisely which lists flagged the asset, so the right delisting workflow is obvious.' },
      { title: 'Free for Sendbox customers', description: 'No per-query fees, no monthly cap, and no API plan to negotiate.' },
    ],
    faqs: [
      { question: 'Do I need to connect an IP to Sendbox to look it up?', answer: 'No. The lookup accepts any IP address or domain, including ones that aren\'t part of your Sendbox account at all, which is exactly what makes it useful for vetting a domain before you buy it or checking an asset you don\'t even own.' },
      { question: 'How is the lookup different from continuous blacklist monitoring?', answer: 'The lookup is a one-shot manual query on a single asset, returning results right away. Continuous monitoring, meanwhile, runs in the background across every connected asset and alerts you when something changes. Reach for the lookup when you need ad-hoc verification, and let monitoring handle ongoing surveillance.' },
      { question: 'Why does the breakdown matter if the score is already there?', answer: 'The score answers whether you should send. The breakdown answers what to do if you shouldn\'t. Every major blocklist runs its own delisting process, so knowing exactly which one flagged the asset is the first step toward getting it removed.' },
    ],
    seo: {
      title: 'Free Email Blacklist Lookup Tool',
      description: 'An on-demand IP and domain blacklist lookup that queries every major blocklist in parallel, returning a health score and per-list breakdown in seconds, at no cost.',
      keywords: ['blacklist lookup tool', 'free blacklist check', 'is my ip blacklisted', 'check ip blacklist status', 'domain blacklist lookup', 'email blocklist checker', 'spamhaus check', 'rbl lookup tool', 'blacklist verification', 'check domain before buying', 'verify delisting', 'ip reputation lookup', 'blocklist diagnostic tool'],
    },
  },
  {
    slug: 'email-validation',
    name: 'Email Validation',
    category: 'Testing',
    headline: 'Stop sending to addresses that don\'t exist.',
    description: 'Every email address is validated automatically when you import leads. Sendbox categorizes each address as deliverable, undeliverable, risky, or unknown with confidence scores so you can decide what makes the cut.',
    icon: 'AtIcon',
    benefitsHeadline: 'Bad addresses caught on import.',
    benefitsEyebrow: 'list hygiene',
    whySectionHeadline: 'Validation baked into every import.',
    whySectionEyebrow: 'automatic cleaning',
    detailsHeadline: 'Four categories, not just pass or fail.',
    detailsEyebrow: 'smarter filtering',
    howItWorks: [
      { step: 1, title: 'Validation runs on import', description: 'Upload a CSV or add leads by hand, and Sendbox validates every address automatically as part of the import itself. There\'s no separate step to remember to run.' },
      { step: 2, title: 'Multi-level verification', description: 'Syntax checks catch formatting mistakes, domain and MX record checks confirm the domain can actually receive mail, and mailbox-level verification checks whether the specific address exists. Catch-all detection flags domains that accept everything.' },
      { step: 3, title: 'Results categorized with confidence scores', description: 'Every address lands in one of four categories, deliverable, undeliverable, risky, or unknown, each with a confidence score you can use to set your own threshold for what gets into your campaigns.' },
    ],
    useCases: [
      { title: 'Cleaning purchased or scraped lists', description: 'Bought a list from a data provider? Validation reveals the real quality of what you paid for. A high share of undeliverable addresses tells you the data was bad.' },
      { title: 'Catch-all domain handling', description: 'Some domains accept mail to any address, which makes verifying individual mailboxes tricky. Sendbox flags catch-all domains so you can decide how to handle them.' },
      { title: 'Protecting your bounce rate', description: 'ESPs start penalizing you once bounce rates exceed 2%. Validation keeps you under that line by filtering bad addresses out before they ever bounce.' },
    ],
    competitorCallout: {
      title: 'Validation that runs automatically, not a step your team forgets',
      description: 'Most platforms treat validation as a separate action someone has to remember to click, and they often don\'t. Sendbox validates during import instead, so by the time leads land in the system, the bad addresses are already flagged and campaigns start clean by default.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Four categories, not just pass or fail',
        description: 'Binary validation misses the nuance: an address can be technically valid yet still risky. Sendbox sorts every address into one of four buckets, deliverable (safe to send), undeliverable (don\'t send), risky (proceed carefully), or unknown (couldn\'t determine status), each carrying a confidence score so you can draw your own line on risk.',
      },
      {
        title: 'Catch-all detection prevents false positives',
        description: 'Some domains accept mail sent to any address, even ones that don\'t actually exist, and standard validation marks these as "valid" simply because the server accepted the connection. Sendbox specifically detects catch-all domains and flags them, so you know to trust that particular result a little less.',
      },
    ],
    benefits: [
      { title: 'Validates on import', description: 'No separate step required. Validation runs automatically the moment leads enter your system.' },
      { title: 'Four-category classification', description: 'Deliverable, undeliverable, risky, and unknown, far more useful than a simple pass or fail.' },
      { title: 'Confidence scoring', description: 'Every address carries a confidence score, letting you decide how aggressive your filtering should be.' },
      { title: 'Catch-all detection', description: 'Domains that accept everything get flagged, so you know which validation results to trust less.' },
    ],
    faqs: [
      { question: 'What does email validation check for?', answer: 'Syntax correctness, domain validity through MX records, and whether the mailbox itself exists, plus detection of catch-all domains that accept mail to any address. Every email lands in a deliverable, undeliverable, risky, or unknown category with a confidence score.' },
      { question: 'When does validation run?', answer: 'Automatically, during lead import. Upload a CSV or add leads and validation runs as part of that process, with nothing extra to trigger.' },
      { question: 'What are the validation result categories?', answer: 'Deliverable (safe to send), undeliverable (don\'t send), risky (might bounce), and unknown (status couldn\'t be determined), each with its own confidence score for finer-grained filtering.' },
    ],
    seo: {
      title: 'Email Validation Before Sending',
      description: 'Sendbox validates every email on import automatically. Addresses are categorized as deliverable, undeliverable, risky, or unknown with catch-all detection.',
      keywords: ['email validation tool', 'email verifier', 'cold email validation', 'email verification service', 'verify email before sending', 'sendbox email validation', 'email list verification', 'sendbox', 'bulk email validator 2026', 'catch all email detection', 'email address checker', 'validate email list', 'email verification on import', 'reduce bounce rate email'],
    },
  },
];

export const getDeliverabilityBySlug = (slug) => deliverabilityData.find((d) => d.slug === slug);
export const deliverablilitySlugs = deliverabilityData.map((d) => d.slug);
