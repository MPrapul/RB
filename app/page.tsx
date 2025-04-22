import Link from 'next/link';
import Image from 'next/image';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import BrandCarousel from './components/BrandCarousel';
import ComboKits from './components/ComboKits';
import Testimonials from './components/Testimonials';
import FeaturedProducts from './components/FeaturedProducts';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Hero 
        title="Premium Gifting Solutions for Every Occasion"
        subtitle="Elevating your corporate gifting experience with luxury, quality, and personalization"
        ctaText="Explore Collection"
        ctaLink="/categories"
        secondaryCtaText="Request Quote"
        secondaryCtaLink="/contact"
      />
      
      <section className="section bg-primary text-white">
        <div className="container">
          <h2 className="text-center mb-12 text-white">Why Choose RB Gifting Solutions?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm shadow-premium hover-lift animated-element">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Quality</h3>
              <p className="text-white/80">Curated premium products from top-tier brands ensuring uncompromised quality in every gift.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm shadow-premium hover-lift animated-element">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bespoke Customization</h3>
              <p className="text-white/80">Exquisitely tailored gifting solutions that perfectly align with your brand's identity and specific requirements.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-lg backdrop-blur-sm shadow-premium hover-lift animated-element">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Impeccable Service</h3>
              <p className="text-white/80">Reliable, punctual delivery and exceptional client service throughout your gifting journey, even for large bulk orders.</p>
            </div>
          </div>
        </div>
      </section>
      
      <CategorySection />
      
      <BrandCarousel />
      
      <ComboKits />
      
      <FeaturedProducts />
      
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -right-20 animate-spin-slow"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-white -bottom-40 -left-20 animate-spin-slow" 
               style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>
        </div>
        <Testimonials />
      </div>
      
      <CTA 
        title="Elevate Your Corporate Gifting Experience"
        description="Connect with our team of gifting experts to create personalized gifting solutions that make a lasting impression."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </>
  );
} 