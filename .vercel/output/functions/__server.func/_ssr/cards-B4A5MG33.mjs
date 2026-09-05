import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Clock, H as BedDouble, T as Landmark, W as ArrowRight, c as Sparkles, h as PlaneTakeoff, i as TicketsPlane, j as FileCheckCorner, l as ShieldCheck, p as Quote, s as Stamp } from "../_libs/lucide-react.mjs";
import { n as CountryFlag } from "./router-DvzRRJhh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-B4A5MG33.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	visa: Stamp,
	ticket: TicketsPlane,
	attestation: FileCheckCorner,
	hotel: BedDouble,
	flight: PlaneTakeoff
};
function ServiceCard({ service }) {
	const Icon = icons[service.icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: service.path,
		className: "card-elevate group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-6 shadow-sm backdrop-blur-md hover:border-primary/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "royal-surface glow-ring inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-6 w-6 text-primary-foreground",
						"aria-hidden": true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }), " Verified Service"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
				children: service.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: service.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-between border-t border-border/50 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-wider text-primary",
					children: "Explore Service"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5",
						"aria-hidden": true
					})
				})]
			})
		]
	});
}
function CountryCard({ country }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/countries/$slug",
		params: { slug: country.slug },
		className: "card-elevate group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md hover:border-primary/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
						isoCode: country.isoCode,
						countryName: country.name,
						fallbackEmoji: country.flag,
						size: "md",
						className: "ring-2 ring-white/15 shadow-sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate font-display text-base font-bold text-foreground transition-colors group-hover:text-primary",
						children: country.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1.5 truncate text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-primary/80" }), country.region]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground/90 sm:text-sm",
				children: country.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-muted/30 px-2 py-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-3 w-3 text-primary/80" }),
						" ",
						country.capital
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-md border border-border/60 bg-muted/30 px-2 py-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-emerald-400" }),
						" ",
						country.processingTime
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between border-t border-border/50 pt-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold text-primary group-hover:underline",
					children: "View Visa Guide & Apply"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5",
						"aria-hidden": true
					})
				})]
			})
		]
	});
}
function TestimonialCard({ name, role, quote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "card-elevate flex h-full flex-col rounded-2xl border border-border/80 bg-card/75 p-6 shadow-sm backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
					className: "h-6 w-6 text-primary",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full border border-border/50 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " Verified Client"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-4 flex-1 text-sm leading-relaxed text-foreground/90",
				children: [
					"\"",
					quote,
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-5 border-t border-border/50 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display font-semibold text-foreground",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: role
				})]
			})
		]
	});
}
//#endregion
export { ServiceCard as n, TestimonialCard as r, CountryCard as t };
