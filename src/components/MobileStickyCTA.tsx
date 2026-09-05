import { useMemo } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  FileCheck2,
  Globe2,
  Home,
  MessageSquare,
  Phone,
  PlaneTakeoff,
  Sparkles,
  Stamp,
} from "lucide-react";
import { getCountry, countries } from "@/data/countries";
import { contactInfo } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";
import { cn } from "@/lib/utils";
import { trackWhatsAppContact, trackPhoneContact } from "@/lib/analytics";

export function MobileStickyCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Extract country slug if on a country page
  const countrySlug = useMemo(() => {
    if (pathname.startsWith("/countries/")) {
      const parts = pathname.split("/").filter(Boolean);
      return parts[1] || null;
    }
    return null;
  }, [pathname]);

  const country = useMemo(() => {
    return countrySlug ? getCountry(countrySlug) : null;
  }, [countrySlug]);

  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
  const cleanPhone = contactInfo.phone.replace(/[^0-9+]/g, "");

  // Determine context-based actions
  const config = useMemo(() => {
    if (country) {
      return {
        contextLabel: `${country.name} Visa`,
        subLabel: country.processingTime || "Fast processing",
        flagIso: country.isoCode,
        flagName: country.name,
        waText: `Hello Areera Travel, I am on your website and would like to apply for a visa for ${country.name}.`,
        primaryAction: {
          label: "Apply Now",
          to: "/services/visa",
          search: { country: country.slug },
          icon: Stamp,
        },
      };
    }

    if (pathname.startsWith("/services/visa")) {
      return {
        contextLabel: "Visa Assistance",
        subLabel: "Certified file review",
        icon: Stamp,
        waText: "Hello Areera Travel, I need professional visa filing support.",
        primaryAction: {
          label: "Start File",
          href: "#visa-application-form",
          icon: Stamp,
        },
      };
    }

    if (pathname.startsWith("/flight-reservation")) {
      return {
        contextLabel: "Flight Reservation",
        subLabel: "Verifiable embassy PNR",
        icon: PlaneTakeoff,
        waText: "Hello Areera Travel, I would like to request a flight reservation for my visa file.",
        primaryAction: {
          label: "Book Flight",
          href: "#inquiry-form",
          icon: PlaneTakeoff,
        },
      };
    }

    if (pathname.startsWith("/hotel-booking")) {
      return {
        contextLabel: "Hotel Booking",
        subLabel: "Visa-ready vouchers",
        icon: BedDouble,
        waText: "Hello Areera Travel, I would like to inquire about hotel reservations.",
        primaryAction: {
          label: "Book Hotel",
          href: "#inquiry-form",
          icon: BedDouble,
        },
      };
    }

    if (pathname.startsWith("/services/attestation")) {
      return {
        contextLabel: "Attestation",
        subLabel: "MOFA & Embassy legalization",
        icon: FileCheck2,
        waText: "Hello Areera Travel, I need document attestation services.",
        primaryAction: {
          label: "Attest Doc",
          href: "#inquiry-form",
          icon: FileCheck2,
        },
      };
    }

    // Default: Homepage & other pages
    return {
      contextLabel: "Areera Travel",
      subLabel: "Online Specialist",
      isOnline: true,
      icon: Sparkles,
      waText: "Hello Areera Travel, I would like a free travel consultation.",
      primaryAction: {
        label: "Get Quote",
        to: "/services/visa",
        icon: Stamp,
      },
    };
  }, [pathname, country]);

  const Icon = config.icon || Sparkles;
  const PrimaryIcon = config.primaryAction.icon || ArrowRight;

  return (
    <aside
      aria-label="Sticky mobile action bar"
      className="fixed inset-x-0 bottom-0 z-50 md:hidden border-t border-white/15 bg-card/95 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_25px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2 px-3.5 py-2.5">
        {/* Left: Context / Quick Navigation */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          {config.flagIso ? (
            <CountryFlag
              isoCode={config.flagIso}
              countryName={config.flagName || ""}
              size="sm"
              className="shrink-0 ring-1 ring-white/20"
            />
          ) : (
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Icon className="h-4 w-4" />
              {config.isOnline && (
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
              )}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-bold text-foreground">
              {config.contextLabel}
            </div>
            <div className="truncate text-[10px] font-medium text-emerald-400">
              {config.subLabel}
            </div>
          </div>
        </div>

        {/* Right: Dual High-Conversion CTA Buttons */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Quick Call Button */}
          <a
            href={`tel:${cleanPhone}`}
            onClick={() =>
              trackPhoneContact({
                number: cleanPhone,
                location: `MobileStickyCTA - ${config.contextLabel}`,
              })
            }
            aria-label="Call Areera Travel"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/15 active:scale-95"
          >
            <Phone className="h-4 w-4 text-blue-400" />
          </a>

          {/* WhatsApp Direct Button */}
          <a
            href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(config.waText)}`}
            onClick={() =>
              trackWhatsAppContact({
                context: "MobileStickyCTA",
                service: config.contextLabel,
                country: country?.name,
              })
            }
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25 active:scale-95"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Primary CTA (Apply / Inquire) */}
          {"to" in config.primaryAction && config.primaryAction.to ? (
            config.primaryAction.search ? (
              <Link
                to="/services/visa"
                search={config.primaryAction.search}
                className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95 royal-surface"
              >
                <PrimaryIcon className="h-3.5 w-3.5" />
                <span>{config.primaryAction.label}</span>
              </Link>
            ) : (
              <Link
                to="/services/visa"
                className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95 royal-surface"
              >
                <PrimaryIcon className="h-3.5 w-3.5" />
                <span>{config.primaryAction.label}</span>
              </Link>
            )
          ) : (
            <a
              href={config.primaryAction.href || "#"}
              className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95 royal-surface"
            >
              <PrimaryIcon className="h-3.5 w-3.5" />
              <span>{config.primaryAction.label}</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
