export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  github?: string;
  website?: string;
}

export interface Experience {
  id: string;
  title: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Project {
  id: string;
  title: string;
  name: string;
  description: string[];
  url: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Achievement {
  id: string;
  name: string;
}

export type SectionKey =
  | "experience"
  | "education"
  | "projects"
  | "skills"
  | "achievements";

export type TemplateKey = "modern" | "classic";

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  sectionOrder: SectionKey[];
  template: TemplateKey;
  accentColor: string;
}
