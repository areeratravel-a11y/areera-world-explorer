import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as BadgeCheck, L as FileCheckCorner, d as ShieldCheck, et as ArrowRight, l as Stamp, x as PhoneCall, z as Earth } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { r as Route } from "./router-D1q5vEsP.mjs";
import { L as visaArticle, R as visaFaqs, d as popularVisaDestinations, f as contactInfo, n as CountryFlag, o as countries, z as Button } from "./router-D1q5vEsP2.mjs";
import { t as BookingForm } from "./BookingForm-ByFmS9R0.mjs";
import { t as CountryCard } from "./cards-D2DLrXXK.mjs";
import { t as RelatedServices } from "./RelatedServices-CV3p7akO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.visa-B64P8qBf.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		title: "Free Eligibility Review",
		body: "We assess your passport validity, travel history, and destination-specific requirements."
	},
	{
		title: "Personalised Checklist",
		body: "Receive a tailored checklist covering mandatory financial, identity, and employment records."
	},
	{
		title: "Form Filling & Review",
		body: "Our specialists complete all official visa forms with zero margin for spelling or data discrepancies."
	},
	{
		title: "Appointment & Lodgement",
		body: "Biometric and embassy appointments are secured, and files are lodged in the required sequence."
	},
	{
		title: "Tracking & Safe Handover",
		body: "Continuous tracking of your file status until the approved visa and passport are safely delivered."
	}
];
var visaTypes = [
	{
		title: "Tourist / Visit Visa",
		body: "Single and multiple-entry leisure travel, family visits, holidays, and cultural exploration."
	},
	{
		title: "Commercial & Business Visa",
		body: "Conferences, trade exhibitions, stakeholder meetings, and investment delegations."
	},
	{
		title: "Student / Study Permit",
		body: "University admissions, language courses, student visa compliance, and financial sponsorship."
	},
	{
		title: "Work & Employment Entry",
		body: "Employment entry permits, company sponsorship validation, and medical requirement guidance."
	}
];
function VisaPage() {
	const { country } = Route.useSearch();
	const selected = countries.find((c) => c.slug === country);
	const popular = popularVisaDestinations.map((s) => countries.find((c) => c.slug === s)).filter((c) => Boolean(c));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
			label: "Services",
			to: "/services"
		}, { label: "Visa Services" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Visa filing & advisory",
			title: "Visa applications, prepared properly",
			description: "Embassies decide; we make sure your file gives them nothing to question. Accurate paperwork, verified itineraries, and transparent timelines from start to finish."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-card/90 via-card/70 to-primary/10 p-5 sm:p-6 shadow-xl backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-12 w-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-emerald-400",
						children: "Instant File Evaluation Available"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-medium text-foreground/90",
					children: "Get your custom document checklist and embassy approval roadmap in under 15 minutes."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#visa-application-form",
					className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors",
					children: "Start Application Now"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Areera Travel, I need urgent visa assistance and document evaluation.")}`,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/25 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-3.5 w-3.5 text-emerald-400" }), "WhatsApp Specialist"]
				})]
			})]
		}),
		selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 flex items-center justify-between gap-4 rounded-2xl border border-primary/50 bg-gradient-to-r from-card via-navy/60 to-primary/10 p-6 shadow-md backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
					isoCode: selected.isoCode,
					countryName: selected.name,
					fallbackEmoji: selected.flag,
					size: "lg",
					className: "ring-2 ring-primary/40 shadow-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-primary",
						children: "Selected Destination"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl font-bold text-foreground",
						children: [selected.name, " Visa Application"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selected.region }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-400 font-medium",
								children: selected.processingTime
							})
						]
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }), " Direct Support"]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevate h-full rounded-2xl border border-border/80 bg-card/75 p-6 shadow-xs backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "royal-surface mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground",
							children: s.body
						})
					]
				})
			}, s.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold text-foreground",
						children: "Visa Categories We Handle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "h-6 w-6 text-primary" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-3",
					children: visaTypes.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-background/50 p-4 transition-colors hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold text-foreground",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted-foreground",
							children: v.body
						})]
					}, v.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold text-foreground",
						children: "Standard Document Checklist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-6 w-6 text-emerald-400" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2.5 text-xs sm:text-sm text-foreground/90",
					children: [
						"Passport valid for at least 6 months with min. 2 blank pages",
						"Recent high-res passport-size photographs on white background",
						"Completed, verified, and signed visa application forms",
						"Confirmed onward/return flight reservation & hotel booking",
						"Bank statements of last 3-6 months with bank manager seal",
						"Employment letter / NOC / Business registration certificate",
						"International travel medical insurance policy",
						"Invitation or sponsorship documentation (if applicable)"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5 rounded-xl border border-border/60 bg-background/50 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
					}, d))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Destinations",
					title: "Popular Visa Destinations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: popular.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/countries",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-primary" }), " Browse All 50+ Visa Destinations"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guides/visa-free-asian-destinations",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visa-Free Asian Guide 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "visa-application-form",
			className: "mt-16 scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Start your visa application",
				description: "Send us your target country and travel details. Our specialist will prepare your file and verify all checklist items.",
				detailLabel: "Destination country",
				detailPlaceholder: "e.g. United Arab Emirates, Turkey, United Kingdom",
				defaultDetail: selected?.name ?? "",
				submitLabel: "Request Visa Assistance"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...visaArticle })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: visaFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "visa" })
	] });
}
//#endregion
export { VisaPage as component };
