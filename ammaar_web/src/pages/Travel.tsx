import { motion } from 'framer-motion';
import TravelCard from '../components/TravelCard';
import Grid from '../components/Grid';

export default function Travel() {
  const travels = [
    {
      location: "Upper Peninsula",
      country: "MI, USA",
      images: [
        { src: "/photography/miners_beach1.jpeg", alt: "Miners Beach" },
        { src: "/photography/miners_hike1.jpeg", alt: "Miners Hike" },
        { src: "/photography/miners_pond1.jpeg", alt: "Miners Pond" },
        { src: "/photography/miners_pond2.jpeg", alt: "Miners Pond 2" }
      ],
      date: "Summer 2022",
      description: "Explored breathtaking waterfalls, forests, and the shores of Lake Superior.",
      highlights: [
        "Pictured Rocks National Lakeshore",
        "Tahquamenon Falls",
        "Lake Superior sunsets"
      ],
      rating: 5
    },
    {
      location: "New York City",
      country: "NY, USA",
      images: [
        { src: "/photography/heritage1.jpeg", alt: "Heritage NYC" },
        { src: "/photography/heritage2.jpeg", alt: "Heritage NYC 2" }
      ],
      date: "Spring 2023",
      description: "The city that never sleeps, full of iconic sights and vibrant culture.",
      highlights: [
        "Central Park",
        "Times Square",
        "Broadway show"
      ],
      rating: 4.8
    },
    {
      location: "Ann Arbor Arb",
      country: "MI, USA",
      images: [
        { src: "/photography/a2_arb1.jpeg", alt: "Ann Arbor Arb 1" },
        { src: "/photography/a2_arb2.jpeg", alt: "Ann Arbor Arb 2" },
        { src: "/photography/a2_arb3.jpeg", alt: "Ann Arbor Arb 3" },
        { src: "/photography/a2_arb4.jpeg", alt: "Ann Arbor Arb 4" }
      ],
      date: "Fall 2022",
      description: "A peaceful retreat in the heart of Ann Arbor, perfect for walks and nature photography.",
      highlights: [
        "Peony Garden",
        "Huron River trails",
        "Fall foliage"
      ],
      rating: 4.7
    },
    {
      location: "Denver",
      country: "Colorado, USA",
      images: [
        { src: "/travel/denver1.jpg", alt: "Red Rocks Amphitheatre" },
        { src: "/travel/denver2.jpg", alt: "Rocky Mountain National Park" },
        { src: "/travel/denver3.jpg", alt: "Denver Art Museum" }
      ],
      date: "Winter 2022",
      description: "Gateway to the Rockies, with a lively downtown and stunning mountain views.",
      highlights: [
        "Red Rocks Amphitheatre",
        "Rocky Mountain National Park",
        "Denver Art Museum"
      ],
      rating: 4.6
    },
    {
      location: "San Francisco",
      country: "CA, USA",
      images: [
        { src: "/travel/san-francisco1.jpg", alt: "Golden Gate Bridge" },
        { src: "/travel/san-francisco2.jpg", alt: "Alcatraz Island" },
        { src: "/travel/san-francisco3.jpg", alt: "Fisherman's Wharf" }
      ],
      date: "Summer 2021",
      description: "Famous for its hills, bridges, and diverse neighborhoods.",
      highlights: [
        "Golden Gate Bridge",
        "Alcatraz Island",
        "Fisherman's Wharf"
      ],
      rating: 4.9
    },
    {
      location: "Chicago",
      country: "IL, USA",
      images: [
        { src: "/travel/chicago1.jpg", alt: "Millennium Park" },
        { src: "/travel/chicago2.jpg", alt: "The Art Institute of Chicago" },
        { src: "/travel/chicago3.jpg", alt: "Navy Pier" }
      ],
      date: "Spring 2022",
      description: "A city of architecture, deep-dish pizza, and lakefront adventures.",
      highlights: [
        "Millennium Park",
        "The Art Institute of Chicago",
        "Navy Pier"
      ],
      rating: 4.7
    },
    {
      location: "Skagway",
      country: "Alaska, USA",
      images: [
        { src: "/travel/skagway1.jpg", alt: "White Pass & Yukon Route Railway" },
        { src: "/travel/skagway2.jpg", alt: "Klondike Gold Rush National Park" },
        { src: "/travel/skagway3.jpg", alt: "Glacier Bay" }
      ],
      date: "Summer 2023",
      description: "Historic Gold Rush town surrounded by mountains and glaciers.",
      highlights: [
        "White Pass & Yukon Route Railway",
        "Klondike Gold Rush National Park",
        "Glacier Bay"
      ],
      rating: 4.8
    },
    {
      location: "Juneau",
      country: "Alaska, USA",
      images: [
        { src: "/photography/Juneau1.jpeg", alt: "Juneau" },
        { src: "/photography/nugget_falls_glaciar.jpeg", alt: "Nugget Falls Glaciar" }
      ],
      date: "Summer 2023",
      description: "Alaska's capital, nestled between mountains and the sea.",
      highlights: [
        "Mendenhall Glacier",
        "Mount Roberts Tramway",
        "Whale watching"
      ],
      rating: 4.9
    },
    {
      location: "British Columbia",
      country: "Canada",
      images: [
        { src: "/travel/british-columbia1.jpg", alt: "Stanley Park" },
        { src: "/travel/british-columbia2.jpg", alt: "Capilano Suspension Bridge" },
        { src: "/travel/british-columbia3.jpg", alt: "Sea-to-Sky Highway" }
      ],
      date: "Fall 2021",
      description: "A province of wild beauty, from Vancouver to the Rockies.",
      highlights: [
        "Stanley Park",
        "Capilano Suspension Bridge",
        "Sea-to-Sky Highway"
      ],
      rating: 4.8
    },
    {
      location: "Sitka",
      country: "Alaska, USA",
      images: [
        { src: "/travel/sitka1.jpg", alt: "Sitka National Historical Park" },
        { src: "/travel/sitka2.jpg", alt: "Wildlife boat tours" },
        { src: "/travel/sitka3.jpg", alt: "Russian Bishop's House" }
      ],
      date: "Summer 2023",
      description: "A charming coastal town with rich history and wildlife.",
      highlights: [
        "Sitka National Historical Park",
        "Wildlife boat tours",
        "Russian Bishop's House"
      ],
      rating: 4.7
    },
    {
      location: "Northern Lights",
      country: "Alaska, USA",
      images: [
        { src: "/photography/Northern_Lights1.jpeg", alt: "Northern Lights" }
      ],
      date: "Winter 2023",
      description: "Witnessed the magical aurora borealis in the Alaskan sky.",
      highlights: [
        "Aurora viewing",
        "Stargazing",
        "Photography"
      ],
      rating: 5
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