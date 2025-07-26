import React from 'react';
import { Document } from '@react-pdf/renderer';
import type { ResumeData } from '../../types';
import { ModernTemplatePdf } from './templates/ModernTemplatePdf';
import { ClassicTemplatePdf } from './templates/ClassicTemplatePdf';


export const ResumePdfDocument: React.FC<{ resume: ResumeData }> = ({ resume }) => {
    
    const PdfTemplate = resume.template === 'classic' ? ClassicTemplatePdf : ModernTemplatePdf;

    return (
        <Document title={`${resume.personal.name} - Resume`} author={resume.personal.name}>
            <PdfTemplate resume={resume} />
        </Document>
    );
};