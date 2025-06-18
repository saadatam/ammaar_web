import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface TravelCardProps {
  location: string;
  country: string;
  images: { src: string; alt: string }[];
  date: string;
  description: string;
  highlights: string[];
  rating: number;
}

export default function TravelCard({
  location,
  country,
  images,
  date,
  description,
  highlights,
  rating
}: TravelCardProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (idx: number) => {
    setSelectedImageIdx(idx);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-green-400"
        style={{ width: '300px' }}
      >
        {/* Main Image - Clickable */}
        <div 
          className="relative h-48 w-full cursor-pointer"
          onClick={() => openModal(selectedImageIdx)}
        >
          <img
            src={images[selectedImageIdx]?.src}
            alt={images[selectedImageIdx]?.alt}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          />
          {/* Click indicator */}
          <div className="absolute top-2 left-2 bg-[#FFB347] bg-opacity-80 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-200">
            Click to expand
          </div>
          <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {date}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-2 mb-2">
          {images.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`w-10 h-10 object-cover rounded cursor-pointer border-2 ${selectedImageIdx === idx ? 'border-yellow-400' : 'border-transparent'}`}
              onClick={() => setSelectedImageIdx(idx)}
              style={{ opacity: selectedImageIdx === idx ? 1 : 0.7 }}
            />
          ))}
        </div>

        {/* Location Info */}
        <div className="p-6 text-center">
          <div className="flex flex-col items-center mb-3">
            <h3 className="text-xl font-bold text-green-400 mb-1">{location}</h3>
            <p className="text-gray-400 text-sm">{country}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-lg mr-1">★</span>
              <span className="text-gray-300 text-sm">{rating}/5</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

          {/* Highlights - Centered list */}
          <div className="space-y-2">
            <h4 className="text-green-400 font-semibold text-base mb-2">Highlights</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center justify-center text-gray-300 text-sm">
                  <span className="text-green-400 mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Image Modal with zoom/pan */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={selectedImageIdx}
        setCurrentIndex={setSelectedImageIdx}
      />
    </>
  );
} 