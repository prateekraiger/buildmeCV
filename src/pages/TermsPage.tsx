import React from "react";
import { motion } from "framer-motion";
import { useMetaTags } from "../lib/hooks";
import { FileText, Scale, Users, AlertTriangle } from "lucide-react";

const TermsPage: React.FC = () => {
  useMetaTags({
    title: "Terms of Service - BuildMeCV | Service Agreement",
    description:
      "Read BuildMeCV's terms of service and user agreement. Understand your rights and responsibilities when using our resume builder.",
    keywords: "terms of service, user agreement, legal terms, conditions",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
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

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Service Description",
      content: [
        "BuildMeCV provides online resume building and design services",
        "Our service includes templates, customization tools, and AI-powered content enhancement",
        "We offer both free and premium features to help you create professional resumes",
        "The service is provided 'as-is' and we continuously work to improve functionality"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "You are responsible for the accuracy and truthfulness of information in your resume",
        "You must not use the service for any unlawful or prohibited purposes",
        "You agree not to interfere with the security or integrity of our systems",
        "You are responsible for maintaining the confidentiality of your account"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "You retain ownership of all content you create using our service",
        "BuildMeCV owns the rights to our templates, software, and service design",
        "You grant us a limited license to process your content to provide our services",
        "We respect intellectual property rights and expect users to do the same"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitations and Liability",
      content: [
        "Our service is provided without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for our services",
        "We do not guarantee employment outcomes from using our resume builder"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        className="container mx-auto px-4 max-w-4xl space-y-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            <Scale className="w-4 h-4" />
            Legal Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using BuildMeCV services.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using BuildMeCV, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <motion.div className="grid gap-8 md:gap-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              className="space-y-4"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>
              <div className="pl-15 space-y-3">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Terms */}
        <motion.div className="space-y-8" variants={fadeInUp}>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Notice</h3>
            <p className="text-yellow-700">
              These terms may be updated from time to time. We will notify users of significant 
              changes and continued use of the service constitutes acceptance of updated terms.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Dispute Resolution</h3>
            <p className="text-blue-700">
              Any disputes arising from the use of this service will be resolved through binding 
              arbitration in accordance with applicable laws. We encourage users to contact us 
              directly to resolve any issues before pursuing legal action.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 text-center"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-bold mb-4">Questions About These Terms?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about these terms of service, please contact us 
            and we'll be happy to clarify any concerns.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsPage;