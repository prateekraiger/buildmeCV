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
// Remove: import { HeroSection } from "../components/blocks/hero-section-1";

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
import { motion, MotionProps } from "framer-motion";
import { MultiStepForm } from "../components/builder/MultiStepForm";
import { SummaryDisplay } from "../components/builder/SummaryDisplay";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition: MotionProps["transition"] = {
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
    <div className="builder-page min-h-screen w-screen max-w-none overflow-x-hidden">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="w-full full-height-layout">
          {/* Main layout - Full viewport width utilization with 16px margins */}
          <div className="w-screen h-full p-4 py-2 sm:py-3 lg:py-4">
            <div className="builder-grid grid grid-cols-1 lg:grid-cols-2 gap-4 h-full max-w-none w-full">
              {/* Left: Form Section - Full width utilization with margins */}
              <div className="w-full flex flex-col min-h-full form-section m-4">
                {/* Progress Bar - Sticky and prominent */}
                <div className="builder-section sticky top-4 z-20 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-primary/20 mb-8">
                  <div className="text-lg sm:text-xl font-semibold text-dark mb-4">
                    Resume Progress
                  </div>
                  <Progress value={completion} />
                </div>

                {/* Form Content - Larger container with better spacing */}
                <div className="builder-section flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-primary/20">
                  <MultiStepForm steps={steps} onFinish={handleFinish} />
                </div>
              </div>

              {/* Right: Preview Section - Full width utilization with margins */}
              <div className="w-full flex flex-col min-h-full preview-section m-4">
                {/* Preview Header - More prominent */}
                <div className="builder-section sticky top-4 z-20 bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-primary/20 mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark flex items-center">
                    <span className="mr-3 text-accent">👀</span>
                    Live Preview
                  </h2>
                  <p className="text-black font-medium mt-2 text-sm sm:text-base preview-description">
                    See your resume update in real-time
                  </p>
                </div>

                {/* Preview Content - Much bigger and wider, full height, no scrollbar */}
                <div className="builder-section flex-1 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20 overflow-hidden">
                  <div className="preview-container w-full h-full p-2 sm:p-3 lg:p-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-full max-w-none h-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
                        <LivePreview />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BuilderPage;
