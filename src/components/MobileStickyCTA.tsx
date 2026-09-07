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
  Stamp,
} from "lucide-react";
import { getCountry, countries } from "@/data/countries";
import { contactInfo } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";
import logoImg from "@/assets/areera-logo.png";
import { cn } from "@/lib/utils";
import { trackWhatsAppContact, trackPhoneContact } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/FloatingWhatsApp";

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
        isOnline: true,
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
        isOnline: true,
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
        isOnline: true,
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
        isOnline: true,
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
        contextLabel: "Document Attestation",
        subLabel: "MOFA & Embassy stamp",
        isOnline: true,
        icon: FileCheck2,
        waText: "Hello Areera Travel, I need official document attestation assistance.",
        primaryAction: {
          label: "Attest File",
          href: "#inquiry-form",
          icon: FileCheck2,
        },
      };
    }

    // Default global home / fallback
    return {
      contextLabel: "Areera Travel",
      subLabel: "Online Specialist",
      isOnline: true,
      icon: Globe2,
      waText: "Hello Areera Travel, I would like a free travel consultation.",
      primaryAction: {
        label: "Get Quote",
        to: "/services/visa",
        icon: Stamp,
      },
    };
  }, [pathname, country]);

  const PrimaryIcon = config.primaryAction.icon || ArrowRight;

  return (
    <aside
      aria-label="Sticky mobile action bar"
      className="fixed bottom-3 inset-x-0 mx-auto w-[94%] max-w-lg z-50 md:hidden rounded-full border border-slate-200/90 bg-white/96 p-2 shadow-[0_12px_36px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all"
    >
      <div className="flex items-center justify-between gap-2 px-1">
        {/* Left: Logo Emblem & Context Info */}
        <div className="flex min-w-0 items-center gap-2.5 pl-0.5">
          {/* Logo with Live Status Dot */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-900 shadow-sm ring-2 ring-blue-500/20 flex items-center justify-center">
              {config.flagIso ? (
                <CountryFlag
                  isoCode={config.flagIso}
                  countryName={config.flagName || ""}
                  size="sm"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={logoImg}
                  alt="Areera Travel & Tours"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            {config.isOnline && (
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
              </span>
            )}
          </div>

          <div className="min-w-0">
            <div className="truncate text-xs font-bold text-slate-900 leading-tight">
              {config.contextLabel}
            </div>
            <div className="truncate text-[10px] font-medium text-blue-600">
              {config.subLabel}
            </div>
          </div>
        </div>

        {/* Right: Actions (Call, WhatsApp, Primary CTA) */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 active:scale-95"
          >
            <Phone className="h-4 w-4 text-blue-600" />
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
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-2 text-xs font-semibold shadow-xs transition-all active:scale-95 whitespace-nowrap"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
          </a>

          {/* Primary CTA (Apply / Inquire) */}
          {"to" in config.primaryAction && config.primaryAction.to ? (
            config.primaryAction.search ? (
              <Link
                to="/services/visa"
                search={config.primaryAction.search}
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap"
              >
                <PrimaryIcon className="h-3.5 w-3.5" />
                <span>{config.primaryAction.label}</span>
              </Link>
            ) : (
              <Link
                to="/services/visa"
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap"
              >
                <PrimaryIcon className="h-3.5 w-3.5" />
                <span>{config.primaryAction.label}</span>
              </Link>
            )
          ) : (
            <a
              href={config.primaryAction.href || "#"}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap"
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
