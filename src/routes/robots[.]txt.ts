import { createFileRoute } from "@tanstack/react-router";

const robotsTxt = `# ==============================================================================
# Areera Travel and Tours - Official Robots.txt
# Website: https://www.areeratravels.com
# Unblocking: Google, Bing, ChatGPT, Gemini, Perplexity, Claude & All AI Engines
# ==============================================================================

User-agent: *
Allow: /
Disallow: /thank-you

# --- GOOGLE & GEMINI ---
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-News
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: GoogleOther-Image
Allow: /

User-agent: GoogleOther-Video
Allow: /

# --- BING & MICROSOFT COPILOT ---
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

User-agent: Copilot
Allow: /

# --- CHATGPT & OPENAI ---
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# --- PERPLEXITY AI ---
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-Search
Allow: /

# --- CLAUDE & ANTHROPIC ---
User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# --- OTHER MAJOR SEARCH ENGINES & AI ---
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# --- SITEMAP & LLM PROTOCOL ---
Sitemap: https://www.areeratravels.com/sitemap.xml
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
