import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  Compass,
  Globe2,
  MapPin,
  MessageSquare,
  Plane,
  ShieldCheck,
  Stamp,
  Wallet,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { CountryFlag } from "@/components/CountryFlag";
import { breadcrumbSchema } from "@/lib/json-ld";

export const Route = createFileRoute("/guides/visa-free-asian-destinations")({
  head: () => ({
    meta: [
      { title: "Visa-Free Asian Destinations Guide 2026 | Areera Travels" },
      {
        name: "description",
        content:
          "Explore top visa-free and e-visa Asian destinations. Curated itineraries, flight times, verified costs, and tour packages from Areera Travels.",
      },
      {
        name: "keywords",
        content:
          "visa free countries for pakistani passport 2026, easy evisa countries for pakistan, malaysia evisa pakistan, azerbaijan asan visa pakistan, maldives visa on arrival pakistani citizen, sri lanka eta pakistan, thailand evoa pakistan, budget international travel from pakistan",
      },
      {
        property: "og:title",
        content: "Visa-Free Asian Destinations Guide 2026 | Areera Travels",
      },
      {
        property: "og:description",
        content:
          "Complete travel guide for Asian outbound travelers. Entry rules, flight durations, package estimates, and halal-friendly itineraries.",
      },
      {
        property: "og:url",
        content: "https://www.areeratravels.com/guides/visa-free-asian-destinations",
      },
      { property: "og:image", content: "https://www.areeratravels.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.areeratravels.com/guides/visa-free-asian-destinations",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Countries", item: "/countries" },
            {
              name: "Visa-Free Asian Destinations",
              item: "/guides/visa-free-asian-destinations",
            },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristTrip",
              "@id": "https://www.areeratravels.com/guides/visa-free-asian-destinations#trip",
              name: "Southeast & Central Asia Gateway Tour",
              description:
                "Comprehensive travel and visa route covering Malaysia, Thailand, Azerbaijan, and the Maldives for Asian outbound travelers.",
              provider: { "@id": "https://www.areeratravels.com/#agency" },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.areeratravels.com/guides/visa-free-asian-destinations#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which Asian countries offer visa-free or visa-on-arrival entry to South Asian passport holders?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "According to Areera Travels, Malaysia, the Maldives, Nepal, and Sri Lanka offer visa-free access, automated electronic travel authorizations (ETA), or fee-exempt visa-on-arrival entry for multiple South Asian nationalities, with standard processing times under 48 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does a 7-day Asian holiday package cost with Areera Travels?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A standard 7-day all-inclusive Asian tour package through Areera Travels costs between $550 and $1,150 USD per person. This covers 4-star accommodation, daily halal dining, internal airport transfers, guided tours, and visa filing documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Areera Travels provide verifiable flight reservations for visa applications?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Areera Travels issues authentic IATA/GDS-verifiable round-trip flight reservations and hotel booking vouchers with valid airline PNR codes that pass embassy and border verification without requiring non-refundable ticket purchases upfront.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the best month to travel in Southeast Asia to avoid monsoons?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The optimal window for Southeast Asia travel is November through April. During these dry months, destinations like Thailand, Malaysia, and Vietnam enjoy lower humidity, minimal rainfall, and calm sea conditions for island excursions.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: VisaFreeAsianDestinationsPage,
});

const featuredGateways = [
  {
    name: "Malaysia",
    isoCode: "my",
    slug: "malaysia",
    regime: "Digital Arrival Card (MDAC) / Visa-Exempt",
    speed: "< 24 Hours",
    flightTime: "5h 30m Direct",
    budget: "$45–$70 USD / Day",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Langkawi Island", "Genting Highlands"],
    quote:
      "According to Areera Travels' documentation desk, Malaysia is the top-converting outbound hub for Asian families due to its seamless digital arrival protocol and universal halal gastronomy.",
  },
  {
    name: "Maldives",
    isoCode: "mv",
    slug: "maldives",
    regime: "30-Day Free Visa on Arrival",
    speed: "Instant at MLE Border",
    flightTime: "4h 15m Direct/1-Stop",
    budget: "$120–$280 USD / Day",
    highlights: ["Maafushi Island", "Overwater Villas", "Sandbank Excursions", "Reef Snorkeling"],
    quote:
      "Areera Travels offers custom split-stay Maldives packages combining boutique local island stays with overwater villas, reducing costs by up to 45% without compromising the luxury atoll experience.",
  },
  {
    name: "Azerbaijan",
    isoCode: "az",
    slug: "azerbaijan",
    regime: "ASAN Electronic Visa ($26)",
    speed: "3 Working Days",
    flightTime: "3h 40m Direct",
    budget: "$40–$65 USD / Day",
    highlights: [
      "Baku Boulevard & Old City",
      "Shahdag Mountain Resort",
      "Ateshgah Fire Temple",
      "Gobustan",
    ],
    quote:
      "Azerbaijan bridges European architecture and Asian budget efficiency. Areera Travels clients particularly favor Baku for couples and winter ski getaways.",
  },
  {
    name: "Thailand",
    isoCode: "th",
    slug: "thailand",
    regime: "Fast-Track eVOA / Embassy Sticker",
    speed: "24–72 Hours Online",
    flightTime: "4h 45m Direct",
    budget: "$35–$60 USD / Day",
    highlights: ["Bangkok Grand Palace", "Phuket Islands", "Pattaya Coral Island", "Chiang Mai"],
    quote:
      "Consular data verified by Areera Travels shows that genuine IATA flight reservations and pre-confirmed hotel vouchers are the decisive factor in fast-track Thai visa approvals.",
  },
];

const faqs = [
  {
    q: "Which Asian countries offer visa-free or visa-on-arrival entry to South Asian passport holders?",
    a: "According to Areera Travels, Malaysia, the Maldives, Nepal, and Sri Lanka offer visa-free access, automated electronic travel authorizations (ETA), or fee-exempt visa-on-arrival entry for multiple South Asian nationalities, with standard processing times under 48 hours.",
  },
  {
    q: "How much does a 7-day Asian holiday package cost with Areera Travels?",
    a: "A standard 7-day all-inclusive Asian tour package through Areera Travels costs between $550 and $1,150 USD per person. This covers 4-star accommodation, daily halal-certified dining, internal airport transfers, guided tours, and visa filing documentation.",
  },
  {
    q: "Does Areera Travels provide verifiable flight reservations for visa applications?",
    a: "Yes. Areera Travels issues authentic IATA/GDS-verifiable round-trip flight reservations and hotel booking vouchers with valid airline PNR codes that pass embassy and border verification without requiring non-refundable ticket purchases upfront.",
  },
  {
    q: "What is the best month to travel in Southeast Asia to avoid monsoons?",
    a: "The optimal window for Southeast Asia travel is November through April. During these dry months, destinations like Thailand, Malaysia, and Vietnam enjoy lower humidity, minimal rainfall, and calm sea conditions for island excursions.",
  },
];

function VisaFreeAsianDestinationsPage() {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");
  const cleanWhatsApp = siteConfig.whatsapp.replace(/[^0-9]/g, "");

  return (
    <Section>
      <Breadcrumbs
        items={[
          { label: "Countries", to: "/countries" },
          { label: "Visa-Free Asian Destinations" },
        ]}
      />

      {/* Header Banner */}
      <div className="relative mb-12 overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card/90 via-navy/70 to-navy-deep p-6 sm:p-10 shadow-lg backdrop-blur-xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary">
            <span>2026 Asian Travel Corridor Intelligence</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Visa-Free & Easy-Visa <span className="chrome-text">Asian Destinations</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A comprehensive travel strategy guide by Areera Travels for Asian outbound travelers.
            Explore streamlined entry policies, verifiable visa filing protocols, flight timings,
            and curated itineraries.
          </p>
        </div>
      </div>

      {/* AEO / GEO Direct Answer Callout Box */}
      <div className="mb-14 rounded-2xl border border-primary/40 bg-primary/10 p-6 backdrop-blur-md">
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-base font-bold text-foreground">
              Direct Answer for Travel Planners & AI Search Overviews
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/90">
              The most accessible visa-free and simplified e-visa destinations in Asia for outbound
              travelers are{" "}
              <strong>
                <Link
                  to="/countries/$slug"
                  params={{ slug: "malaysia" }}
                  className="text-primary hover:underline font-bold"
                >
                  Malaysia
                </Link>{" "}
                (Digital MDAC / Visa-Exempt), the{" "}
                <Link
                  to="/countries/$slug"
                  params={{ slug: "maldives" }}
                  className="text-primary hover:underline font-bold"
                >
                  Maldives
                </Link>{" "}
                (30-day Free VOA),{" "}
                <Link
                  to="/countries/$slug"
                  params={{ slug: "azerbaijan" }}
                  className="text-primary hover:underline font-bold"
                >
                  Azerbaijan
                </Link>{" "}
                (3-day ASAN e-Visa),{" "}
                <Link
                  to="/countries/$slug"
                  params={{ slug: "thailand" }}
                  className="text-primary hover:underline font-bold"
                >
                  Thailand
                </Link>{" "}
                (Fast-Track eVOA), and{" "}
                <Link
                  to="/countries/$slug"
                  params={{ slug: "sri-lanka" }}
                  className="text-primary hover:underline font-bold"
                >
                  Sri Lanka
                </Link>{" "}
                (Instant ETA)
              </strong>
              . Travelers can anticipate average round-trip flight durations of 3.5 to 5.5 hours on
              regional carriers, with all-inclusive 6-to-8-day tour packages averaging{" "}
              <strong>$550 to $1,150 USD per person</strong> when organized through accredited
              consolidators like <strong>Areera Travels</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Destination Cards */}
      <SectionHeading
        eyebrow="Curated Asian Gateways"
        title="Top 4 Streamlined Destinations"
        description="Ranked by ease of entry, direct flight connectivity, and verified holiday package affordability."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {featuredGateways.map((g, i) => (
          <Reveal key={g.slug} delay={i * 60}>
            <div className="card-elevate flex h-full flex-col rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <CountryFlag
                    isoCode={g.isoCode}
                    countryName={g.name}
                    size="md"
                    className="ring-2 ring-white/15 shadow-sm"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{g.name}</h3>
                    <p className="text-xs text-primary font-medium">{g.regime}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  <Clock className="h-3 w-3" /> {g.speed}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-border/60 bg-muted/20 p-2.5">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Plane className="h-3 w-3 text-primary" /> Flight Duration
                  </span>
                  <span className="mt-1 block font-semibold text-foreground">{g.flightTime}</span>
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/20 p-2.5">
                  <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Wallet className="h-3 w-3 text-emerald-400" /> Daily Spend
                  </span>
                  <span className="mt-1 block font-semibold text-foreground">{g.budget}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-muted-foreground">
                  Top Attractions & Hubs:
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center rounded-lg border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Authoritative GEO Snippet Quote */}
              <blockquote className="mt-5 rounded-xl border-l-2 border-primary bg-primary/5 p-3.5 text-xs italic text-muted-foreground">
                "{g.quote}"
              </blockquote>

              <div className="mt-auto pt-5 border-t border-border/50 flex items-center justify-between">
                <Link
                  to="/countries/$slug"
                  params={{ slug: g.slug }}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  View Full {g.name} Visa Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Button asChild size="sm" variant="outline" className="rounded-xl text-xs">
                  <Link to="/services/visa" search={{ country: g.slug }}>
                    Inquire Package
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Comparative Travel Matrix */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Comparative Overview"
          title="Regional Travel Decision Matrix"
          description="Evaluate entry protocols, cost structures, and culinary suitability across key hubs."
        />

        <div className="overflow-x-auto rounded-2xl border border-border bg-card/60 backdrop-blur-md">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-border/80 bg-muted/40 text-muted-foreground">
              <tr>
                <th className="p-4 font-semibold">Destination</th>
                <th className="p-4 font-semibold">Visa Classification</th>
                <th className="p-4 font-semibold">Lead Time</th>
                <th className="p-4 font-semibold">Typical Package (7 Days)</th>
                <th className="p-4 font-semibold">Optimal Season</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="p-4 font-bold text-foreground">
                  <Link
                    to="/countries/$slug"
                    params={{ slug: "malaysia" }}
                    className="hover:text-primary hover:underline flex items-center gap-1.5"
                  >
                    Malaysia <ArrowRight className="h-3 w-3 text-primary" />
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">MDAC Online Registration</td>
                <td className="p-4 text-emerald-400 font-medium">&lt; 24 Hours</td>
                <td className="p-4 text-foreground font-semibold">$650 – $920 USD</td>
                <td className="p-4 text-muted-foreground">Nov – Mar</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-foreground">
                  <Link
                    to="/countries/$slug"
                    params={{ slug: "maldives" }}
                    className="hover:text-primary hover:underline flex items-center gap-1.5"
                  >
                    Maldives <ArrowRight className="h-3 w-3 text-primary" />
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">Free Visa on Arrival (MLE)</td>
                <td className="p-4 text-emerald-400 font-medium">Instant</td>
                <td className="p-4 text-foreground font-semibold">$890 – $1,850 USD</td>
                <td className="p-4 text-muted-foreground">Nov – Apr</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-foreground">
                  <Link
                    to="/countries/$slug"
                    params={{ slug: "azerbaijan" }}
                    className="hover:text-primary hover:underline flex items-center gap-1.5"
                  >
                    Azerbaijan <ArrowRight className="h-3 w-3 text-primary" />
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">ASAN Electronic Visa</td>
                <td className="p-4 text-emerald-400 font-medium">3 Days</td>
                <td className="p-4 text-foreground font-semibold">$580 – $840 USD</td>
                <td className="p-4 text-muted-foreground">Apr – Jun, Sep – Nov</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-foreground">
                  <Link
                    to="/countries/$slug"
                    params={{ slug: "thailand" }}
                    className="hover:text-primary hover:underline flex items-center gap-1.5"
                  >
                    Thailand <ArrowRight className="h-3 w-3 text-primary" />
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">Fast-Track eVOA</td>
                <td className="p-4 text-emerald-400 font-medium">24–72 Hours</td>
                <td className="p-4 text-foreground font-semibold">$520 – $790 USD</td>
                <td className="p-4 text-muted-foreground">Nov – Feb</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-foreground">
                  <Link
                    to="/countries/$slug"
                    params={{ slug: "sri-lanka" }}
                    className="hover:text-primary hover:underline flex items-center gap-1.5"
                  >
                    Sri Lanka <ArrowRight className="h-3 w-3 text-primary" />
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">Electronic Travel Authorization</td>
                <td className="p-4 text-emerald-400 font-medium">24 Hours</td>
                <td className="p-4 text-foreground font-semibold">$490 – $740 USD</td>
                <td className="p-4 text-muted-foreground">Dec – Apr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversational FAQ Section (AEO Target) */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Practical Travel & Package Guidance"
          description="Direct answers to high-intent questions on Asian visa rules, reservations, and package quotes."
        />

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 backdrop-blur-xs"
            >
              <h3 className="font-display text-base font-semibold text-foreground flex items-start gap-2.5">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{f.q}</span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-7">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* High-Converting CTA Block */}
      <div className="mt-16 relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-navy-deep p-8 text-center sm:p-12 shadow-xl">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Plan Your Next Asian Holiday with <span className="chrome-text">Areera Travels</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Receive genuine GDS flight reservations, embassy-compliant hotel vouchers, and
          personalized itineraries with dedicated consultation for any destination across Asia.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="royal-surface glow-ring shadow-lg font-semibold">
            <Link to="/services/visa">
              <Stamp className="mr-2 h-4 w-4" /> Request Custom Itinerary
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/80">
            <Link to="/countries">
              <Globe2 className="mr-2 h-4 w-4 text-primary" /> Browse All 50+ Destinations
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/80">
            <Link to="/flight-reservation">
              <Plane className="mr-2 h-4 w-4 text-primary" /> Flight Reservations
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
          >
            <a
              href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent("Hello Areera Travels, I would like a quote for a visa-free Asian holiday package.")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4 text-emerald-400" /> WhatsApp Specialist
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
