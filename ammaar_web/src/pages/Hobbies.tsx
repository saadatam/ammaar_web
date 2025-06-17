import { motion } from 'framer-motion';
import Card from '../components/Card';
import Grid from '../components/Grid';

export default function Hobbies() {
  const hobbies = [
    {
      title: "Photography",
      imageUrl: "/photography.jpg",
      tags: ["Creative"],
      description: "Capturing moments and landscapes through the lens of my camera.",
      metadata: [
        { label: "Equipment", value: "Sony A7III", icon: "📸" },
        { label: "Style", value: "Street & Landscape", icon: "🎨" }
      ]
    },
    {
      title: "Gardening",
      category: "Nature",
      imageUrl: "/placeholder.png",
      description: "Growing and nurturing plants, creating a sustainable garden space.",
      equipment: [
        "Indoor Plants",
        "Outdoor Garden",
        "Hydroponics"
      ],
      favoritePlants: [
        "Succulents",
        "Herbs",
        "Tropical Plants"
      ]
    },
    {
      title: "Cooking",
      category: "Culinary",
      imageUrl: "/placeholder.png",
      description: "Experimenting with different cuisines and techniques in the kitchen.",
      specialties: [
        "Italian",
        "Asian Fusion",
        "Mediterranean"
      ],
      favoriteDishes: [
        "Homemade Pasta",
        "Sushi",
        "Curries"
      ]
    },
    {
      title: "Reading",
      category: "Literature",
      imageUrl: "/placeholder.png",
      description: "Exploring different genres and authors, from fiction to technical books.",
      genres: [
        "Science Fiction",
        "Technical",
        "Biography"
      ],
      favoriteAuthors: [
        "Yuval Noah Harari",
        "Andy Weir",
        "James Clear"
      ]
    }
  ];

  return (
    <Grid 
      title="My Hobbies"
      description="Activities and interests that bring joy and creativity to my life."
    >
      {hobbies.map((hobby, index) => (
        <motion.div
          key={hobby.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card {...hobby} />
        </motion.div>
      ))}
    </Grid>
  );
} 