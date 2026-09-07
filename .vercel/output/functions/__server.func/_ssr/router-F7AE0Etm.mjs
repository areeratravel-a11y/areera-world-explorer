import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as notFound, _ as Link, c as HeadContent, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as useLocation, m as lazyRouteComponent, p as Outlet, s as Scripts, u as useRouterState, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Building2, A as LayoutGrid, B as ExternalLink, D as Mail, E as MapPin, G as CircleQuestionMark, H as Compass, J as ChevronRight, M as House, R as FileCheckCorner, T as Menu, V as Earth, W as Clock, Y as ChevronDown, b as PlaneTakeoff, et as Bot, f as ShieldCheck, h as Search, l as Stamp, m as Send, o as TicketsPlane, rt as ArrowRight, t as X, tt as BedDouble, u as Sparkles, w as MessageCircle, x as Phone, y as Plane } from "../_libs/lucide-react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as SpeedInsights } from "../_libs/vercel__speed-insights.mjs";
import { A as countryFaqs, E as contactFaqs, G as cn, I as hotelFaqs, M as flightFaqs, O as countriesHubFaqs, P as homeFaqs, S as aboutFaqs, U as visaFaqs, V as ticketFaqs, W as Button, _ as contactInfo, a as trackPhoneContact, b as testimonials, c as REGIONS, d as countries, f as countriesByRegion, h as popularDestinations, i as trackPageView, l as REGION_SLUGS, m as getRegionBySlug, n as initAnalytics, o as trackWhatsAppContact, p as getCountry, s as CountryFlag, v as services, w as attestationFaqs, z as servicesFaqs } from "./router-F7AE0Etm2.mjs";
import fs from "fs";
import path from "path";
//#region node_modules/.nitro/vite/services/ssr/assets/json-ld-Ct4brm_1.js
var DEFAULT_ORIGIN = "https://www.areeratravels.com";
var LOGO_URL = "/areera-logo.png";
var OG_IMAGE_URL = "/og-image.jpg";
/**
* Wikidata entity mappings for Generative AI & Knowledge Graph disambiguation.
*/
var WIKIDATA_ENTITIES = {
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
	australia: "https://www.wikidata.org/wiki/Q408"
};
/**
* Generates Schema.org TravelAgency structured data.
* Optimized for Google Knowledge Graph, Local SEO (GEO), and Answer Engines (AEO).
*/
function organizationSchema(origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": "TravelAgency",
		"@id": `${base}/#agency`,
		name: "Areera Travel and Tours",
		alternateName: [
			"Areera Travels",
			"Areera World Explorer",
			"Areera Travel & Tours Islamabad"
		],
		legalName: "Areera Travel and Tours",
		slogan: "Your Trusted Visa & Travel Partner in Pakistan",
		url: `${base}/`,
		logo: {
			"@type": "ImageObject",
			url: `${base}${LOGO_URL}`,
			width: "512",
			height: "512",
			caption: "Areera Travel and Tours Official Logo"
		},
		image: `${base}${OG_IMAGE_URL}`,
		description: "Areera Travel and Tours is an accredited travel and visa consultancy headquartered in Blue Area, Islamabad. We specialize in certified visa application assistance, verifiable embassy flight reservations (live PNR), confirmed hotel vouchers, and official document attestation services for Pakistani passport holders and global travelers.",
		disambiguatingDescription: "Leading Pakistani travel agency providing embassy-compliant visa filing, air ticketing, Ministry of Foreign Affairs (MOFA) attestation, and flight itinerary support.",
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
			addressCountry: "PK"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 33.7167,
			longitude: 73.0667
		},
		hasMap: "https://maps.google.com/?q=Blue+Area+Islamabad+Pakistan",
		openingHoursSpecification: [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			opens: "09:00",
			closes: "19:00"
		}, {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "10:00",
			closes: "17:00"
		}],
		contactPoint: [{
			"@type": "ContactPoint",
			telephone: contactInfo.phone,
			contactType: "customer service",
			areaServed: [
				"PK",
				"AE",
				"SA",
				"GB",
				"US",
				"CA"
			],
			availableLanguage: [
				"English",
				"Urdu",
				"Punjabi",
				"Arabic"
			]
		}, {
			"@type": "ContactPoint",
			telephone: contactInfo.whatsapp,
			contactType: "reservations",
			areaServed: [
				"PK",
				"AE",
				"SA",
				"GB",
				"US",
				"CA"
			],
			availableLanguage: [
				"English",
				"Urdu",
				"Punjabi"
			]
		}],
		founder: [{
			"@type": "Person",
			name: "Arslan Ahmed",
			jobTitle: "Founder & Managing Director",
			worksFor: { "@id": `${base}/#agency` }
		}, {
			"@type": "Person",
			name: "Hareera",
			jobTitle: "Co-Founder & Director",
			worksFor: { "@id": `${base}/#agency` }
		}],
		areaServed: [
			{
				"@type": "City",
				name: "Islamabad",
				sameAs: "https://www.wikidata.org/wiki/Q1354"
			},
			{
				"@type": "City",
				name: "Rawalpindi",
				sameAs: "https://www.wikidata.org/wiki/Q21159"
			},
			{
				"@type": "City",
				name: "Lahore",
				sameAs: "https://www.wikidata.org/wiki/Q11739"
			},
			{
				"@type": "City",
				name: "Karachi",
				sameAs: "https://www.wikidata.org/wiki/Q8660"
			},
			{
				"@type": "City",
				name: "Peshawar",
				sameAs: "https://www.wikidata.org/wiki/Q18640"
			},
			{
				"@type": "City",
				name: "Faisalabad",
				sameAs: "https://www.wikidata.org/wiki/Q173985"
			},
			{
				"@type": "City",
				name: "Multan",
				sameAs: "https://www.wikidata.org/wiki/Q200119"
			},
			{
				"@type": "City",
				name: "Sialkot",
				sameAs: "https://www.wikidata.org/wiki/Q200123"
			},
			{
				"@type": "City",
				name: "Gujranwala",
				sameAs: "https://www.wikidata.org/wiki/Q200125"
			},
			{
				"@type": "City",
				name: "Quetta",
				sameAs: "https://www.wikidata.org/wiki/Q172605"
			},
			{
				"@type": "Country",
				name: "Pakistan",
				sameAs: "https://www.wikidata.org/wiki/Q843"
			},
			{
				"@type": "Country",
				name: "United Arab Emirates",
				sameAs: "https://www.wikidata.org/wiki/Q878"
			},
			{
				"@type": "Country",
				name: "Saudi Arabia",
				sameAs: "https://www.wikidata.org/wiki/Q851"
			},
			{
				"@type": "Country",
				name: "United Kingdom",
				sameAs: "https://www.wikidata.org/wiki/Q145"
			},
			{
				"@type": "Country",
				name: "United States",
				sameAs: "https://www.wikidata.org/wiki/Q30"
			},
			{
				"@type": "AdministrativeArea",
				name: "Worldwide"
			}
		],
		knowsAbout: [
			{
				"@type": "Thing",
				name: "Visa (document)",
				sameAs: "https://www.wikidata.org/wiki/Q131276"
			},
			{
				"@type": "Thing",
				name: "Travel agency",
				sameAs: "https://www.wikidata.org/wiki/Q828751"
			},
			{
				"@type": "Thing",
				name: "Schengen Area",
				sameAs: "https://www.wikidata.org/wiki/Q102905"
			},
			{
				"@type": "Thing",
				name: "Electronic visa",
				sameAs: "https://www.wikidata.org/wiki/Q131276"
			},
			{
				"@type": "Thing",
				name: "Airline ticket",
				sameAs: "https://www.wikidata.org/wiki/Q17143"
			},
			{
				"@type": "Thing",
				name: "Legalization (international law)",
				sameAs: "https://www.wikidata.org/wiki/Q271509"
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
			"Umrah Packages and Visa Processing Islamabad"
		],
		sameAs: [
			"https://www.facebook.com/areeratravels",
			"https://www.instagram.com/areeratravels",
			"https://maps.google.com/?q=Blue+Area+Islamabad+Pakistan"
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Areera Travel & Visa Services",
			itemListElement: services.map((s) => ({
				"@type": "Service",
				name: s.title,
				description: s.description,
				url: `${base}${s.path}`,
				provider: { "@id": `${base}/#agency` }
			}))
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "128",
			bestRating: "5",
			worstRating: "1"
		},
		review: testimonials.map((t, index) => ({
			"@type": "Review",
			author: {
				"@type": "Person",
				name: t.name
			},
			datePublished: [
				"2025-10-12",
				"2025-11-28",
				"2026-01-05",
				"2026-02-14"
			][index] || "2026-01-01",
			reviewBody: t.quote,
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
				worstRating: "1"
			}
		}))
	};
}
/**
* Generates Schema.org WebSite structured data with SearchAction.
*/
function websiteSchema(origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${base}/#website`,
		name: "Areera Travel and Tours",
		alternateName: "Areera Travels",
		url: `${base}/`,
		publisher: { "@id": `${base}/#agency` },
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${base}/countries?search={search_term_string}`
			},
			"query-input": "required name=search_term_string"
		},
		inLanguage: ["en-US", "ur-PK"]
	};
}
/**
* Generates Schema.org BreadcrumbList structured data.
*/
function breadcrumbSchema(items, origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	const lastItem = items[items.length - 1];
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${lastItem?.item ? lastItem.item.startsWith("http") ? lastItem.item : `${base}${lastItem.item.startsWith("/") ? lastItem.item : `/${lastItem.item}`}` : base}#breadcrumb`,
		itemListElement: items.map((item, index) => {
			let resolvedItemUrl = void 0;
			if (item.item) resolvedItemUrl = item.item.startsWith("http") ? item.item : `${base}${item.item.startsWith("/") ? item.item : `/${item.item}`}`;
			return {
				"@type": "ListItem",
				position: index + 1,
				name: item.name,
				...resolvedItemUrl ? { item: resolvedItemUrl } : {}
			};
		})
	};
}
/**
* Generates Schema.org Service structured data.
*/
function serviceSchema(service, origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	const serviceUrl = `${base}${service.path.startsWith("/") ? service.path : `/${service.path}`}`;
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${serviceUrl}#service`,
		name: service.title,
		description: service.description,
		serviceType: "Travel & Visa Consultancy",
		provider: { "@id": `${base}/#agency` },
		url: serviceUrl,
		areaServed: {
			"@type": "AdministrativeArea",
			name: "Worldwide"
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: `${service.title} Portfolio`,
			itemListElement: [{
				"@type": "Service",
				name: service.title,
				description: service.description,
				provider: { "@id": `${base}/#agency` }
			}]
		}
	};
}
/**
* Generates Schema.org FAQPage structured data.
*/
function faqPageSchema(questions) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map((q) => ({
			"@type": "Question",
			name: q.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: q.answer
			}
		}))
	};
}
/**
* Generates Schema.org TouristDestination structured data for country visa guides with Generative AI / Wikidata link.
*/
function touristDestinationSchema(country, origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	const wikidataUri = WIKIDATA_ENTITIES[country.slug];
	return {
		"@context": "https://schema.org",
		"@type": "TouristDestination",
		"@id": `${base}/countries/${country.slug}#destination`,
		name: `${country.name} Visa Requirements & Travel Guide`,
		alternateName: country.name,
		description: country.blurb,
		keywords: `${country.name} visa from pakistan, ${country.name} visa requirements for pakistani citizens, ${country.name} tourist visa, ${country.name} evisa application, ${country.name} embassy fees`,
		url: `${base}/countries/${country.slug}`,
		image: `${base}${OG_IMAGE_URL}`,
		...wikidataUri ? { sameAs: wikidataUri } : {},
		touristType: [
			"Tourist Visa",
			"Business Visa",
			"Student Visa",
			"Holiday Traveler"
		],
		containedInPlace: {
			"@type": "AdministrativeArea",
			name: country.region
		}
	};
}
/**
* Generates Schema.org HowTo structured data for Visa Application Process.
* Highlights in Google SGE (Search Generative Experience) / AI Overviews.
*/
function howToVisaSchema(countryName = "International", origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: `How to Apply for a ${countryName} Visa from Pakistan with Areera Travel`,
		description: `Step-by-step guide to applying for a ${countryName} visa with certified document review, verifiable flight and hotel reservations, and embassy submission support.`,
		totalTime: "P5D",
		supply: [
			{
				"@type": "HowToSupply",
				name: "Valid Passport (minimum 6 months validity)"
			},
			{
				"@type": "HowToSupply",
				name: "Passport-size Photographs with white background"
			},
			{
				"@type": "HowToSupply",
				name: "Stamped 6-month Bank Statement with Account Maintenance Certificate"
			},
			{
				"@type": "HowToSupply",
				name: "Employment Letter / Business Registration"
			},
			{
				"@type": "HowToSupply",
				name: "Verifiable Flight Reservation & Hotel Booking Voucher"
			}
		],
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Free Profile & Document Assessment",
				text: "Areera Travel visa specialists review your passport validity, previous travel history, financial ties, and purpose of travel to select the exact visa category.",
				url: `${base}/services/visa`
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "File Preparation & Itinerary Verification",
				text: "We prepare all official embassy application forms, review bank statements line-by-line, and issue verifiable flight reservations with live PNRs and confirmed hotel vouchers.",
				url: `${base}/flight-reservation`
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Embassy or Electronic Portal Lodgment",
				text: "Your application is submitted via official government e-visa portals or scheduled for biometric appointment at the relevant embassy, consulate, or VFS/Gerry's center.",
				url: `${base}/contact`
			},
			{
				"@type": "HowToStep",
				position: 4,
				name: "Visa Delivery & Travel Briefing",
				text: "Receive your approved visa alongside essential immigration clearance guidance, travel insurance, and air ticketing options.",
				url: `${base}/about`
			}
		]
	};
}
/**
* Generates comprehensive Homepage / Index Schema.org JSON-LD graph.
* Combines WebPage, Breadcrumbs, HowTo, and FAQs, linking to global WebSite & Agency schemas.
*/
function homeIndexSchema(faqs = [], origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	const faqObj = faqs.length > 0 ? faqPageSchema(faqs) : null;
	const { "@context": _faqContext, ...cleanFaq } = faqObj || {};
	const { "@context": _howToContext, ...cleanHowTo } = howToVisaSchema("International", base);
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${base}/#webpage`,
				url: `${base}/`,
				name: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation",
				description: "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations.",
				isPartOf: { "@id": `${base}/#website` },
				about: { "@id": `${base}/#agency` },
				primaryImageOfPage: {
					"@type": "ImageObject",
					url: `${base}${OG_IMAGE_URL}`
				},
				breadcrumb: { "@id": `${base}/#breadcrumb` }
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${base}/#breadcrumb`,
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: `${base}/`
				}]
			},
			{
				...cleanHowTo,
				"@id": `${base}/#howto-visa`
			},
			...faqObj ? [{
				...cleanFaq,
				"@id": `${base}/#faq`
			}] : []
		]
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/skeleton-D9W9wFsj.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/ServicePageSkeleton-BJxjD9zd.js
function ServicePageSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 animate-pulse",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground/40",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-72 sm:w-96" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full max-w-2xl" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-3xl border border-white/10 bg-card/60 p-6 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-12 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-64" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-36 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-36 rounded-xl" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-card/40 p-6 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-8 rounded-xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-3/4" })
					]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-white/10 bg-card/60 p-6 sm:p-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-52" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full rounded-xl" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-11 w-44 rounded-xl" })
				]
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-F7AE0Etm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CBmq9T1O.css";
var areera_logo_default = "/assets/areera-logo-bWvcBLDE.png";
var sizeMap = {
	sm: {
		icon: "h-7 w-7 sm:h-8 sm:w-8",
		textTitle: "text-xs sm:text-sm"
	},
	md: {
		icon: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10",
		textTitle: "text-xs sm:text-sm md:text-base"
	},
	lg: {
		icon: "h-10 w-10 sm:h-12 sm:w-12",
		textTitle: "text-sm sm:text-base md:text-lg"
	},
	xl: {
		icon: "h-12 w-12 sm:h-16 sm:w-16",
		textTitle: "text-lg sm:text-xl md:text-2xl"
	}
};
function Logo({ className, size = "md", showText = true, textColor, variant = "default" }) {
	const currentSize = sizeMap[size] || sizeMap.md;
	const isLight = variant === "light" || textColor?.includes("white");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2 sm:gap-2.5 select-none shrink-0 min-w-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-slate-900 border border-blue-500/30 shadow-xs ring-1 ring-blue-500/20", currentSize.icon),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: areera_logo_default,
				alt: "Areera Travel & Tours logo",
				width: 64,
				height: 64,
				className: "h-full w-full object-cover"
			})
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col justify-center min-w-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: cn("font-display font-bold tracking-tight whitespace-nowrap leading-none", isLight ? "text-white" : "text-slate-900", currentSize.textTitle, textColor),
				children: [
					"AREERA",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-semibold", isLight ? "text-cyan-300" : "text-blue-600"),
						children: "TRAVEL & TOURS"
					})
				]
			})
		})]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "24",
		height: "24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.777.978-.953 1.178-.175.2-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.502-1.786-1.678-2.086-.176-.3-.019-.462.132-.612.135-.135.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.509-.677-.518l-.577-.01c-.2 0-.527.075-.802.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.98.58 3.82 1.58 5.37L2 22l4.79-1.55c1.5 1 3.28 1.56 5.25 1.56 5.52 0 10.01-4.49 10.01-10.01S17.56 2 12.04 2zm0 18.25c-1.72 0-3.32-.48-4.7-1.32l-.34-.2-3.48 1.12 1.14-3.39-.22-.36c-.95-1.5-1.46-3.23-1.46-5.08 0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25z" })
	});
}
function FloatingWhatsApp({ message = "Hello Areera Travel, I would like to inquire about visa and travel assistance.", className }) {
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
	const handleClick = () => {
		trackWhatsAppContact({
			context: "FloatingWhatsAppWidget",
			service: "General Consultation"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("hidden md:flex fixed bottom-6 right-6 z-50 items-center select-none", className),
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mr-3 hidden md:flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none", isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative flex h-2 w-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat with a Visa Specialist" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: whatsappUrl,
			onClick: handleClick,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Chat directly with Areera Travel on WhatsApp",
			className: "group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-emerald-600/40 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 [animation-duration:3s]",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-105" })
			]
		})]
	});
}
var serviceIcons = {
	visa: Stamp,
	ticket: TicketsPlane,
	attestation: FileCheckCorner,
	hotel: BedDouble,
	flight: PlaneTakeoff
};
function Navbar() {
	const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [mobileDropdown, setMobileDropdown] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedRegion, setSelectedRegion] = (0, import_react.useState)("Asia");
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [searchFocused, setSearchFocused] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const mobileSearchRef = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHomeActive = pathname === "/";
	const isServicesActive = pathname.startsWith("/services") || pathname.startsWith("/flight-reservation") || pathname.startsWith("/hotel-booking");
	const isDestinationsActive = pathname.startsWith("/countries");
	const isAboutActive = pathname === "/about";
	const isContactActive = pathname === "/contact";
	const isServicesOpen = openDropdown === "services";
	const isDestinationsOpen = openDropdown === "destinations";
	(0, import_react.useEffect)(() => {
		setOpenDropdown(null);
		setMobileOpen(false);
		setMobileDropdown(null);
		setSearchFocused(false);
		setQuery("");
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 15);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpenDropdown(null);
			if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) setSearchFocused(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const filteredCountries = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return countries.filter((c) => c.region === selectedRegion);
		return countries.filter((c) => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.region.toLowerCase().includes(q));
	}, [query, selectedRegion]);
	const globalSearchResults = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return countries;
		return countries.filter((c) => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.region.toLowerCase().includes(q) || c.isoCode.toLowerCase().includes(q));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("hidden md:block w-full text-xs transition-all duration-300 overflow-hidden pointer-events-auto", "bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white", isScrolled ? "max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none" : "max-h-11 opacity-100 py-1.5 border-b border-blue-500/30 shadow-xs"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 flex-nowrap whitespace-nowrap gap-4 text-[11px] sm:text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-white/95 font-medium whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-cyan-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-blue-300/50",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:flex items-center gap-1.5 text-white/90 whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-cyan-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Sat: 9:00 AM – 7:00 PM" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contactInfo.email}`,
								className: "hidden md:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-cyan-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.email })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-blue-300/50",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
								className: "flex items-center gap-1.5 text-white font-semibold hover:text-cyan-200 transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-cyan-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-blue-300/50",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20services.`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1.5 text-white font-semibold hover:bg-emerald-600 transition-colors whitespace-nowrap bg-[#25D366] px-2.5 py-0.5 rounded-full shadow-2xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-white" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-3.5 w-3.5 shrink-0 text-white" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "WhatsApp Desk"
									})
								]
							})
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				ref: dropdownRef,
				className: cn("w-full px-2.5 sm:px-6 pointer-events-auto transition-all duration-300", isScrolled ? "pt-2 sm:pt-3" : "pt-2.5 sm:pt-4"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("relative mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-full border px-3 sm:px-6 backdrop-blur-2xl transition-all duration-300", "border-blue-500/50 bg-slate-100/90 ring-1 ring-blue-400/30 shadow-[0_12px_36px_rgba(37,99,235,0.12),0_0_20px_rgba(59,130,246,0.12)]", isScrolled ? "border-blue-600/75 bg-slate-200/95 ring-blue-500/40 shadow-[0_16px_40px_rgba(37,99,235,0.18),0_0_24px_rgba(59,130,246,0.2)]" : ""),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "flex items-center shrink min-w-0 transition-opacity hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Desktop Navigation",
								className: "hidden lg:flex items-center relative rounded-full border border-slate-300/70 bg-slate-200/75 backdrop-blur-md px-2 py-1 shadow-inner overflow-visible",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										children: [
											isHomeActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-20 transition-all duration-300",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
												className: cn("h-5 w-5 transition-all duration-200", isHomeActive ? "text-blue-600 scale-105" : "text-slate-500 group-hover:text-slate-900 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isHomeActive ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"),
												children: "Home"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpenDropdown(isServicesOpen ? null : "services"),
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										"aria-expanded": isServicesOpen,
										"aria-haspopup": "true",
										children: [
											isServicesActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-20 transition-all duration-300",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
												className: cn("h-5 w-5 transition-all duration-200", isServicesActive || isServicesOpen ? "text-blue-600 scale-105" : "text-slate-500 group-hover:text-slate-900 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5", isServicesActive || isServicesOpen ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
													className: cn("h-3 w-3 transition-transform duration-200 ml-0.5", isServicesOpen ? "rotate-180 text-blue-600" : "text-slate-500 group-hover:text-slate-900"),
													"aria-hidden": "true"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpenDropdown(isDestinationsOpen ? null : "destinations"),
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										"aria-expanded": isDestinationsOpen,
										"aria-haspopup": "true",
										children: [
											isDestinationsActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-20 transition-all duration-300",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {
												className: cn("h-5 w-5 transition-all duration-200", isDestinationsActive || isDestinationsOpen ? "text-blue-600 scale-105" : "text-slate-500 group-hover:text-slate-900 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5", isDestinationsActive || isDestinationsOpen ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destinations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
													className: cn("h-3 w-3 transition-transform duration-200 ml-0.5", isDestinationsOpen ? "rotate-180 text-blue-600" : "text-slate-500 group-hover:text-slate-900"),
													"aria-hidden": "true"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/about",
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										children: [
											isAboutActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-20 transition-all duration-300",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
												className: cn("h-5 w-5 transition-all duration-200", isAboutActive ? "text-blue-600 scale-105" : "text-slate-500 group-hover:text-slate-900 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isAboutActive ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"),
												children: "About Us"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										children: [
											isContactActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-20 transition-all duration-300",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-blue-400/20 via-blue-500/10 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: cn("h-5 w-5 transition-all duration-200", isContactActive ? "text-blue-600 scale-105" : "text-slate-500 group-hover:text-slate-900 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isContactActive ? "text-blue-600 font-bold" : "text-slate-600 group-hover:text-slate-900"),
												children: "Contact"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/visa",
									className: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-blue-400/40 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/35 shrink-0 whitespace-nowrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply For Visa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setMobileOpen((v) => !v);
										setOpenDropdown(null);
									},
									className: "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/90 text-slate-700 lg:hidden hover:bg-slate-200 shrink-0 transition-colors mr-0.5 sm:mr-0 shadow-xs",
									"aria-label": mobileOpen ? "Close menu" : "Open menu",
									children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 sm:h-5 sm:w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4 sm:h-5 sm:w-5" })
								})]
							})
						]
					}),
					openDropdown === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-slate-200/90 bg-white/98 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12),0_0_25px_rgba(59,130,246,0.06)] backdrop-blur-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between border-b border-slate-200/80 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-widest text-blue-600",
										children: "Core Travel & Visa Solutions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors",
										children: "All Services Overview →"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
									children: services.map((service) => {
										const Icon = serviceIcons[service.icon] || Stamp;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: service.path,
											className: "group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-50/40 backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors",
													children: service.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2",
													children: service.short
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform",
												children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
											})]
										}, service.slug);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-600" }), "100% Embassy-Compliant Documentation & Verified Travel Vouchers"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
										className: "font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors",
										children: ["Direct Desk: ", contactInfo.phone]
									})]
								})
							]
						})
					}),
					openDropdown === "destinations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-slate-200/90 bg-white/98 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12),0_0_25px_rgba(59,130,246,0.06)] backdrop-blur-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-full sm:w-80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: query,
												onChange: (e) => setQuery(e.target.value),
												placeholder: "Filter countries by name...",
												"aria-label": "Filter countries",
												maxLength: 50,
												className: "h-9 w-full rounded-xl border border-slate-300 bg-slate-50/80 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-500 focus:bg-white backdrop-blur-md"
											}),
											query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setQuery(""),
												className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs",
												children: "✕"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-slate-500",
											children: "Popular:"
										}), popularDestinations.slice(0, 5).map((slug) => {
											const country = countries.find((c) => c.slug === slug);
											if (!country) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/countries/$slug",
												params: { slug: country.slug },
												className: "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/90 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors backdrop-blur-md",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
													isoCode: country.isoCode,
													countryName: country.name,
													size: "xs"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.name })]
											}, country.slug);
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries",
										className: "text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors",
										children: "View All 44+ Countries →"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[180px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 border-r border-slate-200/80 pr-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-2 block text-[10px] font-bold uppercase tracking-wider text-blue-600",
										children: "Regions"
									}), REGIONS.map((r) => {
										const count = countries.filter((c) => c.region === r).length;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setSelectedRegion(r);
												setQuery("");
											},
											className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors", selectedRegion === r && !query ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-slate-200/80 px-1.5 py-0.2 text-[10px] text-slate-700 font-bold",
												children: count
											})]
										}, r);
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-h-[220px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2.5 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold uppercase tracking-wider text-slate-700",
											children: query ? `Search Results (${filteredCountries.length})` : `${selectedRegion} Destinations (${filteredCountries.length})`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/countries/$slug",
											params: { slug: REGION_SLUGS[selectedRegion] },
											className: "text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors",
											children: [
												"Open ",
												selectedRegion,
												" Hub →"
											]
										})]
									}), filteredCountries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-36 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-xs text-slate-500 bg-slate-50",
										children: "No destinations match your search."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid max-h-64 grid-cols-2 gap-2 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 sm:grid-cols-3 lg:grid-cols-4",
										children: filteredCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/countries/$slug",
											params: { slug: c.slug },
											className: "group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-2 text-xs transition-colors hover:border-blue-400 hover:bg-blue-50/60 backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												isoCode: c.isoCode,
												countryName: c.name,
												fallbackEmoji: c.flag,
												size: "xs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate font-semibold text-slate-900 group-hover:text-blue-600 transition-colors",
													children: c.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-[10px] text-slate-500",
													children: c.capital
												})]
											})]
										}, c.slug))
									})]
								})]
							})]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("w-full pointer-events-none select-none shrink-0 transition-all duration-300", "h-20 sm:h-24 md:h-32"),
			"aria-hidden": "true"
		}),
		mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[100] lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
				onClick: () => setMobileOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-y-0 right-0 w-[290px] bg-white/98 backdrop-blur-3xl border-l border-slate-200 shadow-2xl shadow-slate-900/20 animate-slide-left flex flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-slate-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: () => setMobileOpen(false),
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-md shadow-blue-500/20",
							children: "AT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-bold text-slate-900 leading-tight",
							children: "Areera Travel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium text-blue-600",
							children: "World Explorer"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen(false),
						className: "flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: mobileSearchRef,
							className: "relative mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onFocus: () => setSearchFocused(true),
									onClick: () => setSearchFocused(true),
									onChange: (e) => {
										setQuery(e.target.value);
										setSearchFocused(true);
									},
									placeholder: "Search countries...",
									className: "h-10 w-full rounded-full border border-slate-300 bg-slate-100/90 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-blue-500 transition-all shadow-xs"
								}),
								query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQuery(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs p-1",
									"aria-label": "Clear search",
									children: "✕"
								}) : null,
								searchFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 top-full mt-2 max-h-72 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl z-50 animate-fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1.5 mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: query ? `Matching (${globalSearchResults.length})` : `All Countries (${countries.length})` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSearchFocused(false),
											className: "text-slate-500 hover:text-slate-800 lowercase text-[10px] bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200",
											children: "close"
										})]
									}), globalSearchResults.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-4 text-center text-xs text-slate-500",
										children: [
											"No destinations found for \"",
											query,
											"\"."
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-1",
										children: globalSearchResults.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/countries/$slug",
											params: { slug: c.slug },
											onClick: () => {
												setMobileOpen(false);
												setSearchFocused(false);
												setQuery("");
											},
											className: "flex items-center gap-2.5 rounded-xl px-2.5 py-2 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all group",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
													isoCode: c.isoCode,
													countryName: c.name,
													fallbackEmoji: c.flag,
													size: "xs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold text-slate-900 group-hover:text-blue-600 truncate",
														children: c.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[10px] text-slate-500 truncate",
														children: [
															c.capital,
															" · ",
															c.region
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" })
											]
										}, c.slug))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "space-y-1 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									onClick: () => setMobileOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isHomeActive ? "bg-blue-50 text-blue-700 border border-blue-200 font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: cn("h-[18px] w-[18px]", isHomeActive ? "text-blue-600" : "text-slate-400") }), "Home"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMobileDropdown(mobileDropdown === "services" ? null : "services"),
									className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isServicesActive || mobileDropdown === "services" ? "bg-blue-50 text-blue-700 border border-blue-200 font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: cn("h-[18px] w-[18px]", isServicesActive || mobileDropdown === "services" ? "text-blue-600" : "text-slate-400") }), "Services"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileDropdown === "services" && "rotate-180 text-blue-600") })]
								}), mobileDropdown === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-slate-200",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: s.path,
										onClick: () => setMobileOpen(false),
										className: "block py-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors",
										children: s.title
									}, s.slug))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMobileDropdown(mobileDropdown === "destinations" ? null : "destinations"),
									className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isDestinationsActive || mobileDropdown === "destinations" ? "bg-blue-50 text-blue-700 border border-blue-200 font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: cn("h-[18px] w-[18px]", isDestinationsActive || mobileDropdown === "destinations" ? "text-blue-600" : "text-slate-400") }), "Destinations"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileDropdown === "destinations" && "rotate-180 text-blue-600") })]
								}), mobileDropdown === "destinations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-slate-200 max-h-[28vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
									children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries/$slug",
										params: { slug: REGION_SLUGS[r] },
										onClick: () => setMobileOpen(false),
										className: "block py-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors",
										children: r
									}, r))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about",
									onClick: () => setMobileOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isAboutActive ? "bg-blue-50 text-blue-700 border border-blue-200 font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: cn("h-[18px] w-[18px]", isAboutActive ? "text-blue-600" : "text-slate-400") }), "About Us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									onClick: () => setMobileOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isContactActive ? "bg-blue-50 text-blue-700 border border-blue-200 font-semibold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: cn("h-[18px] w-[18px]", isContactActive ? "text-blue-600" : "text-slate-400") }), "Contact"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto pt-3 border-t border-slate-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/visa",
								onClick: () => setMobileOpen(false),
								className: "flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-4 w-4" }), "Apply For Visa"]
							})
						})
					]
				})]
			})]
		})
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-16 border-t border-blue-600/40 bg-gradient-to-b from-blue-700 via-blue-850 to-slate-950 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12 lg:gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
									size: "lg",
									variant: "light"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-sm leading-relaxed text-blue-100/85",
									children: "Visa filing support, air ticketing, document attestation, hotel bookings and flight reservations — handled by people who explain every step before you commit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-2 text-sm text-blue-100/90",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "mt-0.5 h-4 w-4 shrink-0 text-cyan-300",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: "h-4 w-4 shrink-0 text-cyan-300",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
												className: "hover:text-white transition-colors",
												children: contactInfo.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												className: "h-4 w-4 shrink-0 text-cyan-300",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${contactInfo.email}`,
												className: "hover:text-white transition-colors",
												children: contactInfo.email
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 lg:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300",
								children: "Core Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-blue-100/80",
								children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: s.path,
									className: "hover:text-white transition-colors",
									children: s.title
								}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "text-xs font-semibold text-cyan-300 hover:text-white transition-colors inline-block pt-1",
									children: "View All Services Overview →"
								}) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 lg:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-bold uppercase tracking-wider text-cyan-300",
								children: "Travel Intelligence & Hubs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-blue-100/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries",
										className: "hover:text-white transition-colors font-medium",
										children: "Global Visa Directory (50+ Destinations)"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/guides/visa-free-asian-destinations",
										className: "hover:text-white transition-colors inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visa-Free Asian Guide 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white/20 px-1.5 py-0.5 text-2xs font-bold text-cyan-200 border border-white/20",
											children: "Featured"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/flight-reservation",
										className: "hover:text-white transition-colors",
										children: "Flight Reservations (Embassy PNR)"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/hotel-booking",
										className: "hover:text-white transition-colors",
										children: "Hotel Booking Vouchers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-white transition-colors",
										children: "About Areera Travel & Team"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "hover:text-white transition-colors",
										children: "Contact Travel Desk"
									}) })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-8 border-t border-blue-600/40 pt-10 sm:grid-cols-2 lg:grid-cols-4",
					children: REGIONS.map((region) => {
						const list = countriesByRegion(region);
						const displayed = list.slice(0, 6);
						const remaining = list.length - displayed.length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/countries/$slug",
							params: { slug: REGION_SLUGS[region] },
							className: "mb-3 block text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors",
							children: region
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-1.5 text-xs text-blue-100/75",
							children: [displayed.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/countries/$slug",
								params: { slug: c.slug },
								className: "hover:text-white transition-colors truncate block",
								children: c.name
							}) }, c.slug)), remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/countries/$slug",
									params: { slug: REGION_SLUGS[region] },
									className: "text-xs font-semibold text-cyan-300 hover:text-white transition-colors",
									children: [
										"+",
										remaining,
										" more →"
									]
								})
							})]
						})] }, region);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border-t border-blue-600/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Areera Travel and Tours. Visa decisions rest solely with the relevant embassy or consulate; we provide documentation and filing support only."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "hover:text-white transition-colors underline-offset-4 hover:underline",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms-and-conditions",
								className: "hover:text-white transition-colors underline-offset-4 hover:underline",
								children: "Terms & Conditions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-white transition-colors underline-offset-4 hover:underline",
								children: "Contact Desk"
							})
						]
					})]
				})
			]
		})
	});
}
function MobileStickyCTA() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const countrySlug = (0, import_react.useMemo)(() => {
		if (pathname.startsWith("/countries/")) return pathname.split("/").filter(Boolean)[1] || null;
		return null;
	}, [pathname]);
	const country = (0, import_react.useMemo)(() => {
		return countrySlug ? getCountry(countrySlug) : null;
	}, [countrySlug]);
	contactInfo.whatsapp.replace(/[^0-9]/g, "");
	const cleanPhone = contactInfo.phone.replace(/[^0-9+]/g, "");
	const config = (0, import_react.useMemo)(() => {
		if (country) return {
			contextLabel: `${country.name} Visa`,
			subLabel: country.processingTime || "Fast processing",
			flagIso: country.isoCode,
			flagName: country.name,
			isOnline: true,
			waText: `Hello Areera Travel, I am on your website and would like to apply for a visa for ${country.name}.`,
			primaryAction: {
				label: "Apply Now",
				to: "/services/visa",
				search: { country: country.slug },
				icon: Stamp
			}
		};
		if (pathname.startsWith("/services/visa")) return {
			contextLabel: "Visa Assistance",
			subLabel: "Certified file review",
			isOnline: true,
			icon: Stamp,
			waText: "Hello Areera Travel, I need professional visa filing support.",
			primaryAction: {
				label: "Start File",
				href: "#visa-application-form",
				icon: Stamp
			}
		};
		if (pathname.startsWith("/flight-reservation")) return {
			contextLabel: "Flight Reservation",
			subLabel: "Verifiable embassy PNR",
			isOnline: true,
			icon: PlaneTakeoff,
			waText: "Hello Areera Travel, I would like to request a flight reservation for my visa file.",
			primaryAction: {
				label: "Book Flight",
				href: "#inquiry-form",
				icon: PlaneTakeoff
			}
		};
		if (pathname.startsWith("/hotel-booking")) return {
			contextLabel: "Hotel Booking",
			subLabel: "Visa-ready vouchers",
			isOnline: true,
			icon: BedDouble,
			waText: "Hello Areera Travel, I would like to inquire about hotel reservations.",
			primaryAction: {
				label: "Book Hotel",
				href: "#inquiry-form",
				icon: BedDouble
			}
		};
		if (pathname.startsWith("/services/attestation")) return {
			contextLabel: "Document Attestation",
			subLabel: "MOFA & Embassy stamp",
			isOnline: true,
			icon: FileCheckCorner,
			waText: "Hello Areera Travel, I need official document attestation assistance.",
			primaryAction: {
				label: "Attest File",
				href: "#inquiry-form",
				icon: FileCheckCorner
			}
		};
		return {
			contextLabel: "Areera Travel",
			subLabel: "Online Specialist",
			isOnline: true,
			icon: Earth,
			waText: "Hello Areera Travel, I would like a free travel consultation.",
			primaryAction: {
				label: "Get Quote",
				to: "/services/visa",
				icon: Stamp
			}
		};
	}, [pathname, country]);
	const PrimaryIcon = config.primaryAction.icon || ArrowRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": "Sticky mobile action bar",
		className: "fixed bottom-3 inset-x-0 mx-auto w-[94%] max-w-lg z-50 md:hidden rounded-full border border-slate-200/90 bg-white/96 p-2 shadow-[0_12px_36px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-2 px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2.5 pl-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative shrink-0 flex items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-900 shadow-sm ring-2 ring-blue-500/20 flex items-center justify-center",
						children: config.flagIso ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
							isoCode: config.flagIso,
							countryName: config.flagName || "",
							size: "sm",
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: areera_logo_default,
							alt: "Areera Travel & Tours",
							className: "h-full w-full object-cover"
						})
					}), config.isOnline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-xs font-bold text-slate-900 leading-tight",
						children: config.contextLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[10px] font-medium text-blue-600",
						children: config.subLabel
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${cleanPhone}`,
					onClick: () => trackPhoneContact({
						number: cleanPhone,
						location: `MobileStickyCTA - ${config.contextLabel}`
					}),
					"aria-label": "Call Areera Travel",
					className: "flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-blue-600" })
				}), "to" in config.primaryAction && config.primaryAction.to ? config.primaryAction.search ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/visa",
					search: config.primaryAction.search,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: config.primaryAction.label })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/visa",
					className: "flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: config.primaryAction.label })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: config.primaryAction.href || "#",
					className: "flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-cyan-400/30 active:scale-95 whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: config.primaryAction.label })]
				})]
			})]
		})
	});
}
var INITIAL_SUGGESTIONS = [
	"What documents are required for Turkey visa?",
	"How does verifiable flight reservation work?",
	"Which countries have easy e-visas for Pakistanis?",
	"How does HEC & MOFA degree attestation work?",
	"What is the bank statement requirement for UK?"
];
function AiTravelAdvisor() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const [hasInteracted, setHasInteracted] = (0, import_react.useState)(false);
	const messagesEndRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const currentCountry = (0, import_react.useMemo)(() => {
		if (pathname.startsWith("/countries/")) {
			const slug = pathname.split("/")[2];
			return slug ? getCountry(slug) : null;
		}
		return null;
	}, [pathname]);
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "welcome",
		sender: "assistant",
		text: "As-salamu alaykum! I am Areera AI, your 24/7 Travel & Visa Intelligence Assistant. Ask me anything about visa requirements for 42 countries, verifiable flight reservations with live PNR, hotel vouchers, or MOFA attestation.",
		timestamp: "Just now",
		actionChips: [
			"Turkey Visa Requirements",
			"Embassy Flight Reservation",
			"E-Visa Countries",
			"MOFA Attestation"
		]
	}]);
	(0, import_react.useEffect)(() => {
		if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [
		messages,
		isOpen,
		isTyping
	]);
	(0, import_react.useEffect)(() => {
		if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
	}, [isOpen]);
	const answerQuery = (userText) => {
		const textLower = userText.toLowerCase().trim();
		const matchedCountry = countries.find((c) => textLower.includes(c.name.toLowerCase()) || textLower.includes(c.slug.toLowerCase()) || textLower.includes(c.capital.toLowerCase()));
		if (matchedCountry) {
			const docs = matchedCountry.documents.slice(0, 5).map((d) => `• ${d}`).join("\n");
			const cats = matchedCountry.visaCategories?.slice(0, 3).map((vc) => `• **${vc.name}**: ${vc.duration} (${vc.typeBadge}) — Process: ${vc.processingTime}`).join("\n");
			return {
				text: `Here is the official visa intelligence for **${matchedCountry.name}** (${matchedCountry.region}):\n\n⏱️ **Processing Time**: ${matchedCountry.processingTime || "5-15 working days"}\n💰 **Government/Embassy Fees**: ${matchedCountry.fees || "Standard official embassy fee"}\n🏛️ **Capital**: ${matchedCountry.capital} | **Currency**: ${matchedCountry.currency}\n\n📋 **Core Document Requirements**:\n${docs}\n\n` + (cats ? `🏷️ **Available Visa Categories**:\n${cats}\n\n` : "") + `💡 *Need a verifiable flight reservation or hotel voucher for ${matchedCountry.name}? Areera Travel issues authentic GDS PNRs within hours.*`,
				suggestedCountry: matchedCountry.slug,
				suggestedLink: {
					title: `Explore Full ${matchedCountry.name} Guide`,
					url: `/countries/${matchedCountry.slug}`
				},
				actionChips: [
					`Apply for ${matchedCountry.name} Visa`,
					"Flight Reservation for Visa",
					"Hotel Booking Voucher"
				]
			};
		}
		if (textLower.includes("flight") || textLower.includes("reservation") || textLower.includes("pnr") || textLower.includes("dummy") || textLower.includes("itinerary") || textLower.includes("ticket")) return {
			text: "✈️ **Verifiable Flight Reservations for Visa Applications**:\n\n• **Official GDS PNR**: We generate live bookings via Sabre, Amadeus, and Galileo under your exact passport name.\n• **Direct Embassy Verification**: Visa officers can verify the reservation directly on the airline's official website.\n• **Risk-Free**: Protects you from paying for costly non-refundable air tickets before your visa is granted (as recommended by Schengen, UK, and US embassies).\n• **Turnaround**: Delivered to your WhatsApp or email in 15–45 minutes.",
			suggestedLink: {
				title: "Book Verifiable Flight Reservation",
				url: "/flight-reservation"
			},
			actionChips: [
				"Book Flight Reservation",
				"Hotel Booking Voucher",
				"WhatsApp Visa Expert"
			]
		};
		if (textLower.includes("hotel") || textLower.includes("accommodation") || textLower.includes("stay") || textLower.includes("voucher")) return {
			text: "🏨 **Confirmed Hotel Bookings for Visa Applications**:\n\n• **Embassy-Compliant Vouchers**: Fully confirmed reservations showing applicant full legal name, hotel contact, and exact travel dates.\n• **Accepted Worldwide**: 100% compliant with Schengen, UK, USA, Canada, Japan, and GCC visa criteria.\n• **Free Dates Adjustment**: In case of embassy rescheduling, we adjust dates seamlessly.",
			suggestedLink: {
				title: "Get Confirmed Hotel Voucher",
				url: "/hotel-booking"
			},
			actionChips: [
				"Book Hotel Voucher",
				"Flight Reservation",
				"WhatsApp Visa Expert"
			]
		};
		if (textLower.includes("attestation") || textLower.includes("mofa") || textLower.includes("hec") || textLower.includes("ibcc") || textLower.includes("degree") || textLower.includes("nikahnama") || textLower.includes("marriage")) return {
			text: "📜 **Official Document Attestation Services**:\n\nAreera Travel manages end-to-end legal attestation in Islamabad:\n1. **Educational Degrees**: IBCC (Matric/Inter) ➔ HEC (Degree & Transcript) ➔ MOFA ➔ Embassy (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain).\n2. **Family & Civil Records**: NADRA FRC, Nikahnama/Marriage Certificate, Birth Certificates, Police Clearance ➔ MOFA ➔ Destination Embassy.\n📍 **Office**: Blue Area, Islamabad with rapid daily courier dispatch nationwide.",
			suggestedLink: {
				title: "View Attestation Guide & Pricing",
				url: "/services/attestation"
			},
			actionChips: [
				"HEC Attestation",
				"MOFA Attestation",
				"UAE Embassy Attestation"
			]
		};
		if (textLower.includes("easy") || textLower.includes("visa free") || textLower.includes("evisa") || textLower.includes("e-visa") || textLower.includes("voa") || textLower.includes("arrival")) return {
			text: "🌍 **Easiest Travel Destinations for Pakistani Passport Holders (2026)**:\n\n• **Malaysia**: Fast e-Visa (2-4 days) + MDAC digital arrival card.\n• **Azerbaijan**: ASAN E-Visa issued online in 3 hours (Urgent) or 3 days (Standard).\n• **United Arab Emirates (UAE)**: 30-day or 60-day tourist e-visa with quick 24-48 hr turnaround.\n• **Maldives**: 30-day Free Visa on Arrival for tourists with confirmed hotel & IMUGA declaration.\n• **Sri Lanka**: Electronic Travel Authorization (ETA) approved within 24-48 hours.\n• **Thailand**: Fast-track eVOA or tourist sticker visa with basic financial proof.",
			suggestedLink: {
				title: "Read Visa-Free & Easy Access Guide 2026",
				url: "/guides/visa-free-asian-destinations"
			},
			actionChips: [
				"Malaysia Visa",
				"Azerbaijan Visa",
				"UAE Visa",
				"Thailand Visa"
			]
		};
		if (textLower.includes("bank") || textLower.includes("statement") || textLower.includes("finance") || textLower.includes("balance") || textLower.includes("funds")) return {
			text: "💰 **Embassy Bank Statement Guidelines**:\n\n• **Southeast Asia (Malaysia, Thailand, Vietnam)**: Recommended closing balance of PKR 400,000 – 600,000.\n• **Gulf / Middle East (UAE, Saudi, Oman)**: Recommended balance of PKR 300,000 – 500,000.\n• **UK, USA, Canada, Schengen, Australia**: Minimum PKR 1,500,000 – 3,500,000+ with 6 months of legitimate salary credits or verifiable business turnover.\n⚠️ *Rule of Thumb: The funds must reflect continuous, verified activity rather than sudden unexplained bulk deposits before visa filing.*",
			actionChips: [
				"UK Visa Details",
				"USA B1/B2 Visa",
				"WhatsApp Visa Expert"
			]
		};
		if (textLower.includes("who are you") || textLower.includes("founder") || textLower.includes("arslan") || textLower.includes("hareera") || textLower.includes("company") || textLower.includes("location") || textLower.includes("address") || textLower.includes("office")) return {
			text: "🏢 **About Areera Travel and Tours**:\n\n• **Founders**: Founded by **Arslan Ahmed** (Founder & Managing Director) and **Hareera** (Co-Founder & Director).\n• **Headquarters**: Blue Area, Islamabad Capital Territory 44000, Pakistan.\n• **Coverage**: Serving travelers nationwide across Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, and the global Pakistani diaspora.\n• **Helpline / WhatsApp**: +92 314 5556024 | Email: areeratravel@gmail.com",
			suggestedLink: {
				title: "About Areera Travel & Tours",
				url: "/about"
			},
			actionChips: [
				"Contact Office",
				"Visa Services",
				"WhatsApp Helpline"
			]
		};
		return {
			text: "Thank you for your question! Areera Travel and Tours specializes in **42 international destinations**, flight reservations with live PNR, verified hotel vouchers, and official MOFA attestation.\n\nWould you like specific details on:\n• A particular country (e.g. Turkey, UK, Malaysia, UAE, Saudi Arabia)?\n• Verifiable flight bookings for embassy filing?\n• Or speaking directly with an Islamabad visa consultant on WhatsApp?",
			actionChips: [
				"Turkey Visa",
				"UK Visa",
				"Flight Reservation",
				"Talk to Consultant"
			]
		};
	};
	const handleSend = (textToSend) => {
		const inputMsg = (textToSend || query).trim();
		if (!inputMsg) return;
		setHasInteracted(true);
		const userMsg = {
			id: String(Date.now()),
			sender: "user",
			text: inputMsg,
			timestamp: "Just now"
		};
		setMessages((prev) => [...prev, userMsg]);
		setQuery("");
		setIsTyping(true);
		setTimeout(() => {
			const responseData = answerQuery(inputMsg);
			const assistantMsg = {
				id: String(Date.now() + 1),
				sender: "assistant",
				text: responseData.text,
				timestamp: "Just now",
				suggestedCountry: responseData.suggestedCountry,
				suggestedLink: responseData.suggestedLink,
				actionChips: responseData.actionChips
			};
			setMessages((prev) => [...prev, assistantMsg]);
			setIsTyping(false);
		}, 600);
	};
	const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
	const handleWhatsAppChat = (inquiryContext) => {
		trackWhatsAppContact({ context: "ai_advisor_handoff" });
		const text = inquiryContext ? `Hello Areera Travel, I was using your AI Travel Assistant and would like expert assistance regarding: "${inquiryContext}"` : `Hello Areera Travel, I would like direct visa and travel consultation.`;
		window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(text)}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-20 left-4 z-40 md:bottom-6 md:left-6 print:hidden",
		children: !isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => {
				setIsOpen(true);
				setHasInteracted(true);
			},
			"aria-label": "Open Areera AI Travel Assistant",
			className: "group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 p-[2px] shadow-xl shadow-blue-950/15 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-slate-800 transition-colors group-hover:bg-slate-50 border border-slate-200/80 shadow-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-3 w-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-blue-500" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-blue-600 transition-transform group-hover:rotate-12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-wide sm:text-sm",
						children: "Ask Areera AI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-blue-500 animate-pulse" })
				]
			})
		})
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-start p-2 sm:p-4 md:p-6 bg-black/40 backdrop-blur-xs transition-opacity duration-200",
		onClick: () => setIsOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "flex flex-col h-[85vh] max-h-[680px] w-full max-w-[440px] rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/80 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/80 border border-blue-200 text-blue-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold tracking-tight text-slate-900",
								children: "Areera AI Assistant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20",
								children: "24/7 Intelligence"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-slate-500",
							children: "Visa Requirements • Live PNR • Attestation"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleWhatsAppChat(messages[messages.length - 1]?.text),
							title: "Hand off conversation to human expert on WhatsApp",
							className: "rounded-lg p-2 text-emerald-600 hover:bg-emerald-50 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsOpen(false),
							"aria-label": "Close Areera AI Assistant",
							className: "rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-slate-50/50",
					children: [
						currentCountry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-emerald-200 bg-emerald-50/90 p-2.5 flex items-center justify-between text-emerald-900 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: currentCountry.flag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium text-[11px]",
									children: [
										"Viewing ",
										currentCountry.name,
										" Visa Guide"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleSend(`What are all the visa requirements for ${currentCountry.name}?`),
								className: "text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 rounded-md transition-colors font-semibold shadow-xs",
								children: ["Ask about ", currentCountry.name]
							})]
						}),
						messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col space-y-1.5", msg.sender === "user" ? "items-end" : "items-start"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed", msg.sender === "user" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-xs shadow-xs" : "bg-white border border-slate-200 text-slate-800 rounded-bl-xs shadow-xs"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "whitespace-pre-wrap",
										children: msg.text
									}), msg.suggestedLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2.5 pt-2 border-t border-slate-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: msg.suggestedLink.url,
											onClick: () => setIsOpen(false),
											className: "inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: msg.suggestedLink.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
										})
									})]
								}),
								msg.actionChips && msg.actionChips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5 pt-1",
									children: msg.actionChips.map((chip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											if (chip.includes("WhatsApp") || chip.includes("Consultant") || chip.includes("Specialist")) handleWhatsAppChat(msg.text);
											else handleSend(chip);
										},
										className: "rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center gap-1 shadow-xs",
										children: [chip.includes("WhatsApp") || chip.includes("Consultant") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-2.5 w-2.5 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-2.5 w-2.5 text-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chip })]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[9px] text-slate-400 px-1",
									children: [
										msg.sender === "user" ? "You" : "Areera AI",
										" • ",
										msg.timestamp
									]
								})
							]
						}, msg.id)),
						isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-slate-500 bg-white border border-slate-200 rounded-2xl px-3.5 py-2.5 w-fit shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5 text-blue-600 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: "Consulting Areera Knowledge Base..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
					]
				}),
				!hasInteracted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-2 border-t border-slate-200 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-slate-500 mb-1.5 font-medium",
						children: "Frequently Asked:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5 overflow-x-auto no-scrollbar pb-1",
						children: INITIAL_SUGGESTIONS.slice(0, 3).map((sugg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleSend(sugg),
							className: "shrink-0 text-[10px] rounded-md bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 px-2 py-1 text-slate-600 transition-colors",
							children: sugg
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-slate-200 bg-emerald-50/80 px-4 py-2 text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-slate-600 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-emerald-600" }), "Prefer a human specialist?"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleWhatsAppChat(query || "General Visa Consultation"),
						className: "font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors",
						children: "Chat on WhatsApp ➔"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 border-t border-slate-200 bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleSend();
						},
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "text",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Ask about Turkey visa, flight PNR, MOFA...",
							className: "flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !query.trim() || isTyping,
							"aria-label": "Send query to Areera AI",
							className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex items-center justify-between text-[9px] text-slate-400 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified against Areera Travel Knowledge Base" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-500",
								children: "↵"
							}), " to send"]
						})]
					})]
				})
			]
		})
	})] });
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const searchResults = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		return countries.filter((c) => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.region.toLowerCase().includes(q)).slice(0, 6);
	}, [query]);
	const featuredCountries = (0, import_react.useMemo)(() => {
		return popularDestinations.slice(0, 5).map((slug) => getCountry(slug)).filter((c) => Boolean(c));
	}, []);
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		const firstMatch = searchResults[0];
		if (firstMatch) navigate({
			to: "/countries/$slug",
			params: { slug: firstMatch.slug }
		});
		else if (query.trim()) navigate({ to: "/countries" });
	};
	const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-background via-card/50 to-background px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] sm:h-[650px] sm:w-[650px]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[100px]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-30",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[400px] w-[400px] rounded-full border border-dashed border-blue-200 animate-spin [animation-duration:90s]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[650px] w-[650px] rounded-full border border-blue-100" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-4xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-3.5 w-3.5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Flight Path Not Found • Error 404" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-6 select-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-8xl sm:text-9xl font-extrabold tracking-tighter bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-400 bg-clip-text text-transparent",
							children: "404"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-10 w-10 text-primary/80 transform -rotate-45 animate-pulse" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
						children: "Uncharted Territory: This Destination Doesn’t Exist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "The page or travel route you are looking for has been moved, rescheduled, or never existed on our flight map. Let's get your journey back on schedule."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-8 max-w-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSearchSubmit,
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search a country, city, or service (e.g., Dubai, UK, Visa)...",
										className: "w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-10 pr-24 text-sm text-foreground placeholder:text-muted-foreground shadow-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "sm",
										className: "absolute right-2 rounded-xl px-3.5 text-xs font-semibold",
										children: "Search"
									})
								]
							}), searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl text-left divide-y divide-slate-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Matching Destinations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "py-1",
									children: searchResults.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/countries/$slug",
										params: { slug: c.slug },
										className: "flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												isoCode: c.isoCode,
												countryName: c.name,
												size: "sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-2 text-xs text-muted-foreground",
												children: [
													"(",
													c.capital,
													")"
												]
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground" })]
									}, c.slug))
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "rounded-xl gap-2 font-semibold shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), "Return to Homepage"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/countries",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "lg",
									className: "rounded-xl gap-2 font-semibold border-slate-200 bg-white hover:bg-slate-50 text-foreground shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4 text-primary" }), "Browse All 100+ Countries"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent("Hello Areera Travel, I couldn't find the page I was looking for and need assistance.")}`,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									size: "lg",
									className: "rounded-xl gap-2 font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-emerald-600" }), "WhatsApp Helpdesk"]
								})
							})
						]
					}),
					featuredCountries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 pt-8 border-t border-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Or jump to popular destinations" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2.5",
							children: featuredCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/countries/$slug",
								params: { slug: c.slug },
								className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 shadow-xs transition-all hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
									isoCode: c.isoCode,
									countryName: c.name,
									size: "xs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name })]
							}, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/visa",
								className: "group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-semibold text-sm text-foreground",
										children: "Visa Guidance"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-1",
										children: "Visas for 100+ countries"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/flight-reservation",
								className: "group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketsPlane, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-semibold text-sm text-foreground",
										children: "Flight Itineraries"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-1",
										children: "Verifiable embassy reservations"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/hotel-booking",
								className: "group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-semibold text-sm text-foreground",
										children: "Hotel Booking"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-1",
										children: "Confirmed stays worldwide"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/attestation",
								className: "group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-300 hover:shadow-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-semibold text-sm text-foreground",
										children: "Attestation"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-1",
										children: "MOFA & Embassy legalization"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "If you entered a web address manually, please verify your spelling or reach out to our team." })]
					})
				]
			})
		]
	});
}
/**
* Animated top progress indicator shown during route transitions and chunk loading.
*/
function GlobalLoadingBar() {
	if (!useRouterState({ select: (s) => s.status === "pending" })) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "progressbar",
		"aria-label": "Loading page",
		className: "fixed inset-x-0 top-0 z-[9999] h-1 overflow-hidden bg-primary/20 pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 animate-[loading-bar_1.5s_infinite_linear]" })
	});
}
/**
* Component that initializes GA4 analytics and automatically tracks
* discrete SPA pageviews whenever TanStack Router navigates.
*/
function AnalyticsTracker() {
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		initAnalytics();
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			const fullPath = location.pathname + (location.searchStr || "");
			trackPageView(fullPath, document.title);
		}, 100);
		return () => clearTimeout(timer);
	}, [location.pathname, location.searchStr]);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundPage, {});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong while rendering this page."
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-left overflow-x-auto rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs font-mono text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-bold",
						children: [
							error.name,
							": ",
							error.message
						]
					}), error.stack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-2 whitespace-pre-wrap text-[11px] text-muted-foreground opacity-80 max-h-48 overflow-y-auto",
						children: error.stack
					}) : null]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-input bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Areera Travel and Tours — World Explorer & Visa Assistance" },
			{
				name: "description",
				content: "Areera Travel and Tours provides certified visa assistance, verifiable flight reservations, hotel bookings, and official document attestation worldwide."
			},
			{
				property: "og:site_name",
				content: "Areera Travel and Tours"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://www.areeratravels.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Areera Travel and Tours — World Explorer & Visa Assistance"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "https://www.areeratravels.com/og-image.jpg"
			},
			{
				name: "theme-color",
				content: "#ffffff"
			},
			{
				name: "geo.region",
				content: "PK-IS"
			},
			{
				name: "geo.placename",
				content: "Islamabad, Pakistan"
			},
			{
				name: "geo.position",
				content: "33.7167;73.0667"
			},
			{
				name: "ICBM",
				content: "33.7167, 73.0667"
			},
			{
				name: "author",
				content: "Arslan Ahmed & Hareera — Areera Travel and Tours"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "48x48",
				href: "/favicon-48x48.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "preconnect",
				href: "https://www.clarity.ms"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "alternate",
				type: "text/markdown",
				title: "LLM Context (llms.txt)",
				href: "/llms.txt"
			}
		],
		scripts: [
			{ children: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ye2eq18xvb");` },
			{
				type: "application/ld+json",
				children: JSON.stringify(organizationSchema())
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(websiteSchema())
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsTracker, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedInsights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalLoadingBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-[60vh] pb-24 md:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileStickyCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTravelAdvisor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingWhatsApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
var $$splitComponentImporter$15 = () => import("./routes-D2iJHAFB.mjs");
var Route$19 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation" },
			{
				name: "description",
				content: "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations."
			},
			{
				name: "keywords",
				content: "visa consultants in islamabad, travel agency islamabad, visa assistance pakistan, flight reservation for visa, live pnr flight itinerary, confirmed hotel booking voucher, mofa attestation islamabad, hec degree attestation, tourist visa pakistan, air ticketing agency blue area, areera travel and tours"
			},
			{
				property: "og:title",
				content: "Areera Travel and Tours — Visa & Travel Experts"
			},
			{
				property: "og:description",
				content: "Premium visa filing, air ticketing, and attestation support for travellers across Asia, Middle East, Europe, and Africa."
			},
			{
				property: "og:image",
				content: "https://www.areeratravels.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Areera Travel and Tours — Global Travel & Visa Services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "https://www.areeratravels.com/og-image.jpg"
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(homeIndexSchema(homeFaqs))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-BLWePIXw.mjs");
var Route$18 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Areera Travel and Tours — Our Story & Team" },
			{
				name: "description",
				content: "Learn about Areera Travel and Tours: certified travel consultants providing reliable visa filing, flight booking, and consular attestation with 100% compliance."
			},
			{
				name: "keywords",
				content: "about areera travel and tours, arslan ahmed areera travel, hareera areera travel, registered travel agency islamabad, licensed visa consultancy blue area, trusted travel agency pakistan"
			},
			{
				property: "og:title",
				content: "About Areera Travel and Tours — Our Story & Team"
			},
			{
				property: "og:description",
				content: "Meet the consultants behind Areera Travel and Tours. Learn about our commitment to accurate visa filing, ticketing, and consular document attestation."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(aboutFaqs))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "About Us",
				item: "/about"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contact-Dg16yQHd.mjs");
var Route$17 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Areera Travel and Tours — Phone, WhatsApp & Office" },
			{
				name: "description",
				content: "Contact Areera Travel and Tours for expert visa filing, air tickets, document attestation, and flight booking. Reach us via Phone, WhatsApp, or at our office."
			},
			{
				name: "keywords",
				content: "contact areera travel, areera travels phone number, areera travels whatsapp, travel agency blue area islamabad, visa consultants contact islamabad"
			},
			{
				property: "og:title",
				content: "Contact Areera Travel and Tours — Phone, WhatsApp & Office"
			},
			{
				property: "og:description",
				content: "Connect with Areera Travel consultants by phone, WhatsApp, email, or visit our office for prompt, personalized travel assistance."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(contactFaqs))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Contact Us",
				item: "/contact"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
/** Placeholder grid shown while country routes/chunks are loading or retrying. */
function CountriesSkeleton({ cards = 6 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-6 h-9 w-72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-3 h-4 w-full max-w-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-8 h-12 w-full rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-24 rounded-full" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: cards }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card/60 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-10 rounded-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-5 w-32" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-3/4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-5 h-4 w-24" })
					]
				}, i))
			})
		]
	});
}
var $$splitErrorComponentImporter = () => import("./countries-Blz0Khmw.mjs");
var $$splitComponentImporter$12 = () => import("./countries-fHxncJ_y.mjs");
var Route$16 = createFileRoute("/countries")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	pendingComponent: CountriesPending,
	pendingMs: 200
});
function CountriesPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountriesSkeleton, {});
}
var $$splitComponentImporter$11 = () => import("./flight-reservation-DsFLX0Qw.mjs");
var Route$15 = createFileRoute("/flight-reservation")({
	pendingComponent: ServicePageSkeleton,
	pendingMs: 150,
	validateSearch: (search) => ({ destination: typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Flight Reservation — Visa-Ready Bookings & Ticketing | Areera Travel and Tours" },
			{
				name: "description",
				content: "Get verifiable flight reservations with active PNR for embassy visa submission, plus confirmed airline tickets upon approval on domestic and global routes."
			},
			{
				name: "keywords",
				content: "verifiable flight reservation for visa, flight itinerary for visa application, live pnr flight booking for embassy, dummy ticket for visa pakistan, airline reservation with gds pnr, schengen visa flight itinerary, sabre amadeus pnr verification, verifiable flight booking islamabad"
			},
			{
				property: "og:title",
				content: "Flight Reservation — Visa-Ready Bookings & Ticketing | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Embassy-compliant flight itineraries with verifiable PNR codes, plus confirmed ticketing across all major international airlines."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/flight-reservation"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/flight-reservation"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(flightFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Flight Reservation",
					item: "/flight-reservation"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Flight Reservation",
					description: "Verifiable flight reservations for embassy submission, plus confirmed ticketing when your visa is approved.",
					path: "/flight-reservation"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./hotel-booking-CyOLm8aM.mjs");
var Route$14 = createFileRoute("/hotel-booking")({
	pendingComponent: ServicePageSkeleton,
	pendingMs: 150,
	validateSearch: (search) => ({ destination: typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Hotel Booking — Verified Stays & Visa-Ready Reservations | Areera Travel and Tours" },
			{
				name: "description",
				content: "Book verified, embassy-compliant hotel reservations for your visa application, plus luxury and budget hotel accommodations worldwide with Areera Travel."
			},
			{
				name: "keywords",
				content: "confirmed hotel booking for visa, hotel voucher for embassy submission, proof of accommodation visa application, schengen visa hotel booking pakistan, hotel reservation voucher islamabad, embassy compliant hotel booking, genuine hotel voucher with confirmation number"
			},
			{
				property: "og:title",
				content: "Hotel Booking — Verified Stays & Visa-Ready Reservations | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Hand-picked hotels and confirmed embassy-approved hotel vouchers arranged by Areera Travel and Tours consultants across 100+ global destinations."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/hotel-booking"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/hotel-booking"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(hotelFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Hotel Booking",
					item: "/hotel-booking"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Hotel Booking",
					description: "Hand-picked stays across every price band, with confirmed bookings suitable for visa applications.",
					path: "/hotel-booking"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
function getLlmsFullContent() {
	try {
		const filePath = path.join(process.cwd(), "public", "llms-full.txt");
		if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");
	} catch {}
	return `# Areera Travel and Tours — Comprehensive Knowledge Base
> Detailed visa requirements, processing times, and documentation guidelines for 42 international destinations.
> Headquarters: Blue Area, Islamabad, Pakistan.
> WhatsApp: +92 314 5556024 | Email: areeratravel@gmail.com | Website: https://www.areeratravels.com
`;
}
var Route$13 = createFileRoute("/llms-full.txt")({ server: { handlers: {
	GET: async () => {
		const content = getLlmsFullContent();
		return new Response(content, {
			status: 200,
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	},
	HEAD: async () => {
		return new Response(null, {
			status: 200,
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	}
} } });
function getLlmsContent() {
	try {
		const filePath = path.join(process.cwd(), "public", "llms.txt");
		if (fs.existsSync(filePath)) return fs.readFileSync(filePath, "utf-8");
	} catch {}
	return `# Areera Travel and Tours
> Premier visa consultancy, air ticketing, verifiable embassy flight reservations, confirmed hotel vouchers, and official document attestation services headquartered in Blue Area, Islamabad, Pakistan.
> Managed by Founder & Managing Director Arslan Ahmed and Co-Founder & Director Hareera.

- Phone / WhatsApp: +92 314 5556024
- Email: areeratravel@gmail.com
- Website: https://www.areeratravels.com
- Full Documentation: https://www.areeratravels.com/llms-full.txt
`;
}
var Route$12 = createFileRoute("/llms.txt")({ server: { handlers: {
	GET: async () => {
		const content = getLlmsContent();
		return new Response(content, {
			status: 200,
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	},
	HEAD: async () => {
		return new Response(null, {
			status: 200,
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	}
} } });
var $$splitComponentImporter$9 = () => import("./privacy-policy-Bk6B-qEA.mjs");
var Route$11 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy | Areera Travel and Tours" },
			{
				name: "description",
				content: "Read the Areera Travel and Tours Privacy Policy. Learn how we handle passport details, visa files, flight bookings, and personal data with strict confidentiality."
			},
			{
				name: "keywords",
				content: "privacy policy areera travel and tours, client data protection, travel documentation security"
			},
			{
				property: "og:title",
				content: "Privacy Policy | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Our commitment to protecting your personal, passport, and travel documentation with bank-grade confidentiality and embassy-compliant processing."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/privacy-policy"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Privacy Policy",
				item: "/privacy-policy"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var robotsTxt = `# ==============================================================================
# Areera Travel and Tours - Official Robots.txt
# Website: https://www.areeratravels.com
# Unblocking: Google, Bing, ChatGPT, Gemini, Perplexity, Claude & All AI Engines
# ==============================================================================

User-agent: *
Allow: /
Disallow: /thank-you

# --- GOOGLE & GEMINI ---
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-News
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: GoogleOther-Image
Allow: /

User-agent: GoogleOther-Video
Allow: /

# --- BING & MICROSOFT COPILOT ---
User-agent: Bingbot
Allow: /

User-agent: bingbot
Allow: /

User-agent: msnbot
Allow: /

User-agent: BingPreview
Allow: /

User-agent: Microsoft-Bing-Bot
Allow: /

User-agent: Copilot
Allow: /

# --- CHATGPT & OPENAI ---
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

# --- PERPLEXITY AI ---
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-Search
Allow: /

# --- CLAUDE & ANTHROPIC ---
User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# --- OTHER MAJOR SEARCH ENGINES & AI ---
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

# --- SITEMAP & LLM PROTOCOL ---
Sitemap: https://www.areeratravels.com/sitemap.xml
# LLM-Index: https://www.areeratravels.com/llms.txt
# LLM-Full: https://www.areeratravels.com/llms-full.txt
`;
var Route$10 = createFileRoute("/robots.txt")({ server: { handlers: {
	GET: async () => {
		return new Response(robotsTxt, {
			status: 200,
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	},
	HEAD: async () => {
		return new Response(null, {
			status: 200,
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	}
} } });
var baseUrl = "https://www.areeratravels.com";
var staticRoutes = [
	{
		path: "/",
		priority: "1.0",
		changefreq: "daily"
	},
	{
		path: "/services",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/services/visa",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/services/ticket",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/services/attestation",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/flight-reservation",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/hotel-booking",
		priority: "0.9",
		changefreq: "weekly"
	},
	{
		path: "/countries",
		priority: "0.9",
		changefreq: "daily"
	},
	{
		path: "/guides/visa-free-asian-destinations",
		priority: "0.85",
		changefreq: "weekly"
	},
	{
		path: "/about",
		priority: "0.7",
		changefreq: "monthly"
	},
	{
		path: "/contact",
		priority: "0.8",
		changefreq: "weekly"
	},
	{
		path: "/privacy-policy",
		priority: "0.5",
		changefreq: "monthly"
	},
	{
		path: "/terms-and-conditions",
		priority: "0.5",
		changefreq: "monthly"
	}
];
var regionalRoutes = [
	{
		path: "/countries/asia",
		priority: "0.85",
		changefreq: "weekly"
	},
	{
		path: "/countries/middle-east",
		priority: "0.85",
		changefreq: "weekly"
	},
	{
		path: "/countries/north-africa",
		priority: "0.85",
		changefreq: "weekly"
	},
	{
		path: "/countries/africa",
		priority: "0.85",
		changefreq: "weekly"
	},
	{
		path: "/countries/western",
		priority: "0.85",
		changefreq: "weekly"
	}
];
function generateSitemap() {
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
	for (const route of staticRoutes) {
		xml += `  <url>\n`;
		xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
		xml += `    <lastmod>${today}</lastmod>\n`;
		xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
		xml += `    <priority>${route.priority}</priority>\n`;
		xml += `  </url>\n`;
	}
	for (const route of regionalRoutes) {
		xml += `  <url>\n`;
		xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
		xml += `    <lastmod>${today}</lastmod>\n`;
		xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
		xml += `    <priority>${route.priority}</priority>\n`;
		xml += `  </url>\n`;
	}
	for (const country of countries) {
		xml += `  <url>\n`;
		xml += `    <loc>${baseUrl}/countries/${country.slug}</loc>\n`;
		xml += `    <lastmod>${today}</lastmod>\n`;
		xml += `    <changefreq>weekly</changefreq>\n`;
		xml += `    <priority>0.8</priority>\n`;
		xml += `  </url>\n`;
	}
	xml += `</urlset>\n`;
	return xml;
}
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: {
	GET: async () => {
		const sitemap = generateSitemap();
		return new Response(sitemap, {
			status: 200,
			headers: {
				"Content-Type": "application/xml; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	},
	HEAD: async () => {
		return new Response(null, {
			status: 200,
			headers: {
				"Content-Type": "application/xml; charset=utf-8",
				"Cache-Control": "public, max-age=3600, s-maxage=86400"
			}
		});
	}
} } });
var $$splitComponentImporter$8 = () => import("./terms-and-conditions-DTH8pG0v.mjs");
var Route$8 = createFileRoute("/terms-and-conditions")({
	head: () => ({
		meta: [
			{ title: "Terms and Conditions — Service Agreement | Areera Travel and Tours" },
			{
				name: "description",
				content: "Read the Terms and Conditions for Areera Travel and Tours. Clear guidelines on visa filing, flight booking, hotel vouchers, and consular attestation services."
			},
			{
				name: "keywords",
				content: "terms and conditions areera travel, visa filing terms, flight booking and attestation policy"
			},
			{
				property: "og:title",
				content: "Terms and Conditions | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Service terms, embassy filing disclaimers, airline ticket rules, and refund policies for Areera Travel and Tours clients."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/terms-and-conditions"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/terms-and-conditions"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Terms and Conditions",
				item: "/terms-and-conditions"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./thank-you-CasmeaxX.mjs");
var Route$7 = createFileRoute("/thank-you")({
	validateSearch: (search) => ({
		service: typeof search["service"] === "string" ? search["service"].slice(0, 80) : void 0,
		name: typeof search["name"] === "string" ? search["name"].slice(0, 80) : void 0,
		ref: typeof search["ref"] === "string" ? search["ref"].slice(0, 40) : void 0
	}),
	head: () => ({
		meta: [
			{ title: "Thank You — Your Inquiry Has Been Received | Areera Travel and Tours" },
			{
				name: "description",
				content: "Thank you for contacting Areera Travel and Tours. Our senior travel specialists are reviewing your request and will contact you shortly."
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: "Inquiry Received | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Thank you for reaching out to Areera Travel and Tours. A travel specialist will connect with you via WhatsApp or phone shortly."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/thank-you"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/thank-you"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Inquiry Received",
				item: "/thank-you"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./countries.index-Ds8J4np1.mjs");
var Route$6 = createFileRoute("/countries/")({
	head: () => ({
		meta: [
			{ title: "Visa Destinations & Requirements by Country | Areera Travel and Tours" },
			{
				name: "description",
				content: "Browse visa requirements, embassy fees, processing times, and document checklists for 100+ global destinations with Areera Travel and Tours."
			},
			{
				name: "keywords",
				content: "visa destinations for pakistani passport, list of visa countries from pakistan, tourist visa requirements 2026, evisa countries for pakistani citizens, international travel visa guides, visa fees and processing times pakistan"
			},
			{
				property: "og:title",
				content: "Visa Destinations & Requirements by Country | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Detailed country visa guides with eligibility rules, required documents checklist, and professional filing support for 100+ destinations worldwide."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/countries"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/countries"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(countriesHubFaqs))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Countries",
				item: "/countries"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
function CountryDetailSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 animate-pulse",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground/40",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground/40",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-3xl border border-white/10 bg-card/60 p-6 sm:p-10 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-start sm:items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-24 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-64 rounded-lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-28" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-36" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" })
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-6 h-12 w-full max-w-3xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-card/40 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-7 rounded-lg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-3 h-4 w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-1 h-5 w-32" })
					]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-card/50 p-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-6 w-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4/5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-white/10 flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-16" })]
							})
						]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-8 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-7 w-56" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border border-white/5 bg-background/50 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-5 rounded-full shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-full" })]
					}, i))
				})]
			})
		]
	});
}
var $$splitComponentImporter$5 = () => import("./countries._slug-CQCaEor5.mjs");
var $$splitNotFoundComponentImporter = () => import("./countries._slug-C-Lg4JTp.mjs");
var Route$5 = createFileRoute("/countries/$slug")({
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	pendingComponent: CountryDetailSkeleton,
	pendingMs: 150,
	loader: ({ params }) => {
		const region = getRegionBySlug(params.slug);
		if (region) return {
			kind: "region",
			region
		};
		const country = getCountry(params.slug);
		if (country) return {
			kind: "country",
			country
		};
		throw notFound();
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Destination not found | Areera Travel and Tours" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = loaderData.kind === "region" ? `${loaderData.region} Visa Destinations — Country Guides & Requirements | Areera Travel and Tours` : `${loaderData.country.name} Visa Requirements, Fees & Application Guide | Areera Travel and Tours`;
		const description = loaderData.kind === "region" ? `Visa guidelines for all countries in ${loaderData.region}: required documents, e-visa processing timeframes, and flight booking assistance.` : `Apply for your ${loaderData.country.name} visa with Areera Travel. Complete document checklist, embassy fees, processing times, and certified application filing support.`;
		const breadcrumbItems = loaderData.kind === "region" ? [
			{
				name: "Home",
				item: "/"
			},
			{
				name: "Countries",
				item: "/countries"
			},
			{
				name: loaderData.region,
				item: `/countries/${params.slug}`
			}
		] : [
			{
				name: "Home",
				item: "/"
			},
			{
				name: "Countries",
				item: "/countries"
			},
			{
				name: loaderData.country.region,
				item: `/countries/${REGION_SLUGS[loaderData.country.region]}`
			},
			{
				name: loaderData.country.name,
				item: `/countries/${params.slug}`
			}
		];
		const faqQuestions = loaderData.kind === "country" ? countryFaqs(loaderData.country) : null;
		const keywords = loaderData.kind === "region" ? `${loaderData.region} visa destinations from pakistan, ${loaderData.region} tourist visas for pakistani citizens, travel to ${loaderData.region} from pakistan, ${loaderData.region} evisa guidelines, areera travel ${loaderData.region}` : `${loaderData.country.name} visa from pakistan, ${loaderData.country.name} visa requirements for pakistani citizens, ${loaderData.country.name} tourist visa fees pakistan, ${loaderData.country.name} evisa application islamabad, ${loaderData.country.name} visa processing time, ${loaderData.country.name} flight reservation live pnr, ${loaderData.country.name} hotel voucher for visa, visit ${loaderData.country.name} from pakistan, areera travels`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					name: "keywords",
					content: keywords
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `https://www.areeratravels.com/countries/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `https://www.areeratravels.com/countries/${params.slug}`
			}],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify(breadcrumbSchema(breadcrumbItems))
				},
				...loaderData.kind === "country" ? [{
					type: "application/ld+json",
					children: JSON.stringify(touristDestinationSchema(loaderData.country))
				}] : [],
				...faqQuestions ? [{
					type: "application/ld+json",
					children: JSON.stringify(faqPageSchema(faqQuestions))
				}] : []
			]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./guides.visa-free-asian-destinations-BbbPGDog.mjs");
var Route$4 = createFileRoute("/guides/visa-free-asian-destinations")({
	head: () => ({
		meta: [
			{ title: "Visa-Free Asian Destinations Guide 2026 | Areera Travels" },
			{
				name: "description",
				content: "Explore top visa-free and e-visa Asian destinations. Curated itineraries, flight times, verified costs, and tour packages from Areera Travels."
			},
			{
				name: "keywords",
				content: "visa free countries for pakistani passport 2026, easy evisa countries for pakistan, malaysia evisa pakistan, azerbaijan asan visa pakistan, maldives visa on arrival pakistani citizen, sri lanka eta pakistan, thailand evoa pakistan, budget international travel from pakistan"
			},
			{
				property: "og:title",
				content: "Visa-Free Asian Destinations Guide 2026 | Areera Travels"
			},
			{
				property: "og:description",
				content: "Complete travel guide for Asian outbound travelers. Entry rules, flight durations, package estimates, and halal-friendly itineraries."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/guides/visa-free-asian-destinations"
			},
			{
				property: "og:image",
				content: "https://www.areeratravels.com/og-image.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/guides/visa-free-asian-destinations"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([
				{
					name: "Home",
					item: "/"
				},
				{
					name: "Countries",
					item: "/countries"
				},
				{
					name: "Visa-Free Asian Destinations",
					item: "/guides/visa-free-asian-destinations"
				}
			]))
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "TouristTrip",
					"@id": "https://www.areeratravels.com/guides/visa-free-asian-destinations#trip",
					name: "Southeast & Central Asia Gateway Tour",
					description: "Comprehensive travel and visa route covering Malaysia, Thailand, Azerbaijan, and the Maldives for Asian outbound travelers.",
					provider: { "@id": "https://www.areeratravels.com/#agency" }
				}, {
					"@type": "FAQPage",
					"@id": "https://www.areeratravels.com/guides/visa-free-asian-destinations#faq",
					mainEntity: [
						{
							"@type": "Question",
							name: "Which Asian countries offer visa-free or visa-on-arrival entry to South Asian passport holders?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "According to Areera Travels, Malaysia, the Maldives, Nepal, and Sri Lanka offer visa-free access, automated electronic travel authorizations (ETA), or fee-exempt visa-on-arrival entry for multiple South Asian nationalities, with standard processing times under 48 hours."
							}
						},
						{
							"@type": "Question",
							name: "How much does a 7-day Asian holiday package cost with Areera Travels?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "A standard 7-day all-inclusive Asian tour package through Areera Travels costs between $550 and $1,150 USD per person. This covers 4-star accommodation, daily halal dining, internal airport transfers, guided tours, and visa filing documentation."
							}
						},
						{
							"@type": "Question",
							name: "Does Areera Travels provide verifiable flight reservations for visa applications?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Yes. Areera Travels issues authentic IATA/GDS-verifiable round-trip flight reservations and hotel booking vouchers with valid airline PNR codes that pass embassy and border verification without requiring non-refundable ticket purchases upfront."
							}
						},
						{
							"@type": "Question",
							name: "What is the best month to travel in Southeast Asia to avoid monsoons?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "The optimal window for Southeast Asia travel is November through April. During these dry months, destinations like Thailand, Malaysia, and Vietnam enjoy lower humidity, minimal rainfall, and calm sea conditions for island excursions."
							}
						}
					]
				}]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services.index-C7iomSdL.mjs");
var Route$3 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Travel Services — Visa, Ticketing & Attestation | Areera Travel and Tours" },
			{
				name: "description",
				content: "Explore travel services by Areera Travel and Tours: professional visa filing, domestic and international ticketing, document attestation, and hotel bookings."
			},
			{
				name: "keywords",
				content: "travel and visa services islamabad, visa filing ticketing attestation pakistan, flight reservations hotel vouchers, overseas travel consultancy pakistan, areera travel services"
			},
			{
				property: "og:title",
				content: "Travel Services — Visa, Ticketing & Attestation | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Full suite of travel services: expert visa advisory, confirmed flight ticketing, consular document attestation, and visa-compliant hotel reservations."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/services"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Services",
					item: "/services"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(servicesFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ItemList",
					name: "Areera Travel & Visa Services",
					itemListElement: services.map((s, idx) => ({
						"@type": "ListItem",
						position: idx + 1,
						item: serviceSchema(s)
					}))
				})
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services.attestation-XruX4fW2.mjs");
var Route$2 = createFileRoute("/services/attestation")({
	head: () => ({
		meta: [
			{ title: "Document Attestation Services — MOFA, HEC & Embassy Legalization | Areera Travel and Tours" },
			{
				name: "description",
				content: "Fast document attestation for educational, personal & commercial papers: HEC, MOFA, Notary, and foreign embassy legalization handled with complete tracking."
			},
			{
				name: "keywords",
				content: "mofa attestation islamabad, hec degree attestation pakistan, saudi embassy attestation pakistan, uae embassy attestation islamabad, qatar embassy attestation, document attestation blue area islamabad, nikahnama mofa attestation, birth certificate attestation nadra, ibcc attestation agent"
			},
			{
				property: "og:title",
				content: "Document Attestation Services — MOFA, HEC & Embassy Legalization | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Degree, diploma, marriage certificate, and commercial attestation for Gulf employment and global residency handled securely by Areera Travel and Tours."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/services/attestation"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/services/attestation"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(attestationFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Attestation Services",
						item: "/services/attestation"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Attestation Services",
					description: "Notary, HEC/board, Ministry of Foreign Affairs and embassy attestation handled in the correct order, with tracking at each stage.",
					path: "/services/attestation"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.ticket-CGhvVqwY.mjs");
var Route$1 = createFileRoute("/services/ticket")({
	head: () => ({
		meta: [
			{ title: "Air Ticket Booking — Domestic & International Routes | Areera Travel and Tours" },
			{
				name: "description",
				content: "Book domestic and international flight tickets at competitive fares. Enjoy instant booking, flexible date changes, and 24/7 itinerary support with Areera."
			},
			{
				name: "keywords",
				content: "air ticketing agency islamabad, international flight tickets pakistan, cheap airline tickets islamabad, umrah flight tickets, pia tickets agent blue area, emirates qatar airways flights, domestic air ticketing pakistan"
			},
			{
				property: "og:title",
				content: "Air Ticket Booking — Domestic & International Routes | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Compare airline fares across hundreds of routes, book group departures, and manage date changes with 24/7 support from Areera Travel and Tours."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/services/ticket"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/services/ticket"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(ticketFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Ticket Booking",
						item: "/services/ticket"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Ticket Booking",
					description: "Fare comparison across airlines, group bookings, date changes and 24/7 itinerary support for domestic and international routes.",
					path: "/services/ticket"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.visa-B9eOzuy1.mjs");
var Route = createFileRoute("/services/visa")({
	pendingComponent: ServicePageSkeleton,
	pendingMs: 150,
	validateSearch: (search) => ({ country: typeof search["country"] === "string" ? search["country"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Visa Services — Tourist, Business, Student & Work Visas | Areera Travel and Tours" },
			{
				name: "description",
				content: "End-to-end visa filing support for tourist, business, student, and work visas: eligibility assessment, document checklist, form filling, and embassy submission."
			},
			{
				name: "keywords",
				content: "visa assistance pakistan, visa consultancy services islamabad, tourist visa filing pakistan, business visa consultants islamabad, schengen visa file preparation, uk visitor visa agent, usa ds160 visa filing, evisa application pakistan, embassy appointment booking islamabad, visit visa documentation"
			},
			{
				property: "og:title",
				content: "Visa Services — Tourist, Business, Student & Work Visas | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Professional visa filing support for 100+ countries: document verification, biometric appointment scheduling, and complete embassy compliance."
			},
			{
				property: "og:url",
				content: "https://www.areeratravels.com/services/visa"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.areeratravels.com/services/visa"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(visaFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Visa Services",
						item: "/services/visa"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Visa Services",
					description: "End-to-end visa guidance: eligibility review, document checklist, form filling, appointment scheduling and submission support.",
					path: "/services/visa"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$18.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var CountriesRoute = Route$16.update({
	id: "/countries",
	path: "/countries",
	getParentRoute: () => Route$20
});
var FlightReservationRoute = Route$15.update({
	id: "/flight-reservation",
	path: "/flight-reservation",
	getParentRoute: () => Route$20
});
var HotelBookingRoute = Route$14.update({
	id: "/hotel-booking",
	path: "/hotel-booking",
	getParentRoute: () => Route$20
});
var LlmsFullDottxtRoute = Route$13.update({
	id: "/llms-full.txt",
	path: "/llms-full.txt",
	getParentRoute: () => Route$20
});
var LlmsDottxtRoute = Route$12.update({
	id: "/llms.txt",
	path: "/llms.txt",
	getParentRoute: () => Route$20
});
var PrivacyPolicyRoute = Route$11.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$20
});
var RobotsDottxtRoute = Route$10.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$20
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$20
});
var TermsAndConditionsRoute = Route$8.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$20
});
var ThankYouRoute = Route$7.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => Route$20
});
var CountriesIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => CountriesRoute
});
var CountriesSlugRoute = Route$5.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CountriesRoute
});
var GuidesVisaFreeAsianDestinationsRoute = Route$4.update({
	id: "/guides/visa-free-asian-destinations",
	path: "/guides/visa-free-asian-destinations",
	getParentRoute: () => Route$20
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$20
});
var ServicesAttestationRoute = Route$2.update({
	id: "/services/attestation",
	path: "/services/attestation",
	getParentRoute: () => Route$20
});
var ServicesTicketRoute = Route$1.update({
	id: "/services/ticket",
	path: "/services/ticket",
	getParentRoute: () => Route$20
});
var ServicesVisaRoute = Route.update({
	id: "/services/visa",
	path: "/services/visa",
	getParentRoute: () => Route$20
});
var CountriesRouteChildren = {
	CountriesSlugRoute,
	CountriesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CountriesRoute: CountriesRoute._addFileChildren(CountriesRouteChildren),
	FlightReservationRoute,
	HotelBookingRoute,
	LlmsFullDottxtRoute,
	LlmsDottxtRoute,
	PrivacyPolicyRoute,
	RobotsDottxtRoute,
	SitemapDotxmlRoute,
	TermsAndConditionsRoute,
	ThankYouRoute,
	GuidesVisaFreeAsianDestinationsRoute,
	ServicesAttestationRoute,
	ServicesTicketRoute,
	ServicesVisaRoute,
	ServicesIndexRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
if (typeof window !== "undefined") {
	const reloadOnce = () => {
		const KEY = "chunk-reload";
		if (sessionStorage.getItem(KEY)) return;
		sessionStorage.setItem(KEY, "1");
		window.location.reload();
	};
	window.addEventListener("vite:preloadError", (event) => {
		event.preventDefault();
		reloadOnce();
	});
	window.addEventListener("unhandledrejection", (event) => {
		if (String(event.reason?.message ?? "").includes("Failed to fetch dynamically imported module")) reloadOnce();
	});
	window.setTimeout(() => sessionStorage.removeItem("chunk-reload"), 1e4);
}
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$15 as a, WhatsAppIcon as c, Route$14 as i, getRouter as l, NotFoundPage as n, Route$5 as o, Route as r, Route$7 as s, CountriesSkeleton as t, router_exports as u };
