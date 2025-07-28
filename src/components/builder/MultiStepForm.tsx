import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/UI";
import { ChevronsLeft } from "../ui/ChevronsLeft";
import { ChevronsRight } from "../ui/ChevronsRight";

interface Step {
  id: string;
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onFinish: () => void;
}

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -100 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  onFinish,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="multi-step-form w-full h-full flex flex-col">
      {/* Header Section - Bigger and more prominent */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 p-4 bg-white/70 rounded-xl border border-primary/10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark flex items-center mb-2 sm:mb-0">
          <span className="mr-3 p-2 bg-primary/10 rounded-lg">
            {currentStep.icon}
          </span>
          <span>{currentStep.title}</span>
        </h2>
        <div className="text-sm sm:text-base text-black font-bold bg-accent/20 px-4 py-2 rounded-full border border-accent/30 step-indicator visibility-badge">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
      </div>

      {/* Content Section - Larger and more spacious */}
      <div className="flex-1 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="h-full"
          >
            <div className="form-content h-full p-4 sm:p-6 lg:p-8 bg-white/70 rounded-xl border border-primary/10">
              <div className="text-base sm:text-lg">{currentStep.content}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Section - Bigger buttons with chevron icons and borders */}
      <div className="flex justify-between items-center mt-8 p-4 bg-white/70 rounded-xl border border-primary/10">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentStepIndex === 0}
          className="px-6 py-3 text-base sm:text-lg font-medium flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 transition-colors"
        >
          <ChevronsLeft width={20} height={20} stroke="currentColor" />
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          className="px-6 py-3 text-base sm:text-lg font-medium flex items-center gap-2 border-2 border-primary hover:border-primary/80 transition-colors"
        >
          {currentStepIndex === steps.length - 1 ? (
            <>
              Finish
              <span className="text-lg">✓</span>
            </>
          ) : (
            <>
              Next
              <ChevronsRight width={20} height={20} stroke="currentColor" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
