import Link from 'next/link';
import Image from 'next/image';

interface ComboKit {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  link: string;
  occasion: string;
}

const comboKits: ComboKit[] = [
  {
    id: 'welcome-kit',
    name: 'New Joiner Welcome Kit',
    description: 'Premium welcome kit for new employees with branded notebook, pen, t-shirt, and water bottle.',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    price: '₹1,999',
    link: '/combo-kits/welcome-kit',
    occasion: 'Corporate',
  },
  {
    id: 'diwali-hamper',
    name: 'Festive Diwali Hamper',
    description: 'Luxurious Diwali gift hamper with premium sweets, dry fruits, candles, and other festive items.',
    imageUrl: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    price: '₹2,499',
    link: '/combo-kits/diwali-hamper',
    occasion: 'Festival',
  },
  {
    id: 'wellness-kit',
    name: 'Employee Wellness Kit',
    description: 'Thoughtful wellness kit including fitness accessories, herbal tea, and wellness products.',
    imageUrl: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    price: '₹1,799',
    link: '/combo-kits/wellness-kit',
    occasion: 'Wellness',
  },
];

const ComboKits = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Premium Combo Kits & Gift Hampers</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our expertly curated gift hampers and combo kits make corporate gifting effortless. 
            Perfect for festive occasions, employee rewards, and client appreciation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comboKits.map((kit) => (
            <div key={kit.id} className="card group">
              <div className="relative h-64">
                <Image
                  src={kit.imageUrl}
                  alt={kit.name}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {kit.occasion}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    {kit.price}
                    <span className="text-xs text-gray-500 ml-1">onwards</span>
                  </span>
                  
                  <Link 
                    href={kit.link} 
                    className="text-primary hover:text-primary-dark font-medium flex items-center"
                  >
                    View Details
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/combo-kits" className="btn btn-primary">
            View All Combo Kits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComboKits; 