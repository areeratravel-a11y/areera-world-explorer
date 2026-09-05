import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { F as ticketArticle, I as ticketFaqs, z as Button } from "./router-BBvjGGPB2.mjs";
import { t as BookingForm } from "./BookingForm-DyETzn_9.mjs";
import { t as RelatedServices } from "./RelatedServices-CV3p7akO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.ticket-DIsexB5a.js
var import_jsx_runtime = require_jsx_runtime();
function TicketPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
			label: "Services",
			to: "/services"
		}, { label: "Ticket Booking" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Ticket booking",
			title: "Domestic and international air ticketing",
			description: "We compare fares across airlines and route options, then issue tickets once you approve the itinerary in writing."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [{
				title: "Domestic ticketing",
				body: "All major domestic carriers and routes, including same-day issuance, student and senior fares where airlines offer them, and rebooking support.",
				points: [
					"Instant e-ticket delivery",
					"Baggage allowance guidance",
					"Date change handling"
				]
			}, {
				title: "International ticketing",
				body: "Long-haul, Gulf and regional routes with multi-city itineraries, layover planning and visa-compliant scheduling.",
				points: [
					"Multi-city and open-jaw fares",
					"Group and family bookings",
					"Umrah and pilgrimage travel"
				]
			}].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevate h-full rounded-2xl border border-border bg-card/70 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: c.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1.5 text-sm text-muted-foreground",
							children: c.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "•"
								}), p]
							}, p))
						})
					]
				})
			}, c.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 rounded-2xl border border-border bg-card/50 p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Need a reservation for a visa file?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted-foreground",
					children: "Embassies usually require a verifiable flight reservation rather than a paid ticket. Use our reservation service, then convert it into a confirmed ticket after approval."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/flight-reservation",
						children: "Request a flight reservation"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Ticket inquiry",
				description: "Share your route and travel dates and we will send fare options.",
				detailLabel: "Route (from – to)",
				detailPlaceholder: "e.g. Lahore – Dubai",
				submitLabel: "Request fare options"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...ticketArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: ticketFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "ticket" })
	] });
}
//#endregion
export { TicketPage as component };
