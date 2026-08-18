import TermsOfService from "@/components/TermsOfService";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Terms of Service",
  description: "Terms governing your use of Sendbox's email sequencing platform: account responsibilities, billing terms, acceptable use, and liability provisions.",
  canonicalUrlRelative: "/terms-of-service",
});

export default function TermsOfServicePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Terms of Service", url: `https://${config.domainName}/terms-of-service` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <TermsOfService />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
