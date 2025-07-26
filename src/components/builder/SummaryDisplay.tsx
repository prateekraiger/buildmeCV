import React from "react";
import useResumeStore from "../../store/resumeStore";
import { DownloadButton } from "./DownloadButton";

export const SummaryDisplay: React.FC = () => {
  const { resume } = useResumeStore();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Review Your Resume</h3>
      <p className="text-secondary">
        Please review the information you've entered. You can go back to make
        changes if needed.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
        <h4 className="text-lg font-medium text-foreground">Personal Information</h4>
        <p>
          <strong>Name:</strong> {resume.personal.name}
        </p>
        <p>
          <strong>Email:</strong> {resume.personal.email}
        </p>
        <p>
          <strong>Phone:</strong> {resume.personal.phone}
        </p>
        <p>
          <strong>LinkedIn:</strong> {resume.personal.linkedin}
        </p>
        <p>
          <strong>GitHub:</strong> {resume.personal.github}
        </p>
        <p>
          <strong>Website:</strong> {resume.personal.website}
        </p>
      </div>

      {resume.summary && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">
            Professional Summary
          </h4>
          <p>{resume.summary}</p>
        </div>
      )}

      {resume.experience.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">Work Experience</h4>
          {resume.experience.map((exp, index) => (
            <div
              key={index}
              className="border-b border-border pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
            >
              <p>
                <strong>{exp.title}</strong> at {exp.company}
              </p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <ul className="list-disc list-inside text-sm">
                {exp.description.split('\n').filter(line => line.trim() !== '').map((desc, i) => (
                  <li key={i}>{desc.replace(/^•\s*/, '')}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {resume.education.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">Education</h4>
          {resume.education.map((edu, index) => (
            <div
              key={index}
              className="border-b border-border pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
            >
              <p>
                <strong>{edu.degree}</strong> from {edu.university}
              </p>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </div>
      )}

      {resume.projects.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">Projects</h4>
          {resume.projects.map((proj, index) => (
            <div
              key={index}
              className="border-b border-border pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
            >
              <p>
                <strong>{proj.title}</strong>
              </p>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {resume.skills.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">Skills</h4>
          <p>{resume.skills.map((s) => s.name).join(", ")}</p>
        </div>
      )}

      {resume.achievements.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-inner space-y-2 border border-border">
          <h4 className="text-lg font-medium text-foreground">Achievements</h4>
          <ul className="list-disc list-inside text-sm">
            {resume.achievements.map((ach, index) => (
              <li key={index}>{ach.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <DownloadButton />
      </div>
    </div>
  );
};
