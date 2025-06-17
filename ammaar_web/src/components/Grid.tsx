import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface GridProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function Grid({ children, title, description }: GridProps) {
  // console.log("rendering grid");
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/Warm_Tech.png")',
          filter: 'brightness(0.3)',
          width: '100vw',
          height: '100vh',
          minHeight: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      
      {/* Optional: Additional overlay for better text readability */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      
      {/* Animated grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing orb effect */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-8 flex-grow mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-6 sm:mb-8 text-center"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-center mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base"
        >
          {description}
        </motion.p>

        {/* Grid Container */}
        <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid auto-rows-4fr auto-cols-fr grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-2 md:gap-8">
            {children}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 