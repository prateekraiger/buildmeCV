import React from "react";
import { motion } from "framer-motion";
import { useMetaTags } from "../lib/hooks";
import { TemplateShowcase } from "../components/blocks/TemplateShowcase";
import homeContent from "../content/home.json";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const TemplatesPage: React.FC = () => {
  useMetaTags({
    title: "Resume Templates - BuildMeCV | Choose Your Perfect Design",
    description:
      "Explore our collection of professional resume templates. Choose from modern and classic designs to create your perfect resume.",
    keywords:
      "resume templates, professional templates, modern resume, classic resume, cv templates",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        className="container mx-auto px-4 space-y-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-6 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Professional Templates
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Choose Your Perfect Template
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our carefully crafted collection of resume templates, 
            designed to help you stand out in today's competitive job market.
          </p>
        </motion.div>

        {/* Template Showcase */}
        <motion.div variants={fadeInUp}>
          <TemplateShowcase content={homeContent.templates} />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-6 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl p-8 md:p-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Your Resume?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with any template and customize it to match your unique style and experience.
          </p>
          <Link to="/builder">
            <motion.button 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium text-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TemplatesPage;