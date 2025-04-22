import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

export const metadata: Metadata = {
  title: 'RB Gifting Solutions | Premium Corporate & Personal Gifts',
  description: 'RB Gifting Solutions offers premium corporate and personal gifting services with customized solutions for all occasions.',
  keywords: 'corporate gifts, personal gifts, premium gifts, custom gifts, gift hampers, corporate branding',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
} 