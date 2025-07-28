import React from "react";
import { BentoAdvantages } from "../components/blocks/BentoAdvantages";
import { useMetaTags } from "../lib/hooks";
import aboutContent from "../content/about.json";

const AboutPage = () => {
  useMetaTags({
    title: "Why Choose BuildMeCV? - Advantages Over Other Resume Builders",
    description:
      "Discover why BuildMeCV is the superior choice for creating professional resumes. AI-powered, privacy-first, completely free, and proven to get results.",
    keywords:
      "buildmecv advantages, best resume builder, AI resume builder, free resume builder, privacy resume builder, professional resume",
  });

  return (
    <div className="my-12">
      {/* Bento Grid Advantages Section */}
      <BentoAdvantages content={aboutContent.advantages} />
    </div>
  );
};

export default AboutPage;
