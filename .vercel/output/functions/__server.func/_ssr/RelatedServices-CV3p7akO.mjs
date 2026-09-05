import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { p as services } from "./router-BBvjGGPB2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RelatedServices-CV3p7akO.js
var import_jsx_runtime = require_jsx_runtime();
function RelatedServices({ exclude }) {
	const others = services.filter((s) => s.slug !== exclude);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16 rounded-2xl border border-border bg-card/50 p-6 sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: "You may also need"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3 sm:grid-cols-2",
			children: others.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: s.path,
				className: "group flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-primary/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-xs text-muted-foreground",
						children: s.short
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1",
					"aria-hidden": true
				})]
			}, s.slug))
		})]
	});
}
//#endregion
export { RelatedServices as t };
