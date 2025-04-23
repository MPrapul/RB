'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '../data/products';
import { motion } from 'framer-motion';

const CategorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse through our wide range of premium gifting options categorized for your convenience.
            Find the perfect gift for every occasion.
          </p>
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/categories#${category.id}`} className="group block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden">
                    {/* Use a placeholder image since we don't have actual category images */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/50 z-10"></div>
                    <Image
                      src={category.products[0]?.image || 'https://via.placeholder.com/300'}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary dark:text-primary font-medium">
                      <span>Browse {category.products.length} products</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            href="/categories" 
            className="btn btn-primary"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 