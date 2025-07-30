import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/UI";
import { AnimatedGroup } from "@/components/ui/animated-group";

interface TemplatePreviewCardProps {
  title: string;
  children: React.ReactNode;
  isPopular?: boolean;
}

const TemplatePreviewCard: React.FC<TemplatePreviewCardProps> = ({
  title,
  children,
  isPopular = false,
}) => (
  <motion.div
    whileHover={{
      scale: 1.03,
      boxShadow:
        "0px 0px 30px rgba(59, 130, 246, 0.4), 0px 0px 60px rgba(59, 130, 246, 0.2)",
    }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative"
  >
    {isPopular && (
      <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        Popular
      </span>
    )}
    <Card className="p-2 bg-primary/30 backdrop-blur-sm shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300">
      <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-white shadow-lg">
        {children}
      </div>
      <p className="text-center font-semibold mt-3 text-dark">{title}</p>
    </Card>
  </motion.div>
);

interface TemplateShowcaseProps {
  content: {
    title: string;
    items: {
      title: string;
      isPopular: boolean;
      content: string;
    }[];
  };
}

export function TemplateShowcase({ content }: TemplateShowcaseProps) {
  const renderTemplateContent = (templateContent: string) => {
    // This is a simplified example. In a real application, you might use a more robust way to render HTML strings or components dynamically.
    if (templateContent === "modern_template_preview_html") {
      return (
        <div className="flex h-full">
          <div className="w-1/3 bg-gray-200 p-2">
            <div className="bg-gray-400 rounded-full h-4 w-4 mx-auto mb-2"></div>
            <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
            <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-2"></div>
            <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
            <div className="h-1 w-1/2 bg-gray-400 rounded-full"></div>
          </div>
          <div className="w-2/3 p-2">
            <div className="h-2 w-1/2 bg-gray-500 rounded-full mb-2"></div>
            <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
            <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
            <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-3"></div>
            <div className="h-2 w-1/2 bg-gray-500 rounded-full mb-2"></div>
            <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
            <div className="h-1 w-5/6 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      );
    } else if (templateContent === "classic_template_preview_html") {
      return (
        <div className="p-2 h-full">
          <div className="bg-gray-400 rounded-full h-4 w-4 mx-auto mb-2"></div>
          <div className="h-1 w-1/2 bg-gray-400 rounded-full mx-auto mb-2"></div>
          <div className="h-2 w-1/3 bg-gray-500 rounded-full mt-4 mb-2"></div>
          <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
          <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
          <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-3"></div>
          <div className="h-2 w-1/3 bg-gray-500 rounded-full mt-4 mb-2"></div>
          <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
          <div className="h-1 w-5/6 bg-gray-400 rounded-full"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-dark mb-8">
        {content.title}
      </h2>
      <AnimatedGroup
        staggerChildren={0.1}
        delayChildren={0.2}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {content.items.map((template, index) => (
          <TemplatePreviewCard
            key={index}
            title={template.title}
            isPopular={template.isPopular}
          >
            {renderTemplateContent(template.content)}
          </TemplatePreviewCard>
        ))}
      </AnimatedGroup>
    </section>
  );
}
