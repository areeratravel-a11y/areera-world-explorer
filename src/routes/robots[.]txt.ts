import { createFileRoute } from "@tanstack/react-router";

const robotsTxt = `User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://www.areeratravels.com/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(robotsTxt, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
