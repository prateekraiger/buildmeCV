import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSecurityContext } from "./SecurityProvider";

const menuItems = [
  { name: "Home", to: "/", ariaLabel: "Go to home page" },
  { name: "Builder", to: "/builder", ariaLabel: "Go to resume builder" },
  { name: "About", to: "/about", ariaLabel: "Learn about us" },
  { name: "Contact", to: "/contact", ariaLabel: "Contact us" },
];

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const { isSecureConnection } = useSecurityContext();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuState) {
        setMenuState(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuState]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMenuState(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuState]);

  return (
    <header role="banner">
      <nav
        data-state={menuState && "active"}
        className="fixed z-50 w-full group"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Security indicator */}
        {!isSecureConnection && process.env.NODE_ENV === "production" && (
          <div className="bg-red-600 text-white text-center py-1 text-sm">
            <Shield className="inline w-4 h-4 mr-1" />
            Insecure connection detected
          </div>
        )}

        <div
          className={cn(
            "mx-auto max-w-6xl transition-all duration-300 px-4 sm:px-6",
            isScrolled &&
              "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5 mt-2"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to="/"
                aria-label="buildmeCV - Go to home page"
                className="flex items-center focus-ring rounded-lg p-1 -m-1"
              >
                <Logo />
                <span className="font-bold text-xl tracking-tight text-primary ml-2">
                  buildmeCV
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={
                  menuState ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuState}
                aria-controls="mobile-menu"
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden focus-ring rounded-md"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm" role="menubar">
                {menuItems.map((item, index) => (
                  <li key={index} role="none">
                    <Link
                      to={item.to}
                      role="menuitem"
                      aria-label={item.ariaLabel}
                      className={cn(
                        "text-muted-foreground hover:text-accent-foreground block duration-150 focus-ring rounded-md px-3 py-2",
                        location.pathname === item.to &&
                          "text-primary font-medium"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu & CTA */}
            <div
              id="mobile-menu"
              className={cn(
                "bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                menuState &&
                  "fixed inset-0 top-20 bg-background/95 backdrop-blur-lg lg:relative lg:inset-auto lg:top-auto lg:bg-transparent lg:backdrop-blur-none"
              )}
              aria-hidden={!menuState}
            >
              {/* Mobile Navigation */}
              <div className="lg:hidden w-full">
                <ul className="space-y-6 text-base" role="menu">
                  {menuItems.map((item, index) => (
                    <li key={index} role="none">
                      <Link
                        to={item.to}
                        role="menuitem"
                        aria-label={item.ariaLabel}
                        className={cn(
                          "text-muted-foreground hover:text-accent-foreground block duration-150 focus-ring rounded-md px-3 py-2 text-lg",
                          location.pathname === item.to &&
                            "text-primary font-medium"
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Link to="/builder" aria-label="Start building your resume">
                  <button className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors focus-ring">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuState && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuState(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo.png"
      alt="buildmeCV Logo"
      className={cn("h-10 w-auto", className)}
    />
  );
};

export default Navbar;
