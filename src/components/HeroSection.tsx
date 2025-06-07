
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
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-atlas-green-strong/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 rounded-full bg-atlas-green-medium/5 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - App screenshot placeholder */}
          <div className="relative mx-auto animate-slide-in-left order-2 md:order-1">
            <div className="relative z-10 w-full max-w-sm mx-auto">
              {/* iPhone mockup */}
              <div className="relative aspect-[9/19.5] w-full rounded-[3rem] overflow-hidden bg-black shadow-2xl border-[6px] border-gray-800">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                
                {/* Screen content area - ready for app screenshot */}
                <div className="absolute inset-2 bg-atlas-gray-medium rounded-[2.5rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-atlas-gray-dark to-atlas-gray-medium flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-atlas-green-strong text-4xl font-bold mb-4 animate-pulse-subtle">
                        ATLAS
                      </div>
                      <div className="space-y-3">
                        <div className="glass p-3 rounded-lg">
                          <div className="h-2 w-3/4 bg-atlas-green-medium/40 rounded-full mb-2"></div>
                          <div className="h-2 w-1/2 bg-atlas-green-medium/20 rounded-full"></div>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <div className="h-2 w-2/3 bg-atlas-green-medium/40 rounded-full mb-2"></div>
                          <div className="h-2 w-3/4 bg-atlas-green-medium/20 rounded-full"></div>
                        </div>
                        <div className="glass p-3 rounded-lg">
                          <div className="h-2 w-1/2 bg-atlas-green-medium/40 rounded-full mb-2"></div>
                          <div className="h-2 w-2/3 bg-atlas-green-medium/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* iPhone home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl rotate-12 animate-float opacity-80 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 glass rounded-2xl -rotate-12 animate-float opacity-60 z-0" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center text-center animate-slide-in-right order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-reveal delay-1">
              <span className="gradient-text">Your entire muscle journey</span>, one simple app
            </h1>
            <p className="text-atlas-gray-light text-lg mb-8 max-w-lg mx-auto animate-reveal delay-2">
              Build routines, train with purpose, and track your progress—Atlas removes the overthinking.
            </p>
            
            {/* Download Now text */}
            <div className="animate-reveal delay-3 mb-4">
              <span className="text-atlas-green-strong font-semibold text-lg">Download Now</span>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-reveal delay-3">
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
              className="inline-flex items-center gap-2 text-atlas-gray-light hover:text-atlas-green-strong transition-colors mx-auto animate-reveal delay-4"
            >
              <span>See features</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
