import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as ChevronRight, j as House } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Breadcrumbs-_GnoNGyX.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "mb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "flex items-center gap-1.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-1 hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "h-3.5 w-3.5",
						"aria-hidden": true
					}), "Home"]
				})
			}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "h-3.5 w-3.5 shrink-0 opacity-60",
					"aria-hidden": true
				}), item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "truncate hover:text-foreground",
					children: item.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-medium text-foreground",
					children: item.label
				})]
			}, item.label))]
		})
	});
}
//#endregion
export { Breadcrumbs as t };
