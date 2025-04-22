'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-premium py-2' : 'bg-primary/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-48 h-16 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/images/rb_logo.png" 
              alt="RB Gifting Solutions" 
              fill 
              priority
              className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image 
              src="/images/Blue_RB_Logo.png" 
              alt="RB Gifting Solutions" 
              fill 
              priority
              className={`object-contain transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/categories" 
            className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            Shop by Category
          </Link>
          <Link 
            href="/combo-kits" 
            className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            Combo Kits
          </Link>
          <Link 
            href="/contact" 
            className={`transition-colors duration-300 font-medium ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            Contact Us
          </Link>
          <Link 
            href="/cart" 
            className={`transition-colors duration-300 font-medium flex items-center ${
              isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
            }`}
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            Cart
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-premium animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/categories" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Shop by Category
              </Link>
              <Link 
                href="/brands" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Brands
              </Link>
              <Link 
                href="/combo-kits" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Combo Kits
              </Link>
              <Link 
                href="/contact" 
                className="text-primary hover:text-primary-light font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-primary w-full text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 