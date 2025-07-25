import React from 'react';
import useResumeStore from '../../../store/resumeStore';
import { ModernPreview } from './templates/ModernPreview';
import { ClassicPreview } from './templates/ClassicPreview';

export const LivePreview: React.FC = () => {
    const { resume } = useResumeStore();
    const { template, accentColor } = resume;

    const PreviewComponent = template === 'classic' ? ClassicPreview : ModernPreview;

    return (
        <div 
            className="w-full aspect-[8.5/11] bg-background-light shadow-2xl rounded-lg overflow-y-auto text-sm text-primary transition-all duration-300"
            style={{'--accent-color': accentColor} as React.CSSProperties}
        >
           <PreviewComponent resume={resume} />
        </div>
    );
};