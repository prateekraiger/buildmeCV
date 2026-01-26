import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon } from "../Icons";

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Cast motion components to any to avoid strict type checking on className
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <MotionDiv
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <MotionDiv
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotate: [0, 0, 360]
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                times: [0, 0.6, 1]
              }}
              className="mb-4 text-primary"
            >
              <div className="p-4 bg-primary/10 rounded-full">
                <SparklesIcon className="w-12 h-12 text-primary" />
              </div>
            </MotionDiv>

            <MotionH1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              BuildMeCV
            </MotionH1>

            <MotionDiv
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"
            />
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};
