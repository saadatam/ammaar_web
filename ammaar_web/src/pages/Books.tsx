import { motion } from 'framer-motion';
import Grid from '../components/Grid';

const currentlyReading = [
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    imageUrl: "/photography/heritage1.jpeg",
    category: "Creativity",
    rating: 4.5,
    description: "A look into the creative process by legendary music producer Rick Rubin.",
    keyPoints: [
      "Embracing uncertainty",
      "The art of listening",
      "Creative rituals"
    ]
  }
  // Add more currently reading books here
];

const readBooks = [
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    imageUrl: "/photography/a2_arb1.jpeg",
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
    imageUrl: "/photography/a2_arb2.jpeg",
    category: "Self-Development",
    rating: 4.5,
    description: "An easy and proven way to build good habits and break bad ones.",
    keyPoints: [
      "Habit formation",
      "Behavioral psychology",
      "Personal growth"
    ]
  }
  // Add more read books here
];

function BookCard({ book }: { book: typeof currentlyReading[0] }) {
  return (
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
  );
}

export default function Books() {
  return (
    <div className="min-h-screen w-full relative">
      <Grid title="Books I'm Reading" description="A collection of books that have influenced my thinking and growth.">
        {/* Currently Reading Section */}
        <div className="mb-12 w-full col-span-full">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Currently Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {currentlyReading.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Read Section */}
        <div className="w-full col-span-full">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Read</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {readBooks.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
      </Grid>
    </div>
  );
} 