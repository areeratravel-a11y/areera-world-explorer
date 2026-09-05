import { createFileRoute } from "@tanstack/react-router";
import fs from "fs";
import path from "path";

function getLlmsFullContent(): string {
  try {
    const filePath = path.join(process.cwd(), "public", "llms-full.txt");
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch {
    // fallback below
  }

  return `# Areera Travel and Tours — Comprehensive Knowledge Base
> Detailed visa requirements, processing times, and documentation guidelines for 42 international destinations.
> Headquarters: Blue Area, Islamabad, Pakistan.
> WhatsApp: +92 314 5556024 | Email: areeratravel@gmail.com | Website: https://www.areeratravels.com
`;
}

export const Route = createFileRoute("/llms-full.txt")({
  server: {
    handlers: {
      GET: async () => {
        const content = getLlmsFullContent();
        return new Response(content, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
