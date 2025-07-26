import React from "react";
import type { ResumeData, SectionKey } from "../../../../types";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  accentColor: string;
}> = ({ title, children, accentColor }) => (
  <div className="mb-4">
    <h3
      className="text-lg font-bold border-b-2 pb-1 mb-2"
      style={{ color: accentColor, borderColor: accentColor }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const MainSectionRenderer: React.FC<{
  sectionKey: SectionKey;
  resume: ResumeData;
  accentColor: string;
}> = ({ sectionKey, resume, accentColor }) => {
  switch (sectionKey) {
    case "experience":
      return (
        resume.experience.length > 0 && (
          <Section title="Experience" accentColor={accentColor}>
            {resume.experience.map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="flex justify-between">
                  <p className="font-bold text-foreground">{exp.role}</p>
                  <p className="text-xs italic text-secondary">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="text-sm" style={{ color: accentColor }}>
                  {exp.company} | {exp.location}
                </p>
                <div className="text-xs mt-1 whitespace-pre-wrap text-foreground/90">
                  {exp.description}
                </div>
              </div>
            ))}
          </Section>
        )
      );
    case "education":
      return (
        resume.education.length > 0 && (
          <Section title="Education" accentColor={accentColor}>
            {resume.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between">
                  <p className="font-bold text-foreground">{edu.degree}</p>
                  <p className="text-xs italic text-secondary">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                <p className="text-sm" style={{ color: accentColor }}>
                  {edu.university} | {edu.location}
                </p>
                {edu.gpa && (
                  <p className="text-xs text-secondary/90">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </Section>
        )
      );
    case "projects":
      return (
        resume.projects.length > 0 && (
          <Section title="Projects" accentColor={accentColor}>
            {resume.projects.map((proj) => (
              <div key={proj.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <p className="font-bold text-foreground">{proj.name}</p>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs"
                    style={{ color: accentColor }}
                  >
                    {proj.url}
                  </a>
                </div>
                <div className="text-xs mt-1 whitespace-pre-wrap text-foreground/90">
                  {proj.description}
                </div>
              </div>
            ))}
          </Section>
        )
      );
    default:
      return null;
  }
};

const SidebarSectionRenderer: React.FC<{
  sectionKey: SectionKey;
  resume: ResumeData;
  accentColor: string;
}> = ({ sectionKey, resume, accentColor }) => {
  switch (sectionKey) {
    case "skills":
      return (
        resume.skills.length > 0 && (
          <Section title="Skills" accentColor={accentColor}>
            <div className="flex flex-wrap gap-1 mt-1">
              {resume.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-accent/20 text-foreground rounded-md px-2 py-0.5 text-xs font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Section>
        )
      );
    case "achievements":
      return (
        resume.achievements.length > 0 && (
          <Section title="Achievements" accentColor={accentColor}>
            <ul className="list-disc list-inside text-xs space-y-1">
              {resume.achievements.map((ach) => (
                <li key={ach.id} className="text-foreground/90">
                  {ach.name}
                </li>
              ))}
            </ul>
          </Section>
        )
      );
    default:
      return null;
  }
};

export const ModernPreview: React.FC<{ resume: ResumeData }> = ({ resume }) => {
  const { personal, summary, sectionOrder, accentColor } = resume;
  const mainSections: SectionKey[] = ["experience", "education", "projects"];
  const sidebarSections: SectionKey[] = ["skills", "achievements"];

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div
        className="w-1/3 p-4"
        style={{ backgroundColor: accentColor + "15" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold" style={{ color: accentColor }}>
            {personal.name}
          </h1>
          <p className="text-md text-foreground mt-1">{personal.title}</p>
        </div>
        <div className="mt-4 text-xs text-center space-y-1 text-foreground">
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.location}</p>
          <div className="flex justify-center flex-wrap gap-x-2">
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                LinkedIn
              </a>
            )}
            {personal.linkedin && (personal.portfolioSection?.url || personal.githubSection?.url) && " | "}
            {personal.portfolioSection?.url && (
              <a
                href={personal.portfolioSection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                Portfolio
              </a>
            )}
            {personal.portfolioSection?.url && personal.githubSection?.url && " | "}
            {personal.githubSection?.url && (
              <a
                href={personal.githubSection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        <div className="mt-6">
          {sectionOrder.map(
            (key) =>
              sidebarSections.includes(key) && (
                <SidebarSectionRenderer
                  key={key}
                  sectionKey={key}
                  resume={resume}
                  accentColor={accentColor}
                />
              )
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="w-2/3 p-6 overflow-y-auto">
        {summary && (
          <Section title="Summary" accentColor={accentColor}>
            <p className="text-xs italic text-foreground/80">{summary}</p>
          </Section>
        )}
        {sectionOrder.map(
          (key) =>
            mainSections.includes(key) && (
              <MainSectionRenderer
                key={key}
                sectionKey={key}
                resume={resume}
                accentColor={accentColor}
              />
            )
        )}
      </div>
    </div>
  );
};
