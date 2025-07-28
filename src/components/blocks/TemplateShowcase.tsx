import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/UI";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";

interface TemplatePreviewCardProps {
  title: string;
  children: React.ReactNode;
  isPopular?: boolean;
  onPreview: () => void;
}

const TemplatePreviewCard: React.FC<TemplatePreviewCardProps> = ({
  title,
  children,
  isPopular = false,
  onPreview,
}) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative cursor-pointer"
    onClick={onPreview}
  >
    {isPopular && (
      <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        Popular
      </span>
    )}
    <Card className="p-2 bg-primary/30 backdrop-blur-sm">
      <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-white shadow-lg">
        {children}
      </div>
      <p className="text-center font-semibold mt-3 text-dark">{title}</p>
    </Card>
  </motion.div>
);

const TemplatePreviewModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="xl">
      <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-white shadow-lg">
        {children}
      </div>
      <div className="mt-4 text-center">
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  const openPreview = (title: string, content: React.ReactNode) => {
    setSelectedTemplate({ title, content });
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedTemplate(null);
  };

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
            onPreview={() =>
              openPreview(
                template.title,
                renderTemplateContent(template.content)
              )
            }
          >
            {renderTemplateContent(template.content)}
          </TemplatePreviewCard>
        ))}
      </AnimatedGroup>
      {selectedTemplate && (
        <TemplatePreviewModal
          isOpen={isPreviewOpen}
          onClose={closePreview}
          title={selectedTemplate.title}
          aria-label={`Template preview for ${selectedTemplate.title}`}
        >
          {selectedTemplate.content}
        </TemplatePreviewModal>
      )}
    </section>
  );
}
