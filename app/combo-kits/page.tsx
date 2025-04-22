import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Premium Combo Kits & Gift Hampers | RB Gifting Solutions',
  description: 'Explore our curated collection of premium combo kits and gift hampers for corporate and personal gifting.',
};

const comboKits = [
  {
    id: 'welcome-kit-premium',
    name: 'Premium Welcome Kit',
    description: 'A luxurious welcome kit featuring a leather laptop sleeve, premium notebook, metal pen set, and personalized water bottle.',
    price: '₹2,999',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90',
    occasion: 'Corporate Welcome',
    items: [
      'Leather Laptop Sleeve',
      'Premium Notebook',
      'Metal Pen Set',
      'Personalized Water Bottle',
      'Welcome Letter'
    ]
  },
  {
    id: 'diwali-deluxe',
    name: 'Diwali Deluxe Hamper',
    description: 'Celebrate Diwali with our premium gift hamper including gourmet treats, scented candles, and luxury accessories.',
    price: '₹3,499',
    imageUrl: 'https://images.unsplash.com/photo-1543157145-f78c636d023d',
    occasion: 'Festival',
    items: [
      'Assorted Dry Fruits Box',
      'Premium Chocolates',
      'Scented Candles Set',
      'Brass Diya Set',
      'Decorative Gift Box'
    ]
  },
  {
    id: 'wellness-premium',
    name: 'Premium Wellness Kit',
    description: 'A thoughtfully curated wellness kit with premium fitness and self-care essentials.',
    price: '₹2,499',
    imageUrl: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c',
    occasion: 'Wellness',
    items: [
      'Premium Yoga Mat',
      'Copper Water Bottle',
      'Organic Tea Set',
      'Essential Oils Kit',
      'Digital Fitness Tracker'
    ]
  },
  {
    id: 'tech-essentials',
    name: 'Tech Essentials Kit',
    description: 'Modern tech accessories bundle perfect for remote work and digital professionals.',
    price: '₹4,999',
    imageUrl: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef',
    occasion: 'Tech',
    items: [
      'Wireless Earbuds',
      'Power Bank',
      'Laptop Stand',
      'Cable Organizer',
      'Wireless Mouse'
    ]
  },
  {
    id: 'eco-friendly-bundle',
    name: 'Eco-Friendly Gift Bundle',
    description: 'Sustainable gifting solution featuring environmentally conscious products.',
    price: '₹1,999',
    imageUrl: 'https://images.unsplash.com/photo-1584680226833-322d19be42a1',
    occasion: 'Sustainable',
    items: [
      'Bamboo Stationery Set',
      'Reusable Coffee Cup',
      'Organic Cotton Tote',
      'Plant Kit',
      'Recycled Paper Journal'
    ]
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite Collection',
    description: 'Premium corporate gifting solution for executives and business leaders.',
    price: '₹5,999',
    imageUrl: 'https://images.unsplash.com/photo-1579664531470-3cbb53a4b1a8',
    occasion: 'Executive',
    items: [
      'Leather Portfolio',
      'Premium Fountain Pen',
      'Business Card Holder',
      'Desk Organizer',
      'Wireless Charger'
    ]
  }
];

export default function ComboKitsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Premium Combo Kits & Gift Hampers</h1>
          <p className="text-gray-600 text-lg">
            Discover our expertly curated collection of premium gift hampers and combo kits. 
            Perfect for corporate gifting, festivals, and special occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboKits.map((kit) => (
            <div key={kit.id} className="card group">
              <div className="relative h-64">
                <Image
                  src={kit.imageUrl}
                  alt={kit.name}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {kit.occasion}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-primary mb-2">{kit.name}</h2>
                <p className="text-gray-600 mb-4">{kit.description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Includes:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {kit.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="text-2xl font-bold text-primary">{kit.price}</span>
                    <span className="text-sm text-gray-500 ml-1">onwards</span>
                  </div>
                  <Link 
                    href={`/contact?kit=${kit.id}`}
                    className="btn btn-primary"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-neutral p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Need a Custom Kit?</h2>
            <p className="text-gray-600 mb-6">
              We can create personalized gift hampers tailored to your specific requirements and budget.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 