import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/UI';

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
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ steps, onFinish }) => {
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
    <div className="multi-step-form">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-text-light flex items-center">
          {currentStep.icon}
          <span className="ml-2">{currentStep.title}</span>
        </h2>
        <div className="text-sm text-text-secondary">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="form-content">
          {currentStep.content}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-8">
        <Button onClick={handlePrevious} disabled={currentStepIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          {currentStepIndex === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
};
