import React from "react";
import { Card } from "../components/UI";
import {
  SparklesIcon,
  RectangleGroupIcon,
  SwatchIcon,
} from "../components/Icons";
import { History } from "lucide-react";
import { HeroSection } from "../components/blocks/hero-section-1";

const TemplatePreviewCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <Card className="p-2 bg-primary/30 backdrop-blur-sm">
    <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-white shadow-lg">
      {children}
    </div>
    <p className="text-center font-semibold mt-3 text-dark">{title}</p>
  </Card>
);

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary border border-secondary/30 text-dark">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-dark">{title}</h3>
      <p className="mt-1 text-gray-700">{children}</p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 my-12">
      <HeroSection />
      {/* Template Showcase */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-8">
          Choose Your Style
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <TemplatePreviewCard title="Modern">
            <div className="flex h-full">
              <div className="w-1/3 bg-gray-200 p-2">
                <div className="bg-gray-400 rounded-full h-4 w-4 mx-auto mb-2"></div>
                <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
                <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-2"></div>
                <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
                <div className="h-1 w-1/2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-2/3 p-2">
                <div className="h-2 w-1/2 bg-gray-500 rounded-full mb-2"></div>
                <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
                <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
                <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-3"></div>
                <div className="h-2 w-1/2 bg-gray-500 rounded-full mb-2"></div>
                <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
                <div className="h-1 w-5/6 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </TemplatePreviewCard>
          <TemplatePreviewCard title="Classic">
            <div className="p-2 h-full">
              <div className="bg-gray-400 rounded-full h-4 w-4 mx-auto mb-2"></div>
              <div className="h-1 w-1/2 bg-gray-400 rounded-full mx-auto mb-2"></div>
              <div className="h-2 w-1/3 bg-gray-500 rounded-full mt-4 mb-2"></div>
              <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
              <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
              <div className="h-1 w-3/4 bg-gray-400 rounded-full mb-3"></div>
              <div className="h-2 w-1/3 bg-gray-500 rounded-full mt-4 mb-2"></div>
              <div className="h-1 w-full bg-gray-400 rounded-full mb-1"></div>
              <div className="h-1 w-5/6 bg-gray-400 rounded-full"></div>
            </div>
          </TemplatePreviewCard>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">
          A Toolkit for Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <Feature
            icon={<RectangleGroupIcon className="w-6 h-6" />}
            title="Multiple Templates"
          >
            Choose between a modern two-column layout or a classic single-column
            design to best fit your industry and style.
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
            <span className="text-gray-700 dark:text-slate-300">
              Let our AI assistant rewrite your job descriptions and suggest
              relevant skills to make your accomplishments shine.
            </span>
          </Feature>
          <Feature
            icon={<History className="w-6 h-6" />}
            title="Persistent Storage"
          >
            Your work is saved automatically to your browser. Close the tab and
            come back anytime to continue where you left off.
          </Feature>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
