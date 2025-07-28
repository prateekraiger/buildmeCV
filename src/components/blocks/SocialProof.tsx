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
  <div className="text-center">
    <p className="text-4xl font-bold text-primary">
      <AnimatedCounter to={value} suffix={suffix} />
    </p>
    <p className="text-lg text-gray-600">{label}</p>
  </div>
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
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center h-full flex flex-col justify-between">
    <div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-lg italic text-gray-700 mb-4">&quot;{quote}&quot;</p>
    </div>
    <div>
      <p className="font-semibold text-dark">{author}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

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
    <section className="max-w-4xl mx-auto space-y-16">
      <h2 className="text-3xl font-bold text-center text-dark mb-8">
        {content.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.stats.map((stat, index) => (
          <Stat
            key={index}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>

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
