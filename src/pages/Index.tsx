
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';

const Index = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen bg-atlas-gray-darkest text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Index;
