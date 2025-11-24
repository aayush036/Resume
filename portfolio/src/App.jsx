import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/PreLoader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the signature animation to complete
    // Animation timing: ~2.5s delay + animation duration + small buffer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-900 min-h-screen text-white">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;