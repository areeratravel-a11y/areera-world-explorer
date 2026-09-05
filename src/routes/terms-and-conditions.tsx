import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  AlertTriangle,
  Scale,
  ShieldAlert,
  CheckCircle2,
  Clock,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Plane,
  Building,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/data/site";
import { breadcrumbSchema } from "@/lib/json-ld";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Service Agreement | Areera Travel and Tours" },
      {
        name: "description",
        content:
          "Read the Terms and Conditions for Areera Travel and Tours. Clear guidelines on visa filing, flight booking, hotel vouchers, and consular attestation services.",
      },
      {
        name: "keywords",
        content:
          "terms and conditions areera travel, visa filing terms, flight booking and attestation policy",
      },
      { property: "og:title", content: "Terms and Conditions | Areera Travel and Tours" },
      {
        property: "og:description",
        content:
          "Service terms, embassy filing disclaimers, airline ticket rules, and refund policies for Areera Travel and Tours clients.",
      },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Terms and Conditions", item: "/terms-and-conditions" },
          ]),
        ),
      },
    ],
  }),
  component: TermsPage,
});

const keyPrinciples = [
  {
    icon: Scale,
    title: "Sole Embassy Sovereignty",
    description: "Visa issuance decisions, processing durations, and entry approvals rest entirely with foreign diplomatic missions.",
  },
  {
    icon: Plane,
    title: "IATA Carrier Fare Rules",
    description: "Ticket cancellations, date adjustments, and baggage limits are governed by the operating airline's published fare conditions.",
  },
  {
    icon: ShieldAlert,
    title: "Non-Refundable Filing Fees",
    description: "Government visa fees, biometric charges, and embassy application costs are strictly non-refundable once remitted.",
  },
  {
    icon: CheckCircle2,
    title: "Authentic Document Warranty",
    description: "Clients warrant that all passports, bank records, and educational credentials presented for filing are genuine and authentic.",
  },
];

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services-scope", title: "2. Scope of Services" },
  { id: "visa-disclaimer", title: "3. Visa Filing & Embassy Disclaimers" },
  { id: "flight-reservations", title: "4. Flight Reservations & Ticketing Rules" },
  { id: "hotel-bookings", title: "5. Hotel Accommodation Vouchers" },
  { id: "document-attestation", title: "6. Consular Document Attestation" },
  { id: "payments-refunds", title: "7. Payments, Fees & Refund Policy" },
  { id: "liability-governing-law", title: "8. Limitation of Liability & Law" },
];

function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <Section className="py-10 sm:py-16">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

      {/* Hero Banner */}
      <div className="relative rounded-2xl border border-white/20 bg-card/80 p-6 sm:p-12 shadow-xl backdrop-blur-xl mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
          <span>Official Service Terms</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          These Terms and Conditions govern your engagement with Areera Travel and Tours. Please read
          these terms carefully before purchasing tickets, requesting visa file preparation, or submitting
          documents for attestation.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            Last Updated: <strong className="text-foreground">{lastUpdated}</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            Binding Service Agreement
          </span>
        </div>
      </div>

      {/* 4 Core Legal Principles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {keyPrinciples.map((item, idx) => {
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

      {/* Main Content with Table of Contents */}
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
              <p className="text-xs text-muted-foreground mb-2">Need clarification?</p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                <span>Call Legal Desk</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </aside>

        {/* Legal Body */}
        <article className="space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90">
          {/* 1. Acceptance */}
          <section id="acceptance" className="scroll-mt-24">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">01.</span> Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing our website, initiating a WhatsApp booking, or engaging Areera Travel and Tours
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) for visa filing, air ticketing, hotel reservations, or
              attestation, you (&quot;Client&quot;, &quot;Passenger&quot;) accept and agree to be legally bound by these
              Terms and Conditions.
            </p>
            <p className="mt-3 text-muted-foreground">
              If you do not agree to these terms in their entirety, you should not authorize payment or
              submit documents for processing.
            </p>
          </section>

          {/* 2. Scope of Services */}
          <section id="services-scope" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">02.</span> Scope of Services
            </h2>
            <p className="text-muted-foreground mb-3">
              Areera Travel and Tours functions as an independent travel consultancy and facilitator:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">Visa Documentation:</strong> We audit requirements, draft
                embassy cover letters, complete visa application portals, verify sponsorship/bank paperwork,
                and secure consular appointment slots.
              </li>
              <li>
                <strong className="text-foreground">Flight Booking:</strong> We reserve airline seats via Global
                Distribution Systems (GDS) with verifiable PNR codes, and issue confirmed e-tickets upon payment.
              </li>
              <li>
                <strong className="text-foreground">Hotel Accommodations:</strong> We generate confirmed,
                embassy-verifiable hotel booking vouchers matching travel itineraries.
              </li>
              <li>
                <strong className="text-foreground">Document Attestation:</strong> We act as client couriers and
                coordinators submitting credentials to MOFA, IBCC, HEC, and foreign consulates.
              </li>
            </ul>
          </section>

          {/* 3. Visa Filing Disclaimer */}
          <section id="visa-disclaimer" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">03.</span> Visa Filing & Embassy Disclaimers
            </h2>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 mb-4 text-xs sm:text-sm text-amber-300 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <strong className="font-semibold block text-amber-200">Critical Embassy Disclaimer:</strong>
                Areera Travel and Tours is NOT an embassy, consulate, or government body. Visa issuance,
                processing timeframes, document interview calls, and visa refusals are at the sole, sovereign
                discretion of the relevant embassy or high commission.
              </div>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">No Guarantee of Visa Approval:</strong> We do not and cannot
                guarantee that any visa application will be granted. A complete and compliant file maximizes
                the prospect of success, but does not bind the visa officer.
              </li>
              <li>
                <strong className="text-foreground">Embassy Processing Timeframes:</strong> Timeframes quoted
                on our website (e.g. &quot;3 to 5 working days&quot;) are typical averages reported by consulates.
                Embassies reserve the right to extend processing for administrative background checks.
              </li>
              <li>
                <strong className="text-foreground">Non-Refundability of Embassy Fees:</strong> Government visa
                application fees, consular interview fees, and biometric center charges are non-refundable under
                all circumstances once paid, regardless of whether a visa is approved, delayed, or refused.
              </li>
            </ul>
          </section>

          {/* 4. Flight Reservations */}
          <section id="flight-reservations" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">04.</span> Flight Reservations & Ticketing Rules
            </h2>
            <p className="text-muted-foreground mb-3">
              Air travel services are divided into two distinct offerings:
            </p>
            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">A. Visa-Ready Flight Reservations (PNR)</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Temporary reservations issued with a verifiable airline Passenger Name Record (PNR) to fulfill
                  embassy proof-of-travel requirements. Airline reservation validity is determined solely by airline
                  automated ticketing time limits (TTL). We guarantee the reservation is live and verifiable at the
                  time of visa file submission.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-4">
                <h3 className="font-semibold text-xs sm:text-sm text-foreground">B. Confirmed Air Tickets</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Purchased e-tickets are issued subject to the operating airline&apos;s published tariff conditions.
                  Date changes, cancellations, baggage restrictions, and refund eligibility are strictly governed
                  by carrier fare rules. Airline penalty fees and our agency handling charges apply to changes.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Hotel Bookings */}
          <section id="hotel-bookings" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">05.</span> Hotel Accommodation Vouchers
            </h2>
            <p className="text-muted-foreground">
              Hotel booking vouchers provided for embassy files contain confirmed reservation references.
              For confirmed non-refundable stays, cancellation charges equal 100% of the booking value.
              Guests are responsible for presenting valid passports matching booking names and any incidental
              security deposits required upon check-in by individual hotel properties.
            </p>
          </section>

          {/* 6. Document Attestation */}
          <section id="document-attestation" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">06.</span> Consular Document Attestation
            </h2>
            <p className="text-muted-foreground mb-3">
              When submitting degrees, marriage certificates, or commercial deeds for attestation:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>
                <strong className="text-foreground">Client Authenticity Warranty:</strong> The Client warrants
                that all submitted documents are genuine originals. Submitting forged or counterfeit documents
                is a criminal offense under Pakistani and international law and will be reported to authorities.
              </li>
              <li>
                <strong className="text-foreground">Verification Delays:</strong> If an issuing university,
                board, or Chamber of Commerce delays prior verification, Areera Travel and Tours is not liable
                for resultant consular processing delays.
              </li>
            </ul>
          </section>

          {/* 7. Payments, Fees & Refunds */}
          <section id="payments-refunds" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">07.</span> Payments, Fees & Refund Policy
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Payment Authorization:</strong> All service quotes are
                provided upfront in Pakistani Rupees (PKR) or foreign currency equivalents. Work begins upon
                receipt of agreed advance payments or bank transfers.
              </p>
              <p>
                <strong className="text-foreground">Refund Policy:</strong> Our agency service fees cover
                specialist labor, checklist auditing, dossier creation, and appointment booking. If a visa
                application is refused by an embassy for reasons beyond our control (e.g. immigration officer
                discretion, insufficient applicant financial balance), our service fees and paid embassy
                levies are non-refundable.
              </p>
              <p>
                <strong className="text-foreground">Voluntary Client Cancellation:</strong> If a client cancels
                a file before embassy submission, any unspent third-party fees will be refunded less a standard
                dossier drafting fee.
              </p>
            </div>
          </section>

          {/* 8. Limitation of Liability */}
          <section id="liability-governing-law" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-lg">08.</span> Limitation of Liability & Governing Law
            </h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, Areera Travel and Tours shall not be liable for indirect,
              incidental, consequential, or punitive damages arising from:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
              <li>Embassy visa refusals, interview demands, or processing delays.</li>
              <li>Airline schedule changes, cancellations, missed connections, or lost baggage.</li>
              <li>Acts of God, diplomatic closures, pandemics, civil unrest, or border restrictions (Force Majeure).</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              <strong className="text-foreground">Governing Law:</strong> These Terms and Conditions shall be
              governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any
              legal dispute arising out of these terms shall be subject to the exclusive jurisdiction of the
              competent courts of Islamabad, Pakistan.
            </p>
          </section>
        </article>
      </div>

      {/* Contact & Consultation Strip */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground text-sm">Questions about our service terms?</p>
          <p className="text-xs text-muted-foreground">Our travel consultants are happy to clarify any clause before you book.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <span>Consult an Agent</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
          <Link
            to="/privacy-policy"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-card"
          >
            <span>Read Privacy Policy</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
