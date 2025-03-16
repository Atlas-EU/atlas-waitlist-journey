
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-atlas-gray-darkest/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white flex items-center">
            <span className="gradient-text">ATLAS</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">
            Features
          </a>
          <a href="#waitlist" className="text-atlas-gray-light hover:text-atlas-green-strong transition-colors">
            Join Waitlist
          </a>
        </div>
        
        <a 
          href="#waitlist"
          className="button-glow bg-atlas-gray-dark hover:bg-atlas-gray-medium border border-atlas-gray-unselected/60 hover:border-atlas-green-medium/80 text-white px-5 py-2 rounded-full transition-all duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
