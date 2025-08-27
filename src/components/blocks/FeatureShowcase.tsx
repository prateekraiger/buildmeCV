import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/UI";
import {
  SparklesIcon,
  RectangleGroupIcon,
  SwatchIcon,
} from "@/components/Icons";
import { History, CheckCircle } from "lucide-react";
import { useResponsive } from "@/lib/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  benefits: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  children,
  benefits,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.3 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="p-8 flex flex-col items-center text-center h-full relative overflow-hidden group bg-white/80 backdrop-blur-sm border border-gray-200/50">
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1
          }}
          transition={{ 
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.2 }
          }}
          className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white mb-6 shadow-lg relative z-10"
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-gray-900 mb-4 relative z-10"
          animate={{ 
            color: isHovered ? "#3b82f6" : "#111827" 
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-gray-600 flex-grow mb-6 leading-relaxed relative z-10">{children}</p>
        
        <motion.ul 
          className="text-left space-y-3 w-full relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ x: 5 }}
              className="flex items-center cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              </motion.div>
              <span className="text-gray-700">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Card>
    </motion.div>
  );
};

interface FeatureShowcaseProps {
  content: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
      benefits: string[];
    }[];
  };
}

const IconMap = {
  RectangleGroupIcon: <RectangleGroupIcon className="w-6 h-6" />,
  SwatchIcon: <SwatchIcon className="w-6 h-6" />,
  SparklesIcon: <SparklesIcon className="w-6 h-6" />,
  History: <History className="w-6 h-6" />,
};

export function FeatureShowcase({ content }: FeatureShowcaseProps) {
  const isMobile = !useResponsive("md");

  return (
    <section className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
        >
          <SparklesIcon className="w-4 h-4" />
          Powerful Features
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to create professional resumes that get you hired
        </p>
      </motion.div>
      {isMobile ? (
        <Carousel role="region" aria-label="Feature Showcase">
          <CarouselContent>
            {content.items.map((feature, index) => (
              <CarouselItem key={index}>
                <FeatureCard
                  icon={IconMap[feature.icon as keyof typeof IconMap]}
                  title={feature.title}
                  benefits={feature.benefits}
                >
                  {feature.description}
                </FeatureCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {content.items.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FeatureCard
                icon={IconMap[feature.icon as keyof typeof IconMap]}
                title={feature.title}
                benefits={feature.benefits}
              >
                {feature.description}
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
