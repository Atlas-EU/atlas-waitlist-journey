
import { Dumbbell, Brain, BarChart, Shield, Zap, UserPlus } from 'lucide-react';
import { useScrollReveal } from '@/utils/animations';
import { useIntersectionObserver } from '@/utils/animations';

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

const FeatureSection = () => {
  useScrollReveal();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="features" 
      className="py-24 bg-atlas-gray-dark relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-atlas-green-strong/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-atlas-green-medium/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> For Your Fitness Journey
          </h2>
          <p className="text-atlas-gray-light max-w-xl mx-auto">
            Atlas combines cutting-edge AI with proven fitness science to create a personalized training experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`glass-card p-6 rounded-2xl animate-reveal ${
                index % 3 === 0 ? 'delay-1' : index % 3 === 1 ? 'delay-2' : 'delay-3'
              }`}
            >
              <div className="p-3 bg-atlas-gray-medium rounded-xl inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-atlas-gray-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
