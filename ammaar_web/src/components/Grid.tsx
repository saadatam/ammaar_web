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
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image with Overlay - Fixed */}
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
      
      {/* Optional: Additional overlay for better text readability - Fixed */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>

      {/* Base grid with responsive sizing - Fixed */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)]"
        style={{
          backgroundSize: 'clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px)',
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)',
        }}
      />

      {/* Glowing orb effect - Fixed */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[clamp(1rem,3vw,3rem)]" />

      {/* Navbar - Fixed */}
      <Navbar />

      {/* Main content - Scrollable */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center"
            style={{ 
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}
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

          {/* Grid Container - Scrollable */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 