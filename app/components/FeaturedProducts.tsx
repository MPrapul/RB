'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import AddToCartButton from './AddToCartButton';
import { useState } from 'react';

const FeaturedProducts = () => {
  // Take 4 products from the products array (bestsellers or featured ones)
  const featuredProducts = products.filter(product => product.isBestseller).slice(0, 4);
  
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
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our top picks for corporate and personal gifting. Premium quality products that make
            perfect gifts for any occasion.
          </p>
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="h-full transform hover:scale-105 transition-transform duration-300"
            >
              <div className="card group h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="relative pt-[100%] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isBestseller && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Bestseller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New Arrival
                      </span>
                    )}
                    {product.comparePrice && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% Off
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-2xl text-gray-900 dark:text-white">
                            ₹{product.price}
                          </span>
                          {product.comparePrice && (
                            <span className="text-gray-500 line-through text-sm">
                              ₹{product.comparePrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/products/${product.id}`} className="w-full">
                      <button className="w-full py-2 px-4 bg-primary hover:bg-primary-light text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            href="/categories" 
            className="btn btn-primary"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 