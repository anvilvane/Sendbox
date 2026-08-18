import config from "@/config";
import author from "@/data/author";

// Trim a meta description to a safe SERP length (Google truncates around
// 155-160 chars). Cuts on a word boundary and appends an ellipsis so the
// snippet never ends mid-word. Keeps descriptions unique without manual edits.
export const clampDescription = (text, max = 158) => {
  if (!text) return text;
  const t = String(text).trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).trimEnd()}…`;
};

// Comprehensive SEO configuration for Sendbox
// Handles meta tags, Open Graph, Twitter Cards, and structured data preparation
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  // Append the "| Sendbox" brand suffix only when it helps: skip it if the
  // title already contains the brand name, or if appending would push the
  // title past the ~60-char SERP truncation limit. Many data-driven titles
  // are already complete, well-formed SEO titles.
  const buildTitle = (t) => {
    if (!t) return `${config.appName} - ${config.appTagline}`;
    const withBrand = `${t} | ${config.appName}`;
    if (t.includes(config.appName) || withBrand.length > 60) return t;
    return withBrand;
  };
  const siteTitle = buildTitle(title);

  const siteDescription = description || config.appDescription;
  const siteKeywords = keywords || config.seoKeywords;

  // Open Graph url must mirror the canonical, otherwise crawlers report an
  // "og:url does not match canonical" mismatch. Resolve the relative canonical
  // to an absolute URL and use it as the default og:url.
  const canonicalAbsolute = canonicalUrlRelative
    ? new URL(canonicalUrlRelative, `https://${config.domainName}`).href
    : `https://${config.domainName}/`;

  return {
    // Title: 50-60 chars optimal for SERP display
    title: siteTitle,
    // Description: 150-160 chars for optimal SERP snippet
    description: siteDescription,
    // Keywords for search engines and LLM context
    keywords: siteKeywords,
    applicationName: config.appName,
    authors: [{ name: config.appName, url: `https://${config.domainName}` }],
    creator: config.appName,
    publisher: config.appName,
    category: "Technology",
    classification: "Business Software",

    // Base URL for resolving relative URLs
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    // Open Graph for Facebook, LinkedIn, and social sharing
    openGraph: {
      title: openGraph?.title || siteTitle,
      description: openGraph?.description || siteDescription,
      url: openGraph?.url || canonicalAbsolute,
      siteName: config.appName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://${config.domainName}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
    },

    // Twitter Card configuration for rich Twitter/X previews
    twitter: {
      card: "summary_large_image",
      title: openGraph?.title || siteTitle,
      description: openGraph?.description || siteDescription,
      images: [`https://${config.domainName}/opengraph-image.png`],
    },

    // Robots directives for search engines
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Canonical URL (critical for avoiding duplicate content)
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // Additional verification tags
    verification: {
      // Add your verification codes here when needed
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },

    // Additional custom tags
    ...extraTags,
  };
};

// Generate Organization Schema for brand identity (critical for GEO/AEO)
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `https://${config.domainName}/#organization`,
  name: config.appName,
  url: `https://${config.domainName}`,
  logo: {
    "@type": "ImageObject",
    url: `https://${config.domainName}/icon.png`,
    width: 512,
    height: 512,
  },
  description: config.appDescription,
  // TODO(user): set a real founding date once decided -- omitted rather than carrying over SendKit's.
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: config.mailgun?.supportEmail || "support@sendbox.ai",
    availableLanguage: ["English"],
  },
  ...(config.socialLinks?.length > 0 && { sameAs: config.socialLinks }),
});

// Generate WebSite Schema for sitelinks search box and Google site name
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://${config.domainName}/#website`,
  url: `https://${config.domainName}`,
  name: config.appName,
  alternateName: [config.appName],
  description: config.appDescription,
  publisher: {
    "@id": `https://${config.domainName}/#organization`,
  },
  inLanguage: "en-US",
});

// Generate SoftwareApplication Schema
export const getSoftwareApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: config.appName,
  description: config.appDescription,
  url: `https://${config.domainName}`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  // TODO(user): both `offers` (real pricing) and `aggregateRating` (real G2
  // reviews) were SendKit's actual figures -- carrying them over would
  // publish fabricated pricing/rating structured data for a product with no
  // real reviews and undecided pricing yet. Omitted until real ones exist;
  // add `offers` back once pricing is finalized and `aggregateRating` back
  // once there are genuine reviews to report.
  featureList: [
    "Email Warmup",
    "Cold Email Sequencing",
    "Dedicated IP Addresses",
    "Unified Inbox",
    "AI Reply Suggestions",
    "Slack Integration",
    "Email Validation",
    "Deliverability Monitoring",
    "Isolated Infrastructure",
    "Inbox Placement Testing",
    "Blacklist Monitoring",
    "ESP Matching",
  ],
});

// Generate BreadcrumbList Schema
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate FAQPage Schema from FAQ data
export const getFAQPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Generate Speakable Schema for voice search / AEO optimization
// cssSelector should target the most answer-rich content on the page
export const getSpeakableSchema = (url, cssSelectors = ["h1", ".speakable"]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": url,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  },
  url,
});

// Reusable Person node for the Sendbox author, embedded as `author` in
// Article schema across editorial pages.
export const getAuthorNode = () => ({
  "@type": "Person",
  "@id": `https://${config.domainName}/author/${author.slug}#person`,
  name: author.name,
  url: `https://${config.domainName}/author/${author.slug}`,
  jobTitle: author.role,
  image: `https://${config.domainName}${author.avatar}`,
  worksFor: { "@id": `https://${config.domainName}/#organization` },
  ...(author.socials?.length > 0 && { sameAs: author.socials }),
});

// Standalone Person schema for the author page itself
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  ...getAuthorNode(),
  description: author.bio,
});

// Article schema with the author Person node attached. Use on editorial
// pages (comparisons, alternatives, roundups, pricing teardowns, etc.).
export const getArticleSchema = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  ...(description && { description }),
  ...(image && { image }),
  ...(datePublished && { datePublished }),
  ...((dateModified || datePublished) && {
    dateModified: dateModified || datePublished,
  }),
  author: getAuthorNode(),
  publisher: { "@id": `https://${config.domainName}/#organization` },
  mainEntityOfPage: url,
});