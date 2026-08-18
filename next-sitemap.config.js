module.exports = {
  siteUrl: process.env.SITE_URL || "https://sendboxes.tech",
  generateRobotsTxt: false,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*", "/apple-icon.*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  // Priority and changefreq per route
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // Feature pages get high priority
    if (path.startsWith("/features")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    // Other pages
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
