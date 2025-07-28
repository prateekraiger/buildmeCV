import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/UI";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface TechnologyShowcaseProps {
  content: {
    title: string;
    technologies: {
      name: string;
      icon: string;
      description: string;
      category: string;
    }[];
    contributionCta: {
      title: string;
      description: string;
      buttonText: string;
      githubUrl: string;
    };
  };
}

const TechnologyCard = ({
  name,
  icon,
  description,
}: {
  name: string;
  icon: string;
  description: string;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="h-full"
  >
    <Card className="p-6 flex flex-col items-center text-center h-full">
      <div className="text-primary mb-4 text-5xl">{icon}</div>
      <h3 className="text-xl font-semibold text-dark mb-2">{name}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
    </Card>
  </motion.div>
);

export function TechnologyShowcase({ content }: TechnologyShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(content.technologies.map((t) => t.category)),
  ];

  const filteredTechnologies = content.technologies
    .filter((tech) =>
      tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (tech) => selectedCategory === "All" || tech.category === selectedCategory
    );

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-16">
      <h2 className="text-3xl font-bold text-center text-dark mb-8">
        {content.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter technologies"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredTechnologies.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </motion.div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-dark mb-4">
          {content.contributionCta.title}
        </h3>
        <p className="text-gray-700 mb-6">
          {content.contributionCta.description}
        </p>
        <Button asChild>
          <a
            href={content.contributionCta.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5" />
            {content.contributionCta.buttonText}
          </a>
        </Button>
      </div>
    </section>
  );
}
