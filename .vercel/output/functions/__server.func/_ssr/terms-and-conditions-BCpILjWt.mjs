import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as CircleCheck, W as Clock, g as Scale, i as TriangleAlert, p as ShieldAlert, rt as ArrowRight, y as Plane } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { f as contactInfo } from "./router-BBvjGGPB2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-and-conditions-BCpILjWt.js
var import_jsx_runtime = require_jsx_runtime();
var keyPrinciples = [
	{
		icon: Scale,
		title: "Sole Embassy Sovereignty",
		description: "Visa issuance decisions, processing durations, and entry approvals rest entirely with foreign diplomatic missions."
	},
	{
		icon: Plane,
		title: "IATA Carrier Fare Rules",
		description: "Ticket cancellations, date adjustments, and baggage limits are governed by the operating airline's published fare conditions."
	},
	{
		icon: ShieldAlert,
		title: "Non-Refundable Filing Fees",
		description: "Government visa fees, biometric charges, and embassy application costs are strictly non-refundable once remitted."
	},
	{
		icon: CircleCheck,
		title: "Authentic Document Warranty",
		description: "Clients warrant that all passports, bank records, and educational credentials presented for filing are genuine and authentic."
	}
];
var sections = [
	{
		id: "acceptance",
		title: "1. Acceptance of Terms"
	},
	{
		id: "services-scope",
		title: "2. Scope of Services"
	},
	{
		id: "visa-disclaimer",
		title: "3. Visa Filing & Embassy Disclaimers"
	},
	{
		id: "flight-reservations",
		title: "4. Flight Reservations & Ticketing Rules"
	},
	{
		id: "hotel-bookings",
		title: "5. Hotel Accommodation Vouchers"
	},
	{
		id: "document-attestation",
		title: "6. Consular Document Attestation"
	},
	{
		id: "payments-refunds",
		title: "7. Payments, Fees & Refund Policy"
	},
	{
		id: "liability-governing-law",
		title: "8. Limitation of Liability & Law"
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-10 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Terms & Conditions" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl border border-white/20 bg-card/80 p-6 sm:p-12 shadow-xl backdrop-blur-xl mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official Service Terms" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground",
						children: "Terms and Conditions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "These Terms and Conditions govern your engagement with Areera Travel and Tours. Please read these terms carefully before purchasing tickets, requesting visa file preparation, or submitting documents for attestation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary" }),
								"Last Updated: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "September 2026"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400" }), "Binding Service Agreement"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16",
				children: keyPrinciples.map((item, idx) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevate flex flex-col h-full rounded-2xl border border-border bg-card/70 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-semibold text-sm text-foreground",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
									children: item.description
								})
							]
						})
					}, item.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[260px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 rounded-2xl border border-border bg-card/70 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4",
								children: "On this page"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "space-y-2",
								children: sections.map((sec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `#${sec.id}`,
									className: "block text-xs text-muted-foreground hover:text-primary transition-colors py-1 truncate",
									children: sec.title
								}, sec.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-5 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mb-2",
									children: "Need clarification?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
									className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Legal Desk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "acceptance",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "01."
									}), " Acceptance of Terms"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "By accessing our website, initiating a WhatsApp booking, or engaging Areera Travel and Tours (\"Company\", \"we\", \"us\") for visa filing, air ticketing, hotel reservations, or attestation, you (\"Client\", \"Passenger\") accept and agree to be legally bound by these Terms and Conditions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: "If you do not agree to these terms in their entirety, you should not authorize payment or submit documents for processing."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "services-scope",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "02."
									}), " Scope of Services"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "Areera Travel and Tours functions as an independent travel consultancy and facilitator:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Visa Documentation:"
										}), " We audit requirements, draft embassy cover letters, complete visa application portals, verify sponsorship/bank paperwork, and secure consular appointment slots."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Flight Booking:"
										}), " We reserve airline seats via Global Distribution Systems (GDS) with verifiable PNR codes, and issue confirmed e-tickets upon payment."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Hotel Accommodations:"
										}), " We generate confirmed, embassy-verifiable hotel booking vouchers matching travel itineraries."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Document Attestation:"
										}), " We act as client couriers and coordinators submitting credentials to MOFA, IBCC, HEC, and foreign consulates."] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "visa-disclaimer",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "03."
									}), " Visa Filing & Embassy Disclaimers"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 mb-4 text-xs sm:text-sm text-amber-300 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 shrink-0 text-amber-400 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold block text-amber-200",
										children: "Critical Embassy Disclaimer:"
									}), "Areera Travel and Tours is NOT an embassy, consulate, or government body. Visa issuance, processing timeframes, document interview calls, and visa refusals are at the sole, sovereign discretion of the relevant embassy or high commission."] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "No Guarantee of Visa Approval:"
										}), " We do not and cannot guarantee that any visa application will be granted. A complete and compliant file maximizes the prospect of success, but does not bind the visa officer."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Embassy Processing Timeframes:"
										}), " Timeframes quoted on our website (e.g. \"3 to 5 working days\") are typical averages reported by consulates. Embassies reserve the right to extend processing for administrative background checks."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Non-Refundability of Embassy Fees:"
										}), " Government visa application fees, consular interview fees, and biometric center charges are non-refundable under all circumstances once paid, regardless of whether a visa is approved, delayed, or refused."] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "flight-reservations",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "04."
									}), " Flight Reservations & Ticketing Rules"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "Air travel services are divided into two distinct offerings:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card/50 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-xs sm:text-sm text-foreground",
											children: "A. Visa-Ready Flight Reservations (PNR)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Temporary reservations issued with a verifiable airline Passenger Name Record (PNR) to fulfill embassy proof-of-travel requirements. Airline reservation validity is determined solely by airline automated ticketing time limits (TTL). We guarantee the reservation is live and verifiable at the time of visa file submission."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border bg-card/50 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-xs sm:text-sm text-foreground",
											children: "B. Confirmed Air Tickets"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Purchased e-tickets are issued subject to the operating airline's published tariff conditions. Date changes, cancellations, baggage restrictions, and refund eligibility are strictly governed by carrier fare rules. Airline penalty fees and our agency handling charges apply to changes."
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "hotel-bookings",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-mono text-lg",
									children: "05."
								}), " Hotel Accommodation Vouchers"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Hotel booking vouchers provided for embassy files contain confirmed reservation references. For confirmed non-refundable stays, cancellation charges equal 100% of the booking value. Guests are responsible for presenting valid passports matching booking names and any incidental security deposits required upon check-in by individual hotel properties."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "document-attestation",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "06."
									}), " Consular Document Attestation"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "When submitting degrees, marriage certificates, or commercial deeds for attestation:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Client Authenticity Warranty:"
									}), " The Client warrants that all submitted documents are genuine originals. Submitting forged or counterfeit documents is a criminal offense under Pakistani and international law and will be reported to authorities."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Verification Delays:"
									}), " If an issuing university, board, or Chamber of Commerce delays prior verification, Areera Travel and Tours is not liable for resultant consular processing delays."] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "payments-refunds",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-mono text-lg",
									children: "07."
								}), " Payments, Fees & Refund Policy"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-xs sm:text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Payment Authorization:"
									}), " All service quotes are provided upfront in Pakistani Rupees (PKR) or foreign currency equivalents. Work begins upon receipt of agreed advance payments or bank transfers."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Refund Policy:"
									}), " Our agency service fees cover specialist labor, checklist auditing, dossier creation, and appointment booking. If a visa application is refused by an embassy for reasons beyond our control (e.g. immigration officer discretion, insufficient applicant financial balance), our service fees and paid embassy levies are non-refundable."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Voluntary Client Cancellation:"
									}), " If a client cancels a file before embassy submission, any unspent third-party fees will be refunded less a standard dossier drafting fee."] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "liability-governing-law",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "08."
									}), " Limitation of Liability & Governing Law"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "To the fullest extent permitted by law, Areera Travel and Tours shall not be liable for indirect, incidental, consequential, or punitive damages arising from:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-2 space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Embassy visa refusals, interview demands, or processing delays." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Airline schedule changes, cancellations, missed connections, or lost baggage." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Acts of God, diplomatic closures, pandemics, civil unrest, or border restrictions (Force Majeure)." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-foreground",
										children: "Governing Law:"
									}), " These Terms and Conditions shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal dispute arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts of Islamabad, Pakistan."]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-foreground text-sm",
					children: "Questions about our service terms?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Our travel consultants are happy to clarify any clause before you book."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Consult an Agent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy-policy",
						className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read Privacy Policy" })
					})]
				})]
			})
		]
	});
}
//#endregion
export { TermsPage as component };
