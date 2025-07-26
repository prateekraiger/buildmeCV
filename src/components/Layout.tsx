import React from "react";

import { Github, Twitter } from "lucide-react";

import Navbar from "./Navbar";
import { Footer } from "./ui/footer";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative text-gray-900">
      {/* Grid background for the whole site */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <Navbar />
      <main className="flex-grow w-full max-w-none p-0">{children}</main>
      <Footer
        logo={
          <img src="/logo.png" alt="buildmeCV logo" className="h-10 w-10" />
        }
        brandName="buildmeCV"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[]}
        copyright={{
          text: `© ${new Date().getFullYear()} buildmeCV`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
};
