import { contactInfo } from "@/data/site";

const LOGO_URL = "/areera-logo.svg";

export function organizationSchema(origin = "") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Areera Travel and Tours",
    url: `${origin}/`,
    logo: `${origin}${LOGO_URL}`,
    description:
      "Visa assistance, air ticketing, document attestation, hotel booking and flight reservation services.",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
      addressCountry: "PK",
    },
  };
}

export function websiteSchema(origin = "") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Areera Travel and Tours",
    url: `${origin}/`,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${origin}/countries?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; item?: string }[], origin = "") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: `${origin}${item.item}` } : {}),
    })),
  };
}

export function serviceSchema(
  service: { title: string; description: string; path: string },
  origin = "",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Areera Travel and Tours",
    },
    url: `${origin}${service.path}`,
  };
}

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
