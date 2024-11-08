import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturesSection from '../components/ui/FeaturesSection';


const LandingPage: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LandingPage;
