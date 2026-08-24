import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { RelatedServices } from "@/components/RelatedServices";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { ticketArticle, ticketFaqs } from "@/data/content";

export const Route = createFileRoute("/services/ticket")({
  head: () => ({
    meta: [
      { title: "Air Ticket Booking — Domestic & International | Areera" },
      {
        name: "description",
        content:
          "Domestic and international air ticketing with fare comparison, group bookings, date changes and itinerary support from Areera Travel and Tours.",
      },
      { property: "og:title", content: "Ticket Booking | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Compare fares, book group travel and manage changes with a dedicated ticketing consultant.",
      },
      { property: "og:url", content: "/services/ticket" },
    ],
    links: [{ rel: "canonical", href: "/services/ticket" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(ticketFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Ticket Booking", item: "/services/ticket" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            title: "Ticket Booking",
            description:
              "Fare comparison across airlines, group bookings, date changes and 24/7 itinerary support for domestic and international routes.",
            path: "/services/ticket",
          }),
        ),
      },
    ],
  }),
  component: TicketPage,
});

function TicketPage() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Ticket Booking" }]} />
      <SectionHeading
        align="left"
        eyebrow="Ticket booking"
        title="Domestic and international air ticketing"
        description="We compare fares across airlines and route options, then issue tickets once you approve the itinerary in writing."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            title: "Domestic ticketing",
            body: "All major domestic carriers and routes, including same-day issuance, student and senior fares where airlines offer them, and rebooking support.",
            points: [
              "Instant e-ticket delivery",
              "Baggage allowance guidance",
              "Date change handling",
            ],
          },
          {
            title: "International ticketing",
            body: "Long-haul, Gulf and regional routes with multi-city itineraries, layover planning and visa-compliant scheduling.",
            points: [
              "Multi-city and open-jaw fares",
              "Group and family bookings",
              "Umrah and pilgrimage travel",
            ],
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div className="card-elevate h-full rounded-2xl border border-border bg-card/70 p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Need a reservation for a visa file?</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Embassies usually require a verifiable flight reservation rather than a paid ticket. Use
          our reservation service, then convert it into a confirmed ticket after approval.
        </p>
        <Button asChild className="mt-5">
          <Link to="/flight-reservation">Request a flight reservation</Link>
        </Button>
      </div>

      <div className="mt-16">
        <BookingForm
          title="Ticket inquiry"
          description="Share your route and travel dates and we will send fare options."
          detailLabel="Route (from – to)"
          detailPlaceholder="e.g. Lahore – Dubai"
          submitLabel="Request fare options"
        />
      </div>

      <ContentArticle {...ticketArticle} />
      <FaqSection items={ticketFaqs} />

      <RelatedServices exclude="ticket" />
    </Section>
  );
}
