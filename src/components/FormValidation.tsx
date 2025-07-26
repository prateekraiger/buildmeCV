import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExclamationTriangleIcon, CheckCircleIcon } from "./Icons";

interface ValidationMessageProps {
  type: "error" | "success" | "warning";
  message: string;
  show: boolean;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  type,
  message,
  show,
}) => {
  const icons = {
    error: ExclamationTriangleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
  };

  const styles = {
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`flex items-center gap-2 text-sm mt-1 ${styles[type]}`}
        >
          <Icon className="w-4 h-4 flex-shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ValidatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: string;
  warning?: string;
  required?: boolean;
  helpText?: string;
}

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
  label,
  error,
  success,
  warning,
  required,
  helpText,
  className = "",
  ...props
}) => {
  const hasError = !!error;
  const hasSuccess = !!success;
  const hasWarning = !!warning;

  const inputClasses = `
    w-full bg-primary border rounded-md shadow-sm px-3 py-2
    focus:outline-none focus:ring-2 transition-colors
    ${
      hasError
        ? "border-red-500 text-red-400 focus:ring-red-500 focus:border-red-500"
        : hasSuccess
        ? "border-green-500 text-text-light focus:ring-green-500 focus:border-green-500"
        : hasWarning
        ? "border-yellow-500 text-text-light focus:ring-yellow-500 focus:border-yellow-500"
        : "border-secondary/30 text-text-light focus:ring-accent focus:border-accent"
    }
    ${className}
  `;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-secondary">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      <input {...props} className={inputClasses} />

      {helpText && !error && !success && !warning && (
        <p className="text-xs text-secondary/70">{helpText}</p>
      )}

      <ValidationMessage type="error" message={error || ""} show={hasError} />
      <ValidationMessage
        type="success"
        message={success || ""}
        show={hasSuccess}
      />
      <ValidationMessage
        type="warning"
        message={warning || ""}
        show={hasWarning}
      />
    </div>
  );
};

interface ValidatedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  success?: string;
  warning?: string;
  required?: boolean;
  helpText?: string;
}

export const ValidatedTextarea: React.FC<ValidatedTextareaProps> = ({
  label,
  error,
  success,
  warning,
  required,
  helpText,
  className = "",
  ...props
}) => {
  const hasError = !!error;
  const hasSuccess = !!success;
  const hasWarning = !!warning;

  const textareaClasses = `
    w-full bg-primary border rounded-md shadow-sm px-3 py-2
    focus:outline-none focus:ring-2 transition-colors resize-vertical
    ${
      hasError
        ? "border-red-500 text-red-400 focus:ring-red-500 focus:border-red-500"
        : hasSuccess
        ? "border-green-500 text-text-light focus:ring-green-500 focus:border-green-500"
        : hasWarning
        ? "border-yellow-500 text-text-light focus:ring-yellow-500 focus:border-yellow-500"
        : "border-secondary/30 text-text-light focus:ring-accent focus:border-accent"
    }
    ${className}
  `;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-secondary">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>

      <textarea {...props} className={textareaClasses} rows={4} />

      {helpText && !error && !success && !warning && (
        <p className="text-xs text-secondary/70">{helpText}</p>
      )}

      <ValidationMessage type="error" message={error || ""} show={hasError} />
      <ValidationMessage
        type="success"
        message={success || ""}
        show={hasSuccess}
      />
      <ValidationMessage
        type="warning"
        message={warning || ""}
        show={hasWarning}
      />
    </div>
  );
};
