import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData.js";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            const offsetTop = elem.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled
                    ? "bg-dark-900/80 backdrop-blur-md border-white/10 shadow-lg py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors cursor-pointer"
                >
                    {portfolioData.name.split(" ")[0]}
                    <span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-dark-800 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary font-medium text-lg cursor-pointer"
                            onClick={(e) => scrollToSection(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
