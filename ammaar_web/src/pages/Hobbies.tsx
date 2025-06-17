import { motion } from 'framer-motion';
import Grid from '../components/Grid';

export default function Hobbies() {
  const hobbies = [
    {
      title: "Photography",
      category: "Visual Arts",
      imageUrl: "/placeholder.png",
      description: "Capturing moments and landscapes through the lens, exploring different styles and techniques.",
      equipment: [
        "Sony A7III",
        "Various Lenses",
        "Lightroom"
      ],
      favoriteSubjects: [
        "Landscape",
        "Street",
        "Portrait"
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
      description="Exploring various interests and passions that keep me engaged and learning."
    >
      {hobbies.map((hobby, index) => (
        <motion.div
          key={hobby.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400" style={{ width: '300px' }}>
            <div className="relative h-48 w-full">
              <img
                src={hobby.imageUrl}
                alt={hobby.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {hobby.category}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">{hobby.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{hobby.description}</p>
              
              {/* Equipment or Genres */}
              <div className="mb-4">
                <h4 className="text-green-400 font-semibold text-sm mb-2">
                  {hobby.equipment ? 'Equipment' : hobby.genres ? 'Genres' : 'Specialties'}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {(hobby.equipment || hobby.genres || hobby.specialties)?.map((item, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-green-400 bg-opacity-20 text-green-400 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Favorite Plants or Authors */}
              <div>
                <h4 className="text-green-400 font-semibold text-sm mb-2">
                  {hobby.favoritePlants ? 'Favorite Plants' : hobby.favoriteAuthors ? 'Favorite Authors' : 'Favorite Dishes'}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {(hobby.favoritePlants || hobby.favoriteAuthors || hobby.favoriteDishes)?.map((item, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-green-400 bg-opacity-20 text-green-400 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Grid>
  );
} 