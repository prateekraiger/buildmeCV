import React from "react";
import { Input } from "../../UI";
import useResumeStore from "../../../store/resumeStore";

export const PersonalInfoForm: React.FC = () => {
  const { resume, updateField } = useResumeStore();
  const { personal } = resume;
  const onChange = updateField;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        id="personal-name"
        label="Full Name"
        value={personal.name || ""}
        onChange={(e) => onChange("personal.name", e.target.value)}
        placeholder="Enter your full name"
      />
      <Input
        id="personal-title"
        label="Job Title"
        value={personal.title || ""}
        onChange={(e) => onChange("personal.title", e.target.value)}
        placeholder="e.g. Software Engineer"
      />
      <Input
        id="personal-email"
        label="Email"
        type="email"
        value={personal.email || ""}
        onChange={(e) => onChange("personal.email", e.target.value)}
        placeholder="your.email@example.com"
      />
      <Input
        id="personal-phone"
        label="Phone"
        type="tel"
        value={personal.phone || ""}
        onChange={(e) => onChange("personal.phone", e.target.value)}
        placeholder="+1 (555) 123-4567"
      />
      <Input
        id="personal-location"
        label="Location"
        value={personal.location || ""}
        onChange={(e) => onChange("personal.location", e.target.value)}
        placeholder="City, State/Country"
      />
      <Input
        id="personal-linkedin"
        label="LinkedIn Profile"
        value={personal.linkedin || ""}
        onChange={(e) => onChange("personal.linkedin", e.target.value)}
        placeholder="linkedin.com/in/yourprofile"
      />
      <Input
        id="personal-portfolio"
        label="Portfolio URL"
        value={personal.portfolioSection?.url || ""}
        onChange={(e) =>
          onChange("personal.portfolioSection.url", e.target.value)
        }
        placeholder="https://yourportfolio.com"
      />
      <Input
        id="personal-website"
        label="Website"
        value={personal.website || ""}
        onChange={(e) => onChange("personal.website", e.target.value)}
        placeholder="https://yourwebsite.com"
      />
      <Input
        id="personal-github"
        label="GitHub URL"
        value={personal.githubSection?.url || ""}
        onChange={(e) => onChange("personal.githubSection.url", e.target.value)}
        placeholder="github.com/yourusername"
      />
    </div>
  );
};
