import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "../components/Icons";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Spacer */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // @ts-ignore
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-medium mb-4">
              <SparklesIcon className="w-4 h-4" />
              <span>AI-Powered Resume Builder</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Craft Your <span className="text-gradient">Dream Career</span> with Confidence
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Build professional, ATS-friendly resumes in minutes. Stand out from the crowd with our premium templates and AI-assisted tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/builder"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Build My Resume <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-secondary/80 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <DocumentTextIcon className="w-8 h-8 text-blue-500" />,
                title: "Professional Templates",
                desc: "Choose from a curated collection of recruiter-approved designs.",
              },
              {
                icon: <SparklesIcon className="w-8 h-8 text-purple-500" />,
                title: "AI-Enhanced",
                desc: "Get smart suggestions and content improvements as you write.",
              },
              {
                icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
                title: "ATS Friendly",
                desc: "Ensure your resume gets past applicant tracking systems every time.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                // @ts-ignore
                className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="mb-4 p-3 bg-background rounded-xl inline-block shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-accent/5 -skew-y-3 z-0 transform origin-left"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Three simple steps to your new career.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
              {[
                { step: "01", title: "Pick a Template", desc: "Choose from our modern, ATS-friendly designs." },
                { step: "02", title: "Enter Your Details", desc: "Fill in your experience, skills, and education." },
                { step: "03", title: "Download PDF", desc: "Export your polished resume instantly." }
              ].map((item, i) => (
                <div key={i} className="relative p-6">
                  <div className="text-6xl font-black text-primary/10 absolute top-0 left-1/2 -translate-x-1/2 -z-10 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-8">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is it really free?", a: "Yes! You can build and download your resume for free." },
              { q: "Will it pass ATS systems?", a: "Absolutely. Our templates are designed with ATS best practices in mind." },
              { q: "Can I edit my resume later?", a: "Yes, your data is saved locally in your browser so you can come back anytime." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white/50 border border-border rounded-xl backdrop-blur-sm">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-muted-foreground mt-0 px-6 pb-6 pt-0 group-open:animate-accordion-down">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 border-t border-border/50">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Trusted by Job Seekers Everywhere</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Resumes Created", value: "10,000+" },
                { label: "Success Rate", value: "95%" },
                { label: "Templates", value: "20+" },
                { label: "Free to Use", value: "Forever" },
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-4xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 pb-40">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-16 sm:px-12 sm:py-24 text-center">
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
                Ready to Boost Your Career?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Stop struggling with Word documents. Build a beautiful resume in minutes.
              </p>
              <Link
                to="/builder"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
