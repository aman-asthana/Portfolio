"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "./toggle";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div 
      className="fixed top-6 right-6 z-[100]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Toggle
        variant="outline"
        className={`group size-10 rounded-full backdrop-blur-md border transition-all duration-300
          ${theme === 'dark' 
            ? 'bg-white/10 border-white/20 hover:bg-white/20' 
            : 'bg-black/10 border-black/20 hover:bg-black/20'
          }`}
        pressed={theme === "dark"}
        onPressedChange={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 360 : 0,
            scale: 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Moon
              size={18}
              className={`transition-all duration-300 group-hover:scale-110
                ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            />
          ) : (
            <Sun
              size={18}
              className={`transition-all duration-300 group-hover:scale-110
                ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            />
          )}
        </motion.div>
      </Toggle>
    </motion.div>
  );
};

export default ThemeToggle; 