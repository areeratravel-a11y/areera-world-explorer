import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as BadgeCheck, A as Landmark, B as Compass, F as Headphones, H as Clock, L as FileCheckCorner, M as Hotel, S as MessageSquare, T as MapPin, V as Coins, W as CircleCheck, X as CalendarClock, Y as Calendar, Z as Building2, et as ArrowRight, f as ShieldAlert, l as Stamp, r as Wallet, v as Plane, y as PlaneTakeoff, z as Earth } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { o as Route$5 } from "./router-DksWy9w3.mjs";
import { M as regionArticle, T as countryFaqs, i as REGION_SLUGS, m as siteConfig, n as CountryFlag, o as countries, s as countriesByRegion, w as countryArticle, z as Button } from "./router-DksWy9w32.mjs";
import { t as CountryCard } from "./cards-D2DLrXXK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countries._slug-Dlgy_bhB.js
var import_jsx_runtime = require_jsx_runtime();
function CountryOrRegion() {
	const data = Route$5.useLoaderData();
	if (data.kind === "region") {
		const list = countriesByRegion(data.region);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
				label: "Countries",
				to: "/countries"
			}, { label: data.region }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-10 overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card/90 via-navy/70 to-navy-deep p-6 sm:p-10 shadow-lg backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5" }), " Regional Hub"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
						children: [
							data.region,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chrome-text",
								children: "Visa Destinations"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: [
							"Explore visa guidelines, document requirements, and entry permits for all ",
							list.length,
							" ",
							"supported destinations across ",
							data.region,
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
			}),
			data.region === "Asia" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-cyan-950/40 p-5 sm:p-6 shadow-md backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-cyan-400",
							children: "Featured 2026 Travel Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm font-semibold text-white",
							children: "Visa-Free & Easy-Visa Asian Destinations Strategy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-slate-300",
							children: "Explore side-by-side package budgets, flight timings, and streamlined e-visa rules across Asia."
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					className: "shrink-0 royal-surface glow-ring shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/guides/visa-free-asian-destinations",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read Asian Guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/countries",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-primary" }), " Browse All 50+ Destinations"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/flight-reservation",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "mr-2 h-4 w-4 text-primary" }), " Flight Reservations"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/hotel-booking",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "mr-2 h-4 w-4 text-amber-400" }), " Hotel Bookings"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...regionArticle(data.region, list.length) })
			})
		] });
	}
	const country = data.country;
	const related = country.relatedCountries.map((s) => countries.find((c) => c.slug === s)).filter((c) => Boolean(c)).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-navy-deep/90 via-background to-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 opacity-20 pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-orbit absolute -right-24 -top-24 h-96 w-96 rounded-full border border-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-float absolute right-1/4 top-16 text-5xl opacity-30",
				children: "✈"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [
					{
						label: "Countries",
						to: "/countries"
					},
					{
						label: country.region,
						to: `/countries/${REGION_SLUGS[country.region]}`
					},
					{ label: country.name }
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
								isoCode: country.isoCode,
								countryName: country.name,
								fallbackEmoji: country.flag,
								size: "hero",
								className: "ring-2 ring-primary/40 shadow-lg"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-3 py-0.5 text-xs font-semibold text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3 w-3" }),
										" ",
										country.region
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-400",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
										" ",
										country.processingTime
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl",
								children: [
									country.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "chrome-text",
										children: "Visa Guide"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-3.5 w-3.5 text-primary" }),
											" Capital:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: country.capital
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-3.5 w-3.5 text-amber-400" }),
											" Currency:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: country.currency
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-primary" }),
											" Best Season:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground",
												children: country.bestSeason
											})
										]
									})
								]
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 lg:shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "royal-surface glow-ring shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/visa",
									search: { country: country.slug },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "mr-2 h-4 w-4" }),
										" Apply ",
										country.name,
										" Visa"
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-border/80 bg-card/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/flight-reservation",
									search: { destination: country.slug },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, { className: "mr-2 h-4 w-4 text-primary" }),
										" Flights to",
										" ",
										country.capital
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-border/80 bg-card/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/hotel-booking",
									search: { destination: country.slug },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "mr-2 h-4 w-4 text-amber-400" }), " Hotels"]
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: country.blurb
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: CalendarClock,
					label: "Processing Speed",
					value: country.processingTime,
					desc: "Standard turnaround window",
					color: "text-emerald-400"
				},
				{
					icon: Landmark,
					label: "Capital & Ports",
					value: country.capital,
					desc: `Major Gateway: ${country.capital} Airport`,
					color: "text-primary"
				},
				{
					icon: Coins,
					label: "Local Currency",
					value: country.currency,
					desc: "Forex available upon request",
					color: "text-amber-400"
				},
				{
					icon: Wallet,
					label: "Embassy Fees",
					value: "Transparent",
					desc: "Direct embassy tariff quotes",
					color: "text-primary"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-elevate relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 shadow-xs backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
							className: `h-6 w-6 ${s.color}`,
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
							children: "Official Metric"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs uppercase tracking-wider text-muted-foreground",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg font-bold text-foreground",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: s.desc
					})
				]
			}, s.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Available Options",
				title: `${country.name} Visa Categories`,
				description: `Choose the most suitable visa category based on your travel purpose, stay duration, and entry frequency.`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: country.visaCategories.map((vc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevate relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/75 p-5 shadow-sm backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold ${vc.typeBadge === "e-Visa" || vc.typeBadge === "Fast Track" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" : "bg-primary/15 text-primary border border-primary/30"}`,
								children: vc.typeBadge
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium text-muted-foreground",
								children: vc.entryType
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-base font-bold text-foreground",
							children: vc.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Max Stay:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: vc.duration
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Validity:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: vc.validity
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Processing:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-emerald-400",
										children: vc.processingTime
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 rounded-lg border border-border/50 bg-muted/20 p-2 text-xs leading-relaxed text-muted-foreground",
							children: vc.bestFor
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 border-t border-border/50 pt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "w-full text-xs font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/visa",
								search: { country: country.slug },
								children: "Apply For This Visa"
							})
						})
					})]
				}, vc.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-full rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-primary",
							children: "Checklist"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-1 font-display text-xl font-bold text-foreground sm:text-2xl",
							children: ["Required Documents for ", country.name]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "h-7 w-7 text-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "All documents must be clear, authentic, and compliant with embassy guidelines."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: country.documents.map((doc, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-3 text-xs sm:text-sm text-foreground/90 transition-colors hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: doc })]
						}, doc))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Embassy rules and consular requirements may update periodically. Our dedicated consultant double-checks your documents against active mission rules before submission." })]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full rounded-2xl border border-border/80 bg-card/75 p-6 sm:p-8 shadow-sm backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: "How It Works"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-xl font-bold text-foreground sm:text-2xl",
								children: "Application Process"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-7 w-7 text-emerald-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Our 4-step streamlined workflow ensures zero paperwork mistakes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4",
							children: country.stepProcess.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4 rounded-xl border border-border/60 bg-background/50 p-4 transition-colors hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "royal-surface inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-primary-foreground",
									children: ["0", step.step]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-bold text-foreground",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted-foreground",
									children: step.desc
								})] })]
							}, step.step))
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 shadow-sm backdrop-blur-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-primary",
							children: "Explore Destinations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-1 font-display text-xl font-bold text-foreground sm:text-2xl",
							children: ["Major Cities & Highlights in ", country.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Top urban hubs, cultural heritage points, and traveler favorites."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-8 w-8 text-primary shrink-0 hidden sm:block" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: country.popularCities.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
							" ",
							city
						]
					}, city))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3",
					children: country.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/40 p-3 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
					}, h))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-navy-deep p-6 sm:p-10 shadow-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-3.5 w-3.5" }),
								" Dedicated ",
								country.name,
								" Visa Desk"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl",
							children: ["Ready to begin your ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chrome-text",
								children: [country.name, " application?"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
							children: "Speak directly with an Areera visa consultant. We verify your passport eligibility, calculate official embassy tariffs, and manage your entire filing from paperwork to departure."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "royal-surface glow-ring shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/visa",
							search: { country: country.slug },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "mr-2 h-4 w-4" }), " Start Filing Now"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-border/80 bg-background/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}?text=Hello%20Areera%2C%20I%20would%20like%20to%20inquire%20about%20a%20visa%20for%20${encodeURIComponent(country.name)}`,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-2 h-4 w-4 text-emerald-400" }), " WhatsApp Inquiry"]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 shadow-sm backdrop-blur-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-xl font-bold text-foreground",
					children: ["Complete Travel Services for ", country.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Combine your visa filing with confirmed flight tickets, verified hotel reservations, and document attestations."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/visa",
							search: { country: country.slug },
							className: "card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 font-display text-sm font-bold text-foreground",
									children: [country.name, " Visa Filing"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "End-to-end documentation & submission"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/flight-reservation",
							search: { destination: country.slug },
							className: "card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 font-display text-sm font-bold text-foreground",
									children: ["Flights to ", country.capital]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Verifiable PNR & confirmed airfares"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/hotel-booking",
							search: { destination: country.slug },
							className: "card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "h-5 w-5 text-amber-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 font-display text-sm font-bold text-foreground",
									children: ["Hotels in ", country.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Embassy-verifiable hotel vouchers"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/attestation",
							className: "card-elevate flex flex-col rounded-2xl border border-border/70 bg-background/50 p-4 hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-emerald-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 font-display text-sm font-bold text-foreground",
									children: "Document Attestation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "MOFA, Embassy & Chamber legalization"
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...countryArticle(country) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {
			items: countryFaqs(country),
			title: `${country.name} Visa FAQs`,
			description: `Common questions regarding ${country.name} visa processing times, financial proof, and submission criteria.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Related Destinations",
					title: `Other ${country.region} Visa Guides`,
					description: `Explore visa requirements for neighboring countries across ${country.region}.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: related.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/countries",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-primary" }), " Explore All 50+ Global Visa Destinations"]
						})
					})
				})
			]
		})
	] })] });
}
//#endregion
export { CountryOrRegion as component };
