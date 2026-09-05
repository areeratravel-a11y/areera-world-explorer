import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  CheckCircle2,
  Clock,
  Globe2,
  Headset,
  PhoneCall,
  PlaneTakeoff,
  ShieldCheck,
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
import { HeroBookingCard } from "@/components/HeroBookingCard";
import { homeIndexSchema } from "@/lib/json-ld";
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
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Areera Travel and Tours — Global Travel & Visa Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeIndexSchema(homeFaqs)),
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
          fetchPriority="high"
          decoding="async"
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Hero Value Proposition & Direct CTAs */}
            <div className="lg:col-span-7">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary shadow-xs">
                <span>Areera Travel & Tours</span>
              </div>

              <h1 className="animate-fade-up mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
                Your journey, <span className="chrome-text">planned properly</span> from paperwork to
                departure.
              </h1>

              <p className="animate-fade-up mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
                Certified visa filing support, air ticketing, consular attestation, luxury hotel
                bookings, and verified flight reservations for more than 40 destinations worldwide.
              </p>

              {/* Social proof rating */}
              <div className="animate-fade-up mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>
                  <strong className="font-semibold text-foreground">4.9/5 Rating</strong> from 1,200+ travellers
                </span>
              </div>

              {/* Above-the-fold Action Buttons */}
              <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="royal-surface glow-ring shadow-lg hover:scale-[1.02] transition-transform font-semibold"
                >
                  <Link to="/services/visa">
                    <Stamp className="mr-2 h-4 w-4" /> Get Visa Assistance
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 font-semibold"
                >
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Areera Travel, I would like to consult with an agent regarding visa and travel assistance.")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <PhoneCall className="mr-2 h-4 w-4 text-emerald-400" /> WhatsApp Specialist
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/80 bg-card/60 backdrop-blur-md"
                >
                  <Link to="/countries">
                    <Globe2 className="mr-2 h-4 w-4 text-amber-400" /> 40+ Destinations
                  </Link>
                </Button>
              </div>

              {/* Trust Highlights */}
              <div className="animate-fade-up mt-12 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
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

            {/* Right Column: Interactive Above-the-Fold Booking Card */}
            <div className="lg:col-span-5">
              <HeroBookingCard />
            </div>
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
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-muted hover:text-primary transition-colors shrink-0"
          >
            <Globe2 className="h-3.5 w-3.5 text-primary" />
            <span>View All 50+ Destinations</span>
            <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
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

      {/* Featured Travel Intelligence & Specialized Hubs */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-blue-950/70 via-slate-950/90 to-cyan-950/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Globe2 className="h-3.5 w-3.5" /> 2026 Travel Intelligence
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Visa-Free & Simplified <span className="chrome-text">Asian Destinations</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Planning your next international trip? Discover the top visa-free, e-visa, and fast-track entry policies for Asian destinations with typical holiday package budgets and verified flight connectivity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button asChild size="lg" className="royal-surface glow-ring shadow-lg font-semibold">
                <Link to="/guides/visa-free-asian-destinations">
                  <span>Explore Asian Travel Guide</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link to="/countries">Browse All 50+ Countries</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-6">
            <Link
              to="/flight-reservation"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-white/10 transition-colors group"
            >
              <PlaneTakeoff className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-cyan-300">Flight Reservations</p>
                <p className="text-xs text-slate-400">Verifiable embassy PNRs for your visa file</p>
              </div>
            </Link>
            <Link
              to="/hotel-booking"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-amber-400/40 hover:bg-white/10 transition-colors group"
            >
              <BedDouble className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-amber-300">Hotel Bookings</p>
                <p className="text-xs text-slate-400">Confirmed embassy-compliant vouchers</p>
              </div>
            </Link>
            <Link
              to="/services/attestation"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400/40 hover:bg-white/10 transition-colors group"
            >
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300">Document Attestation</p>
                <p className="text-xs text-slate-400">MOFA, HEC & foreign embassy legalization</p>
              </div>
            </Link>
          </div>
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
          <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-navy/80 to-navy-deep p-8 text-center sm:p-14 shadow-2xl">
            <div aria-hidden className="animate-float absolute right-8 top-8 text-5xl opacity-20">
              ✈
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Start Your Journey
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
