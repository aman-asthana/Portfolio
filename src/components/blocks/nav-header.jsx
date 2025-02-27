"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full p-4 fixed top-0 z-50">
      <ul
        className="relative mx-auto flex w-fit rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} onClick={() => scrollToSection('home')}>Home</Tab>
        <Tab setPosition={setPosition} onClick={() => scrollToSection('projects')}>Projects</Tab>
        <Tab setPosition={setPosition} onClick={() => scrollToSection('about')}>About</Tab>
        <Tab setPosition={setPosition} onClick={() => scrollToSection('skills')}>Skills</Tab>
        <Tab setPosition={setPosition} onClick={() => scrollToSection('contact')}>Contact</Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium text-white/90 mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
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