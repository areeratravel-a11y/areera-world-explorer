import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CountryCard } from "@/components/cards";
import { RelatedServices } from "@/components/RelatedServices";
import { BookingForm } from "@/components/BookingForm";
import { countries, popularVisaDestinations } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { visaArticle, visaFaqs } from "@/data/content";
import { CountryFlag } from "@/components/CountryFlag";
import { BadgeCheck, Clock, FileCheck2, ShieldCheck, Sparkles, Stamp } from "lucide-react";

type VisaSearch = { country?: string | undefined };

export const Route = createFileRoute("/services/visa")({
  validateSearch: (search: Record<string, unknown>): VisaSearch => ({
    country: typeof search["country"] === "string" ? search["country"].slice(0, 60) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Visa Services — Tourist, Business, Student & Work Visas | Areera" },
      {
        name: "description",
        content:
          "Visa filing support for tourist, business, student and work visas: eligibility review, document checklists, form filling and appointment scheduling.",
      },
      { property: "og:title", content: "Visa Services | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Document-first visa assistance for destinations across Asia, the Middle East, Europe and Africa.",
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

      {selected ? (
        <div className="mb-10 flex items-center justify-between gap-4 rounded-3xl border border-primary/50 bg-gradient-to-r from-card via-navy/60 to-primary/10 p-6 shadow-md backdrop-blur-md">
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
            <Sparkles className="h-3.5 w-3.5" /> Direct Support
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
        <div className="rounded-3xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
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

        <div className="rounded-3xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
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
      </div>

      <div className="mt-16">
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
