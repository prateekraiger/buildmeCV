import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-secondary mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full bg-primary border border-secondary/30 text-text-light rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
    />
  </div>
);

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-secondary mb-1"
    >
      {label}
    </label>
    <textarea
      id={id}
      {...props}
      className="w-full bg-primary border border-secondary/30 text-text-light rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
      rows={4}
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
    "px-4 py-2 rounded-lg font-semibold text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary transition-colors duration-150 ease-in-out inline-flex items-center justify-center gap-2 backdrop-blur bg-white/30 border border-gray-200/40";

  const variantClasses = {
    primary: "text-gray-900 bg-accent/80 hover:bg-accent focus:ring-accent",
    secondary:
      "text-gray-900 bg-white/40 border border-secondary/50 hover:bg-secondary/10 focus:ring-accent",
    danger: "text-white bg-red-600/80 hover:bg-red-700 focus:ring-red-600",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
    className={`bg-primary/50 border border-secondary/20 rounded-lg shadow-lg p-4 sm:p-6 ${className}`}
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
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-secondary">
          Profile Completion
        </span>
        <span className="text-sm font-medium text-text-light">
          {safeValue}%
        </span>
      </div>
      <div className="w-full bg-primary rounded-full h-2.5 border border-secondary/20 overflow-hidden">
        <div className="bg-gradient-to-r from-accent to-accent-dark h-2.5 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${safeValue}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              height: "100%",
              background: "inherit",
              borderRadius: "inherit",
            }}
          />
        </div>
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
          className={`absolute z-50 px-2 py-1 text-xs text-text-light bg-primary border border-secondary/20 rounded shadow-lg whitespace-nowrap ${positions[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
