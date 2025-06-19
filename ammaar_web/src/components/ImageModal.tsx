import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}: ImageModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((currentIndex + 1) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, currentIndex, images.length, setCurrentIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[201] text-white hover:text-gray-300 transition-colors"
            style={{
              backgroundColor: 'rgba(255, 179, 71, 0.2)',
              padding: '0.5rem',
              borderRadius: '50%',
              border: '2px solid #FFB347'
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Left Arrow */}
          {images.length > 1 && (
            <button
              className="absolute left-4 top-1/2 z-[202] -translate-y-1/2 bg-[#FFB347] bg-opacity-80 text-black rounded-full p-2 hover:bg-opacity-100 transition"
              onClick={e => {
                e.stopPropagation();
                setCurrentIndex((currentIndex - 1 + images.length) % images.length);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {images.length > 1 && (
            <button
              className="absolute right-4 top-1/2 z-[202] -translate-y-1/2 bg-[#FFB347] bg-opacity-80 text-black rounded-full p-2 hover:bg-opacity-100 transition"
              onClick={e => {
                e.stopPropagation();
                setCurrentIndex((currentIndex + 1) % images.length);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-[201] flex items-center justify-center mt-8"
            style={{ maxWidth: '90vw', maxHeight: '90vh', overflow: 'auto', marginTop: '4rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              style={{
                border: '2px solid #FFB347',
                boxShadow: '0 0 30px rgba(255, 179, 71, 0.3)'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 