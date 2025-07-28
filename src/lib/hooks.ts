import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
};

interface MetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  ogUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const useMetaTags = (tags: MetaTags) => {
  useEffect(() => {
    const defaultTitle =
      "BuildMeCV: AI-Powered Professional Resume Builder | Create Your Standout Resume";
    const defaultDescription =
      "BuildMeCV is your AI-powered resume builder. Create beautiful, professional resumes in minutes and showcase your skills to land your dream job.";
    const defaultKeywords =
      "resume builder, AI resume, professional resume, online resume, free resume builder, job application, career, resume templates";
    const defaultOgUrl = "https://www.buildmecv.com/";
    const defaultOgImage = "https://www.buildmecv.com/logo.png";

    document.title = tags.title || defaultTitle;

    const updateMeta = (name: string, content: string, property?: string) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!element && property) {
        element = document.querySelector(
          `meta[property="${property}"]`
        ) as HTMLMetaElement;
      }
      if (!element) {
        element = document.createElement("meta");
        if (name) element.name = name;
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    updateMeta("description", tags.description || defaultDescription);
    updateMeta("keywords", tags.keywords || defaultKeywords);

    // Open Graph
    updateMeta("", tags.ogUrl || defaultOgUrl, "og:url");
    updateMeta("", tags.ogTitle || tags.title || defaultTitle, "og:title");
    updateMeta(
      "",
      tags.ogDescription || tags.description || defaultDescription,
      "og:description"
    );
    updateMeta("", tags.ogImage || defaultOgImage, "og:image");
    updateMeta("", "website", "og:type");

    // Twitter
    updateMeta("", tags.twitterCard || "summary_large_image", "twitter:card");
    updateMeta(
      "",
      tags.twitterUrl || tags.ogUrl || defaultOgUrl,
      "twitter:url"
    );
    updateMeta(
      "",
      tags.twitterTitle || tags.ogTitle || tags.title || defaultTitle,
      "twitter:title"
    );
    updateMeta(
      "",
      tags.twitterDescription ||
        tags.ogDescription ||
        tags.description ||
        defaultDescription,
      "twitter:description"
    );
    updateMeta(
      "",
      tags.twitterImage || tags.ogImage || defaultOgImage,
      "twitter:image"
    );
  }, [tags]);
};
