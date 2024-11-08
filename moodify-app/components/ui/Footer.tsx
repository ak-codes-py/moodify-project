'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matt-black text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Moodify inc. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
