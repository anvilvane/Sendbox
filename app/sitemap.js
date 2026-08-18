import { featureSlugs } from '@/data/features';
import { deliverablilitySlugs } from '@/data/deliverability';
import { contributorsData } from '@/data/contributors';
import { comparisonSlugs } from '@/data/comparisons';
import { alternativeSlugs } from '@/data/alternatives';
import { toolVsToolSlugs } from '@/data/tool-vs-tool';
import { solutionSlugs } from '@/data/solutions';
import { roundupSlugs } from '@/data/roundups';
import { pricingTeardownSlugs } from '@/data/pricing-teardowns';
import { infraComparisonSlugs, infraPricingSlugs } from '@/data/infra-providers';
import { toolSlugs } from '@/data/tools';
import { getAllGuideSlugs } from '@/data/guides';
import config from '@/config';

export default function sitemap() {
  const baseUrl = `https://${config.domainName}`;

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/changelog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contributors`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/author/ritesh-chauhan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const featureRoutes = featureSlugs.map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const deliverabilityRoutes = deliverablilitySlugs.map((slug) => ({
    url: `${baseUrl}/deliverability/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const contributorRoutes = contributorsData.map((contributor) => ({
    url: `${baseUrl}/contributors/${contributor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.3,
  }));

  // Head-to-head comparisons carry the most buyer intent of the templated
  // pages; they get the highest priority among them. Alternatives and pricing
  // teardowns sit a tier below so Google can tell which competitor URL is
  // canonical when content overlaps.
  const comparisonRoutes = comparisonSlugs.map((slug) => ({
    url: `${baseUrl}/sendbox-vs-${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const alternativeRoutes = alternativeSlugs.map((slug) => ({
    url: `${baseUrl}/alternative/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    // Hub pages: high priority (they distribute crawl depth to templated children).
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/alternatives`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sendbox-alternatives`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/deliverability`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/pricing-breakdowns`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/what-is-sendbox`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/best-cold-email-tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/best-email-infrastructure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...getAllGuideSlugs().map((slug) => ({
      url: `${baseUrl}/learn/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...comparisonRoutes,
    ...alternativeRoutes,
    // Tool-vs-tool, infra comparisons, infra pricing, pricing teardowns: templated
    // pages that overlap with /sendbox-vs-X. Lower priority signals to Google
    // these are reference content, not primary landing pages.
    ...toolVsToolSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...roundupSlugs.map((slug) => ({
      url: `${baseUrl}/best-${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...pricingTeardownSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...infraComparisonSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...infraPricingSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...toolSlugs.map((slug) => ({
      url: `${baseUrl}/tools/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/for-${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
    ...featureRoutes,
    ...deliverabilityRoutes,
    ...contributorRoutes,
  ];
}
