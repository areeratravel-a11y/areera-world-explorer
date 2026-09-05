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
  const [searchFocused, setSearchFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Determine active state for all options (reflects actual current page route)
  const isHomeActive = pathname === "/";
  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/flight-reservation") ||
    pathname.startsWith("/hotel-booking");
  const isDestinationsActive = pathname.startsWith("/countries");
  const isAboutActive = pathname === "/about";
  const isContactActive = pathname === "/contact";

  const isServicesOpen = openDropdown === "services";
  const isDestinationsOpen = openDropdown === "destinations";

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    setSearchFocused(false);
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
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
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

  const globalSearchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return countries;
    }
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.isoCode.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      {/* ========================================================================= */}
      {/* FIXED FLOATING NAVBAR CONTAINER — Stays locked to viewport & floats with screen */}
      {/* ========================================================================= */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        {/* TOP HEADER BAR — vanishes smoothly on scroll */}
        <div
          className={cn(
            "hidden md:block w-full bg-slate-950/85 text-xs text-white/80 transition-all duration-300 overflow-hidden pointer-events-auto backdrop-blur-md",
            isScrolled
              ? "max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none"
              : "max-h-11 opacity-100 py-1.5 border-b border-blue-500/20 shadow-sm",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 flex-nowrap whitespace-nowrap gap-4 text-[11px] sm:text-xs">
            {/* Left Info */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap">
              <span className="flex items-center gap-1.5 text-white/90 font-medium whitespace-nowrap">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>{contactInfo.address}</span>
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:flex items-center gap-1.5 text-white/80 whitespace-nowrap">
                <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </span>
            </div>

            {/* Right Info */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap">
              <a
                href={`mailto:${contactInfo.email}`}
                className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors whitespace-nowrap"
              >
                <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <span className="hidden md:inline text-white/20">|</span>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-1.5 text-white font-semibold hover:text-cyan-300 transition-colors whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
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
        {/* FLOATING ROUND NAVBAR WITH GLASSMORPHIC EFFECT & BLUE BORDER              */}
        {/* ========================================================================= */}
        <header
          ref={dropdownRef}
          className={cn(
            "w-full px-2.5 sm:px-6 pointer-events-auto transition-all duration-300",
            isScrolled ? "pt-2 sm:pt-3" : "pt-2.5 sm:pt-4"
          )}
        >
          <div
            className={cn(
              "relative mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-full border border-blue-500/40 bg-slate-950/85 px-3 sm:px-6 backdrop-blur-2xl transition-all duration-300",
              isScrolled
                ? "border-blue-400/55 bg-slate-950/92 shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.35)]"
                : "shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(59,130,246,0.22)]"
            )}
          >
          {/* Subtle Top Glass Reflection Line */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full"
            aria-hidden="true"
          />

          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink min-w-0 transition-opacity hover:opacity-95"
          >
            <Logo size="md" />
          </Link>

          {/* ========================================================================= */}
          {/* CENTER: DESKTOP NAVIGATION DOCK (Round Shape, Glassmorphism, Blue Border) */}
          {/* ========================================================================= */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden lg:flex items-center relative rounded-full border border-blue-500/30 bg-black/40 backdrop-blur-md px-2 py-1 shadow-inner overflow-visible"
          >
            {/* OPTION 1: HOME */}
            <Link
              to="/"
              className="relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
            >
              {isHomeActive && (
                <>
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                </>
              )}
              <Home
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isHomeActive
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105"
                    : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200",
                  isHomeActive
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    : "text-slate-400 group-hover:text-slate-200"
                )}
              >
                Home
              </span>
            </Link>

            {/* OPTION 2: SERVICES (Dropdown) */}
            <button
              type="button"
              onClick={() => setOpenDropdown(isServicesOpen ? null : "services")}
              className="relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              {isServicesActive && (
                <>
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                </>
              )}
              <LayoutGrid
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isServicesActive || isServicesOpen
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105"
                    : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5",
                  isServicesActive || isServicesOpen
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    : "text-slate-400 group-hover:text-slate-200"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200 ml-0.5",
                    isServicesOpen ? "rotate-180 text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                  )}
                  aria-hidden="true"
                />
              </span>
            </button>

            {/* OPTION 3: DESTINATIONS (Dropdown) */}
            <button
              type="button"
              onClick={() => setOpenDropdown(isDestinationsOpen ? null : "destinations")}
              className="relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
              aria-expanded={isDestinationsOpen}
              aria-haspopup="true"
            >
              {isDestinationsActive && (
                <>
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                </>
              )}
              <Globe2
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isDestinationsActive || isDestinationsOpen
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105"
                    : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5",
                  isDestinationsActive || isDestinationsOpen
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    : "text-slate-400 group-hover:text-slate-200"
                )}
              >
                <span>Destinations</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200 ml-0.5",
                    isDestinationsOpen ? "rotate-180 text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                  )}
                  aria-hidden="true"
                />
              </span>
            </button>

            {/* OPTION 4: ABOUT US */}
            <Link
              to="/about"
              className="relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
            >
              {isAboutActive && (
                <>
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                </>
              )}
              <Building2
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isAboutActive
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105"
                    : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200",
                  isAboutActive
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    : "text-slate-400 group-hover:text-slate-200"
                )}
              >
                About Us
              </span>
            </Link>

            {/* OPTION 5: CONTACT */}
            <Link
              to="/contact"
              className="relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
            >
              {isContactActive && (
                <>
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300"
                    aria-hidden="true"
                  />
                </>
              )}
              <Phone
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isContactActive
                    ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105"
                    : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200",
                  isContactActive
                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    : "text-slate-400 group-hover:text-slate-200"
                )}
              >
                Contact
              </span>
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 whitespace-nowrap">
            {/* WhatsApp Desk Button */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20assistance.`}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap shadow-xs backdrop-blur-md",
                isScrolled ? "opacity-100 scale-100" : "opacity-90 hover:opacity-100 hidden sm:flex"
              )}
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Apply for Visa — Round Pill CTA */}
            <Link
              to="/services/visa"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-cyan-400/40 shrink-0 whitespace-nowrap"
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
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-blue-400/40 bg-white/10 text-white lg:hidden hover:bg-white/20 shrink-0 backdrop-blur-md transition-colors mr-0.5 sm:mr-0"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FROSTED SERVICES DROPDOWN PANEL (Round Glass Card, Blue Border)           */}
        {/* ========================================================================= */}
        {openDropdown === "services" && (
          <div className="absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up">
            <div className="rounded-3xl border border-blue-500/35 bg-slate-950/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.22)] backdrop-blur-3xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Core Travel & Visa Solutions
                </span>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-cyan-400 hover:text-white hover:underline transition-colors"
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
                      className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-blue-400/50 hover:bg-white/10 backdrop-blur-md"
                    >
                      <div>
                        <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-300 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white shadow-xs">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-300/80 leading-relaxed line-clamp-2">
                          {service.short}
                        </p>
                      </div>

                      <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                        Learn More <ChevronRight className="h-3 w-3" />
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between rounded-2xl border border-blue-500/20 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md">
                <span className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  100% Embassy-Compliant Documentation & Verified Travel Vouchers
                </span>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-semibold text-white hover:text-cyan-300 hover:underline transition-colors"
                >
                  Direct Desk: {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* FROSTED DESTINATIONS DROPDOWN PANEL (Round Glass Card, Blue Border)       */}
        {/* ========================================================================= */}
        {openDropdown === "destinations" && (
          <div className="absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up">
            <div className="rounded-3xl border border-blue-500/35 bg-slate-950/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.22)] backdrop-blur-3xl">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="relative w-full sm:w-80">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/70" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter countries by name..."
                    aria-label="Filter countries"
                    maxLength={50}
                    className="h-9 w-full rounded-xl border border-blue-400/30 bg-white/10 pl-9 pr-3 text-xs text-white placeholder:text-white/70 outline-none transition-colors focus:border-cyan-400/60 backdrop-blur-md"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/80">Popular:</span>
                  {popularDestinations.slice(0, 5).map((slug) => {
                    const country = countries.find((c) => c.slug === slug);
                    if (!country) return null;
                    return (
                      <Link
                        key={country.slug}
                        to="/countries/$slug"
                        params={{ slug: country.slug }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-white/10 px-2.5 py-1 text-xs text-slate-100 hover:border-cyan-400/50 hover:bg-white/20 transition-colors backdrop-blur-md"
                      >
                        <CountryFlag isoCode={country.isoCode} countryName={country.name} size="xs" />
                        <span>{country.name}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to="/countries"
                  className="text-xs font-semibold text-cyan-400 hover:text-white hover:underline transition-colors"
                >
                  View All 44+ Countries →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                <div className="space-y-1 border-r border-white/10 pr-4">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-cyan-300">
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
                            ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-xs"
                            : "text-white/80 hover:bg-white/10 hover:text-white",
                        )}
                      >
                        <span>{r}</span>
                        <span className="rounded-md bg-white/15 px-1.5 py-0.2 text-[10px] text-white/90 font-bold">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="min-h-[220px]">
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                      {query
                        ? `Search Results (${filteredCountries.length})`
                        : `${selectedRegion} Destinations (${filteredCountries.length})`}
                    </span>
                    <Link
                      to="/countries/$slug"
                      params={{ slug: REGION_SLUGS[selectedRegion] }}
                      className="text-xs text-cyan-400 hover:text-white transition-colors"
                    >
                      Open {selectedRegion} Hub →
                    </Link>
                  </div>

                  {filteredCountries.length === 0 ? (
                    <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-white/60 bg-white/5">
                      No destinations match your search.
                    </div>
                  ) : (
                    <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 sm:grid-cols-3 lg:grid-cols-4">
                      {filteredCountries.map((c) => (
                        <Link
                          key={c.slug}
                          to="/countries/$slug"
                          params={{ slug: c.slug }}
                          className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2 text-xs transition-colors hover:border-cyan-400/50 hover:bg-white/15 backdrop-blur-md"
                        >
                          <CountryFlag
                            isoCode={c.isoCode}
                            countryName={c.name}
                            fallbackEmoji={c.flag}
                            size="xs"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold text-white group-hover:text-cyan-300 transition-colors">
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
      </div>

      {/* Spacer to preserve layout flow since the navbar is fixed & floating */}
      <div
        className={cn(
          "w-full pointer-events-none select-none shrink-0 transition-all duration-300",
          "h-20 sm:h-24 md:h-32"
        )}
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* PRO SIDEBAR MENU — slides from RIGHT                                      */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sidebar — right side */}
          <div className="absolute inset-y-0 right-0 w-[290px] bg-slate-950/95 backdrop-blur-3xl border-l border-blue-500/25 shadow-2xl shadow-black/80 animate-slide-left flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                  AT
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-tight">Areera Travel</h2>
                  <p className="text-[10px] font-medium text-cyan-300">World Explorer</p>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 py-4">
              {/* Search with Countries Dropdown */}
              <div ref={mobileSearchRef} className="relative mb-4">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" />
                <input
                  value={query}
                  onFocus={() => setSearchFocused(true)}
                  onClick={() => setSearchFocused(true)}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearchFocused(true);
                  }}
                  placeholder="Search countries..."
                  className="h-10 w-full rounded-full border border-blue-400/35 bg-white/10 pl-9 pr-9 text-sm text-white placeholder:text-slate-400 outline-none focus:bg-white/15 focus:border-cyan-400 transition-all shadow-xs"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs p-1"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                ) : null}

                {/* Countries List Dropdown */}
                {searchFocused && (
                  <div className="absolute inset-x-0 top-full mt-2 max-h-72 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-blue-500/40 bg-slate-950/98 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_24px_rgba(59,130,246,0.35)] backdrop-blur-3xl z-50 animate-fade-up">
                    <div className="flex items-center justify-between px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border-b border-blue-500/20 pb-1.5 mb-1">
                      <span>{query ? `Matching (${globalSearchResults.length})` : `All Countries (${countries.length})`}</span>
                      <button
                        type="button"
                        onClick={() => setSearchFocused(false)}
                        className="text-slate-400 hover:text-white lowercase text-[10px] bg-white/5 px-2 py-0.5 rounded-full border border-white/10"
                      >
                        close
                      </button>
                    </div>

                    {globalSearchResults.length === 0 ? (
                      <div className="py-4 text-center text-xs text-slate-400">
                        No destinations found for "{query}".
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {globalSearchResults.map((c) => (
                          <Link
                            key={c.slug}
                            to="/countries/$slug"
                            params={{ slug: c.slug }}
                            onClick={() => {
                              setMobileOpen(false);
                              setSearchFocused(false);
                              setQuery("");
                            }}
                            className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 hover:bg-blue-500/25 hover:border-blue-400/40 border border-transparent transition-all group"
                          >
                            <CountryFlag
                              isoCode={c.isoCode}
                              countryName={c.name}
                              fallbackEmoji={c.flag}
                              size="xs"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold text-white group-hover:text-cyan-300 truncate">
                                {c.name}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate">
                                {c.capital} · {c.region}
                              </div>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Nav Links */}
              <nav className="space-y-1 flex-1">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                    isHomeActive
                      ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Home className={cn("h-[18px] w-[18px]", isHomeActive ? "text-cyan-400" : "text-white/50")} />
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                      isServicesActive || mobileDropdown === "services"
                        ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <LayoutGrid className={cn("h-[18px] w-[18px]", isServicesActive || mobileDropdown === "services" ? "text-cyan-400" : "text-white/50")} />
                      Services
                    </div>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdown === "services" && "rotate-180 text-cyan-400")} />
                  </button>
                  {mobileDropdown === "services" && (
                    <div className="mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-blue-500/20">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={s.path as never}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs font-medium text-white/70 hover:text-cyan-300 transition-colors"
                        >
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
                      "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                      isDestinationsActive || mobileDropdown === "destinations"
                        ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Globe2 className={cn("h-[18px] w-[18px]", isDestinationsActive || mobileDropdown === "destinations" ? "text-cyan-400" : "text-white/50")} />
                      Destinations
                    </div>
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdown === "destinations" && "rotate-180 text-cyan-400")} />
                  </button>
                  {mobileDropdown === "destinations" && (
                    <div className="mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-blue-500/20 max-h-[28vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {REGIONS.map((r) => (
                        <Link
                          key={r}
                          to="/countries/$slug"
                          params={{ slug: REGION_SLUGS[r] }}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-xs font-medium text-white/70 hover:text-cyan-300 transition-colors"
                        >
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
                    "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                    isAboutActive
                      ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Building2 className={cn("h-[18px] w-[18px]", isAboutActive ? "text-cyan-400" : "text-white/50")} />
                  About Us
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                    isContactActive
                      ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Phone className={cn("h-[18px] w-[18px]", isContactActive ? "text-cyan-400" : "text-white/50")} />
                  Contact
                </Link>
              </nav>

              {/* Footer CTA */}
              <div className="mt-auto pt-3 border-t border-white/10 space-y-1">
                <Link
                  to="/services/visa"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-colors"
                >
                  <FileCheck2 className="h-4 w-4" />
                  Apply For Visa
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
