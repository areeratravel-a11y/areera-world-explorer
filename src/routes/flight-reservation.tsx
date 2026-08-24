import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlaneTakeoff } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countries } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { flightArticle, flightFaqs } from "@/data/content";

type FlightSearch = { destination?: string | undefined };

export const Route = createFileRoute("/flight-reservation")({
  validateSearch: (search: Record<string, unknown>): FlightSearch => ({
    destination:
      typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Flight Reservation — Visa-Ready Bookings & Ticketing | Areera" },
      {
        name: "description",
        content:
          "Request verifiable flight reservations for embassy submission and confirmed tickets after approval, on domestic and international routes.",
      },
      { property: "og:title", content: "Flight Reservation | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Verifiable flight reservations for visa files, plus confirmed ticketing when you are ready to fly.",
      },
      { property: "og:url", content: "/flight-reservation" },
    ],
    links: [{ rel: "canonical", href: "/flight-reservation" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(flightFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Flight Reservation", item: "/flight-reservation" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            title: "Flight Reservation",
            description:
              "Verifiable flight reservations for embassy submission, plus confirmed ticketing when your visa is approved.",
            path: "/flight-reservation",
          }),
        ),
      },
    ],
  }),
  component: FlightReservation,
});

const routes = [
  { from: "Lahore", to: "Dubai" },
  { from: "Karachi", to: "Jeddah" },
  { from: "Islamabad", to: "Istanbul" },
  { from: "Lahore", to: "Kuala Lumpur" },
  { from: "Karachi", to: "Doha" },
  { from: "Islamabad", to: "Baku" },
];

function FlightReservation() {
  const { destination } = Route.useSearch();
  const country = countries.find((c) => c.slug === destination);
  const [to, setTo] = useState(country?.name ?? destination ?? "");

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Flight Reservation" }]} />
      <SectionHeading
        align="left"
        eyebrow="Flight reservation"
        title="Reservations embassies can verify"
        description="We issue genuine airline reservations with a PNR you can present, and convert them into confirmed tickets whenever you decide."
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        <div>
          <Label htmlFor="from">From</Label>
          <Input id="from" maxLength={60} placeholder="Departure city" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            maxLength={60}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Destination city"
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="depart">Departure</Label>
          <Input id="depart" type="date" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="passengers">Passengers</Label>
          <Input
            id="passengers"
            type="number"
            min={1}
            max={20}
            defaultValue={1}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="cabin">Class</Label>
          <select
            id="cabin"
            className="mt-1.5 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm outline-none focus:border-ring"
          >
            <option className="bg-card">Economy</option>
            <option className="bg-card">Premium economy</option>
            <option className="bg-card">Business</option>
            <option className="bg-card">First</option>
          </select>
        </div>
        <p className="text-xs text-muted-foreground sm:col-span-2 lg:col-span-5">
          Fill in your route above, then send the inquiry below — we reply with reservation options.
        </p>
      </form>

      {country ? (
        <div className="mt-6 rounded-2xl border border-primary/40 bg-card/60 p-5">
          <p className="text-lg font-semibold">
            {country.flag} Flights to {country.name}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link
              to="/countries/$slug"
              params={{ slug: country.slug }}
              className="text-primary hover:underline"
            >
              {country.name} visa requirements
            </Link>
            <Link
              to="/hotel-booking"
              search={{ destination: country.slug }}
              className="text-primary hover:underline"
            >
              Hotels in {country.capital}
            </Link>
          </div>
        </div>
      ) : null}

      <div className="mt-16">
        <SectionHeading align="left" eyebrow="Routes" title="Popular routes we book" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal key={`${r.from}-${r.to}`} delay={i * 50}>
              <div className="card-elevate flex items-center gap-3 rounded-xl border border-border bg-card/70 p-4">
                <PlaneTakeoff className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <p className="min-w-0 truncate text-sm font-medium">
                  {r.from} → {r.to}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <BookingForm
          title="Flight reservation inquiry"
          detailLabel="Route & travel dates"
          detailPlaceholder="e.g. Lahore – Dubai, 12 Sep"
          defaultDetail={to ? `To ${to}` : ""}
          submitLabel="Request reservation"
        />
      </div>

      <ContentArticle {...flightArticle} />
      <FaqSection items={flightFaqs} />

      <RelatedServices exclude="flight-reservation" />
    </Section>
  );
}
