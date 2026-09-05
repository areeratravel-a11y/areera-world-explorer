import { contactInfo } from "@/data/site";
import type { Country } from "@/data/countries";

export const DEFAULT_ORIGIN = "https://www.areeratravels.com";
export const LOGO_URL = "/areera-logo.png";
export const OG_IMAGE_URL = "/og-image.jpg";

/**
 * Generates Schema.org TravelAgency & LocalBusiness structured data.
 * Ideal for Google Knowledge Graph, Local SEO, and Rich Results.
 */
export function organizationSchema(origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "Organization"],
    "@id": `${base}/#agency`,
    name: "Areera Travel and Tours",
    alternateName: ["Areera Travels", "Areera World Explorer"],
    legalName: "Areera Travel and Tours",
    url: `${base}/`,
    logo: {
      "@type": "ImageObject",
      url: `${base}${LOGO_URL}`,
      width: "512",
      height: "512",
    },
    image: `${base}${OG_IMAGE_URL}`,
    description:
      "Certified visa assistance, verifiable embassy flight reservations, hotel vouchers, and official document attestation services worldwide.",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    priceRange: "$$",
    currenciesAccepted: "PKR, USD, EUR, AED, SAR, GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, Online Payment",
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
    },
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
    founder: [
      {
        "@type": "Person",
        name: "Arslan Ahmed",
        jobTitle: "Founder & Managing Director",
      },
      {
        "@type": "Person",
        name: "Hareera",
        jobTitle: "Co-Founder & Director",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "AdministrativeArea", name: "Worldwide" },
    ],
    sameAs: [
      "https://www.facebook.com/areeratravels",
      "https://www.instagram.com/areeratravels",
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
    inLanguage: "en-US",
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
 * Generates Schema.org TouristDestination structured data for country visa guides.
 */
export function touristDestinationSchema(country: Country, origin = DEFAULT_ORIGIN) {
  const base = origin || DEFAULT_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${base}/countries/${country.slug}#destination`,
    name: country.name,
    description: country.blurb,
    url: `${base}/countries/${country.slug}`,
    image: `${base}${OG_IMAGE_URL}`,
    touristType: ["Tourist Visa", "Business Visa", "Student Visa", "Holiday Traveler"],
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: country.region,
    },
    provider: {
      "@id": `${base}/#agency`,
    },
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
  };
}
