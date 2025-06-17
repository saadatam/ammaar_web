import { motion } from 'framer-motion';
import Grid from '../components/Grid';

export default function Photography() {
  const photos = [
    {
      title: "Mountain Sunset",
      location: "Rocky Mountains, Colorado",
      imageUrl: "/placeholder.png",
      category: "Landscape",
      description: "A breathtaking sunset over the Rocky Mountains, capturing the perfect blend of colors in the sky.",
      equipment: "Sony A7III, 24-70mm f/2.8",
      settings: "f/8, 1/125s, ISO 100"
    },
    {
      title: "Urban Life",
      location: "New York City",
      imageUrl: "/placeholder.png",
      category: "Street",
      description: "The vibrant energy of New York City streets, frozen in a moment of daily life.",
      equipment: "Fujifilm X-T4, 35mm f/1.4",
      settings: "f/2.8, 1/250s, ISO 400"
    },
    {
      title: "Ocean Waves",
      location: "Big Sur, California",
      imageUrl: "/placeholder.png",
      category: "Nature",
      description: "The powerful motion of ocean waves crashing against the California coast.",
      equipment: "Canon R5, 70-200mm f/2.8",
      settings: "f/11, 1/1000s, ISO 200"
    },
    {
      title: "Portrait Study",
      location: "Studio",
      imageUrl: "/placeholder.png",
      category: "Portrait",
      description: "A study in natural light portraiture, capturing raw emotion and character.",
      equipment: "Sony A7III, 85mm f/1.4",
      settings: "f/2.0, 1/200s, ISO 100"
    },
    {
      title: "Wildlife Moment",
      location: "Yellowstone National Park",
      imageUrl: "/placeholder.png",
      category: "Wildlife",
      description: "A rare moment with wildlife in their natural habitat.",
      equipment: "Canon R5, 100-500mm f/4.5-7.1",
      settings: "f/5.6, 1/1000s, ISO 800"
    },
    {
      title: "Architecture",
      location: "Chicago",
      imageUrl: "/placeholder.png",
      category: "Architecture",
      description: "Modern architectural lines and patterns in urban design.",
      equipment: "Fujifilm X-T4, 16-55mm f/2.8",
      settings: "f/8, 1/250s, ISO 100"
    }
  ];

  return (
    <Grid 
      title="Photography Portfolio"
      description="A collection of my favorite photographs, capturing moments and scenes from around the world."
    >
      {photos.map((photo, index) => (
        <motion.div
          key={photo.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-400" style={{ width: '300px' }}>
            <div className="relative h-48 w-full">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {photo.category}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-400 mb-1">{photo.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{photo.location}</p>
              <p className="text-gray-300 text-sm mb-4">{photo.description}</p>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="text-yellow-400">Equipment:</span> {photo.equipment}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="text-yellow-400">Settings:</span> {photo.settings}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Grid>
  );
} 