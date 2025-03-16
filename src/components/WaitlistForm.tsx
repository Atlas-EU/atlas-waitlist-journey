
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/utils/animations';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a mockup of form submission
    // In a real app, you'd send this to a backend service
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when we launch!",
        duration: 5000,
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="waitlist" 
      className="py-24 bg-atlas-gray-darkest relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-atlas-green-strong/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-atlas-gray-unselected/50 animate-reveal">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="gradient-text">Atlas Waitlist</span>
            </h2>
            <p className="text-atlas-gray-light max-w-xl mx-auto">
              Be among the first to experience the future of fitness. Sign up now and get early access when we launch.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-atlas-gray-medium border border-atlas-gray-unselected/50 focus:border-atlas-green-medium/50 focus:ring-1 focus:ring-atlas-green-medium/30 rounded-xl px-4 py-3 text-white placeholder:text-atlas-gray-light outline-none transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-xl hover-glow hover:translate-y-[-2px] transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
            <p className="text-sm text-atlas-gray-light mt-3">
              We respect your privacy. No spam, ever. Unsubscribe anytime.
            </p>
          </form>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-reveal delay-1">
              <div className="font-bold text-2xl md:text-3xl text-atlas-green-strong">100+</div>
              <div className="text-atlas-gray-light text-sm">Workouts</div>
            </div>
            <div className="animate-reveal delay-2">
              <div className="font-bold text-2xl md:text-3xl text-atlas-green-strong">AI</div>
              <div className="text-atlas-gray-light text-sm">Powered</div>
            </div>
            <div className="animate-reveal delay-3">
              <div className="font-bold text-2xl md:text-3xl text-atlas-green-strong">24/7</div>
              <div className="text-atlas-gray-light text-sm">Support</div>
            </div>
            <div className="animate-reveal delay-4">
              <div className="font-bold text-2xl md:text-3xl text-atlas-green-strong">Free</div>
              <div className="text-atlas-gray-light text-sm">Early Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
