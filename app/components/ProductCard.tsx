'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
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

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  const rating = product.rating || 0;
  const reviewCount = product.reviewCount || 0;

  return (
    <div className="card group h-full flex flex-col overflow-hidden">
      {/* Product Image */}
      <div className="relative pt-[100%] overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && (
            <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              New Arrival
            </span>
          )}
          {discount >= 10 && (
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              {discount}% Off
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center mt-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{formattedPrice}</span>
              {formattedComparePrice && (
                <span className="text-gray-400 line-through text-sm">
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
                          ? 'text-accent'
                          : i < rating
                            ? 'text-accent/50'
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
          
          <div className="ml-auto flex items-center gap-2">
            <select 
              className="input py-1 px-2 text-sm"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button 
              className="btn btn-primary btn-sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 