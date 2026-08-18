import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import ProductShowcase from "@/components/ProductShowcase";
import UnifiedPricing from "@/components/UnifiedPricing";
import { getSEOTags, getFAQPageSchema, getSpeakableSchema, getBreadcrumbSchema } from "@/libs/seo";
import { homepageFAQs } from "@/data/homepage-faqs";

// Homepage SEO metadata with canonical
export const metadata = getSEOTags({
  canonicalUrlRelative: "/",
  description: "Sendbox is a cold email infrastructure platform with dedicated IPs, isolated environments, and AI-powered warmup for agencies and GTM teams.",
});

export default function Page() {
  const faqSchema = getFAQPageSchema(homepageFAQs);
  const speakableSchema = getSpeakableSchema("https://sendboxes.tech/", ["h1", "#faq"]);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Sendbox", url: "https://sendboxes.tech" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero />
      <ProductShowcase/>
      <WhySection />
      <Features />
      <UnifiedPricing />
      <FAQ />
      <CTA />
      <Footer />

    </>
  );
}
