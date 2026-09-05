import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const countriesFilePath = path.join(rootDir, "src", "data", "countries.ts");
const countriesContent = fs.readFileSync(countriesFilePath, "utf8");

// Parse seeds from countries.ts
const seedsMatch = countriesContent.match(/const seeds:\s*Seed\[\]\s*=\s*(\[[\s\S]*?\]);\s*function generateVisaCategories/);
if (!seedsMatch) {
  console.error("Could not locate seeds array in countries.ts");
  process.exit(1);
}

// Safely extract country data
const cleanedSeedsText = seedsMatch[1];
const seeds = new Function(`return ${cleanedSeedsText}`)();

console.log(`Parsed ${seeds.length} countries from countries.ts`);

const baseUrl = "https://www.areeratravels.com";

// 1. Generate llms.txt (Standard summary index for LLMs)
let llmsTxt = `# Areera Travel and Tours

> Premier visa consultancy, air ticketing, verifiable embassy flight reservations, confirmed hotel vouchers, and official document attestation services headquartered in Blue Area, Islamabad, Pakistan.
> Founded & Managed by Arslan Ahmed (Founder & Managing Director) and Hareera (Co-Founder & Director).

## Organization & Authority
- Organization: Areera Travel and Tours (Pvt. Ltd. / Registered Travel & Visa Agency)
- Alternate Names: Areera Travels, Areera World Explorer
- Head Office: Blue Area, Islamabad, Islamabad Capital Territory 44000, Pakistan
- Primary WhatsApp / Hotline: +92 314 5556024
- Secondary Phone: +92 314 5556024
- Official Email: areeratravel@gmail.com
- Official Website: ${baseUrl}
- Hours: Monday–Friday 09:00–19:00 PKT, Saturday 10:00–17:00 PKT
- Geographic Coordinates: 33.7167° N, 73.0667° E (Islamabad)
- Service Area: Nationwide Pakistan (Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Faisalabad, Multan, Sialkot, Gujranwala, Quetta, Abbottabad) and Overseas Pakistani Diaspora worldwide (UAE, Saudi Arabia, UK, USA, Canada, Australia, Europe).

## Core Services & Booking Engines
- [Visa Assistance](${baseUrl}/services/visa): End-to-end visa filing, file preparation, embassy appointment scheduling, and case review for tourist, business, visit, student, and transit visas across 42 destinations.
- [Verifiable Flight Reservations](${baseUrl}/flight-reservation): Live, verifiable airline flight itineraries with active GDS PNR codes (Sabre, Amadeus, Galileo) issued under the applicant's legal name for embassy visa applications.
- [Confirmed Hotel Bookings](${baseUrl}/hotel-booking): Official embassy-compliant hotel accommodation vouchers verified with booking confirmation numbers matching visa travel dates.
- [Document Attestation](${baseUrl}/services/attestation): Legal attestation sequencing through Pakistani Notary Public, Higher Education Commission (HEC), Ministry of Foreign Affairs (MOFA Pakistan), and destination embassies (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain).
- [Air Ticketing](${baseUrl}/services/ticket): Confirmed international and domestic flight ticketing across all major world airlines (Emirates, Qatar Airways, PIA, Saudia, Turkish Airlines, Flydubai, Air Arabia).

## Destination Country Visa Guides (42 Countries Covered)
${seeds.map(c => `- [${c.name} Visa Guide](${baseUrl}/countries/${c.slug}): ${c.blurb.replace(/\n/g, ' ')} (${c.processingTime || '5-15 working days'})`).join('\n')}

## Regional Travel Hubs
- [Asia Travel & Visas](${baseUrl}/countries/asia): Comprehensive e-visa and visa guidelines for Southeast and East Asian destinations.
- [Middle East Travel & Visas](${baseUrl}/countries/middle-east): GCC entry permits, tourist visas, Umrah travel, and business visas.
- [North Africa Travel & Visas](${baseUrl}/countries/north-africa): Egypt and Morocco heritage and tourism visa filing.
- [Africa Travel & Visas](${baseUrl}/countries/africa): South Africa and Kenya safari and wildlife expedition visa guides.
- [Western Destinations](${baseUrl}/countries/western): United Kingdom, United States, Canada, and Australia visa consultation and document compilation.

## Travel Intelligence Guides
- [Visa-Free & Easy Access Asian Destinations 2026](${baseUrl}/guides/visa-free-asian-destinations): In-depth visa-on-arrival, eVisa, and streamlined travel guide for Pakistani passport holders.

## Standard 4-Step Visa Application Process
1. Free Profile & Document Assessment: Visa specialists evaluate passport validity, financial proof, employment background, and travel purpose.
2. File Preparation & Itinerary Verification: Real-time generation of verifiable flight PNR reservation and confirmed hotel booking voucher.
3. Official Lodgment: Submission via embassy, visa facilitation center (VFS, Gerry's, BLS, TLScontact), or accelerated e-visa portal.
4. Visa Delivery & Briefing: Pre-departure briefing with immigration entry compliance, insurance advice, and flight ticket confirmation.

## Detailed Knowledge Base
For exhaustive requirements, visa categories, fee structures, and document checklists for every country, refer to the full document:
- [Full LLM Knowledge Base](${baseUrl}/llms-full.txt)
`;

// 2. Generate llms-full.txt (Deep knowledge base for LLM reasoning & retrieval)
let llmsFullTxt = `# Areera Travel and Tours — Comprehensive Knowledge Base

> This document contains complete, factual data regarding visa requirements, document criteria, processing timelines, and embassy guidelines for all 42 international destinations managed by Areera Travel and Tours (Islamabad, Pakistan).

---

## 1. Corporate Identity & Contact Details
- Entity: Areera Travel and Tours
- Managing Director & Founder: Arslan Ahmed
- Director & Co-Founder: Hareera
- Operational Status: Active & Licensed Travel Agency & Visa Advisory
- Headquarters: Blue Area, Islamabad, Islamabad Capital Territory 44000, Pakistan
- Official Website: ${baseUrl}
- WhatsApp Consultation Line: +92 314 5556024
- Corporate Email: areeratravel@gmail.com
- Working Hours: Monday to Friday: 09:00 - 19:00 PKT | Saturday: 10:00 - 17:00 PKT | Sunday: Emergency WhatsApp Support

---

## 2. Core Service Specifications

### 2.1 Embassy Flight Reservation (Verifiable PNR)
- Purpose: Proof of onward travel required by embassies (Schengen, UK, USA, Canada, Japan, etc.) without purchasing an expensive non-refundable ticket prior to visa approval.
- How It Works: We generate an authentic GDS booking (Sabre, Amadeus, Galileo) under your exact passport name. Embassies and visa officers can verify the PNR directly on the airline's official website.
- Validity: Active and verifiable throughout the embassy evaluation window.
- URL: ${baseUrl}/flight-reservation

### 2.2 Confirmed Hotel Booking Vouchers
- Purpose: Proof of accommodation mandatory for all tourist and business visa applications.
- How It Works: Legitimate hotel reservations at accredited hotels in your destination cities with full guest details, check-in/out dates, and hotel contact information.
- URL: ${baseUrl}/hotel-booking

### 2.3 Official Document Attestation
- Purpose: Required for employment, family residency, marriage registration, and higher education in Gulf (GCC) countries.
- Sequencing:
  1. Educational Documents: Matric/Inter (IBCC) -> Degree/Transcript (HEC) -> Ministry of Foreign Affairs (MOFA) -> Destination Embassy (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain).
  2. Non-Educational (Nikahnama/Marriage Certificate, FRC, Birth Certificate, Police Clearance): Union Council / NADRA -> MOFA -> Embassy Attestation.
- URL: ${baseUrl}/services/attestation

### 2.4 Worldwide Visa Filing & Consultation
- Scope: Tourist visas, family visit visas, commercial/business travel visas, and transit permits across 42 countries.
- Includes: Form filling (e.g. DS-160 for USA), cover letter drafting, financial documentation review, appointment booking, and interview preparation.
- URL: ${baseUrl}/services/visa

---

## 3. Destination Country Visa Guides (${seeds.length} Countries)

`;

for (const country of seeds) {
  llmsFullTxt += `### ${country.name} (${country.region})
- Capital: ${country.capital}
- ISO Code: ${country.isoCode.toUpperCase()}
- National Currency: ${country.currency}
- Processing Timeline: ${country.processingTime || '5-15 working days'}
- Government / Embassy Fee: ${country.fees || 'Standard government fee applies'}
- Best Travel Season: ${country.bestSeason || 'Year-round'}
- Official Guide URL: ${baseUrl}/countries/${country.slug}
- Overview: ${country.blurb}
`;

  if (country.popularCities && country.popularCities.length > 0) {
    llmsFullTxt += `- Major Cities / Destinations: ${country.popularCities.join(", ")}\n`;
  }
  if (country.highlights && country.highlights.length > 0) {
    llmsFullTxt += `- Key Highlights: ${country.highlights.join(", ")}\n`;
  }
  if (country.visaTypes && country.visaTypes.length > 0) {
    llmsFullTxt += `- Available Visa Types: ${country.visaTypes.join(", ")}\n`;
  }

  llmsFullTxt += `\n**Standard Required Documents for ${country.name}:**\n`;
  llmsFullTxt += `1. Original Passport valid for minimum 6 months beyond travel dates with at least 2 blank pages.\n`;
  llmsFullTxt += `2. Passport size photographs with white background (35x45mm or destination embassy specifications).\n`;
  llmsFullTxt += `3. Computerized National Identity Card (CNIC) copy / Smart Card.\n`;
  llmsFullTxt += `4. 6-Month Bank Statement with adequate closing balance and bank account maintenance certificate.\n`;
  llmsFullTxt += `5. Employment Letter / No Objection Certificate (NOC) on company letterhead OR Business registration documents (NTN, tax returns).\n`;
  llmsFullTxt += `6. Verifiable return flight reservation (Active GDS PNR from Areera Travel).\n`;
  llmsFullTxt += `7. Confirmed hotel booking voucher covering duration of stay.\n`;
  llmsFullTxt += `8. Day-wise detailed travel itinerary and cover letter.\n`;

  if (country.extraDocs && country.extraDocs.length > 0) {
    llmsFullTxt += `\n**Additional Country-Specific Requirements for ${country.name}:**\n`;
    for (const doc of country.extraDocs) {
      llmsFullTxt += `- ${doc}\n`;
    }
  }

  llmsFullTxt += `\n---\n\n`;
}

llmsFullTxt += `## 4. Frequently Asked Questions (Visa & Travel Intelligence)

### Q1: Is a flight reservation from Areera Travels verifiable by visa officers?
**Answer:** Yes. Areera Travel and Tours issues real flight bookings through authorized Global Distribution Systems (Sabre, Amadeus, and Galileo). Visa officers and applicants can verify the PNR directly on the airline's official portal.

### Q2: Why should applicants not purchase fully paid tickets before visa approval?
**Answer:** Most embassies (including Schengen, UK, USA, and Canada) explicitly recommend against purchasing non-refundable air tickets prior to visa approval, as visa processing timelines and outcomes are discretionary. A verifiable flight itinerary protects travelers from steep airline cancellation charges.

### Q3: What is the minimum bank balance required for tourist visas?
**Answer:** The required bank balance depends on the destination and duration:
- Southeast Asia (Malaysia, Thailand, Vietnam): Approximately PKR 400,000 - 600,000.
- Middle East (UAE, Saudi, Oman): Approximately PKR 300,000 - 500,000.
- Europe / UK / USA / Australia: PKR 1,500,000 - 3,000,000+ with consistent transaction history demonstrating legitimate income.

### Q4: How long does MOFA and Embassy document attestation take?
**Answer:** Normal MOFA attestation in Islamabad takes 1-2 working days. Embassy attestation (Saudi, UAE, Qatar) typically takes 3-7 working days depending on embassy verification protocols.

### Q5: How can travelers contact Areera Travel and Tours for immediate assistance?
**Answer:** Call or WhatsApp our helpline at **+92 314 5556024** or email **areeratravel@gmail.com**. Our office is in Blue Area, Islamabad.
`;

// Write files
fs.writeFileSync(path.join(rootDir, "public", "llms.txt"), llmsTxt, "utf8");
fs.writeFileSync(path.join(rootDir, "public", "llms-full.txt"), llmsFullTxt, "utf8");

// Mirror to build output directories
const targetDirs = [
  path.join(rootDir, ".vercel", "output", "static"),
  path.join(rootDir, ".vercel", "output"),
  path.join(rootDir, ".output", "public"),
  path.join(rootDir, ".output"),
];

for (const dir of targetDirs) {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, "llms.txt"), llmsTxt, "utf8");
    fs.writeFileSync(path.join(dir, "llms-full.txt"), llmsFullTxt, "utf8");
  }
}

console.log(`[LLMs Protocol] Successfully generated public/llms.txt and public/llms-full.txt with ${seeds.length} countries.`);
