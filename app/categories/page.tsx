'use client';

import { categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

export default function CategoriesPage() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 md:pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of premium gifts for every occasion. From luxury boxes to custom hampers,
            find the perfect gift that leaves a lasting impression.
          </p>
        </motion.div>
        
        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-24"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.products.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    className="h-full transform hover:scale-105 transition-transform duration-300"
                  >
                    <ProductCard 
                      product={{
                        ...product,
                        images: [product.image],
                        rating: 4.5,
                        reviewCount: 12,
                        isBestseller: false,
                        isNew: false,
                        comparePrice: undefined,
                        category: category.id,
                        tags: [],
                        features: [],
                        inStock: true,
                        brandId: 'rb-brand'
                      }} 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 