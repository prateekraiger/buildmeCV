import React from "react";
import { HeroSection } from "../components/blocks/hero-section-1";
import { FeatureShowcase } from "../components/blocks/FeatureShowcase";
import { TemplateShowcase } from "../components/blocks/TemplateShowcase";
import { SocialProof } from "../components/blocks/SocialProof";
import { useMetaTags } from "../lib/hooks";
import homeContent from "../content/home.json";

const HomePage: React.FC = () => {
  useMetaTags({
    title:
      "BuildMeCV - AI-Powered Resume Builder | Create Professional Resumes",
    description:
      "Create stunning, professional resumes in minutes with our AI-powered builder. Choose from multiple templates, customize colors, and land your dream job.",
    keywords:
      "resume builder, AI resume, professional resume, online resume, free resume builder, job application, career",
  });

  return (
    <div className="space-y-24 sm:space-y-32 my-12">
      <HeroSection />

      {/* Template Showcase */}
      <TemplateShowcase content={homeContent.templates} />

      {/* Features Section */}
      <FeatureShowcase content={homeContent.features} />

      {/* Social Proof Section */}
      <SocialProof content={homeContent.socialProof} />
    </div>
  );
};

export default HomePage;
