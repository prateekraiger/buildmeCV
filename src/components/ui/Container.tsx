import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  as?: keyof JSX.IntrinsicElements;
}

const sizeClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

const paddingClasses = {
  none: "",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12",
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "lg",
  padding = "md",
  as: Component = "div",
}) => {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

// Specialized containers for common use cases
export const PageContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <Container size="xl" padding="lg" className={cn("py-8 lg:py-12", className)}>
    {children}
  </Container>
);

export const SectionContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <Container size="lg" padding="md" className={cn("py-6 lg:py-8", className)}>
    {children}
  </Container>
);

export const ContentContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <Container size="md" padding="sm" className={cn("py-4 lg:py-6", className)}>
    {children}
  </Container>
);
