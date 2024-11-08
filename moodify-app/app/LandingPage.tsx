import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturesSection from '../components/ui/FeaturesSection';
import Footer from '../components/ui/Footer'; // Adjust the import path as necessary

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* Other components */}
      <Footer />
    </div>
  );
};

export default App;
