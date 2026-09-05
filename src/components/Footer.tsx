import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { REGIONS, REGION_SLUGS, countriesByRegion } from "@/data/countries";
import { services, contactInfo } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/80 bg-card/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 md:grid-cols-12 lg:gap-12">
          <div className="md:col-span-6">
            <Logo size="lg" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Visa filing support, air ticketing, document attestation, hotel bookings and flight
              reservations — handled by people who explain every step before you commit.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-foreground"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-primary">
              Core Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path as never} className="hover:text-foreground transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-xs font-medium text-cyan-400 hover:underline">
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-primary">
              Travel Intelligence & Hubs
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/countries" className="hover:text-foreground transition-colors font-medium">
                  Global Visa Directory (50+ Destinations)
                </Link>
              </li>
              <li>
                <Link to="/guides/visa-free-asian-destinations" className="hover:text-foreground transition-colors text-cyan-300 font-medium">
                  Visa-Free Asian Guide 2026
                </Link>
              </li>
              <li>
                <Link to="/flight-reservation" className="hover:text-foreground transition-colors">
                  Flight Reservations (Embassy PNR)
                </Link>
              </li>
              <li>
                <Link to="/hotel-booking" className="hover:text-foreground transition-colors">
                  Hotel Booking Vouchers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Areera Travel & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact Travel Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional Destinations Grid — 5 balanced columns on desktop */}
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {REGIONS.map((region) => {
            const list = countriesByRegion(region);
            const displayed = list.slice(0, 6);
            const remaining = list.length - displayed.length;

            return (
              <div key={region}>
                <Link
                  to="/countries/$slug"
                  params={{ slug: REGION_SLUGS[region] }}
                  className="mb-3 block text-xs font-semibold tracking-wider text-primary hover:underline"
                >
                  {region}
                </Link>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {displayed.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/countries/$slug"
                        params={{ slug: c.slug }}
                        className="hover:text-foreground transition-colors truncate block"
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
                        className="text-xs font-medium text-primary hover:underline"
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

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Areera Travel and Tours. Visa decisions rest solely with the
            relevant embassy or consulate; we provide documentation and filing support only.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
