import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Image
                src="/images/rb_logo.png"
                alt="RB Gifting Solutions"
                width={160}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="mb-4">
              Premium corporate and personal gifting solutions for all occasions. Quality products, 
              customized options, and exceptional service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/rb_gifting_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="mailto:rbgiftingsolutions@gmail.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-accent transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-accent transition-colors inline-block">
                  Shop by Category
                </Link>
              </li>
              <li>
                <Link href="/combo-kits" className="hover:text-accent transition-colors inline-block">
                  Combo Kits & Hampers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories#bags" className="hover:text-accent transition-colors inline-block">
                  Bags & Backpacks
                </Link>
              </li>
              <li>
                <Link href="/categories#apparel" className="hover:text-accent transition-colors inline-block">
                  T-Shirts & Apparel
                </Link>
              </li>
              <li>
                <Link href="/categories#drinkware" className="hover:text-accent transition-colors inline-block">
                  Mugs & Bottles
                </Link>
              </li>
              <li>
                <Link href="/categories#electronics" className="hover:text-accent transition-colors inline-block">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories#eco-friendly" className="hover:text-accent transition-colors inline-block">
                  Eco-Friendly Products
                </Link>
              </li>
              <li>
                <Link href="/categories#stationery" className="hover:text-accent transition-colors inline-block">
                  Stationery & Office
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2 mt-0.5 flex-shrink-0 text-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Hyderabad, Telangana</span>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2 flex-shrink-0 text-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rbgiftingsolutions@gmail.com" className="hover:text-accent transition-colors">
                  rbgiftingsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2 flex-shrink-0 text-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a 
                  href="https://instagram.com/rb_gifting_solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @rb_gifting_solutions
                </a>
              </li>
              <li className="mt-6">
                <Link href="/contact" className="px-6 py-2 bg-white text-primary font-medium rounded-lg inline-block hover:bg-accent hover:text-primary transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/70">© {new Date().getFullYear()} RB Gifting Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 