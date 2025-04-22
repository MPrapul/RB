import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Shop by Category | RB Gifting Solutions',
  description: 'Browse our wide range of premium corporate gifting categories including apparel, drinkware, electronics, and more.',
};

interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  productCount: number;
}

const categories: Category[] = [
  {
    id: 'bags',
    name: 'Bags & Backpacks',
    description: 'Premium quality backpacks, laptop bags, and travel bags with custom branding options.',
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/bags',
    productCount: 42,
  },
  {
    id: 'apparel',
    name: 'T-Shirts & Apparel',
    description: 'High-quality corporate t-shirts, polos, jackets, and other apparel with custom embroidery options.',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    link: '/categories/apparel',
    productCount: 56,
  },
  {
    id: 'drinkware',
    name: 'Mugs & Bottles',
    description: 'Branded coffee mugs, premium water bottles, and vacuum flasks perfect for everyday corporate use.',
    imageUrl: 'https://images.unsplash.com/photo-1587398099807-eb15fb9dbeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/drinkware',
    productCount: 34,
  },
  {
    id: 'electronics',
    name: 'Electronics & Tech',
    description: 'Modern tech accessories including power banks, headphones, speakers, and smart devices.',
    imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1401&q=80',
    link: '/categories/electronics',
    productCount: 28,
  },
  {
    id: 'eco-friendly',
    name: 'Eco-Friendly Products',
    description: "Sustainable and eco-friendly gifts that reflect your company's commitment to environmental responsibility.",
    imageUrl: 'https://images.unsplash.com/photo-1584680226833-322d19be42a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/eco-friendly',
    productCount: 29,
  },
  {
    id: 'stationery',
    name: 'Stationery & Office',
    description: 'Premium notebooks, pens, desk organizers, and other office essentials with elegant branding.',
    imageUrl: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/stationery',
    productCount: 45,
  },
  {
    id: 'wellness',
    name: 'Wellness & Care',
    description: 'Self-care and wellness products including fitness accessories, spa sets, and aromatherapy kits.',
    imageUrl: 'https://images.unsplash.com/photo-1636063206526-a17290f49ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    link: '/categories/wellness',
    productCount: 26,
  },
  {
    id: 'gourmet',
    name: 'Gourmet & Edibles',
    description: 'Premium food and beverage gift sets including chocolates, specialty teas, and exotic snacks.',
    imageUrl: 'https://images.unsplash.com/photo-1608797178993-ed8bae0054b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/gourmet',
    productCount: 32,
  },
];

export default function CategoriesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Shop by Category</h1>
          <p className="text-gray-600 text-lg">
            Explore our carefully curated collection of premium corporate gifting options. 
            Find the perfect gifts for your employees, clients, and business partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={category.link} className="group">
              <div className="card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-white text-xl font-bold">{category.name}</h2>
                    <span className="text-white/80 text-sm">{category.productCount} Products</span>
                  </div>
                </div>
                
                <div className="p-5 flex-grow">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-primary font-medium flex items-center mt-auto group-hover:text-primary-dark transition-colors">
                    Explore Category
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 