import React from "react";
import { Document } from "@react-pdf/renderer";
import type { ResumeData } from "../../types";
import { ModernTemplatePdf } from "./templates/ModernTemplatePdf";
import { ClassicTemplatePdf } from "./templates/ClassicTemplatePdf";

export const ResumePdfDocument: React.FC<{ resume: ResumeData }> = ({
  resume,
}) => {
  // Sanitize resume data to prevent PDF rendering errors
  const sanitizedResume: ResumeData = {
    ...resume,
    personal: {
      ...resume.personal,
      name: resume.personal.name || "Your Name",
      title: resume.personal.title || "Your Title",
      email: resume.personal.email || "your.email@example.com",
      phone: resume.personal.phone || "Your Phone",
      location: resume.personal.location || "Your Location",
      linkedin: resume.personal.linkedin || "",
      website: resume.personal.website || "",
      portfolioSection: resume.personal.portfolioSection || { url: "" },
      githubSection: resume.personal.githubSection || { url: "" },
    },
    summary: resume.summary || "",
    experience: resume.experience.map((exp) => ({
      ...exp,
      description: Array.isArray(exp.description)
        ? exp.description
        : [exp.description || ""],
    })),
    projects: resume.projects.map((proj) => ({
      ...proj,
      description: Array.isArray(proj.description)
        ? proj.description
        : [proj.description || ""],
    })),
    accentColor: resume.accentColor || "#000000",
  };

  const PdfTemplate =
    sanitizedResume.template === "classic"
      ? ClassicTemplatePdf
      : ModernTemplatePdf;

  return (
    <Document
      title={`${sanitizedResume.personal.name} - Resume`}
      author={sanitizedResume.personal.name}
      creator="BuildMeCV"
      producer="BuildMeCV Resume Builder"
    >
      <PdfTemplate resume={sanitizedResume} />
    </Document>
  );
};
