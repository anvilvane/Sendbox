'use client';

import React from 'react';
import { motion } from 'framer-motion';

const changelogData = [
  {
    date: 'June 17, 2026',
    title: 'Attachments Land in the Sequencer',
    tag: 'New',
    description: "Proposals, decks, one-pagers, contracts — attach them directly to a sequence step instead of promising to follow up later. Files are now a native part of how the sequencer works.",
    features: [
      {
        name: 'Sequence-Level File Attachments',
        bullets: [
          "Drop a file onto any step while you're building the sequence",
          'Works with PDFs, slide decks, contracts, screenshots, and GIFs, so a product demo clip can ride along inside the email itself',
          'Delivery still runs through the same warmed mailboxes powering the rest of your campaign',
          'Anything a lead sends back shows up right in that conversation thread'
        ],
        description: "Skip the \"I'll send the deck once they reply\" step entirely — the file goes out with the email and the sequence keeps moving."
      }
    ]
  },
  {
    date: 'June 17, 2026',
    title: 'Icemail Mailboxes, Imported in One Click',
    tag: 'New',
    description: "Icemail is now the third provider in our one-click import lineup alongside Zapmail and Maildoso — link your account and every mailbox lands in Sendbox within seconds.",
    features: [
      {
        name: 'One-Click Icemail Import',
        bullets: [
          'Drop in your Icemail API key and the sync pulls every mailbox in automatically',
          'No need to reconnect each account individually anymore',
          'Warmup progress, settings, and configuration all come across untouched',
          'Trigger a re-sync whenever you spin up new mailboxes on Icemail'
        ],
        description: "Buying mailboxes through Icemail now means they show up in Sendbox on their own — one key connects the whole batch, no manual setup required."
      }
    ]
  },
  {
    date: 'May 29, 2026',
    title: 'Completed Campaigns Can Grow Again',
    tag: 'New',
    description: "Found another batch of great-fit leads after a campaign already wrapped? Want to tack on one more follow-up step? Both are now possible without duplicating the campaign from scratch.",
    features: [
      {
        name: 'Reopen Finished Campaigns',
        bullets: [
          'New leads added to a completed campaign start the sequence fresh from step one',
          'Tack a new follow-up step onto a finished sequence and existing leads pick it up exactly where they stopped',
          'No need to clone a whole campaign just to squeeze in a few extra leads or one more touch',
          'Every stat, reply, and past interaction stays tied to the original campaign'
        ],
        description: "\"Completed\" no longer means \"locked.\" Campaigns can keep growing as your outreach strategy changes."
      }
    ]
  },
  {
    date: 'May 10, 2026',
    title: 'Template Replies Are Now Unlimited',
    tag: 'New',
    description: "Reply Agents just got a lot less stingy: template-based replies and follow-ups now go out for free, with no credits spent and no cap on volume.",
    features: [
      {
        name: 'Unmetered Template Replies',
        bullets: [
          'Fire off as many template replies and follow-ups from Reply Agents as you need',
          "Template responses don't touch your credit balance, no matter the volume",
          'Build a personal library covering objections, pricing questions, demo requests, and standard follow-ups',
          'Save your AI credits for the replies that genuinely require them'
        ],
        description: "Most of what you type back is a variation on a handful of stock answers — those are now free. Save the AI for the messages that actually need it."
      }
    ]
  },
  {
    date: 'May 5, 2026',
    title: 'A Chrome Extension for Finding Profile Emails',
    tag: 'New',
    description: "Our Chrome extension just went live on the Web Store — pull an email off a professional profile and send that lead into Sendbox in the same motion.",
    features: [
      {
        name: 'Profile-to-Lead Chrome Extension',
        bullets: [
          'One click on a public profile page captures the email',
          'Send that lead straight into a Sendbox campaign without ever tabbing away',
          'No manual research, no CSV exports — clean data lands directly in your workspace',
          'Qualify faster and start outreach the moment you spot someone worth contacting'
        ],
        description: "One flow instead of five tabs: spot the email, send it over, launch the sequence."
      }
    ],
    link: { label: 'Get the extension', url: 'https://chromewebstore.google.com/detail/sendbox-profile-email-fin/oifenlanjioiokdgcedhefhnonlmcmgf' }
  },
  {
    date: 'May 4, 2026',
    title: 'The Partner Program Is Open',
    tag: 'New',
    description: "Referrals now pay indefinitely. The partner program is open, offering recurring commissions of up to 20% for the life of the customer, with reward tiers that scale as your referral volume does.",
    features: [
      {
        name: 'Recurring Referral Payouts',
        bullets: [
          'Every customer you bring in earns up to 20% recurring commission for as long as they remain a customer',
          'Payout tiers climb automatically as your referral count grows',
          'A partner dashboard shows clicks, signups, conversions, and earnings live',
          'Designed with agencies, creators, and consultants who were already recommending Sendbox in mind'
        ],
        description: "Bring the customer, we handle billing and payouts — commissions land every month they stay subscribed, and the reward grows as you move up a tier."
      }
    ]
  },
  {
    date: 'May 2, 2026',
    title: 'A New Sending Schedule Page',
    tag: 'New',
    description: "A new Sending Schedule page puts your entire sending operation on one screen — capacity limits, open slots, and how campaigns are splitting the volume.",
    features: [
      {
        name: 'Sending Capacity Dashboard',
        bullets: [
          'See total daily and weekly capacity summed across every connected mailbox',
          'Check exactly how many slots are in use, open, or reserved per campaign',
          'A visual breakdown shows which campaigns are consuming the most capacity',
          'Catch a bottleneck before it slows your outreach down'
        ],
        description: "Stop guessing whether mailboxes are maxed out or why a campaign has slowed down — the capacity picture now lives in one place."
      }
    ]
  },
  {
    date: 'April 4, 2026',
    title: 'Campaigns Can Now Branch',
    tag: 'New',
    description: "Campaigns can now branch. Build a subsequence inside any campaign that routes leads down a different path based on their behavior, tags, or reply type, no separate campaign required.",
    features: [
      {
        name: 'Branching Subsequences',
        bullets: [
          'Set up branches inside one campaign that trigger off lead actions',
          'Send leads down different follow-up paths based on opens, replies, or tags',
          'Everything stays inside a single campaign instead of spread across several',
          'Each branch gets its own timing, conditions, and messaging, fully configurable'
        ],
        description: "A single campaign, several paths through it — outreach adjusts to how each lead actually responds instead of sending everyone the same follow-up."
      }
    ]
  },
  {
    date: 'March 24, 2026',
    title: 'One-Click Import from Zapmail and Maildoso',
    tag: 'New',
    description: "No more one-by-one mailbox entry — link a Zapmail or Maildoso account with an API key and every mailbox imports into Sendbox at once.",
    features: [
      {
        name: 'Bulk Provider Import',
        bullets: [
          'Drop in the API key from either provider and every mailbox pulls in automatically',
          'Dozens of mailboxes import in seconds instead of connecting each one by hand',
          'Warmup status and configuration transfer along with them',
          'Newly provisioned mailboxes get picked up with a single re-sync'
        ],
        description: "Mailboxes purchased from Zapmail or Maildoso now land in Sendbox on their own — a single key, no manual setup."
      }
    ]
  },
  {
    date: 'March 18, 2026',
    title: 'A Platform API and an MCP Server',
    tag: 'Beta',
    description: "Sendbox is now programmable. The Platform API and an MCP server are live, letting you manage campaigns, sync leads, and control a workspace entirely from code.",
    features: [
      {
        name: 'Platform API',
        bullets: [
          'Handle campaigns, leads, and mailboxes through code',
          'Kick off sequences and push leads in from your own systems',
          'Generate keys scoped to a single workspace or to every workspace on the account'
        ],
        description: "Whatever's possible in the dashboard is now possible through the API too."
      },
      {
        name: 'MCP Server',
        bullets: [
          'Hook Sendbox up to AI clients such as Claude, Cursor, or Windsurf',
          'Manage campaigns and pull analytics just by describing what you want',
          'Built for AI-driven sales workflows and autonomous outreach agents'
        ],
        description: "AI tools can talk to Sendbox directly now — launch a campaign, check reply rates, or manage leads without leaving your editor."
      }
    ],
    link: { label: 'Browse the docs', url: 'https://docs.sendboxes.tech' }
  },
  {
    date: 'March 10, 2026',
    title: 'Supabase Now Connects Directly',
    description: "Supabase tables now double as a pipeline for outreach — leads can move to and from your database without leaving Sendbox.",
    features: [
      {
        name: 'Supabase Integration',
        bullets: [
          'Link a Supabase project to Sendbox in seconds',
          'Send enriched leads straight into your Supabase tables',
          'Pull leads from Supabase into a campaign automatically',
          'A two-way sync keeps both platforms in agreement'
        ],
        description: "If Supabase is already your backend, lead data now moves between it and your outreach without manual import/export work."
      }
    ]
  },
  {
    date: 'March 10, 2026',
    title: 'Phone Numbers, Enriched in Bulk',
    description: "Direct phone numbers for your leads are now available without leaving Sendbox — enrich a list in bulk with verified mobile and direct-dial numbers.",
    features: [
      {
        name: 'Phone Number Enrichment',
        bullets: [
          'One click enriches an entire lead list with verified phone numbers',
          'Returns direct dials and mobile numbers instead of a generic company switchboard',
          'Runs alongside whatever email enrichment workflow you already use',
          'Pairing cold email with cold calling lifts connect rates'
        ],
        description: "Leads now arrive with a phone number attached — combine it with the dialer for a full multichannel outreach setup."
      }
    ]
  },
  {
    date: 'February 27, 2026',
    title: 'Know Who Picks Up Before You Dial',
    tag: 'Invite Only',
    description: "Line intelligence now runs across your whole lead list, so you know who's likely to pick up before a single call goes out.",
    features: [
      {
        name: 'Ring Enrichment',
        bullets: [
          'Within 24 hours, every number in the list gets sorted into picks up, no answer, voicemail, call screening, or identity verification',
          'Bad numbers get filtered out before your reps ever pick up the dialer',
          "Reps only dial the leads who are actually likely to answer",
          'Connect rates climb because every dial is a dial worth making'
        ],
        description: "Fewer dials, more actual conversations — no more burning time on numbers that were never going to answer."
      }
    ]
  },
  {
    date: 'February 27, 2026',
    title: 'Voicemail Drops in a Cloned Voice',
    tag: 'Invite Only',
    description: "A 15-second sample is enough to clone your voice and start dropping personalized voicemails that never make the recipient's phone ring — and sound like you actually recorded them.",
    features: [
      {
        name: 'AI Voice Clone Voicemails',
        bullets: [
          'A short recorded sample is all it takes; the clone is ready in 15 seconds',
          "Every drop gets personalized with the lead's name, company, or any variable in your data",
          'Voicemails land directly in their inbox, ringless, so the phone stays silent',
          'Pick the leads, click drop, walk away — delivery happens on its own'
        ],
        description: "Each lead hears a voicemail that sounds like a personal call, while you're free to focus on closing instead of recording hundreds of messages yourself."
      }
    ]
  },
  {
    date: 'February 22, 2026',
    title: 'Salesforce, Now Connected',
    description: "Salesforce now connects directly to Sendbox, keeping outreach activity and pipeline data aligned.",
    features: [
      {
        name: 'Salesforce CRM Integration',
        bullets: [
          'A few clicks link a Salesforce account',
          'Leads and contacts sync in both directions between the two systems',
          'Engagement data reports back to Salesforce on its own',
          'Custom fields map over so personalization carries through'
        ],
        description: "Manual exports are no longer necessary — CRM and outreach stay aligned automatically."
      }
    ]
  },
  {
    date: 'February 21, 2026',
    title: 'Pick Your Own Validation Provider',
    description: "Already paying for a validation provider you trust? Plug in your own API key and use it from inside Sendbox instead of switching tools or exporting data.",
    features: [
      {
        name: 'Bring Your Own Validation Provider',
        bullets: [
          'Enrich.so ships as our official partner, included at no extra cost on every plan',
          'Or connect your own key from Enrow, Leadmagic, Enrichley, Reeon, Fullenrich, Bettercontact, ALeads, Hunter, Wiza, or Icypeas',
          'Stick with the provider you already trust — billing runs through your own API key',
          'Validation now happens inside Sendbox instead of bouncing between platforms'
        ],
        description: "It's your provider and your key — we just wire it in so the whole workflow stays in one place."
      }
    ]
  },
  {
    date: 'February 14, 2026',
    title: 'Webhooks Get More Selective',
    description: "Webhooks used to fire for every event. Now they only fire for the ones that matter.",
    features: [
      {
        name: 'Advanced Webhook Options',
        bullets: [
          'Restrict a webhook to positive replies only, keeping the CRM free of noise',
          "Get pinged whenever a lead's tag changes so downstream automations stay current",
          'Cap a webhook to once per lead to stop duplicate processing on the other end',
          'Combine these settings differently for each endpoint'
        ],
        description: "Less noise, more signal — downstream systems get only the events they actually need."
      }
    ]
  },
  {
    date: 'February 8, 2026',
    title: 'Airtable Now Feeds In Directly',
    description: "Airtable bases now feed directly into outreach — leads and data sync over without any manual push.",
    features: [
      {
        name: 'Airtable Integration',
        bullets: [
          'Link an Airtable workspace to Sendbox in seconds',
          'Leads sync from Airtable bases straight into campaigns automatically',
          'Custom fields and data come through untouched',
          'Joins the native integration lineup next to Clay, Slack, and webhooks'
        ],
        description: "CSV exports and manual imports are no longer part of the workflow — data now moves on its own."
      }
    ]
  },
  {
    date: 'February 3, 2026',
    title: 'Outlook Accounts, Imported in Bulk',
    description: "One-by-one Outlook setup is over — a single CSV upload now imports the whole batch of mailboxes at once.",
    features: [
      {
        name: 'Bulk CSV Import for Outlook',
        bullets: [
          'One CSV upload carries every Outlook credential you need to import',
          'No install, no local process — the import runs entirely on our servers',
          'Each account gets validated during import so you know precisely what connected',
          'Built for agencies onboarding clients that come with large mailbox pools'
        ],
        description: "No technical setup required — upload the CSV and the rest happens automatically."
      }
    ]
  },
  {
    date: 'January 29, 2026',
    title: 'Replies Now Wait for Business Hours',
    description: "A great reply sent at 4am their time used to get buried under 30 other emails before they ever woke up. Not anymore.",
    features: [
      {
        name: "Smart Send Timing in Unibox",
        bullets: [
          "The lead's local time now shows right inside the Unibox reply window",
          "Send at a bad hour and the button switches itself to a schedule option",
          "We work out when they'll actually see it and queue delivery for that moment",
          "A force-send option is still there if you want to send immediately anyway"
        ],
        description: "Your workflow doesn't change — same button, same click. We just make sure it lands when someone's actually around to read it."
      }
    ]
  },
  {
    date: 'January 25, 2026',
    title: 'Sending Now Skips National Holidays',
    description: "A carefully written email landing on Thanksgiving used to disappear under a stack of out-of-office replies. Not anymore.",
    features: [
      {
        name: 'Holiday-Aware Sending',
        bullets: [
          "Before sending, we check whether it's a national holiday where the lead lives",
          'On a holiday, that send gets pushed to the next working day',
          'The rest of the campaign keeps sending on schedule regardless',
          'Fewer auto-replies, more real people actually reading what you sent'
        ],
        description: "Simple logic: don't email someone who isn't at their desk. Reply rates benefit."
      }
    ]
  },
  {
    date: 'January 21, 2026',
    title: 'A/B Tests That Run Themselves',
    description: 'Picking a "winning" variant by gut feeling is no longer necessary — A/B tests now run and optimize themselves.',
    features: [
      {
        name: 'A/B Threshold Optimization',
        bullets: [
          'A statistical engine tracks open rates, reply rates, and conversions on its own once turned on',
          "A variant that's underperforming gets shut off as soon as there's enough data to be sure",
          'The winning variant automatically gets more volume, no manual reallocation needed',
          'Teams see reply rates rise 30% on average once this is switched on'
        ],
        description: "No guessing, no manual checking, no sends wasted on a variant that's already lost — the campaign tunes itself."
      }
    ]
  },
  {
    date: 'January 17, 2026',
    title: "Spintax Without the Mad-Lib Sound",
    description: 'Old-school spintax tends to read like a mad-lib gone wrong. Our AI generates variations that actually sound like a person wrote them.',
    features: [
      {
        name: 'AI Spintax Generation',
        bullets: [
          'One source email turns into dozens of natural-sounding variations automatically',
          'This goes beyond synonym swaps — sentences get rewritten and paragraphs restructured',
          "There's no repeating pattern left for an ESP to detect",
          'Engagement improves because no two recipients see an identical template'
        ],
        description: 'Outreach volume can finally scale up without sounding like it did.'
      }
    ]
  },
  {
    date: 'January 14, 2026',
    title: 'Calling Joins Email in One Platform',
    description: "Email alone isn't always enough — prospects can now be called directly from Sendbox, with every call recorded and logged.",
    features: [
      {
        name: 'Built-in Phone Dialer',
        bullets: [
          'New phone numbers provision in seconds',
          'One click from any lead profile starts a call',
          'Calls record automatically for training and compliance needs',
          'Call logs sync into the same thread as the email history for a complete view'
        ],
        description: "One platform now covers both channels — whether a prospect prefers email or the phone, there's no more juggling five separate tools."
      }
    ]
  },
  {
    date: 'January 10, 2026',
    title: 'Client-Ready Reports, Fully Branded',
    description: "Built with agencies in mind: campaign reports that carry your own branding instead of ours.",
    features: [
      {
        name: 'Advanced Reporting with Custom Branding',
        bullets: [
          'Generate polished reports at the workspace, campaign, or organization level',
          'Drop in your logo and match the color palette to your brand',
          'Send reports to clients carrying your branding, with no trace of ours',
          'Hours spent assembling reports in spreadsheets are no longer necessary'
        ],
        description: 'Clients get visibility into results, you get an easier renewal conversation.'
      }
    ]
  },
  {
    date: 'January 6, 2026',
    title: 'Run Sendbox Under Your Own Brand',
    description: "Sendbox can now run entirely under your own domain and branding — your clients never have to know it's Sendbox underneath.",
    features: [
      {
        name: 'Full Whitelabel with Custom Domains',
        bullets: [
          'Point the platform at a custom domain of your choice',
          'Upload a logo and set a color scheme',
          'Give clients their own portal showing campaigns under your brand, not ours',
          'Built for agencies and resellers who want to offer cold email infrastructure without building it themselves'
        ],
        description: 'The infrastructure is enterprise-grade; the name on the door is yours.'
      }
    ]
  },
  {
    date: 'January 2, 2026',
    title: 'Lead Replies Now Land in Slack',
    description: 'If your team already lives in Slack, lead replies now show up there too.',
    features: [
      {
        name: 'Slack Unibox Bot',
        bullets: [
          'A Slack notification fires the moment a lead replies',
          'Full conversation threads are readable, and replies can be sent, without leaving Slack',
          'Teammates can be tagged in to help work through an objection together',
          'Channels can be organized per campaign or per rep'
        ],
        description: "SDRs can now run their whole pipeline from the tool that's already open all day, which tends to shorten response times and speed up deals."
      }
    ]
  },
  {
    date: 'December 28, 2025',
    title: 'Clay Connects Directly to Sendbox',
    description: "Teams enriching leads through Clay are about to get hours back with this integration.",
    features: [
      {
        name: 'Clay Table HTTP Integration',
        bullets: [
          'Enriched leads move directly from a Clay table into a Sendbox campaign',
          'Every field from Clay carries over automatically',
          'No CSV export or import step required',
          'Complex enrichment workflows run through without manual intervention'
        ],
        description: "Data stays current, targeting stays sharp, and manually shuffling data between tools becomes unnecessary."
      }
    ]
  },
  {
    date: 'December 24, 2025',
    title: 'A Webhook for Nearly Anything',
    description: 'Anything capable of sending a webhook can now add leads into a Sendbox campaign.',
    features: [
      {
        name: 'Webhook Lead Ingestion',
        bullets: [
          'A Typeform submission can drop straight into a campaign',
          'A Calendly booking can trigger a nurture sequence',
          'A CRM stage change can kick off outreach',
          'The webhook endpoint accepts leads from any source with all their data preserved'
        ],
        description: 'The kind of automation flow that would impress Zapier — the whole tech stack can now feed directly into outreach.'
      }
    ]
  },
  {
    date: 'December 20, 2025',
    title: "Sending Now Matches the Recipient's ESP",
    description: 'Gmail-to-Gmail, Outlook-to-Outlook — a deliverability trick that genuinely moves the needle.',
    features: [
      {
        name: 'ESP Matching Strategy',
        bullets: [
          'Providers trust their own network more — a Gmail-to-Gmail send gets better treatment than Gmail-to-Outlook',
          "The recipient's email provider gets detected automatically",
          'The send routes through a matching mailbox without manual routing',
          'Better inbox placement follows, along with stronger engagement and more replies'
        ],
        description: 'The emails read as more legitimate because, structurally, they are — a simple idea with an outsized effect on deliverability.'
      }
    ]
  },
  {
    date: 'December 16, 2025',
    title: 'Adapting to Corporate Email Security',
    description: 'Enterprise leads sit behind security gateways that scrutinize every send — sending strategy can now adapt to that automatically.',
    features: [
      {
        name: 'SEG Protected Leads Handling',
        bullets: [
          'Detects when a lead sits behind Proofpoint, Mimecast, or another Secure Email Gateway',
          'Sending strategy shifts on its own — slower cadence, cleaner templates, verified sending domains',
          'Emails land in the actual inbox rather than getting quarantined',
          "Enterprise leads are often the largest deals on the table, and now they're actually reachable"
        ],
        description: 'Enterprise opportunities stop getting lost to overcautious spam filters.'
      }
    ]
  },
  {
    date: 'December 12, 2025',
    title: 'Every Send Lands at the Right Local Hour',
    description: 'An email that lands at 3am their time is easy to ignore — that timing problem is fixed now.',
    features: [
      {
        name: 'Automatic Timezone Matching',
        bullets: [
          "Each lead's timezone gets detected automatically",
          'A 9am send lands at 9am local time, whether the lead is in New York, London, or Sydney',
          'No spreadsheet math or manual timezone conversion required',
          'Set a preferred send time once and the rest is handled automatically'
        ],
        description: "Open rates improve, response rates improve, and there's less manual work involved."
      }
    ]
  },
  {
    date: 'December 8, 2025',
    title: 'A Visual Pipeline, Finally',
    description: 'A CRM view actually built for cold outreach, showing the whole pipeline at a glance.',
    features: [
      {
        name: 'CRM Boards',
        bullets: [
          'Kanban-style boards lay the pipeline out visually, drag-and-drop included',
          "Move leads between stages and spot exactly who's stalled",
          'Set reminders, leave notes, and track deal values right on the board',
          'The board updates on its own as campaigns run'
        ],
        description: "The bird's-eye view that used to live in a spreadsheet now lives here — no more wondering where a hot lead disappeared to."
      }
    ]
  },
  {
    date: 'December 4, 2025',
    title: 'Copy That Rewrites Itself Before It Gets Flagged',
    description: 'ESPs scan constantly for repeating patterns, and once your copy gets flagged, deliverability drops fast — unless the flag gets caught before that happens.',
    features: [
      {
        name: 'Copy Fatigue Protection',
        bullets: [
          'ESP signals get monitored in real time for early signs of a flag',
          'Kicks in automatically the moment deliverability starts to slip',
          'Rewrites the copy just enough to clear filters while keeping the original message intact',
          'Campaigns keep reaching inboxes without any manual intervention'
        ],
        description: 'Turn it on and move on — copy rotation happens automatically, leaving more time for closing instead of rewriting emails.'
      }
    ]
  },
  {
    date: 'November 30, 2025',
    title: 'Warmup Built on Real Engagement',
    description: 'Most warmup tools bounce fake emails between fake inboxes. Ours builds reputation through genuine engagement instead.',
    features: [
      {
        name: 'Mailbox Warmup',
        bullets: [
          'The warmup network runs on real accounts with real engagement patterns',
          'Emails get opened, replied to, and marked important, not just delivered',
          'ESPs pick up on those genuine positive signals and reward it with better inbox placement',
          'New mailboxes reach warm status in days instead of weeks'
        ],
        description: '"Set it and forget it" as email warmup is genuinely supposed to work.'
      }
    ]
  },
  {
    date: 'November 26, 2025',
    title: 'Migrating from InboxKit Takes One Click',
    description: 'Migration got a lot simpler — every mailbox and setting moves over with zero downtime.',
    features: [
      {
        name: '1-Click InboxKit Import',
        bullets: [
          'Connecting an InboxKit account pulls everything over automatically',
          'Mailboxes, warmup progress, settings — the entire setup comes across',
          'No need to re-authenticate a long list of email accounts one by one',
          'Fully up and running on Sendbox within minutes'
        ],
        description: "Warmup reputation carries over intact and campaigns don't pause — migration shouldn't hurt, and this one doesn't."
      }
    ]
  },
  {
    date: 'November 22, 2025',
    title: 'Bounce Spikes Now Trigger Instant Alerts',
    description: "A spike in bounces can wreck deliverability overnight — now that spike gets flagged the instant it happens.",
    features: [
      {
        name: '24/7 Bounce Monitoring & Alerts',
        bullets: [
          'Bounce rates get watched around the clock',
          'An alert fires over email or Slack the moment rates spike',
          'Catch a bad list before it does lasting damage to sender reputation',
          'Flag a problem mailbox before an ESP does'
        ],
        description: "Confidence that outreach is running clean, even during the hours nobody's actively watching it."
      }
    ]
  },
  {
    date: 'November 18, 2025',
    title: 'Inbox Placement Testing, Without Limits',
    description: 'Finding out exactly where an email lands is no longer rationed — test it as often as needed.',
    features: [
      {
        name: 'Unlimited Inbox Placement Tests',
        bullets: [
          'Deliverability tests run across Gmail, Outlook, Yahoo, and every other major provider',
          'See precisely where a send landed: primary inbox, promotions, spam, or nowhere at all',
          "Run a test before a campaign launches, after any change, or just out of curiosity",
          'No per-test charge nibbling at the budget'
        ],
        description: 'Deliverability finally becomes something you can understand, without rationing how often you check it.'
      }
    ]
  },
  {
    date: 'November 14, 2025',
    title: 'Blacklist Monitoring, Round the Clock',
    description: 'Landing on a blacklist happens to everyone eventually — not finding out for weeks is what actually does the damage.',
    features: [
      {
        name: 'Unlimited Blacklist Monitoring',
        bullets: [
          'Domains and IPs get checked against 100+ blacklists on a continuous basis',
          'Landing on any of them triggers an immediate alert',
          'You get told which list, a likely reason why, and the exact steps to get delisted',
          'Monitoring covers an unlimited number of domains and IPs'
        ],
        description: "Sender reputation is too important to leave to chance — hearing about a blacklisting from a client is no longer how this gets discovered."
      }
    ]
  },
  {
    date: 'November 10, 2025',
    title: 'Email Validation, Without a Cap',
    description: "A bad email leads to a bounce, and a bounce chips away at reputation — this removes that chain entirely.",
    features: [
      {
        name: 'Unlimited Email Validation',
        bullets: [
          'Every address gets validated before a single send goes out',
          'Typos, spam traps, invalid domains, and risky addresses all get caught',
          'Validation runs without a cap on every paid plan',
          'A clean list improves deliverability, and better deliverability means more replies'
        ],
        description: 'No per-check fee working against the budget — just cleaner data and better results.'
      }
    ]
  },
  {
    date: 'November 6, 2025',
    title: '700 Million Leads to Search',
    description: "Looking for B2B contacts? This is one of the largest databases available — search it, filter it, export it, and start sending.",
    features: [
      {
        name: '350M+ Lead Database & Bulk Export',
        bullets: [
          'More than 350 million verified B2B contacts, complete with emails, phone numbers, job titles, and company details',
          'Search by industry, company size, location, tech stack, or whatever criteria defines your ICP',
          'Export thousands of leads at once directly into a campaign',
          'Paying for multiple separate data providers is no longer necessary'
        ],
        description: 'Prospecting, start to finish, now lives in a single place.'
      }
    ]
  },
  {
    date: 'October 28, 2025',
    title: 'Dedicated Infrastructure, Live in 5 Minutes',
    description: "Dedicated IPs, dedicated domains, complete control over reputation — and it's all set up before your coffee even cools down.",
    features: [
      {
        name: 'Dedicated Client Infrastructure',
        bullets: [
          'Spin up isolated sending infrastructure with dedicated IPs and domains',
          'Fully separated from every other sender — reputation belongs to you alone',
          'A bad actor on shared infrastructure has no way to affect you',
          'Setup now takes 5 minutes instead of the weeks it once required'
        ],
        description: 'Enterprise-grade infrastructure that deploys at startup speed — built to scale with confidence.'
      }
    ]
  },
  {
    date: 'October 18, 2025',
    title: 'Replies Now Sort Themselves',
    description: "Running 50 campaigns at once makes it nearly impossible to remember who said what — unless AI is sorting it for you.",
    features: [
      {
        name: 'Unlimited AI Tagging',
        bullets: [
          'Every reply gets sorted automatically into categories like interested, not interested, out of office, wrong person, pricing question, demo request, or objection',
          "There's no cap on how many leads get processed",
          'Filter by tag to build a follow-up sequence around a specific type of response',
          'No manual sorting required — the dashboard already shows where every conversation stands'
        ],
        description: 'A hot lead is far less likely to slip through the cracks now.'
      }
    ]
  },
  {
    date: 'October 8, 2025',
    title: 'A Simpler Way to Handle Replies',
    description: "Hundreds of \"not interested\" replies tend to bury the hot leads asking real questions — this was built to sort through that mess.",
    features: [
      {
        name: 'Reply Agents',
        bullets: [
          'A single click generates a solid reply, no tab switch to ChatGPT required',
          "Grammar and tone checking are built in, so a separate Grammarly tab isn't needed",
          'Suggestions take the entire conversation thread into account, not just the last message',
          'Objections, follow-ups, and meeting requests all get handled intelligently'
        ],
        description: "Hot leads hear back faster since replies no longer get built from a blank page — just review, adjust if needed, and send."
      }
    ]
  },
  {
    date: 'September 28, 2025',
    title: 'AI Now Reviews Your Sequences',
    description: "Not sure if step 3 of a 5-step sequence is quietly killing momentum? The AI analyzer has opinions on that, and they're usually right.",
    features: [
      {
        name: 'AI Sequence Analyzer',
        bullets: [
          'Flags language that reads too salesy and risks tripping spam filters',
          'Spots a weak call-to-action and proposes a stronger one',
          'Points out where personalization is missing',
          'Calls out when an email runs too long, and suggests exactly what to trim'
        ],
        description: 'It functions like a senior rep proofing every sequence before it goes out, except it never sleeps and reviews all of them, not just a sample.'
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
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#695AF2] bg-violet-50 rounded-full">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-[#695AF2] mt-2 flex-shrink-0"></span>
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
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg"
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
            A running record of what&apos;s shipped in Sendbox, from headline features down to the small quality-of-life fixes.
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
