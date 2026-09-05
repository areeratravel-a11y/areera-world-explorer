import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as LoaderCircle, q as CircleAlert } from "../_libs/lucide-react.mjs";
import { d as trackWhatsAppContact, u as trackInquirySubmitted } from "./router-BBvjGGPB.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { B as cn, f as contactInfo, z as Button } from "./router-BBvjGGPB2.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookingForm-DyETzn_9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/40", className),
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
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/40", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name (minimum 2 characters)").max(100),
	email: stringType().trim().email("Please enter a valid email address (e.g. name@example.com)").max(255),
	phone: stringType().trim().min(7, "Please enter a valid phone number (minimum 7 digits)").max(20, "Phone number is too long"),
	detail: stringType().trim().min(1, "This field is required").max(120),
	message: stringType().trim().max(1e3).optional()
});
function BookingForm({ title, description, detailLabel, detailPlaceholder, defaultDetail = "", submitLabel = "Send inquiry" }) {
	const navigate = useNavigate();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const clearFieldError = (fieldName) => {
		if (errors[fieldName]) setErrors((prev) => {
			const next = { ...prev };
			delete next[fieldName];
			return next;
		});
	};
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
				const key = i.path[0];
				if (key && !next[key]) next[key] = i.message;
			});
			setErrors(next);
			toast.error("Please review the highlighted fields in the form");
			return;
		}
		setErrors({});
		setIsSubmitting(true);
		const values = parsed.data;
		const msg = `*New Inquiry via Website*\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Details:* ${values.detail}${values.message ? `\n*Message:* ${values.message}` : ""}`;
		const encoded = encodeURIComponent(msg);
		const waNumber = contactInfo.whatsapp.replace(/[^0-9]/g, "");
		const refCode = `ARR-${Math.floor(1e5 + Math.random() * 9e5)}`;
		trackInquirySubmitted({
			service: title || "Travel Consultation",
			name: values.name,
			ref: refCode,
			source: "BookingForm"
		});
		trackWhatsAppContact({
			context: "BookingForm",
			service: title || "Travel Consultation"
		});
		toast.success("Opening WhatsApp with your inquiry details...");
		setTimeout(() => {
			window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
			setIsSubmitting(false);
			navigate({
				to: "/thank-you",
				search: {
					name: values.name,
					service: title || "Travel Inquiry",
					ref: refCode
				}
			});
		}, 450);
	}
	const renderFieldError = (name) => {
		if (!errors[name]) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			id: `${name}-error`,
			role: "alert",
			className: "mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1 duration-200",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errors[name] })]
		});
	};
	const errorCount = Object.keys(errors).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-2xl border border-border bg-card/70 p-6 sm:p-8 transition-all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-semibold",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: description
			}) : null,
			errorCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "alert",
				className: "mt-4 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive flex items-center gap-2.5 animate-in fade-in duration-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Please check the highlighted fields below (",
					errorCount,
					" ",
					errorCount === 1 ? "field requires" : "fields require",
					" attention)."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "name",
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive font-bold",
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							maxLength: 100,
							onChange: () => clearFieldError("name"),
							"aria-invalid": Boolean(errors.name),
							"aria-describedby": errors.name ? "name-error" : void 0,
							className: cn("mt-1.5 transition-colors", errors.name && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground"),
							placeholder: "Your name"
						}),
						renderFieldError("name")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "email",
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive font-bold",
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "email",
							name: "email",
							type: "email",
							maxLength: 255,
							onChange: () => clearFieldError("email"),
							"aria-invalid": Boolean(errors.email),
							"aria-describedby": errors.email ? "email-error" : void 0,
							className: cn("mt-1.5 transition-colors", errors.email && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground"),
							placeholder: "you@example.com"
						}),
						renderFieldError("email")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "phone",
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone / WhatsApp" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive font-bold",
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							maxLength: 20,
							onChange: () => clearFieldError("phone"),
							"aria-invalid": Boolean(errors.phone),
							"aria-describedby": errors.phone ? "phone-error" : void 0,
							className: cn("mt-1.5 transition-colors", errors.phone && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground"),
							placeholder: "+92 300 0000000"
						}),
						renderFieldError("phone")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "detail",
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: detailLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive font-bold",
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "detail",
							name: "detail",
							maxLength: 120,
							defaultValue: defaultDetail,
							onChange: () => clearFieldError("detail"),
							"aria-invalid": Boolean(errors.detail),
							"aria-describedby": errors.detail ? "detail-error" : void 0,
							className: cn("mt-1.5 transition-colors", errors.detail && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground"),
							placeholder: detailPlaceholder
						}),
						renderFieldError("detail")
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
								onChange: () => clearFieldError("message"),
								"aria-invalid": Boolean(errors.message),
								"aria-describedby": errors.message ? "message-error" : void 0,
								className: cn("mt-1.5 transition-colors", errors.message && "border-destructive focus-visible:ring-destructive/40 bg-destructive/5 text-foreground"),
								placeholder: "Travel dates, number of travellers, budget, any specific requirement"
							}),
							renderFieldError("message")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				disabled: isSubmitting,
				className: "mt-6 w-full sm:w-auto font-semibold shadow-md royal-surface",
				children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Connecting to WhatsApp..."] }) : submitLabel
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
