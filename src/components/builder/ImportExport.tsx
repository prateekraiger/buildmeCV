import React, { useRef } from "react";
import useResumeStore from "../../store/resumeStore";
import { Button } from "../UI";
import {
  DocumentArrowUpIcon,
  DocumentArrowDownIcon,
  ArrowPathIcon,
} from "../Icons";

export const ImportExport: React.FC = () => {
  const { resume, setResume, resetResume } = useResumeStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(resume, null, 2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${resume.personal.name.replace(
      /\s+/g,
      "_"
    )}_resume_data.json`;
    link.click();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text === "string") {
          const importedResume = JSON.parse(text);
          // Basic validation
          if (importedResume.personal && importedResume.sectionOrder) {
            setResume(importedResume);
          } else {
            alert("Invalid resume data file.");
          }
        }
      } catch (error) {
        console.error("Failed to parse JSON", error);
        alert(
          "Failed to read the file. Please make sure it's a valid JSON file."
        );
      }
    };
    reader.readAsText(file);
    // Reset file input value to allow re-uploading the same file
    event.target.value = "";
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all data? This cannot be undone."
      )
    ) {
      resetResume();
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-dark mb-3 flex items-center">
        <span className="w-2 h-6 bg-accent rounded-full mr-3"></span>
        Data Management
      </h4>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="application/json"
          className="hidden"
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="secondary"
            onClick={handleImportClick}
            title="Import resume data from JSON file"
            className="bg-white/80 hover:bg-white border-blue-300 text-blue-700 hover:text-blue-800"
          >
            <DocumentArrowUpIcon className="w-5 h-5" /> Import
          </Button>
          <Button
            variant="secondary"
            onClick={handleExport}
            title="Export resume data to JSON file"
            className="bg-white/80 hover:bg-white border-green-300 text-green-700 hover:text-green-800"
          >
            <DocumentArrowDownIcon className="w-5 h-5" /> Export
          </Button>
          <Button
            variant="danger"
            onClick={handleReset}
            title="Reset all data (cannot be undone)"
            className="bg-red-50 hover:bg-red-100 border-red-300 text-red-700 hover:text-red-800"
          >
            <ArrowPathIcon className="w-5 h-5" /> Reset
          </Button>
        </div>
        <p className="text-xs text-blue-600/80 mt-3 font-medium">
          💾 Save your progress or load previous work • Export creates a backup
          file • Reset clears all data
        </p>
      </div>
    </div>
  );
};
