
import { useEffect } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { ArrowDown, Dumbbell, Brain, BarChart, Shield, Zap, UserPlus } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "AI Assisted Routines",
    description: "Personalized workout plans created with AI to match your goals and abilities.",
    icon: <Brain className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 2,
    title: "Volume Optimization",
    description: "Smart tracking to ensure you're doing the optimal amount of exercise for results.",
    icon: <BarChart className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 3,
    title: "Adaptive Training",
    description: "Workouts that adapt based on your performance and feedback.",
    icon: <Zap className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 4,
    title: "Performance Tracking",
    description: "Comprehensive metrics to monitor your progress over time.",
    icon: <Shield className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 5,
    title: "Training Intensity",
    description: "Precise control over workout intensity based on your capacity.",
    icon: <Dumbbell className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 6,
    title: "Personal Feedback",
    description: "Incorporates your perceived effort for truly personalized training.",
    icon: <UserPlus className="w-6 h-6 text-atlas-green-strong" />,
  }
];

const Index = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen bg-atlas-gray-darkest text-white flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-white">
            <span className="gradient-text">ATLAS</span>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Gradient background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-atlas-green-strong/10 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 rounded-full bg-atlas-green-medium/5 blur-[80px]"></div>
        </div>
        
        <div className="container max-w-4xl mx-auto z-10">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your <span className="gradient-text">AI Powered</span> Fitness Journey
            </h1>
            <p className="text-atlas-gray-light text-lg mb-8 max-w-2xl mx-auto">
              Personalized workout plans that adapt to your progress using AI and performance-based feedback.
            </p>
            
            <a 
              href="#waitlist-form" 
              className="button-glow inline-flex items-center gap-2 bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-full hover-glow hover:translate-y-[-2px] transition-all duration-300"
            >
              Join Waitlist
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`glass-card p-5 rounded-xl animate-reveal ${
                  index % 3 === 0 ? 'delay-1' : index % 3 === 1 ? 'delay-2' : 'delay-3'
                }`}
              >
                <div className="p-2 bg-atlas-gray-medium rounded-lg inline-block mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-atlas-gray-light">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Waitlist Form */}
          <div 
            id="waitlist-form" 
            className="max-w-xl mx-auto glass-card p-8 rounded-3xl backdrop-blur-lg border border-atlas-gray-unselected/50 animate-reveal"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Join the <span className="gradient-text">Atlas Waitlist</span>
              </h2>
              <p className="text-atlas-gray-light text-sm">
                Be among the first to experience the future of fitness. Sign up now and get early access when we launch.
              </p>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); }} className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row w-full gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-atlas-gray-medium border border-atlas-gray-unselected/50 focus:border-atlas-green-medium/50 focus:ring-1 focus:ring-atlas-green-medium/30 rounded-xl px-4 py-3 text-white placeholder:text-atlas-gray-light outline-none transition-all duration-300"
                />
                <button
                  type="submit"
                  className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-6 py-3 rounded-xl hover-glow hover:translate-y-[-2px] transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-xs text-atlas-gray-light mt-3">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </form>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="animate-reveal delay-1">
                <div className="font-bold text-xl text-atlas-green-strong">100+</div>
                <div className="text-atlas-gray-light text-xs">Workouts</div>
              </div>
              <div className="animate-reveal delay-2">
                <div className="font-bold text-xl text-atlas-green-strong">AI</div>
                <div className="text-atlas-gray-light text-xs">Powered</div>
              </div>
              <div className="animate-reveal delay-3">
                <div className="font-bold text-xl text-atlas-green-strong">24/7</div>
                <div className="text-atlas-gray-light text-xs">Support</div>
              </div>
              <div className="animate-reveal delay-4">
                <div className="font-bold text-xl text-atlas-green-strong">Free</div>
                <div className="text-atlas-gray-light text-xs">Early Access</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-atlas-gray-light text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Atlas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
