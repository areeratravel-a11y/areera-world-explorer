import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { o as cn } from "./router-DvzRRJhh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookingForm-BC3RLmY5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(100),
	email: stringType().trim().email("Enter a valid email address").max(255),
	phone: stringType().trim().min(7, "Enter a valid phone number").max(20, "Phone number is too long"),
	detail: stringType().trim().min(1, "This field is required").max(120),
	message: stringType().trim().max(1e3).optional()
});
function BookingForm({ title, description, detailLabel, detailPlaceholder, defaultDetail = "", submitLabel = "Send inquiry" }) {
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			phone: fd.get("phone"),
			detail: fd.get("detail"),
			message: fd.get("message")
		});
		if (!parsed.success) {
			const next = {};
			parsed.error.issues.forEach((i) => {
				const key = String(i.path[0]);
				if (!next[key]) next[key] = i.message;
			});
			setErrors(next);
			toast.error("Please correct the highlighted fields");
			return;
		}
		setErrors({});
		const values = parsed.data;
		const msg = `*New Inquiry via Website*\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Details:* ${values.detail}${values.message ? `\n*Message:* ${values.message}` : ""}`;
		const encoded = encodeURIComponent(msg);
		toast.success("Opening WhatsApp with your inquiry details...");
		window.open(`https://wa.me/923001234567?text=${encoded}`, "_blank");
	}
	const field = (name) => errors[name] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-destructive",
		children: errors[name]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-2xl border border-border bg-card/70 p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-semibold",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: description
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Full name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							maxLength: 100,
							className: "mt-1.5",
							placeholder: "Your name"
						}),
						field("name")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							maxLength: 255,
							className: "mt-1.5",
							placeholder: "you@example.com"
						}),
						field("email")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone / WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							maxLength: 20,
							className: "mt-1.5",
							placeholder: "+92 300 0000000"
						}),
						field("phone")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "detail",
							children: detailLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "detail",
							name: "detail",
							maxLength: 120,
							defaultValue: defaultDetail,
							className: "mt-1.5",
							placeholder: detailPlaceholder
						}),
						field("detail")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Additional details (optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								maxLength: 1e3,
								rows: 4,
								className: "mt-1.5",
								placeholder: "Travel dates, number of travellers, budget, any specific requirement"
							}),
							field("message")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full sm:w-auto",
				children: submitLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: "We review every request manually and reply during business hours."
			})
		]
	});
}
//#endregion
export { Input as n, Label as r, BookingForm as t };
