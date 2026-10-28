/**
 * next-sitemap configuration.
 * Generates `public/sitemap.xml` and `public/robots.txt` on `postbuild`.
 * @see https://github.com/iamvishnusankar/next-sitemap
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.dtnr-studio.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
