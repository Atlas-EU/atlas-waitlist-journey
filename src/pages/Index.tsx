
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/utils/animations';

const Index = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen bg-atlas-gray-darkest text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
