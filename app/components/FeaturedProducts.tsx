import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  brand: string;
  category: string;
  link: string;
}

const featuredProducts: Product[] = [
  {
    id: 'laptop-sleeve',
    name: 'Premium Laptop Sleeve',
    description: 'High-quality branded laptop sleeve with customized corporate logo.',
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80',
    price: '₹899',
    brand: 'Wildcraft',
    category: 'Bags',
    link: '/products/laptop-sleeve',
  },
  {
    id: 'wireless-earbuds',
    name: 'Wireless Earbuds',
    description: 'Premium wireless earbuds with charging case and excellent battery life.',
    imageUrl: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: '₹1,499',
    brand: 'boAt',
    category: 'Electronics',
    link: '/products/wireless-earbuds',
  },
  {
    id: 'premium-polo',
    name: 'Premium Polo T-shirt',
    description: 'Comfortable and stylish polo t-shirt with customized embroidery.',
    imageUrl: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    price: '₹799',
    brand: 'Jack & Jones',
    category: 'Apparel',
    link: '/products/premium-polo',
  },
  {
    id: 'insulated-bottle',
    name: 'Insulated Water Bottle',
    description: 'Double-walled stainless steel bottle that keeps beverages hot or cold for hours.',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    price: '₹699',
    brand: 'Puma',
    category: 'Drinkware',
    link: '/products/insulated-bottle',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="section bg-neutral">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our top picks for corporate and personal gifting. 
            Premium quality products that make perfect gifts for any occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card group h-full flex flex-col">
              <div className="relative pt-[100%]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {product.brand}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">{product.price}</span>
                  <Link 
                    href={product.link} 
                    className="btn btn-primary py-2 px-4 text-sm"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 