import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// After a new deploy the old hashed route chunks are gone, so a stale tab
// blank-screens on the next lazy import. Reload once to pick up the new build.
if (typeof window !== "undefined") {
  const reloadOnce = () => {
    const KEY = "chunk-reload";
    if (sessionStorage.getItem(KEY)) return;
    sessionStorage.setItem(KEY, "1");
    window.location.reload();
  };
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    reloadOnce();
  });
  window.addEventListener("unhandledrejection", (event) => {
    const message = String((event.reason as Error | undefined)?.message ?? "");
    if (message.includes("Failed to fetch dynamically imported module")) reloadOnce();
  });
  // Clear the guard only after the page has been stable for a while, so a
  // genuinely broken build can't loop.
  window.setTimeout(() => sessionStorage.removeItem("chunk-reload"), 10_000);
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
