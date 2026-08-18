import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import RequestDemoModal from '@/components/RequestDemoModal';
import { APP_LOGIN_URL } from "@/lib/app-url";

export const metadata = getSEOTags({
  title: 'Sendbox University — every guide, playbook, and comparison',
  description:
    'The complete Sendbox learning library: setup, campaigns, warm-up, deliverability, reporting, integrations, and honest competitor comparisons. Free one-page guides.',
  keywords: [
    'sendbox university',
    'cold email guides',
    'sendbox documentation',
    'cold email deliverability guides',
    'sendbox comparisons',
  ],
  canonicalUrlRelative: '/university',
  openGraph: {
    title: `Sendbox University | ${config.appName}`,
    description:
      'The complete Sendbox learning library: setup, campaigns, warm-up, deliverability, reporting, integrations, and honest competitor comparisons.',
    url: `https://${config.domainName}/university`,
  },
});

const D = '/docs';

const TRACKS = [
  {
    name: 'Getting started',
    blurb: 'From signup to your first reply.',
    docs: [
      { title: 'Setting up Sendbox: from signup to first send', href: `${D}/sendbox-setup-process.pdf` },
      { title: 'The 14-day onboarding checklist', href: `${D}/sendbox-14-day-onboarding.pdf` },
      { title: 'The three mailbox routes: buy, import, or connect', href: `${D}/sendbox-three-mailbox-routes.pdf` },
      { title: 'Cold email launch playbook: zero to first reply', href: `${D}/cold-email-launch-playbook.pdf` },
    ],
  },
  {
    name: 'Mailboxes and infrastructure',
    blurb: 'Dedicated IPs, domains, providers, and the math.',
    docs: [
      { title: 'Mailbox math: how many inboxes you actually need', href: `${D}/sendbox-mailbox-math.pdf` },
      { title: 'Try the live mailbox calculator', href: '/tools/mailbox-calculator' },
      { title: 'Google vs Azure vs SMTP: choosing providers', href: `${D}/sendbox-google-vs-azure-vs-smtp.pdf` },
      { title: 'Secondary domains, never your primary', href: `${D}/sendbox-secondary-domains.pdf` },
      { title: 'Dedicated IPs and isolated infrastructure, explained', href: `${D}/sendbox-dedicated-ips-explained.pdf` },
      { title: 'Mailbox health and underperformers', href: `${D}/sendbox-mailbox-health.pdf` },
      { title: 'SPF, DKIM, and DMARC setup guide', href: `${D}/spf-dkim-dmarc-setup-guide.pdf` },
    ],
  },
  {
    name: 'Campaigns',
    blurb: 'Building, launching, and tuning sequences.',
    docs: [
      { title: 'Setting up a campaign in Sendbox', href: `${D}/sendbox-campaign-setup.pdf` },
      { title: 'Campaign best practices', href: `${D}/sendbox-campaign-best-practices.pdf` },
      { title: 'Import and validate your leads', href: `${D}/sendbox-import-validate-leads.pdf` },
      { title: 'Copy that lands (and spintax that sounds human)', href: `${D}/sendbox-copy-that-lands.pdf` },
      { title: 'Subsequences and follow-up flows', href: `${D}/sendbox-subsequences.pdf` },
      { title: 'Understanding Sendbox settings', href: `${D}/sendbox-settings-explained.pdf` },
      { title: 'ESP matching, honestly assessed', href: `${D}/sendbox-esp-matching.pdf` },
      { title: 'SEGs explained (and the SEG setting)', href: `${D}/sendbox-segs-explained.pdf` },
    ],
  },
  {
    name: 'Replies, Unibox, and the AI agent',
    blurb: 'From reply to booked conversation.',
    docs: [
      { title: 'Unibox basics: tags, filters, and the reply workflow', href: `${D}/sendbox-unibox-basics.pdf` },
      { title: 'Building your AI reply agent', href: `${D}/sendbox-reply-agent-setup.pdf` },
      { title: 'The AI reply agent vs your Unibox manager', href: `${D}/sendbox-reply-agent-vs-unibox.pdf` },
      { title: 'The Slack integration', href: `${D}/sendbox-slack-integration.pdf` },
    ],
  },
  {
    name: 'Warm-up and deliverability',
    blurb: 'Landing in the inbox, and staying there.',
    docs: [
      { title: 'How warm-up improves your email health', href: `${D}/sendbox-warmup-email-health.pdf` },
      { title: 'How Sendbox warm-up is different', href: `${D}/sendbox-warmup-vs-others.pdf` },
      { title: 'The warm-up filters, explained', href: `${D}/sendbox-warmup-filters.pdf` },
      { title: 'The mailbox warmup playbook', href: `${D}/mailbox-warmup-playbook.pdf` },
      { title: 'Prove your placement before you scale', href: `${D}/sendbox-placement-test-howto.pdf` },
      { title: 'The cold email deliverability checklist', href: `${D}/cold-email-deliverability-checklist.pdf` },
      { title: 'Zero replies: the triage checklist', href: `${D}/sendbox-zero-replies-triage.pdf` },
      { title: 'Bounce types and validation', href: `${D}/sendbox-bounce-types.pdf` },
      { title: 'High bounces on a new campaign', href: `${D}/sendbox-high-bounces-new-campaign.pdf` },
      { title: 'Reaching Gmail and Yahoo inboxes', href: `${D}/sendbox-personal-email-deliverability.pdf` },
    ],
  },
  {
    name: 'Leads and data',
    blurb: 'Sourcing, enrichment, and credits.',
    docs: [
      { title: 'Finding leads with the built-in 400M database', href: `${D}/finding-leads-400m-database.pdf` },
      { title: 'Credits, enrichment, and validation, end to end', href: `${D}/sendbox-credits-explained.pdf` },
    ],
  },
  {
    name: 'Reporting',
    blurb: 'Numbers your manager and clients can read.',
    docs: [
      { title: 'Reporting up: results your manager can read', href: `${D}/sendbox-reporting-up.pdf` },
      { title: 'Generating reports in Sendbox', href: `${D}/sendbox-generating-reports.pdf` },
    ],
  },
  {
    name: 'Integrations, API, and automation',
    blurb: 'Run Sendbox from your own stack.',
    docs: [
      { title: 'Run Sendbox from Claude: the MCP quickstart', href: `${D}/sendbox-claude-mcp-quickstart.pdf` },
      { title: 'The Sendbox CLI, at a glance', href: `${D}/sendbox-cli-reference.pdf` },
      { title: 'Webhooks: wire Sendbox events into your stack', href: `${D}/sendbox-webhooks.pdf` },
    ],
  },
  {
    name: 'Agencies and scale',
    blurb: 'Multi-client operations and growing volume.',
    docs: [
      { title: 'Managing multi-client workspaces as an agency', href: `${D}/managing-agency-workspaces.pdf` },
      { title: 'The cold email agency operating system', href: `${D}/cold-email-agency-operating-system.pdf` },
      { title: 'Scale and measure: past your first campaign', href: `${D}/sendbox-scale-and-measure.pdf` },
      { title: 'Which Sendbox plan fits you', href: `${D}/sendbox-plan-chooser.pdf` },
    ],
  },
  {
    name: 'Compare Sendbox',
    blurb: 'Honest one-page comparisons, strengths conceded.',
    docs: [
      { title: 'Sendbox vs Smartlead', href: `${D}/sendbox-vs-smartlead-battlecard.pdf` },
      { title: 'Sendbox vs Instantly', href: `${D}/sendbox-vs-instantly-battlecard.pdf` },
      { title: 'Sendbox vs EmailBison', href: `${D}/sendbox-vs-emailbison-battlecard.pdf` },
      { title: 'Sendbox vs Apollo', href: `${D}/sendbox-vs-apollo-battlecard.pdf` },
      { title: 'Sendbox vs Lemlist', href: `${D}/sendbox-vs-lemlist-battlecard.pdf` },
      { title: 'Sendbox vs Reply.io', href: `${D}/sendbox-vs-replyio-battlecard.pdf` },
      { title: 'Sendbox vs Saleshandy', href: `${D}/sendbox-vs-saleshandy-battlecard.pdf` },
      { title: 'Sendbox vs PlusVibe', href: `${D}/sendbox-vs-plusvibe-battlecard.pdf` },
      { title: 'Sendbox vs QuickMail', href: `${D}/sendbox-vs-quickmail-battlecard.pdf` },
      { title: 'Sendbox vs Mailshake', href: `${D}/sendbox-vs-mailshake-battlecard.pdf` },
      { title: 'Sendbox vs Woodpecker', href: `${D}/sendbox-vs-woodpecker-battlecard.pdf` },
      { title: 'All comparisons and alternatives', href: '/compare' },
    ],
  },
];

export default function UniversityPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Sendbox University', url: `https://${config.domainName}/university` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Sendbox University
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Every guide, playbook, and comparison in one place
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Free one-page guides covering everything from your first mailbox to scaling past
            500k emails a month. No signup, no gate. Open any doc and get to work.
          </p>
        </header>

        <div className="space-y-12">
          {TRACKS.map((track) => (
            <section key={track.name}>
              <h2 className="text-2xl font-bold mb-1">{track.name}</h2>
              <p className="opacity-70 mb-4">{track.blurb}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {track.docs.map((doc) => {
                  const isPdf = doc.href.endsWith('.pdf');
                  const slug = isPdf ? doc.href.split('/').pop().replace('.pdf', '') : null;
                  return (
                    <li key={doc.href + doc.title}>
                      <a
                        href={doc.href}
                        target={isPdf ? '_blank' : undefined}
                        rel={isPdf ? 'noopener noreferrer' : undefined}
                        className="group block border border-base-300 rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
                      >
                        {isPdf ? (
                          <div className="h-36 overflow-hidden border-b border-base-300 bg-base-200">
                            <img
                              src={`/docs/thumbs/${slug}.png`}
                              alt={`Preview of ${doc.title}`}
                              loading="lazy"
                              className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                            />
                          </div>
                        ) : (
                          <div className="h-36 flex items-center justify-center border-b border-base-300 bg-base-200">
                            <span className="text-sm font-semibold uppercase tracking-wider opacity-50">
                              Interactive tool
                            </span>
                          </div>
                        )}
                        <div className="px-4 py-3">
                          <span className="font-medium leading-snug">{doc.title}</span>
                          <span className="block text-sm opacity-60 mt-0.5">
                            {isPdf ? 'One-page PDF guide' : 'Open on site'}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-base-300 pt-8 space-y-3">
          <p className="opacity-80">
            Prefer long-form reading? Browse the{' '}
            <a href="/learn" className="link link-primary">
              in-depth written guides
            </a>
            .
          </p>
          <p className="opacity-80">
            Want any of this mapped to your own setup live?{' '}
            <RequestDemoModal
              trigger="button"
              dataFastGoal="click_book_demo"
              dataFastGoalLocation="university"
              className="link link-primary"
            >
              Book a 15-minute walkthrough
            </RequestDemoModal>{' '}
            or{' '}
            <a href={APP_LOGIN_URL} className="link link-primary">
              start in the app
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
}
