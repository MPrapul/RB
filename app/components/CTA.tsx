'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTA = ({ title, description, buttonText, buttonLink }: CTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('cta-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cta-section" className="section bg-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient opacity-10 z-0"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-primary/5 -top-20 -left-20 animate-spin-slow"></div>
        <div className="absolute w-48 h-48 rounded-full bg-primary/5 bottom-10 right-10 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h2>
          <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          <Link 
            href={buttonLink} 
            className="btn bg-primary hover:bg-primary-light text-white font-bold shadow-premium hover:shadow-premium-hover"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 