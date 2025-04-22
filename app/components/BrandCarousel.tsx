'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Brand {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

const brands: Brand[] = [
  {
    id: 'jack-jones',
    name: 'Jack & Jones',
    imageUrl: '/images/brands/jack-jones.png',
    link: '/brands/jack-jones',
  },
  {
    id: 'rare-rabbit',
    name: 'Rare Rabbit',
    imageUrl: '/images/brands/rare-rabbit.png',
    link: '/brands/rare-rabbit',
  },
  {
    id: 'american-tourister',
    name: 'American Tourister',
    imageUrl: '/images/brands/american-tourister.png',
    link: '/brands/american-tourister',
  },
  {
    id: 'vero-moda',
    name: 'Vero Moda',
    imageUrl: '/images/brands/vero-moda.png',
    link: '/brands/vero-moda',
  },
  {
    id: 'puma',
    name: 'Puma',
    imageUrl: '/images/brands/puma.png',
    link: '/brands/puma',
  },
  {
    id: 'adidas',
    name: 'Adidas',
    imageUrl: '/images/brands/adidas.png',
    link: '/brands/adidas',
  },
  {
    id: 'us-polo',
    name: 'U.S. Polo Assn.',
    imageUrl: '/images/brands/us-polo.png',
    link: '/brands/us-polo',
  },
  {
    id: 'swiss-military',
    name: 'Swiss Military',
    imageUrl: '/images/brands/swiss-military.png',
    link: '/brands/swiss-military',
  },
  {
    id: 'marks-spencer',
    name: 'Marks & Spencer (M&S)',
    imageUrl: '/images/brands/marks-spencer.png',
    link: '/brands/marks-spencer',
  },
  {
    id: 'assembly',
    name: 'Assembly',
    imageUrl: '/images/brands/assembly.png',
    link: '/brands/assembly',
  },
  {
    id: 'mokobara',
    name: 'Mokobara',
    imageUrl: '/images/brands/mokobara.png',
    link: '/brands/mokobara',
  },
  {
    id: 'bot-all',
    name: 'Bot All',
    imageUrl: '/images/brands/bot-all.png',
    link: '/brands/bot-all',
  },
  {
    id: 'aquaminder',
    name: 'Aquaminder',
    imageUrl: '/images/brands/aquaminder.png',
    link: '/brands/aquaminder',
  },
  {
    id: 'mafatlal',
    name: 'Mafatlal',
    imageUrl: '/images/brands/mafatlal.png',
    link: '/brands/mafatlal',
  },
  {
    id: 'ebony',
    name: 'Ebony',
    imageUrl: '/images/brands/ebony.png',
    link: '/brands/ebony',
  }
];

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [animateItems, setAnimateItems] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle window references only on client-side
    const handleResize = () => {
      const visibleBrands = window.innerWidth >= 768 ? 5 : 2;
      setMaxIndex(Math.max(0, brands.length - visibleBrands));
    };

    // Initial setup
    handleResize();
    setAnimateItems(true);

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  return (
    <section className="py-24 premium-gradient text-white relative overflow-hidden">
      {/* Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-40 -right-20 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 rounded-full bg-white/10 bottom-10 left-10 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Premium Brand Partners</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            We collaborate with leading brands to provide exceptional corporate gifting solutions tailored to your unique needs.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden mx-auto"
            ref={containerRef}
          >
            <div 
              className="flex transition-all duration-500 ease-in-out items-center"
              style={{ transform: `translateX(-${currentIndex * (100 / (brands.length > 5 ? 5 : brands.length))}%)` }}
            >
              {brands.map((brand, index) => (
                <div 
                  key={brand.id} 
                  className="min-w-[20%] px-4 flex-grow-0 flex-shrink-0"
                  style={{ 
                    minWidth: `${100 / (brands.length > 5 ? 5 : brands.length)}%`,
                    transform: animateItems ? 'translateY(0)' : 'translateY(20px)',
                    opacity: animateItems ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1}s`
                  }}
                >
                  <Link href={brand.link} className="block group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-premium hover:bg-white/20 hover:-translate-y-1 border border-white/10">
                      <div className="relative h-16 w-full">
                        <Image
                          src={brand.imageUrl}
                          alt={brand.name}
                          fill
                          className="object-contain transition-opacity duration-300 group-hover:opacity-100 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      </div>
                    </div>
                    <p className="text-center text-white mt-4 opacity-80 group-hover:opacity-100 transition-opacity font-medium">
                      {brand.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-premium z-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              aria-label="Previous brands"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-premium z-10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              aria-label="Next brands"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/brands" 
            className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 shadow-premium hover:shadow-premium-hover hover:-translate-y-1"
          >
            Explore All Brands
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel; 