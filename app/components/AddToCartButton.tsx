'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/types';

type AddToCartButtonProps = {
  product: Product;
  quantity: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onAddToCart?: () => void;
};

const AddToCartButton = ({ 
  product, 
  quantity = 1, 
  size = 'md', 
  className = '',
  onAddToCart
}: AddToCartButtonProps) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  // Reset added state after 2 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (addedToCart) {
      timer = setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [addedToCart]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, quantity);
    setAddedToCart(true);
    if (onAddToCart) onAddToCart();
  };

  // Size-based styles
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm rounded-md',
    md: 'py-2 px-4 text-base rounded-lg',
    lg: 'py-3 px-6 text-lg rounded-xl'
  };

  return (
    <motion.button 
      className={`
        btn-primary font-medium transition-all duration-300 
        flex items-center justify-center gap-2
        ${sizeStyles[size]}
        ${addedToCart 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-primary hover:bg-primary-light'
        } 
        text-white shadow-md hover:shadow-lg
        ${className}
      `}
      onClick={handleAddToCart}
      whileTap={{ scale: 0.95 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
    >
      {addedToCart ? (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="flex items-center gap-1"
        >
          <motion.span
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Added!
          </motion.span>
        </motion.div>
      ) : (
        <div className="flex items-center gap-1">
          <svg 
            className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Add to Cart</span>
        </div>
      )}
    </motion.button>
  );
};

export default AddToCartButton; 