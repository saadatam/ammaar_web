import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      imageUrl: "/placeholder.png",
      tech: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/saadatam" // Add your actual GitHub URL
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered tool that generates unique images based on text prompts.",
      tech: ["Python", "TensorFlow", "React"],
      githubUrl: "https://github.com/saadatam" // Add your actual GitHub URL
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" }
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "CI/CD", level: "Intermediate" }
      ]
    }
  ];

  const experiences = [
    {
      company: "Company Name",
      role: "Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of key features for the company's flagship product, resulting in a 40% increase in user engagement.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      company: "Previous Company",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained multiple web applications, improving system performance by 25% through optimization.",
      technologies: ["TypeScript", "Python", "Docker", "PostgreSQL"]
    },
    {
      company: "Startup Company",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      location: "New York, NY",
      description: "Built responsive user interfaces and implemented new features that increased user retention by 30%.",
      technologies: ["React", "Redux", "Sass", "Jest"]
    }
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

      {/* Main content with name and dropdown */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-40 flex flex-col items-center justify-center min-h-screen px-4 text-center pointer-events-auto pt-24"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 font-mono tracking-tight" style={{
          background: 'linear-gradient(to right, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
        }}>
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
              'Volleyball Player..',
              1500,
              'Food Photographer..',
              1500,
              'Fashion Inspirer..',
              1500,
              'Photography Learner..',
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

        {/* Navigation Dropdown */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 relative z-50"
        >
          <motion.button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-16 py-8 font-black text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-400 min-w-[350px] rounded-full font-mono tracking-wide"
              >
                {/* Glowing background effect */}
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-yellow-400 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] rounded-full"></span>
                
                {/* Button background */}
                <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors duration-300 rounded-full"></span>
                
                {/* Button text with icon */}
                <span className="relative text-yellow-400 group-hover:text-gray-900 flex items-center gap-4">
              <span className="text-xl sm:text-2xl">Explore My World</span>
                  <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                    className="text-2xl sm:text-3xl"
                  >
                ↓
                  </motion.span>
                </span>
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[350px] bg-gray-900 rounded-2xl border-2 border-yellow-400 overflow-hidden"
              >
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-6 py-4 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 text-lg font-medium"
                      >
                        {item.name}
              </Link>
            </motion.div>
          ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

      {/* Experience Section */}
      <div className="relative z-10 w-full bg-black bg-opacity-50 py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Professional Experience
            </h2>
            <div style={{
              maxWidth: '50vw',
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ 
                      backgroundColor: '#1a1a1a',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start'
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 'bold',
                          color: '#FFB347',
                          marginBottom: '0.25rem'
                        }}>
                          {experience.role}
                        </h3>
                        <p style={{
                          color: '#d1d5db',
                          fontSize: '1rem'
                        }}>
                          {experience.company}
                        </p>
                      </div>
                      <div style={{
                        textAlign: 'right'
                      }}>
                        <p style={{
                          color: '#FFB347',
                          fontSize: '0.875rem',
                          fontWeight: 'medium'
                        }}>
                          {experience.duration}
                        </p>
                        <p style={{
                          color: '#d1d5db',
                          fontSize: '0.875rem'
                        }}>
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '0.875rem',
                      lineHeight: '1.5'
                    }}>
                      {experience.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            backgroundColor: 'rgba(255, 179, 71, 0.1)',
                            color: '#FFB347',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 'medium'
                          }}
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
        </div>
      </div>

      {/* Projects Section - Reduced top padding */}
      <div className="relative z-10 w-full bg-black bg-opacity-50 py-12 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Featured Projects
            </h2>
            <div style={{
              maxWidth: '50vw',
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (minWidth: 640px)': {
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
                }
              }}>
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ 
                      backgroundColor: '#1a1a1a',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#FFB347',
                      marginBottom: '0.5rem'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: '#d1d5db',
                      marginBottom: '1rem'
                    }}>
                      {project.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      justifyContent: 'center'
                    }}>
                      {project.tech.map((tech, techIndex) => (
                            <span 
                          key={techIndex}
                          style={{
                            backgroundColor: '#FFB347',
                            color: '#1a1a1a',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 'bold'
                          }}
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
        </div>
      </div>

      {/* Resume Button - Added background container */}
      <div className="relative z-10 w-full bg-black bg-opacity-50 py-8 pointer-events-auto">
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
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-400 min-w-[200px] rounded-full"
              >
                {/* Glowing background effect */}
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-yellow-400 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] rounded-full"></span>
                
                {/* Button background */}
            <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors duration-300 rounded-full"></span>
                
                {/* Button text with icon */}
            <span className="relative text-yellow-400 group-hover:text-gray-900 flex items-center gap-3">
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
      </div>

      {/* Skills Section */}
      <div className="relative z-10 w-full bg-black bg-opacity-50 py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Technical Skills
            </h2>
            <div style={{
              maxWidth: '50vw',
              margin: '0 auto',
              padding: '0 1rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (minWidth: 640px)': {
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
                },
                '@media (minWidth: 1024px)': {
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
                }
              }}>
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ 
                      backgroundColor: '#1a1a1a',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#FFB347',
                      marginBottom: '1rem'
                    }}>
                      {skillCategory.category}
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      width: '100%'
                    }}>
                      {skillCategory.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem',
                            backgroundColor: 'rgba(255, 179, 71, 0.1)',
                            borderRadius: '0.5rem'
                          }}
                        >
                          <span style={{
                            color: '#FFB347',
                            fontWeight: 'medium'
                          }}>
                            {tech.name}
                          </span>
                          <span style={{
                            color: '#d1d5db',
                            fontSize: '0.875rem'
                          }}>
                            {tech.level}
                            </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
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
              className="flex items-center gap-2 px-6 py-2 rounded-lg transition-all"
              style={{
                backgroundColor: 'rgba(255, 179, 71, 0.2)',
                color: '#FFB347',
                border: '2px solid #FFB347'
              }}
                >
                  <img 
                    src={platform.icon} 
                    alt={`${platform.name} icon`} 
                    className="w-[100px] h-[100px] object-contain"
                  />
                  {platform.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <Footer/>
    </div>
  );
}