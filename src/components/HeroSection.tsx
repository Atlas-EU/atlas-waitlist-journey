import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { ArrowDown, Rocket } from 'lucide-react';
import EarlyAccessDialog from './EarlyAccessDialog';

const HeroSection = () => {
  useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  
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
      style={{ backgroundColor: '#1F2024' }}
    >
      {/* Removed gradient background effect */}

      <EarlyAccessDialog open={showEarlyAccess} onClose={() => setShowEarlyAccess(false)} />
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-6">
          {/* Hero text content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 lg:pr-0">
            <h1 className="font-inter text-[36px] lg:text-[60px] leading-[44px] lg:leading-[68px] font-bold mb-4 animate-slide-in-right text-center lg:text-left">
              <span style={{ color: '#47FF00' }}>Building Muscle</span>
              <br />
              Made Easy
            </h1>
            <p className="font-inter text-[18px] leading-[24px] font-normal mb-2 max-w-lg mx-auto lg:mx-0 animate-slide-in-right text-center lg:text-left" style={{ color: 'rgb(143 144 152 / var(--tw-text-opacity, 1))' }}>
              Create your plan, show up & beat the logbook.
              <br />Atlas removes the overthinking.
            </p>
            {/* Mobile iPhone image with green background */}
            <div className="flex w-full justify-center items-center relative mb-0 mt-0 lg:mb-2 lg:hidden">
              <img
                src="/images/iphone-mockup-2.png"
                alt="Atlas app on iPhone"
                className="w-auto max-h-none lg:max-h-[400px] drop-shadow-2xl -translate-x-5"
                style={{ display: 'block' }}
              />
            </div>
            {/* Early access button */}
            <div className="w-full flex justify-center lg:justify-start mb-8 animate-slide-in-right mt-2 lg:mt-4">
              <button
                type="button"
                onClick={() => setShowEarlyAccess(true)}
                className="bg-atlas-green-strong text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-atlas-green-strong/80 transition-colors text-base flex items-center gap-2"
              >
                Get Early Access
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Right iPhone image for desktop */}
          <div className="hidden lg:flex w-full lg:w-4/5 justify-center items-center relative">
            <div className="flex items-center justify-center w-auto h-[600px] relative">
              <div className="absolute left-1/2 top-[47.5%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-atlas-green-strong/40 blur-[100px] z-0"></div>
              <img
                src="/images/iphone-mockup.png"
                alt="Atlas app on iPhone"
                className="max-h-[800px] w-auto drop-shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
        {/* See Features CTA */}
        <div className="w-full flex justify-center mt-32 md:mt-[10.5rem]">
          <button 
            type="button"
            onClick={scrollToFeatures}
            className="inline-flex items-center gap-2 text-atlas-gray-light hover:text-atlas-green-strong transition-colors text-base font-medium"
          >
            <span>See features</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
