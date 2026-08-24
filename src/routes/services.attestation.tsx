import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CountryCard } from "@/components/cards";
import { RelatedServices } from "@/components/RelatedServices";
import { BookingForm } from "@/components/BookingForm";
import { attestationCountries, countries } from "@/data/countries";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { attestationArticle, attestationFaqs } from "@/data/content";

export const Route = createFileRoute("/services/attestation")({
  head: () => ({
    meta: [
      { title: "Document Attestation Services — Educational & Commercial | Areera" },
      {
        name: "description",
        content:
          "Educational, personal and commercial document attestation: notary, board/HEC, Ministry of Foreign Affairs and embassy stages handled in the correct order.",
      },
      { property: "og:title", content: "Attestation Services | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Degree, marriage certificate and commercial document attestation for Gulf employment and residency.",
      },
      { property: "og:url", content: "/services/attestation" },
    ],
    links: [{ rel: "canonical", href: "/services/attestation" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(attestationFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Attestation Services", item: "/services/attestation" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            title: "Attestation Services",
            description:
              "Notary, HEC/board, Ministry of Foreign Affairs and embassy attestation handled in the correct order, with tracking at each stage.",
            path: "/services/attestation",
          }),
        ),
      },
    ],
  }),
  component: AttestationPage,
});

const docTypes = [
  {
    title: "Educational documents",
    items: [
      "Degrees and transcripts",
      "Matric and intermediate certificates",
      "Diplomas and technical certificates",
    ],
  },
  {
    title: "Personal documents",
    items: [
      "Birth and marriage certificates",
      "Family registration certificate",
      "Police character certificate",
      "Affidavits and authority letters",
    ],
  },
  {
    title: "Commercial documents",
    items: [
      "Company registration papers",
      "Export invoices and certificates of origin",
      "Board resolutions and agreements",
    ],
  },
];

const timeline = [
  {
    title: "Verification",
    body: "Issuing board, university or HEC verification of the original document.",
  },
  {
    title: "Notary / regional office",
    body: "Notarisation or regional attestation where the document type requires it.",
  },
  {
    title: "Ministry of Foreign Affairs",
    body: "MOFA attestation confirming the preceding seals and signatures.",
  },
  {
    title: "Embassy or consulate",
    body: "Final attestation by the destination country's mission.",
  },
];

function AttestationPage() {
  const list = attestationCountries
    .map((s) => countries.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <Section>
      <Breadcrumbs
        items={[{ label: "Services", to: "/services" }, { label: "Attestation Services" }]}
      />
      <SectionHeading
        align="left"
        eyebrow="Attestation"
        title="Document attestation without the office queues"
        description="Attestation must follow a strict order. We manage each stage and tell you exactly where your documents are."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {docTypes.map((d, i) => (
          <Reveal key={d.title} delay={i * 70}>
            <div className="card-elevate h-full rounded-2xl border border-border bg-card/70 p-6">
              <h3 className="font-semibold">{d.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {d.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold">Process timeline</h2>
        <ol className="mt-6 space-y-4 border-l border-border pl-6">
          {timeline.map((t, i) => (
            <li key={t.title} className="relative">
              <span className="royal-surface absolute -left-[31px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="font-medium">{t.title}</p>
              <p className="text-sm text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Overall duration depends on the issuing authority and the destination embassy's current
          workload; we confirm the expected window before starting.
        </p>
      </div>

      <div className="mt-16">
        <SectionHeading
          align="left"
          eyebrow="Where it is needed"
          title="Countries that commonly require attestation"
          description="Gulf employment, residency and family visas almost always require attested educational and personal documents."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <BookingForm
          title="Attestation inquiry"
          description="Tell us which document you need attested and for which country."
          detailLabel="Document type & destination"
          detailPlaceholder="e.g. BSc degree for Saudi Arabia"
          submitLabel="Request attestation support"
        />
      </div>

      <ContentArticle {...attestationArticle} />
      <FaqSection items={attestationFaqs} />

      <RelatedServices exclude="attestation" />
    </Section>
  );
}
