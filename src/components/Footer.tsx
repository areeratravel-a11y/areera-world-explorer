import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { REGIONS, REGION_SLUGS, countriesByRegion } from "@/data/countries";
import { services, contactInfo } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-blue-600/40 bg-gradient-to-b from-blue-700 via-blue-850 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-6">
            <Logo size="lg" variant="light" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100/85">
              Visa filing support, air ticketing, document attestation, hotel bookings and flight
              reservations — handled by people who explain every step before you commit.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100/90">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Core Services
            </h3>
            <ul className="space-y-2 text-sm text-blue-100/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path as never} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors inline-block pt-1">
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Travel Intelligence & Hubs
            </h3>
            <ul className="space-y-2 text-sm text-blue-100/80">
              <li>
                <Link to="/countries" className="hover:text-white transition-colors font-medium">
                  Global Visa Directory (50+ Destinations)
                </Link>
              </li>
              <li>
                <Link
                  to="/guides/visa-free-asian-destinations"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Visa-Free Asian Guide 2026</span>
                  <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-2xs font-bold text-cyan-200 border border-white/20">
                    Featured
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/flight-reservation" className="hover:text-white transition-colors">
                  Flight Reservations (Embassy PNR)
                </Link>
              </li>
              <li>
                <Link to="/hotel-booking" className="hover:text-white transition-colors">
                  Hotel Booking Vouchers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Areera Travel & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Travel Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional Destinations Grid — 4 balanced geographic columns on desktop */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-blue-600/40 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((region) => {
            const list = countriesByRegion(region);
            const displayed = list.slice(0, 6);
            const remaining = list.length - displayed.length;

            return (
              <div key={region}>
                <Link
                  to="/countries/$slug"
                  params={{ slug: REGION_SLUGS[region] }}
                  className="mb-3 block text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
                >
                  {region}
                </Link>
                <ul className="space-y-1.5 text-xs text-blue-100/75">
                  {displayed.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/countries/$slug"
                        params={{ slug: c.slug }}
                        className="hover:text-white transition-colors truncate block"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  {remaining > 0 && (
                    <li className="pt-1">
                      <Link
                        to="/countries/$slug"
                        params={{ slug: REGION_SLUGS[region] }}
                        className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                      >
                        +{remaining} more &rarr;
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-blue-600/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/70">
          <p>
            © {new Date().getFullYear()} Areera Travel and Tours. Visa decisions rest solely with the
            relevant embassy or consulate; we provide documentation and filing support only.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
