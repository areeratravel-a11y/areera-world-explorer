import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BedDouble, MapPin, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { RelatedServices } from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { countries } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { hotelArticle, hotelFaqs } from "@/data/content";

type HotelSearch = { destination?: string | undefined };

export const Route = createFileRoute("/hotel-booking")({
  validateSearch: (search: Record<string, unknown>): HotelSearch => ({
    destination:
      typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Hotel Booking — Verified Stays & Visa-Ready Reservations | Areera" },
      {
        name: "description",
        content:
          "Request hotel bookings across Asia, the Middle East and Africa, including confirmed reservations suitable for visa applications.",
      },
      { property: "og:title", content: "Hotel Booking | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Hand-picked hotels and visa-compliant reservations arranged by our travel consultants.",
      },
      { property: "og:url", content: "/hotel-booking" },
    ],
    links: [{ rel: "canonical", href: "/hotel-booking" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(hotelFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Hotel Booking", item: "/hotel-booking" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            title: "Hotel Booking",
            description:
              "Hand-picked stays across every price band, with confirmed bookings suitable for visa applications.",
            path: "/hotel-booking",
          }),
        ),
      },
    ],
  }),
  component: HotelBooking,
});

const featured = [
  { name: "Marina Skyline Suites", city: "Dubai, UAE", tag: "City view · Metro nearby" },
  {
    name: "Bosphorus Heritage Hotel",
    city: "Istanbul, Turkey",
    tag: "Old town · Breakfast included",
  },
  {
    name: "Al Haram Residence",
    city: "Makkah, Saudi Arabia",
    tag: "Walking distance · Family rooms",
  },
  { name: "Bukit Bintang Grand", city: "Kuala Lumpur, Malaysia", tag: "Shopping district · Pool" },
  { name: "Nile Court Cairo", city: "Cairo, Egypt", tag: "Riverside · Airport transfer" },
  { name: "Sukhumvit Garden Inn", city: "Bangkok, Thailand", tag: "BTS access · Rooftop" },
];

function HotelBooking() {
  const { destination } = Route.useSearch();
  const country = countries.find((c) => c.slug === destination);
  const [dest, setDest] = useState(country?.name ?? destination ?? "");

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Hotel Booking" }]} />
      <SectionHeading
        align="left"
        eyebrow="Hotel booking"
        title="Stays that match your itinerary and your visa file"
        description="Tell us the destination and dates. We send options with confirmed, verifiable reservations."
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            value={dest}
            maxLength={60}
            onChange={(e) => setDest(e.target.value)}
            placeholder="City or country"
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="checkin">Check-in</Label>
          <Input id="checkin" type="date" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="checkout">Check-out</Label>
          <Input id="checkout" type="date" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="guests">Guests</Label>
          <Input id="guests" type="number" min={1} max={20} defaultValue={2} className="mt-1.5" />
        </div>
        <p className="text-xs text-muted-foreground sm:col-span-2 lg:col-span-4">
          Enter your details above, then submit the inquiry form below — a consultant will send
          availability and pricing.
        </p>
      </form>

      {country ? (
        <div className="mt-6 rounded-2xl border border-primary/40 bg-card/60 p-5">
          <p className="text-sm text-muted-foreground">Planning a trip to</p>
          <p className="mt-1 text-lg font-semibold">
            {country.flag} {country.name}
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
              to="/flight-reservation"
              search={{ destination: country.slug }}
              className="text-primary hover:underline"
            >
              Book flights to {country.capital}
            </Link>
          </div>
        </div>
      ) : null}

      <div className="mt-16">
        <SectionHeading align="left" eyebrow="Featured" title="Popular stays with our travellers" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((h, i) => (
            <Reveal key={h.name} delay={i * 60}>
              <article className="card-elevate h-full rounded-2xl border border-border bg-card/70 p-6">
                <BedDouble className="mb-4 h-6 w-6 text-primary" aria-hidden />
                <h3 className="font-semibold">{h.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {h.city}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {h.tag}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Availability and rates are confirmed with the property at the time of booking.
        </p>
      </div>

      <div className="mt-16">
        <BookingForm
          title="Hotel booking inquiry"
          detailLabel="Destination & dates"
          detailPlaceholder="e.g. Dubai, 12–18 Sep"
          defaultDetail={dest}
          submitLabel="Request hotel options"
        />
      </div>

      <div className="mt-10">
        <Button asChild variant="outline">
          <Link to="/countries">Browse destinations by region</Link>
        </Button>
      </div>

      <ContentArticle {...hotelArticle} />
      <FaqSection items={hotelFaqs} />

      <RelatedServices exclude="hotel-booking" />
    </Section>
  );
}
