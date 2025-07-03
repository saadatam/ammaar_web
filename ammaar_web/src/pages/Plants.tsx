import { motion } from 'framer-motion';
import GalleryCard from '../components/GalleryCard';
import Grid from '../components/Grid';

const plants = [
  {
    title: "Glohaven Peaches",
    subtitle: "Prunus Persica",
    images: [
      { src: "/gardening/peachs.jpeg", alt: "Glohaven Peaches" }
    ],
    tags: ["Perennial"],
    description: "A 9-year-old peach tree that thrives in Michigan's climate. Peach trees are well-suited for Michigan's growing conditions and can produce delicious fruit when properly cared for.",
    metadata: [
      { label: "Water", value: "2 inches of rainfall. Water actively for first year", icon: "💧" },
      { label: "LifeSpan", value: "Perennial", icon: "🌱" },
      { label: "Age", value: "9 years old", icon: "🌱" }
    ]
  },
  {
    title: "Concord Grapes",
    subtitle: "Vitis labrusca",
    images: [
      { src: "/gardening/grapes1.jpeg", alt: "Concord Grapes" },
      { src: "/gardening/grapes2.jpeg", alt: "Concord Grapes" }
    ],
    tags: ["Perennial"],
    description: "Concord grapes are a popular variety that grows well in Michigan's climate. They're known for their sweet flavor and are commonly used for juice, jelly, and wine making.",
    metadata: [
      { label: "Water", value: "1-2 inches of rain or 1/4 gallon of water 2x/week", icon: "💧" },
      { label: "LifeSpan", value: "Perennial", icon: "🌱" },
      { label: "Type", value: "Fruit Vine", icon: "🍇" }
    ]
  },
  {
    title: "Watermelon",
    subtitle: "Citrullus lanatus",
    images: [
      { src: "/gardening/watermelon.jpeg", alt: "Watermelon" }
    ],
    tags: ["Annual"],
    description: "Watermelons can be successfully grown in Michigan during the warm summer months. They require plenty of space and warm soil to thrive and produce sweet, juicy fruit.",
    metadata: [
      { label: "Water", value: "1-2 inches of rain or 1/4 gallon of water 2x/week", icon: "💧" },
      { label: "LifeSpan", value: "Annual", icon: "🌱" },
      { label: "Season", value: "Summer", icon: "☀️" }
    ]
  },
  {
    title: "Everbearing Strawberries",
    subtitle: "Fragaria × ananassa",
    images: [
      { src: "/gardening/strawberry1.jpeg", alt: "Everbearing Strawberries" },
      { src: "/gardening/strawberry_descriptions.jpeg", alt: "Everbearing Strawberries" }
    ],
    tags: ["Perennial"],
    description: "Everbearing strawberries produce fruit throughout the growing season, making them perfect for continuous harvest. They're well-adapted to Michigan's climate and provide delicious berries.",
    metadata: [
      { label: "Water", value: "1-2 inches of rain or 1/4 gallon of water 2x/week", icon: "💧" },
      { label: "LifeSpan", value: "Perennial", icon: "🌱" },
      { label: "Type", value: "Everbearing", icon: "🍓" }
    ]
  }
];

export default function Plants() {
  return (
    <Grid title="My Garden" description="A collection of fruits and vegetables I grow in my Michigan garden, each with its own unique growing requirements and care needs.">
      {plants.map((plant, i) => (
        <motion.div key={plant.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <GalleryCard {...plant} />
        </motion.div>
      ))}
    </Grid>
  );
} 