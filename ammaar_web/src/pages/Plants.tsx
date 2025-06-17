import { motion } from 'framer-motion';
import PlantCard from '../components/PlantCard';
import Grid from '../components/Grid';

export default function Plants() {
  // Example plant data - you can replace this with your actual plants
  const plants = [
    {
      name: "Monstera Deliciosa",
      scientificName: "Monstera deliciosa",
      imageUrl: "/placeholder.png",
      careLevel: "Easy" as const,
      waterNeeds: "Water when top soil is dry",
      lightNeeds: "Bright, indirect light",
      description: "A popular tropical plant known for its distinctive split leaves. Perfect for adding a touch of the jungle to your home."
    },
    {
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      imageUrl: "/placeholder.png",
      careLevel: "Easy" as const,
      waterNeeds: "Water every 2-3 weeks",
      lightNeeds: "Low to bright indirect light",
      description: "An extremely hardy plant that's perfect for beginners. Known for its air-purifying qualities."
    },
    {
      name: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      imageUrl: "/placeholder.png",
      careLevel: "Medium" as const,
      waterNeeds: "Water weekly, keep soil moist",
      lightNeeds: "Bright, indirect light",
      description: "A stunning statement plant with large, violin-shaped leaves. Adds dramatic flair to any space."
    },
    {
      name: "ZZ Plant",
      scientificName: "Zamioculcas zamiifolia",
      imageUrl: "/placeholder.png",
      careLevel: "Easy" as const,
      waterNeeds: "Water every 2-3 weeks",
      lightNeeds: "Low to bright indirect light",
      description: "A low-maintenance beauty with glossy leaves. Perfect for busy plant parents."
    },
    {
      name: "Bird of Paradise",
      scientificName: "Strelitzia reginae",
      imageUrl: "/placeholder.png",
      careLevel: "Medium" as const,
      waterNeeds: "Water when top soil is dry",
      lightNeeds: "Bright, direct light",
      description: "Tropical plant with large, banana-like leaves. Can grow quite tall indoors."
    },
    {
      name: "Pothos",
      scientificName: "Epipremnum aureum",
      imageUrl: "/placeholder.png",
      careLevel: "Easy" as const,
      waterNeeds: "Water when soil is dry",
      lightNeeds: "Low to bright indirect light",
      description: "Versatile trailing plant perfect for hanging baskets or climbing moss poles."
    }
  ];

  return (
    <Grid 
      title="My Plant Collection"
      description="A curated collection of my favorite plants, each with its own unique characteristics and care requirements."
    >
      {plants.map((plant, index) => (
        <motion.div
          key={plant.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <PlantCard {...plant} />
        </motion.div>
      ))}
    </Grid>
  );
} 