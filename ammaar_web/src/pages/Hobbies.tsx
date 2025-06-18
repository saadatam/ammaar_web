import { motion } from 'framer-motion';
import GalleryCard from '../components/GalleryCard';
import Grid from '../components/Grid';

const hobbies = [
  {
    title: "Photography",
    images: [
      { src: "/photography/a2_arb1.jpeg", alt: "Arb 1" },
      { src: "/photography/a2_arb2.jpeg", alt: "Arb 2" }
    ],
    description: "Capturing moments and landscapes through the lens of my camera."
  },
  {
    title: "Gardening",
    images: [
      { src: "/photography/miners_pond1.jpeg", alt: "Pond 1" }
    ],
    description: "Growing and nurturing plants, creating a sustainable garden space."
  },
  {
    title: "Reading",
    images: [
      { src: "/photography/heritage1.jpeg", alt: "Reading Spot" }
    ],
    description: "Exploring different genres and authors, from fiction to technical books."
  }
  // Add more hobbies as needed, each with at least one image
];

export default function Hobbies() {
  return (
    <Grid title="My Hobbies" description="Activities and interests that bring joy and creativity to my life.">
      {hobbies.map((hobby, i) => (
        <motion.div
          key={hobby.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <GalleryCard
            title={hobby.title}
            images={hobby.images}
            description={hobby.description}
            // If you add subtitle, tags, or metadata, pass them here
          />
        </motion.div>
      ))}
    </Grid>
  );
} 