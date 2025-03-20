
import { AnimatePresence } from 'framer-motion';
import NavHeader from './components/ui/navHeader';
import { Vortex } from './components/ui/vortex';
import Loader, { useLoader } from './components/ui/Loader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import { ThemeProvider } from './context/ThemeContext';





function AppContent() {
  const isLoading = useLoader();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <div 
        className={`relative min-h-screen transition-all duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative min-h-screen transition-colors duration-300 bg-black overflow-x-hidden">
          <Vortex
            backgroundColor={"#000000"}
            particleCount={"50"}
            rangeY={10000}
            baseSpeed={0.1}
            rangeSpeed={0.5}
            baseHue={100}
            baseRadius={1}
            rangeRadius={1.5}
            className="fixed inset-0 w-full h-full min-h-screen transition-opacity duration-500"
            containerClassName="!fixed inset-0 min-h-screen"
          />
          
          
          <div className="relative z-10 w-full flex flex-col min-h-screen">
            <NavHeader />
            <main className="w-full flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;