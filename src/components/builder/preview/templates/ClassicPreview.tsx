import React from "react";
import type { ResumeData, SectionKey } from "../../../../types";

const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  accentColor: string;
}> = ({ title, children, accentColor }) => (
  <div className="mb-4">
    <h3
      className="text-xl font-bold border-b-2 pb-1 mb-2"
      style={{ color: accentColor, borderColor: accentColor }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const SectionRenderer: React.FC<{
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
                <div className="text-xs mt-1 text-foreground/90">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((desc, i) => (
                      <div key={i} className="mb-1">
                        {desc}
                      </div>
                    ))
                  ) : (
                    <div>{exp.description}</div>
                  )}
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
                  <p className="text-xs" style={{ color: accentColor }}>
                    {proj.url}
                  </p>
                </div>
                <div className="text-xs mt-1 text-foreground/90">
                  {Array.isArray(proj.description) ? (
                    proj.description.map((desc, i) => (
                      <div key={i} className="mb-1">
                        {desc}
                      </div>
                    ))
                  ) : (
                    <div>{proj.description}</div>
                  )}
                </div>
              </div>
            ))}
          </Section>
        )
      );
    case "skills":
      return (
        resume.skills.length > 0 && (
          <Section title="Skills" accentColor={accentColor}>
            <div className="flex flex-wrap gap-2 mt-1">
              {resume.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-accent/20 text-primary rounded-full px-3 py-1 text-xs font-medium"
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
                <li key={ach.id} className="text-primary/90">
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

export const ClassicPreview: React.FC<{ resume: ResumeData }> = ({
  resume,
}) => {
  const { personal, summary, sectionOrder, accentColor } = resume;
  return (
    <>
      {/* Header */}
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold" style={{ color: accentColor }}>
          {personal.name}
        </h1>
        <p className="text-lg text-foreground mt-1">{personal.title}</p>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs mt-3 text-foreground">
          <span>{personal.email}</span>
          <span>{personal.phone}</span>
          <span>{personal.location}</span>
        </div>
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs mt-1 text-foreground">
          {personal.linkedin && (
            <span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                LinkedIn
              </a>
            </span>
          )}
          {personal.linkedin &&
            (personal.portfolioSection?.url || personal.githubSection?.url) &&
            " | "}
          {personal.portfolioSection?.url && (
            <span>
              <a
                href={personal.portfolioSection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                Portfolio
              </a>
            </span>
          )}
          {personal.portfolioSection?.url &&
            personal.githubSection?.url &&
            " | "}
          {personal.githubSection?.url && (
            <span>
              <a
                href={personal.githubSection.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
                style={{ color: accentColor }}
              >
                GitHub
              </a>
            </span>
          )}
        </div>
      </div>

      <div className="px-8 pb-8">
        {/* Summary */}
        {summary && (
          <div className="mb-4 text-center">
            <p className="text-xs italic text-primary/80">{summary}</p>
          </div>
        )}

        {/* Custom Section Order: Education → Skills → Experience → Projects → Achievements */}
        <SectionRenderer
          sectionKey="education"
          resume={resume}
          accentColor={accentColor}
        />
        <SectionRenderer
          sectionKey="skills"
          resume={resume}
          accentColor={accentColor}
        />
        <SectionRenderer
          sectionKey="experience"
          resume={resume}
          accentColor={accentColor}
        />
        <SectionRenderer
          sectionKey="projects"
          resume={resume}
          accentColor={accentColor}
        />
        <SectionRenderer
          sectionKey="achievements"
          resume={resume}
          accentColor={accentColor}
        />
      </div>
    </>
  );
};
