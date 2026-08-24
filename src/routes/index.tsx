import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  Globe2,
  Headset,
  PhoneCall,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Stamp,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-flight.jpg";
import { Section, SectionHeading, Divider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ServiceCard, CountryCard, TestimonialCard } from "@/components/cards";
import { countries, popularDestinations } from "@/data/countries";
import { services, siteConfig, testimonials } from "@/data/site";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, faqPageSchema } from "@/lib/json-ld";
import { ContentArticle } from "@/components/ContentArticle";
import { FaqSection } from "@/components/FaqSection";
import { homeArticle, homeFaqs } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation" },
      {
        name: "description",
        content:
          "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations.",
      },
      { property: "og:title", content: "Areera Travel and Tours — Visa & Travel Experts" },
      {
        property: "og:description",
        content:
          "Premium visa filing, air ticketing, and attestation support for travellers across Asia, Middle East, Europe, and Africa.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", item: "/" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqPageSchema(homeFaqs)),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const popular = popularDestinations
    .map((slug) => countries.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      {/* Luxury Hero Banner */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Airliner wing flying over world city lights"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

        {/* Decorative lighting glows */}
        <div
          aria-hidden
          className="animate-orbit absolute -right-24 top-10 h-72 w-72 rounded-full border border-primary/30 opacity-40 sm:h-96 sm:w-96"
        />
        <div
          aria-hidden
          className="animate-float absolute left-8 top-28 text-3xl opacity-30 sm:text-4xl"
        >
          ✈
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Areera Travel & Tours</span>
          </div>

          <h1 className="animate-fade-up mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
            Your journey, <span className="chrome-text">planned properly</span> from paperwork to
            departure.
          </h1>

          <p className="animate-fade-up mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Certified visa filing support, air ticketing, consular attestation, luxury hotel
            bookings, and verified flight reservations for more than 40 destinations worldwide.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="royal-surface glow-ring shadow-lg hover:scale-[1.02] transition-transform"
            >
              <Link to="/services/visa">
                <Stamp className="mr-2 h-4 w-4" /> Get Visa Assistance
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/80 bg-card/60 backdrop-blur-md"
            >
              <Link to="/flight-reservation">
                <PlaneTakeoff className="mr-2 h-4 w-4 text-primary" /> Book a Flight
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/80 bg-card/60 backdrop-blur-md"
            >
              <Link to="/countries">
                <Globe2 className="mr-2 h-4 w-4 text-amber-400" /> Explore Destinations
              </Link>
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="animate-fade-up mt-14 grid max-w-3xl grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-3">
            {[
              { icon: Globe2, label: "40+ Countries Covered", color: "text-primary" },
              { icon: ShieldCheck, label: "100% Embassy Compliance", color: "text-emerald-400" },
              { icon: Headset, label: "Dedicated File Consultant", color: "text-amber-400" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-muted-foreground"
              >
                <Icon className={`h-4 w-4 shrink-0 ${color}`} aria-hidden />
                <span className="text-foreground/90">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Travel services under one roof"
          description="Every service is handled by a certified travel consultant who reviews your documentation before submission."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all travel & visa services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Section>

      <Divider />

      {/* Popular Destinations Grid */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Global Reach
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Popular Visa Destinations
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Country guides featuring high-resolution country flags, visa types, official document
              checklists, and turnaround times.
            </p>
          </div>
          <Link
            to="/countries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            View All 40+ Countries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <CountryCard country={c} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-border/80 bg-card/60">
            <Link to="/countries">
              <Globe2 className="mr-2 h-4 w-4 text-primary" /> Browse All Destinations by Region
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Areera"
              title="Careful work beats big promises"
              description="We do not make unrealistic promises — visa decisions belong exclusively to embassies. What we guarantee is rigorous preparation, error-free documentation, and transparent communication."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="royal-surface glow-ring">
                <Link to="/about">About Our Agency</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Speak With a Consultant</Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BadgeCheck,
                title: "Checklist-Driven Filing",
                body: "Every application starts with a bespoke checklist tailored to your target destination and profile.",
                badgeColor: "text-emerald-400",
              },
              {
                icon: Clock,
                title: "Realistic Timelines",
                body: "We provide published embassy processing timelines with live updates at every stage.",
                badgeColor: "text-primary",
              },
              {
                icon: ShieldCheck,
                title: "Genuine Verification",
                body: "100% embassy-verifiable hotel vouchers, flight reservations, and authorized attestations.",
                badgeColor: "text-amber-400",
              },
              {
                icon: Headset,
                title: "Accessible Specialists",
                body: "Direct WhatsApp and telephone consultation with the dedicated specialist managing your file.",
                badgeColor: "text-primary",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card-elevate h-full rounded-2xl border border-border/80 bg-card/75 p-5 shadow-xs backdrop-blur-md">
                  <item.icon className={`mb-3 h-6 w-6 ${item.badgeColor}`} aria-hidden />
                  <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Testimonials */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <SectionHeading eyebrow="Client Reviews" title="Trusted by World Travellers" />
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          {testimonials.map((t) => (
            <div key={t.name} className="w-[85%] shrink-0 snap-center sm:w-[45%] lg:w-[31%]">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Swipe to read client feedback
        </p>
      </Section>

      {/* Content & FAQs */}
      <Section>
        <ContentArticle {...homeArticle} />
        <FaqSection items={homeFaqs} />
      </Section>

      {/* Bottom CTA Banner */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-navy/80 to-navy-deep p-8 text-center sm:p-14 shadow-2xl">
            <div aria-hidden className="animate-float absolute right-8 top-8 text-5xl opacity-20">
              ✈
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Start Your Journey
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-4xl">
              Where would you like to travel next?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base leading-relaxed">
              Share your target destination and travel dates with us. We will provide the exact
              document checklist, embassy requirements, and immediate step-by-step guidance.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
              <Button asChild size="lg" className="royal-surface glow-ring shadow-lg">
                <Link to="/contact">
                  <PhoneCall className="mr-2 h-4 w-4" /> Contact a Consultant
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/80 bg-background/80"
              >
                <Link to="/services/visa">
                  <Stamp className="mr-2 h-4 w-4 text-emerald-400" /> Apply For Visa
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
