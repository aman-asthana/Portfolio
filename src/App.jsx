import { useState } from 'react'
import NavHeader from './components/blocks/nav-header'
import GradientText from './component/GradientText/GradientText'
import { Typewriter } from './components/ui/typewriter'
import { LampContainer } from './components/ui/lamp'
import { Vortex } from './components/ui/vortex'
import { Toggle } from './components/ui/toggle'
import { Moon, Sun } from "lucide-react"
import { motion } from 'framer-motion'

function App() {
  const [theme, setTheme] = useState("light");

  const themes = {
    light: { baseHue: 220 },
    dark: { baseHue: 280 }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="fixed top-6 right-6 z-[100] cursor-pointer">
        <Toggle
          variant="outline"
          className="group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted/20 border-white/20 hover:bg-white/10 transition-colors"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            strokeWidth={2}
            className="shrink-0 scale-0 text-white opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            strokeWidth={2}
            className="absolute shrink-0 scale-100 text-white opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>

      <Vortex
        backgroundColor="#000000"
        particleCount={200}
        rangeY={3000}
        baseSpeed={2}
        rangeSpeed={1}
        baseHue={themes[theme].baseHue}
        baseRadius={1.5}
        rangeRadius={2}
        className="fixed inset-0 w-full h-full min-h-screen"
        containerClassName="!fixed inset-0 min-h-screen"
      />
      
      <NavHeader />
      
      <LampContainer className="bg-transparent">
        <div className="relative z-50 flex flex-col items-center justify-center px-5">
          <div className="text-center space-y-6">
            <GradientText
              colors={["#FF6B6B", "#4ECDC4", "#45B7D1"]}
              animationSpeed={3}
              showBorder={false}
              className="text-7xl font-bold tracking-tight"
            >
              Hello! I'm Aman
            </GradientText>
            
            <div className="flex items-center justify-center gap-2 text-4xl text-gray-200">
              <span>I am a</span>
              <div className="w-[200px] h-[40px] flex items-center">
                <Typewriter
                  text={['Coder', 'Developer', 'Designer']}
                  speed={70}
                  className="text-cyan-400 font-bold"
                  waitTime={2000}
                  deleteSpeed={50}
                  cursorChar="|"
                  cursorClassName="text-cyan-400 animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </LampContainer>

      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center my-8 p-8">
        <div className="relative p-8 rounded-2xl bg-black/20 border border-gray-700/50 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-cyan-400">
                About Me
              </h2>
              <p className="text-lg text-gray-300">
                I'm a passionate developer who loves to create beautiful and functional web applications. 
                With expertise in modern web technologies, I focus on delivering high-quality solutions.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
                >
                  {/* Add social icons here */}
                </motion.a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-r from-black/30 to-gray-900/30 transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
