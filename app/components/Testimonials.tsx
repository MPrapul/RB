'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  comment: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    position: 'HR Manager',
    company: 'TechCorp India',
    comment: "We've been working with RB Gifting for our corporate gifting needs for the past 2 years. Their attention to detail and quality of products is exceptional. Our employees love the personalized welcome kits!",
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '2',
    name: 'Rajiv Mehta',
    position: 'Marketing Director',
    company: 'GlobalServe Solutions',
    comment: "The customized gift hampers we ordered for our client appreciation events were a huge hit. The team at RB Gifting understood our brand identity perfectly and delivered exceptional products on time.",
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '3',
    name: 'Aisha Patel',
    position: 'Event Manager',
    company: 'Horizon Events',
    comment: "Working with RB Gifting for our corporate events has been a pleasure. Their wide range of products, flexible customization options, and prompt delivery make them our go-to gifting partner.",
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience with RB Gifting Solutions.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-neutral p-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          width={96} 
                          height={96} 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                        <div>
                          <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white p-2 rounded-full shadow-md hover:bg-neutral transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white p-2 rounded-full shadow-md hover:bg-neutral transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 