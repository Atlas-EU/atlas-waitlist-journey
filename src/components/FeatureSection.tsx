import { Dumbbell, Brain, BarChart, Shield, Zap, UserPlus } from 'lucide-react';
import { useScrollReveal } from '@/utils/animations';
import { useIntersectionObserver } from '@/utils/animations';

const features = [
  {
    id: 1,
    title: "Custom Routines",
    description: (
      <>
        Create personalized workout routines. <br />
        Fast. Easy. No hassle.
      </>
    ),
    icon: <Brain className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 2,
    title: "Progress Tracking",
    description: (
      <>
        Visualize your personal records. <br />
        See stats, spot trends, and stay locked in.
      </>
    ),
    icon: <BarChart className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 3,
    title: "Flexible Workouts",
    description: (
      <>
        New gym? Change exercises on-the-go.<br />
        Atlas have your back. You’re in control.
      </>
    ),
    icon: <Zap className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 4,
    title: "Exercise Library",
    description: (
      <>
        Explore proven moves or create your own. <br />
        Your journey, your rules.
      </>
    ),
    icon: <Dumbbell className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 5,
    title: "Performance Analytics",
    description: (
      <>
        Get the insights that actually matter. <br />
        Lift smarter, grow faster.
      </>
    ),
    icon: <Shield className="w-6 h-6 text-atlas-green-strong" />,
  },
  {
    id: 6,
    title: "Personal Records",
    description: (
      <>
        Smart, simple & complete workouts summary. <br />
        Watch your legacy build.
      </>
    ),
    icon: <UserPlus className="w-6 h-6 text-atlas-green-strong" />,
  }
];

const FeatureSection = () => {
  useScrollReveal();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="features" 
      className="py-32 bg-atlas-gray-dark relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-atlas-green-strong/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-atlas-green-medium/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Everything You Need</span> For Your Fitness Goals
          </h2>
          <p className="text-atlas-gray-light max-w-2xl mx-auto text-lg">
            Atlas provides all the tools you need to create, follow, and track your fitness journey with precision and simplicity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`glass-card p-8 rounded-2xl animate-reveal ${
                index % 3 === 0 ? 'delay-1' : index % 3 === 1 ? 'delay-2' : 'delay-3'
              }`}
            >
              <div className="p-3 bg-atlas-gray-medium rounded-xl inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-atlas-gray-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
