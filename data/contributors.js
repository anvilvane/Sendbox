// Contributors data - the people who shaped Sendbox
export const contributorsData = [
  {
    slug: 'cody',
    name: 'Cody Dufrene',
    role: 'High-Volume Operator',
    avatar: '/cody.jpeg',
    badge: { label: 'Power Contributor', icon: 'flame' },
    joinedDate: 'December 8, 2025',
    bio: 'Cody is among the heaviest senders on the platform, routinely testing what Sendbox can handle. His experience running mailboxes by the thousand shows us exactly what power users need at that scale.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dotcomcj/',
    },
    contributions: [
      {
        feature: 'Advanced Webhook Options',
        description: 'Suggested finer-grained webhook controls, firing only on positive replies, triggering on tag changes, and capping delivery to once per lead. We built all three.',
        status: 'live',
      },
      {
        feature: 'Inbox Live Refresh',
        description: 'Pushed for the inbox to update in real time rather than making users refresh to catch new messages. Replies now show up the instant they arrive.',
        status: 'live',
      },
      {
        feature: 'Conversations CSV Export',
        description: 'Asked for a way to pull complete conversation threads out of Unibox as CSV. That data is now exportable whenever you want it.',
        status: 'live',
      },
      {
        feature: 'Bulk Outlook/Azure Import',
        description: 'Made the case for native support to bulk import thousands of Outlook and Azure mailboxes at once, a huge unlock for teams operating at scale.',
        status: 'live',
      },
      {
        feature: 'Nested Spintax Support',
        description: 'Noticed we needed spintax that could nest inside other spintax for more natural-sounding variation. We shipped it the same day.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'harvey',
    name: 'Harvey Le',
    role: 'Cold Outbound Operator',
    avatar: '/harvey.jpeg',
    badge: { label: 'Power Sender', icon: 'flame' },
    joinedDate: 'April 2026',
    bio: 'Harvey runs campaigns at real scale, which means he runs straight into the rough edges most people never hit. He has a knack for catching what others miss, analytics gaps included, along with UX friction that only surfaces once you\'re juggling a lot of campaigns at once.',
    links: {
      linkedin: 'https://www.linkedin.com/in/harveylecoldoutbound/',
    },
    contributions: [
      {
        feature: 'Dynamic Time Variables',
        description: 'Proposed liquid variables that shift with send time, good morning versus good afternoon, day of week, time of day. Sequences now read like they were written for the exact moment a lead opens them.',
        status: 'live',
      },
      {
        feature: 'Positive Reply Breakdown',
        description: 'Flagged a gap in our analytics: positive replies were reported as a single number with no breakdown. Now you can see exactly what kind of interest is coming back, not just that it is.',
        status: 'live',
      },
      {
        feature: 'Multi-Campaign UX Polish',
        description: 'Called out friction that only appears once you\'re managing a large volume of campaigns. The resulting UX changes made day-to-day campaign management something people actually don\'t mind doing.',
        status: 'live',
      },
      {
        feature: 'Unibox & AI Tagging Fixes',
        description: 'Helped surface bugs and gaps in Unibox and AI tagging, the kind of issues that only turn up if you\'re actually living in the inbox every single day.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'adnan',
    name: 'Adnan Manna',
    role: 'Founder & GTM Builder',
    avatar: '/adnan.png',
    joinedDate: 'May 2026',
    bio: 'Adnan notices the friction most people would just quietly put up with. He flagged a UX problem in mailbox management that most users would have simply worked around, and his feedback ended up reshaping how the whole thing works.',
    links: {
      linkedin: 'https://www.linkedin.com/in/adnanmanna/',
    },
    contributions: [
      {
        feature: 'Mailbox Management UX Rework',
        description: 'Pointed out that managing mailboxes from within a campaign was more cumbersome than it needed to be. We took that feedback, rebuilt the flow, and added options that make selecting and managing mailboxes far more straightforward.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'bojan',
    name: 'Bojan Najdov',
    role: 'Early Adopter',
    avatar: '/bojan.png',
    joinedDate: 'December 23, 2025',
    bio: 'Bojan started improving Sendbox almost as soon as he adopted it. He has a sharp eye for UX friction and the edge cases that tend to slip through the cracks.',
    links: {
      linkedin: 'https://www.linkedin.com/in/bojan-najdov/',
    },
    contributions: [
      {
        feature: 'Do Not Contact Domains',
        description: 'Suggested letting the do-not-contact list block entire domains, not just individual addresses, essential for keeping outreach lists clean.',
        status: 'live',
      },
      {
        feature: 'Warmup Health Score Filtering',
        description: 'Requested the ability to select mailboxes by their warmup health score, so sends go out from the healthiest inboxes first.',
        status: 'live',
      },
      {
        feature: 'Lead Enrichment Bug Fix',
        description: 'Reported a bug in lead enrichment tied to email address verification. We fixed it the same day.',
        status: 'live',
      },
      {
        feature: 'Leads Filter Bug Fix',
        description: 'Caught an issue where filtered leads stayed hidden even after clearing the filter, an edge case we\'d missed entirely.',
        status: 'live',
      },
      {
        feature: 'Bulk Lead Deletion',
        description: 'Wanted a quicker way to clean up leads. You can now select one campaign or several and clear all their leads in a single action, instead of five clicks per campaign.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'floris',
    name: 'Floris Jansen',
    role: 'Early User',
    avatar: '/floris.png',
    joinedDate: 'December 2025',
    bio: 'Floris has stress-tested our warmup thoroughly. He took his SMTP mailboxes from a 98% spam rate to a 95% inbox rate in just 30 days.',
    links: {
      linkedin: 'https://www.linkedin.com/in/floris-jansen-%F0%9F%91%95-364426185/',
    },
    contributions: [
      {
        feature: 'Warmup Validation',
        description: 'Ran our warmup end-to-end on SMTP mailboxes and proved out the system, going from 98% spam to 95% inbox placement in 30 days.',
        status: 'live',
      },
      {
        feature: 'Campaign Subsequences',
        description: 'Suggested letting campaigns branch into subsequences, so follow-ups can adapt to lead behavior without spinning up a whole separate campaign.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'ahmad',
    name: 'Ahmad',
    role: 'Power User',
    avatar: '/ahmad.jpeg',
    joinedDate: 'January 16, 2026',
    bio: 'Ahmad has a clear read on where the friction lives. He surfaces the small annoyances that slow down real workflows and helps get them fixed quickly.',
    links: {
      linkedin: 'https://www.linkedin.com/in/coldemailcopywriter/',
    },
    contributions: [
      {
        feature: 'Filter Untagged Mailboxes',
        description: 'Requested a filter for mailboxes without any tags, useful for finding what hasn\'t been organized yet. Live in under 4 hours.',
        status: 'live',
      },
      {
        feature: 'Auto-Populate Custom Field Names',
        description: 'Custom fields now pull their names straight from your CSV column headers automatically, no more typing each one by hand. Live in under 4 hours.',
        status: 'live',
      },
      {
        feature: 'Live Sequence Preview',
        description: 'Sequence edits can now be previewed without saving first, edit, preview, edit, preview, with no 3-4 second wait between each change. Live in under 4 hours.',
        status: 'live',
      },
    ],
  },
  {
    slug: 'nick',
    name: 'Nick Block',
    role: 'High-Volume Operator',
    avatar: '/nick-block.jpeg',
    joinedDate: 'December 8, 2025',
    bio: 'Nick is a power user who helps push our infrastructure to its limits. He has an eye for the small details that end up making a real difference day to day.',
    links: {
      linkedin: 'https://www.linkedin.com/in/nick-block-bb0741243/',
    },
    contributions: [
      {
        feature: 'Bulk Outlook/Azure Import',
        description: 'Worked alongside Cody to make the case for robust bulk import of thousands of Outlook and Azure mailboxes. Their combined feedback made the feature rock solid.',
        status: 'live',
      },
      {
        feature: 'Signature Spintax',
        description: 'Noticed email signatures were a blind spot when it came to variation. Signatures can now be spun too. Shipped the same day.',
        status: 'live',
      },
    ],
  },
];
