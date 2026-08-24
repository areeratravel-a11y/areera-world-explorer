import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  CalendarClock,
  CheckCircle2,
  Clock,
  Coins,
  Compass,
  FileCheck2,
  Globe2,
  Headphones,
  Hotel,
  Landmark,
  MapPin,
  MessageSquare,
  Plane,
  PlaneTakeoff,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stamp,
  Wallet,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CountryCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { CountryFlag } from "@/components/CountryFlag";
import {
  REGION_SLUGS,
  countries,
  countriesByRegion,
  getCountry,
  getRegionBySlug,
  type Country,
} from "@/data/countries";
import { breadcrumbSchema, faqPageSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { countryArticle, countryFaqs, regionArticle } from "@/data/content";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const region = getRegionBySlug(params.slug);
    if (region) return { kind: "region" as const, region };
    const country = getCountry(params.slug);
    if (country) return { kind: "country" as const, country };
    throw notFound();
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination not found | Areera Travel and Tours" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title =
      loaderData.kind === "region"
        ? `${loaderData.region} Visa Destinations — Country Guides & Requirements | Areera`
        : `${loaderData.country.name} Visa Requirements, Fees & Application Guide | Areera`;
    const description =
      loaderData.kind === "region"
        ? `Visa guidelines for all countries in ${loaderData.region}: required documents, e-visa processing timeframes, and flight booking assistance.`
        : `Apply for your ${loaderData.country.name} visa with Areera Travel and Tours. Detailed requirements, documents checklist, processing times, fees, and application support.`;

    const breadcrumbItems =
      loaderData.kind === "region"
        ? [
            { name: "Home", item: "/" },
            { name: "Countries", item: "/countries" },
            { name: loaderData.region, item: `/countries/${params.slug}` },
          ]
        : [
            { name: "Home", item: "/" },
            { name: "Countries", item: "/countries" },
            {
              name: loaderData.country.region,
              item: `/countries/${REGION_SLUGS[loaderData.country.region]}`,
            },
            { name: loaderData.country.name, item: `/countries/${params.slug}` },
          ];

    const faqQuestions = loaderData.kind === "country" ? countryFaqs(loaderData.country) : null;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/countries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/countries/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        },
        ...(faqQuestions
          ? [
              {
                type: "application/ld+json" as const,
                children: JSON.stringify(faqPageSchema(faqQuestions)),
              },
            ]
          : []),
      ],
    };
  },
  component: CountryOrRegion,
});

function CountryOrRegion() {
  const data = Route.useLoaderData();

  if (data.kind === "region") {
    const list = countriesByRegion(data.region);
    return (
      <Section>
        <Breadcrumbs items={[{ label: "Countries", to: "/countries" }, { label: data.region }]} />

        <div className="relative mb-10 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card/90 via-navy/70 to-navy-deep p-6 sm:p-10 shadow-lg backdrop-blur-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Globe2 className="h-3.5 w-3.5" /> Regional Hub
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.region} <span className="chrome-text">Visa Destinations</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore visa guidelines, document requirements, and entry permits for all {list.length}{" "}
            supported destinations across {data.region}.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>
        <div className="mt-16">
          <ContentArticle {...regionArticle(data.region, list.length)} />
        </div>
      </Section>
    );
  }

  const country = data.country;
  const related = country.relatedCountries
    .map((s) => countries.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .slice(0, 4);

  return (
    <>
      {/* Country Hero Header */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-navy-deep/90 via-background to-background">
        <div aria-hidden className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="animate-orbit absolute -right-24 -top-24 h-96 w-96 rounded-full border border-primary/40" />
          <div className="animate-float absolute right-1/4 top-16 text-5xl opacity-30">✈</div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <Breadcrumbs
            items={[
              { label: "Countries", to: "/countries" },
              { label: country.region, to: `/countries/${REGION_SLUGS[country.region]}` },
              { label: country.name },
            ]}
          />

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="relative shrink-0">
                <CountryFlag
                  isoCode={country.isoCode}
                  countryName={country.name}
                  fallbackEmoji={country.flag}
                  size="hero"
                  className="ring-2 ring-primary/40 shadow-lg"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-3 py-0.5 text-xs font-semibold text-primary">
                    <Globe2 className="h-3 w-3" /> {country.region}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                    <Clock className="h-3 w-3" /> {country.processingTime}
                  </span>
                </div>
                <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {country.name} <span className="chrome-text">Visa Guide</span>
                </h1>
                <p className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
                  <span className="inline-flex items-center gap-1">
                    <Landmark className="h-3.5 w-3.5 text-primary" /> Capital:{" "}
                    <strong className="text-foreground">{country.capital}</strong>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Coins className="h-3.5 w-3.5 text-amber-400" /> Currency:{" "}
                    <strong className="text-foreground">{country.currency}</strong>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> Best Season:{" "}
                    <strong className="text-foreground">{country.bestSeason}</strong>
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
              <Button asChild size="lg" className="royal-surface glow-ring shadow-md">
                <Link to="/services/visa" search={{ country: country.slug }}>
                  <Stamp className="mr-2 h-4 w-4" /> Apply {country.name} Visa
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/60">
                <Link to="/flight-reservation" search={{ destination: country.slug }}>
                  <PlaneTakeoff className="mr-2 h-4 w-4 text-primary" /> Flights to{" "}
                  {country.capital}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/60">
                <Link to="/hotel-booking" search={{ destination: country.slug }}>
                  <Hotel className="mr-2 h-4 w-4 text-amber-400" /> Hotels
                </Link>
              </Button>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {country.blurb}
          </p>
        </div>
      </section>

      <Section>
        {/* Key Metrics Bar */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CalendarClock,
              label: "Processing Speed",
              value: country.processingTime,
              desc: "Standard turnaround window",
              color: "text-emerald-400",
            },
            {
              icon: Landmark,
              label: "Capital & Ports",
              value: country.capital,
              desc: `Major Gateway: ${country.capital} Airport`,
              color: "text-primary",
            },
            {
              icon: Coins,
              label: "Local Currency",
              value: country.currency,
              desc: "Forex available upon request",
              color: "text-amber-400",
            },
            {
              icon: Wallet,
              label: "Embassy Fees",
              value: "Transparent",
              desc: "Direct embassy tariff quotes",
              color: "text-primary",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="card-elevate relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 shadow-xs backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <s.icon className={`h-6 w-6 ${s.color}`} aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Official Metric
                </span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-foreground">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Structured Visa Categories Section */}
        <div className="mt-16">
          <SectionHeading
            align="left"
            eyebrow="Available Options"
            title={`${country.name} Visa Categories`}
            description={`Choose the most suitable visa category based on your travel purpose, stay duration, and entry frequency.`}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {country.visaCategories.map((vc, idx) => (
              <div
                key={vc.name}
                className="card-elevate relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/75 p-5 shadow-sm backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold ${
                        vc.typeBadge === "e-Visa" || vc.typeBadge === "Fast Track"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-primary/15 text-primary border border-primary/30"
                      }`}
                    >
                      <Sparkles className="h-3 w-3" /> {vc.typeBadge}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {vc.entryType}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {vc.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    <p className="flex items-center justify-between">
                      <span>Max Stay:</span>
                      <strong className="text-foreground">{vc.duration}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span>Validity:</span>
                      <strong className="text-foreground">{vc.validity}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span>Processing:</span>
                      <strong className="text-emerald-400">{vc.processingTime}</strong>
                    </p>
                  </div>

                  <p className="mt-3 rounded-lg border border-border/50 bg-muted/20 p-2 text-xs leading-relaxed text-muted-foreground">
                    {vc.bestFor}
                  </p>
                </div>

                <div className="mt-5 border-t border-border/50 pt-3">
                  <Button asChild size="sm" className="w-full text-xs font-semibold">
                    <Link to="/services/visa" search={{ country: country.slug }}>
                      Apply For This Visa
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents Checklist & Step Process */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Documents */}
          <Reveal>
            <div className="h-full rounded-3xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Checklist
                  </span>
                  <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                    Required Documents for {country.name}
                  </h2>
                </div>
                <FileCheck2 className="h-7 w-7 text-primary" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                All documents must be clear, authentic, and compliant with embassy guidelines.
              </p>

              <ul className="mt-6 space-y-3">
                {country.documents.map((doc, idx) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-3 text-xs sm:text-sm text-foreground/90 transition-colors hover:border-primary/40"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-300">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Embassy rules and consular requirements may update periodically. Our dedicated
                  consultant double-checks your documents against active mission rules before
                  submission.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 4-Step Process */}
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    How It Works
                  </span>
                  <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                    Application Process
                  </h2>
                </div>
                <BadgeCheck className="h-7 w-7 text-emerald-400" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Our 4-step streamlined workflow ensures zero paperwork mistakes.
              </p>

              <div className="mt-6 space-y-4">
                {country.stepProcess.map((step) => (
                  <div
                    key={step.step}
                    className="flex gap-4 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:border-primary/40"
                  >
                    <span className="royal-surface inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-primary-foreground">
                      0{step.step}
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Popular Cities & Attractions */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8 shadow-sm backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Explore Destinations
              </span>
              <h2 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                Major Cities & Highlights in {country.name}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Top urban hubs, cultural heritage points, and traveler favorites.
              </p>
            </div>
            <Compass className="h-8 w-8 text-primary shrink-0 hidden sm:block" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {country.popularCities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" /> {city}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {country.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/40 p-3 text-xs font-medium text-muted-foreground"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Country Consultation & Inquiry Box */}
        <div className="mt-16 relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-navy-deep p-6 sm:p-10 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Headphones className="h-3.5 w-3.5" /> Dedicated {country.name} Visa Desk
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Ready to begin your <span className="chrome-text">{country.name} application?</span>
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Speak directly with an Areera visa consultant. We verify your passport eligibility,
                calculate official embassy tariffs, and manage your entire filing from paperwork to
                departure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild size="lg" className="royal-surface glow-ring shadow-md">
                <Link to="/services/visa" search={{ country: country.slug }}>
                  <Stamp className="mr-2 h-4 w-4" /> Start Filing Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/80 bg-background/80"
              >
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}?text=Hello%20Areera%2C%20I%20would%20like%20to%20inquire%20about%20a%20visa%20for%20${encodeURIComponent(country.name)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-emerald-400" /> WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Travel Services Bundle Links */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-card/60 p-6 sm:p-8 shadow-sm backdrop-blur-md">
          <h2 className="font-display text-xl font-bold text-foreground">
            Complete Travel Services for {country.name}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Combine your visa filing with confirmed flight tickets, verified hotel reservations, and
            document attestations.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/services/visa"
              search={{ country: country.slug }}
              className="card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50"
            >
              <Stamp className="h-5 w-5 text-primary" />
              <span className="mt-2 font-display text-sm font-bold text-foreground">
                {country.name} Visa Filing
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                End-to-end documentation & submission
              </span>
            </Link>

            <Link
              to="/services/ticket"
              className="card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50"
            >
              <Plane className="h-5 w-5 text-primary" />
              <span className="mt-2 font-display text-sm font-bold text-foreground">
                Flights to {country.capital}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                Best airfares on leading carriers
              </span>
            </Link>

            <Link
              to="/hotel-booking"
              search={{ destination: country.slug }}
              className="card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50"
            >
              <Hotel className="h-5 w-5 text-amber-400" />
              <span className="mt-2 font-display text-sm font-bold text-foreground">
                Hotels in {country.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                Embassy-verifiable hotel vouchers
              </span>
            </Link>

            <Link
              to="/services/attestation"
              className="card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50"
            >
              <Building2 className="h-5 w-5 text-emerald-400" />
              <span className="mt-2 font-display text-sm font-bold text-foreground">
                Document Attestation
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                MOFA, Embassy & Chamber legalization
              </span>
            </Link>
          </div>
        </div>

        {/* Content Article & Country Specific FAQs */}
        <div className="mt-16">
          <ContentArticle {...countryArticle(country)} />
        </div>
        <FaqSection
          items={countryFaqs(country)}
          title={`${country.name} Visa FAQs`}
          description={`Common questions regarding ${country.name} visa processing times, financial proof, and submission criteria.`}
        />

        {/* Related Regional Countries */}
        <div className="mt-16">
          <SectionHeading
            align="left"
            eyebrow="Related Destinations"
            title={`Other ${country.region} Visa Guides`}
            description={`Explore visa requirements for neighboring countries across ${country.region}.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c) => (
              <CountryCard key={c.slug} country={c} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
