import React from "react";
import useResumeStore from "../../store/resumeStore";
import { DownloadButton } from "./DownloadButton";

export const SummaryDisplay: React.FC = () => {
  const { resume } = useResumeStore();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-dark">Review Your Resume</h3>
      <p className="text-secondary">
        Please review the information you've entered. You can go back to make
        changes if needed.
      </p>

      {/* Personal Information */}
      <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
        <h4 className="text-lg font-medium text-dark">Personal Information</h4>
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

      {/* Professional Summary */}
      {resume.summary && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">
            Professional Summary
          </h4>
          <p>{resume.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {resume.experience.length > 0 && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">Work Experience</h4>
          {resume.experience.map((exp, index) => (
            <div
              key={index}
              className="border-b border-border-light pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
            >
              <p>
                <strong>{exp.title}</strong> at {exp.company}
              </p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <ul className="list-disc list-inside text-sm">
                {(Array.isArray(exp.description)
                  ? exp.description
                  : [exp.description]
                ).map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">Education</h4>
          {resume.education.map((edu, index) => (
            <div
              key={index}
              className="border-b border-border-light pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
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

      {/* Projects */}
      {resume.projects.length > 0 && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">Projects</h4>
          {resume.projects.map((proj, index) => (
            <div
              key={index}
              className="border-b border-border-light pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0"
            >
              <p>
                <strong>{proj.title}</strong>
              </p>
              <p>
                {Array.isArray(proj.description)
                  ? proj.description.join(", ")
                  : proj.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">Skills</h4>
          <p>{resume.skills.map((s) => s.name).join(", ")}</p>
        </div>
      )}

      {/* Achievements */}
      {resume.achievements.length > 0 && (
        <div className="bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg space-y-2 border border-primary/10">
          <h4 className="text-lg font-medium text-dark">Achievements</h4>
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
