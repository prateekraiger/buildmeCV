// Motion configuration and utilities for framer-motion

import { Variants, Transition } from "framer-motion";

// Safe animation variants that avoid problematic values
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 30,
  },
};

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -30,
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

// Safe blur animation that avoids negative values
export const safeBlur: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    filter: "blur(0px)",
  },
};

// Stagger animations for lists
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

// Common transitions
export const smoothTransition: Transition = {
  type: "tween",
  duration: 0.3,
  ease: "easeInOut",
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const slowTransition: Transition = {
  type: "tween",
  duration: 0.6,
  ease: "easeInOut",
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: smoothTransition,
  },
};

// Modal/overlay variants
export const modalOverlay: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: smoothTransition,
  },
};

// Utility function to create safe filter animations
export const createSafeFilter = (filterValue: string) => {
  // Ensure blur values are never negative
  if (filterValue.includes("blur(")) {
    const blurMatch = filterValue.match(/blur\((-?\d*\.?\d+)px\)/);
    if (blurMatch && parseFloat(blurMatch[1]) < 0) {
      return filterValue.replace(/blur\(-?\d*\.?\d+px\)/, "blur(0px)");
    }
  }
  return filterValue;
};

// Reduced motion preferences
export const getReducedMotionVariants = (variants: Variants): Variants => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    // Return simplified variants for users who prefer reduced motion
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }

  return variants;
};
