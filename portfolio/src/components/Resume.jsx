import React from "react";
import SectionContainer from "./SectionContainer.jsx";
import { portfolioData } from "../data/portfolioData.js";
import { Download, FileText } from "lucide-react";

const Resume = () => {
    return (
        <SectionContainer id="resume">
            <div className="flex flex-col items-center mb-12 text-center">
                <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
                    Qualifications
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    My Resume
                </h2>
            </div>

            <div className="w-full max-w-5xl mx-auto bg-dark-800 rounded-xl border border-white/10 overflow-hidden flex flex-col">
                {/* Header Bar */}
                <div className="p-4 bg-dark-700 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-300">
                        <FileText size={20} className="text-primary" />
                        <span className="font-mono text-sm">resume.pdf</span>
                    </div>

                    <a
                        href={portfolioData.resumeUrl}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-md text-sm font-medium transition-colors"
                    >
                        <Download size={16} />
                        Download
                    </a>
                </div>

                {/* PDF Viewer */}
                <div className="relative w-full h-[500px] md:h-[800px] bg-gray-900">
                    <iframe
                        src={`${portfolioData.resumeUrl}#toolbar=0`}
                        className="absolute inset-0 w-full h-full"
                        title="Resume PDF"
                    >
                        <div className="flex flex-col items-center justify-center h-full text-center p-8">
                            <p className="text-gray-400 mb-4">Unable to load PDF viewer.</p>
                            <a
                                href={portfolioData.resumeUrl}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open Resume in New Tab
                            </a>
                        </div>
                    </iframe>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Resume;
