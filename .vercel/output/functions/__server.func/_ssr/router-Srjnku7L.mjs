import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as notFound, _ as Link, c as HeadContent, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as useLocation, m as lazyRouteComponent, p as Outlet, s as Scripts, u as useRouterState, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Compass, E as Mail, H as Clock, K as ChevronRight, L as FileCheckCorner, Q as BedDouble, S as MessageSquare, T as MapPin, U as CircleQuestionMark, Z as Building2, b as Phone, d as ShieldCheck, et as ArrowRight, j as House, k as LayoutGrid, l as Stamp, m as Search, o as TicketsPlane, q as ChevronDown, t as X, v as Plane, w as Menu, y as PlaneTakeoff, z as Earth } from "../_libs/lucide-react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as SpeedInsights } from "../_libs/vercel__speed-insights.mjs";
import { B as cn, C as countriesHubFaqs, D as flightFaqs, I as ticketFaqs, P as servicesFaqs, R as visaFaqs, T as countryFaqs, _ as aboutFaqs, c as getCountry, f as contactInfo, h as testimonials, i as REGION_SLUGS, j as hotelFaqs, k as homeFaqs, l as getRegionBySlug, m as siteConfig, n as CountryFlag, o as countries, p as services, r as REGIONS, s as countriesByRegion, u as popularDestinations, x as contactFaqs, y as attestationFaqs, z as Button } from "./router-Srjnku7L2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/json-ld-DrJevHPQ.js
var DEFAULT_ORIGIN = "https://www.areeratravels.com";
var LOGO_URL = "/areera-logo.png";
var OG_IMAGE_URL = "/og-image.jpg";
/**
* Generates Schema.org TravelAgency & LocalBusiness structured data.
* Ideal for Google Knowledge Graph, Local SEO, and Rich Results.
*/
function organizationSchema(origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": [
			"TravelAgency",
			"LocalBusiness",
			"Organization"
		],
		"@id": `${base}/#agency`,
		name: "Areera Travel and Tours",
		alternateName: ["Areera Travels", "Areera World Explorer"],
		legalName: "Areera Travel and Tours",
		url: `${base}/`,
		logo: {
			"@type": "ImageObject",
			url: `${base}${LOGO_URL}`,
			width: "512",
			height: "512"
		},
		image: `${base}${OG_IMAGE_URL}`,
		description: "Certified visa assistance, verifiable embassy flight reservations, hotel vouchers, and official document attestation services worldwide.",
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
			addressCountry: "PK"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 33.7167,
			longitude: 73.0667
		},
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
		founder: [{
			"@type": "Person",
			name: "Arslan Ahmed",
			jobTitle: "Founder & Managing Director"
		}, {
			"@type": "Person",
			name: "Hareera",
			jobTitle: "Co-Founder & Director"
		}],
		areaServed: [
			{
				"@type": "Country",
				name: "Pakistan"
			},
			{
				"@type": "Country",
				name: "United Arab Emirates"
			},
			{
				"@type": "Country",
				name: "Saudi Arabia"
			},
			{
				"@type": "Country",
				name: "United Kingdom"
			},
			{
				"@type": "Country",
				name: "United States"
			},
			{
				"@type": "AdministrativeArea",
				name: "Worldwide"
			}
		],
		sameAs: ["https://www.facebook.com/areeratravels", "https://www.instagram.com/areeratravels"]
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
		inLanguage: "en-US"
	};
}
/**
* Generates Schema.org BreadcrumbList structured data.
*/
function breadcrumbSchema(items, origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
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
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: service.title,
					description: service.description
				}
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
* Generates Schema.org TouristDestination structured data for country visa guides.
*/
function touristDestinationSchema(country, origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	return {
		"@context": "https://schema.org",
		"@type": "TouristDestination",
		"@id": `${base}/countries/${country.slug}#destination`,
		name: country.name,
		description: country.blurb,
		url: `${base}/countries/${country.slug}`,
		image: `${base}${OG_IMAGE_URL}`,
		touristType: [
			"Tourist Visa",
			"Business Visa",
			"Student Visa",
			"Holiday Traveler"
		],
		containedInPlace: {
			"@type": "AdministrativeArea",
			name: country.region
		},
		provider: { "@id": `${base}/#agency` }
	};
}
/**
* Generates comprehensive Homepage / Index Schema.org JSON-LD graph.
* Combines WebSite, TravelAgency with AggregateRating & Reviews, WebPage, Breadcrumbs, and FAQs.
*/
function homeIndexSchema(faqs = [], origin = DEFAULT_ORIGIN) {
	const base = origin || "https://www.areeratravels.com";
	const org = organizationSchema(base);
	const web = websiteSchema(base);
	const faqObj = faqs.length > 0 ? faqPageSchema(faqs) : null;
	return {
		"@context": "https://schema.org",
		"@graph": [
			{ ...web },
			{
				...org,
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "4.9",
					reviewCount: "184",
					bestRating: "5",
					worstRating: "1"
				},
				review: testimonials.map((t) => ({
					"@type": "Review",
					author: {
						"@type": "Person",
						name: t.name
					},
					reviewBody: t.quote,
					reviewRating: {
						"@type": "Rating",
						ratingValue: "5",
						bestRating: "5",
						worstRating: "1"
					}
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
							url: `${base}${s.path}`
						}
					}))
				}
			},
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
			...faqObj ? [{
				...faqObj,
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
//#region node_modules/.nitro/vite/services/ssr/assets/router-Srjnku7L.js
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
var styles_default = "/assets/styles-D0Qmnp6N.css";
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
function Logo({ className, size = "md", showText = true, textColor }) {
	const currentSize = sizeMap[size] || sizeMap.md;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2 sm:gap-2.5 select-none shrink-0 min-w-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative shrink-0 flex items-center justify-center overflow-hidden rounded-full bg-slate-900 border border-blue-400/40 shadow-xs ring-1 ring-blue-500/20", currentSize.icon),
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
				className: cn("font-display font-bold tracking-tight text-white whitespace-nowrap leading-none", currentSize.textTitle, textColor),
				children: ["AREERA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-blue-400 font-semibold",
					children: "TRAVEL & TOURS"
				})]
			})
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
				className: cn("hidden md:block w-full bg-slate-950/85 text-xs text-white/80 transition-all duration-300 overflow-hidden pointer-events-auto backdrop-blur-md", isScrolled ? "max-h-0 opacity-0 -translate-y-full py-0 border-transparent pointer-events-none" : "max-h-11 opacity-100 py-1.5 border-b border-blue-500/20 shadow-sm"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 flex-nowrap whitespace-nowrap gap-4 text-[11px] sm:text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-white/90 font-medium whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/20",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:flex items-center gap-1.5 text-white/80 whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Sat: 9:00 AM – 7:00 PM" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contactInfo.email}`,
								className: "hidden md:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.email })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-white/20",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
								className: "flex items-center gap-1.5 text-white font-semibold hover:text-cyan-300 transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/20",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20services.`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1.5 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors whitespace-nowrap bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3 w-3 shrink-0" }),
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
						className: cn("relative mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-full border border-blue-500/40 bg-slate-950/85 px-3 sm:px-6 backdrop-blur-2xl transition-all duration-300", isScrolled ? "border-blue-400/55 bg-slate-950/92 shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.35)]" : "shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(59,130,246,0.22)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "flex items-center shrink min-w-0 transition-opacity hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Desktop Navigation",
								className: "hidden lg:flex items-center relative rounded-full border border-blue-500/30 bg-black/40 backdrop-blur-md px-2 py-1 shadow-inner overflow-visible",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										children: [
											isHomeActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
												className: cn("h-5 w-5 transition-all duration-200", isHomeActive ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105" : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isHomeActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-slate-400 group-hover:text-slate-200"),
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
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
												className: cn("h-5 w-5 transition-all duration-200", isServicesActive || isServicesOpen ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105" : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5", isServicesActive || isServicesOpen ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-slate-400 group-hover:text-slate-200"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
													className: cn("h-3 w-3 transition-transform duration-200 ml-0.5", isServicesOpen ? "rotate-180 text-cyan-400" : "text-slate-400 group-hover:text-slate-200"),
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
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, {
												className: cn("h-5 w-5 transition-all duration-200", isDestinationsActive || isDestinationsOpen ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105" : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-0.5", isDestinationsActive || isDestinationsOpen ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-slate-400 group-hover:text-slate-200"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destinations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
													className: cn("h-3 w-3 transition-transform duration-200 ml-0.5", isDestinationsOpen ? "rotate-180 text-cyan-400" : "text-slate-400 group-hover:text-slate-200"),
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
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
												className: cn("h-5 w-5 transition-all duration-200", isAboutActive ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105" : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isAboutActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-slate-400 group-hover:text-slate-200"),
												children: "About Us"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "relative flex flex-col items-center justify-center px-4 py-1.5 min-w-[76px] transition-all group outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0",
										children: [
											isContactActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[9px] left-1/2 -translate-x-1/2 h-[5px] w-12 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 shadow-[0_0_14px_#38bdf8,0_0_22px_rgba(56,189,248,0.85)] z-20 transition-all duration-300 animate-pulse-glow",
												"aria-hidden": "true"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute -top-[8px] left-1/2 -translate-x-1/2 h-10 w-16 sm:w-20 rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-transparent blur-md pointer-events-none z-10 transition-all duration-300",
												"aria-hidden": "true"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: cn("h-5 w-5 transition-all duration-200", isContactActive ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105" : "text-slate-400 group-hover:text-slate-200 group-hover:scale-105"),
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("mt-1 text-[11px] font-semibold tracking-wide transition-all duration-200", isContactActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-slate-400 group-hover:text-slate-200"),
												children: "Contact"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 sm:gap-3 shrink-0 whitespace-nowrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20assistance.`,
										target: "_blank",
										rel: "noreferrer",
										className: cn("flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/15 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap shadow-xs backdrop-blur-md", isScrolled ? "opacity-100 scale-100" : "opacity-90 hover:opacity-100 hidden sm:flex"),
										title: "Chat directly on WhatsApp",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "WhatsApp"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/visa",
										className: "hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 border border-cyan-400/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-cyan-400/40 shrink-0 whitespace-nowrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply For Visa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setMobileOpen((v) => !v);
											setOpenDropdown(null);
										},
										className: "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-blue-400/40 bg-white/10 text-white lg:hidden hover:bg-white/20 shrink-0 backdrop-blur-md transition-colors mr-0.5 sm:mr-0",
										"aria-label": mobileOpen ? "Close menu" : "Open menu",
										children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 sm:h-5 sm:w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4 sm:h-5 sm:w-5" })
									})
								]
							})
						]
					}),
					openDropdown === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-blue-500/35 bg-slate-950/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.22)] backdrop-blur-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between border-b border-white/10 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-widest text-cyan-300",
										children: "Core Travel & Visa Solutions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "text-xs font-semibold text-cyan-400 hover:text-white hover:underline transition-colors",
										children: "All Services Overview →"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
									children: services.map((service) => {
										const Icon = serviceIcons[service.icon] || Stamp;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: service.path,
											className: "group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-blue-400/50 hover:bg-white/10 backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-cyan-300 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors",
													children: service.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1.5 text-xs text-slate-300/80 leading-relaxed line-clamp-2",
													children: service.short
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform",
												children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
											})]
										}, service.slug);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap items-center justify-between rounded-2xl border border-blue-500/20 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-400" }), "100% Embassy-Compliant Documentation & Verified Travel Vouchers"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
										className: "font-semibold text-white hover:text-cyan-300 hover:underline transition-colors",
										children: ["Direct Desk: ", contactInfo.phone]
									})]
								})
							]
						})
					}),
					openDropdown === "destinations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 top-[calc(100%+10px)] mx-auto max-w-7xl px-3 sm:px-6 z-50 animate-fade-up",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-blue-500/35 bg-slate-950/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.22)] backdrop-blur-3xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-full sm:w-80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/70" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: query,
												onChange: (e) => setQuery(e.target.value),
												placeholder: "Filter countries by name...",
												"aria-label": "Filter countries",
												maxLength: 50,
												className: "h-9 w-full rounded-xl border border-blue-400/30 bg-white/10 pl-9 pr-3 text-xs text-white placeholder:text-white/70 outline-none transition-colors focus:border-cyan-400/60 backdrop-blur-md"
											}),
											query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setQuery(""),
												className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-xs",
												children: "✕"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-white/80",
											children: "Popular:"
										}), popularDestinations.slice(0, 5).map((slug) => {
											const country = countries.find((c) => c.slug === slug);
											if (!country) return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/countries/$slug",
												params: { slug: country.slug },
												className: "inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-white/10 px-2.5 py-1 text-xs text-slate-100 hover:border-cyan-400/50 hover:bg-white/20 transition-colors backdrop-blur-md",
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
										className: "text-xs font-semibold text-cyan-400 hover:text-white hover:underline transition-colors",
										children: "View All 44+ Countries →"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-[180px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 border-r border-white/10 pr-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-2 block text-[10px] font-bold uppercase tracking-wider text-cyan-300",
										children: "Regions"
									}), REGIONS.map((r) => {
										const count = countries.filter((c) => c.region === r).length;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setSelectedRegion(r);
												setQuery("");
											},
											className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors", selectedRegion === r && !query ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-xs" : "text-white/80 hover:bg-white/10 hover:text-white"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-white/15 px-1.5 py-0.2 text-[10px] text-white/90 font-bold",
												children: count
											})]
										}, r);
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-h-[220px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-2.5 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold uppercase tracking-wider text-white/80",
											children: query ? `Search Results (${filteredCountries.length})` : `${selectedRegion} Destinations (${filteredCountries.length})`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/countries/$slug",
											params: { slug: REGION_SLUGS[selectedRegion] },
											className: "text-xs text-cyan-400 hover:text-white transition-colors",
											children: [
												"Open ",
												selectedRegion,
												" Hub →"
											]
										})]
									}), filteredCountries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-white/60 bg-white/5",
										children: "No destinations match your search."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid max-h-64 grid-cols-2 gap-2 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 sm:grid-cols-3 lg:grid-cols-4",
										children: filteredCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/countries/$slug",
											params: { slug: c.slug },
											className: "group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2 text-xs transition-colors hover:border-cyan-400/50 hover:bg-white/15 backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												isoCode: c.isoCode,
												countryName: c.name,
												fallbackEmoji: c.flag,
												size: "xs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate font-semibold text-white group-hover:text-cyan-300 transition-colors",
													children: c.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-[10px] text-slate-300/80",
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
				className: "absolute inset-y-0 right-0 w-[290px] bg-slate-950/95 backdrop-blur-3xl border-l border-blue-500/25 shadow-2xl shadow-black/80 animate-slide-left flex flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-5 py-4 border-b border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						onClick: () => setMobileOpen(false),
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30",
							children: "AT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-bold text-white leading-tight",
							children: "Areera Travel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-medium text-cyan-300",
							children: "World Explorer"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen(false),
						className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onFocus: () => setSearchFocused(true),
									onClick: () => setSearchFocused(true),
									onChange: (e) => {
										setQuery(e.target.value);
										setSearchFocused(true);
									},
									placeholder: "Search countries...",
									className: "h-10 w-full rounded-full border border-blue-400/35 bg-white/10 pl-9 pr-9 text-sm text-white placeholder:text-slate-400 outline-none focus:bg-white/15 focus:border-cyan-400 transition-all shadow-xs"
								}),
								query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQuery(""),
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs p-1",
									"aria-label": "Clear search",
									children: "✕"
								}) : null,
								searchFocused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 top-full mt-2 max-h-72 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-blue-500/40 bg-slate-950/98 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_24px_rgba(59,130,246,0.35)] backdrop-blur-3xl z-50 animate-fade-up",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 border-b border-blue-500/20 pb-1.5 mb-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: query ? `Matching (${globalSearchResults.length})` : `All Countries (${countries.length})` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSearchFocused(false),
											className: "text-slate-400 hover:text-white lowercase text-[10px] bg-white/5 px-2 py-0.5 rounded-full border border-white/10",
											children: "close"
										})]
									}), globalSearchResults.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "py-4 text-center text-xs text-slate-400",
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
											className: "flex items-center gap-2.5 rounded-xl px-2.5 py-2 hover:bg-blue-500/25 hover:border-blue-400/40 border border-transparent transition-all group",
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
														className: "text-xs font-semibold text-white group-hover:text-cyan-300 truncate",
														children: c.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-[10px] text-slate-400 truncate",
														children: [
															c.capital,
															" · ",
															c.region
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" })
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
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isHomeActive ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30" : "text-white/80 hover:bg-white/5 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: cn("h-[18px] w-[18px]", isHomeActive ? "text-cyan-400" : "text-white/50") }), "Home"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMobileDropdown(mobileDropdown === "services" ? null : "services"),
									className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isServicesActive || mobileDropdown === "services" ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30" : "text-white/80 hover:bg-white/5 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: cn("h-[18px] w-[18px]", isServicesActive || mobileDropdown === "services" ? "text-cyan-400" : "text-white/50") }), "Services"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileDropdown === "services" && "rotate-180 text-cyan-400") })]
								}), mobileDropdown === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-blue-500/20",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: s.path,
										onClick: () => setMobileOpen(false),
										className: "block py-1.5 text-xs font-medium text-white/70 hover:text-cyan-300 transition-colors",
										children: s.title
									}, s.slug))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setMobileDropdown(mobileDropdown === "destinations" ? null : "destinations"),
									className: cn("flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isDestinationsActive || mobileDropdown === "destinations" ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30" : "text-white/80 hover:bg-white/5 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: cn("h-[18px] w-[18px]", isDestinationsActive || mobileDropdown === "destinations" ? "text-cyan-400" : "text-white/50") }), "Destinations"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileDropdown === "destinations" && "rotate-180 text-cyan-400") })]
								}), mobileDropdown === "destinations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 mb-1 space-y-0.5 ml-8 pl-3 border-l border-blue-500/20 max-h-[28vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
									children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries/$slug",
										params: { slug: REGION_SLUGS[r] },
										onClick: () => setMobileOpen(false),
										className: "block py-1.5 text-xs font-medium text-white/70 hover:text-cyan-300 transition-colors",
										children: r
									}, r))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/about",
									onClick: () => setMobileOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isAboutActive ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30" : "text-white/80 hover:bg-white/5 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: cn("h-[18px] w-[18px]", isAboutActive ? "text-cyan-400" : "text-white/50") }), "About Us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									onClick: () => setMobileOpen(false),
									className: cn("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors", isContactActive ? "bg-blue-500/15 text-cyan-300 border border-cyan-400/30" : "text-white/80 hover:bg-white/5 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: cn("h-[18px] w-[18px]", isContactActive ? "text-cyan-400" : "text-white/50") }), "Contact"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto pt-3 border-t border-white/10 space-y-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/visa",
								onClick: () => setMobileOpen(false),
								className: "flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-colors",
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
		className: "mt-16 border-t border-border/80 bg-card/60 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12 lg:gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "lg" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
									children: "Visa filing support, air ticketing, document attestation, hotel bookings and flight reservations — handled by people who explain every step before you commit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-5 space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
												"aria-hidden": true
											}), contactInfo.address]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
												className: "h-4 w-4 shrink-0 text-primary",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
												className: "hover:text-foreground",
												children: contactInfo.phone
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												className: "h-4 w-4 shrink-0 text-primary",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${contactInfo.email}`,
												className: "hover:text-foreground",
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
								className: "mb-3 text-xs font-semibold tracking-wider text-primary",
								children: "Core Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: [services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: s.path,
									className: "hover:text-foreground transition-colors",
									children: s.title
								}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "text-xs font-medium text-cyan-400 hover:underline",
									children: "View All Services Overview →"
								}) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-3 lg:col-span-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-semibold tracking-wider text-primary",
								children: "Travel Intelligence & Hubs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries",
										className: "hover:text-foreground transition-colors font-medium",
										children: "Global Visa Directory (50+ Destinations)"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/guides/visa-free-asian-destinations",
										className: "hover:text-foreground transition-colors text-cyan-300 font-medium",
										children: "Visa-Free Asian Guide 2026"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/flight-reservation",
										className: "hover:text-foreground transition-colors",
										children: "Flight Reservations (Embassy PNR)"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/hotel-booking",
										className: "hover:text-foreground transition-colors",
										children: "Hotel Booking Vouchers"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-foreground transition-colors",
										children: "About Areera Travel & Team"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "hover:text-foreground transition-colors",
										children: "Contact Travel Desk"
									}) })
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-5",
					children: REGIONS.map((region) => {
						const list = countriesByRegion(region);
						const displayed = list.slice(0, 6);
						const remaining = list.length - displayed.length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/countries/$slug",
							params: { slug: REGION_SLUGS[region] },
							className: "mb-3 block text-xs font-semibold tracking-wider text-primary hover:underline",
							children: region
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-1.5 text-xs text-muted-foreground",
							children: [displayed.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/countries/$slug",
								params: { slug: c.slug },
								className: "hover:text-foreground transition-colors truncate block",
								children: c.name
							}) }, c.slug)), remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/countries/$slug",
									params: { slug: REGION_SLUGS[region] },
									className: "text-xs font-medium text-primary hover:underline",
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
					className: "mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Areera Travel and Tours. Visa decisions rest solely with the relevant embassy or consulate; we provide documentation and filing support only."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "hover:text-foreground transition-colors underline-offset-4 hover:underline",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms-and-conditions",
								className: "hover:text-foreground transition-colors underline-offset-4 hover:underline",
								children: "Terms & Conditions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-foreground transition-colors underline-offset-4 hover:underline",
								children: "Contact Desk"
							})
						]
					})]
				})
			]
		})
	});
}
function getMeasurementId() {
	const envObj = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_GA_MEASUREMENT_ID": "",
		"VITE_SUPABASE_PROJECT_ID": "eswshgaogxarlaemplmd",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_A7VKIpEw7pgw_ok_QIsbUw_eBY-EJQ4",
		"VITE_SUPABASE_URL": "https://eswshgaogxarlaemplmd.supabase.co"
	};
	const envId = envObj ? envObj["VITE_GA_MEASUREMENT_ID"] : void 0;
	return envId && envId.trim() !== "" ? envId.trim() : void 0;
}
var isInitialized = false;
/**
* Initializes GA4 script tag and window.gtag if a Measurement ID is configured.
* Configures send_page_view: false so client-side SPA navigation routes trigger discrete pageviews.
*/
function initAnalytics() {
	if (typeof window === "undefined" || isInitialized) return;
	const measurementId = getMeasurementId();
	window.dataLayer = window.dataLayer || [];
	if (!window.gtag) window.gtag = function gtag(...args) {
		window.dataLayer?.push(args);
	};
	if (measurementId) {
		if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
			document.head.appendChild(script);
			window.gtag("js", /* @__PURE__ */ new Date());
			window.gtag("config", measurementId, { send_page_view: false });
		}
	}
	isInitialized = true;
}
/**
* Track a pageview on route change
*/
function trackPageView(url, title) {
	if (typeof window === "undefined") return;
	const pageTitle = title || document.title;
	if (getMeasurementId() && window.gtag) window.gtag("event", "page_view", {
		page_path: url,
		page_title: pageTitle,
		page_location: window.location.href
	});
}
/**
* Send a custom event with optional parameters
*/
function trackEvent(eventName, params = {}) {
	if (typeof window === "undefined") return;
	if (getMeasurementId() && window.gtag) window.gtag("event", eventName, params);
}
/**
* Standardized Conversion Tracking Helpers
*/
/**
* Track when an inquiry or booking form is successfully submitted (Lead generation)
*/
function trackInquirySubmitted(data) {
	trackEvent("generate_lead", {
		event_category: "Conversion",
		event_label: data.service,
		service_type: data.service,
		inquiry_ref: data.ref || "ARR-ONLINE",
		lead_source: data.source || "Website Form",
		value: 1,
		currency: "PKR"
	});
}
/**
* Track when a user clicks a WhatsApp consultation link
*/
function trackWhatsAppContact(data) {
	trackEvent("contact", {
		method: "WhatsApp",
		event_category: "Engagement",
		event_label: data.context,
		service: data.service,
		country: data.country
	});
}
/**
* Track when a user clicks to call the office phone
*/
function trackPhoneContact(data) {
	trackEvent("contact", {
		method: "Phone",
		event_category: "Engagement",
		event_label: data.location || "Header / Footer Hotline",
		phone_number: data.number
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
	const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
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
		className: "fixed bottom-3 inset-x-0 mx-auto w-[94%] max-w-lg z-50 md:hidden rounded-full border border-blue-500/40 bg-slate-950/90 p-2 shadow-[0_14px_45px_rgba(0,0,0,0.8),0_0_24px_rgba(59,130,246,0.3)] backdrop-blur-2xl transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-2 px-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2.5 pl-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative shrink-0 flex items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-9 w-9 overflow-hidden rounded-full border border-blue-400/40 bg-slate-900 shadow-sm ring-2 ring-blue-500/20 flex items-center justify-center",
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-xs font-bold text-white leading-tight",
						children: config.contextLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[10px] font-medium text-cyan-400",
						children: config.subLabel
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-1.5 sm:gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${cleanPhone}`,
						onClick: () => trackPhoneContact({
							number: cleanPhone,
							location: `MobileStickyCTA - ${config.contextLabel}`
						}),
						"aria-label": "Call Areera Travel",
						className: "flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-white/5 text-cyan-300 transition-colors hover:bg-blue-500/20 active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-cyan-400" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(config.waText)}`,
						onClick: () => trackWhatsAppContact({
							context: "MobileStickyCTA",
							service: config.contextLabel,
							country: country?.name
						}),
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25 active:scale-95 whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden xs:inline sm:inline",
							children: "WhatsApp"
						})]
					}),
					"to" in config.primaryAction && config.primaryAction.to ? config.primaryAction.search ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
					})
				]
			})]
		})
	});
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
				className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-20",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[400px] w-[400px] rounded-full border border-dashed border-white/20 animate-spin [animation-duration:90s]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-[650px] w-[650px] rounded-full border border-white/10" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-4xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-inner backdrop-blur-md",
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
							className: "text-8xl sm:text-9xl font-extrabold tracking-tighter bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-sm",
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
										className: "w-full rounded-2xl border border-white/15 bg-card/80 py-3.5 pl-10 pr-24 text-sm text-foreground placeholder:text-muted-foreground shadow-lg backdrop-blur-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										size: "sm",
										className: "absolute right-2 rounded-xl px-3.5 text-xs font-semibold",
										children: "Search"
									})
								]
							}), searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl border border-white/15 bg-card/95 p-2 shadow-2xl backdrop-blur-xl text-left divide-y divide-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
									children: "Matching Destinations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "py-1",
									children: searchResults.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/countries/$slug",
										params: { slug: c.slug },
										className: "flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/10 transition-colors text-sm",
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
									className: "rounded-xl gap-2 font-semibold shadow-md shadow-primary/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4" }), "Return to Homepage"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/countries",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "lg",
									className: "rounded-xl gap-2 font-semibold border-white/15 bg-card/60 hover:bg-white/10 text-foreground",
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
									className: "rounded-xl gap-2 font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "WhatsApp Helpdesk"]
								})
							})
						]
					}),
					featuredCountries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 pt-8 border-t border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Or jump to popular destinations" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2.5",
							children: featuredCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/countries/$slug",
								params: { slug: c.slug },
								className: "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground/90 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5",
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
								className: "group rounded-2xl border border-white/10 bg-card/40 p-4 transition-all hover:bg-card/80 hover:border-primary/40 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform",
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
								className: "group rounded-2xl border border-white/10 bg-card/40 p-4 transition-all hover:bg-card/80 hover:border-primary/40 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform",
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
								className: "group rounded-2xl border border-white/10 bg-card/40 p-4 transition-all hover:bg-card/80 hover:border-primary/40 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",
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
								className: "group rounded-2xl border border-white/10 bg-card/40 p-4 transition-all hover:bg-card/80 hover:border-primary/40 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform",
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full bg-gradient-to-r from-primary via-indigo-400 to-amber-400 animate-[loading-bar_1.5s_infinite_linear]" })
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
			trackPageView(location.pathname + (location.searchStr || ""), document.title);
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
var Route$18 = createRootRouteWithContext()({
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
				content: "/og-image.jpg"
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
				content: "/og-image.jpg"
			},
			{
				name: "theme-color",
				content: "#090d16"
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
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(organizationSchema())
		}, {
			type: "application/ld+json",
			children: JSON.stringify(websiteSchema())
		}]
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
	const { queryClient } = Route$18.useRouteContext();
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
var $$splitComponentImporter$15 = () => import("./routes-oyjpcv3b.mjs");
var Route$17 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation" },
			{
				name: "description",
				content: "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations."
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
				content: "/og-image.jpg"
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
				content: "/og-image.jpg"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(homeIndexSchema(homeFaqs))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./about-73fqBY40.mjs");
var Route$16 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Areera Travel and Tours — Our Story & Team" },
			{
				name: "description",
				content: "Learn about Areera Travel and Tours: certified travel consultants providing reliable visa filing, flight booking, and consular attestation with 100% compliance."
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
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
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
var $$splitComponentImporter$13 = () => import("./contact-0XKS_uON.mjs");
var Route$15 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Areera Travel and Tours — Phone, WhatsApp & Office" },
			{
				name: "description",
				content: "Contact Areera Travel and Tours for expert visa filing, air tickets, document attestation, and flight booking. Reach us via Phone, WhatsApp, or at our office."
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
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(contactFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(organizationSchema())
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Contact Us",
					item: "/contact"
				}]))
			}
		]
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
var $$splitErrorComponentImporter = () => import("./countries-e3nPhPD_.mjs");
var $$splitComponentImporter$12 = () => import("./countries-fHxncJ_y.mjs");
var Route$14 = createFileRoute("/countries")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	pendingComponent: CountriesPending,
	pendingMs: 200
});
function CountriesPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountriesSkeleton, {});
}
var $$splitComponentImporter$11 = () => import("./flight-reservation-CExfTPxM.mjs");
var Route$13 = createFileRoute("/flight-reservation")({
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
				property: "og:title",
				content: "Flight Reservation — Visa-Ready Bookings & Ticketing | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Embassy-compliant flight itineraries with verifiable PNR codes, plus confirmed ticketing across all major international airlines."
			},
			{
				property: "og:url",
				content: "/flight-reservation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/flight-reservation"
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
var $$splitComponentImporter$10 = () => import("./hotel-booking-CrhvbyRO.mjs");
var Route$12 = createFileRoute("/hotel-booking")({
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
				property: "og:title",
				content: "Hotel Booking — Verified Stays & Visa-Ready Reservations | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Hand-picked hotels and confirmed embassy-approved hotel vouchers arranged by Areera Travel and Tours consultants across 100+ global destinations."
			},
			{
				property: "og:url",
				content: "/hotel-booking"
			}
		],
		links: [{
			rel: "canonical",
			href: "/hotel-booking"
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
var $$splitComponentImporter$9 = () => import("./privacy-policy-CoSMHcZ6.mjs");
var Route$11 = createFileRoute("/privacy-policy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy | Areera Travel and Tours" },
			{
				name: "description",
				content: "Read the Areera Travel and Tours Privacy Policy. Learn how we handle passport details, visa files, flight bookings, and personal data with strict confidentiality."
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
				content: "/privacy-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy-policy"
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
var robotsTxt = `User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: https://www.areeratravels.com/sitemap.xml
`;
var Route$10 = createFileRoute("/robots.txt")({ server: { handlers: { GET: async () => {
	return new Response(robotsTxt, {
		status: 200,
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=86400"
		}
	});
} } } });
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
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const sitemap = generateSitemap();
	return new Response(sitemap, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=86400"
		}
	});
} } } });
var $$splitComponentImporter$8 = () => import("./terms-and-conditions-BCpILjWt.mjs");
var Route$8 = createFileRoute("/terms-and-conditions")({
	head: () => ({
		meta: [
			{ title: "Terms and Conditions — Service Agreement | Areera Travel and Tours" },
			{
				name: "description",
				content: "Read the Terms and Conditions for Areera Travel and Tours. Clear guidelines on visa filing, flight booking, hotel vouchers, and consular attestation services."
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
				content: "/terms-and-conditions"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms-and-conditions"
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
var $$splitComponentImporter$7 = () => import("./thank-you-Dn-ocwdj.mjs");
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
				content: "/thank-you"
			}
		],
		links: [{
			rel: "canonical",
			href: "/thank-you"
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
var $$splitComponentImporter$6 = () => import("./countries.index-CdANhoMK.mjs");
var Route$6 = createFileRoute("/countries/")({
	head: () => ({
		meta: [
			{ title: "Visa Destinations & Requirements by Country | Areera Travel and Tours" },
			{
				name: "description",
				content: "Browse visa requirements, embassy fees, processing times, and document checklists for 100+ global destinations with Areera Travel and Tours."
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
				content: "/countries"
			}
		],
		links: [{
			rel: "canonical",
			href: "/countries"
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
var $$splitComponentImporter$5 = () => import("./countries._slug-BRsxU8zG.mjs");
var $$splitNotFoundComponentImporter = () => import("./countries._slug-1amF5V94.mjs");
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
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
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
					content: `/countries/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/countries/${params.slug}`
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
var $$splitComponentImporter$4 = () => import("./guides.visa-free-asian-destinations-B8VrCJIi.mjs");
var Route$4 = createFileRoute("/guides/visa-free-asian-destinations")({
	head: () => ({
		meta: [
			{ title: "Visa-Free Asian Destinations Guide 2026 | Areera Travels" },
			{
				name: "description",
				content: "Explore top visa-free and e-visa Asian destinations. Curated itineraries, flight times, verified costs, and tour packages from Areera Travels."
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
				content: "/guides/visa-free-asian-destinations"
			},
			{
				property: "og:image",
				content: "/og-image.jpg"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/guides/visa-free-asian-destinations"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "TravelAgency",
						"@id": "https://www.areeratravels.com/#agency",
						name: "Areera Travel and Tours",
						url: "https://www.areeratravels.com",
						logo: "https://www.areeratravels.com/areera-logo.png",
						telephone: siteConfig.phone,
						founder: [{
							"@type": "Person",
							name: "Arslan Ahmed",
							jobTitle: "Founder & Managing Director"
						}, {
							"@type": "Person",
							name: "Hareera",
							jobTitle: "Co-Founder & Director"
						}],
						address: {
							"@type": "PostalAddress",
							streetAddress: "Blue Area",
							addressLocality: "Islamabad",
							addressCountry: "PK"
						},
						areaServed: [
							"South Asia",
							"Southeast Asia",
							"Middle East",
							"East Asia",
							"Worldwide"
						]
					},
					{
						"@type": "TouristTrip",
						"@id": "https://www.areeratravels.com/guides/visa-free-asian-destinations#trip",
						name: "Southeast & Central Asia Gateway Tour",
						description: "Comprehensive travel and visa route covering Malaysia, Thailand, Azerbaijan, and the Maldives for Asian outbound travelers.",
						provider: { "@id": "https://www.areeratravels.com/#agency" }
					},
					{
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
					}
				]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services.index-qBXu124N.mjs");
var Route$3 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Travel Services — Visa, Ticketing & Attestation | Areera Travel and Tours" },
			{
				name: "description",
				content: "Explore travel services by Areera Travel and Tours: professional visa filing, domestic and international ticketing, document attestation, and hotel bookings."
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
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
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
			...services.map((s) => ({
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema(s))
			}))
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services.attestation-B_8mEtTZ.mjs");
var Route$2 = createFileRoute("/services/attestation")({
	head: () => ({
		meta: [
			{ title: "Document Attestation Services — MOFA, HEC & Embassy Legalization | Areera Travel and Tours" },
			{
				name: "description",
				content: "Fast document attestation for educational, personal & commercial papers: HEC, MOFA, Notary, and foreign embassy legalization handled with complete tracking."
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
				content: "/services/attestation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/attestation"
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
var $$splitComponentImporter$1 = () => import("./services.ticket-C2ytnc0e.mjs");
var Route$1 = createFileRoute("/services/ticket")({
	head: () => ({
		meta: [
			{ title: "Air Ticket Booking — Domestic & International Routes | Areera Travel and Tours" },
			{
				name: "description",
				content: "Book domestic and international flight tickets at competitive fares. Enjoy instant booking, flexible date changes, and 24/7 itinerary support with Areera."
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
				content: "/services/ticket"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/ticket"
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
var $$splitComponentImporter = () => import("./services.visa-CdC2aGDC.mjs");
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
				property: "og:title",
				content: "Visa Services — Tourist, Business, Student & Work Visas | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Professional visa filing support for 100+ countries: document verification, biometric appointment scheduling, and complete embassy compliance."
			},
			{
				property: "og:url",
				content: "/services/visa"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/visa"
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
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var CountriesRoute = Route$14.update({
	id: "/countries",
	path: "/countries",
	getParentRoute: () => Route$18
});
var FlightReservationRoute = Route$13.update({
	id: "/flight-reservation",
	path: "/flight-reservation",
	getParentRoute: () => Route$18
});
var HotelBookingRoute = Route$12.update({
	id: "/hotel-booking",
	path: "/hotel-booking",
	getParentRoute: () => Route$18
});
var PrivacyPolicyRoute = Route$11.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$18
});
var RobotsDottxtRoute = Route$10.update({
	id: "/robots.txt",
	path: "/robots.txt",
	getParentRoute: () => Route$18
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$18
});
var TermsAndConditionsRoute = Route$8.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$18
});
var ThankYouRoute = Route$7.update({
	id: "/thank-you",
	path: "/thank-you",
	getParentRoute: () => Route$18
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
	getParentRoute: () => Route$18
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$18
});
var ServicesAttestationRoute = Route$2.update({
	id: "/services/attestation",
	path: "/services/attestation",
	getParentRoute: () => Route$18
});
var ServicesTicketRoute = Route$1.update({
	id: "/services/ticket",
	path: "/services/ticket",
	getParentRoute: () => Route$18
});
var ServicesVisaRoute = Route.update({
	id: "/services/visa",
	path: "/services/visa",
	getParentRoute: () => Route$18
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
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { Route$13 as a, getRouter as c, trackWhatsAppContact as d, Route$12 as i, router_exports as l, NotFoundPage as n, Route$5 as o, Route as r, Route$7 as s, CountriesSkeleton as t, trackInquirySubmitted as u };
