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
      className="w-full h-full bg-white shadow-2xl rounded-2xl overflow-hidden text-sm transition-all duration-300 border border-primary/20 relative"
      style={{ "--accent-color": accentColor } as React.CSSProperties}
    >
      {/* Preview container with bigger scaling */}
      <div className="w-full h-full overflow-hidden relative">
        <div className="absolute inset-0 flex items-start justify-center p-2">
          <div className="w-full max-w-full transform scale-85 sm:scale-95 lg:scale-100 xl:scale-105 origin-top">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <PreviewComponent resume={resume} />
            </div>
          </div>
        </div>
      </div>

      {/* Preview badge - more visible */}
      <div className="absolute top-4 right-4 bg-accent/20 text-black px-3 py-1 rounded-full text-xs font-bold border border-accent/30 shadow-sm">
        Preview
      </div>
    </div>
  );
};
