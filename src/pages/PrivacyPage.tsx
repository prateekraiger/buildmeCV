import React from "react";
import { motion } from "framer-motion";
import { useMetaTags } from "../lib/hooks";
import { Shield, Eye, Database, Lock } from "lucide-react";

const PrivacyPage: React.FC = () => {
  useMetaTags({
    title: "Privacy Policy - BuildMeCV | Your Data Protection",
    description:
      "Learn how BuildMeCV protects your personal information and resume data. Read our comprehensive privacy policy.",
    keywords: "privacy policy, data protection, personal information, security",
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
      icon: <Database className="w-6 h-6" />,
      title: "Data Collection",
      content: [
        "We collect only the information you provide when creating your resume",
        "Personal information is stored locally in your browser by default",
        "No data is transmitted to our servers unless you explicitly choose to save online",
        "We may collect anonymized usage analytics to improve the service"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Data Usage",
      content: [
        "Your resume data is used solely to provide our resume building service",
        "We do not sell, rent, or share your personal information with third parties",
        "Analytics data helps us understand user behavior and improve our features",
        "AI enhancement features process your text locally when possible"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      content: [
        "All data transmission uses industry-standard SSL encryption",
        "Local storage is secured by your browser's security measures",
        "We implement security best practices to protect against unauthorized access",
        "Regular security audits ensure our systems remain secure"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "You can delete your local data at any time through your browser",
        "You have the right to request data deletion from our servers",
        "You can opt out of analytics tracking via your browser settings",
        "You can export your resume data in various formats"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Privacy Protected
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            At BuildMeCV, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This privacy policy explains how we collect, use, 
            and safeguard your data when you use our resume building service.
          </p>
        </motion.div>

        {/* Policy Sections */}
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

        {/* Contact Information */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 text-center"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-bold mb-4">Questions About Privacy?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this privacy policy or how we handle your data, 
            please don't hesitate to contact us.
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

export default PrivacyPage;