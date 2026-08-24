import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";
import { contactInfo } from "@/data/site";
import { breadcrumbSchema, faqPageSchema, organizationSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { contactArticle, contactFaqs } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Areera Travel and Tours — Phone, WhatsApp & Office" },
      {
        name: "description",
        content:
          "Contact Areera Travel and Tours for visa, ticketing, attestation and booking support. Office address, phone, WhatsApp, email and business hours.",
      },
      { property: "og:title", content: "Contact Areera Travel and Tours" },
      {
        property: "og:description",
        content: "Reach our travel consultants by phone, WhatsApp, email or at our office.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(contactFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Contact Us", item: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const tel = contactInfo.phone.replace(/\s/g, "");
  const wa = contactInfo.whatsapp.replace(/[^\d]/g, "");

  return (
    <Section>
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <SectionHeading
        align="left"
        eyebrow="Contact"
        title="Talk to a travel consultant"
        description="Send your query and we will respond during business hours with the next steps for your case."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="text-lg font-semibold">Office</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href={`tel:${tel}`} className="hover:text-foreground">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-foreground"
                >
                  Chat on WhatsApp
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

          <div className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Clock className="h-4 w-4 text-primary" aria-hidden /> Business hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Areera Travel and Tours office location"
              src="https://www.google.com/maps?q=Gulberg%20III%20Lahore&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <BookingForm
            title="Send us a message"
            detailLabel="Subject"
            detailPlaceholder="e.g. Turkey tourist visa"
            submitLabel="Send message"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Looking for a specific destination? Browse{" "}
            <Link to="/countries" className="text-primary hover:underline">
              visa destinations by region
            </Link>{" "}
            or start with{" "}
            <Link to="/services/visa" className="text-primary hover:underline">
              our visa assistance service
            </Link>
            .
          </p>
        </div>
      </div>
      <ContentArticle {...contactArticle} />
      <FaqSection items={contactFaqs} />
    </Section>
  );
}
