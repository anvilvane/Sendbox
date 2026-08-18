// Contributors data - the people who shaped Sendbox
export const contributorsData = [
  {
    slug: 'cody',
    name: 'Cody Dufrene',
    role: 'High-Volume Operator',
    avatar: '/cody.jpeg',
    badge: { label: 'Power Contributor', icon: 'flame' },
    joinedDate: 'December 8, 2025',
    bio: 'One of our high-volume players pushing Sendbox to its limits. Cody shows us what power users look for when running thousands of mailboxes at scale.',
    links: {
      linkedin: 'https://www.linkedin.com/in/dotcomcj/',
    },
    contributions: [
      {
        feature: 'Advanced Webhook Options',
        description: 'Recommended adding smarter webhook controls: trigger only on positive replies, fire on tag changes, and limit to once per lead. All three shipped.',
        status: 'live',
      },
      {
        feature: 'Inbox Live Refresh',
        description: 'Recommended real-time inbox updates so new messages show up instantly without manual refreshing. No more hitting reload to see replies.',
        status: 'live',
      },
      {
        feature: 'Conversations CSV Export',
        description: 'Requested the ability to export full conversation threads from Unibox as CSV. Pull your data out whenever you need it.',
        status: 'live',
      },
      {
        feature: 'Bulk Outlook/Azure Import',
        description: 'Showed us the need for in-platform support for bulk importing thousands of Outlook and Azure mailboxes. A game-changer for teams running at scale.',
        status: 'live',
      },
      {
        feature: 'Nested Spintax Support',
        description: 'Spotted that we needed spintax inside spintax for more natural variations. Shipped same day.',
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
    bio: 'Runs campaigns at scale and knows exactly where the rough edges are. Harvey has a talent for spotting the details most people miss, from analytics gaps to UX friction that only shows up when you manage a lot of campaigns at once.',
    links: {
      linkedin: 'https://www.linkedin.com/in/harveylecoldoutbound/',
    },
    contributions: [
      {
        feature: 'Dynamic Time Variables',
        description: 'Suggested liquid variables that adapt to send time: good morning, good afternoon, day of week, time of day. Your sequences now feel written for the moment the lead opens them.',
        status: 'live',
      },
      {
        feature: 'Positive Reply Breakdown',
        description: 'Spotted that our analytics were missing a deeper breakdown of positive replies. Now you can see exactly what kind of interest is coming back, not just that interest exists.',
        status: 'live',
      },
      {
        feature: 'Multi-Campaign UX Polish',
        description: 'Pointed out friction points that only show up when you manage a large volume of campaigns. Shipped UX changes that make day-to-day campaign management actually pleasant.',
        status: 'live',
      },
      {
        feature: 'Unibox & AI Tagging Fixes',
        description: 'Helped us identify bugs and gaps in our unibox and AI tagging. The kind of issues you only catch if you actually live in the inbox every day.',
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
    bio: 'Has a sharp eye for the friction most people learn to tolerate. Adnan called out a UX problem in mailbox management most would have just worked around, and his feedback reshaped how it works.',
    links: {
      linkedin: 'https://www.linkedin.com/in/adnanmanna/',
    },
    contributions: [
      {
        feature: 'Mailbox Management UX Rework',
        description: 'Flagged that managing mailboxes inside a campaign was clunkier than it needed to be. We took the feedback, reworked the flow, and added options that make selecting and managing mailboxes far simpler.',
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
    bio: 'An early adopter who immediately started making Sendbox better. Bojan has a sharp eye for UX friction and edge cases that slip through the cracks.',
    links: {
      linkedin: 'https://www.linkedin.com/in/bojan-najdov/',
    },
    contributions: [
      {
        feature: 'Do Not Contact Domains',
        description: 'Suggested adding entire domains to the do not contact list, not just individual emails. Essential for keeping outreach clean.',
        status: 'live',
      },
      {
        feature: 'Warmup Health Score Filtering',
        description: 'Ability to select email inboxes based on their warmup health score. Send from your healthiest mailboxes first.',
        status: 'live',
      },
      {
        feature: 'Lead Enrichment Bug Fix',
        description: 'Reported a bug with enriching leads, specifically around email address verification. Fixed same day.',
        status: 'live',
      },
      {
        feature: 'Leads Filter Bug Fix',
        description: 'Found an issue where filtered leads would disappear even after clearing filters. Caught an edge case we missed.',
        status: 'live',
      },
      {
        feature: 'Bulk Lead Deletion',
        description: 'Wanted a faster way to clean up leads. Now you can select one or multiple campaigns and delete all leads at once. No more 5 clicks per campaign.',
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
    bio: 'Puts our warmup through its paces. Floris recovered his SMTP mailboxes from 98% spam rate to 95% inbox rate in just 30 days.',
    links: {
      linkedin: 'https://www.linkedin.com/in/floris-jansen-%F0%9F%91%95-364426185/',
    },
    contributions: [
      {
        feature: 'Warmup Validation',
        description: 'Tested our warmup end-to-end on SMTP mailboxes and proved the system works. Went from 98% spam to 95% inbox in 30 days.',
        status: 'live',
      },
      {
        feature: 'Campaign Subsequences',
        description: 'Suggested adding subsequences within campaigns so you can branch follow-ups based on lead behavior without creating separate campaigns.',
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
    bio: 'Knows exactly where the friction is. Ahmad points out the small annoyances that slow down real workflows and helps us fix them fast.',
    links: {
      linkedin: 'https://www.linkedin.com/in/coldemailcopywriter/',
    },
    contributions: [
      {
        feature: 'Filter Untagged Mailboxes',
        description: 'Added ability to filter for mailboxes with no tags. Sometimes you need to find what isn\'t organized yet. Live in under 4 hours.',
        status: 'live',
      },
      {
        feature: 'Auto-Populate Custom Field Names',
        description: 'Custom fields now automatically pull names from your CSV column headers. No more manually typing each one. Live in under 4 hours.',
        status: 'live',
      },
      {
        feature: 'Live Sequence Preview',
        description: 'Preview your sequence edits without saving first. Edit, preview, edit, preview. No more waiting 3-4 seconds between each change. Live in under 4 hours.',
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
    bio: 'A power user who helps stress-test our infrastructure. Nick has an eye for the small details that make a big difference in day-to-day operations.',
    links: {
      linkedin: 'https://www.linkedin.com/in/nick-block-bb0741243/',
    },
    contributions: [
      {
        feature: 'Bulk Outlook/Azure Import',
        description: 'Partnered with Cody to show us the need for robust bulk import for thousands of Outlook and Azure mailboxes. Their feedback made this feature rock solid.',
        status: 'live',
      },
      {
        feature: 'Signature Spintax',
        description: 'Noticed signatures were a blind spot for variation. Now you can spin your signatures too. Shipped same day.',
        status: 'live',
      },
    ],
  },
];
