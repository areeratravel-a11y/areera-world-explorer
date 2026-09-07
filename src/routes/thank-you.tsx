import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  FileCheck,
  PlaneTakeoff,
  BedDouble,
  ShieldCheck,
  ArrowRight,
  Home,
  MapPin,
  Calendar,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/site";
import { breadcrumbSchema } from "@/lib/json-ld";
import { popularDestinations, countries } from "@/data/countries";
import { WhatsAppIcon } from "@/components/FloatingWhatsApp";

type ThankYouSearch = {
  service?: string | undefined;
  name?: string | undefined;
  ref?: string | undefined;
};

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>): ThankYouSearch => ({
    service: typeof search["service"] === "string" ? search["service"].slice(0, 80) : undefined,
    name: typeof search["name"] === "string" ? search["name"].slice(0, 80) : undefined,
    ref: typeof search["ref"] === "string" ? search["ref"].slice(0, 40) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Thank You — Your Inquiry Has Been Received | Areera Travel and Tours" },
      {
        name: "description",
        content:
          "Thank you for contacting Areera Travel and Tours. Our senior travel specialists are reviewing your request and will contact you shortly.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Inquiry Received | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Thank you for reaching out to Areera Travel and Tours. A travel specialist will connect with you via WhatsApp or phone shortly.",
      },
      { property: "og:url", content: "https://www.areeratravels.com/thank-you" },
    ],
    links: [{ rel: "canonical", href: "https://www.areeratravels.com/thank-you" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Inquiry Received", item: "/thank-you" },
          ]),
        ),
      },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { service, name, ref } = Route.useSearch();
  const cleanPhone = contactInfo.phone.replace(/\s/g, "");
  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");

  const referenceCode = ref || "ARR-ONLINE";
  const displayService = service || "Visa & Travel Consultation";

  return (
    <Section className="relative overflow-hidden py-10 sm:py-16">
      <Breadcrumbs items={[{ label: "Inquiry Received" }]} />

      {/* Decorative ambient background glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* Confirmation Hero Card */}
      <div className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-12 shadow-lg text-center">
        {/* Animated Success Badge */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6 animate-in zoom-in-75 duration-300">
          <div className="rounded-full bg-emerald-600 p-2.5 text-white shadow-lg shadow-emerald-600/30">
            <CheckCircle2 className="h-8 w-8 stroke-[2.5]" />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
          <span>Inquiry Logged & Prioritized</span>
        </div>

        <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          {name ? `Thank You, ${name}!` : "Thank You! Your Inquiry Is Received"}
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          We have registered your inquiry for{" "}
          <strong className="text-foreground font-semibold">{displayService}</strong>. A certified
          travel consultant is reviewing current embassy guidelines and flight availability for you.
        </p>

        {/* Reference ID Pill */}
        <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-slate-50 px-4 py-2 text-xs text-muted-foreground">
          <span>Inquiry Reference:</span>
          <span className="font-mono font-bold text-primary tracking-wider">{referenceCode}</span>
        </div>

        {/* Quick Action Button Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
              `Hello Areera Travel, I just submitted an inquiry on your website (Ref: ${referenceCode}) for ${displayService}. Could you please update me?`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] hover:bg-[#20bd5a]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Open WhatsApp Directly</span>
          </a>

          <a
            href={`tel:${cleanPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>Call Specialist: {contactInfo.phone}</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-4 text-xs text-muted-foreground">
          ⚡ Typical response time is under 15 minutes during business hours (Mon–Sat: 9:00 AM –
          7:00 PM PKT).
        </p>
      </div>

      {/* 3-Step Process: "What Happens Next?" */}
      <div className="mx-auto mt-16 max-w-4xl">
        <SectionHeading
          eyebrow="Clear Process"
          title="What happens next?"
          description="Here is our standard 3-step workflow to get your visa, flights, and stay finalized without delays."
          align="center"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  01
                </span>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Specialist File Review</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A senior consultant inspects your route, destination visa regulations, and current
                embassy appointment slots.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50 text-xs font-semibold text-emerald-700">
                Within 15 minutes
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  02
                </span>
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Itinerary & Checklist</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We share an exact embassy document checklist, transparent fee schedule, and flight
                itinerary options via WhatsApp.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50 text-xs font-semibold text-primary">
                Direct WhatsApp consultation
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  03
                </span>
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Issuance & Embassy Filing</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Upon your approval, we issue verifiable airline PNRs, confirmed hotel vouchers, and
                finalize your embassy application dossier.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50 text-xs font-semibold text-foreground">
                100% Embassy-verifiable
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* While You Wait: Recommended Services and Top Destinations */}
      <div className="mx-auto mt-16 max-w-4xl">
        <SectionHeading
          eyebrow="Explore More"
          title="While you wait, explore our destinations & services"
          description="Prepare for your journey with our comprehensive country guides and visa requirements."
          align="left"
        />

        {/* Quick Links Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/services/visa"
            className="card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              <FileCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Visa Consultation</p>
              <p className="text-[11px] text-muted-foreground truncate">Checklist & requirements</p>
            </div>
          </Link>

          <Link
            to="/flight-reservation"
            className="card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              <PlaneTakeoff className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Flight Reservations</p>
              <p className="text-[11px] text-muted-foreground truncate">Verifiable airline PNR</p>
            </div>
          </Link>

          <Link
            to="/hotel-booking"
            className="card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              <BedDouble className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Hotel Bookings</p>
              <p className="text-[11px] text-muted-foreground truncate">Embassy-accepted stays</p>
            </div>
          </Link>

          <Link
            to="/services/attestation"
            className="card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">Document Attestation</p>
              <p className="text-[11px] text-muted-foreground truncate">MOFA & Embassy stamp</p>
            </div>
          </Link>
        </div>

        {/* Popular Destination Chips */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-xs">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Popular Country Visa Guides
          </p>
          <div className="flex flex-wrap gap-2">
            {popularDestinations.map((slug) => {
              const country = countries.find((c) => c.slug === slug);
              if (!country) return null;
              return (
                <Link
                  key={country.slug}
                  to="/countries/$slug"
                  params={{ slug: country.slug }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Office details & back to home */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>{contactInfo.address}</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
