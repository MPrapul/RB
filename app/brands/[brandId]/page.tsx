import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import type { Product, Brand } from '@/types';

// Dummy data for brands
const brands: Brand[] = [
  {
    id: 'jack-jones',
    name: 'Jack & Jones',
    description: 'Premium clothing and apparel with modern designs and exceptional quality.',
    longDescription: "Jack & Jones is a Danish clothing company specializing in menswear. Founded in 1990, it has grown into a global brand known for its denim expertise and contemporary casual wear. The brand offers a wide range of clothing including jeans, t-shirts, shirts, jackets, and accessories that blend style with functionality. With a commitment to quality materials and craftsmanship, Jack & Jones creates versatile clothing for the modern man that transitions seamlessly from casual to semi-formal occasions.",
    logoUrl: 'https://i.imgur.com/iB67Vs7.png',
    bannerUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    productCount: 42,
    featured: true,
  },
  {
    id: 'spykar',
    name: 'Spykar',
    description: 'Trendy and comfortable denim and casual wear for men and women.',
    longDescription: "Spykar is an Indian fashion brand founded in 1992, specializing in denim and casual wear for men and women. Known for its stylish and comfortable jeans, Spykar has expanded to offer a complete range of casual fashion including shirts, t-shirts, jackets, and accessories. The brand is recognized for its quality craftsmanship, innovative washes, and contemporary designs that cater to fashion-forward young adults. Spykar combines global trends with local sensibilities to create apparel that resonates with the dynamic and vibrant youth of today.",
    logoUrl: 'https://i.imgur.com/zY5YVZG.png',
    bannerUrl: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    productCount: 36,
    featured: true,
  },
  {
    id: 'fossil',
    name: 'Fossil',
    description: 'Classic watches, bags, and accessories with timeless design and quality craftsmanship.',
    longDescription: "Fossil is an American lifestyle brand founded in 1984, specializing in watches, leather goods, and accessories. With a vintage-inspired aesthetic and attention to detail, Fossil has become known for creating timeless designs that blend classic style with modern functionality. The brand offers a wide range of products including watches, wallets, handbags, and small leather goods that emphasize quality materials and craftsmanship. Fossil's commitment to authentic design and enduring quality has made it a popular choice for those seeking accessories that stand the test of time.",
    logoUrl: 'https://i.imgur.com/1BKFMW7.png',
    bannerUrl: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    productCount: 28,
    featured: true,
  },
  {
    id: 'parker',
    name: 'Parker',
    description: 'Elegant writing instruments and professional accessories for the modern executive.',
    longDescription: "Parker is a prestigious brand known for its fine writing instruments since its founding in 1888. With a heritage of innovation and craftsmanship, Parker has established itself as a symbol of elegance and reliability in the world of pens and writing accessories. The brand offers a diverse range of products from everyday ballpoint pens to luxurious fountain pens crafted with meticulous attention to detail. Parker's commitment to quality and sophisticated design has made it a favorite among professionals, executives, and writing enthusiasts who appreciate the perfect balance of form and function in their writing instruments.",
    logoUrl: 'https://i.imgur.com/2ZaSYSu.png',
    bannerUrl: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80',
    productCount: 24,
    featured: false,
  },
  {
    id: 'cross',
    name: 'Cross',
    description: 'Premium writing instruments and accessories combining American heritage with modern innovation.',
    longDescription: "Cross is America's oldest manufacturer of fine writing instruments, established in 1846. With over 175 years of heritage, Cross has become synonymous with exceptional quality, craftsmanship, and innovative design in the world of pens and accessories. The brand offers a comprehensive range of writing instruments from ballpoint and rollerball pens to fountain pens and pencils, all crafted with meticulous attention to detail. Cross pens combine traditional craftsmanship with contemporary technology, resulting in writing instruments that deliver smooth, consistent performance while showcasing timeless elegance. As a symbol of achievement and aspiration, Cross products make excellent gifts for graduations, promotions, and other significant milestones.",
    logoUrl: 'https://i.imgur.com/QbYSmK7.png',
    bannerUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    productCount: 22,
    featured: false,
  },
];

// Dummy data for products
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Polo Shirt',
    description: 'Premium cotton polo with embroidered company logo.',
    price: 1999,
    comparePrice: 2499,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    ],
    category: 'Apparel',
    tags: ['polo', 'corporate', 'cotton', 'branded'],
    features: [
      'Made from premium pique cotton',
      'Custom embroidered logo',
      'Ribbed cuffs',
      'Classic fit',
      'Available in multiple colors',
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 42,
    brandId: 'jack-jones',
    isBestseller: true,
    isNew: false,
  },
  {
    id: '2',
    name: 'Executive Pen Set',
    description: 'Elegant pen set featuring a ballpoint pen and fountain pen in a premium gift box.',
    price: 2999,
    comparePrice: 3699,
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80',
      'https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    ],
    category: 'Office',
    tags: ['pen', 'executive', 'gift set', 'luxury'],
    features: [
      'Precision-engineered writing instruments',
      'Engraved with company logo',
      'Smooth-flow ink technology',
      'Balanced weight for comfortable writing',
      'Presented in a premium gift box',
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 28,
    brandId: 'parker',
    isBestseller: true,
    isNew: false,
  },
  {
    id: '3',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID protection and custom debossing.',
    price: 1299,
    comparePrice: 1899,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    ],
    category: 'Accessories',
    tags: ['wallet', 'leather', 'rfid', 'gift'],
    features: [
      'Genuine full-grain leather',
      'RFID blocking technology',
      'Multiple card slots and bill compartments',
      'Subtle debossed company logo',
      'Gift-ready packaging',
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 36,
    brandId: 'fossil',
    isBestseller: false,
    isNew: true,
  },
  {
    id: '4',
    name: 'Premium Backpack',
    description: 'High-quality laptop backpack with multiple compartments and custom logo placement.',
    price: 3499,
    comparePrice: 4299,
    images: [
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    ],
    category: 'Bags',
    tags: ['backpack', 'laptop', 'travel', 'business'],
    features: [
      'Padded laptop compartment (fits up to 15")',
      'Water-resistant material',
      'Ergonomic design with padded straps',
      'Multiple organizational pockets',
      'Trolley strap for easy travel',
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 22,
    brandId: 'spykar',
    isBestseller: false,
    isNew: true,
  },
  {
    id: '5',
    name: 'Desk Clock',
    description: 'Elegant desk clock with company logo, perfect for office or home workspace.',
    price: 1899,
    comparePrice: 2299,
    images: [
      'https://images.unsplash.com/photo-1563804447971-6e113ab80713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1545424436-1be2c9ec9984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    ],
    category: 'Office',
    tags: ['clock', 'desk', 'office', 'decor'],
    features: [
      'Precision quartz movement',
      'Brushed aluminum finish',
      'Subtle logo placement',
      'Battery included',
      'Silent operation',
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
    brandId: 'cross',
    isBestseller: false,
    isNew: false,
  },
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { brandId: string } }) {
  const brand = brands.find(b => b.id === params.brandId);
  
  if (!brand) {
    return {
      title: 'Brand Not Found | RB Gifting Solutions',
      description: 'The requested brand could not be found.',
    };
  }
  
  return {
    title: `${brand.name} Products | RB Gifting Solutions`,
    description: brand.description,
  };
}

export default function BrandPage({ params }: { params: { brandId: string } }) {
  const brand = brands.find(b => b.id === params.brandId);
  
  if (!brand) {
    notFound();
  }
  
  // Filter products for this brand
  const brandProducts = products.filter(p => p.brandId === brand.id);
  
  // Get featured products
  const featuredProducts = brandProducts
    .filter(p => p.isBestseller || p.isNew)
    .slice(0, 4);
  
  return (
    <main className="min-h-screen pb-16">
      {/* Hero Section with Brand Banner */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={brand.bannerUrl}
            alt={brand.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container relative h-full mx-auto px-4 flex flex-col justify-end pb-12">
          <div className="flex items-center mb-6">
            <div className="bg-white rounded-xl p-2 shadow-lg mr-6">
              <Image
                src={brand.logoUrl}
                alt={brand.name}
                width={100}
                height={100}
                className="h-16 w-16 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{brand.name}</h1>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">{brand.description}</p>
          
          <nav className="mt-8">
            <ol className="flex items-center text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li className="mx-2 text-white/60">/</li>
              <li>
                <Link href="/brands" className="text-white/80 hover:text-white transition">
                  Brands
                </Link>
              </li>
              <li className="mx-2 text-white/60">/</li>
              <li className="text-white font-medium">{brand.name}</li>
            </ol>
          </nav>
        </div>
      </section>
      
      {/* Brand Overview Section */}
      <section className="container mx-auto px-4 py-12 -mt-16 relative">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About {brand.name}</h2>
          <p className="text-gray-700 leading-relaxed">{brand.longDescription}</p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm flex items-center">
              <span className="text-3xl font-bold text-primary mr-3">{brand.productCount}+</span>
              <span className="text-gray-600">Products</span>
            </div>
            
            {brand.featured && (
              <div className="bg-white rounded-lg px-6 py-4 shadow-sm flex items-center">
                <span className="text-yellow-500 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-600">Featured Brand</span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-8">Discover our most popular {brand.name} products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href={`/products?brand=${brand.id}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary-dark transition-colors duration-300"
            >
              View All {brand.name} Products
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      )}
      
      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Custom {brand.name} Products for Your Brand</h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for custom {brand.name} products for your corporate gifting needs? 
              We offer personalization services including logo printing, engraving, and custom packaging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary-dark transition-colors duration-300"
              >
                Request a Quote
              </Link>
              
              <Link 
                href="/services/custom-branding"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Learn About Customization
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 