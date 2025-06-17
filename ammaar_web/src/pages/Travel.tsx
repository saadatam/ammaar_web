import { motion } from 'framer-motion';
import TravelCard from '../components/TravelCard';
import Grid from '../components/Grid';

export default function Travel() {
  // Example travel data - replace with your actual travel experiences
  const travels = [
    {
      location: "Tokyo",
      country: "Japan",
      imageUrl: "/placeholder.png",
      date: "March 2023",
      description: "An incredible journey through the vibrant streets of Tokyo, experiencing the perfect blend of traditional culture and modern innovation.",
      highlights: [
        "Exploring the bustling streets of Shibuya",
        "Traditional tea ceremony in Asakusa",
        "Night views from Tokyo Skytree",
        "Sushi making workshop"
      ],
      rating: 5
    },
    {
      location: "Paris",
      country: "France",
      imageUrl: "/placeholder.png",
      date: "September 2022",
      description: "A romantic adventure in the City of Light, discovering art, architecture, and the finest French cuisine.",
      highlights: [
        "Louvre Museum tour",
        "Eiffel Tower at sunset",
        "Seine River cruise",
        "Montmartre exploration"
      ],
      rating: 4.5
    },
    {
      location: "Bali",
      country: "Indonesia",
      imageUrl: "/travel/bali.jpg",
      date: "January 2023",
      description: "A tropical paradise offering a perfect mix of culture, adventure, and relaxation.",
      highlights: [
        "Ubud Monkey Forest",
        "Tegallalang Rice Terraces",
        "Sacred Monkey Forest Sanctuary",
        "Traditional Balinese cooking class"
      ],
      rating: 5
    },
    {
      location: "New York",
      country: "USA",
      imageUrl: "/travel/new-york.jpg",
      date: "December 2022",
      description: "The city that never sleeps, offering endless entertainment, culture, and culinary experiences.",
      highlights: [
        "Central Park exploration",
        "Broadway show",
        "Empire State Building visit",
        "Brooklyn Bridge walk"
      ],
      rating: 4.5
    },
    {
      location: "Barcelona",
      country: "Spain",
      imageUrl: "/travel/barcelona.jpg",
      date: "June 2022",
      description: "A vibrant city where art, architecture, and beach life come together perfectly.",
      highlights: [
        "Sagrada Familia tour",
        "Park Güell visit",
        "La Rambla stroll",
        "Beach day at Barceloneta"
      ],
      rating: 4.8
    },
    {
      location: "Sydney",
      country: "Australia",
      imageUrl: "/travel/sydney.jpg",
      date: "February 2023",
      description: "A stunning coastal city offering iconic landmarks and beautiful beaches.",
      highlights: [
        "Sydney Opera House tour",
        "Bondi Beach visit",
        "Harbour Bridge climb",
        "Blue Mountains day trip"
      ],
      rating: 4.7
    }
  ];

  return (
    <Grid 
      title="Travel Adventures"
      description="Exploring the world, one destination at a time. Here are some of my most memorable travel experiences."
    >
      {travels.map((travel, index) => (
        <motion.div
          key={travel.location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TravelCard {...travel} />
        </motion.div>
      ))}
    </Grid>
  );
} 