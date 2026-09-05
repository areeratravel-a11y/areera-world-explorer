import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  BedDouble,
  FileCheck2,
  PlaneTakeoff,
  Send,
  Sparkles,
  Stamp,
  ArrowRight,
  CheckCircle2,
  Phone,
  Loader2,
  AlertCircle,
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

export function HeroBookingCard({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<ServiceType>("visa");
  const [selectedSlug, setSelectedSlug] = useState("uae");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [customDetail, setCustomDetail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCountry = countries.find((c) => c.slug === selectedSlug) || countries[0];
  const activeCfg = serviceConfig[activeService];
  const Icon = activeCfg.icon;

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
    setTimeout(() => {
      window.open(`https://wa.me/${cleanWhatsApp}?text=${encoded}`, "_blank");
      setIsSubmitting(false);
      navigate({
        to: "/thank-you",
        search: {
          service: activeCfg.title,
          ref: refCode,
        },
      });
    }, 450);
  };

  const handleViewCountryGuide = () => {
    if (currentCountry) {
      navigate({ to: "/countries/$slug", params: { slug: currentCountry.slug } });
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/20 bg-card/85 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all",
        "before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-60",
        className,
      )}
    >
      {/* Glow highlight */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Header with online indicator */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Live Consultant Available
            </span>
          </div>
          <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
            Fast-Track Your Travel Inquiry
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <Sparkles className="h-3 w-3" />
          {activeCfg.badge}
        </span>
      </div>

      {/* Service Tab Switchers */}
      <div className="mt-5 grid grid-cols-4 gap-1.5 rounded-2xl bg-background/60 p-1.5 border border-white/10">
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
                "flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl py-2 px-1 sm:px-3 text-xs font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5",
              )}
            >
              <TabIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[11px] sm:text-xs truncate">{config.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        {/* Country / Destination Selector */}
        {activeService === "visa" ? (
          <div>
            <label className="block text-xs font-semibold text-foreground/90 mb-1.5">
              Select Destination Country
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3 flex items-center pointer-events-none">
                {currentCountry && (
                  <CountryFlag
                    isoCode={currentCountry.isoCode}
                    countryName={currentCountry.name}
                    size="xs"
                  />
                )}
              </div>
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/15 bg-background/80 py-2.5 pl-10 pr-8 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <optgroup label="Popular Visa Destinations">
                  {popularDestinations.map((slug) => {
                    const c = countries.find((item) => item.slug === slug);
                    return c ? (
                      <option key={c.slug} value={c.slug}>
                        {c.name} ({c.region}) — {c.processingTime}
                      </option>
                    ) : null;
                  })}
                </optgroup>
                <optgroup label="All 100+ Countries">
                  {countries
                    .filter((c) => !popularDestinations.includes(c.slug))
                    .map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {c.name} ({c.region})
                      </option>
                    ))}
                </optgroup>
              </select>
            </div>
            {currentCountry && (
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground px-1">
                <span>
                  Processing: <strong className="text-emerald-400 font-medium">{currentCountry.processingTime}</strong>
                </span>
                <button
                  type="button"
                  onClick={handleViewCountryGuide}
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <span>View Requirements Guide</span>
                  <ArrowRight className="h-3 w-3" />
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
              className="w-full rounded-xl border border-white/15 bg-background/80 py-2.5 px-3.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
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
                  "w-full rounded-xl border bg-background/80 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2",
                  phoneError
                    ? "border-destructive focus:border-destructive focus:ring-destructive/30 bg-destructive/5"
                    : "border-white/15 focus:border-primary focus:ring-primary/30"
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
              className="w-full rounded-xl border border-white/15 bg-background/80 py-2.5 px-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Action Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-xl gap-2 font-semibold text-sm shadow-lg shadow-primary/25 royal-surface hover:scale-[1.01] transition-transform"
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
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          Zero Filing Fees Until Review
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
          Average Response: &lt;15 mins
        </span>
      </div>
    </div>
  );
}
