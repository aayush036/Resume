import React from "react";
import { portfolioData } from "../data/portfolioData.js";

const Footer = () => {
    return (
        <footer className="bg-black py-8 text-center border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                </p>

                <p className="text-gray-600 text-xs mt-2">
                    Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
