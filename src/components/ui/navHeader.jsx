"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState('home');
  const [prevSection, setPrevSection] = useState('home');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = sections[0];
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      if (currentSection !== activeSection) {
        setPrevSection(activeSection);
        setActiveSection(currentSection);
      }
    };

    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    let timeoutId = null;
    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    setPrevSection(activeSection);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex relative mx-auto w-fit rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-1"
          onMouseLeave={() => {
            setPosition((pv) => ({ ...pv, opacity: 0 }));
            setIsHovering(false);
          }}
          onMouseEnter={() => setIsHovering(true)}
        >
          <Tab setPosition={setPosition} onClick={() => scrollToSection('home')} isActive={activeSection === 'home'}>Home</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('about')} isActive={activeSection === 'about'}>About</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('skills')} isActive={activeSection === 'skills'}>Skills</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('projects')} isActive={activeSection === 'projects'}>Projects</Tab>
          <Tab setPosition={setPosition} onClick={() => scrollToSection('contact')} isActive={activeSection === 'contact'}>Contact</Tab>
          <Cursor position={position} isVisible={isHovering} />
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-black/90 backdrop-blur-lg rounded-lg border border-white/10"
            >
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item.toLowerCase()
                          ? 'bg-white/20 text-white'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}

const Tab = ({ children, setPosition, onClick, isActive }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft,
      });
    }
  }, [isActive, setPosition]);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 flex items-center gap-4 cursor-pointer px-6 py-1.5 text-xs font-medium text-white/90 mix-blend-difference md:px-8 md:py-3 md:text-base group"
    >
      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.5,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        className="absolute left-3 md:left-5 w-1.5 h-1.5 rounded-full bg-green-500"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
      </motion.div>
      <span className="relative z-10 ml-2 md:ml-3 transition-transform duration-200 ease-out">
        {children}
      </span>
    </li>
  );
};

const Cursor = ({ position, isVisible }) => {
  return (
    <motion.li
      animate={{
        ...position,
        opacity: isVisible ? position.opacity : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      className="absolute z-0 h-7 rounded-full bg-white/20 backdrop-blur-sm md:h-12"
    />
  );
};

export default NavHeader;