import React from 'react';
import SocialIcons from '../ui/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p>© {currentYear} Aman Asthana.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;