import { useState, useEffect } from "react";

// Get a specific breakpoint value in pixels
export const getBreakpointValue = (breakpoint: string): number => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };
  return breakpoints[breakpoint as keyof typeof breakpoints] || 768;
};

// Create a fluidly scaled CSS value using clamp()
export const fluidScale = (
  minFontSize: number,
  maxFontSize: number,
  minScreen: number,
  maxScreen: number
): string => {
  return `clamp(${minFontSize}rem, calc(${minFontSize}rem + (${maxFontSize} - ${minFontSize}) * ((100vw - ${minScreen}rem) / (${maxScreen} - ${minScreen}))), ${maxFontSize}rem)`;
};

// Create responsive text using fluid scaling between breakpoints
export const responsiveText = (min: number, max: number): string => {
  return fluidScale(
    min,
    max,
    getBreakpointValue("sm") / 16,
    getBreakpointValue("lg") / 16
  );
};

// Hook to check if the current screen size is at or above a breakpoint
export const useResponsive = (
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"
) => {
  const [isAtBreakpoint, setIsAtBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const breakpointValue = getBreakpointValue(breakpoint);
      setIsAtBreakpoint(window.innerWidth >= breakpointValue);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isAtBreakpoint;
};
