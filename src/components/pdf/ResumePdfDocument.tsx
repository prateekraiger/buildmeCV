import React from 'react';
import { Document } from '@react-pdf/renderer';
import type { ResumeData } from '../../types';
import { ModernTemplatePdf } from './templates/ModernTemplatePdf';
import { ClassicTemplatePdf } from './templates/ClassicTemplatePdf';

// Register fonts for PDF - this should be done once
import { Font } from '@react-pdf/renderer';
Font.register({
    family: 'Inter',
    fonts: [
        { src: 'https://rsms.me/inter/font-files/Inter-Regular.woff', fontWeight: 'normal' },
        { src: 'https://rsms.me/inter/font-files/Inter-Italic.woff', fontStyle: 'italic' },
        { src: 'https://rsms.me/inter/font-files/Inter-Bold.woff', fontWeight: 'bold' },
    ]
});


export const ResumePdfDocument: React.FC<{ resume: ResumeData }> = ({ resume }) => {
    
    const PdfTemplate = resume.template === 'classic' ? ClassicTemplatePdf : ModernTemplatePdf;

    return (
        <Document title={`${resume.personal.name} - Resume`} author={resume.personal.name}>
            <PdfTemplate resume={resume} />
        </Document>
    );
};