export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: string;
  tags: string[];
  features: string[];
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
  brandId: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  bannerUrl: string;
  productCount: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  productCount: number;
}

export interface ComboKit {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  link: string;
  occasion: string;
  products: Product[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  comment: string;
  imageUrl: string;
} 