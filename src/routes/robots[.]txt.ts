import { createFileRoute } from "@tanstack/react-router";

const robotsTxt = `User-agent: *
Allow: /
Disallow: /thank-you

# Generative AI & Answer Engine Crawlers (AEO / GEO)
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://www.areeratravels.com/sitemap.xml
# LLM Web Discovery (llmstxt.org)
# LLM-Index: https://www.areeratravels.com/llms.txt
# LLM-Full: https://www.areeratravels.com/llms-full.txt
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
