import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData.js';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            const offsetTop = elem.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const firstName = portfolioData.name.split(" ")[0];
    const lastName = portfolioData.name.split(" ").slice(1).join(" ");

    // Generate random active grid cells
    // Grid size is 24px. We generate random positions based on window width estimate
    const gridCells = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.floor(Math.random() * 40) * 2, // Approx columns
        y: Math.floor(Math.random() * 20) * 2, // Approx rows
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
    }));

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden"
        >
            {/* 1. Top Spotlight (Subtle Glow from top) */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>

            {/* 2. Technical Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* 3. Active Grid Cells (Blinking Squares) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none mask-image-gradient">
                {mounted && gridCells.map((cell) => (
                    <motion.div
                        key={cell.id}
                        className="absolute w-[23px] h-[23px] bg-primary/10 border border-primary/20"
                        style={{
                            left: `calc(50% + ${(cell.x - 40) * 24}px)`,
                            top: `calc(${(cell.y) * 24}px)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{
                            duration: cell.duration,
                            repeat: Infinity,
                            delay: cell.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* 4. Radial Vignette (Darken Edges) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)] pointer-events-none"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16 md:mt-0">

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 mx-auto hover:bg-white/10 transition-colors cursor-default shadow-lg shadow-primary/5"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-gray-300 text-xs font-mono uppercase tracking-widest">Available for work</span>
                </motion.div>

                {/* Name Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                >
                    {firstName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{lastName}</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {portfolioData.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <a
                        href="#projects"
                        onClick={(e) => scrollToSection(e, '#projects')}
                        className="group relative px-8 py-4 rounded-full bg-white text-dark-900 font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] flex items-center gap-2 cursor-pointer overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 cursor-pointer font-medium"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Seamless Fade to Next Section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none z-10"></div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
                onClick={(e) => {
                    const elem = document.getElementById('about');
                    if (elem) {
                        const offsetTop = elem.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
                    }
                }}
            >
                <ChevronDown className="text-gray-500 hover:text-white transition-colors" size={28} />
            </motion.div>
        </section>
    );
};

export default Hero;