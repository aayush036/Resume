import React from 'react';
import { motion } from 'framer-motion';

const SectionContainer = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-28 w-full ${className}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionContainer;
