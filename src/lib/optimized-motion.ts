import { Variants } from "framer-motion";

// Optimized animation variants for better performance
export const optimizedVariants = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  },

  // Slide animations with will-change optimization
  slideUp: {
    initial: { 
      opacity: 0, 
      y: 30,
      willChange: "transform, opacity"
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smoother animation
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { duration: 0.3 }
    }
  },

  // Scale animations
  scaleIn: {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      willChange: "transform, opacity"
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  },

  // Stagger container
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Hover animations
  hoverScale: {
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25,
      mass: 0.5
    }
  },

  hoverLift: {
    y: -4,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },

  // Press animation
  tapScale: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Performance optimization utilities
export const motionConfig = {
  // Reduce motion for users who prefer it
  reduce: {
    initial: {},
    animate: {},
    transition: { duration: 0.01 }
  },
  
  // GPU acceleration
  accelerated: {
    style: {
      willChange: "transform",
      backfaceVisibility: "hidden" as const,
      perspective: 1000,
    }
  }
};

// Intersection observer settings for viewport-based animations
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "-10% 0px -10% 0px"
};

// Common spring configs
export const springConfigs = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 14 },
  responsive: { type: "spring" as const, stiffness: 300, damping: 25 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 10 },
  stiff: { type: "spring" as const, stiffness: 500, damping: 30 }
};