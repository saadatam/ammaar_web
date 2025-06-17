import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const navItems = [
    { name: 'About Me', path: '/about' },
    { name: 'Fashion', path: '/fashion' },
    { name: 'Books', path: '/books' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'My Plants', path: '/plants' },
    { name: 'Travel', path: '/travel' },
    { name: 'Photography', path: '/photography' },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/Warm_Tech.png")',
          filter: 'brightness(0.3)',
          width: '100vw',
          height: '100vh',
          minHeight: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      
      {/* Optional: Additional overlay for better text readability */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      
      {/* Animated grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing orb effect */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 font-mono tracking-tight">
          Ammaar Saadat
        </h1>
        <h1 className="text-4xl md:text-6xl font-black mb-6 font-mono">
          <TypeAnimation
            sequence={[
              '', 3000,
              'Software Engineer..',
              1500,
              'Problem Solver..',
              1500,
              'Garden Enthusiast..',
              1500,
              'Adventurous Traveler..',
              1500,
              'Garden Enthusiast..',
              1500,
              'Garden Enthusiast..',
              1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-white"
          />
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl font-mono"
        >
          Crafting digital experiences with modern technologies and creative solutions
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col gap-16 w-full"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, -1, 1, 0],
                transition: {
                  rotate: {
                    duration: 0.4,
                    repeat: 0,
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 0.2
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              className="py-2"
            >
              <Link
                to={item.path}
                className="group relative inline-flex items-center justify-center px-16 py-8 font-black text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-400 min-w-[350px] rounded-full font-mono tracking-wide"
              >
                {/* Glowing background effect */}
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-yellow-400 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] rounded-full"></span>
                
                {/* Button background */}
                <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors duration-300 rounded-full"></span>
                
                {/* Button text with icon */}
                <span className="relative text-yellow-400 group-hover:text-gray-900 flex items-center gap-4">
                  <span className="text-xl sm:text-2xl">{item.name}</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-2xl sm:text-3xl"
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Picture Section - Viewport Responsive with larger size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mt-24 mb-20"
        >
          <div className="relative">
            {/* Glowing effect behind the image */}
            <div className="absolute inset-0 bg-green-400 blur-xl opacity-20 rounded-full transform -translate-y-1"></div>
            
            {/* Profile image container - Viewport Responsive (larger size) */}
            <div 
              className="relative mx-auto rounded-full overflow-hidden border-2 border-green-400 shadow-lg"
              style={{ 
                width: 'min(80vw, 600px)', // Increased from 60vw to 80vw
                height: 'min(80vw, 600px)', // Increased from 60vw to 80vw
                margin: 'min(5vw, 50px)'
              }}
            >
              <img
                src="/Alaska_Ammaar3.JPG"
                alt="Ammaar Saadat"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements - Also viewport responsive */}
            <div 
              className="absolute border-t-2 border-l-2 border-green-400"
              style={{
                top: 'min(-1vw, -8px)',
                left: 'min(-1vw, -8px)',
                width: 'min(2vw, 16px)',
                height: 'min(2vw, 16px)'
              }}
            />
            <div 
              className="absolute border-b-2 border-r-2 border-green-400"
              style={{
                bottom: 'min(-1vw, -8px)',
                right: 'min(-1vw, -8px)',
                width: 'min(2vw, 16px)',
                height: 'min(2vw, 16px)'
              }}
            />
          </div>
        </motion.div>

        {/* Animated cursor */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-2 h-6 bg-green-400 mt-12"
        />
      </motion.div>

      {/* Example Content Section */}
      <div className="relative z-10 w-full bg-black bg-opacity-50 py-20">
        <div className="container mx-auto px-6">
          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Featured Projects</h2>
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 place-items-center">
                {[
                  {
                    title: "E-Commerce Platform",
                    description: "A full-stack e-commerce solution with real-time inventory management.",
                    imageUrl: "/placeholder.png",
                    tech: ["React", "Node.js", "MongoDB"]
                  },
                  {
                    title: "AI Image Generator",
                    description: "An AI-powered tool that generates unique images based on text prompts.",
                    tech: ["Python", "TensorFlow", "React"]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 bg-gray-900 p-6 rounded-2xl border-2 border-green-400 text-center"
                    // style={{ width: '300px' }}
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-green-400 bg-opacity-20 text-green-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
         {/* Resume Button */}
         <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.a
                href="/Ammaar_Saadat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, -1, 1, 0],
                  transition: {
                    rotate: {
                      duration: 0.4,
                      repeat: 0,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.2
                    }
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-400 min-w-[200px] rounded-full"
              >
                {/* Glowing background effect */}
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-green-400 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.3)] rounded-full"></span>
                
                {/* Button background */}
                <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-green-400 group-hover:bg-green-400 transition-colors duration-300 rounded-full"></span>
                
                {/* Button text with icon */}
                <span className="relative text-green-400 group-hover:text-gray-900 flex items-center gap-3">
                  <span className="text-lg">View Resume</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Featured Projects</h2>
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 place-items-center">
                {[
                  {
                    title: "E-Commerce Platform",
                    description: "A full-stack e-commerce solution with real-time inventory management.",
                    imageUrl: "/placeholder.png",
                    tech: ["React", "Node.js", "MongoDB"]
                  },
                  {
                    title: "AI Image Generator",
                    description: "An AI-powered tool that generates unique images based on text prompts.",
                    tech: ["Python", "TensorFlow", "React"]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 bg-gray-900 p-6 rounded-2xl border-2 border-green-400 text-center"
                    // style={{ width: '300px' }}
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-green-400 bg-opacity-20 text-green-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Section - Moved up and updated with wave icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
               {/* Contact Form */}
            <ContactForm />
            <div className="flex justify-center gap-6">
              {[
                { name: 'GitHub', icon: '/icons/github_icon.png' },
                { name: 'LinkedIn', icon: '/wave-icon.png' }
              ].map((platform) => (
                <motion.button
                  key={platform.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-2 bg-green-400 bg-opacity-20 text-green-400 rounded-lg hover:bg-opacity-30 transition-all"
                >
                  <img 
                    src={platform.icon} 
                    alt={`${platform.name} icon`} 
                    className="w-5 h-5"
                  />
                  {platform.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <Footer/>
        </div>
      </div>
    </div>
  );
}