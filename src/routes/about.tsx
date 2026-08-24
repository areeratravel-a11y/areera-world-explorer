import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Target } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, faqPageSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { aboutArticle, aboutFaqs } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Areera Travel and Tours — Our Story & Team" },
      {
        name: "description",
        content:
          "Areera Travel and Tours helps travellers with visa filing, ticketing and attestation. Meet the team and read how we work.",
      },
      { property: "og:title", content: "About Areera Travel and Tours" },
      {
        property: "og:description",
        content: "Our story, mission and the consultants behind every application we file.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify(faqPageSchema(aboutFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "About Us", item: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: About,
});

const team = [
  { name: "Ahmed Hassan", role: "Founder & Managing Director", initials: "AH" },
  { name: "Rabia Khan", role: "Head of Visa Documentation", initials: "RK" },
  { name: "Usman Tariq", role: "Senior Ticketing Consultant", initials: "UT" },
  { name: "Mariam Shah", role: "Attestation Coordinator", initials: "MS" },
];

const milestones = [
  {
    year: "Founded",
    body: "Areera Travel and Tours opens with a single desk and a focus on visa documentation.",
  },
  {
    year: "Ticketing",
    body: "IATA-standard air ticketing added for domestic and international routes.",
  },
  {
    year: "Attestation",
    body: "Dedicated attestation desk launched for educational and commercial documents.",
  },
  { year: "Today", body: "Country-by-country guidance across Asia, the Middle East and Africa." },
];

function About() {
  return (
    <Section>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <SectionHeading
        align="left"
        eyebrow="About us"
        title="A travel agency built on documentation discipline"
        description="Areera Travel and Tours began because too many travellers were losing time and money to incomplete paperwork. We fixed that with checklists, honest timelines and one consultant per file."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Target,
            title: "Our mission",
            body: "Make international travel accessible by removing the confusion around visas and documentation.",
          },
          {
            icon: Compass,
            title: "Our vision",
            body: "To be the agency travellers recommend because we told them the truth about their case.",
          },
          {
            icon: HeartHandshake,
            title: "Our promise",
            body: "No guaranteed approvals, no hidden charges — a clear scope of work agreed before we start.",
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <div className="card-elevate h-full rounded-2xl border border-border bg-card/70 p-6">
              <c.icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
              <h2 className="font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold">Our journey</h2>
        <ol className="mt-6 space-y-5 border-l border-border pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="royal-surface absolute -left-[29px] top-1.5 h-3 w-3 rounded-full" />
              <p className="font-medium">{m.year}</p>
              <p className="text-sm text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <SectionHeading align="left" eyebrow="Team" title="The people on your file" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="card-elevate h-full rounded-2xl border border-border bg-card/70 p-6 text-center">
                <span className="royal-surface glow-ring mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold text-primary-foreground">
                  {t.initials}
                </span>
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/contact">Talk to a consultant</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/services">See our travel services</Link>
        </Button>
      </div>
      <ContentArticle {...aboutArticle} />
      <FaqSection items={aboutFaqs} />
    </Section>
  );
}
