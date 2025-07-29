import React, { useEffect } from "react";
import { Github, Twitter } from "lucide-react";
import Navbar from "./Navbar";
import { Footer } from "./ui/footer";
// Security headers will be handled by the SecurityProvider

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Apply basic security meta tags on mount
  useEffect(() => {
    // Add security meta tags (only those that can be set via meta tags)
    const securityMetas = [
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "robots", content: "index, follow" },
    ];

    securityMetas.forEach(({ name, content }) => {
      const selector = `meta[name="${name}"]`;
      if (!document.querySelector(selector)) {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative text-gray-900 antialiased">
      {/* Enhanced grid background with better performance */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30" />
      </div>

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="flex-grow w-full max-w-none p-0 focus:outline-none"
        tabIndex={-1}
        role="main"
      >
        {children}
      </main>

      <Footer
        logo={
          <img
            src="/logo.png"
            alt="buildmeCV logo"
            className="h-10 w-10 transition-transform hover:scale-105"
            loading="lazy"
          />
        }
        brandName="buildmeCV"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Follow us on Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "View our GitHub",
          },
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
          { href: "/builder", label: "Resume Builder" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Service" },
        ]}
        copyright={{
          text: `© ${new Date().getFullYear()} buildmeCV`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
};
