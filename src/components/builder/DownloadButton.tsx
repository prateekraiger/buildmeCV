import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import useResumeStore from "../../store/resumeStore";
import { Button } from "../UI";
import { DownloadIcon } from "../Icons";
import { ResumePdfDocument } from "../pdf/ResumePdfDocument";

export const DownloadButton: React.FC = () => {
  const { resume } = useResumeStore();
  const [isClient, setIsClient] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Button disabled>Loading PDF...</Button>;
  }

  // Validate required fields
  if (!resume.personal.name || !resume.personal.email) {
    return (
      <Button
        disabled
        title="Please fill in your name and email to download PDF"
      >
        <DownloadIcon className="w-5 h-5" /> Complete Profile First
      </Button>
    );
  }

  if (pdfError) {
    return (
      <Button
        variant="danger"
        onClick={() => {
          setPdfError(null);
          window.location.reload();
        }}
        title="Click to refresh and try again"
      >
        PDF Error - Refresh Page
      </Button>
    );
  }

  // Create PDF document with error handling
  let pdfDocument;
  try {
    pdfDocument = <ResumePdfDocument resume={resume} />;
  } catch (error) {
    console.error("PDF Document Creation Error:", error);
    setPdfError("Failed to create PDF document");
    return null;
  }

  return (
    <PDFDownloadLink
      document={pdfDocument}
      fileName={`${resume.personal.name.replace(/\s+/g, "_")}_Resume.pdf`}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold text-sm shadow-md transition duration-150 ease-in-out bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {({ loading, error: linkError }) => {
        // Handle errors from PDFDownloadLink
        if (linkError) {
          console.error("PDF Generation Error:", linkError);
          return (
            <span
              onClick={() => window.location.reload()}
              className="cursor-pointer"
              title="Click to refresh and try again"
            >
              PDF Error - Click to Retry
            </span>
          );
        }

        return loading ? (
          <span>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generating PDF...
          </span>
        ) : (
          <>
            <DownloadIcon className="w-5 h-5" /> Download PDF
          </>
        );
      }}
    </PDFDownloadLink>
  );
};
