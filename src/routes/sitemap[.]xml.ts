import { createFileRoute } from "@tanstack/react-router";
import { countries } from "@/data/countries";

const baseUrl = "https://www.areeratravels.com";

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

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static pages
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Regional hub routes
  for (const route of regionalRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Dynamic country routes
  for (const country of countries) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/countries/${country.slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  return xml;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sitemap = generateSitemap();
        return new Response(sitemap, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
      HEAD: async () => {
        return new Response(null, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
