/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00003D', // Deep navy blue (RGB: 0, 0, 61)
          light: '#11114F', // Slightly lighter navy
          dark: '#00002B', // Darker navy
        },
        accent: {
          DEFAULT: '#FFFFFF', // White
          light: '#F0F0F0', // Light gray
          dark: '#E0E0E0', // Slightly darker gray
        },
        neutral: {
          DEFAULT: '#F8F8F8', // Light gray
          dark: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'premium': '0 10px 50px -12px rgba(0, 0, 61, 0.25)',
        'premium-hover': '0 20px 60px -12px rgba(0, 0, 61, 0.35)',
      },
    },
  },
  plugins: [],
}; 