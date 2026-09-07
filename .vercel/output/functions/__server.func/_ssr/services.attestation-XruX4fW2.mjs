import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as Earth } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C5CjSI_F.mjs";
import { C as attestationArticle, W as Button, d as countries, u as attestationCountries, w as attestationFaqs } from "./router-DVre9Y2s2.mjs";
import { t as BookingForm } from "./BookingForm-BIqwlYfB.mjs";
import { t as CountryCard } from "./cards-CNZ1sMux.mjs";
import { t as RelatedServices } from "./RelatedServices-Hc1WqBMg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.attestation-XruX4fW2.js
var import_jsx_runtime = require_jsx_runtime();
var docTypes = [
	{
		title: "Educational documents",
		items: [
			"Degrees and transcripts",
			"Matric and intermediate certificates",
			"Diplomas and technical certificates"
		]
	},
	{
		title: "Personal documents",
		items: [
			"Birth and marriage certificates",
			"Family registration certificate",
			"Police character certificate",
			"Affidavits and authority letters"
		]
	},
	{
		title: "Commercial documents",
		items: [
			"Company registration papers",
			"Export invoices and certificates of origin",
			"Board resolutions and agreements"
		]
	}
];
var timeline = [
	{
		title: "Verification",
		body: "Issuing board, university or HEC verification of the original document."
	},
	{
		title: "Notary / regional office",
		body: "Notarisation or regional attestation where the document type requires it."
	},
	{
		title: "Ministry of Foreign Affairs",
		body: "MOFA attestation confirming the preceding seals and signatures."
	},
	{
		title: "Embassy or consulate",
		body: "Final attestation by the destination country's mission."
	}
];
function AttestationPage() {
	const list = attestationCountries.map((s) => countries.find((c) => c.slug === s)).filter((c) => Boolean(c));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{
			label: "Services",
			to: "/services"
		}, { label: "Attestation Services" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Attestation",
			title: "Document attestation without the office queues",
			description: "Attestation must follow a strict order. We manage each stage and tell you exactly where your documents are."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-3",
			children: docTypes.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-elevate h-full rounded-2xl border border-border bg-card/70 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: d.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5 text-sm text-muted-foreground",
						children: d.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "•"
							}), it]
						}, it))
					})]
				})
			}, d.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Process timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-4 border-l border-border pl-6",
					children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "royal-surface absolute -left-[31px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-primary-foreground",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t.body
							})
						]
					}, t.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Overall duration depends on the issuing authority and the destination embassy's current workload; we confirm the expected window before starting."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Where it is needed",
					title: "Countries that commonly require attestation",
					description: "Gulf employment, residency and family visas almost always require attested educational and personal documents."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "border-border/80 bg-card/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/countries",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "mr-2 h-4 w-4 text-primary" }), " Browse All 50+ Visa Destinations"]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "inquiry-form",
			className: "mt-16 scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {
				title: "Attestation inquiry",
				description: "Tell us which document you need attested and for which country.",
				detailLabel: "Document type & destination",
				detailPlaceholder: "e.g. BSc degree for Saudi Arabia",
				submitLabel: "Request attestation support"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...attestationArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: attestationFaqs }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedServices, { exclude: "attestation" })
	] });
}
//#endregion
export { AttestationPage as component };
