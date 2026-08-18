import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import PlausibleProvider from "next-plausible";
import { getSEOTags, getOrganizationSchema, getWebSiteSchema, getSoftwareApplicationSchema } from "@/libs/seo";
import config from "@/config";
import Providers from "@/components/Providers";
import dynamic from "next/dynamic";
const FloatingGoogleLogin = dynamic(() => import("@/components/FloatingGoogleLogin"), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"), { ssr: false });
import Header from "@/components/Header";
import SmoothScrollOnNav from "@/components/SmoothScrollOnNav";
import "../globals.css";


export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const softwareAppSchema = getSoftwareApplicationSchema();

  return (
    <html lang="en" data-theme={config.colors.theme} className={GeistSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <link rel="dns-prefetch" href="https://cdn.brandfetch.io" />
        <link rel="dns-prefetch" href="https://datafa.st" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <script id="suppress-console" dangerouslySetInnerHTML={{ __html: `
          if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
            var _log = console.log, _warn = console.warn, _err = console.error;
            console.log = function(){};
            console.warn = function(){};
            console.error = function(){};
            console.debug = function(){};
          }
        `}} />
        <script id="datafast-queue" dangerouslySetInnerHTML={{ __html: `
          window.datafast = window.datafast || function() {
            window.datafast.q = window.datafast.q || [];
            window.datafast.q.push(arguments);
          };
        `}} />
        <script id="happierleads" dangerouslySetInnerHTML={{ __html: `
          (function(){
            function load(){
              if (window.__hl_loaded) return; window.__hl_loaded = true;
              var e="rest.happierleads.com/v3/script?clientId=nULKfWzsa6GhsNUU9bUCNQ&version=4.0.0",
              t=document.createElement("script");
              t.src="https://"+e; t.async = true;
              t.onload = function(){ new Happierleads.default };
              var c=document.getElementsByTagName("script")[0];
              c.parentNode.insertBefore(t,c);
            }
            if ('requestIdleCallback' in window) { requestIdleCallback(load, { timeout: 5000 }); }
            else { setTimeout(load, 4000); }
          })();
        `}} />
        {config.domainName && (
          <PlausibleProvider domain={config.domainName} />
        )}
        <Script
          defer
          data-website-id="dfid_Sz3bN39vzZJdfm6wuKo5b"
          data-domain="sendbox.ai"
          data-allow-localhost="true"
          src="https://datafa.st/js/script.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JG1JZDPB0C"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JG1JZDPB0C');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <SmoothScrollOnNav />
          <Header />
          <main>{children}</main>
          <FloatingGoogleLogin />
          <ExitIntentPopup />
        </Providers>
      </body>
    </html>
  );
}
