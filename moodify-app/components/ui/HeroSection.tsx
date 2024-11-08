'use client';

import React from 'react';
import WordPullUp from './word-pull-up'; // Adjust the import path as necessary
import { RainbowButton } from './rainbow-button'; // Adjust the import path as necessary
import  Particles  from './particles'; // Adjust the import path as necessary

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        staticity={50}
        ease={50}
        size={0.4}
        refresh={false}
        color="#ffffff"
        vx={0}
        vy={0}
      />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <WordPullUp
          words="Enhance Emotional Well-being with Advanced Facial Recognition Therapy"
          className="text-4xl md:text-6xl font-bold leading-tight"
        />
        <p className="mt-4 text-lg md:text-xl">
          Utilize cutting-edge facial emotion recognition technology to support mental health and emotional resilience.
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
