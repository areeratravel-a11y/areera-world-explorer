import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Clock,
  FileCheck2,
  Landmark,
  PlaneTakeoff,
  Quote,
  ShieldCheck,
  Stamp,
  TicketsPlane,
} from "lucide-react";
import type { Country } from "@/data/countries";
import type { Service } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";

const icons = {
  visa: Stamp,
  ticket: TicketsPlane,
  attestation: FileCheck2,
  hotel: BedDouble,
  flight: PlaneTakeoff,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <Link
      to={service.path as never}
      className="card-elevate group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-6 shadow-sm backdrop-blur-md hover:border-primary/50"
    >
      <div className="flex items-start justify-between">
        <span className="royal-surface glow-ring inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6 text-primary-foreground" aria-hidden />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
          <ShieldCheck className="h-3 w-3 text-primary" /> Verified Service
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground min-h-[3.25rem]">
        {service.short}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Explore Service
        </span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

function formatProcessingHeadline(time: string): string {
  if (!time) return "Fast Track";
  if (time.toLowerCase().includes("hour")) return "24–48 Hours";
  const match = time.match(/(\d+[-–]\d+|\d+)\s*(working days|days)?/i);
  if (match) return `${match[1]} Days`;
  return (time.split("/")[0] || time).trim();
}

export function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      to="/countries/$slug"
      params={{ slug: country.slug }}
      className="card-elevate group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md hover:border-primary/50"
    >
      {/* Flag + Name */}
      <div className="flex items-center gap-3">
        <div className="overflow-hidden rounded-lg">
          <CountryFlag
            isoCode={country.isoCode}
            countryName={country.name}
            size="md"
            className="ring-2 ring-white/15 shadow-sm"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-base font-bold text-foreground transition-colors group-hover:text-primary">
            {country.name}
          </h3>
          <p className="flex items-center gap-1.5 truncate text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
            {country.region}
          </p>
        </div>
      </div>

      {/* Description blurb with consistent min-height */}
      <p className="mt-3.5 line-clamp-2 min-h-[2.6rem] text-xs leading-relaxed text-muted-foreground/90 sm:text-sm">
        {country.blurb}
      </p>

      {/* Standardized 2-Column Metadata Badges */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 truncate rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1">
          <Landmark className="h-3.5 w-3.5 shrink-0 text-primary/80" />
          <span className="truncate">{country.capital}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 truncate rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1">
          <Clock className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="truncate">{formatProcessingHeadline(country.processingTime)}</span>
        </span>
      </div>

      {/* Bottom CTA consistently pinned to card bottom */}
      <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-3.5">
        <span className="text-xs font-semibold text-primary group-hover:underline">
          View Visa Guide & Apply
        </span>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <figure className="card-elevate flex h-full flex-col rounded-2xl border border-border/80 bg-card/75 p-6 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 text-primary" aria-hidden />
        <span className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" /> Verified Client
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        "{quote}"
      </blockquote>
      <figcaption className="mt-5 border-t border-border/50 pt-4">
        <p className="font-display font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </figcaption>
    </figure>
  );
}
