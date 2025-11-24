import React from "react";
import SectionContainer from "./SectionContainer.jsx";
import { portfolioData } from "../data/portfolioData.js";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
    const { about, socials, skills } = portfolioData;

    const getIcon = (iconName) => {
        switch (iconName) {
            case "Github":
                return <Github size={20} />;
            case "Linkedin":
                return <Linkedin size={20} />;
            case "Twitter":
                return <Twitter size={20} />;
            default:
                return <Github size={20} />;
        }
    };

    return (
        <SectionContainer id="about" className="bg-dark-900">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-2xl bg-primary rotate-6 opacity-20 blur-sm"></div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 rotate-3"></div>
                        <img
                            src={about.profileImage}
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-gray-800/50"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="order-1 md:order-2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Passionate about creating seamless web experiences.
                    </h2>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        {about.text.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Skills Panel */}
                    {skills && skills.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                                Tech Stack
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex flex-col items-center justify-center p-3 bg-dark-800 border border-white/5 rounded-lg hover:border-primary/50 hover:bg-dark-800/80 transition-all min-w-[70px]"
                                        title={skill.name}
                                    >
                                        <i
                                            className={`${skill.iconClass} text-2xl text-gray-400 group-hover:text-primary transition-colors duration-300`}
                                        ></i>

                                        <span className="text-[10px] text-gray-500 mt-2 font-mono uppercase tracking-tighter group-hover:text-gray-300 transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Social Icons */}
                    <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                        {socials.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-primary/20 transition-all"
                                aria-label={social.platform}
                            >
                                {getIcon(social.icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
