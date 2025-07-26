import React from "react";
import { Input } from "../../UI";
import useResumeStore from "../../../store/resumeStore";

export const PersonalInfoForm: React.FC = () => {
  const { updateField } = useResumeStore();
  const onChange = updateField;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Full Name"
        value={"Jane Doe"}
        onChange={(e) => onChange("personal.name", e.target.value)}
      />
      <Input
        label="Job Title"
        value={"Software Engineer"}
        onChange={(e) => onChange("personal.title", e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={"jane.doe@email.com"}
        onChange={(e) => onChange("personal.email", e.target.value)}
      />
      <Input
        label="Phone"
        type="tel"
        value={"+91 9870937497"}
        onChange={(e) => onChange("personal.phone", e.target.value)}
      />
      <Input
        label="Location"
        value={"Bhopal , India"}
        onChange={(e) => onChange("personal.location", e.target.value)}
      />
      <Input
        label="LinkedIn Profile"
        value={"linkedin.com/in/janedoe"}
        onChange={(e) => onChange("personal.linkedin", e.target.value)}
      />
      <Input
        label="Portfolio URL"
        value={"johnportfolio.com"}
        onChange={(e) =>
          onChange("personal.portfolioSection.url", e.target.value)
        }
      />
      <Input
        label="GitHub URL"
        value={"github.com/in/janedoe"}
        onChange={(e) => onChange("personal.githubSection.url", e.target.value)}
      />
    </div>
  );
};
