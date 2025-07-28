import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/UI";
import {
  Zap,
  Palette,
  Brain,
  Shield,
  Clock,
  Download,
  Users,
  Star,
  Sparkles,
  Target,
} from "lucide-react";

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  description,
  icon,
  className = "",
  highlight = false,
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`h-full ${className}`}
  >
    <Card
      className={`p-6 h-full flex flex-col justify-between relative overflow-hidden ${
        highlight
          ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {highlight && (
        <div className="absolute top-2 right-2">
          <Star className="h-5 w-5 text-yellow-500 fill-current" />
        </div>
      )}
      <div>
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
            highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </Card>
  </motion.div>
);

interface BentoAdvantagesProps {
  content: {
    title: string;
    subtitle: string;
    advantages: {
      title: string;
      description: string;
      icon: string;
      highlight?: boolean;
    }[];
  };
}

const IconMap = {
  Zap: <Zap className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
};

export function BentoAdvantages({ content }: BentoAdvantagesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-dark mb-4"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
        {content.advantages.map((advantage, index) => {
          // Define different sizes for bento grid effect
          let gridClass = "";
          if (index === 0)
            gridClass = "lg:col-span-2 lg:row-span-2"; // Large card
          else if (index === 1) gridClass = "lg:col-span-2"; // Wide card
          else if (index === 2) gridClass = "lg:row-span-2"; // Tall card
          else if (index === 3) gridClass = ""; // Regular card
          else if (index === 4) gridClass = "lg:col-span-2"; // Wide card
          else if (index === 5) gridClass = "lg:col-span-2"; // Wide card
          else gridClass = ""; // Regular cards

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={gridClass}
            >
              <AdvantageCard
                title={advantage.title}
                description={advantage.description}
                icon={IconMap[advantage.icon as keyof typeof IconMap]}
                highlight={advantage.highlight}
                className="h-full"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Your Perfect Resume?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of professionals who've landed their dream jobs with
            BuildMeCV
          </p>
          <motion.a
            href="/builder"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Building Now
            <Zap className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
