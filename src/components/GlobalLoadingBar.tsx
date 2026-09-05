import { useRouterState } from "@tanstack/react-router";

/**
 * Animated top progress indicator shown during route transitions and chunk loading.
 */
export function GlobalLoadingBar() {
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });

  if (!isNavigating) return null;

  return (
    <div
      role="progressbar"
      aria-label="Loading page"
      className="fixed inset-x-0 top-0 z-[9999] h-1 overflow-hidden bg-primary/20 pointer-events-none"
    >
      <div className="h-full w-full bg-gradient-to-r from-primary via-indigo-400 to-amber-400 animate-[loading-bar_1.5s_infinite_linear]" />
    </div>
  );
}
