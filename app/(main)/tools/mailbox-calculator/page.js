import { getToolBySlug } from '@/data/tools';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import ToolPageTemplate from '@/components/templates/ToolPageTemplate';
import MailboxCalculator from '@/components/tools/MailboxCalculator';

const tool = getToolBySlug('mailbox-calculator');

export const metadata = getSEOTags({
  title: tool.seo.title,
  description: tool.seo.description,
  keywords: tool.seo.keywords,
  canonicalUrlRelative: '/tools/mailbox-calculator',
  openGraph: {
    title: `${tool.seo.title} | ${config.appName}`,
    description: tool.seo.description,
    url: `https://${config.domainName}/tools/mailbox-calculator`,
  },
});

export default function MailboxCalculatorPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Tools', url: `https://${config.domainName}/tools` },
    { name: tool.name, url: `https://${config.domainName}/tools/mailbox-calculator` },
  ]);
  const faqSchema = getFAQPageSchema(tool.faqs);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolPageTemplate tool={tool}>
        <MailboxCalculator />
      </ToolPageTemplate>
    </>
  );
}
