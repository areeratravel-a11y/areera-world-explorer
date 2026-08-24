import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { REGIONS, REGION_SLUGS, countriesByRegion } from "@/data/countries";
import { services, contactInfo } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/80 bg-card/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
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

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={s.path as never} className="hover:text-foreground">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    About Areera Travel and Tours
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground">
                    Contact our travel consultants
                  </Link>
                </li>
                <li>
                  <Link to="/countries" className="hover:text-foreground">
                    All visa destinations
                  </Link>
                </li>
                <li>
                  <Link to="/hotel-booking" className="hover:text-foreground">
                    Hotel booking inquiries
                  </Link>
                </li>
                <li>
                  <Link to="/flight-reservation" className="hover:text-foreground">
                    Flight reservation requests
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-4">
          {REGIONS.map((region) => (
            <div key={region}>
              <Link
                to="/countries/$slug"
                params={{ slug: REGION_SLUGS[region] }}
                className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                {region}
              </Link>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {countriesByRegion(region).map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/countries/$slug"
                      params={{ slug: c.slug }}
                      className="hover:text-foreground"
                    >
                      {c.name} visa
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Areera Travel and Tours. Visa decisions rest solely with the
          relevant embassy or consulate; we provide documentation and filing support only.
        </p>
      </div>
    </footer>
  );
}
