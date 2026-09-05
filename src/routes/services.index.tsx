import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ServiceCard, CountryCard } from "@/components/cards";
import { services } from "@/data/site";
import { countries, popularVisaDestinations } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { servicesArticle, servicesFaqs } from "@/data/content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Travel Services — Visa, Ticketing & Attestation | Areera Travel and Tours" },
      {
        name: "description",
        content:
          "Explore travel services by Areera Travel and Tours: professional visa filing, domestic and international ticketing, document attestation, and hotel bookings.",
      },
      { property: "og:title", content: "Travel Services — Visa, Ticketing & Attestation | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Full suite of travel services: expert visa advisory, confirmed flight ticketing, consular document attestation, and visa-compliant hotel reservations.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(servicesFaqs)),
      },
      ...services.map((s) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify(serviceSchema(s)),
      })),
    ],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  const popular = popularVisaDestinations
    .map((s) => countries.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <SectionHeading
        align="left"
        eyebrow="Services"
        title="Everything you need between planning and boarding"
        description="Choose a service to see the process, required documents and how to get started."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          align="left"
          eyebrow="Popular with our clients"
          title="Top visa destinations"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>
      </div>
      <ContentArticle {...servicesArticle} />
      <FaqSection items={servicesFaqs} />
    </Section>
  );
}
