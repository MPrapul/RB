'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import AddToCartButton from './AddToCartButton';
import QuantitySelector from './QuantitySelector';

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedComparePrice = product.comparePrice 
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(product.comparePrice)
    : null;

  const discount = product.comparePrice 
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
    setQuantity(1); // Reset quantity after adding to cart
  };

  const rating = product.rating || 0;
  const reviewCount = product.reviewCount || 0;

  return (
    <Link href={`/products/${product.id}`} className="block">
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
            {discount >= 10 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {discount}% Off
              </span>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl text-gray-900 dark:text-white">{formattedPrice}</span>
                  {formattedComparePrice && (
                    <span className="text-gray-500 line-through text-sm">
                      {formattedComparePrice}
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                {rating > 0 && (
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${
                            i < Math.floor(rating)
                              ? 'text-yellow-400'
                              : i < rating
                                ? 'text-yellow-400/50'
                                : 'text-gray-300'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({reviewCount})
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <QuantitySelector
                initialQuantity={quantity}
                onChange={setQuantity}
                size="sm"
              />
              <AddToCartButton 
                product={product} 
                quantity={quantity} 
                size="sm"
                className="flex-grow" 
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 