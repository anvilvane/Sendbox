const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          // Only send HSTS in production. Chrome treats localhost as a trustworthy
          // origin and DOES honor this header there -- sending it in `next dev`
          // makes the browser force-upgrade http://localhost:PORT to https, which
          // has no TLS listener, causing a real ERR_TOO_MANY_REDIRECTS loop that
          // persists (via Chrome's cached HSTS policy) across restarts until the
          // site's HSTS entry is manually cleared. Pre-existing in the original
          // SendKit clone, caught while verifying the Sendbox rebrand locally.
          ...(process.env.NODE_ENV === 'production'
            ? [{
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
              }]
            : []),
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sendbox-vs-:slug(instantly|lemlist|smartlead|saleshandy|apollo|replyio|woodpecker|emailbison|plusvibe|supersend|prospi|reachinbox|snov|gmass|skylead|salesflow|hunter)',
        destination: '/compare/:slug',
      },
      {
        source: '/:slug(instantly|lemlist|smartlead|saleshandy|apollo|replyio|woodpecker|emailbison)-vs-:slug2(instantly|lemlist|smartlead|saleshandy|apollo|replyio|woodpecker|emailbison)',
        destination: '/vs/:slug-vs-:slug2',
      },
      {
        source: '/best-:slug(cold-email-software|email-warmup-tools|cold-email-infrastructure)',
        destination: '/best/:slug',
      },
      {
        source: '/for-:slug',
        destination: '/for/:slug',
      },
      {
        source: '/:slug(inboxkit|maildoso|zapmail|mailforge|infraforge)-vs-:slug2(inboxkit|maildoso|zapmail|mailforge|infraforge)',
        destination: '/infra/:slug-vs-:slug2',
      },
      {
        source: '/:slug(inboxkit|maildoso|zapmail|mailforge|infraforge)-pricing',
        destination: '/infra-pricing/:slug-pricing',
      },
      {
        source: '/:slug(instantly|smartlead|lemlist|apollo|replyio|saleshandy|woodpecker|emailbison|plusvibe|supersend|prospi|reachinbox|snov|gmass|skylead|salesflow|hunter)-pricing',
        destination: '/pricing-breakdowns/:slug-pricing',
      },
    ];
  },
  async redirects() {
    return [
      // www -> apex is otherwise served as a temporary (307) redirect at the
      // Vercel domain layer, before requests reach the app. This app-level
      // rule only takes effect once www.sendboxes.tech is added as a serving
      // domain (not a Vercel "Redirect" domain) - see ACTION-PLAN item 8.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sendboxes.tech' }],
        destination: 'https://sendboxes.tech/:path*',
        permanent: true,
      },
      // old competitor teardown URLs moved to clean root URLs
      {
        source: '/pricing/:slug',
        destination: '/:slug',
        permanent: true,
      },
      // Branded "/better-than-<tool>" battlecard short links used to redirect here to
      // same-domain PDFs -- those were SendKit's real battlecards, deleted along with
      // the rest of the SendKit-branded doc library (see app/(main)/university/page.js).
      // TODO(user): re-add once real Sendbox battlecard PDFs exist.
    ];
  },
  images: {
    minimumCacheTTL: 2592000,
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "**.cloudfront.net" },
      { protocol: "https", hostname: "**.imgix.net" },
      { protocol: "https", hostname: "cdn.brandfetch.io" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
      // Favicons / logos shown in the exit-intent migration row
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "www.inboxkit.com" },
    ],
    // Some trusted CDN logos (e.g. the 11x logo in the testimonial marquee) are
    // SVGs. next/image refuses remote SVGs unless this is enabled; the sandbox CSP
    // neutralizes any embedded scripts so it stays safe.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
