import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as PlaneTakeoff } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { a as Route$15 } from "./router-CmhRcMEU.mjs";
import { D as flightFaqs, E as flightArticle, o as countries } from "./router-CmhRcMEU2.mjs";
import { n as Input, r as Label, t as BookingForm } from "./BookingForm-DjQMCfl_.mjs";
import { t as RelatedServices } from "./RelatedServices-CV3p7akO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flight-reservation-BKeRVw25.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routes = [
	{
		from: "Lahore",
		to: "Dubai",
		slug: "uae"
	},
	{
		from: "Karachi",
		to: "Jeddah",
		slug: "saudi-arabia"
	},
	{
		from: "Islamabad",
		to: "Istanbul",
		slug: "turkey"
	},
	{
		from: "Lahore",
		to: "Kuala Lumpur",
		slug: "malaysia"
	},
	{
		from: "Karachi",
		to: "Doha",
		slug: "qatar"
	},
	{
		from: "Islamabad",
		to: "Baku",
		slug: "azerbaijan"
	}
];
function FlightReservation() {
	const { destination } = Route$15.useSearch();
	const country = countries.find((c) => c.slug === destination);
	const [to, setTo] = (0, import_react.useState)(country?.name ?? destination ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Flight Reservation" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Flight reservation",
			title: "Reservations embassies can verify",
			description: "We issue genuine airline reservations with a PNR you can present, and convert them into confirmed tickets whenever you decide."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => e.preventDefault(),
			className: "grid gap-4 rounded-2xl border border-border bg-card/70 p-6 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "from",
					children: "From"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "from",
					maxLength: 60,
					placeholder: "Departure city",
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "to",
					children: "To"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "to",
					maxLength: 60,
					value: to,
					onChange: (e) => setTo(e.target.value),
					placeholder: "Destination city",
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "depart",
					children: "Departure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "depart",
					type: "date",
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "passengers",
					children: "Passengers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "passengers",
					type: "number",
					min: 1,
					max: 20,
					defaultValue: 1,
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "cabin",
					children: "Class"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "cabin",
					className: "mt-1.5 h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm outline-none focus:border-ring",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-card",
							children: "Economy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-card",
							children: "Premium economy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-card",
							children: "Business"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							className: "bg-card",
							children: "First"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground sm:col-span-2 lg:col-span-5",
					children: "Fill in your route above, then send the inquiry below — we reply with reservation options."
				})
			]
		}),
		country ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-2xl border border-primary/40 bg-card/60 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg font-semibold",
				children: [
					country.flag,
					" Flights to ",
					country.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/countries/$slug",
					params: { slug: country.slug },
					className: "text-primary hover:underline",
					children: [country.name, " visa requirements"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/hotel-booking",
					search: { destination: country.slug },
					className: "text-primary hover:underline",
					children: ["Hotels in ", country.capital]
				})]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Routes",
				title: "Popular routes we book"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: routes.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevate flex items-center justify-between gap-3 rounded-xl border border-border bg-card/70 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, {
								className: "h-5 w-5 shrink-0 text-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "min-w-0 truncate text-sm font-medium",
								children: [
									r.from,
									" → ",
									r.to
								]
							})]
						}), r.slug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/countries/$slug",
							params: { slug: r.slug },
							className: "text-xs text-primary hover:underline shrink-0",
							children: "Visa Guide →"
						})]
					})
				}, `${r.from}-${r.to}`))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "inquiry-form",
			className: "mt-16 scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Flight reservation inquiry",
				detailLabel: "Route & travel dates",
				detailPlaceholder: "e.g. Lahore – Dubai, 12 Sep",
				defaultDetail: to ? `To ${to}` : "",
				submitLabel: "Request reservation"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...flightArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: flightFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "flight-reservation" })
	] });
}
//#endregion
export { FlightReservation as component };
