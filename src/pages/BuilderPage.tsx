import React, { useMemo, useEffect } from "react";
import useResumeStore from "../store/resumeStore";
import { Progress } from "../components/UI";
import { PersonalInfoForm } from "../components/builder/forms/PersonalInfoForm";
import { ExperienceForm } from "../components/builder/forms/ExperienceForm";
import { EducationForm } from "../components/builder/forms/EducationForm";
import { ProjectsForm } from "../components/builder/forms/ProjectsForm";
import { SimpleListForm } from "../components/builder/forms/SimpleListForm";
import { SummaryForm } from "../components/builder/forms/SummaryForm";
import { LivePreview } from "../components/builder/preview/LivePreview";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  UserCircleIcon,
  InformationCircleIcon,
  RectangleGroupIcon,
} from "../components/Icons";
import { ImportExport } from "../components/builder/ImportExport";
import { TemplateSelector } from "../components/builder/design/TemplateSelector";
import { AccentColorPicker } from "../components/builder/design/AccentColorPicker";
import { motion, Transition } from "framer-motion";
import { MultiStepForm } from "../components/builder/MultiStepForm";
import { SummaryDisplay } from "../components/builder/SummaryDisplay";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const BuilderPage: React.FC = () => {
  const { resume, getCompletion } = useResumeStore();
  const completion = useMemo(() => getCompletion(), [resume, getCompletion]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent-color",
      resume.accentColor
    );
  }, [resume.accentColor]);

  const steps = [
    {
      id: "personalInfo",
      title: "Personal Information",
      icon: <UserCircleIcon className="w-6 h-6 text-accent" />,
      content: <PersonalInfoForm />,
    },
    {
      id: "summary",
      title: "Professional Summary",
      icon: <InformationCircleIcon className="w-6 h-6 text-accent" />,
      content: <SummaryForm />,
    },
    {
      id: "experience",
      title: "Work Experience",
      icon: <BriefcaseIcon className="w-6 h-6 text-accent" />,
      content: <ExperienceForm />,
    },
    {
      id: "education",
      title: "Education",
      icon: <AcademicCapIcon className="w-6 h-6 text-accent" />,
      content: <EducationForm />,
    },
    {
      id: "projects",
      title: "Projects",
      icon: <LightBulbIcon className="w-6 h-6 text-accent" />,
      content: <ProjectsForm />,
    },
    {
      id: "skills",
      title: "Skills",
      icon: <SparklesIcon className="w-6 h-6 text-accent" />,
      content: (
        <SimpleListForm
          list={resume.skills}
          listKey="skills"
          label="Skill"
          suggestable
        />
      ),
    },
    {
      id: "achievements",
      title: "Achievements",
      icon: <TrophyIcon className="w-6 h-6 text-accent" />,
      content: (
        <SimpleListForm
          list={resume.achievements}
          listKey="achievements"
          label="Achievement"
        />
      ),
    },
    {
      id: "designOptions",
      title: "Design & Options",
      icon: <RectangleGroupIcon className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-6">
          <TemplateSelector />
          <AccentColorPicker />
          <ImportExport />
        </div>
      ),
    },
    {
      id: "review",
      title: "Review & Download",
      icon: <InformationCircleIcon className="w-6 h-6 text-accent" />,
      content: <SummaryDisplay />,
    },
  ];

  const handleFinish = () => {
    // This function will be called when the user clicks 'Finish' on the last step.
    // You can add any final actions here, e.g., showing a success message or navigating.
    console.log("Multi-step form finished!");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="relative min-h-screen w-full text-gray-900">
        {/* Background grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
        {/* Main layout */}
        <div className="container mx-auto py-10 px-2 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
          {/* Left: Form */}
          <div className="flex-1 max-w-xl">
            <div className="sticky top-20 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md">
              <Progress value={completion} />
            </div>
            <div className="mt-6">
              <MultiStepForm steps={steps} onFinish={handleFinish} />
            </div>
          </div>
          {/* Right: Preview */}
          <div className="flex-1 flex flex-col items-center">
            <div className="sticky top-20 w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Live Preview
                </h2>
              </div>
              <LivePreview />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BuilderPage;
