import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { i as SectionHeading, n as Reveal, r as Section } from "./Reveal-3UjQit6f.mjs";
import { n as FaqSection, t as ContentArticle } from "./FaqSection-C2Lyxuf-.mjs";
import { N as servicesArticle, P as servicesFaqs, d as popularVisaDestinations, o as countries, p as services } from "./router-6UWHtjA-2.mjs";
import { n as ServiceCard, t as CountryCard } from "./cards-D2DLrXXK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-qBXu124N.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesHub() {
	const popular = popularVisaDestinations.map((s) => countries.find((c) => c.slug === s)).filter((c) => Boolean(c));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [{ label: "Services" }] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			align: "left",
			eyebrow: "Services",
			title: "Everything you need between planning and boarding",
			description: "Choose a service to see the process, required documents and how to get started."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service: s })
			}, s.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				eyebrow: "Popular with our clients",
				title: "Top visa destinations"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: popular.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentArticle, { ...servicesArticle }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, { items: servicesFaqs })
	] });
}
//#endregion
export { ServicesHub as component };
