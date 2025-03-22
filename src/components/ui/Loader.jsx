import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { trefoil } from 'ldrs';

trefoil.register();

// Custom hook for loading state
export const useLoader = () => {
  const [loading, setLoading] = useState(true);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const checkComponentsLoaded = () => {
      const images = document.getElementsByTagName('img');
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        setComponentsLoaded(true);
        return;
      }

      const imageLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setComponentsLoaded(true);
        }
      };

      Array.from(images).forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', imageLoaded);
        }
      });

      if (loadedImages === totalImages) {
        setComponentsLoaded(true);
      }
    };

    if (document.readyState !== 'loading') {
      checkComponentsLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', checkComponentsLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', checkComponentsLoaded);
    };
  }, []);

  useEffect(() => {
    if (componentsLoaded) {
      const transitionTimeout = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(transitionTimeout);
    }
  }, [componentsLoaded]);

  return loading;
};

// Loader component
const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div 
        className="relative"
        animate={{
          scale: [1, 1, 1],
          rotate: [360, 0, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <l-trefoil
          size="50"
          stroke="5"
          stroke-length="0.10"
          bg-opacity="0.05"
          speed="0.1" 
          color="cyan"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;