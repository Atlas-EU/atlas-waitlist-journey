import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Download, Smartphone } from 'lucide-react';

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
          <div className="flex flex-col justify-center animate-slide-in-left">
            <span className="text-atlas-green-strong font-medium text-sm md:text-base tracking-wider uppercase mb-4 animate-reveal">
              FITNESS REINVENTED
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-reveal delay-1">
              Your <span className="gradient-text">AI Powered</span> Fitness Journey
            </h1>
            <p className="text-atlas-gray-light text-lg mb-8 max-w-lg animate-reveal delay-2">
              Personalized workout plans that adapt to your progress using AI and performance-based feedback. Download now and start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-3">
              <a 
                href="#download" 
                className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-full hover-glow hover:translate-y-[-2px] transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Now
              </a>
              <a 
                href="#features" 
                className="px-8 py-3 border border-atlas-gray-unselected rounded-full text-white hover:border-atlas-green-strong transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto animate-slide-in-right">
            <div className="relative z-10 w-full max-w-md mx-auto">
              <div className="relative aspect-[9/16] w-full rounded-[2.5rem] overflow-hidden border-[8px] border-atlas-gray-dark shadow-2xl">
                <div className="absolute inset-0 bg-atlas-gray-medium flex items-center justify-center">
                  <div className="w-full h-full flex flex-col">
                    <div className="h-1/2 w-full bg-atlas-gray-dark flex items-center justify-center">
                      <div className="glow-effect text-atlas-green-strong text-6xl font-bold animate-pulse-subtle">
                        ATLAS
                      </div>
                    </div>
                    <div className="h-1/2 w-full bg-atlas-gray-medium p-6 flex flex-col justify-center">
                      <div className="glass p-4 rounded-xl mb-3">
                        <div className="h-2 w-3/4 bg-atlas-green-medium/30 rounded-full mb-2"></div>
                        <div className="h-2 w-1/2 bg-atlas-green-medium/20 rounded-full"></div>
                      </div>
                      <div className="glass p-4 rounded-xl mb-3">
                        <div className="h-2 w-2/3 bg-atlas-green-medium/30 rounded-full mb-2"></div>
                        <div className="h-2 w-3/4 bg-atlas-green-medium/20 rounded-full"></div>
                      </div>
                      <div className="glass p-4 rounded-xl">
                        <div className="h-2 w-1/2 bg-atlas-green-medium/30 rounded-full mb-2"></div>
                        <div className="h-2 w-2/3 bg-atlas-green-medium/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-atlas-green-strong/20 to-transparent opacity-30 pointer-events-none"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl rotate-12 animate-float opacity-80 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 glass rounded-2xl -rotate-12 animate-float opacity-60 z-0" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
