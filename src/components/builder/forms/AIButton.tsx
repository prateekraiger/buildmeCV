import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { SparklesIcon, LoadingSpinner } from "../../Icons";

interface AIButtonProps {
  textToEnhance: string | string[];
  onSuccess: (enhancedText: string) => void;
  promptType?: "description" | "summary";
}

const getPrompt = (
  text: string | string[],
  type: AIButtonProps["promptType"]
): string => {
  const textString = Array.isArray(text) ? text.join("\n") : text;
  switch (type) {
    case "summary":
      return `Rewrite the following professional summary to be more compelling and concise for a resume. Focus on key strengths and career aspirations. Original summary: "${textString}"`;
    case "description":
    default:
      return `Rewrite the following resume description to be more professional and achievement-oriented. Use 2-4 bullet points, starting each with '• '. Original description: "${textString}"`;
  }
};

export const AIButton: React.FC<AIButtonProps> = ({
  textToEnhance,
  onSuccess,
  promptType = "description",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {
    const textString = Array.isArray(textToEnhance)
      ? textToEnhance.join("\n")
      : textToEnhance;
    if (!textString.trim()) {
      setError("Please enter some text first.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const prompt = getPrompt(textToEnhance, promptType);

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const enhancedText = response.text?.trim();
      if (enhancedText) {
        onSuccess(enhancedText);
      } else {
        setError("AI did not return any text. Please try again.");
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      console.error("AI enhancement failed:", err);
      setError("Failed to enhance text. Please try again.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleEnhance}
      disabled={isLoading}
      className="absolute top-0 right-0 mt-1 mr-1 p-1.5 rounded-full bg-primary text-accent hover:bg-secondary/20 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Enhance with AI"
      title={error || "Enhance with AI"}
    >
      {isLoading ? (
        <LoadingSpinner className="w-5 h-5" />
      ) : (
        <SparklesIcon className="w-5 h-5" />
      )}
    </button>
  );
};
