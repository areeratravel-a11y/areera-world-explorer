import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Component that initializes GA4 analytics and automatically tracks
 * discrete SPA pageviews whenever TanStack Router navigates.
 */
export function AnalyticsTracker() {
  const location = useLocation();

  // Initialize GA4 script on client mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track discrete pageviews on route change
  useEffect(() => {
    // Defer slightly to let TanStack Router update document.title
    const timer = setTimeout(() => {
      const fullPath = location.pathname + (location.searchStr || "");
      trackPageView(fullPath, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.searchStr]);

  return null;
}
