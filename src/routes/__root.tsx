import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { organizationSchema, websiteSchema } from "@/lib/json-ld";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { AiTravelAdvisor } from "@/components/AiTravelAdvisor";
import { Toaster } from "@/components/ui/sonner";
import { NotFoundPage } from "@/components/NotFoundPage";
import { GlobalLoadingBar } from "@/components/GlobalLoadingBar";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { SpeedInsights } from "@vercel/speed-insights/react";

function NotFoundComponent() {
  return <NotFoundPage />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong while rendering this page.
        </p>

        {error ? (
          <div className="mt-4 text-left overflow-x-auto rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs font-mono text-destructive">
            <p className="font-bold">
              {error.name}: {error.message}
            </p>
            {error.stack ? (
              <pre className="mt-2 whitespace-pre-wrap text-[11px] text-muted-foreground opacity-80 max-h-48 overflow-y-auto">
                {error.stack}
              </pre>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Areera Travel and Tours — World Explorer & Visa Assistance" },
      {
        name: "description",
        content:
          "Areera Travel and Tours provides certified visa assistance, verifiable flight reservations, hotel bookings, and official document attestation worldwide.",
      },
      { property: "og:site_name", content: "Areera Travel and Tours" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.areeratravels.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Areera Travel and Tours — World Explorer & Visa Assistance",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.areeratravels.com/og-image.jpg" },
      { name: "theme-color", content: "#090d16" },
      { name: "geo.region", content: "PK-IS" },
      { name: "geo.placename", content: "Islamabad, Pakistan" },
      { name: "geo.position", content: "33.7167;73.0667" },
      { name: "ICBM", content: "33.7167, 73.0667" },
      { name: "author", content: "Arslan Ahmed & Hareera — Areera Travel and Tours" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://www.clarity.ms" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "alternate",
        type: "text/markdown",
        title: "LLM Context (llms.txt)",
        href: "/llms.txt",
      },
    ],
    scripts: [
      {
        children: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ye2eq18xvb");`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsTracker />
      <SpeedInsights />
      <GlobalLoadingBar />
      <Navbar />
      <main className="min-h-[60vh] pb-24 md:pb-0">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
      <AiTravelAdvisor />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
