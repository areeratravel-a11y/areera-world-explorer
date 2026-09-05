import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as BadgeCheck, G as CircleAlert, H as Clock, J as Check, L as FileCheckCorner, O as LoaderCircle, P as Headset, Q as BedDouble, W as CircleCheck, b as Phone, c as Star, d as ShieldCheck, et as ArrowRight, l as Stamp, m as Search, p as Send, q as ChevronDown, t as X, x as PhoneCall, y as PlaneTakeoff, z as Earth } from "../_libs/lucide-react.mjs";
import { i as SectionHeading, n as Reveal, r as Section, t as Divider } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { d as trackWhatsAppContact, u as trackInquirySubmitted } from "./router-DFN211Mt.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as cn, O as homeArticle, f as contactInfo, h as testimonials, k as homeFaqs, m as siteConfig, n as CountryFlag, o as countries, p as services, u as popularDestinations, z as Button } from "./router-DFN211Mt2.mjs";
import { n as ServiceCard, r as TestimonialCard, t as CountryCard } from "./cards-D2DLrXXK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0eN-yaXV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_flight_default = "/assets/hero-flight-B3a0tfgl.jpg";
var serviceConfig = {
	visa: {
		title: "Visa Consultation",
		icon: Stamp,
		placeholder: "Select target country (e.g. UAE, UK, Turkey)",
		actionLabel: "Get Visa Checklist & Quote",
		badge: "100% Embassy Compliant"
	},
	flight: {
		title: "Flight Reservation",
		icon: PlaneTakeoff,
		placeholder: "Enter departure & destination (e.g. LHE to DXB)",
		actionLabel: "Get Flight Itinerary",
		badge: "Verifiable Embassy PNR"
	},
	hotel: {
		title: "Hotel Booking",
		icon: BedDouble,
		placeholder: "Destination city & stay duration",
		actionLabel: "Request Hotel Options",
		badge: "Confirmed Vouchers"
	},
	attestation: {
		title: "Attestation",
		icon: FileCheckCorner,
		placeholder: "Degree / Document type & Embassy",
		actionLabel: "Check Attestation Process",
		badge: "MOFA & Embassy Legalization"
	}
};
var destinationFilterTabs = [
	{
		id: "popular",
		label: "Popular"
	},
	{
		id: "all",
		label: "All Destinations"
	},
	{
		id: "Middle East",
		label: "Middle East"
	},
	{
		id: "Asia",
		label: "Asia"
	},
	{
		id: "Europe",
		label: "Europe"
	},
	{
		id: "Africa",
		label: "Africa"
	}
];
function HeroBookingCard({ className }) {
	const navigate = useNavigate();
	const [activeService, setActiveService] = (0, import_react.useState)("visa");
	const [selectedSlug, setSelectedSlug] = (0, import_react.useState)("uae");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [phoneError, setPhoneError] = (0, import_react.useState)("");
	const [travelDate, setTravelDate] = (0, import_react.useState)("");
	const [customDetail, setCustomDetail] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isDropdownOpen, setIsDropdownOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedFilter, setSelectedFilter] = (0, import_react.useState)("popular");
	const dropdownRef = (0, import_react.useRef)(null);
	const searchInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isDropdownOpen) setTimeout(() => {
			searchInputRef.current?.focus();
		}, 60);
		else setSearchQuery("");
	}, [isDropdownOpen]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsDropdownOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const currentCountry = countries.find((c) => c.slug === selectedSlug) || countries[0];
	const activeCfg = serviceConfig[activeService];
	activeCfg.icon;
	const filteredCountries = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		if (q) return countries.filter((c) => c.name.toLowerCase().includes(q) || c.region.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.isoCode.toLowerCase().includes(q));
		if (selectedFilter === "popular") return popularDestinations.map((slug) => countries.find((c) => c.slug === slug)).filter((c) => Boolean(c));
		if (selectedFilter === "all") return countries;
		return countries.filter((c) => c.region === selectedFilter);
	}, [searchQuery, selectedFilter]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const cleanDigits = phone.replace(/[^0-9]/g, "");
		if (!phone.trim()) {
			setPhoneError("Phone or WhatsApp number is required");
			toast.error("Please provide your Phone or WhatsApp number so we can send details.");
			return;
		}
		if (cleanDigits.length < 7) {
			setPhoneError("Please enter a valid phone number (minimum 7 digits)");
			toast.error("Please provide a valid phone number with country/area code.");
			return;
		}
		setPhoneError("");
		setIsSubmitting(true);
		const detailText = activeService === "visa" ? `Visa inquiry for ${currentCountry?.name || "Global"}` : customDetail.trim() || `Inquiry for ${activeCfg.title}`;
		const dateText = travelDate ? `\n*Intended Travel Date:* ${travelDate}` : "";
		const inquiryMessage = `*Instant Inquiry via Website (Hero)*\n*Service:* ${activeCfg.title}\n*Details:* ${detailText}${dateText}\n*Phone:* ${phone}\n*Assistance:* Please provide checklist, processing timeline, and quotation.`;
		const encoded = encodeURIComponent(inquiryMessage);
		const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
		const refCode = `ARR-${Math.floor(1e5 + Math.random() * 9e5)}`;
		trackInquirySubmitted({
			service: activeCfg.title,
			ref: refCode,
			source: "HeroBookingCard"
		});
		trackWhatsAppContact({
			context: "HeroBookingCard",
			service: activeCfg.title,
			country: activeService === "visa" ? currentCountry?.name : void 0
		});
		toast.success("Connecting with travel consultant on WhatsApp...");
		setTimeout(() => {
			window.open(`https://wa.me/${cleanWhatsApp}?text=${encoded}`, "_blank");
			setIsSubmitting(false);
			navigate({
				to: "/thank-you",
				search: {
					service: activeCfg.title,
					ref: refCode
				}
			});
		}, 450);
	};
	const handleViewCountryGuide = () => {
		if (currentCountry) navigate({
			to: "/countries/$slug",
			params: { slug: currentCountry.slug }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative rounded-2xl border border-white/20 bg-card/85 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all", "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-60", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/25 blur-3xl",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-emerald-400",
						children: "Live Consultant Available"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-lg sm:text-xl font-bold text-foreground",
					children: "Fast-Track Your Travel Inquiry"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary",
					children: activeCfg.badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-4 gap-1.5 rounded-2xl bg-background/60 p-1.5 border border-white/10",
				children: [
					"visa",
					"flight",
					"hotel",
					"attestation"
				].map((svc) => {
					const config = serviceConfig[svc];
					const TabIcon = config.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveService(svc),
						className: cn("flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl py-2 px-1 sm:px-3 text-xs font-medium transition-all", activeService === svc ? "bg-primary text-primary-foreground shadow-md font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-white/5"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabIcon, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] sm:text-xs truncate",
							children: config.title.split(" ")[0]
						})]
					}, svc);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				className: "mt-5 space-y-4",
				children: [
					activeService === "visa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: dropdownRef,
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-foreground/90 mb-1.5",
								children: "Select Destination Country"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsDropdownOpen((prev) => !prev),
								"aria-haspopup": "listbox",
								"aria-expanded": isDropdownOpen,
								className: cn("relative flex h-12 w-full items-center justify-between rounded-xl border bg-slate-950/85 px-3.5 py-2 text-xs sm:text-sm text-foreground shadow-inner transition-all cursor-pointer outline-none focus:outline-none", isDropdownOpen ? "border-cyan-400 bg-slate-900 shadow-[0_0_18px_rgba(56,189,248,0.25)] ring-2 ring-cyan-400/20" : "border-blue-500/35 hover:border-cyan-400/60 hover:bg-slate-900/80"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0 pr-2",
									children: [currentCountry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
										isoCode: currentCountry.isoCode,
										countryName: currentCountry.name,
										size: "xs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 truncate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-white truncate",
											children: currentCountry?.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] text-cyan-300/80 hidden xs:inline shrink-0",
											children: [
												"(",
												currentCountry?.region,
												")"
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 shrink-0",
									children: [currentCountry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentCountry.processingTime })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 text-slate-400 transition-transform duration-200", isDropdownOpen ? "rotate-180 text-cyan-400" : "group-hover:text-white") })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "hidden",
								name: "destination",
								value: selectedSlug
							}),
							isDropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-2xl border border-blue-500/45 bg-slate-950/98 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(59,130,246,0.25)] backdrop-blur-3xl animate-fade-up",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cyan-400" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: searchInputRef,
												value: searchQuery,
												onChange: (e) => setSearchQuery(e.target.value),
												placeholder: "Search country (e.g. UAE, Saudi, UK)...",
												className: "h-9 w-full rounded-xl border border-blue-400/30 bg-white/10 pl-9 pr-8 text-xs text-white placeholder:text-slate-400 outline-none focus:border-cyan-400 focus:bg-white/15 transition-all shadow-xs"
											}),
											searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSearchQuery(""),
												className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 text-xs",
												"aria-label": "Clear search",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
											})
										]
									}),
									!searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-1 pt-0.5",
										children: destinationFilterTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSelectedFilter(tab.id),
											className: cn("rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all shrink-0 whitespace-nowrap", selectedFilter === tab.id ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white shadow-xs font-bold" : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"),
											children: tab.label
										}, tab.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-h-60 overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-y-1 pr-1",
										children: filteredCountries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "py-6 text-center text-xs text-slate-400",
											children: [
												"No destinations found for \"",
												searchQuery,
												"\"."
											]
										}) : filteredCountries.map((c) => {
											const isSelected = selectedSlug === c.slug;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													setSelectedSlug(c.slug);
													setIsDropdownOpen(false);
													setSearchQuery("");
												},
												className: cn("flex w-full items-center justify-between gap-2.5 rounded-xl px-3 py-2 text-xs transition-all text-left group border", isSelected ? "bg-blue-600/25 border-cyan-400/40 text-cyan-200 shadow-xs" : "hover:bg-white/10 hover:border-blue-400/30 border-transparent text-white/90"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5 min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
														isoCode: c.isoCode,
														countryName: c.name,
														size: "xs"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: cn("font-semibold truncate", isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-300"),
															children: c.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[10px] text-slate-400 truncate",
															children: [
																c.capital,
																" · ",
																c.region
															]
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 shrink-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-emerald-500/15 border border-emerald-400/25 px-2 py-0.5 text-[10px] font-semibold text-emerald-300",
														children: c.processingTime
													}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-cyan-400 shrink-0" })]
												})]
											}, c.slug);
										})
									})
								]
							}),
							currentCountry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between text-[11px] text-muted-foreground px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Processing: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-emerald-400 font-medium",
									children: currentCountry.processingTime
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleViewCountryGuide,
									className: "inline-flex items-center gap-1 text-primary hover:underline font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Requirements Guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold text-foreground/90 mb-1.5",
						children: activeService === "flight" ? "Route / Travel Sector" : activeService === "hotel" ? "Destination & Hotel Class" : "Document Type & Country"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: customDetail,
						onChange: (e) => setCustomDetail(e.target.value),
						placeholder: activeCfg.placeholder,
						className: "w-full rounded-xl border border-white/15 bg-background/80 py-2.5 px-3.5 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "hero-phone",
								className: "block text-xs font-semibold text-foreground/90 mb-1.5 flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone / WhatsApp" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive font-bold",
									"aria-hidden": "true",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: cn("absolute left-3 h-3.5 w-3.5 pointer-events-none transition-colors", phoneError ? "text-destructive" : "text-muted-foreground") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "hero-phone",
									type: "tel",
									value: phone,
									onChange: (e) => {
										setPhone(e.target.value);
										if (phoneError) setPhoneError("");
									},
									placeholder: "+92 300 0000000",
									"aria-invalid": Boolean(phoneError),
									"aria-describedby": phoneError ? "hero-phone-error" : void 0,
									className: cn("w-full rounded-xl border bg-background/80 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2", phoneError ? "border-destructive focus:border-destructive focus:ring-destructive/30 bg-destructive/5" : "border-white/15 focus:border-primary focus:ring-primary/30")
								})]
							}),
							phoneError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								id: "hero-phone-error",
								role: "alert",
								className: "mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phoneError })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "hero-travel-date",
							className: "block text-xs font-semibold text-foreground/90 mb-1.5",
							children: "Travel Window (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "hero-travel-date",
							type: "text",
							value: travelDate,
							onChange: (e) => setTravelDate(e.target.value),
							placeholder: "e.g. Next month, Nov 2026",
							className: "w-full rounded-xl border border-white/15 bg-background/80 py-2.5 px-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: isSubmitting,
						className: "w-full rounded-xl gap-2 font-semibold text-sm shadow-lg shadow-primary/25 royal-surface hover:scale-[1.01] transition-transform",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Connecting to Specialist..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), activeCfg.actionLabel] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-400" }), "Zero Filing Fees Until Review"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-blue-400" }), "Average Response: <15 mins"]
				})]
			})
		]
	});
}
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
					fetchPriority: "high",
					decoding: "async",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-12 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary shadow-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Areera Travel & Tours" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "animate-fade-up mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl",
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
									className: "animate-fade-up mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg",
									children: "Certified visa filing support, air ticketing, consular attestation, luxury hotel bookings, and verified flight reservations for more than 40 destinations worldwide."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-fade-up mt-5 flex items-center gap-3 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex -space-x-0.5",
										children: [
											1,
											2,
											3,
											4,
											5
										].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }, star))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold text-foreground",
										children: "4.9/5 Rating"
									}), " from 1,200+ travellers"] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "animate-fade-up mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											className: "royal-surface glow-ring shadow-lg hover:scale-[1.02] transition-transform font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/services/visa",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, { className: "mr-2 h-4 w-4" }), " Get Visa Assistance"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											variant: "outline",
											className: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Areera Travel, I would like to consult with an agent regarding visa and travel assistance.")}`,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "mr-2 h-4 w-4 text-emerald-400" }), " WhatsApp Specialist"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											variant: "outline",
											className: "border-border/80 bg-card/60 backdrop-blur-md",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/countries",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-amber-400" }), " 40+ Destinations"]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "animate-fade-up mt-12 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-3",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBookingCard, {})
						})]
					})
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
					className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-4 py-2 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-muted hover:text-primary transition-colors shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View All 50+ Destinations" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 ml-0.5" })
					]
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
			className: "relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-blue-950/70 via-slate-950/90 to-cyan-950/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5" }), " 2026 Travel Intelligence"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-2xl font-bold text-white sm:text-3xl",
							children: ["Visa-Free & Simplified ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "chrome-text",
								children: "Asian Destinations"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed",
							children: "Planning your next international trip? Discover the top visa-free, e-visa, and fast-track entry policies for Asian destinations with typical holiday package budgets and verified flight connectivity."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "royal-surface glow-ring shadow-lg font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/guides/visa-free-asian-destinations",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Asian Travel Guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-white/20 bg-white/5 text-white hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/countries",
							children: "Browse All 50+ Countries"
						})
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/flight-reservation",
						className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-white/10 transition-colors group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, { className: "h-5 w-5 text-cyan-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-white group-hover:text-cyan-300",
							children: "Flight Reservations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: "Verifiable embassy PNRs for your visa file"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hotel-booking",
						className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-amber-400/40 hover:bg-white/10 transition-colors group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-5 w-5 text-amber-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-white group-hover:text-amber-300",
							children: "Hotel Bookings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: "Confirmed embassy-compliant vouchers"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/attestation",
						className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-emerald-400/40 hover:bg-white/10 transition-colors group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-emerald-400 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-white group-hover:text-emerald-300",
							children: "Document Attestation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: "MOFA, HEC & foreign embassy legalization"
						})] })]
					})
				]
			})]
		}) }),
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
			className: "relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/20 via-navy/80 to-navy-deep p-8 text-center sm:p-14 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "animate-float absolute right-8 top-8 text-5xl opacity-20",
					children: "✈"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-primary/25 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary",
					children: "Start Your Journey"
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
