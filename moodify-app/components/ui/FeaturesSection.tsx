'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './magic-card'; // Adjust the import path as necessary

const features = [
  {
    title: 'Personalized Therapy Sessions',
    description: 'Utilize real-time facial emotion recognition to tailor therapy sessions to individual emotional responses, enhancing effectiveness.',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor emotional development over time with detailed analytics, aiding in the assessment of therapeutic outcomes.',
  },
  {
    title: 'Secure Data Management',
    description: 'Ensure client confidentiality with robust data encryption and compliance with healthcare privacy standards.',
  },
  {
    title: 'Seamless Integration',
    description: 'Easily incorporate our system into existing therapeutic practices with user-friendly interfaces and comprehensive support.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-funnel">Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MagicCard className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
