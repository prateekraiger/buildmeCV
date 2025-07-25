import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "./Icons";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeLinkClass = "bg-accent text-text-light";
  const inactiveLinkClass =
    "text-secondary hover:bg-secondary/20 hover:text-text-light";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-primary/80 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-text-light"
              onClick={closeMobileMenu}
            >
              BuildMe<span className="text-accent">CV</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? activeLinkClass : inactiveLinkClass
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/builder"
                className={({ isActive }) =>
                  `${
                    isActive ? activeLinkClass : inactiveLinkClass
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`
                }
              >
                Builder
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-secondary hover:text-text-light hover:bg-secondary/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-secondary/20">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? activeLinkClass : inactiveLinkClass
                      } block px-3 py-2 rounded-md text-base font-medium transition-colors`
                    }
                    onClick={closeMobileMenu}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/builder"
                    className={({ isActive }) =>
                      `${
                        isActive ? activeLinkClass : inactiveLinkClass
                      } block px-3 py-2 rounded-md text-base font-medium transition-colors`
                    }
                    onClick={closeMobileMenu}
                  >
                    Builder
                  </NavLink>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-primary border-t border-secondary/20 mt-auto">
    <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-secondary text-sm">
      &copy; {new Date().getFullYear()} BuildMeCV. All Rights Reserved.
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative text-gray-900">
      {/* Grid background for the whole site */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
