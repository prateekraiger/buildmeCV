import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define the structure for analytics event parameters
interface EventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

// Initialize the analytics provider (e.g., Google Analytics)
export const initAnalytics = (trackingId: string) => {
  if (process.env.NODE_ENV === "production" && trackingId) {
    // Add your analytics provider script here
    // Example for Google Analytics:
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", trackingId);
  }
};

// Track a page view
export const trackPageView = (path: string) => {
  if (process.env.NODE_ENV === "production") {
    // @ts-expect-error: gtag is available on the window object
    window.gtag("event", "page_view", { page_path: path });
  } else {
    console.log(`[Analytics] Page view: ${path}`);
  }
};

// Track a specific event
export const trackEvent = ({
  category,
  action,
  label,
  value,
  nonInteraction,
}: EventParams) => {
  if (process.env.NODE_ENV === "production") {
    // @ts-expect-error: gtag is available on the window object
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  } else {
    console.log(`[Analytics] Event: ${category} - ${action}`, { label, value });
  }
};

// Hook to automatically track page views on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};
