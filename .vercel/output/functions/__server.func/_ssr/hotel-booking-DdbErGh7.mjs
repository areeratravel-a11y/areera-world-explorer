import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as MapPin, c as Star, tt as BedDouble } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { i as Route$14 } from "./router-WJUDkRHe.mjs";
import { A as hotelArticle, j as hotelFaqs, o as countries, z as Button } from "./router-WJUDkRHe2.mjs";
import { n as Input, r as Label, t as BookingForm } from "./BookingForm-BnVQGlah.mjs";
import { t as RelatedServices } from "./RelatedServices-CV3p7akO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hotel-booking-DdbErGh7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var featured = [
	{
		name: "Marina Skyline Suites",
		city: "Dubai, UAE",
		tag: "City view · Metro nearby",
		slug: "uae"
	},
	{
		name: "Bosphorus Heritage Hotel",
		city: "Istanbul, Turkey",
		tag: "Old town · Breakfast included",
		slug: "turkey"
	},
	{
		name: "Al Haram Residence",
		city: "Makkah, Saudi Arabia",
		tag: "Walking distance · Family rooms",
		slug: "saudi-arabia"
	},
	{
		name: "Bukit Bintang Grand",
		city: "Kuala Lumpur, Malaysia",
		tag: "Shopping district · Pool",
		slug: "malaysia"
	},
	{
		name: "Nile Court Cairo",
		city: "Cairo, Egypt",
		tag: "Riverside · Airport transfer",
		slug: "egypt"
	},
	{
		name: "Sukhumvit Garden Inn",
		city: "Bangkok, Thailand",
		tag: "BTS access · Rooftop",
		slug: "thailand"
	}
];
function HotelBooking() {
	const { destination } = Route$14.useSearch();
	const country = countries.find((c) => c.slug === destination);
	const [dest, setDest] = (0, import_react.useState)(country?.name ?? destination ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Hotel Booking" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Hotel booking",
			title: "Stays that match your itinerary and your visa file",
			description: "Tell us the destination and dates. We send options with confirmed, verifiable reservations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => e.preventDefault(),
			className: "grid gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "destination",
						children: "Destination"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "destination",
						value: dest,
						maxLength: 60,
						onChange: (e) => setDest(e.target.value),
						placeholder: "City or country",
						className: "mt-1.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "checkin",
					children: "Check-in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "checkin",
					type: "date",
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "checkout",
					children: "Check-out"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "checkout",
					type: "date",
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "guests",
					children: "Guests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guests",
					type: "number",
					min: 1,
					max: 20,
					defaultValue: 2,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground sm:col-span-2 lg:col-span-4",
					children: "Enter your details above, then submit the inquiry form below — a consultant will send availability and pricing."
				})
			]
		}),
		country ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-2xl border border-primary/40 bg-card/60 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Planning a trip to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-lg font-semibold",
					children: [
						country.flag,
						" ",
						country.name
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/countries/$slug",
						params: { slug: country.slug },
						className: "text-primary hover:underline",
						children: [country.name, " visa requirements"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/flight-reservation",
						search: { destination: country.slug },
						className: "text-primary hover:underline",
						children: ["Book flights to ", country.capital]
					})]
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Featured",
					title: "Popular stays with our travellers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: featured.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevate h-full rounded-2xl border border-border bg-card/70 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, {
									className: "mb-4 h-6 w-6 text-primary",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: h.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 flex items-center gap-1.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "h-3.5 w-3.5 shrink-0",
										"aria-hidden": true
									}), h.city]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "h-3.5 w-3.5 text-primary",
										"aria-hidden": true
									}), h.tag]
								}),
								h.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries/$slug",
										params: { slug: h.slug },
										className: "text-primary hover:underline font-medium",
										children: "Visa Requirements →"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/flight-reservation",
										search: { destination: h.slug },
										className: "text-muted-foreground hover:text-foreground",
										children: "Flights →"
									})]
								})
							]
						})
					}, h.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: "Availability and rates are confirmed with the property at the time of booking."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "inquiry-form",
			className: "mt-16 scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Hotel booking inquiry",
				detailLabel: "Destination & dates",
				detailPlaceholder: "e.g. Dubai, 12–18 Sep",
				defaultDetail: dest,
				submitLabel: "Request hotel options"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/countries",
					children: "Browse destinations by region"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...hotelArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: hotelFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "hotel-booking" })
	] });
}
//#endregion
export { HotelBooking as component };
