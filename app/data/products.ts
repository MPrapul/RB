import { Product, Category } from '@/types';

// Sample products data
export const products: Product[] = [
  {
    id: 'premium-gift-box-1',
    name: 'Premium Gift Box',
    description: 'Luxurious gift box with assorted premium items',
    price: 2999,
    comparePrice: 3499,
    images: ['/images/products/gift-box-1.jpg'],
    category: 'luxury-boxes',
    tags: ['premium', 'corporate', 'gift-box'],
    features: ['Handcrafted', 'Premium Quality', 'Customizable'],
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    brandId: 'rb-brand',
    isBestseller: true,
    isNew: false,
    image: '/images/products/gift-box-1.jpg'
  },
  {
    id: 'corporate-gift-hamper',
    name: 'Corporate Gift Hamper',
    description: 'Elegant gift hamper perfect for corporate gifting',
    price: 4999,
    comparePrice: 5999,
    images: ['/images/products/gift-hamper-1.jpg'],
    category: 'hampers',
    tags: ['corporate', 'hamper', 'premium'],
    features: ['Custom Branding', 'Handpicked Items', 'Premium Packaging'],
    inStock: true,
    rating: 4.7,
    reviewCount: 18,
    brandId: 'rb-brand',
    isBestseller: true,
    isNew: false,
    image: '/images/products/gift-hamper-1.jpg'
  },
  {
    id: 'leather-notebook-set',
    name: 'Premium Leather Notebook Set',
    description: 'Genuine leather notebook with matching pen',
    price: 1299,
    comparePrice: 1599,
    images: ['/images/products/notebook-1.jpg'],
    category: 'stationery',
    tags: ['stationery', 'corporate', 'leather'],
    features: ['Genuine Leather', 'Refillable', 'Custom Embossing Available'],
    inStock: true,
    rating: 4.6,
    reviewCount: 32,
    brandId: 'rb-brand',
    isBestseller: false,
    isNew: true,
    image: '/images/products/notebook-1.jpg'
  },
  {
    id: 'premium-tea-set',
    name: 'Premium Tea Set',
    description: 'Elegant tea set with assorted premium teas',
    price: 1899,
    comparePrice: undefined,
    images: ['/images/products/tea-set-1.jpg'],
    category: 'wellness',
    tags: ['wellness', 'tea', 'premium'],
    features: ['Organic Teas', 'Handcrafted Packaging', 'Assorted Flavors'],
    inStock: true,
    rating: 4.9,
    reviewCount: 15,
    brandId: 'rb-brand',
    isBestseller: true,
    isNew: false,
    image: '/images/products/tea-set-1.jpg'
  },
  {
    id: 'tech-gift-box',
    name: 'Tech Gift Box',
    description: 'Modern gift box with tech accessories',
    price: 3499,
    comparePrice: 3999,
    images: ['/images/products/tech-box-1.jpg'],
    category: 'tech',
    tags: ['tech', 'gadgets', 'modern'],
    features: ['Premium Tech Accessories', 'Wireless Earbuds', 'Power Bank'],
    inStock: true,
    rating: 4.5,
    reviewCount: 22,
    brandId: 'rb-brand',
    isBestseller: false,
    isNew: true,
    image: '/images/products/tech-box-1.jpg'
  },
  {
    id: 'custom-gift-box',
    name: 'Custom Gift Box',
    description: 'Fully customizable gift box with your choice of items',
    price: 2499,
    comparePrice: undefined,
    images: ['/images/products/custom-box-1.jpg'],
    category: 'luxury-boxes',
    tags: ['custom', 'personalized', 'gift-box'],
    features: ['Fully Customizable', 'Premium Packaging', 'Personalized Card'],
    inStock: true,
    rating: 4.7,
    reviewCount: 19,
    brandId: 'rb-brand',
    isBestseller: false,
    isNew: true,
    image: '/images/products/custom-box-1.jpg'
  }
];

// Sample categories data
export const categories: Category[] = [
  {
    id: 'luxury-boxes',
    name: 'Luxury Gift Boxes',
    description: 'Premium curated gift boxes for special occasions and corporate events',
    imageUrl: '/images/categories/luxury-boxes.jpg',
    link: '/categories#luxury-boxes',
    productCount: 8,
    products: [
      {
        id: 'premium-gift-box-1',
        name: 'Premium Gift Box',
        price: 2999,
        image: '/images/products/gift-box-1.jpg',
        description: 'Luxurious gift box with assorted premium items'
      },
      {
        id: 'custom-gift-box',
        name: 'Custom Gift Box',
        price: 2499,
        image: '/images/products/custom-box-1.jpg',
        description: 'Fully customizable gift box with your choice of items'
      }
    ]
  },
  {
    id: 'hampers',
    name: 'Gift Hampers',
    description: 'Elegant gift hampers with carefully selected premium products',
    imageUrl: '/images/categories/hampers.jpg',
    link: '/categories#hampers',
    productCount: 6,
    products: [
      {
        id: 'corporate-gift-hamper',
        name: 'Corporate Gift Hamper',
        price: 4999,
        image: '/images/products/gift-hamper-1.jpg',
        description: 'Elegant gift hamper perfect for corporate gifting'
      }
    ]
  },
  {
    id: 'stationery',
    name: 'Premium Stationery',
    description: 'High-quality stationery items perfect for corporate gifting',
    imageUrl: '/images/categories/stationery.jpg',
    link: '/categories#stationery',
    productCount: 12,
    products: [
      {
        id: 'leather-notebook-set',
        name: 'Premium Leather Notebook Set',
        price: 1299,
        image: '/images/products/notebook-1.jpg',
        description: 'Genuine leather notebook with matching pen'
      }
    ]
  },
  {
    id: 'tech',
    name: 'Tech Gifts',
    description: 'Modern technology gifts and accessories for the tech enthusiast',
    imageUrl: '/images/categories/tech.jpg',
    link: '/categories#tech',
    productCount: 9,
    products: [
      {
        id: 'tech-gift-box',
        name: 'Tech Gift Box',
        price: 3499,
        image: '/images/products/tech-box-1.jpg',
        description: 'Modern gift box with tech accessories'
      }
    ]
  },
  {
    id: 'wellness',
    name: 'Wellness Gifts',
    description: 'Self-care and wellness products to promote health and relaxation',
    imageUrl: '/images/categories/wellness.jpg',
    link: '/categories#wellness',
    productCount: 7,
    products: [
      {
        id: 'premium-tea-set',
        name: 'Premium Tea Set',
        price: 1899,
        image: '/images/products/tea-set-1.jpg',
        description: 'Elegant tea set with assorted premium teas'
      }
    ]
  }
]; 