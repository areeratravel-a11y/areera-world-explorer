# Areera World Explorer

Build a fully responsive, world-class travel agency website called "Areera Travel and Tours."

═══════════════════════════════════

BRAND & THEME

═══════════════════════════════════

- Colors: deep navy (#0a1128), royal blue (#1e3a8a to #3b82f6 gradient), chrome/silver metallic accents (#c0c0c0, #e5e7eb)

- Style: premium, modern, trustworthy — glassmorphic navbar, subtle glow effects on buttons/icons, smooth scroll animations, card hover elevation

- Typography: bold modern sans-serif for headings (Poppins/Montserrat), clean readable body font (Inter)

- Use plane/globe motifs sparingly in section dividers and icons, echoing a blue-silver monogram "AH" logo with a globe and plane

- Fully responsive: mobile bottom nav bar, tablet and desktop layouts, no layout breaks at any breakpoint

═══════════════════════════════════

PAGES & STRUCTURE

═══════════════════════════════════

1. Home

   - Hero with headline, subheadline, CTAs ("Get Visa Assistance", "Book a Flight"), subtle globe/plane background animation

   - Services overview cards (Visa, Ticket, Attestation, Hotel Booking, Flight Reservation)

   - "Popular Destinations" grid linking directly to top country pages across ALL regions (not just Asia)

   - Why choose us section (trust badges, experience, no fabricated stats)

   - Testimonials slider

   - Newsletter/contact CTA banner

   - Mega-footer sitemap (see Internal Linking section)

2. Services (hub page linking to sub-pages)

   a. Visa Services — process steps, document checklist, visa types (tourist, business, student, work), links to "Popular Visa Destinations" (6 countries, mixed regions), CTA to apply

   b. Ticket Booking — domestic & international ticketing info, CTA to reservation page

   c. Attestation Services — document types (educational, personal, commercial), process timeline, links to countries where attestation is commonly required (e.g. Gulf countries)

   - Each service page ends with a "You may also need" block linking to the other 4 services

3. Hotel Booking — search widget (destination, check-in/out, guests), featured hotels grid, booking inquiry form, supports pre-filled destination via URL param

4. Flight Reservation — search widget (from/to, dates, passengers, class), popular routes section, inquiry form, supports pre-filled destination via URL param

5. About Us — company story, mission/vision, team section, milestones/timeline

6. Contact Us — contact form, embedded map, office address, phone/WhatsApp/email, business hours

7. Countries (hub page)

   - Region filter/tab bar: Asia | Middle East | North Africa | Africa

   - Live search box (filters without page reload)

   - Region hub pages: /countries/:region showing all countries in that region

8. Individual Country Pages (/countries/:slug — one shared dynamic template, data-driven)

   Regions & countries to include:

   ASIA: Pakistan, India, China, Japan, South Korea, Thailand, Malaysia, Singapore, Indonesia, Philippines, Vietnam, Sri Lanka, Bangladesh, Nepal, Maldives, Cambodia, Hong Kong, Azerbaijan, Georgia, Kazakhstan

   MIDDLE EAST: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Jordan, Lebanon, Iraq, Israel, Yemen, Syria, Turkey

   NORTH AFRICA: Egypt, Morocco, Tunisia, Algeria, Libya, Sudan

   AFRICA (seed entry, expandable): South Africa

   Note: tag each country with ONE primary region only (avoid Asia/Middle East overlap causing duplicate content)

   Each country page includes:

   - Hero banner with flag/landmark image

   - Visa requirements summary, visa types, processing time, required documents list

   - "Apply for [Country] Visa" CTA → /services/visa?country=slug

   - Links to Hotel Booking and Flight Reservation pages pre-filtered for that country

   - "Related Countries" section (3-4 cards from same region)

   - Breadcrumb: Home > Countries > [Region] > [Country]

═══════════════════════════════════

DATA MODEL

═══════════════════════════════════

Each country object:

{ name, slug, region, flag, capital, visaTypes[], documents[], processingTime, fees, currency, relatedCountries[] }

Regions enum: Asia, Middle East, North Africa, Africa

═══════════════════════════════════

PROFESSIONAL INTERNAL LINKING (SEO ARCHITECTURE)

═══════════════════════════════════

1. Breadcrumbs on every page (e.g. Home > Countries > Middle East > UAE)

2. Country pages cross-link to: relevant service, 3-4 related countries, hotel/flight booking (pre-filled)

3. Service pages cross-link to: popular country destinations, other services

4. Homepage mega-footer with full linked sitemap grouped by region + services

5. Navbar: Services (dropdown) | Countries (searchable mega-menu grouped by region) | About Us | Contact Us

6. Descriptive anchor text only — no "click here" (e.g. "Egypt tourist visa requirements", "Book flights to Dubai")

7. Every country page links to at least 3 other internal pages

8. Sitemap structure:

   / /services /services/visa /services/ticket /services/attestation

   /hotel-booking /flight-reservation /about /contact

   /countries /countries/:region /countries/:slug

═══════════════════════════════════

TECHNICAL REQUIREMENTS

═══════════════════════════════════

- React + Tailwind CSS

- Dynamic routing for country pages fed from a structured data array (not hardcoded per-page)

- Sticky glassmorphic navbar with searchable region-grouped mega-menu for Countries

- Mobile: bottom tab bar (Home, Services, Countries, Contact)

- Reusable components: ServiceCard, CountryCard, TestimonialCard, BookingForm, Breadcrumb

- SEO-friendly page titles/meta description per page (dynamic per country/service)

- Smooth page transitions and scroll-reveal animations

- Functional front-end forms with validation (no fake submission claims)

- Do NOT include fabricated approval percentages or guaranteed visa success rates — keep all claims general and compliant

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
