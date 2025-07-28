import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FaqSectionProps {
  content: {
    title: string;
    faqs: {
      question: string;
      answer: string;
      category: string;
    }[];
  };
}

export function FaqSection({ content }: FaqSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(content.faqs.map((faq) => faq.category)),
  ];

  const filteredFaqs = content.faqs
    .filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (faq) => selectedCategory === "All" || faq.category === selectedCategory
    );

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-16">
      <h2 className="text-3xl font-bold text-center text-dark mb-8">
        {content.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <div className="flex flex-wrap gap-2">
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

      <Accordion type="single" collapsible className="w-full">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
