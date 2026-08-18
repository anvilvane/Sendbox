const toolsData = [
  {
    slug: 'blacklist-checker',
    illustration: 'shield',
    name: 'Email & IP Blacklist Checker',
    headline: 'Free Email & IP Blacklist Checker',
    description: 'Check if your email, IP, or domain is on any blacklist. Scans 50+ databases and shows your health score instantly.',
    inputType: 'email-ip-domain',
    inputPlaceholder: 'Enter email, IP, or domain...',
    inputLabel: 'Check your email, IP, or domain',

    stats: [
      { value: '50+', label: 'Blacklists checked' },
      { value: '<3s', label: 'Average check time' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter your email, IP, or domain', detail: 'We auto-detect the input type and run the right checks.' },
      { step: 'We scan 50+ blacklist databases', detail: 'Real-time queries against every major DNSBL, RBL, and URI blacklist.' },
      { step: 'Get your health score and listings', detail: 'See exactly which lists flagged you, with a 0-100 health score.' },
    ],

    whyItMatters: 'Being on an email blacklist means your emails go straight to spam. ISPs and email providers check blacklists before delivering your messages. Even one listing can tank your deliverability. Regular monitoring catches problems before they affect your campaigns.',

    ctaHeadline: 'Stop checking manually',
    ctaDescription: 'Sendbox monitors all your domains and IPs around the clock. Get alerted the moment you hit a blacklist, not days later.',
    proFeatures: [
      { icon: 'Bell', title: 'Automatic monitoring', desc: 'Get alerted the moment you land on a blacklist' },
      { icon: 'ChartLineUp', title: 'Historical tracking', desc: 'See your reputation trend over time across all lists' },
      { icon: 'ArrowsClockwise', title: 'Scheduled checks', desc: 'Daily automated checks across all your domains and IPs' },
    ],

    faqs: [
      { question: 'What is an email blacklist?', answer: 'An email blacklist (also called a blocklist or DNSBL) is a database of IP addresses and domains that have been flagged for sending spam or malicious content. Email providers check these lists to filter incoming mail.' },
      { question: 'How do I get removed from a blacklist?', answer: 'Each blacklist has its own removal process. Most require you to visit the blacklist provider website, submit a delisting request, and wait 24-48 hours. The key is fixing the root cause (compromised account, bad list, poor sending practices) before requesting removal.' },
      { question: 'How often should I check my blacklist status?', answer: 'At minimum, check weekly. If you send high volumes of cold email, check daily. Sendbox includes automatic blacklist monitoring on every plan that alerts you immediately when a listing is detected.' },
      { question: 'Can I check any email address or just my own?', answer: 'You can check any email, IP, or domain. This is useful for verifying your own sending reputation or checking if a prospect domain has deliverability issues.' },
      { question: 'What does the health score mean?', answer: 'The health score (0-100) represents the percentage of blacklists where you are NOT listed. A score of 100 means you are clean across all checked databases. Below 90 indicates potential deliverability problems.' },
    ],

    seo: {
      title: 'Free Email & IP Blacklist Checker | Scan 50+ Databases Instantly',
      description: 'Check if your email, IP, or domain is on any blacklist. We scan 50+ DNSBL and RBL databases and show a health score with every listing. Free, no signup.',
      keywords: ['email blacklist checker', 'ip blacklist check', 'domain blacklist checker', 'is my ip blacklisted', 'is my email blacklisted', 'free blacklist checker', 'email blacklist lookup', 'ip blacklist lookup', 'check email reputation', 'dnsbl checker', 'rbl check', 'blacklist monitoring', 'email deliverability test', 'spam blacklist check', 'sendbox'],
    },
  },

  {
    slug: 'spf-dkim-checker',
    illustration: 'lock',
    name: 'SPF, DKIM & DMARC Checker',
    headline: 'Free SPF, DKIM & DMARC Checker',
    description: 'Verify your domain email authentication in one click. See which records pass, which fail, and how to fix them.',
    inputType: 'domain',
    inputPlaceholder: 'Enter domain (e.g., yourdomain.com)',
    inputLabel: 'Check your domain authentication',

    stats: [
      { value: '3', label: 'Records verified' },
      { value: '10+', label: 'DKIM selectors tested' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter your domain name', detail: 'Just the domain. We handle the DNS lookups automatically.' },
      { step: 'We query live DNS records', detail: 'SPF, DKIM (across 10+ common selectors), and DMARC records checked in parallel.' },
      { step: 'Get pass/fail for each record', detail: 'See the raw record, whether it passes, and what to fix if it doesn\'t.' },
    ],

    whyItMatters: 'SPF, DKIM, and DMARC are the three pillars of email authentication. Without them, email providers are more likely to mark your messages as spam. Most cold email deliverability problems start with misconfigured authentication records.',

    ctaHeadline: 'Keep your records healthy',
    ctaDescription: 'DNS records break silently. Sendbox watches your SPF, DKIM, and DMARC across every domain and alerts you before deliverability drops.',
    proFeatures: [
      { icon: 'ShieldCheck', title: 'Continuous monitoring', desc: 'Get alerted if any auth record changes or breaks' },
      { icon: 'Fingerprint', title: 'DKIM rotation alerts', desc: 'Know when your DKIM keys need rotating before they expire' },
      { icon: 'Lock', title: 'Full DNS audit', desc: 'MX, A, CNAME, and TXT record analysis across all your domains' },
    ],

    faqs: [
      { question: 'What is SPF?', answer: 'SPF (Sender Policy Framework) is a DNS record that lists which servers are authorized to send email from your domain. It prevents spammers from spoofing your domain.' },
      { question: 'What is DKIM?', answer: 'DKIM (DomainKeys Identified Mail) adds a digital signature to your emails. The receiving server verifies this signature against a public key in your DNS to confirm the email was not modified in transit.' },
      { question: 'What is DMARC?', answer: 'DMARC (Domain-based Message Authentication, Reporting and Conformance) tells receiving servers what to do when SPF or DKIM checks fail. It can instruct servers to reject, quarantine, or allow the message.' },
      { question: 'Do I need all three records?', answer: 'Yes. SPF, DKIM, and DMARC work together. Missing any one of them weakens your email authentication and increases the chance of landing in spam. All three are required for proper cold email deliverability.' },
      { question: 'How do I fix a failing record?', answer: 'Each record is a DNS TXT entry. SPF and DMARC are set on your root domain. DKIM is typically set as a subdomain record provided by your email service. Check with your domain registrar or email provider for specific instructions.' },
    ],

    seo: {
      title: 'Free SPF, DKIM & DMARC Checker | Check Email Authentication',
      description: 'Verify your domain SPF, DKIM, and DMARC records in one click. See which records pass, which fail, and how to fix each one. Free, no signup.',
      keywords: ['spf checker', 'dkim checker', 'dmarc checker', 'spf record lookup', 'dkim record check', 'dmarc record check', 'free spf dkim dmarc checker', 'email authentication checker', 'domain email setup check', 'spf validator', 'dkim validator', 'dmarc lookup', 'email dns check', 'cold email domain setup', 'sendbox'],
    },
  },

  {
    slug: 'email-validator',
    illustration: 'envelope',
    name: 'Email Verifier',
    headline: 'Free Email Verifier',
    description: 'Check if an email address is real before you send. Detects invalid mailboxes, catch-all domains, and SEG-protected addresses.',
    inputType: 'email',
    inputPlaceholder: 'Enter email address to validate...',
    inputLabel: 'Validate an email address',

    stats: [
      { value: '95%+', label: 'Accuracy rate' },
      { value: '3', label: 'Verification layers' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter an email address', detail: 'Any address. Yours, a prospect\'s, or a list you\'re about to import.' },
      { step: 'We run 3-layer verification', detail: 'Format check, MX record lookup, and mailbox-level deliverability probe.' },
      { step: 'Get a clear verdict', detail: 'Deliverable, undeliverable, risky, or unknown, with the reason why.' },
    ],

    whyItMatters: 'Sending to invalid email addresses causes bounces. High bounce rates damage your sender reputation and can get you blacklisted. Validating emails before sending protects your deliverability and saves you from wasting outreach on dead addresses.',

    ctaHeadline: 'Unlimited email validation on every plan',
    ctaDescription: 'Powered by Enrich.so out of the box, or bring your own API key. Sendbox supports 10+ major enrichment and validation providers. Validate your entire list on import.',

    proFeatures: [
      { icon: 'Users', title: 'Bulk validation', desc: 'Validate entire CSV lists on import, thousands at a time' },
      { icon: 'ArrowsClockwise', title: '10+ providers', desc: 'Enrich.so built-in, or bring your own API keys for any provider' },
      { icon: 'ListChecks', title: 'Auto-clean on import', desc: 'Invalid emails are flagged and skipped before your campaign starts' },
    ],

    faqs: [
      { question: 'How accurate is email validation?', answer: 'Format and MX record checks are highly accurate. Mailbox-level verification can detect most invalid addresses but some servers do not reveal whether a specific mailbox exists (catch-all domains). Overall accuracy is typically 95%+.' },
      { question: 'What does "risky" mean?', answer: 'A risky result means the email might be deliverable but has indicators that suggest problems: catch-all domain, disposable email provider, or role-based address (info@, admin@). Proceed with caution.' },
      { question: 'Can I validate emails in bulk?', answer: 'This free tool validates one email at a time. Sendbox includes bulk email validation on every plan using 10+ provider integrations (Enrich.so included, or bring your own API key).' },
      { question: 'Does validation send an email?', answer: 'No. Email validation checks DNS records and sometimes pings the mail server without actually sending a message. Your address is never contacted.' },
      { question: 'How is this different from email verification?', answer: 'Email validation and verification are the same thing. Both terms refer to checking whether an email address exists and can receive mail.' },
    ],

    seo: {
      title: 'Free Email Verifier | Check If Any Email Address Is Real',
      description: 'Verify if an email address exists and can receive mail. Detects invalid mailboxes, catch-all domains, and disposable addresses. Free, no signup.',
      keywords: ['email verifier', 'free email verifier', 'verify email address', 'email checker', 'check if email is valid', 'email validation tool', 'free email checker', 'email address verifier', 'email verification', 'bulk email verifier', 'check email before sending', 'email bounce checker', 'catch all email check', 'cold email verification', 'sendbox'],
    },
  },

  {
    slug: 'inbox-placement-test',
    illustration: 'inbox',
    name: 'Inbox Placement Test',
    headline: 'Free Inbox Placement Test',
    description: 'Test if your emails land in primary, promotions, or spam. Works across Gmail, Outlook, and Google Workspace.',
    inputType: 'inbox-placement',
    inputPlaceholder: '',
    inputLabel: 'Test your inbox placement',

    stats: [
      { value: '4', label: 'Provider types tested' },
      { value: '<5m', label: 'Results delivered' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Pick a provider and generate a test', detail: 'Choose Gmail, Outlook, Google Workspace, or Microsoft 365.' },
      { step: 'Send your test email', detail: 'We give you a unique code and seed mailboxes. Send from the account you want to test.' },
      { step: 'See exactly where you land', detail: 'Primary, promotions, or spam, with a score and actionable diagnostics.' },
    ],

    whyItMatters: 'Inbox placement is the ultimate deliverability metric. Open rates and bounce rates tell you part of the story, but only a placement test shows where your emails actually land. Running tests before launching campaigns prevents you from burning leads on emails that go straight to spam.',

    ctaHeadline: 'Unlimited placement tests across all mailboxes',
    ctaDescription: 'Run automated placement tests across thousands of mailboxes on Sendbox. All providers, unlimited tests, on every plan.',

    proFeatures: [
      { icon: 'Gauge', title: 'Unlimited tests', desc: 'Run as many placement tests as you need, across all providers' },
      { icon: 'Target', title: 'All providers at once', desc: 'Test Gmail + Outlook + Workspace + M365 in a single run' },
      { icon: 'Bell', title: 'Bulk testing', desc: 'Test placement across thousands of mailboxes at once' },
    ],

    faqs: [
      { question: 'How does the inbox placement test work?', answer: 'We provide test mailboxes across Gmail and Outlook (personal and business). You send a test email to these mailboxes. We then check where your email landed: primary inbox, promotions tab, spam folder, or not delivered.' },
      { question: 'How long does the test take?', answer: 'Results are typically available within 2-5 minutes after you send the test email. The system monitors the test mailboxes for up to 5 minutes to catch delayed deliveries.' },
      { question: 'What email providers are tested?', answer: 'The free test checks one provider type at a time. Available types: Personal Gmail, Personal Outlook, Business Gmail (Google Workspace), and Business Outlook (Microsoft 365).' },
      { question: 'How often should I run placement tests?', answer: 'Before every major campaign launch, after changing email copy or sending infrastructure, and weekly for ongoing monitoring. Sendbox includes unlimited inbox placement tests on every plan.' },
      { question: 'What if my emails land in spam?', answer: 'Check your SPF, DKIM, and DMARC records first. Then review your email content for spam triggers. Consider warming up your mailbox. If you are on shared infrastructure, other senders may be affecting your placement.' },
    ],

    seo: {
      title: 'Free Inbox Placement Test | Gmail, Outlook & Workspace',
      description: 'See exactly where your email lands: primary inbox, promotions, or spam. Tests real seed mailboxes across Gmail, Outlook, and Microsoft 365. Free.',
      keywords: ['inbox placement test', 'free inbox placement test', 'email deliverability test', 'email spam test', 'where do my emails land', 'gmail inbox test', 'outlook inbox test', 'check email deliverability', 'inbox vs spam test', 'free deliverability test', 'email placement checker', 'cold email deliverability test', 'promotions tab test', 'inbox rate checker', 'sendbox'],
    },
  },

  {
    slug: 'spam-checker',
    illustration: 'shield',
    name: 'Email Spam Checker',
    headline: 'Free Email Spam Checker',
    description: 'Paste your email copy and get a spam score. We scan for trigger words, formatting issues, and patterns that land you in spam.',
    inputType: 'textarea',
    inputPlaceholder: 'Paste your email content here...',
    inputLabel: 'Check your email for spam triggers',

    stats: [
      { value: '200+', label: 'Spam triggers checked' },
      { value: 'Instant', label: 'Analysis time' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Paste your email subject and body', detail: 'Works with plain text or HTML. Include the subject line for a complete check.' },
      { step: 'We scan for 200+ spam triggers', detail: 'Checks trigger words, excessive caps, link ratios, formatting, and more.' },
      { step: 'Get a score with specific fixes', detail: 'See exactly which words and patterns flagged, with suggestions to fix each one.' },
    ],

    whyItMatters: 'Spam filters are getting smarter, but they still catch legitimate emails. Words like "free," "guarantee," and "act now" can trigger filters even in professional outreach. Checking your copy before sending prevents wasted sends and protects your sender reputation.',

    ctaHeadline: 'Catch spam triggers before sending',
    ctaDescription: 'Sendbox scans every email in your sequence for spam triggers automatically. No manual checks needed.',

    proFeatures: [
      { icon: 'ShieldCheck', title: 'Pre-send checks', desc: 'Automatically scan every email before it leaves your outbox' },
      { icon: 'ChartLineUp', title: 'Deliverability analytics', desc: 'Track open rates, spam rates, and placement across all campaigns' },
      { icon: 'Bell', title: 'Spam rate alerts', desc: 'Get notified when your spam rate exceeds safe thresholds' },
    ],

    faqs: [
      { question: 'What spam triggers does this check for?', answer: 'We check for 200+ known spam trigger words and phrases, excessive capitalization, too many exclamation marks, high link-to-text ratio, image-heavy content, and common formatting patterns that spam filters flag.' },
      { question: 'Will this guarantee my emails land in the inbox?', answer: 'No tool can guarantee inbox placement. Spam filtering depends on content, sender reputation, authentication (SPF/DKIM/DMARC), and recipient engagement. This tool helps you fix the content side of the equation.' },
      { question: 'Does this work for cold emails?', answer: 'Yes. Cold emails are especially vulnerable to spam filtering because recipients have not opted in. This tool helps you write copy that avoids the most common cold email spam triggers.' },
      { question: 'Should I check every email I send?', answer: 'Check your templates and any new copy before launching campaigns. You do not need to check every individual email if you are using tested templates.' },
      { question: 'What is a good spam score?', answer: 'A score of 80+ means your email is unlikely to trigger spam filters. Between 50-80 means you have some issues to fix. Below 50 means your email has significant spam risk and should be rewritten.' },
    ],

    seo: {
      title: 'Free Email Spam Checker | Test Your Email for Spam Triggers',
      description: 'Check your email for spam trigger words, formatting issues, and patterns before you send. Get a spam score with specific fixes. Free, no signup.',
      keywords: ['email spam checker', 'spam word checker', 'free spam checker', 'email spam test', 'check email for spam words', 'spam trigger checker', 'email deliverability test', 'spam score checker', 'cold email spam check', 'email content checker', 'spam filter test', 'will my email go to spam', 'spam word list', 'email spam tester free', 'sendbox'],
    },
  },

  {
    slug: 'email-signature-generator',
    wide: true,
    illustration: 'envelope',
    name: 'Email Signature Generator',
    headline: 'Free Email Signature Generator',
    description: 'Create a professional HTML email signature in minutes. Works with Gmail, Outlook, and Apple Mail.',
    inputType: 'form',
    inputPlaceholder: '',
    inputLabel: 'Build your email signature',

    stats: [
      { value: 'HTML', label: 'Copy-paste ready' },
      { value: '5+', label: 'Templates' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Fill in your details', detail: 'Name, title, company, phone, email, and social links.' },
      { step: 'Pick a layout', detail: 'Choose from clean, professional templates designed for cold outreach.' },
      { step: 'Copy and paste into your email client', detail: 'Works with Gmail, Outlook, Apple Mail, and any client that supports HTML signatures.' },
    ],

    whyItMatters: 'A professional email signature builds trust and credibility. In cold outreach, it is often the first thing a prospect checks to see if you are a real person. A well-designed signature with your photo, title, and company information increases reply rates.',

    ctaHeadline: 'Manage signatures across your team',
    ctaDescription: 'Sendbox lets you deploy and update email signatures across every connected mailbox from one dashboard.',

    proFeatures: [
      { icon: 'Users', title: 'Team signatures', desc: 'Manage signatures across your entire team from one dashboard' },
      { icon: 'ArrowsClockwise', title: 'Auto-sync', desc: 'Update once, deploy everywhere across all connected mailboxes' },
      { icon: 'ChartLineUp', title: 'Click tracking', desc: 'Track clicks on your signature links and social profiles' },
    ],

    faqs: [
      { question: 'Will this work with Gmail?', answer: 'Yes. Copy the generated signature HTML and paste it into Gmail Settings > Signature. The formatting, images, and links will all be preserved.' },
      { question: 'Can I add my photo or company logo?', answer: 'Yes. You can add a profile photo URL and company logo URL. We recommend hosting images on a reliable CDN so they load quickly in every email client.' },
      { question: 'Will the signature look the same in every email client?', answer: 'HTML email signatures render slightly differently across clients. Our templates are tested across Gmail, Outlook, and Apple Mail to ensure consistent rendering in the most popular clients.' },
      { question: 'Can I add social media links?', answer: 'Yes. Add links to LinkedIn, Twitter/X, and your website. They will appear as text links in the signature.' },
      { question: 'Is there a limit on how many signatures I can create?', answer: 'No. Create as many signatures as you need for different team members or use cases. Everything is free.' },
    ],

    seo: {
      title: 'Free Email Signature Generator | Professional HTML Signatures',
      description: 'Create a professional HTML email signature for Gmail, Outlook, and Apple Mail. Pick a template, fill in your details, and copy-paste. Free.',
      keywords: ['email signature generator', 'free email signature', 'html email signature', 'email signature template', 'gmail signature generator', 'outlook email signature', 'professional email signature', 'email signature maker', 'create email signature', 'email footer generator', 'business email signature', 'cold email signature', 'email signature design', 'free signature generator', 'sendbox'],
    },
  },

  {
    slug: 'warmup-calculator',
    wide: true,
    illustration: 'inbox',
    name: 'Email Warmup Calculator',
    headline: 'Free Email Warmup Calculator',
    description: 'Enter your target sending volume and get a day-by-day warmup schedule. Know exactly how many emails to send each day.',
    inputType: 'form',
    inputPlaceholder: '',
    inputLabel: 'Calculate your warmup schedule',

    stats: [
      { value: '30', label: 'Day schedule' },
      { value: '2', label: 'Growth models' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter your target daily volume', detail: 'How many emails per day do you want to reach after warmup?' },
      { step: 'Choose a growth model', detail: 'Linear (steady increase) or exponential (slow start, fast ramp).' },
      { step: 'Get your day-by-day schedule', detail: 'A 30-day plan showing exact daily send volumes with safety thresholds.' },
    ],

    whyItMatters: 'New mailboxes and IPs have no sender reputation. Sending too many emails too fast triggers spam filters and can permanently damage your deliverability. A gradual warmup builds reputation safely. Most deliverability problems come from skipping or rushing this step.',

    ctaHeadline: 'Warmup on autopilot',
    ctaDescription: 'Sendbox warms up every new mailbox automatically with human-like sending patterns. No schedules to manage.',

    proFeatures: [
      { icon: 'Gauge', title: 'Automated warmup', desc: 'Sendbox warms up your mailboxes automatically with human-like sending patterns' },
      { icon: 'ShieldCheck', title: 'Reputation monitoring', desc: 'Real-time tracking of your sender reputation across all mailboxes' },
      { icon: 'Bell', title: 'Auto-pause protection', desc: 'Automatically pauses sending if reputation drops below safe levels' },
    ],

    faqs: [
      { question: 'How long does email warmup take?', answer: 'Most mailboxes need 2-4 weeks of gradual warmup before reaching full sending volume. The exact timeline depends on your target volume and the age of your domain.' },
      { question: 'What is the difference between linear and exponential warmup?', answer: 'Linear warmup increases your daily volume by the same amount each day (e.g., +10/day). Exponential warmup starts slow and ramps up faster toward the end. Exponential is generally safer for new domains.' },
      { question: 'Do I need to warmup every new mailbox?', answer: 'Yes. Each new mailbox and IP address needs its own warmup period. Even if your domain has good reputation, a new mailbox on that domain needs time to establish its own sending history.' },
      { question: 'Can I warmup faster?', answer: 'Rushing warmup is the most common cause of deliverability problems. Stick to the schedule. If you need to send high volume sooner, add more mailboxes and warm them up in parallel.' },
      { question: 'What happens if I skip warmup?', answer: 'Sending high volume from a cold mailbox triggers spam filters immediately. Your emails will land in spam, your bounce rate will spike, and you may get your domain or IP blacklisted. Recovery can take weeks.' },
    ],

    seo: {
      title: 'Free Email Warmup Calculator | Plan Your Sending Schedule',
      description: 'Calculate your email warmup schedule with a day-by-day plan. Linear or exponential growth models. Know exactly how many to send each day. Free.',
      keywords: ['email warmup calculator', 'warmup schedule', 'email warmup plan', 'ip warmup calculator', 'domain warmup schedule', 'how to warm up email', 'email sending schedule', 'warmup email calculator', 'cold email warmup', 'mailbox warmup plan', 'email ramp up schedule', 'ip warming calculator', 'free warmup calculator', 'email deliverability warmup', 'sendbox'],
    },
  },

  {
    slug: 'subject-line-tester',
    illustration: 'envelope',
    name: 'Subject Line Tester',
    headline: 'Free Email Subject Line Tester',
    description: 'Score your email subject line before you send. Get feedback on length, spam risk, and engagement potential.',
    inputType: 'text',
    inputPlaceholder: 'Enter your subject line...',
    inputLabel: 'Test your subject line',

    stats: [
      { value: '12+', label: 'Factors scored' },
      { value: 'Instant', label: 'Results' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Type your subject line', detail: 'Enter the subject line you plan to use in your campaign.' },
      { step: 'We score it across 12+ factors', detail: 'Length, word count, spam triggers, capitalization, personalization, urgency, and more.' },
      { step: 'Get a score with improvement tips', detail: 'See what is working, what is not, and specific suggestions to improve open rates.' },
    ],

    whyItMatters: 'Your subject line determines whether your email gets opened or ignored. 47% of recipients decide to open an email based on the subject line alone. In cold outreach, a bad subject line means your carefully written email never gets read.',

    ctaHeadline: 'Test subject lines in real campaigns',
    ctaDescription: 'Sendbox A/B tests your subject lines across live campaigns and shows you which ones drive the most opens.',

    proFeatures: [
      { icon: 'ArrowsClockwise', title: 'A/B testing', desc: 'Test multiple subject lines against each other in real campaigns' },
      { icon: 'ChartLineUp', title: 'Open rate tracking', desc: 'See which subject lines perform best across your campaigns' },
      { icon: 'ListChecks', title: 'AI suggestions', desc: 'Get AI-generated subject line alternatives based on your email content' },
    ],

    faqs: [
      { question: 'What makes a good subject line?', answer: 'Good subject lines are 6-10 words, avoid spam triggers, create curiosity or urgency, and feel personal. They should be specific enough to set expectations but intriguing enough to earn the open.' },
      { question: 'How long should my subject line be?', answer: 'Aim for 6-10 words or 40-60 characters. Mobile devices truncate subject lines after about 35 characters, so put the most important words first.' },
      { question: 'Does capitalization matter?', answer: 'Yes. ALL CAPS triggers spam filters and feels aggressive. Title Case is acceptable but can feel formal. Sentence case or lowercase tends to perform best for cold outreach because it feels more personal.' },
      { question: 'Should I use emojis in subject lines?', answer: 'Emojis can increase open rates in marketing emails but tend to hurt performance in cold outreach. They can also trigger spam filters. Use sparingly or not at all for cold email.' },
      { question: 'What words should I avoid?', answer: 'Avoid classic spam triggers like "free," "guarantee," "act now," "limited time," and "click here." Also avoid excessive punctuation (!!!), all caps, and making promises that sound too good to be true.' },
    ],

    seo: {
      title: 'Free Email Subject Line Tester | Score Your Subject Line',
      description: 'Test your email subject line before you send. Get a score based on length, spam risk, and engagement factors. Free, no signup required.',
      keywords: ['subject line tester', 'email subject line tester', 'free subject line tester', 'subject line checker', 'email subject line score', 'test email subject line', 'subject line grader', 'email open rate tester', 'subject line analyzer', 'best email subject lines', 'cold email subject line', 'spam subject line check', 'subject line optimizer', 'email subject line tool', 'sendbox'],
    },
  },

  {
    slug: 'email-header-analyzer',
    wide: true,
    illustration: 'lock',
    name: 'Email Header Analyzer',
    headline: 'Free Email Header Analyzer',
    description: 'Paste raw email headers and see the full routing chain, authentication results, and delivery delays in a readable format.',
    inputType: 'textarea',
    inputPlaceholder: 'Paste email headers here...',
    inputLabel: 'Analyze email headers',

    stats: [
      { value: 'RFC 822', label: 'Standard compliant' },
      { value: 'SPF/DKIM', label: 'Auth checks parsed' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Copy the raw email headers', detail: 'In Gmail: open email > three dots > "Show original." In Outlook: open email > File > Properties.' },
      { step: 'Paste them into the analyzer', detail: 'We parse every hop, timestamp, authentication result, and routing decision.' },
      { step: 'See the full delivery chain', detail: 'Trace the email path from sender to recipient with timing, SPF/DKIM results, and delay analysis.' },
    ],

    whyItMatters: 'Email headers contain the complete story of how an email was delivered. When emails land in spam or get delayed, the headers tell you exactly why. Authentication failures, routing issues, and suspicious relay hops are all visible in the raw headers if you know where to look.',

    ctaHeadline: 'Monitor deliverability in real time',
    ctaDescription: 'Sendbox tracks authentication results and delivery routing across all your mailboxes. No headers to read manually.',

    proFeatures: [
      { icon: 'ShieldCheck', title: 'Deliverability dashboard', desc: 'Monitor authentication and routing across all your sending domains' },
      { icon: 'Bell', title: 'Failure alerts', desc: 'Get notified when SPF, DKIM, or DMARC checks fail on your outgoing mail' },
      { icon: 'ChartLineUp', title: 'Delivery analytics', desc: 'Track delivery times and identify infrastructure bottlenecks' },
    ],

    faqs: [
      { question: 'How do I find email headers?', answer: 'In Gmail: open the email, click the three dots menu, and select "Show original." In Outlook: open the email, go to File > Properties, and look for "Internet headers." Copy the full header block.' },
      { question: 'What do email headers contain?', answer: 'Headers contain the sender and recipient addresses, every server that handled the email, timestamps at each hop, SPF/DKIM/DMARC authentication results, and any spam filter scores applied along the way.' },
      { question: 'What is a "hop" in email headers?', answer: 'Each hop represents a mail server that received and forwarded the email. Headers are added by each server, so you can trace the exact path from sender to recipient and identify where delays occurred.' },
      { question: 'Can this tool tell me why my email went to spam?', answer: 'Often yes. The headers will show SPF/DKIM/DMARC pass or fail results, spam filter scores, and any flags added by receiving servers. This information helps diagnose why an email was filtered.' },
      { question: 'Is my email content visible in the headers?', answer: 'No. Email headers contain routing and authentication metadata only. The email body and attachments are not included in the headers section.' },
    ],

    seo: {
      title: 'Free Email Header Analyzer | Parse Email Headers Instantly',
      description: 'Analyze raw email headers in a readable format. See routing hops, delivery delays, and SPF/DKIM/DMARC authentication results. Free, no signup.',
      keywords: ['email header analyzer', 'email header parser', 'analyze email headers', 'free email header analyzer', 'email header checker', 'read email headers', 'email routing analyzer', 'email authentication check', 'email header tool', 'parse email headers', 'email hop analyzer', 'rfc 822 parser', 'email delivery trace', 'email header reader', 'sendbox'],
    },
  },

  {
    slug: 'dns-lookup',
    illustration: 'lock',
    name: 'DNS Lookup Tool',
    headline: 'Free DNS Lookup Tool',
    description: 'Look up MX, A, CNAME, TXT, and NS records for any domain. See exactly how your domain is configured.',
    inputType: 'domain',
    inputPlaceholder: 'Enter domain (e.g., yourdomain.com)',
    inputLabel: 'Look up DNS records',

    stats: [
      { value: '6', label: 'Record types' },
      { value: 'Live', label: 'DNS queries' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter a domain name', detail: 'Any domain. We query the authoritative nameservers directly.' },
      { step: 'We fetch all DNS record types', detail: 'MX, A, AAAA, CNAME, TXT, and NS records retrieved in parallel.' },
      { step: 'See your full DNS configuration', detail: 'Every record displayed with type, value, TTL, and priority where applicable.' },
    ],

    whyItMatters: 'DNS records control where your email goes and how your domain resolves. Misconfigured MX records mean lost emails. Missing TXT records mean failed authentication. When something breaks in your email setup, DNS is almost always the first place to check.',

    ctaHeadline: 'Watch your DNS around the clock',
    ctaDescription: 'Sendbox monitors DNS records across all your domains and alerts you when anything changes or breaks.',

    proFeatures: [
      { icon: 'Bell', title: 'DNS monitoring', desc: 'Get alerted when any DNS record changes unexpectedly' },
      { icon: 'ShieldCheck', title: 'Security audit', desc: 'Full DNS security analysis including DNSSEC and CAA records' },
      { icon: 'ArrowsClockwise', title: 'Propagation tracking', desc: 'Monitor DNS changes as they propagate across global nameservers' },
    ],

    faqs: [
      { question: 'What are MX records?', answer: 'MX (Mail Exchange) records tell other servers where to deliver email for your domain. They point to your email provider (Gmail, Outlook, etc.) and include priority values that determine the order of delivery attempts.' },
      { question: 'What are TXT records used for?', answer: 'TXT records store text-based information about your domain. They are commonly used for email authentication (SPF, DKIM, DMARC), domain verification, and various service configurations.' },
      { question: 'What is TTL?', answer: 'TTL (Time to Live) is how long DNS resolvers should cache a record before checking for updates. Lower TTL means changes propagate faster. Higher TTL means better performance but slower updates.' },
      { question: 'Why do I have multiple MX records?', answer: 'Multiple MX records provide redundancy. If the primary mail server (lowest priority number) is unavailable, email delivery falls back to the next server. This prevents email loss during outages.' },
      { question: 'How long do DNS changes take to propagate?', answer: 'DNS changes typically propagate within 1-48 hours, depending on the TTL of the existing record. New records usually appear within minutes, but cached records on other servers may take longer to update.' },
    ],

    seo: {
      title: 'Free DNS Lookup Tool | Check MX, A, TXT, CNAME Records',
      description: 'Look up all DNS records for any domain. See MX, A, AAAA, CNAME, TXT, and NS records with TTL and priority. Free, no signup.',
      keywords: ['dns lookup', 'dns checker', 'mx record lookup', 'free dns lookup', 'dns record checker', 'txt record lookup', 'cname lookup', 'domain dns check', 'ns record lookup', 'dns lookup tool', 'check dns records', 'mx lookup', 'domain dns lookup', 'email dns check', 'sendbox'],
    },
  },

  {
    slug: 'domain-age-checker',
    illustration: 'lock',
    name: 'Domain Age Checker',
    headline: 'Free Domain Age Checker',
    description: 'Check how old any domain is. See registration date, expiry date, and registrar info. Domain age matters for email deliverability.',
    inputType: 'domain',
    inputPlaceholder: 'Enter domain (e.g., yourdomain.com)',
    inputLabel: 'Check domain age',

    stats: [
      { value: 'WHOIS', label: 'Data source' },
      { value: 'Instant', label: 'Results' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter a domain name', detail: 'Any domain. We look up the WHOIS registration data.' },
      { step: 'We query the WHOIS database', detail: 'Registration date, updated date, expiry date, and registrar extracted.' },
      { step: 'See the domain age and details', detail: 'Exact age in years and days, plus registration history.' },
    ],

    whyItMatters: 'Domain age is a trust signal for email providers. New domains (under 30 days) are far more likely to be flagged as spam. Most cold email experts recommend aging domains for at least 2-4 weeks before sending. Checking a domain age before buying or sending from it prevents wasted effort.',

    ctaHeadline: 'Age and warm up your domains properly',
    ctaDescription: 'Sendbox tracks domain age across your entire portfolio and automates warmup so every domain is ready when you need it.',
    proFeatures: [
      { icon: 'ShieldCheck', title: 'Domain portfolio tracking', desc: 'Monitor age, reputation, and health across all your sending domains' },
      { icon: 'Bell', title: 'Expiry alerts', desc: 'Never let a domain expire accidentally and lose your sender reputation' },
      { icon: 'Gauge', title: 'Automated warmup', desc: 'New domains get warmed up automatically with human-like patterns' },
    ],

    faqs: [
      { question: 'Why does domain age matter for email?', answer: 'Email providers use domain age as a trust signal. Brand new domains have no sending history, so providers treat them with suspicion. Domains older than 30 days with clean history get better deliverability.' },
      { question: 'How old should a domain be before sending cold email?', answer: 'At minimum 2 weeks, ideally 4+ weeks. The older the domain, the more trust it carries. Many agencies buy domains months in advance and let them age before using them for outreach.' },
      { question: 'Does domain age affect SEO too?', answer: 'Yes. Search engines consider domain age as one of many ranking factors. Older domains with clean history tend to rank more easily than brand new ones.' },
      { question: 'What if my domain is very new?', answer: 'Start with a slow warmup. Send very low volume (5-10 emails/day) and gradually increase. Use email warmup tools to build reputation before launching campaigns.' },
      { question: 'Can I check any domain?', answer: 'Yes. You can check your own domains, competitor domains, or domains you are considering purchasing. WHOIS data is public.' },
    ],

    seo: {
      title: 'Free Domain Age Checker | Check Domain Registration Date',
      description: 'Check how old any domain is. See registration date, expiry, and registrar info. Domain age matters for email deliverability. Free, no signup.',
      keywords: ['domain age checker', 'check domain age', 'how old is my domain', 'domain registration date', 'domain age lookup', 'whois age checker', 'domain age tool', 'website age checker', 'domain history', 'domain expiry checker', 'free domain age checker', 'domain age for email', 'cold email domain age', 'domain reputation', 'sendbox'],
    },
  },

  {
    slug: 'bounce-rate-calculator',
    illustration: 'shield',
    name: 'Email Bounce Rate Calculator',
    headline: 'Free Email Bounce Rate Calculator',
    description: 'Calculate your email bounce rate and compare it against industry benchmarks. See if your list health needs attention.',
    inputType: 'form',
    inputPlaceholder: '',
    inputLabel: 'Calculate your bounce rate',

    stats: [
      { value: 'Instant', label: 'Calculation' },
      { value: 'Benchmarks', label: 'Included' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter your campaign numbers', detail: 'Total emails sent and total bounced.' },
      { step: 'We calculate your bounce rate', detail: 'Bounce rate = (bounced / sent) x 100.' },
      { step: 'Compare against benchmarks', detail: 'See how you compare to industry averages and what your rate means for deliverability.' },
    ],

    whyItMatters: 'A bounce rate above 2% damages your sender reputation. Above 5% and you risk getting your domain blacklisted. Monitoring bounce rates after every campaign tells you whether your email list is healthy and whether you need to clean it.',

    ctaHeadline: 'Track bounce rates in real time',
    ctaDescription: 'Sendbox shows bounce rate per campaign and per mailbox in real time, so you spot list and reputation issues early.',
    proFeatures: [
      { icon: 'ChartLineUp', title: 'Campaign analytics', desc: 'Bounce rates tracked across every campaign you send' },
      { icon: 'Bell', title: 'Per-mailbox bounce rate', desc: 'Bounce rate broken out per mailbox so failing senders stand out early' },
      { icon: 'ListChecks', title: 'List cleaning on import', desc: 'Validate every email on import to prevent bounces before they happen' },
    ],

    faqs: [
      { question: 'What is a good email bounce rate?', answer: 'Under 2% is considered healthy. Between 2-5% needs attention. Above 5% is critical and you should pause sending and clean your list immediately.' },
      { question: 'What is the difference between hard and soft bounces?', answer: 'Hard bounces mean the email address does not exist and will never accept mail. Soft bounces are temporary failures (full mailbox, server down). Hard bounces are more damaging to your reputation.' },
      { question: 'How do I reduce my bounce rate?', answer: 'Validate email addresses before sending, remove hard bounces from your list immediately, avoid purchased email lists, and keep your list fresh by removing inactive contacts.' },
      { question: 'How often should I check my bounce rate?', answer: 'After every campaign. A sudden spike in bounce rate often indicates a list quality problem or a deliverability issue that needs immediate attention.' },
      { question: 'Does bounce rate affect deliverability?', answer: 'Yes, significantly. ISPs monitor your bounce rate as a signal of list quality. High bounce rates tell them you are sending to bad addresses, which tanks your sender reputation.' },
    ],

    seo: {
      title: 'Free Email Bounce Rate Calculator | Check Your Bounce Rate',
      description: 'Calculate your email bounce rate and compare against industry benchmarks. Find out if your list health needs attention. Free, no signup.',
      keywords: ['email bounce rate calculator', 'bounce rate calculator', 'calculate bounce rate', 'email bounce rate', 'what is a good bounce rate', 'bounce rate benchmark', 'email list health', 'hard bounce vs soft bounce', 'reduce bounce rate', 'email campaign bounce rate', 'bounce rate formula', 'free bounce calculator', 'cold email bounce rate', 'email deliverability', 'sendbox'],
    },
  },

  {
    slug: 'open-rate-calculator',
    illustration: 'envelope',
    name: 'Email Open Rate Calculator',
    headline: 'Free Email Open Rate Calculator',
    description: 'Calculate your email open rate and benchmark it against industry averages. See how your campaigns compare.',
    inputType: 'form',
    inputPlaceholder: '',
    inputLabel: 'Calculate your open rate',

    stats: [
      { value: 'Instant', label: 'Calculation' },
      { value: 'Benchmarks', label: 'Included' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Enter your campaign numbers', detail: 'Total emails delivered and total unique opens.' },
      { step: 'We calculate your open rate', detail: 'Open rate = (unique opens / delivered) x 100.' },
      { step: 'Compare against benchmarks', detail: 'Industry averages for cold email, marketing email, and transactional email.' },
    ],

    whyItMatters: 'Open rate tells you whether your subject lines and sender reputation are working. Cold email open rates of 40-60% are typical for well-targeted campaigns. Below 20% means something is wrong with your targeting, subject lines, or deliverability.',

    ctaHeadline: 'Track open rates across every campaign',
    ctaDescription: 'Sendbox gives you real-time open rate analytics across all campaigns and mailboxes, with A/B testing built in.',
    proFeatures: [
      { icon: 'ChartLineUp', title: 'Real-time analytics', desc: 'Open rates tracked live across every campaign and sender' },
      { icon: 'ArrowsClockwise', title: 'A/B testing', desc: 'Test subject lines and see which drives the highest open rate' },
      { icon: 'Target', title: 'Per-lead tracking', desc: 'See which individual leads opened and how many times' },
    ],

    faqs: [
      { question: 'What is a good email open rate?', answer: 'For cold email: 40-60% is good, above 60% is excellent. For marketing email: 20-30% is typical. Below 20% for any type suggests deliverability or targeting problems.' },
      { question: 'How is open rate calculated?', answer: 'Open rate = (unique opens / emails delivered) x 100. Use delivered emails, not sent, to exclude bounces from the calculation.' },
      { question: 'Why is my open rate low?', answer: 'Common causes: poor subject lines, bad sender reputation, landing in spam/promotions, targeting the wrong audience, or sending at the wrong time.' },
      { question: 'Are open rates still accurate?', answer: 'Apple Mail Privacy Protection (launched 2021) pre-loads tracking pixels, inflating open rates for Apple Mail users. Open rates are still directionally useful but less precise than before.' },
      { question: 'How do I improve my open rate?', answer: 'Write better subject lines (test with our Subject Line Tester), improve deliverability (check your SPF/DKIM/DMARC), personalize the sender name, and send when your audience is active.' },
    ],

    seo: {
      title: 'Free Email Open Rate Calculator | Benchmark Your Campaigns',
      description: 'Calculate your email open rate and compare against industry benchmarks for cold email and marketing email. Free, no signup.',
      keywords: ['email open rate calculator', 'open rate calculator', 'calculate open rate', 'email open rate', 'what is a good open rate', 'open rate benchmark', 'cold email open rate', 'average email open rate', 'improve open rate', 'email campaign analytics', 'open rate formula', 'free open rate calculator', 'email marketing metrics', 'email performance', 'sendbox'],
    },
  },

  {
    slug: 'mailbox-calculator',
    wide: true,
    illustration: 'inbox',
    name: 'Cold Email Mailbox Calculator',
    headline: 'How Many Mailboxes Do You Need?',
    description: 'Size your cold email infrastructure across Google Workspace, Microsoft 365, and Azure. Start from a monthly send volume, or work backwards from the meetings you want to book, and see the mailboxes, domains, and monthly cost it takes.',
    inputType: 'form',
    inputPlaceholder: '',
    inputLabel: 'Calculate your mailbox setup',

    stats: [
      { value: '2 modes', label: 'volume or meetings goal' },
      { value: '3 providers', label: 'Google, Microsoft, Azure' },
      { value: '100%', label: 'Free, no limits' },
    ],

    howItWorks: [
      { step: 'Set your volume or goal', detail: 'Enter a monthly send volume, or switch modes and work backwards from the meetings you want to book each month.' },
      { step: 'Split your provider mix', detail: 'Balance volume across Google Workspace, Microsoft 365, and Azure. Mailboxes and domains are sized per provider.' },
      { step: 'Review the cost', detail: 'See mailboxes, domains, effective monthly cost, and first-year total, with warmup and monitoring add-ons and billing-cycle discounts.' },
    ],

    whyItMatters: 'Most cold email campaigns fail because people send too many emails from too few mailboxes. A safe deliverable rate is roughly 15 emails per day per Google Workspace mailbox and about 5 per Microsoft 365 mailbox, with around 3 mailboxes per domain. Getting the math wrong means spam folders, blacklists, and burned domains.',

    ctaHeadline: 'Set up your infrastructure in minutes',
    ctaDescription: 'Sendbox gives you unlimited mailboxes on dedicated IPs with automated warmup. Connect, warm up, and start sending.',
    proFeatures: [
      { icon: 'Gauge', title: 'Unlimited mailboxes', desc: 'Connect as many mailboxes as you need on every plan' },
      { icon: 'ShieldCheck', title: 'Dedicated IPs', desc: 'Your own IP addresses. Your sender reputation stays yours.' },
      { icon: 'ArrowsClockwise', title: 'Automated warmup', desc: 'Every new mailbox gets warmed up automatically' },
    ],

    faqs: [
      { question: 'How many mailboxes do I need for cold email?', answer: 'It depends on your daily send volume. A safe deliverable rate is roughly 15 emails per day per Google Workspace mailbox and about 5 per Microsoft 365 mailbox. To send 1,000 emails a day on Google you need about 67-69 mailboxes across roughly 23 domains. The calculator sizes this automatically from your target volume, or works backwards from the meetings you want to book.' },
      { question: 'How many mailboxes can I put on one domain?', answer: 'Best practice is about 3 mailboxes per domain on Google Workspace and Microsoft 365 to protect sender reputation and avoid cross-contamination. Azure is billed per tenant rather than per domain. You can change the mailboxes-per-domain assumption in the calculator advanced settings.' },
      { question: 'Can I estimate cost from a meetings target instead of send volume?', answer: 'Yes. Switch the calculator to goal mode, enter how many meetings you want to book per month, and it works back through positive replies and emails sent to the daily volume, mailboxes, domains, and monthly cost required to hit that goal.' },
      { question: 'How much does cold email infrastructure cost per mailbox?', answer: 'Google Workspace and Microsoft 365 mailboxes run about $3.10 each per month on standard pricing, while Azure is billed per tenant at about $30. Annual billing saves up to 20%. Past 200 mailboxes (or 10 Azure tenants) pricing moves to a custom volume quote.' },
      { question: 'What costs are not included in the monthly price?', answer: 'Domains are billed once a year, separate from the recurring monthly cost (about $12 per year for a .com), and you need roughly one domain for every 3 mailboxes. Warmup is an optional add-on priced per mailbox, and deliverability monitoring is priced per domain.' },
    ],

    seo: {
      title: 'Cold Email Mailbox Calculator | How Many Mailboxes Do You Need?',
      description: 'Calculate how many mailboxes and domains you need for cold email, and what they cost. Size from send volume or work backwards from a meetings goal.',
      keywords: ['cold email mailbox calculator', 'how many mailboxes for cold email', 'cold email calculator', 'email sending capacity calculator', 'mailbox calculator', 'how many domains for cold email', 'cold email infrastructure', 'email outreach calculator', 'cold email volume calculator', 'mailboxes per domain', 'cold email setup', 'email sending limits', 'gmail cold email limit', 'outlook sending limit', 'sendbox'],
    },
  },
];

export const getToolBySlug = (slug) => toolsData.find((t) => t.slug === slug);
export const toolSlugs = toolsData.map((t) => t.slug);
export { toolsData };
