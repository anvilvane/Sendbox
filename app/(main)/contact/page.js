import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Contact Us",
  description: "Get in touch with the Sendbox team for support, billing, or business inquiries.",
  canonicalUrlRelative: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Contact Us", url: `https://${config.domainName}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
