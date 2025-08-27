import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const AnimatedCounter = ({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const animation = controls.start({
        val: to,
        transition: { duration: 2, ease: "easeOut" },
      });

      const updateCount = (latest: any) => {
        setCount(Math.round(latest.val));
      };

      const unsubscribe = controls.subscribe(updateCount);

      return () => {
        unsubscribe();
        animation.stop();
      };
    }
  }, [inView, controls, to]);

  return (
    <motion.span ref={ref} initial={{ val: 0 }} animate={controls}>
      {count}
      {suffix}
    </motion.span>
  );
};

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, suffix }) => (
  <motion.div 
    className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.p 
      className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <AnimatedCounter to={value} suffix={suffix} />
    </motion.p>
    <p className="text-lg text-gray-600 font-medium">{label}</p>
  </motion.div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  title,
  rating,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 text-center h-full flex flex-col justify-between relative overflow-hidden"
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="flex justify-center mb-6"
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
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0]
              }}
              transition={{ 
                scale: { duration: 0.2 },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              <Star
                className={`h-6 w-6 mx-0.5 cursor-default ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p 
          className="text-lg italic text-gray-700 mb-6 leading-relaxed"
          animate={{ 
            color: isHovered ? "#1f2937" : "#374151" 
          }}
          transition={{ duration: 0.2 }}
        >
          &quot;{quote}&quot;
        </motion.p>
      </div>
      
      <motion.div 
        className="relative z-10"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="font-bold text-gray-900 text-lg">{author}</p>
        <p className="text-sm text-gray-500 mt-1">{title}</p>
      </motion.div>
    </motion.div>
  );
};

interface SocialProofProps {
  content: {
    title: string;
    stats: {
      value: number;
      label: string;
      suffix?: string;
    }[];
    testimonials: {
      quote: string;
      author: string;
      title: string;
      rating: number;
    }[];
  };
}

export function SocialProof({ content }: SocialProofProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
        >
          <Star className="w-4 h-4" />
          Trusted by Thousands
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of professionals who've successfully landed their dream jobs
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
        {content.stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Stat
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          </motion.div>
        ))}
      </motion.div>

      <Carousel opts={{ loop: true }} role="region" aria-label="Testimonials">
        <CarouselContent>
          {content.testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                rating={testimonial.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
