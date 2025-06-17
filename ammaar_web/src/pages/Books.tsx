import { motion } from 'framer-motion';
import Grid from '../components/Grid';

export default function Books() {
  const books = [
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      imageUrl: "/placeholder.png",
      category: "Technology",
      rating: 5,
      description: "A classic guide to software development best practices.",
      keyPoints: [
        "Software development principles",
        "Career development",
        "Technical excellence"
      ]
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      imageUrl: "/placeholder.png",
      category: "Self-Development",
      rating: 4.5,
      description: "An easy and proven way to build good habits and break bad ones.",
      keyPoints: [
        "Habit formation",
        "Behavioral psychology",
        "Personal growth"
      ]
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      imageUrl: "/placeholder.png",
      category: "History",
      rating: 5,
      description: "A brief history of humankind, from ancient humans to the present.",
      keyPoints: [
        "Human evolution",
        "Social structures",
        "Cultural development"
      ]
    }
  ];

  return (
    <Grid 
      title="Books I've Read"
      description="A collection of books that have influenced my thinking and growth."
    >
      {books.map((book, index) => (
        <motion.div
          key={book.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400" style={{ width: '300px' }}>
            <div className="relative h-48 w-full">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {book.category}
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-1">{book.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{book.author}</p>
              <div className="flex justify-center items-center mb-3">
                <span className="text-yellow-400 text-lg mr-1">★</span>
                <span className="text-gray-300 text-sm">{book.rating}/5</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{book.description}</p>
              <div className="space-y-1">
                {book.keyPoints.map((point, i) => (
                  <p key={i} className="text-gray-300 text-sm">• {point}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Grid>
  );
} 