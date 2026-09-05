/**
 * Analytics Utility for Areera Travel and Tours
 * Supports Google Analytics 4 (GA4) via VITE_GA_MEASUREMENT_ID with SPA page-tracking,
 * diagnostic console logging in development, and zero-dependency fallback.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getMeasurementId(): string | undefined {
  const envObj = (import.meta as unknown as { env: Record<string, string | undefined> }).env;
  const envId = envObj ? envObj["VITE_GA_MEASUREMENT_ID"] : undefined;
  return envId && envId.trim() !== "" ? envId.trim() : undefined;
}

let isInitialized = false;

/**
 * Initializes GA4 script tag and window.gtag if a Measurement ID is configured.
 * Configures send_page_view: false so client-side SPA navigation routes trigger discrete pageviews.
 */
export function initAnalytics(): void {
  if (typeof window === "undefined" || isInitialized) return;

  const measurementId = getMeasurementId();

  // Initialize dataLayer regardless so custom events can queue gracefully
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  if (measurementId) {
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      window.gtag("js", new Date());
      window.gtag("config", measurementId, {
        send_page_view: false, // Handled dynamically on route changes
      });
    }
  }

  isInitialized = true;
}

/**
 * Track a pageview on route change
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === "undefined") return;

  const pageTitle = title || document.title;
  const measurementId = getMeasurementId();

  if (measurementId && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: pageTitle,
      page_location: window.location.href,
    });
  }

  if (import.meta.env.DEV) {
    // Helpful diagnostic log in development
    console.debug(`[Analytics] 📄 PageView: ${url} ("${pageTitle}")`);
  }
}

/**
 * Send a custom event with optional parameters
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  const measurementId = getMeasurementId();

  if (measurementId && window.gtag) {
    window.gtag("event", eventName, params);
  }

  if (import.meta.env.DEV) {
    console.debug(`[Analytics] 🎯 Event "${eventName}":`, params);
  }
}

/**
 * Standardized Conversion Tracking Helpers
 */

/**
 * Track when an inquiry or booking form is successfully submitted (Lead generation)
 */
export function trackInquirySubmitted(data: {
  service: string;
  name?: string | undefined;
  ref?: string | undefined;
  source?: string | undefined;
}): void {
  trackEvent("generate_lead", {
    event_category: "Conversion",
    event_label: data.service,
    service_type: data.service,
    inquiry_ref: data.ref || "ARR-ONLINE",
    lead_source: data.source || "Website Form",
    value: 1,
    currency: "PKR",
  });
}

/**
 * Track when a user clicks a WhatsApp consultation link
 */
export function trackWhatsAppContact(data: {
  context: string;
  service?: string | undefined;
  country?: string | undefined;
}): void {
  trackEvent("contact", {
    method: "WhatsApp",
    event_category: "Engagement",
    event_label: data.context,
    service: data.service,
    country: data.country,
  });
}

/**
 * Track when a user clicks to call the office phone
 */
export function trackPhoneContact(data: {
  number: string;
  location?: string | undefined;
}): void {
  trackEvent("contact", {
    method: "Phone",
    event_category: "Engagement",
    event_label: data.location || "Header / Footer Hotline",
    phone_number: data.number,
  });
}

/**
 * Track country guide interactions
 */
export function trackDestinationView(data: {
  country: string;
  slug: string;
  region?: string | undefined;
}): void {
  trackEvent("view_item", {
    item_id: data.slug,
    item_name: data.country,
    item_category: data.region || "Destination Guide",
  });
}
