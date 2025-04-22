import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 'bags',
    name: 'Bags & Backpacks',
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/bags',
  },
  {
    id: 'apparel',
    name: 'T-Shirts & Apparel',
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    link: '/categories/apparel',
  },
  {
    id: 'drinkware',
    name: 'Mugs & Bottles',
    imageUrl: 'https://images.unsplash.com/photo-1587398099807-eb15fb9dbeb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/drinkware',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1401&q=80',
    link: '/categories/electronics',
  },
  {
    id: 'eco-friendly',
    name: 'Eco-Friendly',
    imageUrl: 'https://images.unsplash.com/photo-1584680226833-322d19be42a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/eco-friendly',
  },
  {
    id: 'stationery',
    name: 'Stationery',
    imageUrl: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/categories/stationery',
  },
];

const CategorySection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse through our wide range of premium gifting options categorized for your convenience. 
            Find the perfect gift for every occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link href={category.link} key={category.id} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-white/90 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View all products &rarr;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/categories" className="btn btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 