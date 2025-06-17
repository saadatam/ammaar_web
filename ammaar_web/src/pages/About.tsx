import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const funFacts = [
    "I can solve a Rubik's cube in under 2 minutes",
    "I've visited 15 different countries",
    "I'm fluent in 3 languages: English, Urdu, and Python",
    "I once built a robot that could play chess",
    "I'm an avid rock climber and have climbed in Yosemite",
    "I can play the guitar and piano",
    "I'm a certified scuba diver",
    "I've run a marathon",
    "I'm a coffee enthusiast and can make latte art",
    "I've contributed to open-source projects"
  ];

  const interests = [
    "Artificial Intelligence",
    "Robotics",
    "Quantum Computing",
    "Space Exploration",
    "Sustainable Technology",
    "Ethical Hacking",
    "Digital Art",
    "Photography",
    "Hiking",
    "Cooking"
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 sm:px-12 md:px-16 lg:px-20 text-left"
      >
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-green-400 mb-8"
          >
            About Me
          </motion.h1>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Bio</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software engineer and AI enthusiast based in San Francisco. 
              With a strong foundation in computer science and a keen interest in emerging technologies, 
              I specialize in building innovative solutions that push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Fun Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-black bg-opacity-30 rounded-lg border border-green-400 border-opacity-20"
                >
                  <span className="text-green-400">✨</span>
                  <p className="text-gray-300">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-green-400 bg-opacity-20 text-green-400 rounded-full text-sm"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}