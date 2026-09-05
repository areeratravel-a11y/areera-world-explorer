import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Clock, M as Hotel, W as CircleCheck, d as ShieldCheck, et as ArrowRight, m as Search, t as X, v as Plane, z as Earth } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { B as cn, C as countriesHubFaqs, S as countriesHubArticle, o as countries, r as REGIONS } from "./router-Srjnku7L2.mjs";
import { t as CountryCard } from "./cards-D2DLrXXK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countries.index-CdANhoMK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountriesHub() {
	const [region, setRegion] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return countries.filter((c) => (region === "All" || c.region === region) && (!q || c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.popularCities.some((city) => city.toLowerCase().includes(q))));
	}, [region, query]);
	const regionCounts = (0, import_react.useMemo)(() => {
		const counts = { All: countries.length };
		for (const r of REGIONS) counts[r] = countries.filter((c) => c.region === r).length;
		return counts;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Countries" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mb-8 overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card/90 via-navy/70 to-navy-deep p-6 sm:p-10 shadow-lg backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5" }), " Worldwide Visa Hub"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl",
						children: ["Visa Destinations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chrome-text",
							children: "We Cover"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: "Select a destination to review official embassy requirements, e-visa processing timeframes, required financial paperwork, and direct filing assistance from Areera Travel and Tours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 font-medium text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400" }), " 100% Embassy Compliant"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 font-medium text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), " Verified Document Checklists"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 font-medium text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-amber-400" }), " Fast-Track E-Visa Support"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/guides/visa-free-asian-destinations",
								className: "flex items-center gap-2.5 rounded-xl border border-cyan-500/25 bg-cyan-500/10 p-3 text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4 shrink-0 text-cyan-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-white group-hover:text-cyan-300 truncate",
											children: "2026 Asian Travel Guide"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-cyan-200/70 truncate",
											children: "Visa-free & e-visa strategy"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-cyan-400 shrink-0 group-hover:translate-x-0.5 transition-transform" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/visa",
								className: "flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/40 p-3 text-xs text-foreground/90 hover:border-primary/40 hover:bg-background/80 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0 text-emerald-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-white group-hover:text-primary truncate",
											children: "Visa Filing Support"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground truncate",
											children: "End-to-end embassy compliance"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/flight-reservation",
								className: "flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/40 p-3 text-xs text-foreground/90 hover:border-primary/40 hover:bg-background/80 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-4 w-4 shrink-0 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-white group-hover:text-primary truncate",
											children: "Flight Reservations"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground truncate",
											children: "Verifiable embassy PNRs"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/hotel-booking",
								className: "flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/40 p-3 text-xs text-foreground/90 hover:border-primary/40 hover:bg-background/80 transition-colors group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "h-4 w-4 shrink-0 text-amber-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-white group-hover:text-amber-300 truncate",
											children: "Hotel Vouchers"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground truncate",
											children: "Confirmed embassy bookings"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" })
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						maxLength: 60,
						placeholder: "Search by country or city, e.g. Turkey, Dubai, London, Cairo...",
						"aria-label": "Search countries",
						className: "h-12 w-full rounded-2xl border border-input bg-card/80 pl-10 pr-10 text-sm outline-none transition-colors focus:border-primary shadow-xs"
					}),
					query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setQuery(""),
						className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
						"aria-label": "Clear search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0",
				children: ["All", ...REGIONS].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setRegion(r),
					className: cn("inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200", region === r ? "royal-surface border-transparent text-primary-foreground shadow-sm scale-[1.02]" : "border-border/80 bg-card/50 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full px-1.5 py-0.5 text-[10px]", region === r ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"),
						children: regionCounts[r] ?? 0
					})]
				}, r))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: [
					"Showing ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: list.length
					}),
					" destination",
					list.length === 1 ? "" : "s"
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
		}),
		list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border/80 bg-card/60 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base font-semibold text-foreground",
					children: [
						"No destinations match your search \"",
						query,
						"\""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Try searching for another country name, major city, or clear the region filter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setQuery("");
						setRegion("All");
					},
					className: "mt-4 inline-flex items-center rounded-xl bg-primary/20 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/30",
					children: "Reset Filters"
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...countriesHubArticle })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: countriesHubFaqs })
	] });
}
//#endregion
export { CountriesHub as component };
