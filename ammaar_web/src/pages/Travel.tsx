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
        { src: "/photography/UP1.jpeg", alt: "Miners Beach" },
        { src: "/photography/miners_hike1.jpeg", alt: "Miners Hike" },
        // { src: "/photography/miners_pond1.jpeg", alt: "Miners Pond" },
        { src: "/photography/miners_pond2.jpeg", alt: "Miners Pond 2" },
        { src: "/photography/UP_lighthouse.jpeg", alt: "Lighthouse sunset" },
        { src: "/photography/UP_airbnb.jpeg", alt: "UP Airbnb" },
      ],
      date: "2025",
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
        { src: "/photography/NYC1.jpeg", alt: "NYC" },
        { src: "/photography/NYC2.jpeg", alt: "NYC" },
        { src: "/photography/NYC3.jpeg", alt: "NYC" },
        // { src: "/photography/NYC4.jpeg", alt: "NYC" },
        { src: "/photography/NYC5.jpeg", alt: "NYC" },
        { src: "/photography/NYC6.jpeg", alt: "NYC" },
        { src: "/photography/NYC7.jpeg", alt: "NYC" },
        { src: "/photography/NYC8.jpeg", alt: "NYC" },
        { src: "/photography/NYC9.jpeg", alt: "NYC" },
        { src: "/photography/NYC10.jpeg", alt: "NYC" },
        { src: "/photography/NYC11.jpeg", alt: "NYC" },
        // { src: "/photography/NYC12.jpeg", alt: "NYC" },
        { src: "/photography/NYC13.jpeg", alt: "NYC" },
      ],
      date: "Summer 2024",
      description: "The city that never sleeps, full of iconic sights and vibrant culture.",
      highlights: [
        "Central Park",
        "Times Square",
        "Broadway show"
      ],
      rating: 4.8
    },
    {
      location: "DT Ann Arbor",
      country: "MI, USA",
      images: [
        { src: "/photography/NL_law_quad1.jpeg", alt: "Law Quad" },
        { src: "/photography/NL_law_quad2.jpeg", alt: "Law Quad" },
        { src: "/photography/a2_arb1.jpeg", alt: "Ann Arbor Arb 1" },
        { src: "/photography/a2_arb2.jpeg", alt: "Ann Arbor Arb 2" },
        { src: "/photography/a2_arb3.jpeg", alt: "Ann Arbor Arb 3" },
        { src: "/photography/a2_arb4.jpeg", alt: "Ann Arbor Arb 4" },
        { src: "/photography/a2_arb5.jpeg", alt: "Ann Arbor Arb 5" }
      ],
      date: "2023-2025",
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
        { src: "/photography/denver1.jpeg", alt: "Denver" },
        { src: "/photography/denver2.jpeg", alt: "Denver" },
        { src: "/photography/denver3.jpeg", alt: "Denver" },
        { src: "/photography/denver4.jpeg", alt: "Denver" }
      ],
      date: "Summer 2022",
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
        { src: "/photography/nugget_falls_glacier.jpeg", alt: "Nugget Falls Glacier" }
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
    },
    {
      location: "Texas",
      country: "TX, USA",
      images: [
        { src: "/photography/texas_farm.jpeg", alt: "Texas Farm" },
        { src: "/photography/texas_farm2.jpeg", alt: "Texas Farm 2" }
      ],
      date: "Summer 2023",
      description: "A vibrant state with a rich cultural heritage and diverse landscapes.",
      highlights: [
        "Austin City Limits",
        "San Antonio River Walk",
        "Big Bend National Park"
      ],
      rating: 4.7
    },
    {
      location: "Mecca",
      country: "Saudi Arabia",
      images: [
        { src: "/photography/Train_Mecca.jpeg", alt: "Train to Mecca" }
      ],
      date: "Summer 2023",
      description: "The holiest city in Islam, a pilgrimage site for Muslims.",
      highlights: [
        "Mount Arafat",
        "Ka'ba",
        "Hajj rituals"
      ],
      rating: 4.8
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