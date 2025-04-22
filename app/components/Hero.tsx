'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl = 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
}: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Premium Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Luxury gifting experience"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Animated Floating Elements for Luxury Feel */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-20 -right-20 animate-spin-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -bottom-40 -left-20 animate-spin-slow" style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>
        <div className="absolute w-32 h-32 rounded-full bg-white/5 top-1/3 right-1/4 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-3xl text-white transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="mb-4 font-bold tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaLink}
              className="btn btn-secondary hover-scale"
            >
              {ctaText}
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="btn btn-outline hover-scale"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 