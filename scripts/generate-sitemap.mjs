import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const baseUrl = "https://www.areeratravels.com";
const today = new Date().toISOString().split("T")[0];

// Extract country slugs from src/data/countries.ts
const countriesFilePath = path.join(rootDir, "src", "data", "countries.ts");
const countriesContent = fs.readFileSync(countriesFilePath, "utf8");
const slugRegex = /slug:\s*["']([^"']+)["']/g;
const countrySlugs = [];
let match;
while ((match = slugRegex.exec(countriesContent)) !== null) {
  if (!countrySlugs.includes(match[1])) {
    countrySlugs.push(match[1]);
  }
}

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/services/visa", priority: "0.9", changefreq: "weekly" },
  { path: "/services/ticket", priority: "0.9", changefreq: "weekly" },
  { path: "/services/attestation", priority: "0.9", changefreq: "weekly" },
  { path: "/flight-reservation", priority: "0.9", changefreq: "weekly" },
  { path: "/hotel-booking", priority: "0.9", changefreq: "weekly" },
  { path: "/countries", priority: "0.9", changefreq: "daily" },
  { path: "/guides/visa-free-asian-destinations", priority: "0.85", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { path: "/terms-and-conditions", priority: "0.5", changefreq: "monthly" },
];

const regionalRoutes = [
  { path: "/countries/asia", priority: "0.85", changefreq: "weekly" },
  { path: "/countries/middle-east", priority: "0.85", changefreq: "weekly" },
  { path: "/countries/north-africa", priority: "0.85", changefreq: "weekly" },
  { path: "/countries/africa", priority: "0.85", changefreq: "weekly" },
  { path: "/countries/western", priority: "0.85", changefreq: "weekly" },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Static pages
xml += `  <!-- Core Navigation & Services -->\n`;
for (const route of staticRoutes) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// Regional hub routes
xml += `\n  <!-- Regional Travel & Visa Hubs -->\n`;
for (const route of regionalRoutes) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += `  </url>\n`;
}

// Dynamic country routes
xml += `\n  <!-- ${countrySlugs.length} Destination Country Visa Guides -->\n`;
for (const slug of countrySlugs) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/countries/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

// Write to public/
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, xml, "utf8");

// Mirror to all potential Vercel & Nitro deployment output paths if they exist
const targetDirs = [
  path.join(rootDir, ".vercel", "output", "static"),
  path.join(rootDir, ".vercel", "output"),
  path.join(rootDir, ".output", "public"),
  path.join(rootDir, ".output"),
];

for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, "sitemap.xml"), xml, "utf8");
  }
}

// Also mirror robots.txt, llms.txt, llms-full.txt, _redirects, and _headers
for (const filename of ["robots.txt", "llms.txt", "llms-full.txt", "_redirects", "_headers"]) {
  const src = path.join(rootDir, "public", filename);
  if (fs.existsSync(src)) {
    const content = fs.readFileSync(src, "utf8");
    for (const dir of targetDirs) {
      if (fs.existsSync(dir)) {
        fs.writeFileSync(path.join(dir, filename), content, "utf8");
      }
    }
  }
}

console.log(
  `[Sitemap] Generated sitemap.xml with ${staticRoutes.length + regionalRoutes.length + countrySlugs.length} URLs for ${baseUrl}.`,
);
