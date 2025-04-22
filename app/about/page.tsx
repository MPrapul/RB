import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | RB Gifting Solutions',
  description: 'Learn about RB Gifting Solutions and our commitment to providing premium corporate and personal gifting solutions.',
};

const stats = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Products', value: '1000+' },
  { label: 'Cities Served', value: '20+' },
  { label: 'Years Experience', value: '5+' },
];

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality, sourcing only the finest products for our clients.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer-Centric',
    description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We constantly evolve our product range to bring you the latest and most unique gifting solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description: 'We\'re committed to eco-friendly practices and sustainable gifting options.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-primary overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="RB Gifting Solutions Office"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/90" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Our Story</h1>
            <p className="text-xl text-white/90">
              Founded with a vision to revolutionize corporate gifting, RB Gifting Solutions 
              has grown to become a trusted partner for businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At RB Gifting Solutions, we believe in the power of thoughtful gifting to strengthen 
                business relationships and create lasting impressions. Our mission is to provide 
                premium quality corporate gifting solutions that reflect your brand's values and 
                exceed your expectations.
              </p>
              <p className="text-gray-600 mb-8">
                Founded by Paanati Raghu, we've built our reputation on understanding our clients' 
                unique needs and delivering exceptional service. From customized gift hampers to 
                branded merchandise, we handle every aspect of corporate gifting with professionalism 
                and attention to detail.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Partner With Us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Corporate Gifts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-gray-600">
              Our core values guide everything we do, from product selection to customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-neutral rounded-lg hover:shadow-premium transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Meet Our Founder</h2>
            <p className="text-gray-600">
              Under the leadership of Paanati Raghu, RB Gifting Solutions has grown from a small 
              startup to a trusted name in corporate gifting.
            </p>
          </div>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-premium overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="Paanati Raghu"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Paanati Raghu</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 5 years of experience in corporate gifting, Raghu has built RB Gifting Solutions 
                on the foundations of quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Gifting Experience?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for all your corporate gifting needs and experience the difference 
            that quality, creativity, and attention to detail can make.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 