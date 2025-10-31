/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://punjabropeaccess.com',
  generateRobotsTxt: true,
  outDir: './public', // explicitly target your /public folder
  sitemapBaseFileName: 'sitemap',
  exclude: ['/404'],
  changefreq: 'monthly',
  priority: 0.8,
  generateIndexSitemap: false,
};
