import { motion } from 'framer-motion';
import GalleryCard from '../components/GalleryCard';
import Grid from '../components/Grid';

const photoCategories = [
  {
    title: "Ann Arbor Arb",
    images: [
      { src: "/photography/a2_arb1.jpeg", alt: "Arb 1" },
      { src: "/photography/a2_arb2.jpeg", alt: "Arb 2" },
      { src: "/photography/a2_arb3.jpeg", alt: "Arb 3" },
      { src: "/photography/a2_arb4.jpeg", alt: "Arb 4" }
    ],
    description: "Capturing the beauty of Ann Arbor's Arboretum."
  },
  {
    title: "Juneau",
    images: [
      { src: "/photography/Juneau1.jpeg", alt: "Juneau" },
      { src: "/photography/nugget_falls_glaciar.jpeg", alt: "Nugget Falls Glaciar" }
    ],
    description: "Alaska's capital, nestled between mountains and the sea."
  }
  // ...other categories
];

export default function Photography() {
  return (
    <Grid title="Photography" description="A collection of my favorite photos, organized by theme.">
      {photoCategories.map((cat, i) => (
        <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <GalleryCard {...cat} />
        </motion.div>
      ))}
    </Grid>
  );
} 