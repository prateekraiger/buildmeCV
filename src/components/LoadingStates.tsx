import React from "react";
import { motion } from "framer-motion";
import { LoadingSpinner } from "./Icons";

// Skeleton loader for text
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 1,
  className = "",
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-secondary/20 rounded animate-pulse ${
          i === lines - 1 ? "w-3/4" : "w-full"
        }`}
      />
    ))}
  </div>
);

// Skeleton loader for forms
export const SkeletonForm: React.FC = () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <div className="h-4 w-20 bg-secondary/20 rounded animate-pulse" />
      <div className="h-10 w-full bg-secondary/20 rounded animate-pulse" />
    </div>
    <div className="space-y-2">
      <div className="h-4 w-24 bg-secondary/20 rounded animate-pulse" />
      <div className="h-10 w-full bg-secondary/20 rounded animate-pulse" />
    </div>
    <div className="space-y-2">
      <div className="h-4 w-16 bg-secondary/20 rounded animate-pulse" />
      <div className="h-20 w-full bg-secondary/20 rounded animate-pulse" />
    </div>
  </div>
);

// Loading overlay
export const LoadingOverlay: React.FC<{ message?: string }> = ({
  message = "Loading...",
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-10"
  >
    <div className="text-center">
      <LoadingSpinner className="w-8 h-8 text-accent mx-auto mb-2" />
      <p className="text-secondary text-sm">{message}</p>
    </div>
  </motion.div>
);

// Button loading state
export const LoadingButton: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ isLoading, children, className = "", onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled || isLoading}
    className={`relative inline-flex items-center justify-center gap-2 ${className} ${
      isLoading ? "cursor-not-allowed opacity-75" : ""
    }`}
  >
    {isLoading && (
      <LoadingSpinner className="w-4 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    )}
    <span className={isLoading ? "opacity-0" : "opacity-100"}>{children}</span>
  </button>
);

// Progress bar with animation
export const AnimatedProgress: React.FC<{
  value: number;
  label?: string;
  showPercentage?: boolean;
}> = ({ value, label, showPercentage = true }) => {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-secondary">{label}</span>
          )}
          {showPercentage && (
            <span className="text-sm text-text-light">{safeValue}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-primary rounded-full h-2 border border-secondary/20 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${safeValue}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full"
        />
      </div>
    </div>
  );
};

// Pulse animation for loading states
export const PulseLoader: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div className={`flex space-x-1 ${className}`}>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-accent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);
