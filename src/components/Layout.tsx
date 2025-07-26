import React from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "./blocks/hero-section-1";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "./Icons";

import Navbar from './Navbar';

const Footer: React.FC = () => (
  <footer className="bg-dark border-t border-secondary/20 mt-auto">
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-primary text-sm">
      &copy; {new Date().getFullYear()} BuildMeCV. All Rights Reserved.
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col relative text-gray-900">
      {/* Grid background for the whole site */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );

};
