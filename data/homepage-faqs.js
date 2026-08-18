// Homepage FAQ data - shared between the FAQ component and JSON-LD schema
// IMPORTANT: Keep this as the single source of truth. Schema must match rendered content.

export const homepageFAQs = [
  {
    question: "What is Sendbox and how does it work?",
    answer: "Sendbox is cold email infrastructure where every account gets its own dedicated IP and a completely isolated sending environment. Connect your mailboxes, bring in your leads, build out your sequences, and Sendbox takes care of deliverability behind the scenes, warmup, validation, bounce tracking, and inbox placement included. The result is emails that land in primary rather than getting buried in spam."
  },
  {
    question: "How is Sendbox different from Smartlead or Instantly?",
    answer: "It comes down to infrastructure isolation. Most cold email platforms pool IPs and sending resources across every user, so one sender torching their reputation drags down everyone else on that same server. Sendbox hands each account its own dedicated IP and its own isolated environment. Your deliverability belongs to you alone, and nothing anyone else does can pull it down."
  },
  {
    question: "Does Sendbox's email warmup actually work without getting flagged?",
    answer: "Yes. Gmail and Outlook have gotten sharp at spotting warmup patterns, which is exactly why so many warmup tools quietly stop working over time. Sendbox's warmup mimics real human behavior instead, varied send times, natural-looking engagement, genuine back-and-forth interaction, so it gets past ESP detection rather than tripping the same spam filters it's supposed to help you avoid."
  },
  {
    question: "How does Sendbox protect mailbox deliverability?",
    answer: "You get full visibility into mailbox health: reply rate and bounce rate tracked per mailbox in real time, alongside blacklist and inbox placement monitoring. The moment a mailbox starts to slip, it shows up in your dashboard early enough to pull it from active campaigns and run warmup to rebuild its standing, before the problem spreads to the rest of your accounts."
  },
  {
    question: "How long does it take to set up Sendbox and send my first campaign?",
    answer: "Under 15 minutes, typically. Connect your mailboxes, upload a lead CSV, write your sequence, and hit launch. Field mapping and email validation both happen automatically on import, and there's no mandatory onboarding call standing between you and your first send. Lead scoring, timezone detection, and ESP matching all run in the background without you touching a thing."
  },
  {
    question: "What email providers does Sendbox support?",
    answer: "Google Workspace, Microsoft 365, Outlook, and anything else that speaks IMAP or SMTP. There's no cap on how many mailboxes you connect or how you mix providers. Sendbox also does ESP matching under the hood, detecting which provider a recipient uses and routing the send through a matching mailbox to improve the odds of landing in the inbox."
  },
  {
    question: "Does Sendbox have a Slack integration for managing replies?",
    answer: "Yes. A lead's reply shows up straight in your Slack channel, and you can answer from right there, Sendbox sends it on your behalf. There's also an AI reply agent that drafts responses and auto-tags each reply as interested, not now, wrong person, or unsubscribe, so your team keeps moving without hopping between tools."
  },
  {
    question: "Are there limits on warmup, inbox placement tests, or blacklist monitoring?",
    answer: "Every Sendbox plan comes with unlimited mailbox warmup, unlimited inbox placement tests, and unlimited blacklist monitoring, subject to a fair use policy that normal usage patterns won't come close to hitting. The only real caps are on sending volume and active leads, and those scale with whichever plan you're on."
  },
  {
    question: "How much does Sendbox cost?",
    answer: "Sendbox runs five plans, Essential, Plus, Pro, Agency, and Power, each scaling up in email volume as you move up the tiers. Essential starts you at 75,000 emails and 30,000 active leads. Agency steps up to 2.5M emails and adds white-label branding with custom branded reports, and Power tops out at 10M emails. Dedicated IPs, isolated infrastructure, and unlimited warmup are included at every tier, not held back as an upsell, and the full deliverability stack ships standard no matter which plan you pick."
  },
  {
    question: "Does Sendbox have A/B testing for cold emails?",
    answer: "Yes. Run multiple variants on any step of your sequence, and Sendbox tracks performance automatically, quietly turning off the underperforming variants and leaning into the winners. Nothing to check in on or adjust by hand."
  },
];
