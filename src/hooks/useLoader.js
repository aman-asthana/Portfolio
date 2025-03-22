import { useState, useEffect } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for smoother transition
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return isLoading;
};