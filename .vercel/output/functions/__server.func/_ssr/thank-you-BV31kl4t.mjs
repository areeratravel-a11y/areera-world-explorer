import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, H as Clock, I as FileCheck, Q as BedDouble, T as MapPin, W as CircleCheck, b as Phone, d as ShieldCheck, et as ArrowRight, j as House, y as PlaneTakeoff } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { s as Route$7 } from "./router-DdKel0Wx.mjs";
import { f as contactInfo, o as countries, u as popularDestinations } from "./router-DdKel0Wx2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-BV31kl4t.js
var import_jsx_runtime = require_jsx_runtime();
function ThankYouPage() {
	const { service, name, ref } = Route$7.useSearch();
	const cleanPhone = contactInfo.phone.replace(/\s/g, "");
	const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
	const referenceCode = ref || "ARR-ONLINE";
	const displayService = service || "Visa & Travel Consultation";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "relative overflow-hidden py-10 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Inquiry Received" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl rounded-2xl border border-white/20 bg-card/85 p-6 sm:p-12 shadow-2xl backdrop-blur-xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center justify-center p-3 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mb-6 animate-in zoom-in-75 duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-emerald-500 p-2.5 text-background shadow-lg shadow-emerald-500/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 stroke-[2.5]" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquiry Logged & Prioritized" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground",
						children: name ? `Thank You, ${name}!` : "Thank You! Your Inquiry Is Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: [
							"We have registered your inquiry for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground font-semibold",
								children: displayService
							}),
							". A certified travel consultant is reviewing current embassy guidelines and flight availability for you."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-background/60 px-4 py-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquiry Reference:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono font-bold text-primary tracking-wider",
							children: referenceCode
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(`Hello Areera Travel, I just submitted an inquiry on your website (Ref: ${referenceCode}) for ${displayService}. Could you please update me?`)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-transform hover:scale-[1.02] hover:bg-emerald-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open WhatsApp Directly" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${cleanPhone}`,
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Call Specialist: ", contactInfo.phone] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "⚡ Typical response time is under 15 minutes during business hours (Mon–Sat: 9:00 AM – 7:00 PM PKT)."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-16 max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Clear Process",
					title: "What happens next?",
					description: "Here is our standard 3-step workflow to get your visa, flights, and stay finalized without delays.",
					align: "center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
											children: "01"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-muted-foreground" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-base text-foreground",
										children: "Specialist File Review"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed",
										children: "A senior consultant inspects your route, destination visa regulations, and current embassy appointment slots."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-4 border-t border-border/50 text-[11px] font-medium text-emerald-400",
										children: "Within 15 minutes"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
											children: "02"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-muted-foreground" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-base text-foreground",
										children: "Itinerary & Checklist"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed",
										children: "We share an exact embassy document checklist, transparent fee schedule, and flight itinerary options via WhatsApp."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-4 border-t border-border/50 text-[11px] font-medium text-primary",
										children: "Direct WhatsApp consultation"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-elevate relative flex flex-col h-full rounded-2xl border border-border bg-card/70 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary",
											children: "03"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-muted-foreground" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-base text-foreground",
										children: "Issuance & Embassy Filing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed",
										children: "Upon your approval, we issue verifiable airline PNRs, confirmed hotel vouchers, and finalize your embassy application dossier."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-4 border-t border-border/50 text-[11px] font-medium text-foreground/80",
										children: "100% Embassy-verifiable"
									})
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-16 max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Explore More",
						title: "While you wait, explore our destinations & services",
						description: "Prepare for your journey with our comprehensive country guides and visa requirements.",
						align: "left"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/visa",
								className: "card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-foreground truncate",
										children: "Visa Consultation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground truncate",
										children: "Checklist & requirements"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/flight-reservation",
								className: "card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-foreground truncate",
										children: "Flight Reservations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground truncate",
										children: "Verifiable airline PNR"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/hotel-booking",
								className: "card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-foreground truncate",
										children: "Hotel Bookings"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground truncate",
										children: "Embassy-accepted stays"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/attestation",
								className: "card-elevate flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-foreground truncate",
										children: "Document Attestation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground truncate",
										children: "MOFA & Embassy stamp"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-white/10 bg-card/50 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
							children: "Popular Country Visa Guides"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: popularDestinations.map((slug) => {
								const country = countries.find((c) => c.slug === slug);
								if (!country) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/countries/$slug",
									params: { slug: country.slug },
									className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.flag }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.name }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground" })
									]
								}, country.slug);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 font-medium text-primary hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return to Homepage" })]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ThankYouPage as component };
