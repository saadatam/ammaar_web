import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Photography() {
  const photoCategories = [
    {
      title: 'Landscape',
      description: 'Capturing the beauty of nature and urban environments',
      images: [
        { src: '/photos/landscape1.jpg', alt: 'Landscape 1' },
        { src: '/photos/landscape2.jpg', alt: 'Landscape 2' },
        { src: '/photos/landscape3.jpg', alt: 'Landscape 3' },
      ]
    },
    {
      title: 'Portrait',
      description: 'People and emotions in their natural moments',
      images: [
        { src: '/photos/portrait1.jpg', alt: 'Portrait 1' },
        { src: '/photos/portrait2.jpg', alt: 'Portrait 2' },
        { src: '/photos/portrait3.jpg', alt: 'Portrait 3' },
      ]
    },
    {
      title: 'Street',
      description: 'Life and culture in urban settings',
      images: [
        { src: '/photos/street1.jpg', alt: 'Street 1' },
        { src: '/photos/street2.jpg', alt: 'Street 2' },
        { src: '/photos/street3.jpg', alt: 'Street 3' },
      ]
    }
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
        className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 sm:px-12 md:px-16 lg:px-20"
      >
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-8"
        >
          Photography
        </motion.h1>

        {/* Photo Categories */}
        <div className="w-full max-w-7xl mx-auto">
          {photoCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{category.title}</h2>
              <p className="text-gray-300 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 