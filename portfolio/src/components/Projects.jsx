import React from "react";
import SectionContainer from "./SectionContainer.jsx";
import { projectsData } from "../data/portfolioData.js";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
    return (
        <SectionContainer id="projects">
            <div className="flex flex-col items-center mb-16 text-center">
                <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
                    My Work
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Featured Projects
                </h2>
                <p className="text-gray-400 mt-4 max-w-lg">
                    A selection of projects that I've built to demonstrate my skills and
                    passion for development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                    >
                        {/* Project Image */}
                        {project.imageUrl && (
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        )}

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-primary" size={32} />

                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label="GitHub Repo"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-primary/90 bg-primary/10 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
