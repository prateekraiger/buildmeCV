import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import useResumeStore from '../../store/resumeStore';
import { Button } from '../UI';
import { DownloadIcon } from '../Icons';
import { ResumePdfDocument } from '../pdf/ResumePdfDocument';

export const DownloadButton: React.FC = () => {
    const { resume } = useResumeStore();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Button disabled>Loading PDF...</Button>;
    }

    return (
        <PDFDownloadLink
            document={<ResumePdfDocument resume={resume} />}
            fileName={`${resume.personal.name.replace(/\s+/g, '_')}_Resume.pdf`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold text-sm shadow-md transition duration-150 ease-in-out bg-accent text-white hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent"
        >
            {({ loading }) => (
                loading ? 'Generating...' : <><DownloadIcon className="w-5 h-5" /> Download PDF</>
            )}
        </PDFDownloadLink>
    );
};