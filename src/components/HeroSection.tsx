import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const glowElements = document.querySelectorAll('.glow-effect');
      glowElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-atlas-gray-darkest">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-atlas-gray-darkest via-atlas-gray-dark to-atlas-gray-darkest opacity-80"></div>
        {/* No green blobs for mobile or desktop */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Hero text content */}
          <div className="flex flex-col justify-center items-center text-center w-full lg:w-[60%] lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-in-right">
              <span className="gradient-text">Your muscle journey</span>
              <br />
              One simple app
            </h1>
            <p className="text-atlas-gray-light text-lg mb-8 max-w-lg mx-auto animate-slide-in-right">
              Build routines, train with purpose, and track your progress—Atlas removes the overthinking.
            </p>
            {/* Mobile iPhone image with green background */}
            <div className="flex lg:hidden w-full justify-center items-center relative mb-6">
              <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="w-[320px] h-[180px] rounded-full bg-atlas-green-strong/60 blur-[60px]"></div>
              </div>
              <img
                src="/images/iphone-app-mockup.png"
                alt="Atlas app on iPhone"
                className="max-h-[320px] w-auto drop-shadow-2xl relative"
              />
            </div>
            {/* Download Now text (hidden on mobile) */}
            <div className="animate-slide-in-right mb-4 hidden lg:flex">
              <span className="text-atlas-green-strong font-semibold text-lg">Download Now</span>
            </div>
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-in-right">
              <a 
                href="https://apps.apple.com/app/atlas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.atlas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
            {/* See Features CTA */}
            <button 
              onClick={scrollToFeatures}
              className="inline-flex items-center gap-2 text-atlas-gray-light hover:text-atlas-green-strong transition-colors mx-auto animate-slide-in-right"
            >
              <span>See features</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
          {/* Right iPhone image for desktop */}
          <div className="hidden lg:flex w-2/5 justify-center items-center relative">
            {/* More intense green background blob around the image */}
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[500px] h-[500px] rounded-full bg-atlas-green-strong/60 blur-[140px]"></div>
            </div>
            <img
              src="/images/iphone-app-mockup.png"
              alt="Atlas app on iPhone"
              className="max-h-[520px] w-auto drop-shadow-2xl relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
