import { createFileRoute } from "@tanstack/react-router";
import fs from "fs";
import path from "path";

function getLlmsContent(): string {
  try {
    const filePath = path.join(process.cwd(), "public", "llms.txt");
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch {
    // fallback below
  }

  return `# Areera Travel and Tours
> Premier visa consultancy, air ticketing, verifiable embassy flight reservations, confirmed hotel vouchers, and official document attestation services headquartered in Blue Area, Islamabad, Pakistan.
> Managed by Founder & Managing Director Arslan Ahmed and Co-Founder & Director Hareera.

- Phone / WhatsApp: +92 314 5556024
- Email: areeratravel@gmail.com
- Website: https://www.areeratravels.com
- Full Documentation: https://www.areeratravels.com/llms-full.txt
`;
}

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const content = getLlmsContent();
        return new Response(content, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
      HEAD: async () => {
        return new Response(null, {
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
