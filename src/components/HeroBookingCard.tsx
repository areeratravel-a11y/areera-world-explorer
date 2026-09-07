import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  BedDouble,
  FileCheck2,
  PlaneTakeoff,
  Send,
  Stamp,
  ArrowRight,
  CheckCircle2,
  Phone,
  Loader2,
  AlertCircle,
  ChevronDown,
  Check,
  Search,
  X,
  Clock,
} from "lucide-react";
import { countries, popularDestinations } from "@/data/countries";
import { contactInfo } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { trackInquirySubmitted, trackWhatsAppContact } from "@/lib/analytics";

type ServiceType = "visa" | "flight" | "hotel" | "attestation";

const serviceConfig: Record<
  ServiceType,
  {
    title: string;
    icon: typeof Stamp;
    placeholder: string;
    actionLabel: string;
    badge: string;
  }
> = {
  visa: {
    title: "Visa Consultation",
    icon: Stamp,
    placeholder: "Select target country (e.g. UAE, UK, Turkey)",
    actionLabel: "Get Visa Checklist & Quote",
    badge: "100% Embassy Compliant",
  },
  flight: {
    title: "Flight Reservation",
    icon: PlaneTakeoff,
    placeholder: "Enter departure & destination (e.g. LHE to DXB)",
    actionLabel: "Get Flight Itinerary",
    badge: "Verifiable Embassy PNR",
  },
  hotel: {
    title: "Hotel Booking",
    icon: BedDouble,
    placeholder: "Destination city & stay duration",
    actionLabel: "Request Hotel Options",
    badge: "Confirmed Vouchers",
  },
  attestation: {
    title: "Attestation",
    icon: FileCheck2,
    placeholder: "Degree / Document type & Embassy",
    actionLabel: "Check Attestation Process",
    badge: "MOFA & Embassy Legalization",
  },
};

const destinationFilterTabs = [
  { id: "popular", label: "Popular" },
  { id: "all", label: "All Destinations" },
  { id: "Middle East", label: "Middle East" },
  { id: "Asia", label: "Asia" },
  { id: "Europe", label: "Europe" },
  { id: "Africa", label: "Africa" },
];

export function HeroBookingCard({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<ServiceType>("visa");
  const [selectedSlug, setSelectedSlug] = useState("uae");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [customDetail, setCustomDetail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom Combobox State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("popular");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isDropdownOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
    } else {
      setSearchQuery("");
    }
  }, [isDropdownOpen]);

  // Close dropdown when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentCountry = countries.find((c) => c.slug === selectedSlug) || countries[0];
  const activeCfg = serviceConfig[activeService];
  const Icon = activeCfg.icon;

  // Filtered countries for the custom luxury dropdown
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      return countries.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          c.isoCode.toLowerCase().includes(q),
      );
    }
    if (selectedFilter === "popular") {
      return popularDestinations
        .map((slug) => countries.find((c) => c.slug === slug))
        .filter((c): c is NonNullable<typeof c> => Boolean(c));
    }
    if (selectedFilter === "all") {
      return countries;
    }
    return countries.filter((c) => c.region === selectedFilter);
  }, [searchQuery, selectedFilter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanDigits = phone.replace(/[^0-9]/g, "");
    if (!phone.trim()) {
      setPhoneError("Phone or WhatsApp number is required");
      toast.error("Please provide your Phone or WhatsApp number so we can send details.");
      return;
    }

    if (cleanDigits.length < 7) {
      setPhoneError("Please enter a valid phone number (minimum 7 digits)");
      toast.error("Please provide a valid phone number with country/area code.");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);
    const detailText =
      activeService === "visa"
        ? `Visa inquiry for ${currentCountry?.name || "Global"}`
        : customDetail.trim() || `Inquiry for ${activeCfg.title}`;

    const dateText = travelDate ? `\n*Intended Travel Date:* ${travelDate}` : "";

    const inquiryMessage =
      `*Instant Inquiry via Website (Hero)*\n` +
      `*Service:* ${activeCfg.title}\n` +
      `*Details:* ${detailText}${dateText}\n` +
      `*Phone:* ${phone}\n` +
      `*Assistance:* Please provide checklist, processing timeline, and quotation.`;

    const encoded = encodeURIComponent(inquiryMessage);
    const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
    const refCode = `ARR-${Math.floor(100000 + Math.random() * 900000)}`;

    trackInquirySubmitted({
      service: activeCfg.title,
      ref: refCode,
      source: "HeroBookingCard",
    });
    trackWhatsAppContact({
      context: "HeroBookingCard",
      service: activeCfg.title,
      country: activeService === "visa" ? currentCountry?.name : undefined,
    });

    toast.success("Connecting with travel consultant on WhatsApp...");
    const waUrl = `https://wa.me/${cleanWhatsApp}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
    navigate({
      to: "/thank-you",
      search: {
        service: activeCfg.title,
        ref: refCode,
      },
    });
  };

  const handleViewCountryGuide = () => {
    if (currentCountry) {
      navigate({ to: "/countries/$slug", params: { slug: currentCountry.slug } });
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 transition-all",
        className,
      )}
    >
      {/* Glow highlight */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Header with online indicator */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              Live Consultant Available
            </span>
          </div>
          <h2 className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
            Fast-Track Your Travel Inquiry
          </h2>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {activeCfg.badge}
        </span>
      </div>

      {/* Service Tab Switchers */}
      <div className="mt-5 grid grid-cols-4 gap-1.5 rounded-2xl bg-slate-100 p-1.5 border border-slate-200/80">
        {(["visa", "flight", "hotel", "attestation"] as const).map((svc) => {
          const config = serviceConfig[svc];
          const TabIcon = config.icon;
          const isActive = activeService === svc;
          return (
            <button
              key={svc}
              type="button"
              onClick={() => setActiveService(svc)}
              className={cn(
                "flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 rounded-xl py-2 px-1 sm:px-2.5 text-xs font-medium transition-all",
                isActive
                  ? "bg-white text-blue-600 shadow-xs font-bold border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
              )}
            >
              <TabIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="text-xs font-medium whitespace-nowrap">
                {svc === "attestation" ? (
                  <>
                    <span className="sm:hidden">Attest</span>
                    <span className="hidden sm:inline">Attestation</span>
                  </>
                ) : (
                  config.title.split(" ")[0]
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        {/* Country / Destination Selector */}
        {activeService === "visa" ? (
          <div ref={dropdownRef} className="relative">
            <label className="block text-xs font-semibold text-foreground/90 mb-1.5">
              Select Destination Country
            </label>

            {/* Custom Luxury Combobox Trigger */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className={cn(
                "relative flex h-12 w-full items-center justify-between rounded-xl border bg-slate-50 px-3.5 py-2 text-xs sm:text-sm text-foreground shadow-xs transition-all cursor-pointer outline-none focus:outline-none",
                isDropdownOpen
                  ? "border-blue-500 bg-white ring-2 ring-blue-500/20"
                  : "border-slate-300 hover:border-blue-400 hover:bg-white"
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                {currentCountry && (
                  <CountryFlag
                    isoCode={currentCountry.isoCode}
                    countryName={currentCountry.name}
                    size="xs"
                  />
                )}
                <div className="flex items-center gap-2 truncate">
                  <span className="font-semibold text-slate-900 truncate">
                    {currentCountry?.name}
                  </span>
                  <span className="text-xs text-slate-500 hidden xs:inline shrink-0">
                    ({currentCountry?.region})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {currentCountry && (
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    <Clock className="h-3 w-3" />
                    <span>{currentCountry.processingTime}</span>
                  </span>
                )}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-400 transition-transform duration-200",
                    isDropdownOpen ? "rotate-180 text-blue-600" : "group-hover:text-slate-700"
                  )}
                />
              </div>
            </button>

            {/* Hidden native input to preserve form serialization */}
            <input type="hidden" name="destination" value={selectedSlug} />

            {/* Luxury Glassmorphic Dropdown Panel */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl animate-fade-up">
                {/* Search Input inside Dropdown */}
                <div className="relative mb-2">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-blue-600" />
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search country (e.g. UAE, Saudi, UK)..."
                    className="h-9 w-full rounded-xl border border-slate-300 bg-slate-50 pl-9 pr-8 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 text-xs"
                      aria-label="Clear search"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Quick Filter Categories (when not actively searching) */}
                {!searchQuery && (
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-1 pt-0.5">
                    {destinationFilterTabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setSelectedFilter(tab.id)}
                        className={cn(
                          "rounded-full px-2.5 py-1 text-xs font-semibold transition-all shrink-0 whitespace-nowrap",
                          selectedFilter === tab.id
                            ? "bg-blue-600 text-white shadow-xs font-bold"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Dropdown Items List */}
                <div className="max-h-60 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-y-1 pr-1">
                  {filteredCountries.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-500">
                      No destinations found for "{searchQuery}".
                    </div>
                  ) : (
                    filteredCountries.map((c) => {
                      const isSelected = selectedSlug === c.slug;
                      return (
                        <button
                          key={c.slug}
                          type="button"
                          onClick={() => {
                            setSelectedSlug(c.slug);
                            setIsDropdownOpen(false);
                            setSearchQuery("");
                          }}
                          className={cn(
                            "flex w-full items-center justify-between gap-2.5 rounded-xl px-3 py-2 text-xs transition-all text-left group border",
                            isSelected
                              ? "bg-blue-50 border-blue-200 text-blue-900 shadow-xs"
                              : "hover:bg-slate-50 hover:border-slate-200 border-transparent text-slate-800"
                          )}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <CountryFlag
                              isoCode={c.isoCode}
                              countryName={c.name}
                              size="xs"
                            />
                            <div className="min-w-0">
                              <p className={cn("font-semibold truncate", isSelected ? "text-blue-700" : "text-slate-900 group-hover:text-blue-600")}>
                                {c.name}
                              </p>
                              <p className="text-xs text-slate-500 truncate">
                                {c.capital} · {c.region}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                              {c.processingTime}
                            </span>
                            {isSelected && (
                              <Check className="h-4 w-4 text-blue-600 shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {currentCountry && (
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500 px-1">
                <span>
                  Processing: <strong className="text-emerald-700 font-semibold">{currentCountry.processingTime}</strong>
                </span>
                <button
                  type="button"
                  onClick={handleViewCountryGuide}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors shadow-2xs"
                >
                  <span>View Requirements Guide</span>
                  <ArrowRight className="h-3 w-3" aria-hidden />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <label className="block text-xs font-semibold text-foreground/90 mb-1.5">
              {activeService === "flight"
                ? "Route / Travel Sector"
                : activeService === "hotel"
                  ? "Destination & Hotel Class"
                  : "Document Type & Country"}
            </label>
            <input
              type="text"
              value={customDetail}
              onChange={(e) => setCustomDetail(e.target.value)}
              placeholder={activeCfg.placeholder}
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
            />
          </div>
        )}

        {/* 2-Column Fields: Phone + Travel Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="hero-phone" className="block text-xs font-semibold text-foreground/90 mb-1.5 flex items-center gap-1">
              <span>Phone / WhatsApp</span>
              <span className="text-destructive font-bold" aria-hidden="true">*</span>
            </label>
            <div className="relative flex items-center">
              <Phone className={cn("absolute left-3 h-3.5 w-3.5 pointer-events-none transition-colors", phoneError ? "text-destructive" : "text-muted-foreground")} />
              <input
                id="hero-phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError("");
                }}
                placeholder="+92 300 0000000"
                aria-invalid={Boolean(phoneError)}
                aria-describedby={phoneError ? "hero-phone-error" : undefined}
                className={cn(
                  "w-full rounded-xl border bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2",
                  phoneError
                    ? "border-destructive focus:border-destructive focus:ring-destructive/30 bg-destructive/5"
                    : "border-slate-300 focus:border-primary focus:ring-primary/20"
                )}
              />
            </div>
            {phoneError && (
              <p
                id="hero-phone-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{phoneError}</span>
              </p>
            )}
          </div>
          <div>
            <label htmlFor="hero-travel-date" className="block text-xs font-semibold text-foreground/90 mb-1.5">
              Travel Window (Optional)
            </label>
            <input
              id="hero-travel-date"
              type="text"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              placeholder="e.g. Next month, Nov 2026"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Action Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-xl gap-2 font-semibold text-sm shadow-md shadow-primary/20 royal-surface hover:scale-[1.01] transition-transform"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Connecting to Specialist...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {activeCfg.actionLabel}
            </>
          )}
        </Button>
      </form>

      {/* Trust reassurance pills */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200/80 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          Zero Filing Fees Until Review
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
          Average Response: &lt;15 mins
        </span>
      </div>
    </div>
  );
}
