
import { Download, Apple, Smartphone } from 'lucide-react';
import { useScrollReveal } from '@/utils/animations';

const DownloadSection = () => {
  useScrollReveal();

  return (
    <section 
      id="download" 
      className="py-24 bg-atlas-gray-darkest relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-atlas-green-strong/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-atlas-green-medium/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download <span className="gradient-text">ATLAS</span> Today
          </h2>
          <p className="text-atlas-gray-light max-w-2xl mx-auto text-lg">
            Start your AI-powered fitness journey now. Available for both iOS and Android devices.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* iOS Download */}
            <div className="glass-card p-8 rounded-2xl text-center animate-reveal delay-1">
              <div className="p-4 bg-atlas-gray-medium rounded-xl inline-block mb-6">
                <Apple className="w-12 h-12 text-atlas-green-strong" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Download for iOS</h3>
              <p className="text-atlas-gray-light mb-6">
                Get ATLAS from the Apple App Store and start training with AI on your iPhone or iPad.
              </p>
              <a 
                href="https://apps.apple.com/app/atlas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-full hover-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Apple className="w-5 h-5" />
                App Store
              </a>
            </div>

            {/* Android Download */}
            <div className="glass-card p-8 rounded-2xl text-center animate-reveal delay-2">
              <div className="p-4 bg-atlas-gray-medium rounded-xl inline-block mb-6">
                <Smartphone className="w-12 h-12 text-atlas-green-strong" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Download for Android</h3>
              <p className="text-atlas-gray-light mb-6">
                Get ATLAS from Google Play Store and experience AI-powered workouts on your Android device.
              </p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.atlas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-full hover-glow hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Play Store
              </a>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center animate-reveal delay-3">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Ready to Transform Your Fitness?</h3>
              <p className="text-atlas-gray-light mb-6">
                Join thousands of users who are already achieving their fitness goals with AI-powered personalization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://apps.apple.com/app/atlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-atlas-gray-dark hover:bg-atlas-gray-medium border border-atlas-gray-unselected/60 hover:border-atlas-green-medium/80 text-white px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Apple className="w-5 h-5" />
                  iOS App
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.atlas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-atlas-gray-dark hover:bg-atlas-gray-medium border border-atlas-gray-unselected/60 hover:border-atlas-green-medium/80 text-white px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-5 h-5" />
                  Android App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
