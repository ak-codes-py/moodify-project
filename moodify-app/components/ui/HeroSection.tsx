'use client';

import React from 'react';
import WordPullUp from './word-pull-up'; // Adjust the import path as necessary
import { RainbowButton } from './rainbow-button'; // Adjust the import path as necessary

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <WordPullUp
          words="Revolutionize Security with Advanced Facial Recognition"
          className="text-4xl md:text-6xl font-bold leading-tight"
        />
        <p className="mt-4 text-lg md:text-xl">
          Enhance security and streamline access with our cutting-edge facial recognition technology.
        </p>
        <div className="mt-8 inline-block">
          <RainbowButton>
            Get Started
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
