import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Lock,
  FileCheck,
  Eye,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/data/site";
import { breadcrumbSchema } from "@/lib/json-ld";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Areera Travel and Tours" },
      {
        name: "description",
        content:
          "Read the Areera Travel and Tours Privacy Policy. Learn how we handle passport details, visa files, flight bookings, and personal data with strict confidentiality.",
      },
      { property: "og:title", content: "Privacy Policy | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Our commitment to protecting your personal, passport, and travel documentation with bank-grade confidentiality and embassy-compliant processing.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Privacy Policy", item: "/privacy-policy" },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const keyGuarantees = [
  {
    icon: Lock,
    title: "Zero Data Brokerage",
    description: "We never sell, monetize, or license your passport or travel information to any marketing third parties.",
  },
  {
    icon: Shield,
    title: "Embassy-Only Disclosure",
    description: "Your documentation is shared exclusively with accredited embassies, consulates, and authorized airline GDS networks.",
  },
  {
    icon: Trash2,
    title: "Post-Filing Document Purge",
    description: "Sensitive financial and supporting records are permanently purged after visa issuance upon client request.",
  },
  {
    icon: Eye,
    title: "Transparent Consent",
    description: "Every document transmission and embassy filing is explicitly confirmed with you prior to submission.",
  },
];

const sections = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Data" },
  { id: "third-party-sharing", title: "4. Authorized Third-Party Disclosures" },
  { id: "security-retention", title: "5. Data Security & Document Retention" },
  { id: "your-rights", title: "6. Your Rights & Access Requests" },
  { id: "cookies", title: "7. Cookies & Website Analytics" },
  { id: "contact-dpo", title: "8. Contact Our Data Protection Desk" },
];

function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <Section className="py-10 sm:py-16">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      {/* Header Banner */}
      <div className="relative rounded-3xl border border-white/20 bg-card/80 p-6 sm:p-12 shadow-xl backdrop-blur-xl mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Client Confidentiality Guarantee</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          At Areera Travel and Tours, we understand that travel planning, visa filing, and document
          attestation involve sensitive personal and financial information. This Privacy Policy outlines
          our protocols for collecting, processing, and safeguarding your information.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            Last Updated: <strong className="text-foreground">{lastUpdated}</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            Applies to Web, WhatsApp & In-Office Consultations
          </span>
        </div>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {keyGuarantees.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={idx * 60}>
              <div className="card-elevate flex flex-col h-full rounded-2xl border border-border bg-card/70 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-semibold text-sm text-foreground">{item.title}</h2>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Content Layout with Sticky Quick-Navigation */}
      <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-card/70 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              On this page
            </p>
            <nav className="space-y-2">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1 truncate"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Have questions?</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <span>Email Privacy Desk</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </aside>

        {/* Policy Body */}
        <article className="space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90">
          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">01.</span> Introduction & Scope
            </h2>
            <p className="text-muted-foreground">
              Areera Travel and Tours (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates travel consulting,
              visa filing assistance, flight reservation, hotel booking, and consular document attestation
              services headquartered at {contactInfo.address}.
            </p>
            <p className="mt-3 text-muted-foreground">
              This Privacy Policy explains how we collect, store, and process personal identification and
              travel details when you interact with our website, inquire through WhatsApp, or consult our
              agents in person. By utilizing our services, you acknowledge the processing practices outlined
              in this document.
            </p>
          </section>

          {/* 2. Information Collected */}
          <section id="information-collected" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">02.</span> Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              To fulfill visa regulations, book tickets with airlines, and meet consular requirements, we
              may collect the following categories of information:
            </p>
            <div className="space-y-3">
              <div className="rounded-xl border border-border/80 bg-background/50 p-4">
                <h3 className="font-semibold text-sm text-foreground">A. Primary Traveler Identification</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Full name (as printed on passport), date of birth, nationality, national identity card (CNIC)
                  number, passport number, issue date, expiration date, and biometric passport scan copies.
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-background/50 p-4">
                <h3 className="font-semibold text-sm text-foreground">B. Contact & Communication Data</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  WhatsApp contact number, mobile telephone numbers, email addresses, and residential/business
                  mailing addresses for courier delivery of attested files.
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-background/50 p-4">
                <h3 className="font-semibold text-sm text-foreground">C. Embassy Visa File Supporting Materials</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  When contracted for visa application dossiers: employment reference letters, salary slips,
                  bank account maintenance certificates, educational degrees (for MOFA/Embassy attestation),
                  and family relationship records as demanded by specific embassies.
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-background/50 p-4">
                <h3 className="font-semibold text-sm text-foreground">D. Itinerary & Booking Details</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Departure city, destination sectors, preferred airline carriers, seating/meal preferences,
                  hotel stay duration, and frequent flyer numbers.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Data */}
          <section id="how-we-use" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">03.</span> How We Use Your Data
            </h2>
            <p className="text-muted-foreground mb-3">
              Your data is processed strictly to execute the services requested by you:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">Airline Reservations & Ticketing:</strong> Entering traveler
                names into Global Distribution Systems (GDS) such as Sabre and Amadeus to issue verifiable PNRs
                and confirmed airline e-tickets.
              </li>
              <li>
                <strong className="text-foreground">Visa Application Preparation:</strong> Completing official
                visa portals, scheduling biometric appointments, and verifying dossier checklists.
              </li>
              <li>
                <strong className="text-foreground">Consular Attestation:</strong> Submitting educational,
                commercial, or personal documents to the Ministry of Foreign Affairs (MOFA) and designated embassies.
              </li>
              <li>
                <strong className="text-foreground">Customer Support:</strong> Providing real-time updates on
                application progress, visa approvals, and flight gate/schedule changes via WhatsApp or telephone.
              </li>
              <li>
                <strong className="text-foreground">Financial Record Keeping:</strong> Generating tax invoices
                and maintaining commercial accounts in compliance with Pakistani revenue authorities.
              </li>
            </ul>
          </section>

          {/* 4. Third-Party Sharing */}
          <section id="third-party-sharing" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">04.</span> Authorized Third-Party Disclosures
            </h2>
            <p className="text-muted-foreground mb-3">
              We never sell or rent your information to advertisers. Your data is disclosed solely to authorized
              entities required to deliver travel services:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">Embassies & Consular Missions</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Official government diplomatic missions evaluating your visa entry application.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">Visa Application Centers</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Accredited biometric processing partners including Gerry&apos;s Visa, VFS Global, and TLScontact.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">Airlines & Hospitality Providers</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  IATA airlines and hotel suppliers generating confirmed booking vouchers under your legal name.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">Attestation Authorities</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Higher Education Commission (HEC), IBCC, Chamber of Commerce, and MOFA offices.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Security & Retention */}
          <section id="security-retention" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">05.</span> Data Security & Document Retention
            </h2>
            <p className="text-muted-foreground">
              We apply strict administrative and digital security measures to protect your documents against
              unauthorized access or loss:
            </p>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>Digital communication over SSL/TLS encrypted transport.</li>
              <li>Role-based workstation access restricted to senior consultants handling your specific file.</li>
              <li>Physical copies kept in locked, monitored documentation cabinets prior to submission.</li>
              <li>
                <strong className="text-foreground">Purging Policy:</strong> Supporting financial records (e.g.
                bank statements, tax documents) are permanently shredded or deleted within 30 days of visa decision
                notification, unless prolonged retention is explicitly instructed by you.
              </li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section id="your-rights" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">06.</span> Your Rights & Access Requests
            </h2>
            <p className="text-muted-foreground mb-3">
              As a valued client, you retain complete authority over your personal records:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li><strong className="text-foreground">Right of Access:</strong> Request a copy of all information held on your profile.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Request instant correction of misspelled names, dates, or contact details.</li>
              <li><strong className="text-foreground">Right to Erasure:</strong> Request the deletion of remaining scanned documents upon conclusion of your trip.</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Opt out of future travel deal announcements or WhatsApp advisory broadcasts at any time.</li>
            </ul>
          </section>

          {/* 7. Cookies & Analytics */}
          <section id="cookies" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">07.</span> Cookies & Website Analytics
            </h2>
            <p className="text-muted-foreground">
              Our website uses privacy-respecting cookies and local storage exclusively to remember your site
              theme preferences, preserve your selected destination filter states, and ensure smooth routing.
              We do not track you across third-party websites or engage in behavioral ad retargeting networks.
            </p>
          </section>

          {/* 8. Contact DPO */}
          <section id="contact-dpo" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">08.</span> Contact Our Data Protection Desk
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions regarding this Privacy Policy, wish to exercise your data rights, or
              request an immediate purge of your completed application records, contact our dedicated team:
            </p>

            <div className="rounded-2xl border border-border bg-card/80 p-6">
              <h3 className="font-bold text-foreground">Areera Travel and Tours — Privacy & Compliance</h3>
              <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </div>

      {/* Back to Homepage and Quick Consultation Strip */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground text-sm">Need immediate visa assistance?</p>
          <p className="text-xs text-muted-foreground">Consult with an experienced travel agent today.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <span>Contact Consultants</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-card"
          >
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
