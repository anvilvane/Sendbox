import Script from "next/script";
import { Poppins, Figtree, Inter } from "next/font/google";
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

// Poppins → headings (h1-h6), Figtree → body text, Inter → numeric displays.
// Applied directly here because this is the file that actually renders the real
// <html> tag (see app/layout.js -- it's a thin pass-through, not a real root
// layout in this codebase's structure). An earlier attempt set these fonts in
// app/layout.js and tried to merge them onto this element via cloneElement,
// which silently did nothing (children here isn't a plain cloneable React
// element in App Router's RSC tree) -- the site shipped with only GeistSans
// applied. Fixed by importing the fonts where the <html> tag actually is.
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });


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
    <html lang="en" data-theme={config.colors.theme} className={`${poppins.variable} ${figtree.variable} ${inter.variable}`}>
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
          data-domain="sendboxes.tech"
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
