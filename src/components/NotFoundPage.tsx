import { useState, useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Compass,
  Plane,
  Globe2,
  Home,
  Search,
  ArrowRight,
  Stamp,
  TicketsPlane,
  BedDouble,
  FileCheck2,
  Phone,
  HelpCircle,
} from "lucide-react";
import { countries, popularDestinations, getCountry } from "@/data/countries";
import { contactInfo } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter countries based on search
  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return countries
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  // Featured destinations to help users quickly re-orient
  const featuredCountries = useMemo(() => {
    return popularDestinations
      .slice(0, 5)
      .map((slug) => getCountry(slug))
      .filter((c): c is NonNullable<typeof c> => Boolean(c));
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firstMatch = searchResults[0];
    if (firstMatch) {
      navigate({ to: "/countries/$slug", params: { slug: firstMatch.slug } });
    } else if (query.trim()) {
      navigate({ to: "/countries" });
    }
  };

  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-background via-card/50 to-background px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] sm:h-[650px] sm:w-[650px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* Decorative radar flight path rings */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[400px] rounded-full border border-dashed border-blue-200 animate-spin [animation-duration:90s]" />
        <div className="absolute h-[650px] w-[650px] rounded-full border border-blue-100" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <Compass className="h-3.5 w-3.5 text-primary" />
          <span>Flight Path Not Found • Error 404</span>
        </div>

        {/* Hero 404 Title */}
        <div className="relative mt-6 select-none">
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-400 bg-clip-text text-transparent">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Plane className="h-10 w-10 text-primary/80 transform -rotate-45 animate-pulse" />
          </div>
        </div>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Uncharted Territory: This Destination Doesn’t Exist
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          The page or travel route you are looking for has been moved, rescheduled, or never existed on our flight map. Let's get your journey back on schedule.
        </p>

        {/* Quick Search Bar */}
        <div className="mx-auto mt-8 max-w-lg">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a country, city, or service (e.g., Dubai, UK, Visa)..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-10 pr-24 text-sm text-foreground placeholder:text-muted-foreground shadow-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 rounded-xl px-3.5 text-xs font-semibold"
              >
                Search
              </Button>
            </div>

            {/* Instant Search Suggestions Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl text-left divide-y divide-slate-100">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Matching Destinations
                </div>
                <div className="py-1">
                  {searchResults.map((c) => (
                    <Link
                      key={c.slug}
                      to="/countries/$slug"
                      params={{ slug: c.slug }}
                      className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <CountryFlag isoCode={c.isoCode} countryName={c.name} size="sm" />
                        <div>
                          <span className="font-medium text-foreground">{c.name}</span>
                          <span className="ml-2 text-xs text-muted-foreground">({c.capital})</span>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link to="/">
            <Button size="lg" className="rounded-xl gap-2 font-semibold shadow-sm">
              <Home className="h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
          <Link to="/countries">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl gap-2 font-semibold border-slate-200 bg-white hover:bg-slate-50 text-foreground shadow-xs"
            >
              <Globe2 className="h-4 w-4 text-primary" />
              Browse All 100+ Countries
            </Button>
          </Link>
          <a
            href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent("Hello Areera Travel, I couldn't find the page I was looking for and need assistance.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl gap-2 font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-xs"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              WhatsApp Helpdesk
            </Button>
          </a>
        </div>

        {/* Popular Destination Quick Chips */}
        {featuredCountries.length > 0 && (
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              <span>Or jump to popular destinations</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {featuredCountries.map((c) => (
                <Link
                  key={c.slug}
                  to="/countries/$slug"
                  params={{ slug: c.slug }}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <CountryFlag isoCode={c.isoCode} countryName={c.name} size="xs" />
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Quick Service Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <Link
            to="/services/visa"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <Stamp className="h-4 w-4" />
            </div>
            <div className="mt-3 font-semibold text-sm text-foreground">Visa Guidance</div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">Visas for 100+ countries</p>
          </Link>

          <Link
            to="/flight-reservation"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <TicketsPlane className="h-4 w-4" />
            </div>
            <div className="mt-3 font-semibold text-sm text-foreground">Flight Itineraries</div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">Verifiable embassy reservations</p>
          </Link>

          <Link
            to="/hotel-booking"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <BedDouble className="h-4 w-4" />
            </div>
            <div className="mt-3 font-semibold text-sm text-foreground">Hotel Booking</div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">Confirmed stays worldwide</p>
          </Link>

          <Link
            to="/services/attestation"
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <FileCheck2 className="h-4 w-4" />
            </div>
            <div className="mt-3 font-semibold text-sm text-foreground">Attestation</div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">MOFA & Embassy legalization</p>
          </Link>
        </div>

        {/* Footer info tip */}
        <div className="mt-10 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <HelpCircle className="h-3.5 w-3.5 text-primary" />
          <span>If you entered a web address manually, please verify your spelling or reach out to our team.</span>
        </div>
      </div>
    </div>
  );
}
