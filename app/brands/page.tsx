import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Shop by Brand | RB Gifting Solutions',
  description: 'Explore premium products from top brands for your corporate and personal gifting needs.',
};

interface Brand {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  bannerUrl: string;
  link: string;
  productCount: number;
  featured: boolean;
}

const brands: Brand[] = [
  {
    id: 'jack-jones',
    name: 'Jack & Jones',
    description: 'Premium clothing and apparel with modern designs and exceptional quality, perfect for corporate gifting.',
    logoUrl: 'https://i.imgur.com/iB67Vs7.png',
    bannerUrl: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
    link: '/brands/jack-jones',
    productCount: 28,
    featured: true,
  },
  {
    id: 'puma',
    name: 'Puma',
    description: 'Stylish sportswear, athleisure, and accessories combining modern design with functional technology.',
    logoUrl: 'https://i.imgur.com/8h98OnS.png',
    bannerUrl: 'https://images.unsplash.com/photo-1565109965716-957f1f8c5b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    link: '/brands/puma',
    productCount: 34,
    featured: true,
  },
  {
    id: 'rare-rabbit',
    name: 'Rare Rabbit',
    description: 'Contemporary clothing and accessories with minimalist aesthetics, offering sophisticated corporate gifting options.',
    logoUrl: 'https://i.imgur.com/Jnz9Nb1.png',
    bannerUrl: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    link: '/brands/rare-rabbit',
    productCount: 22,
    featured: true,
  },
  {
    id: 'boat',
    name: 'boAt',
    description: 'Modern audio products and tech accessories with stylish designs, ideal for tech-savvy corporate gifts.',
    logoUrl: 'https://i.imgur.com/OSHG1aZ.png',
    bannerUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/brands/boat',
    productCount: 19,
    featured: true,
  },
  {
    id: 'fossil',
    name: 'Fossil',
    description: 'Classic timepieces, leather goods, and accessories that blend vintage designs with modern functionality.',
    logoUrl: 'https://i.imgur.com/YYtMOuh.png',
    bannerUrl: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    link: '/brands/fossil',
    productCount: 16,
    featured: true,
  },
  {
    id: 'wildcraft',
    name: 'Wildcraft',
    description: 'Durable outdoor gear, backpacks, and travel accessories perfect for corporate adventurers and active professionals.',
    logoUrl: 'https://i.imgur.com/JFtBVVm.png',
    bannerUrl: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    link: '/brands/wildcraft',
    productCount: 24,
    featured: false,
  },
  {
    id: 'parker',
    name: 'Parker',
    description: 'Elegant writing instruments and stationery that make sophisticated corporate gifts for executives and clients.',
    logoUrl: 'https://i.imgur.com/oRPSO86.png',
    bannerUrl: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    link: '/brands/parker',
    productCount: 12,
    featured: false,
  },
  {
    id: 'fastrack',
    name: 'Fastrack',
    description: 'Trendy watches, eyewear, and accessories with youthful designs, ideal for young professionals and dynamic teams.',
    logoUrl: 'https://i.imgur.com/RU14BnJ.png',
    bannerUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    link: '/brands/fastrack',
    productCount: 17,
    featured: false,
  },
];

export default function BrandsPage() {
  // Separate featured brands from regular brands
  const featuredBrands = brands.filter(brand => brand.featured);
  const regularBrands = brands.filter(brand => !brand.featured);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="bg-neutral py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-primary mb-4">Shop by Brand</h1>
            <p className="text-lg text-gray-700">
              Explore premium products from top brands for your corporate and personal gifting needs. 
              We partner with the best to bring you exceptional quality and style.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">Featured Brands</h2>
          
          <div className="space-y-16">
            {featuredBrands.map((brand, index) => (
              <div key={brand.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={brand.bannerUrl}
                    alt={brand.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="bg-white/90 rounded-lg p-3 inline-block">
                      <div className="relative h-10 w-24">
                        <Image
                          src={brand.logoUrl}
                          alt={brand.name}
                          fill
                          className="object-contain"
                          sizes="100px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}>
                  <h3 className="text-2xl font-bold text-primary mb-3">{brand.name}</h3>
                  <p className="text-gray-700 mb-6">{brand.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {brand.productCount} Products Available
                    </span>
                    <Link 
                      href={brand.link} 
                      className="btn btn-primary"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Brands */}
      <section className="bg-neutral py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">All Brands</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link 
                href={brand.link} 
                key={brand.id}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="relative h-20 mx-auto mb-4 flex items-center justify-center w-full">
                    <Image
                      src={brand.logoUrl}
                      alt={brand.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-20 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{brand.name}</h3>
                  <p className="text-gray-600 text-sm text-center mb-4 flex-grow">{brand.description}</p>
                  
                  <div className="text-center">
                    <span className="text-primary font-medium inline-flex items-center text-sm group-hover:underline">
                      {brand.productCount} Products
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Partnership */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Partner With Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Are you a brand looking to reach corporate clients? Partner with RB Gifting Solutions 
              to showcase your products in our corporate gifting catalog. We work with premium brands 
              to create custom gifting solutions for businesses across India.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Become a Brand Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 