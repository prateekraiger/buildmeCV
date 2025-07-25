import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/UI";
import {
  SparklesIcon,
  RectangleGroupIcon,
  SwatchIcon,
  ArrowPathIcon,
} from "../components/Icons";
import { motion, Transition } from "framer-motion";

const TemplatePreviewCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }}>
    <div className="border border-secondary/20 rounded-lg p-2 bg-primary/30 backdrop-blur-sm">
      <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-background-light shadow-lg">
        {children}
      </div>
      <p className="text-center font-semibold mt-3 text-secondary">{title}</p>
    </div>
  </motion.div>
);

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary border border-secondary/30 text-accent">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-text-light">{title}</h3>
      <p className="mt-1 text-secondary">{children}</p>
    </div>
  </div>
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};



const HomePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="space-y-24 sm:space-y-32 my-12">
        {/* Hero Section */}
        <motion.section
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-light tracking-tight">
              Craft a <span className="text-accent">Killer Resume</span>,<br />
              Land Your Dream Job.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-secondary">
              Build a professional, AI-powered resume in minutes. Stand out from
              the crowd with stunning, customizable templates.
            </p>
            <div className="mt-8">
              <Link to="/builder">
                <Button
                  variant="primary"
                  className="px-8 py-4 text-lg font-bold shadow-2xl !text-white"
                >
                  Start Building for Free
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
        {/* Template Showcase */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-text-light mb-8">
              Choose Your Style
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <TemplatePreviewCard title="Modern">
                <div className="flex h-full">
                  <div className="w-1/3 bg-gray-200 p-2">
                    <div
                      className="h-4 w-4 mx-auto mb-2 rounded-full"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-full rounded-full mb-1"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-3/4 rounded-full mb-2"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-full rounded-full mb-1"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-1/2 rounded-full"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                  </div>
                  <div className="w-2/3 p-2">
                    <div
                      className="h-2 w-1/2 rounded-full mb-2"
                      style={{ backgroundColor: "#c1121f80" }}
                    ></div>
                    <div
                      className="h-1 w-full rounded-full mb-1"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-full rounded-full mb-1"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-3/4 rounded-full mb-3"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-2 w-1/2 rounded-full mb-2"
                      style={{ backgroundColor: "#c1121f80" }}
                    ></div>
                    <div
                      className="h-1 w-full rounded-full mb-1"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                    <div
                      className="h-1 w-5/6 rounded-full"
                      style={{ backgroundColor: "#c1121f50" }}
                    ></div>
                  </div>
                </div>
              </TemplatePreviewCard>
              <TemplatePreviewCard title="Classic">
                <div className="p-2 h-full">
                  <div
                    className="h-4 w-4 mx-auto mb-2 rounded-full"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-1 w-1/2 mx-auto mb-2 rounded-full"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-2 w-1/3 mt-4 mb-2 rounded-full"
                    style={{ backgroundColor: "#c1121f80" }}
                  ></div>
                  <div
                    className="h-1 w-full rounded-full mb-1"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-1 w-full rounded-full mb-1"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-1 w-3/4 rounded-full mb-3"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-2 w-1/3 mt-4 mb-2 rounded-full"
                    style={{ backgroundColor: "#c1121f80" }}
                  ></div>
                  <div
                    className="h-1 w-full rounded-full mb-1"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                  <div
                    className="h-1 w-5/6 rounded-full"
                    style={{ backgroundColor: "#c1121f50" }}
                  ></div>
                </div>
              </TemplatePreviewCard>
            </div>
          </div>
        </motion.section>
        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-text-light mb-12">
              A Toolkit for Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <Feature
                icon={<RectangleGroupIcon className="w-6 h-6" />}
                title="Multiple Templates"
              >
                Choose between a modern two-column layout or a classic
                single-column design to best fit your industry and style.
              </Feature>
              <Feature
                icon={<SwatchIcon className="w-6 h-6" />}
                title="Color Customization"
              >
                Personalize your resume with a custom accent color to make your
                resume uniquely yours while maintaining a professional look.
              </Feature>
              <Feature
                icon={<SparklesIcon className="w-6 h-6" />}
                title="AI-Powered Enhancement"
              >
                Let our AI assistant rewrite your job descriptions and suggest
                relevant skills to make your accomplishments shine.
              </Feature>
              <Feature
                icon={<ArrowPathIcon className="w-6 h-6" />}
                title="Persistent Storage"
              >
                Your work is saved automatically to your browser. Close the tab
                and come back anytime to continue where you left off.
              </Feature>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HomePage;
