import React, { useRef } from 'react';
import useResumeStore from '../../store/resumeStore';
import { Button } from '../UI';
import { DocumentArrowUpIcon, DocumentArrowDownIcon, ArrowPathIcon } from '../Icons';

export const ImportExport: React.FC = () => {
    const { resume, setResume, resetResume } = useResumeStore();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(resume, null, 2)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${resume.personal.name.replace(/\s+/g, '_')}_resume_data.json`;
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
                if (typeof text === 'string') {
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
                alert("Failed to read the file. Please make sure it's a valid JSON file.");
            }
        };
        reader.readAsText(file);
        // Reset file input value to allow re-uploading the same file
        event.target.value = '';
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset all data? This cannot be undone.")) {
            resetResume();
        }
    }

    return (
        <div>
            <h4 className="text-md font-semibold text-secondary mb-2">Data Management</h4>
            <div className="flex flex-wrap items-center gap-2 p-2 bg-primary border border-secondary/20 rounded-lg">
                 <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="application/json"
                    className="hidden"
                />
                <Button variant="secondary" onClick={handleImportClick} title="Import from JSON">
                    <DocumentArrowUpIcon className="w-5 h-5"/> Import
                </Button>
                <Button variant="secondary" onClick={handleExport} title="Export to JSON">
                    <DocumentArrowDownIcon className="w-5 h-5" /> Export
                </Button>
                <Button variant="danger" onClick={handleReset} title="Reset All Data">
                     <ArrowPathIcon className="w-5 h-5" /> Reset
                </Button>
            </div>
        </div>
    );
};