import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-base sm:text-lg font-medium text-dark mb-2"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full bg-white border-2 border-primary text-dark rounded-lg shadow-sm px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
    />
  </div>
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="block text-base sm:text-lg font-medium text-dark mb-2"
    >
      {label}
    </label>
    <textarea
      id={id}
      {...props}
      className="w-full bg-white border-2 border-primary text-dark rounded-lg shadow-sm px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 resize-none"
      rows={5}
    />
  </div>
);

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 min-h-[48px] sm:min-h-[56px]";

  const variantClasses = {
    primary:
      "bg-accent text-dark hover:bg-accentDark focus:ring-accent transform hover:scale-105 active:scale-95",
    secondary:
      "bg-primary text-dark hover:bg-secondary focus:ring-secondary border-2 border-primary/30 transform hover:scale-105 active:scale-95",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 transform hover:scale-105 active:scale-95",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${
        props.className || ""
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div
    className={`bg-white border-2 border-primary/20 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:shadow-2xl hover:border-primary/30 ${className}`}
  >
    {children}
  </div>
);

interface ProgressProps {
  value: number;
}
export const Progress: React.FC<ProgressProps> = ({ value }) => {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-lg sm:text-xl font-semibold text-dark">
          Profile Completion
        </span>
        <span className="text-lg sm:text-xl font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
          {safeValue}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 sm:h-5 border-2 border-primary/20 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${safeValue}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-gradient-to-r from-accent to-accentDark h-full rounded-full shadow-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
      <div className="text-sm font-medium text-black text-center progress-text">
        {safeValue < 30 && "Just getting started! 🚀"}
        {safeValue >= 30 && safeValue < 70 && "Making great progress! 💪"}
        {safeValue >= 70 && safeValue < 100 && "Almost there! 🎯"}
        {safeValue === 100 && "Perfect! Ready to download! ✨"}
      </div>
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
}) => {
  const variants = {
    default: "bg-secondary/20 text-secondary",
    success: "bg-green-500/20 text-green-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    error: "bg-red-500/20 text-red-400",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positions = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 px-2 py-1 text-xs text-foreground bg-primary border border-secondary/20 rounded shadow-lg whitespace-nowrap ${positions[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
