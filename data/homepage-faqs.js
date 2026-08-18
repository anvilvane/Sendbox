// Homepage FAQ data - shared between the FAQ component and JSON-LD schema
// IMPORTANT: Keep this as the single source of truth. Schema must match rendered content.

export const homepageFAQs = [
  {
    question: "What is Sendbox and how does it work?",
    answer: "Sendbox is a cold email infrastructure platform that gives every account its own dedicated IP and fully isolated sending environment. You connect your mailboxes, import leads, build sequences, and Sendbox handles deliverability automatically. That includes warmup, validation, bounce monitoring, and inbox placement. Your emails land in primary inboxes instead of spam."
  },
  {
    question: "How is Sendbox different from Smartlead or Instantly?",
    answer: "The biggest difference is infrastructure isolation. Most cold email tools share IPs and sending resources across users, so when one sender burns their reputation, everyone on that server suffers. Sendbox gives every account a dedicated IP and isolated environment. Your deliverability is yours alone. No one else can drag it down."
  },
  {
    question: "Does Sendbox's email warmup actually work without getting flagged?",
    answer: "Yes. ESPs like Gmail and Outlook have gotten good at detecting warmup patterns, which is why most warmup tools stop working after a while. Sendbox's warmup system mimics real human behavior with varied send times, natural engagement patterns, and genuine interactions. It passes ESP detection instead of triggering spam filters."
  },
  {
    question: "How does Sendbox protect mailbox deliverability?",
    answer: "Sendbox gives you full visibility into mailbox health: reply rate and bounce rate tracked per mailbox in real time, plus blacklist and inbox placement monitoring. When a mailbox starts slipping, you see it early in the dashboard, so you can pull it from campaigns and run warmup to rebuild its reputation before the damage spreads to your other accounts."
  },
  {
    question: "How long does it take to set up Sendbox and send my first campaign?",
    answer: "Under 15 minutes. Connect your mailboxes, upload a CSV of leads, write your sequence, and launch. Sendbox auto-maps fields and validates every email on import. There's no onboarding call required. Email validation, lead scoring, timezone detection, and ESP matching all happen automatically."
  },
  {
    question: "What email providers does Sendbox support?",
    answer: "Sendbox works with Google Workspace, Microsoft 365, Outlook, and any provider that supports IMAP/SMTP. You can connect as many mailboxes as you need across any combination of providers. There's no limit. Sendbox also does ESP matching, which means it detects your recipient's email provider and routes through a matching mailbox for higher inbox placement."
  },
  {
    question: "Does Sendbox have a Slack integration for managing replies?",
    answer: "Yes. When a lead replies, it shows up directly in your Slack channel. You can respond right there in Slack, and Sendbox sends the email on your behalf. There's also an AI reply agent that drafts responses and auto-tags replies as interested, not now, wrong person, or unsubscribe. Your team can move fast without switching between tools."
  },
  {
    question: "Are there limits on warmup, inbox placement tests, or blacklist monitoring?",
    answer: "Every Sendbox plan includes unlimited mailbox warmup, unlimited inbox placement tests, and unlimited blacklist monitoring. All subject to a fair use policy, but for normal usage you'll never hit a wall. The only hard limits are on sending volume and active leads, which scale with your plan."
  },
  {
    question: "How much does Sendbox cost?",
    answer: "Sendbox starts at $99/month on the Essential plan for 75,000 emails and 30,000 active leads. Dedicated IPs, isolated infrastructure, and unlimited warmup are included on every plan. Pro is $499/month for 500K emails, Agency is $899/month for 2.5M emails with white-label and branded reports, and Power is $2,499/month for 10M emails. Every plan includes the full deliverability stack."
  },
  {
    question: "Does Sendbox have A/B testing for cold emails?",
    answer: "Yes. You can run multiple variants of any step in your sequence. Sendbox automatically tracks performance, disables underperforming variants, and scales the winners. You don't have to check in or manually adjust anything."
  },
];
