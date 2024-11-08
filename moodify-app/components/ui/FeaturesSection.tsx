'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from './magic-card'; // Adjust the import path as necessary

const features = [
  {
    title: 'High Accuracy',
    description: 'Achieve unparalleled precision in facial recognition with our advanced algorithms.',
  },
  {
    title: 'Real-Time Processing',
    description: 'Experience instant recognition and verification, enhancing user experience.',
  },
  {
    title: 'Secure Data Handling',
    description: 'We prioritize your privacy with robust data encryption and security measures.',
  },
  {
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing systems using our flexible API.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Features</h2>
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
