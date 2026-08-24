import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Globe2, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { CountryCard } from "@/components/cards";
import { REGIONS, countries, type Region } from "@/data/countries";
import { cn } from "@/lib/utils";
import { breadcrumbSchema, faqPageSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { countriesHubArticle, countriesHubFaqs } from "@/data/content";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "Visa Destinations & Requirements by Country | Areera Travel & Tours" },
      {
        name: "description",
        content:
          "Explore visa requirements, processing times, fees, and required documents for 40+ countries across Asia, the Middle East, North Africa, Africa and Western destinations.",
      },
      { property: "og:title", content: "Global Visa Destinations | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Detailed country guides with visa types, required documents and expert filing support.",
      },
      { property: "og:url", content: "/countries" },
    ],
    links: [{ rel: "canonical", href: "/countries" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(countriesHubFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Countries", item: "/countries" },
          ]),
        ),
      },
    ],
  }),
  component: CountriesHub,
});

function CountriesHub() {
  const [region, setRegion] = useState<Region | "All">("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countries.filter(
      (c) =>
        (region === "All" || c.region === region) &&
        (!q ||
          c.name.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          c.popularCities.some((city) => city.toLowerCase().includes(q))),
    );
  }, [region, query]);

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: countries.length };
    for (const r of REGIONS) {
      counts[r] = countries.filter((c) => c.region === r).length;
    }
    return counts;
  }, []);

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Countries" }]} />

      <div className="relative mb-8 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card/90 via-navy/70 to-navy-deep p-6 sm:p-10 shadow-lg backdrop-blur-xl">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Globe2 className="h-3.5 w-3.5" /> Worldwide Visa Hub
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Visa Destinations <span className="chrome-text">We Cover</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Select a destination to review official embassy requirements, e-visa processing
            timeframes, required financial paperwork, and direct filing assistance from Areera
            Travel and Tours.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground/90">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Embassy Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground/90">
              <ShieldCheck className="h-4 w-4 text-primary" /> Verified Document Checklists
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-amber-400" /> Fast-Track E-Visa Support
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength={60}
            placeholder="Search by country or city, e.g. Turkey, Dubai, London, Cairo..."
            aria-label="Search countries"
            className="h-12 w-full rounded-2xl border border-input bg-card/80 pl-10 pr-10 text-sm outline-none transition-colors focus:border-primary shadow-xs"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {/* Region Pills */}
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["All", ...REGIONS] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200",
                region === r
                  ? "royal-surface border-transparent text-primary-foreground shadow-sm scale-[1.02]"
                  : "border-border/80 bg-card/50 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground",
              )}
            >
              <span>{r}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px]",
                  region === r ? "bg-white/20 text-white" : "bg-muted text-muted-foreground",
                )}
              >
                {regionCounts[r] ?? 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Showing <span className="text-foreground">{list.length}</span> destination
          {list.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CountryCard key={c.slug} country={c} />
        ))}
      </div>

      {list.length === 0 ? (
        <div className="rounded-2xl border border-border/80 bg-card/60 p-8 text-center">
          <p className="text-base font-semibold text-foreground">
            No destinations match your search "{query}"
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try searching for another country name, major city, or clear the region filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setRegion("All");
            }}
            className="mt-4 inline-flex items-center rounded-xl bg-primary/20 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/30"
          >
            Reset Filters
          </button>
        </div>
      ) : null}

      <div className="mt-16">
        <ContentArticle {...countriesHubArticle} />
      </div>
      <FaqSection items={countriesHubFaqs} />
    </Section>
  );
}
