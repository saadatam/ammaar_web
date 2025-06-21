import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface PlantCardProps {
  name: string;
  scientificName: string;
  imageUrl: string;
  careLevel: 'Easy' | 'Medium' | 'Hard';
  waterNeeds: string;
  lightNeeds: string;
  description: string;
}

export default function PlantCard({
  name,
  scientificName,
  imageUrl,
  careLevel,
  waterNeeds,
  lightNeeds,
  description
}: PlantCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        className="w-[280px] sm:w-[300px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400"
      >
        {/* Plant Image - Clickable */}
        <div 
          className="relative h-48 w-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          />
          {/* Click indicator */}
          <div className="absolute top-2 left-2 bg-[#FFB347] bg-opacity-80 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-200">
            Click to expand
          </div>
          <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {careLevel}
          </div>
        </div>

        {/* Plant Info */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-green-400 mb-1">{name}</h3>
          <p className="text-gray-400 italic text-sm mb-4">{scientificName}</p>
          
          <div className="space-y-2 mb-4 flex flex-col items-center">
            <div className="flex items-center text-gray-300 text-sm">
              <span className="mr-2">💧</span>
              <span>{waterNeeds}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <span className="mr-2">☀️</span>
              <span>{lightNeeds}</span>
            </div>
          </div>

          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={[{ src: imageUrl, alt: name }]}
        currentIndex={0}
        setCurrentIndex={() => {}}
      />
    </>
  );
} 