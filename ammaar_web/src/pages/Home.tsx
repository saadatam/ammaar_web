import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
      title: "Vitra - Real Time Voice Transliteration",
      description: "Voice translation for patients and healthcare workers to apply the right diagnosis regardless of language. Compatible with 12 languages with AI dialect detection.",
      imageUrl: "/placeholder.png",
      tech: ["Google Gemini API 1.5 Pro", "Flask", "Pinecone", "TensorFlow Lite", "PyTorch", "Wav2Vec2"],
      githubUrl: "https://github.com/saadatam",
      date: "April 2024"
    },
    {
      title: "Search Engine",
      description: "Implemented a map-reduce pipeline using Python and SQL databases to develop a scalable search engine similar to Google or Bing using a segmented inverted index. Analyzed a database of 2000+ web pages to calculate the term frequency, inverse document frequency, and page priority to produce an inverted index system after Google's PageRank model.",
      imageUrl: "/placeholder.png",
      tech: ["Python", "SQL", "Jinja2", "HTML/CSS", "React"],
      githubUrl: "https://github.com/saadatam",
      date: "April 2024"
    },
    {
      title: "Insta485 - Instagram Clone",
      description: "Developed an Instagram clone web app hosted on an AWS node using server/client side dynamic pages and REST APIs. Implemented a full-stack web app enabling users to create posts, comments, personalized profiles with a pagination feed by leveraging Flask, Python, React.js, and a SQLite database to support over 1000 users.",
      imageUrl: "/placeholder.png",
      tech: ["React.js", "AWS", "Flask", "Python", "SQL", "JavaScript"],
      githubUrl: "https://github.com/saadatam",
      date: "February 2024"
    },
    {
      title: "Multicycle CPU Simulator",
      description: "Designed a pipelined CPU assembler, cache, and simulator inspired by ARM64's CPU architecture. Features models include reg instructions (add/nor/store/load/jalr/noop) for assembly in a multicycle processor, for fetching, hazard optimizations, and arithmetic logic unit (ALU). Caching with an L1 least recently used (LRU) model for speed and memory optimizations by leveraging spacial and temporal locality.",
      imageUrl: "/placeholder.png",
      tech: ["C/C++", "Assembly", "Makefiles", "Command Line UI"],
      githubUrl: "https://github.com/saadatam",
      date: "January 2024"
    },
    {
      title: "Piazza Classifier Machine Learning AI Algorithm",
      description: "Designed a classifier machine that identifies topics of posts on the community web application, Piazza, using the bag of words model and training data. Collaborated with a team to build an accurate algorithm that has a 90% prediction rate with reports of vocable frequencies, intel labeling, and version control system updating.",
      imageUrl: "/placeholder.png",
      tech: ["C++", "CSV", "Machine Learning", "Bag of Words Model"],
      githubUrl: "https://github.com/saadatam",
      date: "March 2023"
    },
    {
      title: "Ammaars.com",
      description: "Biography of a really cool guy - Personal website showcasing my journey, projects, and interests.",
      imageUrl: "/placeholder.png",
      tech: ["TypeScript", "Tailwind CSS", "Vite", "React", "EmailJS"],
      githubUrl: "https://github.com/saadatam",
      date: "December 2023"
    },
    {
      title: "MuslimMunch",
      description: "Muslims want to find halal certified food near them without searching the entire internet and network. MuslimMunch solves this by connecting a community by consolidating halal options within the grasp of your fingertips.",
      imageUrl: "/placeholder.png",
      tech: ["Node.js", "PostgreSQL", "React Native"],
      githubUrl: "https://github.com/saadatam",
      date: "March 2024"
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
      company: "KLA",
      role: "Software Engineering Intern",
      duration: "May 2024 - Aug. 2024",
      location: "Ann Arbor, Michigan",
      tech: ["Java", "gRPC", "DevOps", "REST", "protobuf", "CI/CD"],
      logo: "/icons/KLA.png",
      description: [
        "Developed a scalable API web app that integrates hardware controllers using a microservice and plug-in based architecture.",
        "Introduced automation by utilizing gRPC, Java, and protobuf to decrease tool interface development time by 50% across company 3+ divisions."
      ]
    },
    {
      company: "MIDAS, University of Michigan Institute of Data Science",
      role: "Web Intern",
      duration: "Nov. 2023 - May 2024",
      location: "Ann Arbor, Michigan",
      tech: ["HTML", "CSS", "WordPress", "AwesomeTables", "WPBakery"],
      logo: "/icons/UofM.png",
      description: [
        "Collaborated with MIDAS team to continuously integrate feedback onto web pages catered to UofM's Institute of Data Science to automate and enhance user interface experience.",
        "Improved the website's traffic flow by optimizing 12+ web pages during the F23/W24 semesters."
      ]
    },
    {
      company: "Vitra - Google × MHacks",
      role: "Web App Developer",
      duration: "April. 2024",
      location: "University of Michigan",
      tech: ["Gemini Pro 1.5", "Python", "Flask", "React.js"],
      logo: "/icons/Google.png",
      description: [
        "Developed Vitra, a real-time voice transliteration mobile/web app using Python, Flask, and Vite React.js along with Google's Gemini Pro 1.5 model to support over 40 languages.",
        "Proactively collaborated under 24 hour constraints to deliver MVP of app for healthcare professionals that reduces miscommunication to minorities."
      ]
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
      {/* <div className="fixed inset-0 bg-black bg-opacity-50"></div> */}
      
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
        <h1 className="text-5xl md:text-7xl font-black mb-2 font-mono tracking-tight" style={{
          background: 'linear-gradient(to right, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
        }}>
          Ammaar Saadat
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-mono mb-6"
          style={{
            fontStyle: 'italic',
            background: 'linear-gradient(to right, #FFB347, #FFCC33)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 15px rgba(255, 179, 71, 0.4)',
            letterSpacing: '0.05em'
          }}
        >
          ["ah-m-are"]
        </motion.p>
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
          ref={dropdownRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 relative z-50"
        >
          <motion.button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-16 sm:py-8 font-black text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-400 min-w-[280px] sm:min-w-[350px] rounded-full font-mono tracking-wide"
              >
                {/* Glowing background effect */}
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-yellow-400 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] rounded-full"></span>
                
                {/* Button background */}
                <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors duration-300 rounded-full"></span>
                
                {/* Button text with icon */}
                <span className="relative text-yellow-400 group-hover:text-gray-900 flex items-center gap-2 sm:gap-4">
              <span className="text-lg sm:text-2xl">Explore My World</span>
                  <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                    className="text-xl sm:text-3xl"
                  >
                ↓
                  </motion.span>
                </span>
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 mx-auto mt-4 w-[280px] sm:w-[350px] bg-gray-900 rounded-2xl border-2 border-yellow-400 overflow-hidden"
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

      {/* Experience Section - Updated styling */}
      <div className="relative z-10 w-full py-20 pointer-events-auto">
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
            <div className="w-full max-w-3xl mx-auto">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{
                      backgroundColor: 'rgba(255, 236, 179, 0.15)',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      {/* Company logo and name */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
                              borderRadius: '0.25rem',
                              background: '#fff',
                              border: '1px solid #eee'
                            }}
                          />
                        )}
                        <div>
                          <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            color: '#FFB347',
                            marginBottom: '0.25rem'
                          }}>
                            {exp.role}
                          </h3>
                          <p style={{
                            color: '#d1d5db',
                            fontSize: '1rem'
                          }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-left sm:mt-0 sm:text-right">
                        <p style={{
                          color: '#FFB347',
                          fontSize: '0.875rem',
                          fontWeight: 'medium'
                        }}>
                          {exp.duration}
                        </p>
                        <p style={{
                          color: '#d1d5db',
                          fontSize: '0.875rem'
                        }}>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul style={{
                      color: '#d1d5db',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      marginLeft: '1rem',
                      listStyle: 'disc'
                    }}>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {exp.tech.map((tech, techIndex) => (
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

      {/* Projects Section - Removed dark background */}
      <div className="relative z-10 w-full py-12 pointer-events-auto">
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
            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)',
                      backdropFilter: 'blur(10px)'
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
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}>
                      {project.date}
                    </p>
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

      {/* Resume Button - Updated styling */}
      <div className="relative z-10 w-full py-8 pointer-events-auto">
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
            style={{
              backgroundColor: 'rgba(255, 236, 179, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FFB347',
              boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)'
            }}
          >
                {/* Button text with icon */}
            <span className="relative text-[#FFB347] group-hover:text-[#FFCC33] flex items-center gap-3">
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

      {/* Skills Section*/}
      <div className="relative z-10 w-full py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Technical Skills
            </h2>
            <div className="w-full max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: '2px solid #FFB347',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%',
                      boxShadow: '0 0 20px rgba(255, 179, 71, 0.1)',
                      backdropFilter: 'blur(10px)'
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
            <h2 className="text-3xl font-bold mb-8 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Contact Me
            </h2>
            <div className="w-full max-w-3xl mx-auto px-4">
              <ContactForm />
            </div>
          </motion.div>

          {/* Footer */}
          <Footer/>
    </div>
  );
}