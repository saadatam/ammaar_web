import { motion } from 'framer-motion';
import Grid from '../components/Grid';

export default function Fashion() {
  const fashionItems = [
    {
      name: "Street Style",
      category: "Urban",
      imageUrl: "/placeholder.png",
      season: "All Year",
      style: "Casual",
      description: "My take on urban street fashion, combining comfort with style.",
      highlights: [
        "Oversized hoodies",
        "Sneaker collection",
        "Layered looks"
      ]
    },
    {
      name: "Formal Wear",
      category: "Business",
      imageUrl: "/placeholder.png",
      season: "All Year",
      style: "Professional",
      description: "Professional attire for work and special occasions.",
      highlights: [
        "Tailored suits",
        "Classic ties",
        "Dress shoes"
      ]
    },
    {
      name: "Summer Collection",
      category: "Seasonal",
      imageUrl: "/placeholder.png",
      season: "Summer",
      style: "Light & Airy",
      description: "Light and comfortable summer essentials.",
      highlights: [
        "Linen shirts",
        "Light chinos",
        "Summer accessories"
      ]
    }
  ];

  return (
    <Grid 
      title="Fashion Style"
      description="Exploring personal style through different seasons and occasions."
    >
      {fashionItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400" style={{ width: '300px' }}>
            <div className="relative h-48 w-full">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {item.season}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-1">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.category}</p>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <div className="space-y-1">
                {item.highlights.map((highlight, i) => (
                  <p key={i} className="text-gray-300 text-sm">• {highlight}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Grid>
  );
} 