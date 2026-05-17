/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://tuskerlodge.co.uk",
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: false, // Single sitemap for small sites
  outDir: "./out", // Output directory for sitemap files
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  // Exclude these paths from sitemap if needed
  exclude: ["/api/*"],
  // Additional paths to include (if you have static routes not picked up automatically)
  additionalPaths: async (config) => {
    const result = [];

    // Add your homepage explicitly
    result.push({
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
