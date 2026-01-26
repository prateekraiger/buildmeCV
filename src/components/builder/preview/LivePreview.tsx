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
      className="w-full h-full bg-gray-100/50 rounded-2xl overflow-hidden text-sm transition-all duration-300 border border-primary/10 relative flex items-center justify-center p-4 sm:p-8"
      style={{ "--accent-color": accentColor } as React.CSSProperties}
    >
      {/* Scaled Page Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* The "Page" - Fixed aspect ratio 8.5 : 11 */}
        <div
          className="bg-white shadow-2xl transition-transform origin-center"
          style={{
            width: "8.5in",
            minWidth: "8.5in",
            minHeight: "11in",
            // Scale down to fit the parent container
            transform: "scale(var(--preview-scale, 0.6))",
            transformOrigin: "center top",
          }}
        >
          {/* Page Content */}
          <div className="h-full w-full">
             <PreviewComponent resume={resume} />
          </div>
        </div>
      </div>

      {/* Preview badge */}


      {/* Helper for automatic scaling (simple implementation) */}
      <style>{`
        .preview-container {
          container-type: size;
        }
        @container (max-width: 600px) {
           div[style*="--preview-scale"] { --preview-scale: 0.35; }
        }
        @container (min-width: 601px) and (max-width: 900px) {
           div[style*="--preview-scale"] { --preview-scale: 0.5; }
        }
        @container (min-width: 901px) {
           div[style*="--preview-scale"] { --preview-scale: 0.65; }
        }
        @media (min-width: 1400px) {
           div[style*="--preview-scale"] { --preview-scale: 0.8; }
        }
      `}</style>
    </div>
  );
};
