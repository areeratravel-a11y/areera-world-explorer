import { createFileRoute } from "@tanstack/react-router";

const robotsTxt = `User-agent: *
Allow: /
Disallow: /thank-you

# Major Search Engines (Explicit Directives)
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: bingbot
Allow: /

User-agent: msnbot
Allow: /

User-agent: BingPreview
Allow: /

User-agent: Microsoft-Bing-Bot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Generative AI, Answer Engines & Copilot (AEO / GEO)
User-agent: Copilot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Social Crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
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
      HEAD: async () => {
        return new Response(null, {
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
