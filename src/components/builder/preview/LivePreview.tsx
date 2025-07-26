import React from "react";
import useResumeStore from "../../../store/resumeStore";
import { ModernPreview } from "./templates/ModernPreview";
import { ClassicPreview } from "./templates/ClassicPreview";

export const LivePreview: React.FC = () => {
  const { resume } = useResumeStore();
  const { template, accentColor } = resume;

  const PreviewComponent =
    template === "classic" ? ClassicPreview : ModernPreview;

  return (
    <div
      className="w-full aspect-[8.5/11] bg-white/60 backdrop-blur-lg shadow-2xl rounded-2xl overflow-y-auto text-sm text-foreground transition-all duration-300 border border-border"
      style={{ "--accent-color": accentColor } as React.CSSProperties}
    >
      <PreviewComponent resume={resume} />
    </div>
  );
};
