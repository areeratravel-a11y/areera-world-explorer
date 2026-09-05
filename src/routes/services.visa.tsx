import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CountryCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { RelatedServices } from "@/components/RelatedServices";
import { BookingForm } from "@/components/BookingForm";
import { countries, popularVisaDestinations } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { visaArticle, visaFaqs } from "@/data/content";
import { CountryFlag } from "@/components/CountryFlag";
import { ArrowRight, BadgeCheck, Clock, FileCheck2, Globe2, PhoneCall, ShieldCheck, Stamp } from "lucide-react";
import { contactInfo } from "@/data/site";
import { ServicePageSkeleton } from "@/components/ServicePageSkeleton";

type VisaSearch = { country?: string | undefined };

export const Route = createFileRoute("/services/visa")({
  pendingComponent: ServicePageSkeleton,
  pendingMs: 150,
  validateSearch: (search: Record<string, unknown>): VisaSearch => ({
    country: typeof search["country"] === "string" ? search["country"].slice(0, 60) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Visa Services — Tourist, Business, Student & Work Visas | Areera Travel and Tours" },
      {
        name: "description",
        content:
          "End-to-end visa filing support for tourist, business, student, and work visas: eligibility assessment, document checklist, form filling, and embassy submission.",
      },
      { property: "og:title", content: "Visa Services — Tourist, Business, Student & Work Visas | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Professional visa filing support for 100+ countries: document verification, biometric appointment scheduling, and complete embassy compliance.",
      },
      { property: "og:url", content: "/services/visa" },
    ],
    links: [{ rel: "canonical", href: "/services/visa" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(visaFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Visa Services", item: "/services/visa" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            title: "Visa Services",
            description:
              "End-to-end visa guidance: eligibility review, document checklist, form filling, appointment scheduling and submission support.",
            path: "/services/visa",
          }),
        ),
      },
    ],
  }),
  component: VisaPage,
});

const steps = [
  {
    title: "Free Eligibility Review",
    body: "We assess your passport validity, travel history, and destination-specific requirements.",
  },
  {
    title: "Personalised Checklist",
    body: "Receive a tailored checklist covering mandatory financial, identity, and employment records.",
  },
  {
    title: "Form Filling & Review",
    body: "Our specialists complete all official visa forms with zero margin for spelling or data discrepancies.",
  },
  {
    title: "Appointment & Lodgement",
    body: "Biometric and embassy appointments are secured, and files are lodged in the required sequence.",
  },
  {
    title: "Tracking & Safe Handover",
    body: "Continuous tracking of your file status until the approved visa and passport are safely delivered.",
  },
];

const visaTypes = [
  {
    title: "Tourist / Visit Visa",
    body: "Single and multiple-entry leisure travel, family visits, holidays, and cultural exploration.",
  },
  {
    title: "Commercial & Business Visa",
    body: "Conferences, trade exhibitions, stakeholder meetings, and investment delegations.",
  },
  {
    title: "Student / Study Permit",
    body: "University admissions, language courses, student visa compliance, and financial sponsorship.",
  },
  {
    title: "Work & Employment Entry",
    body: "Employment entry permits, company sponsorship validation, and medical requirement guidance.",
  },
];

function VisaPage() {
  const { country } = Route.useSearch();
  const selected = countries.find((c) => c.slug === country);
  const popular = popularVisaDestinations
    .map((s) => countries.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Visa Services" }]} />
      <SectionHeading
        align="left"
        eyebrow="Visa filing & advisory"
        title="Visa applications, prepared properly"
        description="Embassies decide; we make sure your file gives them nothing to question. Accurate paperwork, verified itineraries, and transparent timelines from start to finish."
      />

      {/* Above-the-fold Immediate Action CTA Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-card/90 via-card/70 to-primary/10 p-5 sm:p-6 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Instant File Evaluation Available
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-foreground/90">
              Get your custom document checklist and embassy approval roadmap in under 15 minutes.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#visa-application-form"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          >
            Start Application Now
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Areera Travel, I need urgent visa assistance and document evaluation.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/25 transition-colors"
          >
            <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
            WhatsApp Specialist
          </a>
        </div>
      </div>

      {selected ? (
        <div className="mb-10 flex items-center justify-between gap-4 rounded-2xl border border-primary/50 bg-gradient-to-r from-card via-navy/60 to-primary/10 p-6 shadow-md backdrop-blur-md">
          <div className="flex items-center gap-4">
            <CountryFlag
              isoCode={selected.isoCode}
              countryName={selected.name}
              fallbackEmoji={selected.flag}
              size="lg"
              className="ring-2 ring-primary/40 shadow-sm"
            />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                Selected Destination
              </span>
              <h2 className="font-display text-xl font-bold text-foreground">
                {selected.name} Visa Application
              </h2>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{selected.region}</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">{selected.processingTime}</span>
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <BadgeCheck className="h-3.5 w-3.5" /> Direct Support
          </span>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="card-elevate h-full rounded-2xl border border-border/80 bg-card/75 p-6 shadow-xs backdrop-blur-md">
              <span className="royal-surface mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground">
                0{i + 1}
              </span>
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-foreground">
              Visa Categories We Handle
            </h2>
            <Stamp className="h-6 w-6 text-primary" />
          </div>
          <div className="mt-6 space-y-3">
            {visaTypes.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border/60 bg-background/50 p-4 transition-colors hover:border-primary/40"
              >
                <p className="font-display text-sm font-bold text-foreground">{v.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-foreground">
              Standard Document Checklist
            </h2>
            <FileCheck2 className="h-6 w-6 text-emerald-400" />
          </div>
          <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/90">
            {[
              "Passport valid for at least 6 months with min. 2 blank pages",
              "Recent high-res passport-size photographs on white background",
              "Completed, verified, and signed visa application forms",
              "Confirmed onward/return flight reservation & hotel booking",
              "Bank statements of last 3-6 months with bank manager seal",
              "Employment letter / NOC / Business registration certificate",
              "International travel medical insurance policy",
              "Invitation or sponsorship documentation (if applicable)",
            ].map((d) => (
              <li
                key={d}
                className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-background/50 p-3"
              >
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading align="left" eyebrow="Destinations" title="Popular Visa Destinations" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/60">
            <Link to="/countries">
              <Globe2 className="mr-2 h-4 w-4 text-primary" /> Browse All 50+ Visa Destinations
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20">
            <Link to="/guides/visa-free-asian-destinations">
              <span>Visa-Free Asian Guide 2026</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div id="visa-application-form" className="mt-16 scroll-mt-24">
        <BookingForm
          title="Start your visa application"
          description="Send us your target country and travel details. Our specialist will prepare your file and verify all checklist items."
          detailLabel="Destination country"
          detailPlaceholder="e.g. United Arab Emirates, Turkey, United Kingdom"
          defaultDetail={selected?.name ?? ""}
          submitLabel="Request Visa Assistance"
        />
      </div>

      <div className="mt-16">
        <ContentArticle {...visaArticle} />
      </div>
      <FaqSection items={visaFaqs} />

      <RelatedServices exclude="visa" />
    </Section>
  );
}
