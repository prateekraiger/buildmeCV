import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/UI';
import { SparklesIcon, RectangleGroupIcon, SwatchIcon } from '../components/Icons';

const headlines = [
  "an AI-Powered Resume",
  "a Standout First Impression",
  "Your Next Career Move",
];

const AnimatedHeadline: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            if (subIndex === 0) {
                setIsDeleting(false);
                                  setIndex((prev) => (prev + 1) % headlines.length);
            } else {
                setTimeout(() => setSubIndex((prev) => prev - 1), 75);
            }
        } else {
            if (subIndex === headlines[index].length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else {
                setTimeout(() => setSubIndex((prev) => prev + 1), 100);
            }
        }
    }, [subIndex, isDeleting, index]);

    return (
        <span className="text-accent min-h-[72px] sm:min-h-[84px] md:min-h-[96px]">
            {headlines[index].substring(0, subIndex)}
            <span className="animate-ping">|</span>
        </span>
    );
};

const TemplatePreviewCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <Card className="p-2 bg-primary/30 backdrop-blur-sm">
        <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden bg-white shadow-lg">
            {children}
        </div>
        <p className="text-center font-semibold mt-3 text-dark">{title}</p>
    </Card>
);

const Feature: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary border border-secondary/30 text-dark">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-dark">{title}</h3>
            <p className="mt-1 text-secondary">{children}</p>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 my-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark tracking-tight leading-tight">
          Build <br className="sm:hidden" />
          <AnimatedHeadline />
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-secondary">
          Craft a professional, ATS-friendly resume in minutes. Leverage AI, choose from modern templates, and land your dream job.
        </p>
        <div className="mt-8">
          <Link to="/builder">
            <Button variant="primary" className="px-8 py-4 text-lg font-bold shadow-2xl transform hover:scale-105">
              Start Building for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-dark mb-8">Choose Your Style</h2>
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
          <Feature icon={<RectangleGroupIcon className="w-6 h-6" />} title="Multiple Templates">
            Choose between a modern two-column layout or a classic single-column design to best fit your industry and style.
          </Feature>
          <Feature icon={<SwatchIcon className="w-6 h-6" />} title="Color Customization">
            Personalize your resume with a custom accent color to make your resume uniquely yours while maintaining a professional look.
          </Feature>
           <Feature icon={<SparklesIcon className="w-6 h-6" />} title="AI-Powered Enhancement">
            Let our AI assistant rewrite your job descriptions and suggest relevant skills to make your accomplishments shine.
          </Feature>
          <Feature icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991l-3.182-3.182a8.25 8.25 0 0 0-11.667 0L2.985 16.5" /></svg>} title="Persistent Storage">
            Your work is saved automatically to your browser. Close the tab and come back anytime to continue where you left off.
          </Feature>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
