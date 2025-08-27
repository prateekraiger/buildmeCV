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
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="p-6 flex flex-col items-center text-center h-full">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary border border-secondary/30 text-dark mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
        <p className="mt-1 text-gray-700 flex-grow">{children}</p>
        <ul className="mt-4 text-left space-y-2">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              className="flex items-center"
            >
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
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
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-dark mb-12">
        {content.title}
      </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {content.items.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={IconMap[feature.icon as keyof typeof IconMap]}
              title={feature.title}
              benefits={feature.benefits}
            >
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      )}
    </section>
  );
}
