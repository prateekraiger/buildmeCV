
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Abstract Background Elements (reused from Home for consistency) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-20">
         {/* Bento Grid Advantages Section */}
         <BentoAdvantages content={aboutContent.advantages} />
      </div>
    </div>
  );
};

export default AboutPage;
