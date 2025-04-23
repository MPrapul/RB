'use client';

import { useParams } from 'next/navigation';
import { categories } from '../../data/products';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import type { Product } from '@/types';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();
  
  // Find the product across all categories
  const foundProduct = categories.flatMap(cat => cat.products)
    .find(p => p.id === params.id);

  if (!foundProduct) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="mt-4">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Convert the found product to match the Product type
  const product: Product = {
    ...foundProduct,
    images: [foundProduct.image],
    rating: 4.5,
    reviewCount: 12,
    isBestseller: false,
    isNew: false,
    comparePrice: undefined,
    category: 'luxury-boxes',
    tags: [],
    features: [],
    inStock: true,
    brandId: 'rb-brand'
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 md:pt-32">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={product.image || ''}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                {product.comparePrice && (
                  <span className="ml-4 text-xl text-gray-500 line-through">
                    ₹{product.comparePrice}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative flex items-center w-36 h-12">
                  <button 
                    className="absolute left-0 w-10 h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-l-lg border border-gray-300 dark:border-gray-600"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full h-full text-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  <button 
                    className="absolute right-0 w-10 h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r-lg border border-gray-300 dark:border-gray-600"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    disabled={quantity >= 10}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <AddToCartButton 
                  product={product} 
                  quantity={quantity} 
                  size="lg" 
                  className="flex-1" 
                  onAddToCart={() => {
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 2000);
                  }}
                />
              </div>
            </div>

            {/* Additional Product Details */}
            <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Product Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Premium quality materials</li>
                  <li>Elegant design and packaging</li>
                  <li>Perfect for gifting</li>
                  <li>Customization available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Shipping Information</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Free delivery on orders above ₹999. Standard delivery in 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 