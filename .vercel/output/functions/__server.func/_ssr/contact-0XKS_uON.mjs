import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, E as Mail, H as Clock, T as MapPin, b as Phone } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { b as contactArticle, f as contactInfo, x as contactFaqs } from "./router-Srjnku7L2.mjs";
import { t as BookingForm } from "./BookingForm-qlQrcIZt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-0XKS_uON.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const tel = contactInfo.phone.replace(/\s/g, "");
	const wa = contactInfo.whatsapp.replace(/[^\d]/g, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Contact Us" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Contact",
			title: "Talk to a travel consultant",
			description: "Send your query and we will respond during business hours with the next steps for your case."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card/70 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Office"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-muted-foreground",
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
										href: `tel:${tel}`,
										className: "hover:text-foreground",
										children: contactInfo.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "h-4 w-4 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `https://wa.me/${wa}`,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "hover:text-foreground",
										children: "Chat on WhatsApp"
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
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card/70 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-center gap-2 text-lg font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "h-4 w-4 text-primary",
								"aria-hidden": true
							}), " Business hours"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: contactInfo.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: h.day
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: h.time
								})]
							}, h.day))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Areera Travel and Tours office location",
							src: "https://www.google.com/maps?q=Blue%20Area%20Islamabad&output=embed",
							className: "h-72 w-full border-0",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Send us a message",
				detailLabel: "Subject",
				detailPlaceholder: "e.g. Turkey tourist visa",
				submitLabel: "Send message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted-foreground leading-relaxed",
				children: [
					"Looking for a specific service? Browse",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/countries",
						className: "text-primary hover:underline font-medium",
						children: "50+ visa destinations"
					}),
					", request",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/flight-reservation",
						className: "text-primary hover:underline font-medium",
						children: "embassy flight reservations"
					}),
					", book",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hotel-booking",
						className: "text-primary hover:underline font-medium",
						children: "hotel vouchers"
					}),
					", or start",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/attestation",
						className: "text-primary hover:underline font-medium",
						children: "document attestation"
					}),
					"."
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...contactArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: contactFaqs })
	] });
}
//#endregion
export { Contact as component };
