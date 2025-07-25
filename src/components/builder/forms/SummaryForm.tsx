import React from 'react';
import useResumeStore from '../../../store/resumeStore';
import { Textarea } from '../../UI';
import { AIButton } from './AIButton';

export const SummaryForm: React.FC = () => {
    const { resume, updateField } = useResumeStore();
    const { summary } = resume;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateField('summary', e.target.value);
    };

    const handleSuccess = (enhancedText: string) => {
        updateField('summary', enhancedText);
    };

    return (
        <div className="relative">
            <Textarea 
                label="Professional Summary" 
                id="summary"
                value={summary}
                onChange={handleChange}
                rows={5}
                placeholder="A brief, 2-3 sentence summary of your skills and career goals."
            />
            <AIButton
                textToEnhance={summary}
                onSuccess={handleSuccess}
                promptType="summary"
            />
        </div>
    );
};
