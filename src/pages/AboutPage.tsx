import React from "react";
import { motion } from "framer-motion";
import { BentoAdvantages } from "../components/blocks/BentoAdvantages";
import { useMetaTags } from "../lib/hooks";
import aboutContent from "../content/about.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Rocket, Heart } from "lucide-react";

const AboutPage = () => {
  useMetaTags({
    title: "About BuildMeCV - Our Mission & Story",
    description:
      "We are on a mission to democratize career growth with privacy-first, free, and AI-powered tools.",
    keywords:
      "about buildmecv, resume builder mission, open source resume builder, privacy focused career tools",
  });

  // Cast motion components to any to avoid strict type checking issues
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;
  const MotionSection = motion.section as any;

  const stats = [
    { label: "Cost to User", value: "$0", description: "Forever Free" },
    { label: "Privacy", value: "100%", description: "Local Data Only" },
    { label: "Open Source", value: "YES", description: "Community Driven" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center px-4"
        >
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm bg-background/50 mb-8">
            <Rocket className="mr-2 h-4 w-4 text-primary" />
            <span>Our Mission</span>
          </div>
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Building the Future <br className="hidden sm:block" />
            of Career Tools
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            We believe that professional career tools should be accessible to
            everyone. No paywalls, no hidden fees, and absolutely no data
            farming. Just you and your career.
          </MotionP>
        </MotionSection>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 bg-background rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Why We Started</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  In a world where every career tool seems to want your credit
                  card or your personal data, we saw a gap. Building a resume
                  shouldn't be a subscription service. It shouldn't feel like a
                  trap.
                </p>
                <p>
                  BuildMeCV was born from a simple idea: **What if we gave away
                  the best resume builder for free?** What if it ran entirely in your
                  browser, so your data never left your device? That's what we built.
                </p>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Bento Advantages (Existing) */}
        <div className="py-12">
          <BentoAdvantages content={aboutContent.advantages} />
        </div>

        {/* Bottom CTA */}
        <section className="py-24 px-4">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 sm:p-16 text-center border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Shield className="w-64 h-64 text-primary" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-dark max-w-2xl mx-auto">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Join the revolution of open, privacy-first career building. No
                signup required to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 text-lg"
                  onClick={() => (window.location.href = "/builder")}
                >
                  Launch Builder <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </MotionDiv>
        </section>
      </div>
    </div>
  );
};
