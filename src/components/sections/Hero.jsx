import GradientText from '../ui/GradientText'
import { Typewriter } from '../ui/typewriter'
import { motion } from 'framer-motion'
import SocialIcons from '../ui/SocialIcons'
import { ImNewTab } from "react-icons/im";
import CircularText from '../ui/CircularText';


const Hero = () => {
  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-left lg:text-left space-y-6 order-2 lg:order-1">
          <div className="flex items-start justify-start lg:justify-start">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#ffaa40", "#9c40ff", "#40ffaa"]}
              className="text-5xl lg:text-6xl font-bold "
            >
              Hello! I&apos;m Aman Asthana
            </GradientText>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 text-3xl lg:text-4xl text-gray-200">
            <span>I am a</span>
            <div className="w-[200px] h-[40px] flex items-center">
              <Typewriter
                text={['Coder', 'Developer', 'Designer', 'QuickLearner']}
                speed={70}
                className="text-yellow-400 font-bold"
                waitTime={2000}
                deleteSpeed={50}
                cursorChar="_"
                cursorClassName="text-yellow-400 animate-pulse"
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
            Passionate about creating beautiful and functional web applications. 
            Specialized in modern web technologies and user-centric design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1Y9OWbP-bCLWhdMJs8QiIaQZB1aqJSgHe/view?usp=sharing"
              target='__blank'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-gray-800/50 transition-colors flex items-center gap-2"
            >
              <span>My Resume</span> <ImNewTab />
            </motion.a>
          </div>

          <div className="pt-4">
            <SocialIcons />
          </div>
        </div>

        {/* Right side - Stylized Avatar */}
        <motion.div 
          className="order-1 lg:order-2 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Background glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse delay-75" />
            
            {/* Avatar container with multiple borders */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 blur-md animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm bg-gradient-to-b from-gray-900/90 to-black flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircularText
                    text="CODE*DEBUG*REPEAT*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] text-cyan-400/80 font-bold"
                  />
                </div>
                {/* Stylized initials */}
                <div className="relative z-10">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">A</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">M</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">A</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">N</span>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm" />
                </div>
              </div>
            </div>

            {/* Floating badges with updated styling */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-cyan-400">⚡️ Developer</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-yellow-400">🎨 Designer</span>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500 rounded-full blur-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero