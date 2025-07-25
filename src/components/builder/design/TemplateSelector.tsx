import React from "react";
import useResumeStore from "../../../store/resumeStore";

import { RectangleGroupIcon } from "../../Icons";

const TemplateCard: React.FC<{
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ title, isActive, onClick, children }) => {
  const activeClasses = "border-accent ring-2 ring-accent";
  const inactiveClasses = "border-secondary/30 hover:border-secondary";
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`w-full p-1.5 border-2 rounded-lg transition-all ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        <div className="aspect-[8.5/11] w-full bg-background-light rounded overflow-hidden">
          {children}
        </div>
      </button>
      <p className="text-center text-sm font-semibold mt-2 text-secondary">
        {title}
      </p>
    </div>
  );
};

export const TemplateSelector: React.FC = () => {
  const { resume, setTemplate } = useResumeStore();
  const currentTemplate = resume.template;

  return (
    <div>
      <h4 className="text-md font-semibold text-secondary mb-2 flex items-center gap-2">
        <RectangleGroupIcon className="w-5 h-5" /> Template
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <TemplateCard
          title="Modern"
          isActive={currentTemplate === "modern"}
          onClick={() => setTemplate("modern")}
        >
          <div className="flex h-full p-1 gap-1">
            <div className="w-1/3 bg-gray-300 rounded-sm p-1 space-y-1">
              <div className="h-1 w-full bg-accent/50 rounded-full"></div>
              <div className="h-1 w-3/4 bg-accent/50 rounded-full"></div>
            </div>
            <div className="w-2/3 bg-gray-200/50 rounded-sm p-1 space-y-1">
              <div className="h-1 w-1/2 bg-accent/50 rounded-full"></div>
              <div className="h-1 w-full bg-accent/50 rounded-full"></div>
              <div className="h-1 w-5/6 bg-accent/50 rounded-full"></div>
            </div>
          </div>
        </TemplateCard>
        <TemplateCard
          title="Classic"
          isActive={currentTemplate === "classic"}
          onClick={() => setTemplate("classic")}
        >
          <div className="h-full p-1 space-y-1">
            <div className="h-1 w-1/2 bg-accent/50 rounded-full mx-auto"></div>
            <div className="h-1 w-1/4 bg-accent/50 rounded-full mx-auto mb-2"></div>
            <div className="h-1 w-1/3 bg-accent/80 rounded-full"></div>
            <div className="h-1 w-full bg-accent/50 rounded-full"></div>
            <div className="h-1 w-5/6 bg-accent/50 rounded-full"></div>
          </div>
        </TemplateCard>
      </div>
    </div>
  );
};
