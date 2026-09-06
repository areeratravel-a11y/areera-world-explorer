import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Compass, P as HeartHandshake, s as Target } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { _ as aboutFaqs, g as aboutArticle, z as Button } from "./router-WJUDkRHe2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-73fqBY40.js
var import_jsx_runtime = require_jsx_runtime();
var team = [
	{
		name: "Arslan Ahmed",
		role: "Founder & Managing Director",
		initials: "AA"
	},
	{
		name: "Hareera",
		role: "Co-Founder & Director",
		initials: "H"
	},
	{
		name: "Rabia Khan",
		role: "Head of Visa Documentation",
		initials: "RK"
	},
	{
		name: "Usman Tariq",
		role: "Senior Ticketing Consultant",
		initials: "UT"
	},
	{
		name: "Mariam Shah",
		role: "Attestation Coordinator",
		initials: "MS"
	}
];
var milestones = [
	{
		year: "Founded",
		body: "Areera Travel and Tours opens with a single desk and a focus on visa documentation."
	},
	{
		year: "Ticketing",
		body: "IATA-standard air ticketing added for domestic and international routes."
	},
	{
		year: "Attestation",
		body: "Dedicated attestation desk launched for educational and commercial documents."
	},
	{
		year: "Today",
		body: "Country-by-country guidance across Asia, the Middle East and Africa."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "About Us" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "About us",
			title: "A travel agency built on documentation discipline",
			description: "Areera Travel and Tours began because too many travellers were losing time and money to incomplete paperwork. We fixed that with checklists, honest timelines and one consultant per file."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: [
				{
					icon: Target,
					title: "Our mission",
					body: "Make international travel accessible by removing the confusion around visas and documentation."
				},
				{
					icon: Compass,
					title: "Our vision",
					body: "To be the agency travellers recommend because we told them the truth about their case."
				},
				{
					icon: HeartHandshake,
					title: "Our promise",
					body: "No guaranteed approvals, no hidden charges — a clear scope of work agreed before we start."
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevate h-full rounded-2xl border border-border bg-card/70 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
							className: "mb-3 h-6 w-6 text-primary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-foreground text-lg",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: c.body
						})
					]
				})
			}, c.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Our journey"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-5 border-l border-border pl-6",
				children: milestones.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "royal-surface absolute -left-[29px] top-1.5 h-3 w-3 rounded-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: m.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: m.body
						})
					]
				}, m.year))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Team",
				title: "The people on your file"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
				children: team.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevate h-full rounded-2xl border border-border bg-card/70 p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "royal-surface glow-ring mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold text-primary-foreground",
								children: t.initials
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: t.role
							})
						]
					})
				}, t.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 flex flex-wrap gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "royal-surface glow-ring shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Talk to a consultant"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						children: "See our travel services"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/countries",
						children: "Browse 50+ visa destinations"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guides/visa-free-asian-destinations",
						children: "Asian Travel Guide 2026"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...aboutArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: aboutFaqs })
	] });
}
//#endregion
export { About as component };
