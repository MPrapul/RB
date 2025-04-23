'use client';

import { useState } from 'react';

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange: (quantity: number) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const QuantitySelector = ({
  initialQuantity = 1,
  min = 1,
  max = 10,
  onChange,
  size = 'md',
  className = ''
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newQuantity = Math.max(min, Math.min(max, Number(e.target.value)));
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  // Size-based styles
  const sizeStyles = {
    sm: {
      container: 'h-8 w-24',
      button: 'w-8',
      text: 'text-xs'
    },
    md: {
      container: 'h-10 w-28',
      button: 'w-9',
      text: 'text-sm'
    },
    lg: {
      container: 'h-12 w-36',
      button: 'w-10',
      text: 'text-base'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <div 
      className={`relative flex items-center ${currentSize.container} ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className={`absolute left-0 ${currentSize.button} h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-l-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className={`w-full h-full text-center ${currentSize.text} border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      />
      <button 
        className={`absolute right-0 ${currentSize.button} h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-r-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors`}
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector; 