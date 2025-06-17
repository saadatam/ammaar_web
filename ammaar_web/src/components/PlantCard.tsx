import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="w-[280px] sm:w-[300px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400"
    >
      {/* Plant Image */}
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
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
  );
} 