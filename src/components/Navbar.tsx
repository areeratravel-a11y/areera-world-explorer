import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Building2,
  ChevronDown,
  ChevronRight,
  Clock,
  FileCheck2,
  Globe2,
  Home,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  PlaneTakeoff,
  Search,
  ShieldCheck,
  Stamp,
  TicketsPlane,
  X,
} from "lucide-react";
import {
  REGIONS,
  REGION_SLUGS,
  countries,
  popularDestinations,
  type Region,
} from "@/data/countries";
import { services, contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";
import { CountryFlag } from "@/components/CountryFlag";
import { Logo } from "@/components/Logo";

const serviceIcons = {
  visa: Stamp,
  ticket: TicketsPlane,
  attestation: FileCheck2,
  hotel: BedDouble,
  flight: PlaneTakeoff,
};

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<"services" | "destinations" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<"services" | "destinations" | null>(null);
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<Region>("Asia");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    setQuery("");
  }, [pathname]);

  // Scroll listener for sticky header styling and top header hide/show
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return countries.filter((c) => c.region === selectedRegion);
    }
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q),
    );
  }, [query, selectedRegion]);

  return (
    <>
      {/* ========================================================================= */}
      {/* TOP HEADER BAR — solid color, vanishes on scroll                          */}
      {/* ========================================================================= */}
      <div
        className={cn(
          "hidden md:block w-full bg-slate-950 text-xs text-slate-300 transition-all duration-300 overflow-hidden z-50",
          isScrolled
            ? "max-h-0 opacity-0 py-0 pointer-events-none"
            : "max-h-12 opacity-100 py-2 border-b border-white/10",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 flex-nowrap whitespace-nowrap gap-4 text-[11px] sm:text-xs">
          {/* Left Info */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium whitespace-nowrap">
              <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>{contactInfo.address}</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </span>
          </div>

          {/* Right Info */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap">
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>{contactInfo.email}</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-slate-200 font-semibold hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5 text-blue-400 shrink-0" />
              <span>{contactInfo.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20services.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors whitespace-nowrap bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <MessageSquare className="h-3 w-3 shrink-0" />
              <span className="hidden sm:inline">WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STICKY FLOATING NAVBAR                                                     */}
      {/* ========================================================================= */}
      <header
        ref={dropdownRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "border-b border-white/20 bg-slate-800/60 shadow-xl shadow-black/25 backdrop-blur-2xl backdrop-saturate-180"
            : "border-b border-white/15 bg-slate-800/25 backdrop-blur-xl backdrop-saturate-150",
        )}
      >
      {/* Main Navbar Row */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 flex-nowrap whitespace-nowrap w-full">
        {/* Left: Brand Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 whitespace-nowrap transition-opacity hover:opacity-95"
        >
          <Logo size="md" />
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:gap-1.5 lg:flex shrink-0 whitespace-nowrap">
          <Link
            to="/"
            className={cn(
              "rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap",
              pathname === "/"
                ? "bg-white/20 text-white border border-white/30 shadow-xs"
                : "text-slate-100 hover:text-white hover:bg-white/12",
            )}
          >
            Home
          </Link>

          {/* Services Dropdown Button */}
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap",
              openDropdown === "services" || pathname.startsWith("/services")
                ? "bg-white/20 text-white border border-white/30 shadow-xs"
                : "text-slate-100 hover:text-white hover:bg-white/12",
            )}
            aria-expanded={openDropdown === "services"}
          >
            <span>Services</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                openDropdown === "services" && "rotate-180 text-blue-300",
              )}
            />
          </button>

          {/* Destinations Dropdown Button */}
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "destinations" ? null : "destinations")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap",
              openDropdown === "destinations" || pathname.startsWith("/countries")
                ? "bg-white/20 text-white border border-white/30 shadow-xs"
                : "text-slate-100 hover:text-white hover:bg-white/12",
            )}
            aria-expanded={openDropdown === "destinations"}
          >
            <span>Destinations</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                openDropdown === "destinations" && "rotate-180 text-blue-300",
              )}
            />
          </button>

          <Link
            to="/about"
            className={cn(
              "rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap",
              pathname === "/about"
                ? "bg-white/20 text-white border border-white/30 shadow-xs"
                : "text-slate-100 hover:text-white hover:bg-white/12",
            )}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={cn(
              "rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap",
              pathname === "/contact"
                ? "text-blue-400 font-semibold"
                : "text-slate-100 hover:text-white hover:bg-white/12",
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
          {/* WhatsApp — appears on scroll for all screens */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20assistance.`}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap shadow-xs backdrop-blur-md",
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none hidden md:flex"
            )}
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Apply for Visa — desktop only */}
          <Link
            to="/services/visa"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 border border-white/25 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/40 shrink-0 whitespace-nowrap"
          >
            <span>Apply For Visa</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((v) => !v);
              setOpenDropdown(null);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white lg:hidden hover:bg-white/20 shrink-0 backdrop-blur-md"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FROSTED SERVICES DROPDOWN PANEL                                           */}
      {/* ========================================================================= */}
      {openDropdown === "services" && (
        <div className="absolute inset-x-0 top-full border-b border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-3xl animate-fade-up">
          <div className="mx-auto max-w-7xl px-6 py-7">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Core Travel & Visa Solutions
              </span>
              <Link
                to="/services"
                className="text-xs font-semibold text-blue-300 hover:text-white hover:underline"
              >
                All Services Overview →
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon] || Stamp;
                return (
                  <Link
                    key={service.slug}
                    to={service.path as never}
                    className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/30 hover:bg-white/12 backdrop-blur-md"
                  >
                    <div>
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-300/80 leading-relaxed line-clamp-2">
                        {service.short}
                      </p>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-300 group-hover:translate-x-0.5 transition-transform">
                      Learn More <ChevronRight className="h-3 w-3" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md">
              <span className="flex items-center gap-2 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                100% Embassy-Compliant Documentation & Verified Travel Vouchers
              </span>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="font-semibold text-white hover:underline"
              >
                Direct Desk: {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FROSTED DESTINATIONS DROPDOWN PANEL                                       */}
      {/* ========================================================================= */}
      {openDropdown === "destinations" && (
        <div className="absolute inset-x-0 top-full border-b border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-3xl animate-fade-up">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="relative w-full sm:w-80">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-300" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter countries by name..."
                  aria-label="Filter countries"
                  maxLength={50}
                  className="h-9 w-full rounded-xl border border-white/20 bg-white/10 pl-9 pr-3 text-xs text-white placeholder:text-slate-400 outline-none transition-colors focus:border-white/40 backdrop-blur-md"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300">Popular:</span>
                {popularDestinations.slice(0, 5).map((slug) => {
                  const country = countries.find((c) => c.slug === slug);
                  if (!country) return null;
                  return (
                    <Link
                      key={country.slug}
                      to="/countries/$slug"
                      params={{ slug: country.slug }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2 py-1 text-xs text-slate-100 hover:border-white/40 hover:bg-white/20 transition-colors backdrop-blur-md"
                    >
                      <CountryFlag isoCode={country.isoCode} countryName={country.name} size="xs" />
                      <span>{country.name}</span>
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/countries"
                className="text-xs font-semibold text-blue-300 hover:text-white hover:underline"
              >
                View All 44+ Countries →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              <div className="space-y-1 border-r border-white/10 pr-4">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Regions
                </span>
                {REGIONS.map((r) => {
                  const count = countries.filter((c) => c.region === r).length;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => {
                        setSelectedRegion(r);
                        setQuery("");
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                        selectedRegion === r && !query
                          ? "bg-white/20 text-white border border-white/30 shadow-xs"
                          : "text-slate-200 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <span>{r}</span>
                      <span className="rounded-md bg-white/15 px-1.5 py-0.2 text-[10px] text-slate-200 font-bold">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[220px]">
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    {query
                      ? `Search Results (${filteredCountries.length})`
                      : `${selectedRegion} Destinations (${filteredCountries.length})`}
                  </span>
                  <Link
                    to="/countries/$slug"
                    params={{ slug: REGION_SLUGS[selectedRegion] }}
                    className="text-xs text-slate-300 hover:text-blue-300"
                  >
                    Open {selectedRegion} Hub →
                  </Link>
                </div>

                {filteredCountries.length === 0 ? (
                  <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-slate-400 bg-white/5">
                    No destinations match your search.
                  </div>
                ) : (
                  <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-2 sm:grid-cols-3 lg:grid-cols-4">
                    {filteredCountries.map((c) => (
                      <Link
                        key={c.slug}
                        to="/countries/$slug"
                        params={{ slug: c.slug }}
                        className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2 text-xs transition-colors hover:border-white/30 hover:bg-white/15 backdrop-blur-md"
                      >
                        <CountryFlag
                          isoCode={c.isoCode}
                          countryName={c.name}
                          fallbackEmoji={c.flag}
                          size="xs"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-white group-hover:text-blue-300">
                            {c.name}
                          </p>
                          <p className="truncate text-[10px] text-slate-300/80">{c.capital}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      </header>

      {/* ========================================================================= */}
      {/* PRO SIDEBAR MENU — slides from RIGHT                                      */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sidebar — right side */}
          <div className="absolute inset-y-0 right-0 w-[280px] bg-slate-900/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl shadow-black/50 animate-slide-left flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                  AT
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-tight">Areera Travel</h2>
                  <p className="text-[10px] font-medium text-slate-400">World Explorer</p>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto px-4 py-4">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="h-10 w-full rounded-lg border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:bg-white/10 focus:border-white/20 transition-all"
                />
              </div>

              {/* Nav Links */}
              <nav className="space-y-0.5 flex-1">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === "/"
                      ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Home className={cn("h-[18px] w-[18px]", pathname === "/" ? "text-indigo-400" : "text-slate-500")} />
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname.startsWith("/services") || mobileDropdown === "services"
                        ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <LayoutGrid className={cn("h-[18px] w-[18px]", pathname.startsWith("/services") || mobileDropdown === "services" ? "text-indigo-400" : "text-slate-500")} />
                      Services
                    </div>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdown === "services" && "rotate-180")} />
                  </button>
                  {mobileDropdown === "services" && (
                    <div className="mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-white/10">
                      {services.map((s) => (
                        <Link key={s.slug} to={s.path as never} onClick={() => setMobileOpen(false)} className="block py-1.5 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors">
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === "destinations" ? null : "destinations")}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      pathname.startsWith("/countries") || mobileDropdown === "destinations"
                        ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Globe2 className={cn("h-[18px] w-[18px]", pathname.startsWith("/countries") || mobileDropdown === "destinations" ? "text-indigo-400" : "text-slate-500")} />
                      Destinations
                    </div>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdown === "destinations" && "rotate-180")} />
                  </button>
                  {mobileDropdown === "destinations" && (
                    <div className="mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-white/10 max-h-[28vh] overflow-y-auto">
                      {REGIONS.map((r) => (
                        <Link key={r} to="/countries/$slug" params={{ slug: REGION_SLUGS[r] }} onClick={() => setMobileOpen(false)} className="block py-1.5 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors">
                          {r}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === "/about"
                      ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Building2 className={cn("h-[18px] w-[18px]", pathname === "/about" ? "text-indigo-400" : "text-slate-500")} />
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === "/contact"
                      ? "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Phone className={cn("h-[18px] w-[18px]", pathname === "/contact" ? "text-indigo-400" : "text-slate-500")} />
                  Contact
                </Link>
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-3 border-t border-white/10 space-y-1">
                <Link
                  to="/services/visa"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <FileCheck2 className="h-[18px] w-[18px] text-emerald-400" />
                  Apply for Visa
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
