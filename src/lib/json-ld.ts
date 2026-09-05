import { contactInfo, services, testimonials } from "@/data/site";
import type { Country } from "@/data/countries";

export const DEFAULT_ORIGIN = "https://www.areeratravels.com";
export const LOGO_URL = "/areera-logo.png";
export const OG_IMAGE_URL = "/og-image.jpg";

/**
 * Wikidata entity mappings for Generative AI & Knowledge Graph disambiguation.
 */
export const WIKIDATA_ENTITIES: Record<string, string> = {
  pakistan: "https://www.wikidata.org/wiki/Q843",
  china: "https://www.wikidata.org/wiki/Q148",
  japan: "https://www.wikidata.org/wiki/Q17",
  "south-korea": "https://www.wikidata.org/wiki/Q884",
  thailand: "https://www.wikidata.org/wiki/Q869",
  malaysia: "https://www.wikidata.org/wiki/Q833",
  singapore: "https://www.wikidata.org/wiki/Q334",
  indonesia: "https://www.wikidata.org/wiki/Q252",
  philippines: "https://www.wikidata.org/wiki/Q928",
  vietnam: "https://www.wikidata.org/wiki/Q881",
  "sri-lanka": "https://www.wikidata.org/wiki/Q854",
  bangladesh: "https://www.wikidata.org/wiki/Q902",
  nepal: "https://www.wikidata.org/wiki/Q837",
  maldives: "https://www.wikidata.org/wiki/Q822",
  cambodia: "https://www.wikidata.org/wiki/Q424",
  "hong-kong": "https://www.wikidata.org/wiki/Q8646",
  azerbaijan: "https://www.wikidata.org/wiki/Q227",
  georgia: "https://www.wikidata.org/wiki/Q230",
  kazakhstan: "https://www.wikidata.org/wiki/Q232",
  uae: "https://www.wikidata.org/wiki/Q878",
  "saudi-arabia": "https://www.wikidata.org/wiki/Q851",
  qatar: "https://www.wikidata.org/wiki/Q846",
  kuwait: "https://www.wikidata.org/wiki/Q817",
  bahrain: "https://www.wikidata.org/wiki/Q398",
  oman: "https://www.wikidata.org/wiki/Q842",
  jordan: "https://www.wikidata.org/wiki/Q810",
  lebanon: "https://www.wikidata.org/wiki/Q822",
  iraq: "https://www.wikidata.org/wiki/Q796",
  yemen: "https://www.wikidata.org/wiki/Q805",
  syria: "https://www.wikidata.org/wiki/Q858",
  turkey: "https://www.wikidata.org/wiki/Q43",
  egypt: "https://www.wikidata.org/wiki/Q79",
  morocco: "https://www.wikidata.org/wiki/Q1028",
  tunisia: "https://www.wikidata.org/wiki/Q948",
  algeria: "https://www.wikidata.org/wiki/Q262",
  libya: "https://www.wikidata.org/wiki/Q1016",
  sudan: "https://www.wikidata.org/wiki/Q1049",
  "south-africa": "https://www.wikidata.org/wiki/Q258",
  "united-kingdom": "https://www.wikidata.org/wiki/Q145",
  "united-states": "https://www.wikidata.org/wiki/Q30",
  canada: "https://www.wikidata.org/wiki/Q16",
  australia: "https://www.wikidata.org/wiki/Q408",
};

/**
 * Generates Schema.org TravelAgency & LocalBusiness structured data.
 * Optimized for Google Knowledge Graph, Local SEO (GEO), and Answer Engines (AEO).
 */
export function organizationSchema(origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "Organization"],
    "@id": `${base}/#agency`,
    name: "Areera Travel and Tours",
    alternateName: [
      "Areera Travels",
      "Areera World Explorer",
      "Areera Travel & Tours Islamabad",
    ],
    legalName: "Areera Travel and Tours",
    slogan: "Your Trusted Visa & Travel Partner in Pakistan",
    url: `${base}/`,
    logo: {
      "@type": "ImageObject",
      url: `${base}${LOGO_URL}`,
      width: "512",
      height: "512",
      caption: "Areera Travel and Tours Official Logo",
    },
    image: `${base}${OG_IMAGE_URL}`,
    description:
      "Areera Travel and Tours is an accredited travel and visa consultancy headquartered in Blue Area, Islamabad. We specialize in certified visa application assistance, verifiable embassy flight reservations (live PNR), confirmed hotel vouchers, and official document attestation services for Pakistani passport holders and global travelers.",
    disambiguatingDescription:
      "Leading Pakistani travel agency providing embassy-compliant visa filing, air ticketing, Ministry of Foreign Affairs (MOFA) attestation, and flight itinerary support.",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    priceRange: "$$",
    currenciesAccepted: "PKR, USD, EUR, AED, SAR, GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, JazzCash, EasyPaisa",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      postalCode: "44000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7167,
      longitude: 73.0667,
      elevation: "540m",
    },
    hasMap: "https://maps.google.com/?q=Blue+Area+Islamabad+Pakistan",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contactInfo.phone,
        contactType: "customer support & visa inquiries",
        areaServed: ["PK", "AE", "SA", "GB", "US", "CA"],
        availableLanguage: ["English", "Urdu", "Punjabi", "Arabic"],
        contactOption: ["TollFree", "HearingImpairedSupported"],
      },
      {
        "@type": "ContactPoint",
        telephone: contactInfo.whatsapp,
        contactType: "WhatsApp travel desk",
        areaServed: ["PK", "AE", "SA", "GB", "US", "CA"],
        availableLanguage: ["English", "Urdu", "Punjabi"],
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Arslan Ahmed",
        jobTitle: "Founder & Managing Director",
        worksFor: { "@id": `${base}/#agency` },
      },
      {
        "@type": "Person",
        name: "Hareera",
        jobTitle: "Co-Founder & Director",
        worksFor: { "@id": `${base}/#agency` },
      },
    ],
    areaServed: [
      // Major Pakistan Cities
      { "@type": "City", name: "Islamabad", sameAs: "https://www.wikidata.org/wiki/Q1354" },
      { "@type": "City", name: "Rawalpindi", sameAs: "https://www.wikidata.org/wiki/Q21159" },
      { "@type": "City", name: "Lahore", sameAs: "https://www.wikidata.org/wiki/Q11739" },
      { "@type": "City", name: "Karachi", sameAs: "https://www.wikidata.org/wiki/Q8660" },
      { "@type": "City", name: "Peshawar", sameAs: "https://www.wikidata.org/wiki/Q18640" },
      { "@type": "City", name: "Faisalabad", sameAs: "https://www.wikidata.org/wiki/Q173985" },
      { "@type": "City", name: "Multan", sameAs: "https://www.wikidata.org/wiki/Q200119" },
      { "@type": "City", name: "Sialkot", sameAs: "https://www.wikidata.org/wiki/Q200123" },
      { "@type": "City", name: "Gujranwala", sameAs: "https://www.wikidata.org/wiki/Q200125" },
      { "@type": "City", name: "Quetta", sameAs: "https://www.wikidata.org/wiki/Q172605" },
      // Country & International
      { "@type": "Country", name: "Pakistan", sameAs: "https://www.wikidata.org/wiki/Q843" },
      { "@type": "Country", name: "United Arab Emirates", sameAs: "https://www.wikidata.org/wiki/Q878" },
      { "@type": "Country", name: "Saudi Arabia", sameAs: "https://www.wikidata.org/wiki/Q851" },
      { "@type": "Country", name: "United Kingdom", sameAs: "https://www.wikidata.org/wiki/Q145" },
      { "@type": "Country", name: "United States", sameAs: "https://www.wikidata.org/wiki/Q30" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Visa (document)",
        sameAs: "https://www.wikidata.org/wiki/Q131276",
      },
      {
        "@type": "Thing",
        name: "Travel agency",
        sameAs: "https://www.wikidata.org/wiki/Q828751",
      },
      {
        "@type": "Thing",
        name: "Schengen Area",
        sameAs: "https://www.wikidata.org/wiki/Q102905",
      },
      {
        "@type": "Thing",
        name: "Electronic visa",
        sameAs: "https://www.wikidata.org/wiki/Q131276",
      },
      {
        "@type": "Thing",
        name: "Airline ticket",
        sameAs: "https://www.wikidata.org/wiki/Q17143",
      },
      {
        "@type": "Thing",
        name: "Legalization (international law)",
        sameAs: "https://www.wikidata.org/wiki/Q271509",
      },
      "Pakistan Passport Visa Requirements 2026",
      "Verifiable Flight Reservation with Live PNR for Embassy",
      "Confirmed Hotel Booking Voucher for Visa Application",
      "Ministry of Foreign Affairs (MOFA) Degree & Marriage Attestation",
      "Dubai 30-Day & 60-Day Tourist Visa from Pakistan",
      "UK Standard Visitor Visa Document Checklist & Filing",
      "US B1/B2 Tourist & Business Visa Interview Preparation",
      "Japan eVisa Application Guide for Pakistanis",
      "Malaysia MDAC Digital Arrival Card Submission",
      "Thailand eVOA Fast-Track Application",
      "Umrah Packages and Visa Processing Islamabad",
    ],
    sameAs: [
      "https://www.facebook.com/areeratravels",
      "https://www.instagram.com/areeratravels",
      "https://maps.google.com/?q=Blue+Area+Islamabad+Pakistan",
    ],
  };
}

/**
 * Generates Schema.org WebSite structured data with SearchAction.
 */
export function websiteSchema(origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: "Areera Travel and Tours",
    alternateName: "Areera Travels",
    url: `${base}/`,
    publisher: {
      "@id": `${base}/#agency`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/countries?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-US", "ur-PK"],
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function breadcrumbSchema(
  items: { name: string; item?: string }[],
  origin = DEFAULT_ORIGIN,
) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      let resolvedItemUrl = undefined;
      if (item.item) {
        resolvedItemUrl = item.item.startsWith("http")
          ? item.item
          : `${base}${item.item.startsWith("/") ? item.item : `/${item.item}`}`;
      }
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(resolvedItemUrl ? { item: resolvedItemUrl } : {}),
      };
    }),
  };
}

/**
 * Generates Schema.org Service structured data.
 */
export function serviceSchema(
  service: { title: string; description: string; path: string },
  origin = DEFAULT_ORIGIN,
) {
  const base = origin || DEFAULT_ORIGIN;
  const serviceUrl = `${base}${service.path.startsWith("/") ? service.path : `/${service.path}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.description,
    serviceType: "Travel & Visa Consultancy",
    provider: {
      "@id": `${base}/#agency`,
    },
    url: serviceUrl,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Portfolio`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        },
      ],
    },
  };
}

/**
 * Generates Schema.org FAQPage structured data.
 */
export function faqPageSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org TouristDestination structured data for country visa guides with Generative AI / Wikidata link.
 */
export function touristDestinationSchema(country: Country, origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  const wikidataUri = WIKIDATA_ENTITIES[country.slug];

  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${base}/countries/${country.slug}#destination`,
    name: `${country.name} Visa Requirements & Travel Guide`,
    alternateName: country.name,
    description: country.blurb,
    url: `${base}/countries/${country.slug}`,
    image: `${base}${OG_IMAGE_URL}`,
    ...(wikidataUri ? { sameAs: wikidataUri } : {}),
    touristType: ["Tourist Visa", "Business Visa", "Student Visa", "Holiday Traveler"],
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: country.region,
    },
    provider: {
      "@id": `${base}/#agency`,
    },
    hasPart: country.visaCategories.map((vc) => ({
      "@type": "Offer",
      name: `${country.name} ${vc.name}`,
      category: vc.typeBadge,
      description: `Duration: ${vc.duration}, Validity: ${vc.validity}, Processing: ${vc.processingTime}. Best for: ${vc.bestFor}`,
      offeredBy: { "@id": `${base}/#agency` },
    })),
  };
}

/**
 * Generates Schema.org HowTo structured data for Visa Application Process.
 * Highlights in Google SGE (Search Generative Experience) / AI Overviews.
 */
export function howToVisaSchema(countryName = "International", origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply for a ${countryName} Visa from Pakistan with Areera Travel`,
    description: `Step-by-step guide to applying for a ${countryName} visa with certified document review, verifiable flight and hotel reservations, and embassy submission support.`,
    totalTime: "P5D",
    supply: [
      { "@type": "HowToSupply", name: "Valid Passport (minimum 6 months validity)" },
      { "@type": "HowToSupply", name: "Passport-size Photographs with white background" },
      { "@type": "HowToSupply", name: "Stamped 6-month Bank Statement with Account Maintenance Certificate" },
      { "@type": "HowToSupply", name: "Employment Letter / Business Registration" },
      { "@type": "HowToSupply", name: "Verifiable Flight Reservation & Hotel Booking Voucher" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Free Profile & Document Assessment",
        text: "Areera Travel visa specialists review your passport validity, previous travel history, financial ties, and purpose of travel to select the exact visa category.",
        url: `${base}/services/visa`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "File Preparation & Itinerary Verification",
        text: "We prepare all official embassy application forms, review bank statements line-by-line, and issue verifiable flight reservations with live PNRs and confirmed hotel vouchers.",
        url: `${base}/flight-reservation`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Embassy or Electronic Portal Lodgment",
        text: "Your application is submitted via official government e-visa portals or scheduled for biometric appointment at the relevant embassy, consulate, or VFS/Gerry's center.",
        url: `${base}/contact`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Visa Delivery & Travel Briefing",
        text: "Receive your approved visa alongside essential immigration clearance guidance, travel insurance, and air ticketing options.",
        url: `${base}/about`,
      },
    ],
  };
}

/**
 * Generates comprehensive Homepage / Index Schema.org JSON-LD graph.
 * Combines WebSite, TravelAgency with GEO, AEO, Reviews, WebPage, Breadcrumbs, and FAQs.
 */
export function homeIndexSchema(
  faqs: { question: string; answer: string }[] = [],
  origin = DEFAULT_ORIGIN,
) {
  const base = origin || DEFAULT_ORIGIN;
  const org = organizationSchema(base);
  const web = websiteSchema(base);
  const faqObj = faqs.length > 0 ? faqPageSchema(faqs) : null;
  const howToObj = howToVisaSchema("International", base);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...web,
      },
      {
        ...org,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "184",
          bestRating: "5",
          worstRating: "1",
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: t.name,
          },
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Areera Travel & Visa Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              url: `${base}${s.path}`,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation",
        description:
          "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations.",
        isPartOf: {
          "@id": `${base}/#website`,
        },
        about: {
          "@id": `${base}/#agency`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${OG_IMAGE_URL}`,
        },
        breadcrumb: {
          "@id": `${base}/#breadcrumb`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".speakable-summary", "#faq", "article p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${base}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
        ],
      },
      {
        ...howToObj,
        "@id": `${base}/#howto-visa`,
      },
      ...(faqObj
        ? [
            {
              ...faqObj,
              "@id": `${base}/#faq`,
            },
          ]
        : []),
    ],
  };
}

/**
 * Generates Schema.org Article / Guide structured data.
 */
export function articleSchema(
  guide: {
    title: string;
    description: string;
    path: string;
    datePublished?: string;
    dateModified?: string;
  },
  origin = DEFAULT_ORIGIN,
) {
  const base = origin || DEFAULT_ORIGIN;
  const articleUrl = `${base}${guide.path.startsWith("/") ? guide.path : `/${guide.path}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: guide.title,
    description: guide.description,
    url: articleUrl,
    image: `${base}${OG_IMAGE_URL}`,
    author: {
      "@id": `${base}/#agency`,
    },
    publisher: {
      "@id": `${base}/#agency`,
    },
    datePublished: guide.datePublished || "2026-01-01",
    dateModified: guide.dateModified || new Date().toISOString().split("T")[0],
    mainEntityOfPage: articleUrl,
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p", ".speakable-summary"],
    },
  };
}
