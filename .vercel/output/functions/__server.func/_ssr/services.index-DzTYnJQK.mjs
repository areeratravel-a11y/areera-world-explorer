import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Breadcrumbs } from "./Breadcrumbs-_GnoNGyX.mjs";
import { a as Section, i as Reveal, o as SectionHeading, r as FaqSection, t as ContentArticle } from "./FaqSection-D3qomz_Q.mjs";
import { f as countries, h as popularVisaDestinations } from "./router-DvzRRJhh.mjs";
import { T as servicesFaqs, r as services, w as servicesArticle } from "./router-DvzRRJhh2.mjs";
import { n as ServiceCard, t as CountryCard } from "./cards-B4A5MG33.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-DzTYnJQK.js
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
