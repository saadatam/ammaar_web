import { motion } from 'framer-motion';
import Card from '../components/Card';
import Grid from '../components/Grid';

export default function Plants() {
  // Example plant data - you can replace this with your actual plants
  const plants = [
    {
      title: "Monstera Deliciosa",
      subtitle: "Monstera deliciosa",
      imageUrl: "/placeholder.png",
      tags: ["Easy"],
      description: "A popular tropical plant known for its distinctive split leaves. Perfect for adding a touch of the jungle to your home.",
      metadata: [
        { label: "Water", value: "Water when top soil is dry", icon: "💧" },
        { label: "Light", value: "Bright, indirect light", icon: "☀️" }
      ]
    },
    {
      title: "Snake Plant",
      subtitle: "Sansevieria trifasciata",
      imageUrl: "/placeholder.png",
      tags: ["Easy"],
      description: "An extremely hardy plant that's perfect for beginners. Known for its air-purifying qualities.",
      metadata: [
        { label: "Water", value: "Water every 2-3 weeks", icon: "💧" },
        { label: "Light", value: "Low to bright indirect light", icon: "☀️" }
      ]
    },
    {
      title: "Fiddle Leaf Fig",
      subtitle: "Ficus lyrata",
      imageUrl: "/placeholder.png",
      tags: ["Medium"],
      description: "A stunning statement plant with large, violin-shaped leaves. Adds dramatic flair to any space.",
      metadata: [
        { label: "Water", value: "Water weekly, keep soil moist", icon: "💧" },
        { label: "Light", value: "Bright, indirect light", icon: "☀️" }
      ]
    },
    {
      title: "ZZ Plant",
      subtitle: "Zamioculcas zamiifolia",
      imageUrl: "/placeholder.png",
      tags: ["Easy"],
      description: "A low-maintenance beauty with glossy leaves. Perfect for busy plant parents.",
      metadata: [
        { label: "Water", value: "Water every 2-3 weeks", icon: "💧" },
        { label: "Light", value: "Low to bright indirect light", icon: "☀️" }
      ]
    },
    {
      title: "Bird of Paradise",
      subtitle: "Strelitzia reginae",
      imageUrl: "/placeholder.png",
      tags: ["Medium"],
      description: "Tropical plant with large, banana-like leaves. Can grow quite tall indoors.",
      metadata: [
        { label: "Water", value: "Water when top soil is dry", icon: "💧" },
        { label: "Light", value: "Bright, direct light", icon: "☀️" }
      ]
    },
    {
      title: "Pothos",
      subtitle: "Epipremnum aureum",
      imageUrl: "/placeholder.png",
      tags: ["Easy"],
      description: "Versatile trailing plant perfect for hanging baskets or climbing moss poles.",
      metadata: [
        { label: "Water", value: "Water when soil is dry", icon: "💧" },
        { label: "Light", value: "Low to bright indirect light", icon: "☀️" }
      ]
    }
  ];

  return (
    <Grid 
      title="My Plant Collection"
      description="A curated collection of my favorite plants, each with its own unique characteristics and care requirements."
    >
      {plants.map((plant, index) => (
        <motion.div
          key={plant.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card {...plant} />
        </motion.div>
      ))}
    </Grid>
  );
} 