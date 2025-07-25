import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ResumeData, SectionKey, TemplateKey } from "../types";

interface ResumeState {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
  updateField: (path: string, value: any) => void;
  addListItem: <T extends object>(key: keyof ResumeData, newItem: T) => void;
  updateListItem: <T extends { id: string }>(
    key: keyof ResumeData,
    updatedItem: T
  ) => void;
  removeListItem: (key: keyof ResumeData, id: string) => void;
  getCompletion: () => number;
  moveSection: (key: SectionKey, direction: "up" | "down") => void;
  resetResume: () => void;
  setTemplate: (template: TemplateKey) => void;
  setAccentColor: (color: string) => void;
}

const initialResumeState: ResumeData = {
  personal: {
    name: "Jane Doe",
    title: "Aspiring Software Engineer",
    email: "jane.doe@email.com",
    phone: "123-456-7890",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/janedoe",
    portfolio: "github.com/janedoe",
  },
  summary:
    "A passionate and driven software engineer with a strong foundation in computer science and a dedication to creating elegant, user-friendly applications. Eager to apply my skills in a challenging and collaborative environment to solve real-world problems.",
  experience: [
    {
      id: "exp1",
      title: "Software Engineering Intern",
      role: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      location: "Palo Alto, CA",
      startDate: "May 2023",
      endDate: "Aug 2023",
      description: [
        "• Developed and maintained front-end features for a client-facing web application using React and TypeScript.",
        "• Collaborated with a team of 5 engineers to design and implement new user interfaces.",
      ],
    },
  ],
  education: [
    {
      id: "edu1",
      university: "University of California, Berkeley",
      degree: "B.S. in Computer Science",
      location: "Berkeley, CA",
      startDate: "Aug 2021",
      endDate: "May 2025",
      gpa: "3.8",
    },
  ],
  projects: [
    {
      id: "proj1",
      title: "Personal Portfolio Website",
      name: "Personal Portfolio Website",
      description: [
        "A responsive website to showcase my projects and skills, built with Next.js and deployed on Vercel.",
      ],
      url: "github.com/janedoe/portfolio",
    },
  ],
  skills: [
    { id: "skill1", name: "JavaScript" },
    { id: "skill2", name: "TypeScript" },
    { id: "skill3", name: "React" },
    { id: "skill4", name: "Node.js" },
    { id: "skill5", name: "Python" },
    { id: "skill6", name: "SQL" },
  ],
  achievements: [
    { id: "ach1", name: "Dean's List - Fall 2022, Spring 2023" },
    { id: "ach2", name: "1st Place - University Hackathon 2023" },
  ],
  sectionOrder: [
    "experience",
    "education",
    "projects",
    "skills",
    "achievements",
  ],
  template: "modern",
  accentColor: "#000000",
};

const useResumeStore = create<ResumeState>()(
  persist(
    (set, get) => ({
      resume: initialResumeState,
      setResume: (resume) => set({ resume }),
      resetResume: () => set({ resume: initialResumeState }),
      updateField: (path, value) => {
        set((state) => {
          const keys = path.split(".");
          const newState = { ...state, resume: { ...state.resume } };
          let current: any = newState.resume;

          for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            current[key] = { ...current[key] };
            current = current[key];
          }
          current[keys[keys.length - 1]] = value;
          return newState;
        });
      },
      addListItem: (key, newItem) => {
        set((state) => {
          const list = state.resume[key] as any[];
          if (Array.isArray(list)) {
            return {
              resume: {
                ...state.resume,
                [key]: [...list, newItem],
              },
            };
          }
          return state;
        });
      },
      updateListItem: (key, updatedItem) => {
        set((state) => {
          const list = state.resume[key] as any[];
          if (Array.isArray(list)) {
            return {
              resume: {
                ...state.resume,
                [key]: list.map((item) =>
                  item.id === updatedItem.id ? updatedItem : item
                ),
              },
            };
          }
          return state;
        });
      },
      removeListItem: (key, id) => {
        set((state) => {
          const list = state.resume[key] as any[];
          if (Array.isArray(list)) {
            return {
              resume: {
                ...state.resume,
                [key]: list.filter((item) => item.id !== id),
              },
            };
          }
          return state;
        });
      },
      getCompletion: () => {
        const { resume } = get();
        const sections = [
          resume.personal.name && resume.personal.email,
          resume.summary.length > 10,
          resume.experience.length > 0,
          resume.education.length > 0,
          resume.projects.length > 0,
          resume.skills.length > 0,
          resume.achievements.length > 0,
        ];
        const completed = sections.filter(Boolean).length;
        return Math.round((completed / sections.length) * 100);
      },
      moveSection: (key, direction) => {
        set((state) => {
          const { sectionOrder } = state.resume;
          const index = sectionOrder.indexOf(key);
          if (index === -1) return state;

          const newOrder = [...sectionOrder];
          if (direction === "up" && index > 0) {
            [newOrder[index], newOrder[index - 1]] = [
              newOrder[index - 1],
              newOrder[index],
            ];
          } else if (direction === "down" && index < newOrder.length - 1) {
            [newOrder[index], newOrder[index + 1]] = [
              newOrder[index + 1],
              newOrder[index],
            ];
          }

          return {
            ...state,
            resume: {
              ...state.resume,
              sectionOrder: newOrder,
            },
          };
        });
      },
      setTemplate: (template) => {
        set((state) => ({
          resume: {
            ...state.resume,
            template: template,
          },
        }));
      },
      setAccentColor: (color) => {
        set((state) => ({
          resume: {
            ...state.resume,
            accentColor: color,
          },
        }));
      },
    }),
    {
      name: "buildmecv-resume-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useResumeStore;
