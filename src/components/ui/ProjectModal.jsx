import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ images, isOpen, onClose, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-5xl w-full bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 p-6 pb-4 border-b border-white/10"
            >
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    {title}
                    </h3>
                    <p className="text-gray-400 mt-1">{description}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                    <FaTimes size={20} />
                </button>
                </div>
            </motion.div>

            {/* Image Carousel */}
            <div className="relative">
              <motion.div 
                className="relative h-[70vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentImageIndex]}
                  alt={`${title} preview ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-neutral-950/50"
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={previousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <FaChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      <FaChevronRight size={20} />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm text-white/80">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </motion.div>

              {/* Dot Indicators */}
              {images.length > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-4"
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-[1px] h-[1px] rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-60' 
                          : 'bg-white/20 hover:bg-white/40 scale-50'
                      }`}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;