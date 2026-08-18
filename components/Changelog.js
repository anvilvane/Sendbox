'use client';

import React from 'react';
import { motion } from 'framer-motion';

const changelogData = [
  {
    date: 'June 17, 2026',
    title: 'Email Attachments in Sequencer',
    tag: 'New',
    description: "Send proposals, decks, one-pagers, and contracts straight from your sequence. Attachments are now first-class citizens in the email sequencer.",
    features: [
      {
        name: 'Attachments in Email Sequencer',
        bullets: [
          'Attach files directly to any step in your sequence builder',
          'PDFs, decks, contracts, images, and GIFs all supported. Drop in product screenshots or a quick GIF demo right inside the email',
          'Attachments deliver through the same warmed mailboxes your campaigns already use',
          'View attachments your leads sent back inside the conversation thread'
        ],
        description: "No more 'I'll send the deck after they reply' workflows. Put the file in the email and let your sequence do the work."
      }
    ]
  },
  {
    date: 'June 17, 2026',
    title: 'Import Mailboxes from Icemail',
    tag: 'New',
    description: "Icemail joins Zapmail and Maildoso in our one-click mailbox import lineup. Connect your account and pull every mailbox into Sendbox in seconds.",
    features: [
      {
        name: 'Icemail Mailbox Import',
        bullets: [
          'Paste your Icemail API key and we sync every mailbox automatically',
          'No more reconnecting accounts one at a time',
          'Warmup status, settings, and configurations carry over intact',
          'Re-sync anytime you provision new mailboxes from Icemail'
        ],
        description: "If you buy mailboxes from Icemail, they now flow straight into Sendbox. One API key, all your mailboxes, zero manual work."
      }
    ]
  },
  {
    date: 'May 29, 2026',
    title: 'Add Leads and Steps to Completed Campaigns',
    tag: 'New',
    description: "Your campaign finished, then you found 200 more perfect leads. Or you want to add one more follow-up. You can now do both without cloning the campaign.",
    features: [
      {
        name: 'Resume Completed Campaigns',
        bullets: [
          'Push new leads into a campaign that already finished and they pick up the sequence from step one',
          'Append new follow-up steps to a completed sequence and existing leads continue right where they left off',
          'No more duplicating campaigns just to add a handful of leads or one extra touch',
          'All your stats, replies, and history stay attached to the original campaign'
        ],
        description: "Completed doesn't mean closed. Treat your campaigns as living things and keep adding to them as your outreach evolves."
      }
    ]
  },
  {
    date: 'May 10, 2026',
    title: 'Unlimited Template-Based Replies & Follow-ups',
    tag: 'New',
    description: "Reply Agents just got a whole lot more generous. Send template-based replies and follow-ups completely free with no credits, no limits, and no usage caps.",
    features: [
      {
        name: 'Free Template-Based Reply Agents',
        bullets: [
          'Send unlimited template-based replies and follow-ups directly from Reply Agents',
          'Zero credits consumed for template responses, no matter how many you send',
          'Build your own library of templates for objections, pricing questions, demo requests, and follow-ups',
          'Keep AI credits for the conversations that actually need them'
        ],
        description: "Most replies you send are variations of the same handful of responses. Now those cost you nothing. Use AI when you need it, templates when you don't."
      }
    ]
  },
  {
    date: 'May 5, 2026',
    title: 'Sendbox Profile Email Finder Chrome Extension',
    tag: 'New',
    description: "Find emails from professional profiles and push leads straight to Sendbox. Our new Chrome extension is now live on the Chrome Web Store.",
    features: [
      {
        name: 'Profile Email Finder Extension',
        bullets: [
          'Capture emails from public profile pages with a single click',
          'Push leads directly into your Sendbox campaigns without leaving the page',
          'Skip the manual research and CSV exports. Clean, ready-to-use data lands in your workspace',
          'Qualify leads faster and kick off outreach the moment you find them'
        ],
        description: "Stop bouncing between tabs and spreadsheets. Find the email, send it to Sendbox, start the sequence. All from one place."
      }
    ],
    link: { label: 'Install the extension', url: 'https://chromewebstore.google.com/detail/sendbox-profile-email-fin/oifenlanjioiokdgcedhefhnonlmcmgf' }
  },
  {
    date: 'May 4, 2026',
    title: 'Sendbox Partner Program Is Live',
    tag: 'New',
    description: "Refer Sendbox and get paid for life. Our partner program is now open with lifetime recurring commissions up to 20% and tier-based rewards that grow as you do.",
    features: [
      {
        name: 'Lifetime Recurring Commissions',
        bullets: [
          'Earn up to 20% recurring commission on every customer you refer, for as long as they stay',
          'Tier-based reward structure that scales your payout as your referrals grow',
          'Track clicks, signups, conversions, and earnings in real time from your partner dashboard',
          'Built for agencies, creators, and consultants who already recommend Sendbox'
        ],
        description: "You bring the customers, we handle the rest. Get paid every month they stay on Sendbox, with bigger rewards as you climb the tiers."
      }
    ]
  },
  {
    date: 'May 2, 2026',
    title: 'Sending Schedule Page Is Live',
    tag: 'New',
    description: "See your entire sending operation at a glance. The new Sending Schedule page shows your capacity limits, available slots, and campaign distribution in one view.",
    features: [
      {
        name: 'Sending Schedule Overview',
        bullets: [
          'View your total daily and weekly sending capacity across every connected mailbox',
          'See exactly how many slots are working, available, and reserved for each campaign',
          'Visualize campaign distribution so you know which campaigns are eating your capacity',
          'Spot bottlenecks before they slow down your outreach'
        ],
        description: "No more guessing whether your mailboxes are maxed out or wondering why a campaign is sending slowly. Everything you need to know about your sending capacity, in one place."
      }
    ]
  },
  {
    date: 'April 4, 2026',
    title: 'Subsequences Within a Campaign',
    tag: 'New',
    description: "Your campaigns just got a lot smarter. Build subsequences inside any campaign to branch your outreach based on lead behavior, tags, or reply type without creating a separate campaign.",
    features: [
      {
        name: 'Campaign Subsequences',
        bullets: [
          'Create branching sequences inside a single campaign based on lead actions',
          'Route leads into different follow-up paths depending on opens, replies, or tags',
          'Keep everything organized in one campaign instead of juggling multiple',
          'Full control over timing, conditions, and messaging for each branch'
        ],
        description: "One campaign, multiple paths. Your outreach adapts to how each lead responds instead of blasting everyone with the same follow-ups."
      }
    ]
  },
  {
    date: 'March 24, 2026',
    title: 'Import Mailboxes from Zapmail & Maildoso',
    tag: 'New',
    description: "Stop adding mailboxes one by one. Connect your Zapmail or Maildoso account with an API key and import all your mailboxes into Sendbox instantly.",
    features: [
      {
        name: 'Zapmail & Maildoso API Import',
        bullets: [
          'Paste your Zapmail or Maildoso API key and we pull in every mailbox automatically',
          'No more connecting accounts one at a time. Import dozens of mailboxes in seconds',
          'Warmup status, settings, and configurations carry over',
          'Add new mailboxes from your provider anytime with a single re-sync'
        ],
        description: "If you're buying mailboxes from Zapmail or Maildoso, they now flow straight into Sendbox. One API key, all your mailboxes, zero manual work."
      }
    ]
  },
  {
    date: 'March 18, 2026',
    title: 'Sendbox Platform API & MCP',
    tag: 'Beta',
    description: "Build on top of Sendbox. Our Platform API and MCP server are now live. Manage campaigns, sync leads, and control your workspace programmatically.",
    features: [
      {
        name: 'Platform API',
        bullets: [
          'Manage campaigns, leads, and mailboxes programmatically',
          'Trigger sequences and push leads from your own code',
          'API keys available at workspace level or for all workspaces under your account'
        ],
        description: "Everything you can do in the dashboard, you can now do via API."
      },
      {
        name: 'MCP Server',
        bullets: [
          'Connect Sendbox to AI clients like Claude, Cursor, or Windsurf',
          'Manage campaigns and pull analytics with natural language',
          'Perfect for AI-powered sales workflows and outreach agents'
        ],
        description: "Your AI tools can now talk directly to Sendbox. Launch a campaign, check reply rates, or manage leads without leaving your editor."
      }
    ],
    link: { label: 'Read the docs', url: 'https://docs.sendbox.ai' }
  },
  {
    date: 'March 10, 2026',
    title: 'Supabase Integration',
    description: "Your Supabase tables are now a direct pipeline for your outreach. Push and pull leads to and from your Supabase database without leaving Sendbox.",
    features: [
      {
        name: 'Supabase Integration',
        bullets: [
          'Connect your Supabase project to Sendbox in seconds',
          'Push enriched leads directly into your Supabase tables',
          'Pull leads from Supabase into your campaigns automatically',
          'Two-way sync keeps your data consistent across both platforms'
        ],
        description: "If Supabase is your backend, your lead data now flows seamlessly between your database and your outreach. No more manual imports or exports."
      }
    ]
  },
  {
    date: 'March 10, 2026',
    title: 'Phone Number Enrichment',
    description: "Find direct phone numbers for your leads without leaving the platform. Enrich your lead lists with verified mobile and direct dial numbers in bulk.",
    features: [
      {
        name: 'Phone Number Enrichment',
        bullets: [
          'Enrich your entire lead list with verified phone numbers in one click',
          'Get direct dials and mobile numbers, not just company switchboards',
          'Works alongside your existing email enrichment workflow',
          'Higher connect rates when you combine cold email with cold calling'
        ],
        description: "Your leads now come with phone numbers attached. Pair it with our dialer and you have a complete multichannel outreach machine."
      }
    ]
  },
  {
    date: 'February 27, 2026',
    title: 'Ring Enrichment',
    tag: 'Invite Only',
    description: "Stop calling wrong numbers. We run line intelligence on your entire lead list so you know exactly who picks up before you ever dial.",
    features: [
      {
        name: 'Ring Enrichment',
        bullets: [
          'We categorize every number in your list within 24 hours into picks up, no answer, voicemail, call screening, or identity verification',
          'Filter out the bad numbers before your team ever touches the dialer',
          'Your reps only call leads that actually answer the phone',
          'Higher connect rates because every dial is worth making'
        ],
        description: "Fewer dials, more conversations. Your team stops wasting time on numbers that were never going to pick up."
      }
    ]
  },
  {
    date: 'February 27, 2026',
    title: 'Ringless Voicemail Drops in Your Own Voice',
    tag: 'Invite Only',
    description: "Clone your voice in 15 seconds. Drop personalized voicemails to your leads without their phone ever ringing. Each one sounds like you recorded it yourself.",
    features: [
      {
        name: 'AI Voice Clone Voicemail Drops',
        bullets: [
          'Record a short sample and your voice clone is ready in 15 seconds',
          'Each voicemail is personalized with your lead\'s name, company, or any variable you have',
          'Voicemails land in their inbox ringless so their phone never rings',
          'Select your leads, click drop, and forget it. We deliver them all for you'
        ],
        description: "Every lead gets a voicemail that sounds like you personally called them. You were closing deals while we dropped hundreds of personalized VMs for you."
      }
    ]
  },
  {
    date: 'February 22, 2026',
    title: 'Salesforce CRM Integration',
    description: "Connect your Salesforce CRM to Sendbox and keep your outreach and pipeline in sync.",
    features: [
      {
        name: 'Salesforce CRM Integration',
        bullets: [
          'Connect your Salesforce account in a few clicks',
          'Sync leads and contacts between Salesforce and Sendbox',
          'Engagement data flows back to Salesforce automatically',
          'Map custom fields for personalized outreach'
        ],
        description: "No more manual exports. Your CRM and outreach stay in sync."
      }
    ]
  },
  {
    date: 'February 21, 2026',
    title: 'Bring Your Own Email Validation Provider',
    description: "Already have an email validation provider you trust? Bring your own API key and use it directly inside Sendbox. No switching tools, no exports.",
    features: [
      {
        name: 'Choose Your Email Validation Provider',
        bullets: [
          'Enrich.so is our official partner and included free with your Sendbox plan',
          'Bring your own API key for Enrow, Leadmagic, Enrichley, Reeon, Fullenrich, Bettercontact, ALeads, Hunter, Wiza, or Icypeas',
          'Use the provider you already pay for and trust. We charge through your API key',
          'Validate leads right inside Sendbox without jumping between platforms'
        ],
        description: "Your provider, your API key, your workflow. We just plug it in so everything stays in one place."
      }
    ]
  },
  {
    date: 'February 14, 2026',
    title: 'Smarter Webhook Controls',
    description: "Your webhooks were firing for everything. Now they only fire when it actually matters.",
    features: [
      {
        name: 'Advanced Webhook Options',
        bullets: [
          'Trigger webhooks only on positive replies so your CRM stays clean',
          'Get notified when lead tags change so your automations stay in sync',
          'Fire a webhook only once per lead to avoid duplicate processing downstream',
          'Mix and match these options per webhook endpoint for full control'
        ],
        description: "Less noise, more signal. Your downstream systems get exactly the data they need and nothing they don't."
      }
    ]
  },
  {
    date: 'February 8, 2026',
    title: 'Airtable Integration Is Now Live',
    description: "Your Airtable bases just became a direct pipeline into your outreach. Push leads, sync data, and keep everything in one place without lifting a finger.",
    features: [
      {
        name: 'Airtable Integration',
        bullets: [
          'Connect your Airtable workspace to Sendbox in seconds',
          'Sync leads directly from your Airtable bases into campaigns automatically',
          'All your custom fields and data come through intact',
          'Add to our growing collection of native integrations alongside Clay, Slack, and webhooks'
        ],
        description: "No more exporting CSVs from Airtable and importing them manually. Your data flows where it needs to go, automatically."
      }
    ]
  },
  {
    date: 'February 3, 2026',
    title: 'Bulk Import Outlook Accounts',
    description: "Adding Outlook accounts one by one? That's a thing of the past. Now you can import all your Outlook mailboxes at once with a simple CSV upload.",
    features: [
      {
        name: 'CSV Import for Outlook Accounts',
        bullets: [
          'Upload a CSV file with all your Outlook account credentials in one go',
          'Nothing to install or run on your end. Everything happens on our servers',
          'We validate each account during import so you know exactly what connected',
          'Perfect for agencies onboarding new clients with large mailbox pools'
        ],
        description: "No technical setup, no manual work. Just upload your CSV and we take care of the rest."
      }
    ]
  },
  {
    date: 'January 29, 2026',
    title: "Reply When They're Awake",
    description: "You write a great reply and hit send. It's 4am their time. Now it's buried under 30 emails by the time they wake up. That's not happening anymore.",
    features: [
      {
        name: "Smart Send Timing in Unibox",
        bullets: [
          "You can see your lead's local time right in the Unibox reply window",
          "If it's a bad time to send, the send button automatically becomes a schedule button",
          "We figure out when they'll actually see it and queue it for then",
          "If you still want to send right now, you can force send. Your call"
        ],
        description: "You don't change how you work. You still hit the same button. We just make sure it arrives when someone's actually there to read it."
      }
    ]
  },
  {
    date: 'January 25, 2026',
    title: 'Skip National Holidays',
    description: "You know what's annoying? Writing a great email and having it land on Thanksgiving. Now it's sitting under a pile of OOO replies and nobody's ever going to see it.",
    features: [
      {
        name: 'Holiday-Aware Sending',
        bullets: [
          "We check if it's a national holiday in your lead's country before sending",
          'If it is, we skip them that day and send the next working day instead',
          'Everyone else in your campaign still gets their emails on schedule',
          'Fewer OOO replies, more actual humans reading your stuff'
        ],
        description: "Pretty simple. Don't email people who aren't at work. Your reply rates will thank you."
      }
    ]
  },
  {
    date: 'January 21, 2026',
    title: 'A/B Testing on Autopilot',
    description: 'We got tired of seeing teams pick "winners" based on gut feeling. Now your cold email A/B tests run themselves and actually improve your results.',
    features: [
      {
        name: 'A/B Threshold Optimization',
        bullets: [
          'Set it and forget it. Our statistical engine watches your open rates, reply rates, and conversions automatically',
          'Underperforming variants get disabled the moment we have enough data',
          'Winning variants get more volume without you lifting a finger',
          'Teams see 30% higher reply rates on average after enabling this'
        ],
        description: 'No more guessing, no more manual checks, no more wasted sends on losing variants. Your cold email campaigns finally optimize themselves.'
      }
    ]
  },
  {
    date: 'January 17, 2026',
    title: "Spintax That Doesn't Sound Like Spintax",
    description: 'Traditional spintax creates emails that read like a mad lib gone wrong. Our AI generates variations that actually sound human.',
    features: [
      {
        name: 'AI Spintax Generation',
        bullets: [
          'Give us one email and get dozens of natural variations automatically',
          'Not just swapping synonyms. We rewrite sentences and restructure paragraphs',
          "ESPs can't detect patterns because there aren't any",
          'Higher engagement because nobody gets the same templated email'
        ],
        description: 'Your cold outreach finally scales without sounding scaled.'
      }
    ]
  },
  {
    date: 'January 14, 2026',
    title: 'Cold Calling, Meet Cold Email',
    description: "Sometimes email isn't enough. Now you can call prospects directly from Sendbox with full recording and logging.",
    features: [
      {
        name: 'Built-in Phone Dialer',
        bullets: [
          'Provision phone numbers in seconds',
          'Make calls with one click from any lead profile',
          'Automatic call recording for training and compliance',
          'Call logs sync with email threads so you see the full picture'
        ],
        description: "No more switching between five different tools. Whether your prospect prefers email or phone, you've got them covered in one platform."
      }
    ]
  },
  {
    date: 'January 10, 2026',
    title: 'Reports Your Clients Will Actually Love',
    description: "Agencies, this one's for you. Custom-branded reports that make you look like a million bucks.",
    features: [
      {
        name: 'Advanced Reporting with Custom Branding',
        bullets: [
          'Generate beautiful campaign reports at workspace, campaign, or organization level',
          'Add your logo and customize colors to match your brand',
          'Send reports directly to clients with your branding, not ours',
          'Stop spending hours building reports in spreadsheets'
        ],
        description: 'Your clients get transparency. You get happy renewals.'
      }
    ]
  },
  {
    date: 'January 6, 2026',
    title: 'Your Brand, Your Platform',
    description: 'Run Sendbox under your own domain with your own branding. Your clients never need to know we exist.',
    features: [
      {
        name: 'Full Whitelabel with Custom Domains',
        bullets: [
          'Set up your own custom domain',
          'Upload your logo and pick your colors',
          'Create client portals where customers see their campaigns under your brand',
          'Perfect for agencies and resellers who want to offer cold email infrastructure without building it'
        ],
        description: 'Enterprise-grade outreach platform, your name on the door.'
      }
    ]
  },
  {
    date: 'January 2, 2026',
    title: 'Slack Just Became Your Inbox',
    description: 'Your team lives in Slack. Now your lead replies live there too.',
    features: [
      {
        name: 'Slack Unibox Bot',
        bullets: [
          'Get notified in Slack the moment a lead replies',
          'Read full conversations and send responses without leaving Slack',
          'Tag teammates and handle objections collaboratively',
          'Set up channels per campaign or per team member'
        ],
        description: 'Your SDRs can manage their entire pipeline from the tool they already have open all day. Response times drop, deals close faster.'
      }
    ]
  },
  {
    date: 'December 28, 2025',
    title: 'Clay + Sendbox Integration',
    description: "If you're using Clay for enrichment, this integration is about to save you hours.",
    features: [
      {
        name: 'Clay Table HTTP Integration',
        bullets: [
          'Push enriched leads directly from Clay into Sendbox campaigns',
          'All your Clay data fields come through automatically',
          'No manual CSV exports or imports',
          'Build sophisticated enrichment workflows that execute perfectly'
        ],
        description: "Your data stays fresh, your campaigns stay targeted, and you stop manually moving data around like it's 2019."
      }
    ]
  },
  {
    date: 'December 24, 2025',
    title: 'Webhooks for Everything',
    description: 'Connect Sendbox to literally anything. If it can send a webhook, it can add leads to your campaigns.',
    features: [
      {
        name: 'Webhook Lead Ingestion',
        bullets: [
          'Typeform submission? Add to campaign',
          'Calendly booking? Add to nurture sequence',
          'CRM stage change? Trigger outreach',
          'Our webhook endpoint accepts leads from any source with all their data intact'
        ],
        description: 'Build automation flows that would make Zapier jealous. Your entire tech stack now feeds directly into your outreach engine.'
      }
    ]
  },
  {
    date: 'December 20, 2025',
    title: 'Match Your ESP to Theirs',
    description: 'Gmail to Gmail. Outlook to Outlook. The deliverability hack that actually works.',
    features: [
      {
        name: 'ESP Matching Strategy',
        bullets: [
          'Email providers trust their own. Gmail to Gmail gets treated better than Outlook to Gmail',
          "We automatically detect your recipient's email provider",
          'Your emails route through a matching mailbox automatically',
          'Higher inbox placement rates, better engagement, more replies'
        ],
        description: 'Your emails look more legitimate because they ARE more legitimate. Simple concept, massive impact on your cold email deliverability.'
      }
    ]
  },
  {
    date: 'December 16, 2025',
    title: 'Navigate Corporate Email Security',
    description: 'Sending to enterprise leads? Their security gateways are watching. Now you can adapt.',
    features: [
      {
        name: 'SEG Protected Leads Handling',
        bullets: [
          'We detect when a lead is behind Proofpoint, Mimecast, or other Secure Email Gateways',
          'Sending strategy adjusts automatically: slower cadence, cleaner templates, verified domains',
          'Your emails reach the actual inbox instead of getting quarantined',
          'Enterprise leads are often the biggest deals. Now you can actually reach them'
        ],
        description: 'Stop losing enterprise opportunities to overzealous spam filters.'
      }
    ]
  },
  {
    date: 'December 12, 2025',
    title: 'Perfect Timing, Every Time',
    description: 'Sending an email at 3am their time is a great way to get ignored. We fixed that.',
    features: [
      {
        name: 'Automatic Timezone Matching',
        bullets: [
          "We detect each lead's timezone automatically",
          "Your 9am email hits their inbox at 9am, whether they're in New York, London, or Sydney",
          'No manual timezone math or spreadsheet gymnastics',
          'Set your preferred send time once and we handle the rest'
        ],
        description: 'Better open rates, better response rates, less work for you.'
      }
    ]
  },
  {
    date: 'December 8, 2025',
    title: 'Visual Pipeline Management',
    description: 'Finally, a CRM view built for cold outreach. See every deal at a glance.',
    features: [
      {
        name: 'CRM Boards',
        bullets: [
          'Drag-and-drop kanban boards that show your entire pipeline visually',
          "Move leads between stages and see who's stuck",
          'Set reminders, add notes, track deal values',
          'Updates automatically as your campaigns run'
        ],
        description: "It's the bird's eye view you've been building in spreadsheets. No more wondering where that hot lead went. Your sales pipeline, organized at last."
      }
    ]
  },
  {
    date: 'December 4, 2025',
    title: 'Copy Protection That Thinks for You',
    description: 'ESPs are constantly scanning for patterns. The moment they flag your copy, your deliverability tanks. Unless you catch it first.',
    features: [
      {
        name: 'Copy Fatigue Protection',
        bullets: [
          'Monitors ESP signals in real-time for signs your copy got flagged',
          'Auto-activates the moment we detect deliverability drops',
          'Automatically rewrites your copy just enough to pass filters while keeping your message intact',
          'Your campaigns keep delivering to inboxes without you doing anything'
        ],
        description: 'Set it and forget it. We handle the copy rotation so you can focus on closing deals instead of rewriting emails.'
      }
    ]
  },
  {
    date: 'November 30, 2025',
    title: 'The Warmup That Actually Works',
    description: 'Most warmup tools send fake emails to fake inboxes. Ours builds real reputation with real engagement.',
    features: [
      {
        name: 'Mailbox Warmup',
        bullets: [
          'Real accounts with real engagement patterns in our warmup network',
          'Your emails get opened, replied to, and marked as important',
          'ESPs see genuine positive signals and reward you with better inbox placement',
          'Warm up new mailboxes in days, not weeks'
        ],
        description: 'The best email warmup solution on the market. This is what "set and forget" actually looks like.'
      }
    ]
  },
  {
    date: 'November 26, 2025',
    title: 'Switching from InboxKit? One Click.',
    description: 'We made migrating dead simple. All your mailboxes, all your settings, zero downtime.',
    features: [
      {
        name: '1-Click InboxKit Import',
        bullets: [
          'Connect your InboxKit account and we pull everything over automatically',
          'Mailboxes, warmup progress, settings. The works',
          'No re-authenticating dozens of email accounts',
          'Fully operational on Sendbox within minutes'
        ],
        description: "No losing your warmup reputation. No campaign downtime. Migrations shouldn't be painful. This one isn't."
      }
    ]
  },
  {
    date: 'November 22, 2025',
    title: "Bounce Problems? We'll Wake You Up.",
    description: "High bounce rates can tank your deliverability overnight. Now you'll know the second something's wrong.",
    features: [
      {
        name: '24/7 Bounce Monitoring & Alerts',
        bullets: [
          'We watch your bounce rates around the clock',
          'Instant alerts via email or Slack the moment rates spike',
          'Catch bad lists before they destroy your sender reputation',
          'Identify problematic mailboxes before ESPs flag them'
        ],
        description: "Peace of mind that your outreach is running clean, even when you're not watching."
      }
    ]
  },
  {
    date: 'November 18, 2025',
    title: 'Test Every Inbox. No Limits.',
    description: 'Where do your emails actually land? Now you can find out as many times as you want.',
    features: [
      {
        name: 'Unlimited Inbox Placement Tests',
        bullets: [
          'Test deliverability across Gmail, Outlook, Yahoo, and every major provider',
          "See exactly where you're landing: primary inbox, promotions, spam, or nowhere",
          "Run tests before every campaign, after every change, whenever you're curious",
          'No per-test fees eating into your budget'
        ],
        description: 'Finally understand your deliverability without rationing your tests.'
      }
    ]
  },
  {
    date: 'November 14, 2025',
    title: 'Blacklist Monitoring That Never Sleeps',
    description: 'Getting blacklisted happens. Not knowing about it for weeks is what kills you.',
    features: [
      {
        name: 'Unlimited Blacklist Monitoring',
        bullets: [
          'We check your domains and IPs against 100+ blacklists continuously',
          'The moment you appear on one, you know',
          'We tell you which list, why it probably happened, and exactly how to get delisted',
          'Monitor unlimited domains and IPs'
        ],
        description: 'Your sender reputation is too important to leave to chance. Stop finding out about blacklisting from your clients.'
      }
    ]
  },
  {
    date: 'November 10, 2025',
    title: 'Validate Every Email. Unlimited.',
    description: "Bad emails mean bounces. Bounces mean reputation damage. We're removing that problem entirely.",
    features: [
      {
        name: 'Unlimited Email Validation',
        bullets: [
          'Validate every email address before you send',
          'Catch typos, spam traps, invalid domains, and risky addresses',
          'Unlimited validations included with all paid plans',
          'Clean lists mean better deliverability. Better deliverability means more replies'
        ],
        description: 'No per-validation costs eating into your budget. Just clean data and better results.'
      }
    ]
  },
  {
    date: 'November 6, 2025',
    title: '700 Million Leads. Seriously.',
    description: "Need B2B contacts? We've got the biggest database you'll find anywhere. Search, filter, export, send.",
    features: [
      {
        name: '350M+ Lead Database & Bulk Export',
        bullets: [
          'Over 350 million verified B2B contacts with emails, phone numbers, job titles, and company info',
          'Search by industry, company size, location, technology used, or any criteria that matters for your ICP',
          'Bulk export thousands of leads directly into your campaigns',
          'Stop paying for multiple data providers'
        ],
        description: 'Your entire prospecting workflow now lives in one place.'
      }
    ]
  },
  {
    date: 'October 28, 2025',
    title: 'Enterprise Infrastructure in 5 Minutes',
    description: 'Dedicated IPs. Dedicated domains. Full reputation control. Set up before your coffee gets cold.',
    features: [
      {
        name: 'Dedicated Client Infrastructure',
        bullets: [
          'Get your own isolated sending infrastructure with dedicated IPs and domains',
          'Complete separation from other senders. Your reputation is YOUR reputation',
          "Bad actors on shared infrastructure can't touch you",
          'Setup takes 5 minutes, not the weeks it used to require'
        ],
        description: 'Enterprise-grade cold email infrastructure, startup-speed deployment. Scale with confidence.'
      }
    ]
  },
  {
    date: 'October 18, 2025',
    title: 'Smarter Lead Organization',
    description: "When you're running 50 campaigns, knowing who said what becomes impossible. Unless you have AI doing the sorting for you.",
    features: [
      {
        name: 'Unlimited AI Tagging',
        bullets: [
          'Every reply gets automatically categorized: interested, not interested, out of office, wrong person, asking for pricing, wants a demo, has objections',
          'No limits on how many leads we process',
          'Filter by tag and build follow-up sequences for specific responses',
          'Zero manual work. Just open your dashboard and see where every conversation stands'
        ],
        description: 'Never let a hot lead slip through the cracks again.'
      }
    ]
  },
  {
    date: 'October 8, 2025',
    title: 'Reply Handling Made Simple',
    description: 'Your inbox is probably a mess. Hundreds of "not interested" replies mixed with hot leads asking questions. We built a better way to handle it.',
    features: [
      {
        name: 'Reply Agents',
        bullets: [
          'Generate perfect replies in one click. No more switching to ChatGPT',
          'Built-in grammar and tone checking. No more Grammarly tabs',
          'Context-aware suggestions based on the full conversation thread',
          'Handles objections, follow-ups, and meeting requests intelligently'
        ],
        description: "Your hot leads get faster responses because you're not spending time crafting each reply from scratch. Just review, tweak if needed, and send."
      }
    ]
  },
  {
    date: 'September 28, 2025',
    title: 'Your Sequences, Analyzed by AI',
    description: 'Wrote a 5-step sequence but not sure if step 3 is killing your momentum? Our AI analyzer has opinions (good ones).',
    features: [
      {
        name: 'AI Sequence Analyzer',
        bullets: [
          'Catches overly salesy language that triggers spam filters',
          'Identifies weak CTAs and suggests stronger alternatives',
          'Flags missing personalization opportunities',
          'Tells you when emails are too long (and what to cut)'
        ],
        description: 'Think of it as a senior sales rep reviewing your outreach before you hit send. Except it never sleeps and checks every single sequence.'
      }
    ]
  }
];

const ChangelogEntry = ({ entry, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 md:gap-12 lg:gap-16 py-12 md:py-16 ${!isLast ? 'border-b border-gray-100' : ''}`}
    >
      {/* Date - Sticky on desktop */}
      <div className="md:sticky md:top-24 self-start">
        <p className="text-[15px] text-[#6b7280] font-normal">
          {entry.date}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        {entry.tag && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#2663eb] bg-blue-50 rounded-full">
            {entry.tag}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">
          {entry.title}
        </h2>
        <p className="text-[#6b7280] text-base md:text-lg text-balance leading-relaxed mb-10">
          {entry.description}
        </p>

        {entry.codeSnippet && (
          <div className="mb-10 rounded-lg bg-[#1a1a1a] px-5 py-4 font-mono text-sm text-white inline-flex items-center gap-3">
            <span className="text-[#9ca3af] select-none">$</span>
            <span>{entry.codeSnippet}</span>
          </div>
        )}

        {/* Features */}
        <div className="space-y-10">
          {entry.features.map((feature, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.name}
              </h3>
              {feature.bullets && (
                <ul className="space-y-2 mb-4">
                  {feature.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-[#6b7280] text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2663eb] mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[#6b7280] text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {entry.link && (
          <a
            href={entry.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg"
          >
            {entry.link.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Changelog = () => {
  return (
    <section className="pt-24 pb-16 md:pb-24 px-4 md:px-8 bg-white relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-[#6b7280] max-w-3xl">
            Here&apos;s everything new in Sendbox, from major features to quality-of-life improvements.
          </p>
        </motion.div>

        {/* Entries */}
        <div>
          {changelogData.map((entry, index) => (
            <ChangelogEntry
              key={entry.date}
              entry={entry}
              isLast={index === changelogData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Changelog;
