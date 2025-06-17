import { motion } from 'framer-motion';

interface TravelCardProps {
  location: string;
  country: string;
  imageUrl: string;
  date: string;
  description: string;
  highlights: string[];
  rating: number;
}

export default function TravelCard({
  location,
  country,
  imageUrl,
  date,
  description,
  highlights,
  rating
}: TravelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border-2 border-green-400"
      style={{ width: '300px' }}
    >
      {/* Location Image */}
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={location}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
          {date}
        </div>
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
  );
} 