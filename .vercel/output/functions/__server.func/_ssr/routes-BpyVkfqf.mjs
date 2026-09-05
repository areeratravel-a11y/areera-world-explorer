import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Clock, M as Earth, U as BadgeCheck, W as ArrowRight, _ as PhoneCall, c as Sparkles, h as PlaneTakeoff, k as Headset, l as ShieldCheck, o as Star, s as Stamp } from "../_libs/lucide-react.mjs";
import { a as Section, i as Reveal, n as Divider, o as SectionHeading, r as FaqSection, t as ContentArticle } from "./FaqSection-D3qomz_Q.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { f as countries, m as popularDestinations } from "./router-DvzRRJhh.mjs";
import { a as testimonials, b as homeFaqs, r as services, y as homeArticle } from "./router-DvzRRJhh2.mjs";
import { n as ServiceCard, r as TestimonialCard, t as CountryCard } from "./cards-B4A5MG33.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpyVkfqf.js
var import_jsx_runtime = require_jsx_runtime();
var hero_flight_default = "/assets/hero-flight-k5ffh3Yy.jpg";
function Home() {
	const popular = popularDestinations.map((slug) => countries.find((c) => c.slug === slug)).filter((c) => Boolean(c));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_flight_default,
					alt: "Airliner wing flying over world city lights",
					width: 1920,
					height: 1088,
					className: "absolute inset-0 h-full w-full object-cover opacity-35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "animate-orbit absolute -right-24 top-10 h-72 w-72 rounded-full border border-primary/30 opacity-40 sm:h-96 sm:w-96"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "animate-float absolute left-8 top-28 text-3xl opacity-30 sm:text-4xl",
					children: "✈"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Areera Travel & Tours" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "animate-fade-up mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl",
							children: [
								"Your journey, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chrome-text",
									children: "planned properly"
								}),
								" from paperwork to departure."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-fade-up mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg",
							children: "Certified visa filing support, air ticketing, consular attestation, luxury hotel bookings, and verified flight reservations for more than 40 destinations worldwide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up mt-8 flex flex-col gap-3.5 sm:flex-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "royal-surface glow-ring shadow-lg hover:scale-[1.02] transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/services/visa",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "mr-2 h-4 w-4" }), " Get Visa Assistance"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-border/80 bg-card/60 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/flight-reservation",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, { className: "mr-2 h-4 w-4 text-primary" }), " Book a Flight"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-border/80 bg-card/60 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/countries",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-amber-400" }), " Explore Destinations"]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "animate-fade-up mt-14 grid max-w-3xl grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-3",
							children: [
								{
									icon: Earth,
									label: "40+ Countries Covered",
									color: "text-primary"
								},
								{
									icon: ShieldCheck,
									label: "100% Embassy Compliance",
									color: "text-emerald-400"
								},
								{
									icon: Headset,
									label: "Dedicated File Consultant",
									color: "text-amber-400"
								}
							].map(({ icon: Icon, label, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 text-xs sm:text-sm font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: `h-4 w-4 shrink-0 ${color}`,
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: label
								})]
							}, label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What we do",
				title: "Travel services under one roof",
				description: "Every service is handled by a certified travel consultant who reviews your documentation before submission."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service: s })
				}, s.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
					children: ["View all travel & visa services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": true
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-wider text-primary",
						children: "Global Reach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl",
						children: "Popular Visa Destinations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground max-w-xl",
						children: "Country guides featuring high-resolution country flags, visa types, official document checklists, and turnaround times."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/countries",
					className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline shrink-0",
					children: ["View All 40+ Countries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: popular.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c })
				}, c.slug))
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-primary" }), " Browse All Destinations by Region"]
					})
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Why Choose Areera",
				title: "Careful work beats big promises",
				description: "We do not make unrealistic promises — visa decisions belong exclusively to embassies. What we guarantee is rigorous preparation, error-free documentation, and transparent communication."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "royal-surface glow-ring",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "About Our Agency"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Speak With a Consultant"
					})
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					{
						icon: BadgeCheck,
						title: "Checklist-Driven Filing",
						body: "Every application starts with a bespoke checklist tailored to your target destination and profile.",
						badgeColor: "text-emerald-400"
					},
					{
						icon: Clock,
						title: "Realistic Timelines",
						body: "We provide published embassy processing timelines with live updates at every stage.",
						badgeColor: "text-primary"
					},
					{
						icon: ShieldCheck,
						title: "Genuine Verification",
						body: "100% embassy-verifiable hotel vouchers, flight reservations, and authorized attestations.",
						badgeColor: "text-amber-400"
					},
					{
						icon: Headset,
						title: "Accessible Specialists",
						body: "Direct WhatsApp and telephone consultation with the dedicated specialist managing your file.",
						badgeColor: "text-primary"
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevate h-full rounded-2xl border border-border/80 bg-card/75 p-5 shadow-xs backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: `mb-3 h-6 w-6 ${item.badgeColor}`,
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
								children: item.body
							})
						]
					})
				}, item.title))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center gap-1 text-amber-400 mb-2",
					children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Client Reviews",
					title: "Trusted by World Travellers"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0",
				children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-[85%] shrink-0 snap-center sm:w-[45%] lg:w-[31%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { ...t })
				}, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-xs text-muted-foreground",
				children: "Swipe to read client feedback"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...homeArticle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: homeFaqs })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-navy/80 to-navy-deep p-8 text-center sm:p-14 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "animate-float absolute right-8 top-8 text-5xl opacity-20",
					children: "✈"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Start Your Journey"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl font-bold text-foreground sm:text-4xl",
					children: "Where would you like to travel next?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base leading-relaxed",
					children: "Share your target destination and travel dates with us. We will provide the exact document checklist, embassy requirements, and immediate step-by-step guidance."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col justify-center gap-3.5 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "royal-surface glow-ring shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "mr-2 h-4 w-4" }), " Contact a Consultant"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-border/80 bg-background/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/visa",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "mr-2 h-4 w-4 text-emerald-400" }), " Apply For Visa"]
						})
					})]
				})
			]
		}) }) })
	] });
}
//#endregion
export { Home as component };
