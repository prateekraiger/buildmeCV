import React, { useState } from "react";
import useResumeStore from "../../../store/resumeStore";
import { Input, Button } from "../../UI";
import { PlusIcon, TrashIcon, SparklesIcon, LoadingSpinner } from "../../Icons";
import type { ResumeData } from "../../../types";
import { GoogleGenAI } from "@google/genai";
import { AnimatePresence } from "framer-motion";

interface SimpleListFormProps {
  list: Array<{ id: string; name: string }>;
  listKey: keyof ResumeData;
  label: string;
  suggestable?: boolean;
}

export const SimpleListForm: React.FC<SimpleListFormProps> = ({
  list,
  listKey,
  label,
  suggestable = false,
}) => {
  const { resume, addListItem, removeListItem } = useResumeStore();
  const [newItem, setNewItem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = () => {
    if (newItem.trim()) {
      addListItem(listKey, {
        id: `${listKey}${Date.now()}`,
        name: newItem.trim(),
      });
      setNewItem("");
    }
  };

  const handleSuggestSkills = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const prompt = `Based on the job title "${resume.personal.title}", suggest 5-7 relevant key skills. Provide them as a single comma-separated string (e.g., skill1, skill2, skill3).`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const suggestedSkillsText = response.text?.trim();
      if (!suggestedSkillsText) {
        setError("AI did not return any skills. Please try again.");
        setTimeout(() => setError(null), 3000);
        setIsLoading(false);
        return;
      }
      const existingSkills = new Set(list.map((s) => s.name.toLowerCase()));
      const newSkills = suggestedSkillsText
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s && !existingSkills.has(s.toLowerCase()));

      newSkills.forEach((skillName) => {
        addListItem(listKey, {
          id: `${listKey}${Date.now()}${skillName}`,
          name: skillName,
        });
      });
      if (newSkills.length === 0) {
        setError("No new skills to add.");
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      console.error("AI skill suggestion failed:", err);
      setError("Failed to suggest skills.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-end gap-2 mb-4">
        <div className="flex-grow">
          <Input
            label={`New ${label}`}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
        </div>
        <Button
          variant="secondary"
          onClick={handleAdd}
          aria-label={`Add ${label}`}
          className="h-[42px]"
        >
          <PlusIcon className="w-5 h-5" />
        </Button>
        {suggestable && (
          <Button
            variant="secondary"
            onClick={handleSuggestSkills}
            disabled={isLoading}
            aria-label="Suggest skills with AI"
            title="Suggest skills with AI"
            className="h-[42px]"
          >
            {isLoading ? (
              <LoadingSpinner className="w-5 h-5" />
            ) : (
              <SparklesIcon className="w-5 h-5" />
            )}
          </Button>
        )}
      </div>
      {error && (
        <p className="text-red-400 text-xs mb-2 text-center">{error}</p>
      )}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {list.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-1 bg-white border border-primary text-foreground rounded-full px-3 py-1 text-sm"
            >
              <span>{item.name}</span>
              <button
                onClick={() => removeListItem(listKey, item.id)}
                className="text-secondary hover:text-accent-dark"
              >
                <TrashIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
