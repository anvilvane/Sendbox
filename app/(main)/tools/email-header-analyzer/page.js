import { getToolBySlug } from '@/data/tools';
import { getSEOTags, getBreadcrumbSchema, getFAQPageSchema } from '@/libs/seo';
import config from '@/config';
import ToolPageTemplate from '@/components/templates/ToolPageTemplate';
import HeaderAnalyzer from '@/components/tools/HeaderAnalyzer';

const tool = getToolBySlug('email-header-analyzer');

export const metadata = getSEOTags({
  title: tool.seo.title,
  description: tool.seo.description,
  keywords: tool.seo.keywords,
  canonicalUrlRelative: '/tools/email-header-analyzer',
  openGraph: {
    title: `${tool.seo.title} | ${config.appName}`,
    description: tool.seo.description,
    url: `https://${config.domainName}/tools/email-header-analyzer`,
  },
});

export default function HeaderAnalyzerPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Tools', url: `https://${config.domainName}/tools` },
    { name: tool.name, url: `https://${config.domainName}/tools/email-header-analyzer` },
  ]);

  const faqSchema = getFAQPageSchema(tool.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolPageTemplate tool={tool}>
        <HeaderAnalyzer />
      </ToolPageTemplate>
    </>
  );
}
