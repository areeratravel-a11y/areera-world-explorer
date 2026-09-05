import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Mail, E as MapPin, K as CircleCheck, O as Lock, W as Clock, a as Trash2, d as Shield, rt as ArrowRight, x as Phone, z as Eye } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { f as contactInfo } from "./router-6JreJWcH2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-CoSMHcZ6.js
var import_jsx_runtime = require_jsx_runtime();
var keyGuarantees = [
	{
		icon: Lock,
		title: "Zero Data Brokerage",
		description: "We never sell, monetize, or license your passport or travel information to any marketing third parties."
	},
	{
		icon: Shield,
		title: "Embassy-Only Disclosure",
		description: "Your documentation is shared exclusively with accredited embassies, consulates, and authorized airline GDS networks."
	},
	{
		icon: Trash2,
		title: "Post-Filing Document Purge",
		description: "Sensitive financial and supporting records are permanently purged after visa issuance upon client request."
	},
	{
		icon: Eye,
		title: "Transparent Consent",
		description: "Every document transmission and embassy filing is explicitly confirmed with you prior to submission."
	}
];
var sections = [
	{
		id: "introduction",
		title: "1. Introduction & Scope"
	},
	{
		id: "information-collected",
		title: "2. Information We Collect"
	},
	{
		id: "how-we-use",
		title: "3. How We Use Your Data"
	},
	{
		id: "third-party-sharing",
		title: "4. Authorized Third-Party Disclosures"
	},
	{
		id: "security-retention",
		title: "5. Data Security & Document Retention"
	},
	{
		id: "your-rights",
		title: "6. Your Rights & Access Requests"
	},
	{
		id: "cookies",
		title: "7. Cookies & Website Analytics"
	},
	{
		id: "contact-dpo",
		title: "8. Contact Our Data Protection Desk"
	}
];
function PrivacyPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "py-10 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Privacy Policy" }] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl border border-white/20 bg-card/80 p-6 sm:p-12 shadow-xl backdrop-blur-xl mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Client Confidentiality Guarantee" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed",
						children: "At Areera Travel and Tours, we understand that travel planning, visa filing, and document attestation involve sensitive personal and financial information. This Privacy Policy outlines our protocols for collecting, processing, and safeguarding your information."
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400" }), "Applies to Web, WhatsApp & In-Office Consultations"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16",
				children: keyGuarantees.map((item, idx) => {
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
									children: "Have questions?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${contactInfo.email}`,
									className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email Privacy Desk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "space-y-12 text-sm sm:text-base leading-relaxed text-foreground/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "introduction",
							className: "scroll-mt-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "01."
									}), " Introduction & Scope"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground",
									children: [
										"Areera Travel and Tours (\"we\", \"our\", or \"us\") operates travel consulting, visa filing assistance, flight reservation, hotel booking, and consular document attestation services headquartered at ",
										contactInfo.address,
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: "This Privacy Policy explains how we collect, store, and process personal identification and travel details when you interact with our website, inquire through WhatsApp, or consult our agents in person. By utilizing our services, you acknowledge the processing practices outlined in this document."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "information-collected",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "02."
									}), " Information We Collect"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-4",
									children: "To fulfill visa regulations, book tickets with airlines, and meet consular requirements, we may collect the following categories of information:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-background/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm text-foreground",
												children: "A. Primary Traveler Identification"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs sm:text-sm text-muted-foreground",
												children: "Full name (as printed on passport), date of birth, nationality, national identity card (CNIC) number, passport number, issue date, expiration date, and biometric passport scan copies."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-background/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm text-foreground",
												children: "B. Contact & Communication Data"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs sm:text-sm text-muted-foreground",
												children: "WhatsApp contact number, mobile telephone numbers, email addresses, and residential/business mailing addresses for courier delivery of attested files."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-background/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm text-foreground",
												children: "C. Embassy Visa File Supporting Materials"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs sm:text-sm text-muted-foreground",
												children: "When contracted for visa application dossiers: employment reference letters, salary slips, bank account maintenance certificates, educational degrees (for MOFA/Embassy attestation), and family relationship records as demanded by specific embassies."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border/80 bg-background/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-sm text-foreground",
												children: "D. Itinerary & Booking Details"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs sm:text-sm text-muted-foreground",
												children: "Departure city, destination sectors, preferred airline carriers, seating/meal preferences, hotel stay duration, and frequent flyer numbers."
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "how-we-use",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "03."
									}), " How We Use Your Data"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "Your data is processed strictly to execute the services requested by you:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Airline Reservations & Ticketing:"
										}), " Entering traveler names into Global Distribution Systems (GDS) such as Sabre and Amadeus to issue verifiable PNRs and confirmed airline e-tickets."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Visa Application Preparation:"
										}), " Completing official visa portals, scheduling biometric appointments, and verifying dossier checklists."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Consular Attestation:"
										}), " Submitting educational, commercial, or personal documents to the Ministry of Foreign Affairs (MOFA) and designated embassies."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Customer Support:"
										}), " Providing real-time updates on application progress, visa approvals, and flight gate/schedule changes via WhatsApp or telephone."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Financial Record Keeping:"
										}), " Generating tax invoices and maintaining commercial accounts in compliance with Pakistani revenue authorities."] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "third-party-sharing",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "04."
									}), " Authorized Third-Party Disclosures"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "We never sell or rent your information to advertisers. Your data is disclosed solely to authorized entities required to deliver travel services:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-card/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-xs sm:text-sm text-foreground",
												children: "Embassies & Consular Missions"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Official government diplomatic missions evaluating your visa entry application."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-card/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-xs sm:text-sm text-foreground",
												children: "Visa Application Centers"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Accredited biometric processing partners including Gerry's Visa, VFS Global, and TLScontact."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-card/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-xs sm:text-sm text-foreground",
												children: "Airlines & Hospitality Providers"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "IATA airlines and hotel suppliers generating confirmed booking vouchers under your legal name."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-border bg-card/50 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-semibold text-xs sm:text-sm text-foreground",
												children: "Attestation Authorities"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Higher Education Commission (HEC), IBCC, Chamber of Commerce, and MOFA offices."
											})]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "security-retention",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "05."
									}), " Data Security & Document Retention"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "We apply strict administrative and digital security measures to protect your documents against unauthorized access or loss:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-3 space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Digital communication over SSL/TLS encrypted transport." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Role-based workstation access restricted to senior consultants handling your specific file." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Physical copies kept in locked, monitored documentation cabinets prior to submission." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Purging Policy:"
										}), " Supporting financial records (e.g. bank statements, tax documents) are permanently shredded or deleted within 30 days of visa decision notification, unless prolonged retention is explicitly instructed by you."] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "your-rights",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "06."
									}), " Your Rights & Access Requests"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-3",
									children: "As a valued client, you retain complete authority over your personal records:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-xs sm:text-sm text-muted-foreground list-disc pl-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Right of Access:"
										}), " Request a copy of all information held on your profile."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Right to Rectification:"
										}), " Request instant correction of misspelled names, dates, or contact details."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Right to Erasure:"
										}), " Request the deletion of remaining scanned documents upon conclusion of your trip."] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-foreground",
											children: "Right to Withdraw Consent:"
										}), " Opt out of future travel deal announcements or WhatsApp advisory broadcasts at any time."] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "cookies",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-mono text-lg",
									children: "07."
								}), " Cookies & Website Analytics"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Our website uses privacy-respecting cookies and local storage exclusively to remember your site theme preferences, preserve your selected destination filter states, and ensure smooth routing. We do not track you across third-party websites or engage in behavioral ad retargeting networks."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "contact-dpo",
							className: "scroll-mt-24 border-t border-border pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-mono text-lg",
										children: "08."
									}), " Contact Our Data Protection Desk"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-4",
									children: "If you have any questions regarding this Privacy Policy, wish to exercise your data rights, or request an immediate purge of your completed application records, contact our dedicated team:"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card/80 p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-foreground",
										children: "Areera Travel and Tours — Privacy & Compliance"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 space-y-2.5 text-xs sm:text-sm text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
													className: "hover:text-foreground",
													children: contactInfo.phone
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `mailto:${contactInfo.email}`,
													className: "hover:text-foreground",
													children: contactInfo.email
												})]
											})
										]
									})]
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
					children: "Need immediate visa assistance?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Consult with an experienced travel agent today."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Consultants" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return to Home" })
					})]
				})]
			})
		]
	});
}
//#endregion
export { PrivacyPolicyPage as component };
