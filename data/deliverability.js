// Deliverability page data for SEO landing pages

export const deliverabilityData = [
  // Infrastructure
  {
    slug: 'dedicated-ips',
    name: 'Dedicated IPs',
    category: 'Infrastructure',
    headline: 'Your IP. Your reputation. No exceptions.',
    description: 'Every Sendbox account sends from its own dedicated IP address. Your deliverability depends on your sending behavior alone, not on what some stranger on a shared plan did last Tuesday.',
    icon: 'GlobeIcon',
    benefitsHeadline: 'Your reputation, fully isolated.',
    benefitsEyebrow: 'ip isolation',
    whySectionHeadline: 'One IP per account, no exceptions.',
    whySectionEyebrow: 'dedicated sending',
    detailsHeadline: 'No shared IPs, no shared risk.',
    detailsEyebrow: 'reputation control',
    howItWorks: [
      { step: 1, title: 'IP assigned at signup', description: 'The moment you create your account, Sendbox provisions a dedicated IP that belongs only to you. No sharing, no pooling.' },
      { step: 2, title: 'Sticky hash assignment per mailbox', description: 'Each mailbox gets permanently mapped to a specific IP through a hash-based assignment. Your mailboxes always send from the same IP, keeping reputation signals consistent.' },
      { step: 3, title: 'Reputation reflects your sending', description: 'Good hygiene means good deliverability. Bad lists mean bad deliverability. Either way, it\'s entirely on you, not on a random stranger\'s spam blast.' },
    ],
    useCases: [
      { title: 'Agency client isolation', description: 'Give each client their own IP. When one client tests an aggressive angle, the others don\'t feel a thing.' },
      { title: 'Enterprise audit requirements', description: 'Security teams want to know exactly which IP sent which email. Dedicated IPs with sticky assignment make audit trails simple.' },
      { title: 'Multi-mailbox campaigns', description: 'Running dozens of mailboxes? Each one maps permanently to the same IP, so reputation builds consistently over time.' },
    ],
    competitorCallout: {
      title: 'Dedicated IPs on every plan, not just enterprise',
      description: 'Most cold email platforms lock dedicated IPs behind their enterprise tier or don\'t offer them at all. Sendbox includes dedicated IPs on every plan, from Starter to Power. Reputation isolation shouldn\'t depend on your budget.',
      competitors: ['Instantly', 'Smartlead'],
    },
    detailBlocks: [
      {
        title: 'Shared IPs are a gamble with your inbox placement',
        description: 'On shared infrastructure, your emails leave from the same IP as hundreds of other accounts. One spammer in the pool triggers a blacklisting, and suddenly your carefully written cold emails land in spam. You did nothing wrong. You just shared an IP with someone who did. Dedicated IPs eliminate that risk entirely.',
      },
      {
        title: 'Multi-IP support with permanent mailbox mapping',
        description: 'Sendbox supports multiple IPs per account with a sticky hash assignment system. Each mailbox is permanently mapped to the same IP, so reputation signals stay consistent. IPs aren\'t rotated automatically. This is intentional. Consistent IP-to-mailbox mapping gives ESPs a clean, predictable sending pattern to evaluate.',
      },
    ],
    benefits: [
      { title: 'Total reputation isolation', description: 'Nobody else\'s sending practices can affect your deliverability. Period.' },
      { title: 'Included on every plan', description: 'Dedicated IPs aren\'t an upsell or add-on. They\'re part of the infrastructure from day one.' },
      { title: 'Sticky IP assignment', description: 'Each mailbox permanently maps to the same IP through hash-based assignment. No random rotation.' },
      { title: 'Multi-IP support', description: 'Accounts can have multiple dedicated IPs, each with its own set of permanently assigned mailboxes.' },
    ],
    faqs: [
      { question: 'Do all Sendbox plans include a dedicated IP?', answer: 'Yes. Every Sendbox plan includes a dedicated IP at no extra cost. It\'s a core part of the infrastructure, not a paid upgrade.' },
      { question: 'How does Sendbox assign mailboxes to IPs?', answer: 'Sendbox uses a sticky hash assignment system. Each mailbox is permanently mapped to a specific IP. The assignment doesn\'t change, which keeps your sending pattern consistent for ESPs.' },
      { question: 'What is the difference between a shared IP and a dedicated IP for email?', answer: 'A shared IP is used by multiple senders on the same platform. If any of them send spam or hit spam traps, your reputation suffers too. A dedicated IP is exclusively yours, so your inbox placement depends only on your own practices.' },
      { question: 'Can I get more than one dedicated IP?', answer: 'Yes. Sendbox supports multiple IPs per account. Each mailbox gets permanently assigned to one IP through hash-based mapping.' },
    ],
    seo: {
      title: 'Dedicated IPs for Cold Email Sending',
      description: 'Sendbox gives every account a dedicated IP for cold email sending. Your sender reputation stays fully isolated from other users, so placement is on you.',
      keywords: ['dedicated ip cold email', 'cold email dedicated ip', 'dedicated ip email sending', 'dedicated vs shared ip cold email', 'why dedicated ip for cold email', 'sendbox dedicated ip', 'dedicated ip address email', 'email sender reputation isolation', 'cold email deliverability 2026', 'dedicated ip vs shared ip', 'ip reputation cold email', 'sendbox', 'cold email infrastructure', 'dedicated sending ip'],
    },
  },
  {
    slug: 'isolated-infrastructure',
    name: 'Isolated Infrastructure',
    category: 'Infrastructure',
    headline: 'Your sending environment is completely separate.',
    description: 'Every Sendbox account runs on isolated infrastructure. Your IPs, your sending, your reputation - none of it is shared with other users on the platform.',
    icon: 'HardDrivesIcon',
    benefitsHeadline: 'Zero cross-contamination by default.',
    benefitsEyebrow: 'full isolation',
    whySectionHeadline: 'Separate servers for every account.',
    whySectionEyebrow: 'environment design',
    detailsHeadline: 'Shared platforms hide a costly weakness.',
    detailsEyebrow: 'architecture matters',
    howItWorks: [
      { step: 1, title: 'Isolated from day one', description: 'When you create your account, your sending environment is fully separate from every other user on the platform. No shared resources.' },
      { step: 2, title: 'Hard boundaries between accounts', description: 'Your emails, lead data, and sending infrastructure sit behind strict isolation boundaries. There\'s no crossover with other accounts.' },
      { step: 3, title: 'Metrics that reflect reality', description: 'Your bounce rates, engagement numbers, and spam complaints are 100% your own. No noise from other senders on the platform.' },
    ],
    useCases: [
      { title: 'Agencies with multiple clients', description: 'Client A runs a risky experiment. Client B has a Fortune 500 campaign going. On shared platforms, A drags B down. On Sendbox, they don\'t even know each other exists.' },
      { title: 'Regulated industries', description: 'Finance, healthcare, and legal teams need to prove their email infrastructure is isolated from other parties. Sendbox makes that easy to demonstrate.' },
      { title: 'Mission-critical campaigns', description: 'Your biggest deal of the quarter depends on this email landing in inbox. You can\'t afford to share infrastructure with an unknown sender.' },
    ],
    competitorCallout: {
      title: 'The real reason agencies switch from shared platforms',
      description: 'Shared infrastructure is the hidden weakness of most cold email platforms. Your account routes through the same servers as every other user. When someone else gets flagged, your deliverability can take the hit too. Sendbox isolates every account by default. It\'s not a premium tier feature.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'What "shared infrastructure" actually costs you',
        description: 'Most cold email tools pool users onto shared servers and IP ranges. When any account in that pool buys a bad list, hits spam traps, or gets reported, the entire pool takes a reputation hit. Your inbox placement drops for reasons completely outside your control. You can write the perfect email and still land in spam because of a stranger.',
      },
      {
        title: 'True isolation means separate everything',
        description: 'Sendbox doesn\'t just give you a dedicated IP and call it "isolated." Your account gets separate servers, separate IPs, and separate resources. There\'s no shared sending infrastructure between accounts. When we say isolation, we mean it.',
      },
    ],
    benefits: [
      { title: 'Complete environment isolation', description: 'Your servers, IPs, and resources are fully separate from every other account on the platform.' },
      { title: 'Zero cross-contamination risk', description: 'Another user getting blacklisted has absolutely no effect on your sending.' },
      { title: 'Data separation', description: 'Your lead data and email content never coexist with other accounts\' data.' },
      { title: 'Consistent inbox placement', description: 'Your results depend on your practices. Not the platform\'s average sender quality.' },
    ],
    faqs: [
      { question: 'What does isolated email infrastructure mean?', answer: 'It means your emails are sent from servers and IPs that no other Sendbox user shares. Your sending environment is provisioned exclusively for your account, with separate resources across the board.' },
      { question: 'Do other cold email tools use shared infrastructure?', answer: 'Most do. The majority of cold email platforms pool multiple users onto shared servers and IPs. When one user\'s behavior triggers spam filters, every user on those shared resources can see deliverability drops.' },
      { question: 'Does isolated infrastructure cost extra on Sendbox?', answer: 'No. Isolation is the default on every plan. Sendbox doesn\'t offer shared infrastructure at all.' },
      { question: 'What exactly is isolated per account?', answer: 'Servers, IPs, and resources are all separate per account. There\'s no shared sending infrastructure between Sendbox users.' },
    ],
    seo: {
      title: 'Isolated Sending Infrastructure',
      description: 'Sendbox runs every account on isolated sending infrastructure. No shared servers, no shared IPs, and zero cross-contamination between platform users.',
      keywords: ['cold email isolated infrastructure', 'isolated sending infrastructure', 'cold email infrastructure', 'shared vs isolated email sending', 'sendbox isolated infrastructure', 'email sending isolation', 'dedicated email servers', 'cold email server infrastructure 2026', 'sendbox', 'isolated email environment', 'no shared ip email', 'email deliverability infrastructure', 'cold email platform architecture', 'account isolation email'],
    },
  },
  {
    slug: 'human-like-warmup',
    name: 'Human-like Warmup',
    category: 'Infrastructure',
    headline: 'Warmup that adapts to keep your mailbox healthy.',
    description: 'Sendbox warmup gradually builds your sender reputation by exchanging real emails with real accounts. Opens, replies, and spam rescues happen automatically. When health dips, warmup auto-adjusts volume and timing to protect your mailbox.',
    icon: 'FireIcon',
    benefitsHeadline: 'Build reputation before you send a single campaign.',
    benefitsEyebrow: 'warmup engine',
    whySectionHeadline: 'Real engagement, not just volume.',
    whySectionEyebrow: 'sender reputation',
    detailsHeadline: 'Why most warmup tools get flagged.',
    detailsEyebrow: 'the difference',
    howItWorks: [
      { step: 1, title: 'Set your volume ramp', description: 'Choose your starting volume, daily increase, and target. Sendbox checks your DNS (SPF, DKIM, DMARC) before warmup begins so nothing holds you back.' },
      { step: 2, title: 'Engagement happens automatically', description: 'Warmup emails are sent to real accounts in the network. They get opened, replied to, and pulled out of spam - the signals ESPs use to decide if you\'re trustworthy.' },
      { step: 3, title: 'Auto-adjusts when health dips', description: 'If bounce rates rise or spam placement increases, Sendbox automatically throttles volume and adjusts settings to heal the mailbox. You don\'t have to watch it.' },
    ],
    useCases: [
      { title: 'New domains', description: 'Bought 10 sending domains? Turn on warmup for all of them. They\'ll build reputation in parallel while you set up campaigns.' },
      { title: 'Reputation recovery', description: 'A mailbox landed in spam? Warmup gradually rebuilds trust with controlled volume and real engagement signals.' },
      { title: 'Keeping idle mailboxes ready', description: 'Between campaigns, warmup keeps your mailboxes active so reputation doesn\'t decay from inactivity.' },
    ],
    competitorCallout: {
      title: 'Warmup that adjusts itself, not just runs on autopilot',
      description: 'Most warmup tools blast a fixed volume and hope for the best. Sendbox monitors health in real time and auto-throttles when things look off - adjusting volume and timing to protect the mailbox instead of letting it burn.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Set-and-forget warmup that actually protects you',
        description: 'Other tools ramp volume on a fixed schedule regardless of what\'s happening. If your mailbox starts landing in spam, they keep sending at the same rate. Sendbox detects the problem and auto-throttles - reducing volume, adjusting timing, and healing the mailbox before real damage is done.',
      },
      {
        title: 'Real engagement, not just volume',
        description: 'Volume alone doesn\'t build reputation. ESPs care about engagement - opens, replies, and spam rescues. Sendbox warmup generates real engagement from real accounts, building the signals that actually move you from spam to inbox.',
      },
    ],
    benefits: [
      { title: 'Real engagement signals', description: 'Opens, replies, and spam rescues from real accounts - the signals ESPs actually use to evaluate senders.' },
      { title: 'Auto-throttle on health dips', description: 'When metrics drop, Sendbox automatically adjusts volume and settings to heal the mailbox instead of making it worse.' },
      { title: 'Configurable volume ramp', description: 'Set starting volume, daily increase, and target. Adjust anytime, or let auto-throttle handle it.' },
      { title: 'Per-mailbox health tracking', description: 'Inbox rate, spam rate, bounce rate, and reply rate per mailbox so you know exactly when it\'s ready.' },
    ],
    faqs: [
      { question: 'How does Sendbox email warmup work?', answer: 'Sendbox sends emails from your mailbox to real accounts in a warmup network. Those accounts open, reply to, and rescue your emails from spam - building the engagement signals ESPs use to evaluate your sender reputation. If health dips, volume and settings auto-adjust to protect the mailbox.' },
      { question: 'Can I configure warmup volume?', answer: 'Yes. You control starting volume, daily increase, and target volume. You can pause and resume anytime.' },
      { question: 'How long does warmup take?', answer: 'Typically 2-4 weeks for a new mailbox, depending on your volume ramp and how the provider responds. Health metrics tell you when you\'re ready.' },
      { question: 'What makes Sendbox warmup different from others?', answer: 'Auto-throttling. Most warmup tools blast a fixed schedule regardless of what\'s happening to your mailbox. Sendbox monitors health and automatically adjusts volume and settings when things go wrong, protecting the mailbox instead of burning it.' },
    ],
    seo: {
      title: 'AI Email Warmup That Passes Detection',
      description: 'Sendbox email warmup builds sender reputation with real opens, replies, and spam rescues. Auto-throttles when mailbox health dips to protect placement.',
      keywords: ['email warmup tool', 'cold email warmup service', 'email warmup that passes detection', 'best email warmup 2026', 'ai email warmup', 'sendbox email warmup', 'human like email warmup', 'mailbox warmup tool', 'sendbox', 'email warmup auto throttle', 'warm up cold email account', 'sender reputation warmup', 'email warmup with real engagement', 'cold email warmup 2026'],
    },
  },

  // Monitoring
  {
    slug: 'auto-mailbox-protection',
    name: 'Mailbox Health Visibility',
    category: 'Monitoring',
    headline: 'Reply and bounce rate, per mailbox.',
    description: 'See which mailboxes are slipping. Pause them, run warmup, bring them back.',
    icon: 'ShieldCheckIcon',
    benefitsHeadline: 'The signals you need to act on, per mailbox.',
    benefitsEyebrow: 'mailbox visibility',
    whySectionHeadline: 'Per-mailbox signals, not blended campaign averages.',
    whySectionEyebrow: 'mailbox health',
    detailsHeadline: 'Why per-mailbox visibility matters at scale.',
    detailsEyebrow: 'seeing the real signal',
    howItWorks: [
      { step: 1, title: 'Reply rate tracked per mailbox', description: 'Sendbox shows reply rate for every mailbox across your campaigns. You can see exactly which mailboxes are generating real engagement and which ones aren\'t.' },
      { step: 2, title: 'Bounce rate tracked per mailbox', description: 'Bounce rate is broken out per mailbox, not just per campaign. If one mailbox is bouncing more than the rest, it stands out immediately.' },
      { step: 3, title: 'Protection and recovery run through warmup', description: 'When a mailbox looks unhealthy, pause it from campaigns and run warmup. Reputation rebuilds through real engagement, and the health dashboard shows you when it\'s safe to send again.' },
    ],
    useCases: [
      { title: 'Managing 50+ mailboxes', description: 'Per-mailbox reply rate and bounce rate let you spot the weak ones without manually checking every account every day.' },
      { title: 'Spotting reputation decline early', description: 'Reply rate trending down or bounce rate creeping up is the earliest signal that a mailbox is starting to struggle. You see it before it spreads.' },
      { title: 'Agency multi-client setups', description: 'See which client mailboxes are performing and which need attention, without hunting through each account individually.' },
    ],
    competitorCallout: {
      title: 'Per-mailbox reply and bounce rate, not just campaign averages',
      description: 'Most platforms show you aggregate campaign metrics but hide per-mailbox data. Without that breakdown, you can\'t tell which specific mailboxes are healthy and which are dragging your overall numbers down. Sendbox surfaces reply rate and bounce rate for every mailbox so you can act on the right signals.',
      competitors: ['Instantly', 'Smartlead'],
    },
    detailBlocks: [
      {
        title: 'Aggregate numbers hide the real story',
        description: 'Campaign-wide reply rates and bounce rates blend healthy mailboxes with failing ones. A mailbox can be deep in spam while the campaign average still looks fine. Sendbox shows per-mailbox reply rate and bounce rate so you can see exactly where the problem is, not a number that averages it out.',
      },
      {
        title: 'Protection and recovery happen in warmup',
        description: 'Sendbox doesn\'t auto-pause mailboxes behind your back. When a mailbox looks unhealthy, you pull it from campaigns and run warmup to rebuild engagement and reputation. Warmup is where recovery actually happens - the health dashboard tells you when to act and when you\'re back to safe.',
      },
    ],
    benefits: [
      { title: 'Reply rate per mailbox', description: 'See which mailboxes are generating real replies so you can route your best lists to your best senders.' },
      { title: 'Bounce rate per mailbox', description: 'Track bounce rate at the mailbox level to catch reputation issues before they spread across the rest of your campaigns.' },
      { title: 'Real-time dashboard', description: 'Reply and bounce data updates continuously, so you always see the current state of every mailbox in your account.' },
      { title: 'Recovery through warmup', description: 'When a mailbox starts slipping, pause it from campaigns and run warmup. Reputation rebuilds through real engagement - no hidden auto-pause.' },
    ],
    faqs: [
      { question: 'Does Sendbox automatically pause unhealthy mailboxes?', answer: 'No. Sendbox shows you reply rate and bounce rate for every mailbox so you can decide when to pull one from campaigns. Automated pausing can mask the underlying issue - visibility lets you act on the signals with full context.' },
      { question: 'How do I recover a mailbox that\'s bouncing or underperforming?', answer: 'Recovery runs through warmup. Pause the mailbox from campaigns, start Sendbox\'s warmup to rebuild engagement and reputation, and re-enable it once the metrics look healthy again.' },
      { question: 'What mailbox metrics does Sendbox track?', answer: 'Reply rate and bounce rate per mailbox, tracked in real time. You see which mailboxes are performing and which are starting to slip, broken down by mailbox instead of buried in campaign averages.' },
    ],
    seo: {
      title: 'Mailbox Health Visibility - Per-Mailbox Reply and Bounce Rate',
      description: 'Sendbox shows reply rate and bounce rate for every mailbox in real time. Spot unhealthy mailboxes early and recover them through warmup.',
      keywords: ['mailbox health monitoring', 'per mailbox reply rate', 'per mailbox bounce rate', 'mailbox visibility cold email', 'sendbox mailbox health', 'cold email mailbox dashboard', 'mailbox reputation signals', 'sendbox', 'reply rate per mailbox', 'bounce rate per mailbox', 'cold email mailbox analytics 2026', 'mailbox performance tracking', 'email deliverability visibility', 'cold email reputation dashboard'],
    },
  },
  {
    slug: 'bounce-monitoring',
    name: 'Bounce Tracking',
    category: 'Monitoring',
    headline: 'Every bounce tracked per campaign and mailbox.',
    description: 'Sendbox records the delivery status of every email you send. Bounces are tracked per campaign and per mailbox so you can see exactly where problems are happening and which lists or mailboxes need attention.',
    icon: 'PulseIcon',
    benefitsHeadline: 'Know exactly which sends failed.',
    benefitsEyebrow: 'bounce tracking',
    whySectionHeadline: 'Pinpoint bounces by campaign and mailbox.',
    whySectionEyebrow: 'delivery signals',
    detailsHeadline: 'Granular bounce data, not just averages.',
    detailsEyebrow: 'per-send clarity',
    howItWorks: [
      { step: 1, title: 'Delivery status tracked per send', description: 'Every email\'s delivery outcome is recorded. You can see bounce data in your campaign analytics and mailbox metrics.' },
      { step: 2, title: 'Bounce data visible in analytics', description: 'Campaign analytics show bounce rates alongside other metrics like open rates and reply rates. You can drill down by campaign, mailbox, or time period.' },
      { step: 3, title: 'Use the data to make decisions', description: 'High bounce rates on a specific campaign might mean bad list data. High bounces on a specific mailbox might point to a reputation issue. The data helps you figure out the root cause.' },
    ],
    useCases: [
      { title: 'Evaluating data providers', description: 'Just imported a list from a new vendor? Check the bounce rate on that campaign. If it\'s above 2%, the data quality is poor and you know not to buy from them again.' },
      { title: 'Comparing mailbox performance', description: 'Track bounce rates per mailbox to identify which ones might have reputation issues that need attention.' },
      { title: 'Campaign-level diagnostics', description: 'Bounce rates that vary significantly between campaigns usually point to list quality differences. The per-campaign tracking makes this easy to spot.' },
    ],
    competitorCallout: {
      title: 'Bounce data where you need it, not buried in a separate report',
      description: 'Sendbox includes bounce tracking directly in your campaign and mailbox analytics. You don\'t need to go to a separate tool or export data to understand what\'s bouncing and why.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Per-campaign and per-mailbox visibility',
        description: 'Aggregate bounce rates hide the real story. A 2% overall bounce rate might mean one campaign is at 10% and the rest are at 0.5%. Sendbox tracks bounces per campaign and per mailbox so you can pinpoint exactly where problems are occurring instead of guessing.',
      },
      {
        title: 'Bounce data feeds into the bigger picture',
        description: 'Bounce rates don\'t exist in isolation. They\'re part of your overall deliverability story alongside open rates, reply rates, and spam placement. Sendbox presents bounce data alongside all your other metrics so you can understand the full picture.',
      },
    ],
    benefits: [
      { title: 'Per-send tracking', description: 'Every email\'s delivery outcome is recorded so nothing falls through the cracks.' },
      { title: 'Campaign-level bounce rates', description: 'See bounce rates for each campaign to identify list quality issues quickly.' },
      { title: 'Mailbox-level bounce rates', description: 'Track bounces per mailbox to spot reputation problems on specific sending addresses.' },
      { title: 'Integrated analytics', description: 'Bounce data lives alongside open rates, reply rates, and other metrics in your analytics dashboard.' },
    ],
    faqs: [
      { question: 'How does Sendbox track email bounces?', answer: 'Sendbox records the delivery status of every email sent. Bounce data is available in your campaign analytics and mailbox metrics, broken down by campaign and by mailbox.' },
      { question: 'Does Sendbox automatically alert me about high bounce rates?', answer: 'Bounce data is available in your analytics dashboard where you can monitor rates per campaign and per mailbox. You\'ll want to check your analytics regularly, especially after launching campaigns to new lists.' },
      { question: 'What bounce rate is considered too high?', answer: 'ESPs generally start penalizing senders when bounce rates exceed 2%. If you see rates climbing above that on any campaign, it usually means the list data needs cleaning. Use email validation on import to keep bounce rates low.' },
    ],
    seo: {
      title: 'Real-time Email Bounce Monitoring',
      description: 'Sendbox tracks every email bounce per campaign and per mailbox. Pinpoint list quality issues and reputation problems with granular delivery analytics.',
      keywords: ['email bounce monitoring', 'cold email bounce rate', 'bounce tracking tool', 'email bounce detection', 'sendbox bounce monitoring', 'bounce rate per campaign', 'mailbox bounce tracking', 'sendbox', 'email delivery tracking', 'cold email bounce tracking 2026', 'reduce email bounce rate', 'bounce analytics tool', 'email bounce rate monitor', 'per mailbox bounce data'],
    },
  },
  {
    slug: 'blacklist-monitoring',
    name: 'Blacklist Monitoring',
    category: 'Monitoring',
    headline: 'Get notified the day your sender reputation breaks.',
    description: 'Continuous blacklist monitoring tracks every sending IP and domain on your account around the clock. When a listing appears, you get an alert before reply rates start moving. The point is not the scan itself but the time between listing and discovery.',
    icon: 'ProhibitIcon',
    benefitsHeadline: 'Hours instead of weeks between listing and discovery.',
    benefitsEyebrow: 'ongoing surveillance',
    whySectionHeadline: 'Manual checking does not scale. Continuous monitoring does.',
    whySectionEyebrow: 'reputation tracking',
    detailsHeadline: 'Why time-to-detection matters more than scan accuracy.',
    detailsEyebrow: 'mean time to detect',
    howItWorks: [
      { step: 1, title: 'Add IPs and domains to the watchlist', description: 'Every IP and sender domain you connect to Sendbox gets added to the monitoring watchlist automatically. You do not start scans; the system runs them.' },
      { step: 2, title: 'Continuous scanning across major blocklists', description: 'Watched assets get re-checked on a rolling schedule against every major email blocklist. New listings surface within hours of appearing, not weeks later when your open rates crater.' },
      { step: 3, title: 'Alert when status changes', description: 'A listing event triggers an alert in the dashboard with the affected asset, the listing source, and the recommended action. No notification noise on clean scans.' },
    ],
    useCases: [
      { title: 'Mailbox fleet reputation tracking', description: 'Agencies running hundreds of mailboxes need rolling visibility, not per-mailbox manual scans. Monitoring handles the scale that manual checks cannot.' },
      { title: 'Mailbox warmup phase oversight', description: 'New mailboxes are most vulnerable to early listings. Continuous monitoring catches problems during warmup before they become production incidents.' },
      { title: 'Long-tail campaign reputation drift', description: 'Reputation degrades slowly across months of sending. Monitoring surfaces the gradual drift that point-in-time checks miss.' },
    ],
    competitorCallout: {
      title: 'Monitoring is built in, not metered',
      description: 'Most cold email tools sell blacklist monitoring as a separate paid product or skip it entirely. Sendbox ships continuous monitoring with every plan, covering every connected IP and domain by default.',
      competitors: ['Instantly', 'Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'The cost of not knowing is measured in campaigns, not scans',
        description: 'A blacklisted IP that keeps sending burns leads for as long as it takes you to notice. Teams without monitoring usually find out after a week or two of declining reply rates, by which point the listing has spread and the leads in those campaigns are unrecoverable. Continuous monitoring compresses the discovery time to hours.',
      },
      {
        title: 'Watchlists scale where manual checks cannot',
        description: 'A solo operator can manually scan two IPs before each campaign. An agency with 200 mailboxes across 40 IPs cannot. Watchlists shift the work from per-campaign rituals to background infrastructure, which is the only model that scales past a handful of mailboxes.',
      },
    ],
    benefits: [
      { title: 'Automatic watchlist coverage', description: 'Every connected IP and domain is monitored by default. Nothing to enable, nothing to remember to check.' },
      { title: 'Alerts, not dashboards', description: 'You get notified on status changes rather than having to remember to log in and run scans.' },
      { title: 'Multi-blocklist aggregation', description: 'Every major blocklist consolidated into one alert stream instead of separate per-list subscriptions.' },
      { title: 'Hours to detection, not weeks', description: 'Rolling scans catch listings shortly after they appear rather than after they have hurt several campaigns.' },
    ],
    faqs: [
      { question: 'How often does monitoring re-scan my IPs and domains?', answer: 'On a rolling schedule designed so that any single asset gets re-checked frequently enough to surface new listings within hours of appearing, without overwhelming blocklist providers with redundant queries.' },
      { question: 'How do I know if a listing is detected?', answer: 'Status changes trigger an in-dashboard alert with the affected asset, the listing source, and the recommended action. Clean rescans do not trigger notifications, so the alert stream stays signal-only.' },
      { question: 'How is monitoring different from the on-demand blacklist check tool?', answer: 'Monitoring runs continuously in the background across every connected asset. The check tool is a manual on-demand lookup for one specific IP or domain when you want to verify it right now. Different jobs.' },
    ],
    seo: {
      title: 'Continuous Blacklist Monitoring for Cold Email Senders',
      description: 'Automatic watchlist monitoring of every connected IP and domain against major blocklists, with alerts on new listings within hours instead of weeks.',
      keywords: ['blacklist monitoring service', 'continuous ip blacklist alert', 'email reputation monitoring', 'sender reputation watchlist', 'sendbox blacklist monitoring', 'automated blocklist tracker', 'ip blacklist notification', 'mailbox fleet reputation', 'long-term blacklist surveillance', 'cold email mtbf monitoring', 'email sender reputation tracking', 'blocklist alert system', 'ongoing deliverability monitoring'],
    },
  },

  // Testing
  {
    slug: 'inbox-placement-testing',
    name: 'Inbox Placement Testing',
    category: 'Testing',
    headline: 'See where your email lands before you press send.',
    description: 'Send your email to seed accounts and find out where it lands: inbox, spam, or somewhere in between. Sendbox shows you inbox rate, spam rate, and an overall score so you know if you\'re ready to launch.',
    icon: 'TargetIcon',
    benefitsHeadline: 'Test placement before burning leads.',
    benefitsEyebrow: 'placement testing',
    whySectionHeadline: 'Test first, send when you are ready.',
    whySectionEyebrow: 'pre-launch checks',
    detailsHeadline: 'Fix placement before it costs you leads.',
    detailsEyebrow: 'zero-risk testing',
    howItWorks: [
      { step: 1, title: 'Start a placement test', description: 'Pick the email you want to test and kick off a placement test from your dashboard. Sendbox sends it to seed accounts across major providers.' },
      { step: 2, title: 'Test progresses through stages', description: 'Your test moves from pending to sending to monitoring to completed. You can track its status the whole way through.' },
      { step: 3, title: 'Results show inbox and spam rates', description: 'When the test completes, you get your inbox rate percentage, spam rate percentage, and an overall placement score.' },
    ],
    useCases: [
      { title: 'Pre-launch validation', description: 'Test every campaign before it goes live. Finding out you\'re landing in spam after 5,000 sends is expensive. Finding out before is free.' },
      { title: 'Subject line and copy testing', description: 'Swap your subject line or tweak your body copy and retest. See which changes move you from spam to inbox.' },
      { title: 'Post-warmup readiness check', description: 'Finished warming up a new domain? Run a placement test to confirm you\'re actually hitting inbox before launching your first campaign.' },
    ],
    competitorCallout: {
      title: 'Know your placement before you burn a single lead',
      description: 'Many cold email platforms don\'t offer inbox placement testing at all. You send your campaign and hope for the best. Sendbox lets you test first, so you can fix issues when the cost is zero.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Fix placement problems before they cost you leads',
        description: 'Most teams discover they\'re landing in spam after a campaign has already gone out and the reply rates are terrible. By then, the damage is done and the leads are burned. Placement testing lets you catch and fix issues when the cost is zero: before a single campaign email is sent.',
      },
      {
        title: 'Clear results, not a wall of data',
        description: 'Inbox rate, spam rate, overall score. That\'s what you get. No need to interpret complicated charts or decode cryptic metrics. If your inbox rate is high and your spam rate is low, you\'re good to go. If not, tweak and retest.',
      },
    ],
    benefits: [
      { title: 'Test before sending', description: 'Know your inbox placement before your campaign goes live. Don\'t burn leads to find out you\'re in spam.' },
      { title: 'Clear metrics', description: 'Inbox rate percentage, spam rate percentage, and overall score. Simple and actionable.' },
      { title: 'Status tracking', description: 'Follow your test from pending through sending and monitoring to completed. You always know where it stands.' },
      { title: 'Iterate and retest', description: 'Make changes to your email and run another test. Keep iterating until placement looks right.' },
    ],
    faqs: [
      { question: 'How does inbox placement testing work?', answer: 'Sendbox sends your email to seed accounts across email providers. It then checks where each email landed and reports back with your inbox rate, spam rate, and overall placement score.' },
      { question: 'How long do inbox placement test results take?', answer: 'Tests move through stages: pending, sending, monitoring, then completed. The full process typically takes a few minutes, though it can vary depending on provider response times.' },
      { question: 'What statuses can a placement test have?', answer: 'Tests go through pending, sending, monitoring, and then either completed, failed, or expired. You can track the status on your dashboard throughout the process.' },
    ],
    seo: {
      title: 'Inbox Placement Testing Tool',
      description: 'Sendbox inbox placement testing shows where your emails land before you send. Get inbox rate, spam rate, and a score to fix issues before burning leads.',
      keywords: ['inbox placement test', 'email placement testing tool', 'inbox delivery test', 'email spam test tool', 'where do my emails land', 'sendbox inbox placement', 'test email deliverability', 'sendbox', 'inbox vs spam test', 'email placement score', 'pre send email test 2026', 'cold email placement test', 'email seed test tool', 'check inbox placement'],
    },
  },
  {
    slug: 'blacklist-check',
    name: 'Blacklist Check Tool',
    category: 'Testing',
    headline: 'Look up any IP or domain right now and get the answer.',
    description: 'On-demand blacklist lookup for a single IP or domain. You type the address, you get back the listing status across every major blocklist with a 0-100 health score. Built for one-off verification, not background monitoring.',
    icon: 'ShieldWarningIcon',
    benefitsHeadline: 'Direct lookup, immediate answer.',
    benefitsEyebrow: 'on-demand tool',
    whySectionHeadline: 'Sometimes you need to know about a specific IP, right now.',
    whySectionEyebrow: 'targeted lookups',
    detailsHeadline: 'A lookup tool, not a monitoring service.',
    detailsEyebrow: 'manual verification',
    howItWorks: [
      { step: 1, title: 'Type an IP address or domain', description: 'Paste any IPv4 address or domain into the lookup box. You do not need to have it connected to your Sendbox account first.' },
      { step: 2, title: 'Lookup queries blocklists in parallel', description: 'The tool fans out the query across every major email blocklist concurrently. Results come back within seconds, not the minutes a sequential check would take.' },
      { step: 3, title: 'Read the score and per-list breakdown', description: 'You get a single 0-100 health score for quick decisions, plus the per-blocklist breakdown if you need to know which specific list flagged the asset and what delisting steps apply.' },
    ],
    useCases: [
      { title: 'Vetting a domain you are about to buy', description: 'Inherited domains carry inherited listings. Run the lookup before purchase to avoid paying for a domain that already needs delisting work.' },
      { title: 'Diagnosing a deliverability drop', description: 'When a single campaign\'s open rates crater, the lookup tells you within seconds whether the cause is a fresh listing on the sending IP.' },
      { title: 'Verifying a delisting request worked', description: 'After requesting removal from a blocklist, run the lookup a few hours later to confirm the delisting completed before you resume campaigns.' },
    ],
    competitorCallout: {
      title: 'Free standalone lookup vs metered API plans',
      description: 'Most blacklist lookup services price per query or behind API plans. Sendbox\'s in-dashboard lookup tool is free and unmetered for Sendbox customers, so the tool stops feeling expensive to use and starts being something you actually run.',
      competitors: ['Instantly'],
    },
    detailBlocks: [
      {
        title: 'When to reach for the lookup vs the monitoring service',
        description: 'The lookup tool is for verifying one specific asset on demand: a domain you are about to buy, an IP a colleague mentioned, a sending address you suspect is the cause of a problem. The continuous monitoring service handles the ongoing surveillance work for assets already in your account. Different tools, different jobs, and most teams end up using both at different moments.',
      },
      {
        title: 'Per-blocklist visibility, not just a score',
        description: 'The 0-100 score is the quick answer. The per-blocklist breakdown is the actionable answer. Knowing which specific list flagged you determines the delisting workflow, since each major blocklist has its own removal process. The lookup surfaces that detail rather than abstracting it away.',
      },
    ],
    benefits: [
      { title: 'Lookup any address, even outside your account', description: 'You do not need to add the IP or domain to Sendbox first. Run lookups on assets you are evaluating, vetting, or troubleshooting.' },
      { title: 'Parallel blocklist queries', description: 'Concurrent queries across every major list return results in seconds rather than minutes of sequential waiting.' },
      { title: 'Per-blocklist breakdown', description: 'See exactly which lists flagged the asset, so you know which delisting workflow applies.' },
      { title: 'Free for Sendbox customers', description: 'No per-query fees, no monthly caps, no API plan to negotiate.' },
    ],
    faqs: [
      { question: 'Do I need to connect an IP to Sendbox to look it up?', answer: 'No. The lookup tool accepts any IP address or domain, including ones not in your Sendbox account. This is what makes it useful for vetting domains before purchase or checking assets you do not own.' },
      { question: 'How is the lookup different from continuous blacklist monitoring?', answer: 'The lookup is a one-shot manual query for one specific asset, returning results immediately. Continuous monitoring runs in the background across every connected asset and alerts you on status changes. Use the lookup for ad-hoc verification, monitoring for ongoing surveillance.' },
      { question: 'Why does the breakdown matter if the score is already there?', answer: 'The score tells you whether to send. The breakdown tells you what to do if you cannot. Each major blocklist has its own delisting workflow, so knowing which specific list flagged the asset is the first step toward removing the listing.' },
    ],
    seo: {
      title: 'Free Email Blacklist Lookup Tool',
      description: 'On-demand IP and domain blacklist lookup with parallel queries across major blocklists. Get a health score plus per-list breakdown in seconds, free.',
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
      { step: 1, title: 'Validation runs on import', description: 'Upload a CSV or add leads manually. Sendbox validates every address automatically during the import process. There\'s no separate step to remember.' },
      { step: 2, title: 'Multi-level verification', description: 'Syntax checks catch formatting errors. Domain and MX record checks confirm the domain receives email. Mailbox-level verification checks if the specific address exists. Catch-all detection identifies domains that accept everything.' },
      { step: 3, title: 'Results categorized with confidence scores', description: 'Each address is categorized as deliverable, undeliverable, risky, or unknown. Every result includes a confidence score so you can set your own threshold for what enters your campaigns.' },
    ],
    useCases: [
      { title: 'Cleaning purchased or scraped lists', description: 'Bought a list from a data provider? Validation reveals the real quality of what you paid for. A high percentage of undeliverable addresses means bad data.' },
      { title: 'Catch-all domain handling', description: 'Some domains accept email to any address, making it hard to verify individual mailboxes. Sendbox detects catch-all domains and flags them so you can decide how to handle them.' },
      { title: 'Protecting your bounce rate', description: 'ESPs start penalizing you when bounce rates exceed 2%. Validation keeps you below that threshold by filtering out bad addresses before they bounce.' },
    ],
    competitorCallout: {
      title: 'Validation that runs automatically, not a step your team forgets',
      description: 'Most platforms make validation a separate action. Someone has to remember to click the button, and they often don\'t. Sendbox validates during import. By the time your leads are in the system, bad addresses are already flagged. Campaigns start clean by default.',
      competitors: ['Smartlead', 'Lemlist'],
    },
    detailBlocks: [
      {
        title: 'Four categories, not just pass or fail',
        description: 'Binary validation misses nuance. An address might be technically valid but risky. Sendbox sorts every address into four categories: deliverable (safe to send), undeliverable (don\'t send), risky (proceed with caution), and unknown (couldn\'t determine status). Each result includes a confidence score so you can draw your own line on risk tolerance.',
      },
      {
        title: 'Catch-all detection prevents false positives',
        description: 'Some domains accept email to any address, even ones that don\'t exist. Standard validation marks these as "valid" because the server accepts the connection. Sendbox detects catch-all domains specifically and flags them so you know the validation result has lower confidence.',
      },
    ],
    benefits: [
      { title: 'Validates on import', description: 'No separate step. Validation happens automatically when leads enter your system.' },
      { title: 'Four-category classification', description: 'Deliverable, undeliverable, risky, and unknown. More useful than a simple pass/fail.' },
      { title: 'Confidence scoring', description: 'Each address gets a confidence score. You choose how aggressive your filtering should be.' },
      { title: 'Catch-all detection', description: 'Domains that accept everything are flagged so you know which validation results to trust less.' },
    ],
    faqs: [
      { question: 'What does email validation check for?', answer: 'Syntax correctness, domain validity (MX records exist), and mailbox existence. It also detects catch-all domains that accept mail to any address. Each email gets categorized as deliverable, undeliverable, risky, or unknown with a confidence score.' },
      { question: 'When does validation run?', answer: 'Automatically during lead import. When you upload a CSV or add leads, validation runs as part of the import process. You don\'t need to trigger it separately.' },
      { question: 'What are the validation result categories?', answer: 'Deliverable (safe to send), undeliverable (don\'t send), risky (might bounce), and unknown (couldn\'t determine). Each result also includes a confidence score for more granular filtering.' },
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
