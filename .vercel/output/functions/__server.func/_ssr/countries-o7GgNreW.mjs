import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as LoaderCircle, g as RefreshCw, n as WifiOff } from "../_libs/lucide-react.mjs";
import { t as CountriesSkeleton } from "./router-DdKel0Wx.mjs";
import { z as Button } from "./router-DdKel0Wx2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/countries-o7GgNreW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Exponential backoff schedule (ms) used when a lazy chunk fails to load. */
var CHUNK_RETRY_DELAYS = [
	400,
	1200,
	3e3
];
var CHUNK_RETRY_LIMIT = CHUNK_RETRY_DELAYS.length;
function chunkRetryDelay(attempt) {
	return CHUNK_RETRY_DELAYS[Math.min(attempt, CHUNK_RETRY_DELAYS.length - 1)] ?? 3e3;
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** Retries an async task with exponential backoff, resolving false if all attempts fail. */
async function retryWithBackoff(task, { retries = CHUNK_RETRY_LIMIT, onAttempt } = {}) {
	for (let attempt = 0; attempt < retries; attempt++) {
		await sleep(chunkRetryDelay(attempt));
		onAttempt?.(attempt + 1);
		try {
			await task();
			return true;
		} catch {}
	}
	return false;
}
function isChunkLoadError(error) {
	const message = String(error?.message ?? "");
	return message.includes("Failed to fetch dynamically imported module") || message.includes("error loading dynamically imported module") || message.includes("Importing a module script failed");
}
/**
* Friendly fallback for route load failures (most often a stale lazy chunk
* after a new deploy). Auto-retries with exponential backoff first, and only
* shows the error UI once every attempt has failed.
*/
function ChunkErrorFallback({ error, reset, title = "We couldn't load this page", retrySkeleton }) {
	const router = useRouter();
	const [retrying, setRetrying] = (0, import_react.useState)(false);
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	const [autoRetrying, setAutoRetrying] = (0, import_react.useState)(isChunkLoadError(error));
	const startedRef = (0, import_react.useRef)(false);
	const chunkError = isChunkLoadError(error);
	(0, import_react.useEffect)(() => {
		console.error(error);
	}, [error]);
	(0, import_react.useEffect)(() => {
		if (!chunkError || startedRef.current) return;
		startedRef.current = true;
		let cancelled = false;
		retryWithBackoff(async () => {
			if (cancelled) return;
			await router.invalidate();
			reset?.();
		}, { onAttempt: (n) => !cancelled && setAttempt(n) }).then(() => {
			if (!cancelled) setAutoRetrying(false);
		});
		return () => {
			cancelled = true;
		};
	}, [
		chunkError,
		reset,
		router
	]);
	const retry = async () => {
		setRetrying(true);
		try {
			await router.invalidate();
			reset?.();
		} finally {
			setRetrying(false);
		}
	};
	if (autoRetrying) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-6xl items-center gap-2 px-4 pt-8 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "h-4 w-4 animate-spin text-primary",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			role: "status",
			"aria-live": "polite",
			children: [
				"Reconnecting… retrying this section (attempt ",
				Math.max(attempt, 1),
				" of",
				" ",
				CHUNK_RETRY_LIMIT,
				")."
			]
		})]
	}), retrySkeleton ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-[40vh]" })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
					className: "h-6 w-6",
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-heading text-2xl font-bold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: chunkError ? "Part of the site was updated while you were browsing, so this section didn't finish loading. Reloading usually fixes it." : "Something went wrong loading this section. Please try again."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: retry,
					disabled: retrying,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						className: `mr-2 h-4 w-4 ${retrying ? "animate-spin" : ""}`,
						"aria-hidden": "true"
					}), "Try again"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => window.location.reload(),
					children: "Reload"
				})]
			})
		]
	});
}
function CountriesError({ error, reset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChunkErrorFallback, {
		error,
		reset,
		title: "We couldn't load destinations",
		retrySkeleton: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountriesSkeleton, {})
	});
}
//#endregion
export { CountriesError as errorComponent };
