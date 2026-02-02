import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';

// First complete sentence for compact preview; use full text when expanded
function firstSentence(text: string): string {
  const match = text.match(/^[^.!?]*[.!?]/);
  return match ? match[0].trim() : text.trim();
}

export default function Home() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  const [expandedExperiences, setExpandedExperiences] = useState<Set<number>>(new Set());

  const toggleProject = (i: number) => setExpandedProjects((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  const toggleExperience = (i: number) => setExpandedExperiences((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });

  const projects = [
    {
      title: "Multi-Threaded Network File Server",
      description: "Built a scalable thread-per-request file server supporting 4 network commands and 95% protocol data validation compliance with client requests by introducing per-file locking and hand-over-hand traversal for safe parallel access to shared file system state. Handled 1,000+ concurrent client requests test programs avoiding race conditions or memory leaks and verified via stress tests and edge-case validations for malformed inputs and I/O failures.",
      imageUrl: "/placeholder.png",
      tech: ["C++", "Networking", "File Systems", "Threads"],
      githubUrl: "https://github.com/saadatam",
      date: "April 2025"
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
      description: "Developed a multicycle CPU and unified L2 cache simulator in C for the LC2K architecture, implementing configurable block size, set associativity, and LRU replacement. Supported write-back and write-allocate policies, achieving optimizations across 20+ assembly test programs with detailed memory transfer tracking, and hazard optimizations.",
      imageUrl: "/placeholder.png",
      tech: ["C", "Assembly", "LC2k", "ARM"],
      githubUrl: "https://github.com/saadatam",
      date: "April 2024"
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
      category: "Languages",
      technologies: [
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
        { name: "C" },
        { name: "JavaScript" },
        { name: "Swift" },
        { name: "Flutter" },
        { name: "HTML/CSS5" }
      ]
    },
    {
      category: "Developer Tools",
      technologies: [
        { name: "VSCode" },
        { name: "IntelliJ" },
        { name: "XCode" },
        { name: "MATLAB" },
        { name: "GM Studio 2" },
        { name: "Maven" },
        { name: "Git" },
        { name: "Docker" }
      ]
    },
    {
      category: "Frameworks",
      technologies: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind" },
        { name: "gRPC" },
        { name: "Next.js" },
        { name: "Flask" },
        { name: "SQL" },
        { name: "Excel" },
        { name: "WordPress" },
        { name: "React Native" },
        { name: "Django" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "REST" },
        { name: "Jinja2" },
        { name: "WPBakery" }
      ]
    },
    {
      category: "Interests",
      technologies: [
        { name: "Volleyball" },
        { name: "Hiking" },
        { name: "Gardening" },
        { name: "Pokemon Go" },
        { name: "Raspberry Pi-5" },
        { name: "Networking" },
        { name: "Cafe Business" }
      ]
    }
  ];

  const education = [
    {
      school: "University of Michigan - Ann Arbor",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      distinction: "Dean's List - Honors Recognition",
      expected: "May 2025",
      location: "Ann Arbor, Michigan"
    },
    {
      school: "Michigander Scholars in Semiconductors Scholarship - KLA",
      degree: "Awarded $5,000 for academic excellence to Michigan's semiconductor industry",
      distinction: undefined,
      expected: "January 2025",
      location: "Ann Arbor, Michigan"
    }
  ];

  const experiences = [
    {
      company: "KLA",
      role: "Software Engineering Intern",
      duration: "May - August 2024",
      location: "Ann Arbor, Michigan",
      tech: ["Semiconductors", "Java", "gRPC", "GitHub", "Postman"],
      logo: "/icons/KLA.png",
      description: [
        "Developed a scalable internal app across 2+ divisions by integrating remote machine controllers using a microservice/plug-in based API architecture for global labs, reducing internal tool interaction time by 30%.",
        "Designed 8+ automation API endpoints for remote access to internal tools via global deployment across offices, standardizing interactions across California and Michigan offices."
      ]
    },
    {
      company: "Sarf",
      role: "Software Engineer",
      duration: "August - December 2025",
      location: "New York City, New York",
      tech: ["Next.js", "React", "iOS", "Android", "Supabase"],
      logo: "/icons/Sarf.png",
      description: [
        "Raised up to $200,000 by developing the marketing site and demoing the platform to partners, leading to 50+ early sign-ups, 5 investor pitches, and moved product toward patent-pending status.",
        "Developed an interest-free AI finance platform using Next.js, React, Expo, and Supabase — implementing user accounts, authentication, AI itinerary generation prototyping, payment flow, ledger system, and integrating live market-data APIs for real-time financial context."
      ]
    },
    {
      company: "Takhat Cafe",
      role: "Co-Founder",
      duration: "March 2025 - Present",
      location: "Westland, MI",
      tech: ["Project Management", "Leadership", "Marketing"],
      logo: "/icons/takhat_cafe_logo.png",
      description: [
        "Led marketing team by advertising on social media, community events, and designing flyers to reach 5k unique accounts in 3 months, resulting in 1000+ sales.",
        "Collaborated with 10 organizations across Michigan to partner events, reaching over 800 customers satisfied.",
        "Secured 10+ clients by pitching services and adjusting based on clientele feedback, resulting in 1.2k units sold in 6+ cities."
      ]
    },
    {
      company: "Vitra.AI",
      role: "Co-founder",
      duration: "May 2025 - Present",
      location: "University of Michigan",
      tech: ["Gemini", "Python", "Flask", "React"],
      logo: "/icons/Google.png",
      description: [
        "Co-founded Vitra, a non-profit AI transliteration app to reduce diagnosis time and increase accuracy for patients with different language barriers via 40+ languages for real-time communication.",
        "Scaled ideation to an MVP with demos of 2 clinics by assembling and managing a team of undergraduate engineers using agile workflows, Gantt charts, and phased prototyping to demo."
      ]
    },
    
    {
      company: "University of Michigan - MIDAS",
      role: "Web Intern",
      duration: "Nov. 2023 - May 2024",
      location: "University of Michigan",
      tech: ["WordPress", "HTML/CSS5", "AwesomeTables", "WPBakery"],
      logo: "/icons/UofM.png",
      description: [
        "Designed MIDAS websites to improve university-wide marketing of 5+ AI events, incorporating real-time feedback to increase web traffic during the F23/W24 semesters across WordPress and the University of Michigan database."
      ]
    },
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

      {/* Title at top — centered, unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-40 pt-20 sm:pt-24 pb-4 px-3 sm:px-4 text-center pointer-events-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 font-mono tracking-tight" style={{
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
          transition={{ delay: 0.15, duration: 0.25 }}
          className="text-base sm:text-lg md:text-xl font-mono mb-2 sm:mb-3"
          style={{
            fontStyle: 'italic',
            background: 'linear-gradient(to right, #FFB347, #FFCC33)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em'
          }}
        >
          ["aa-m-ar"]
        </motion.p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3 font-mono">
          <TypeAnimation
            sequence={[
              '', 3000,
              'Software Engineer.',
              1500,
              'Problem Solver.',
              1500,
              'Garden Enthusiast.',
              1500,
              'Adventurous Traveler.',
              1500,
              'Volleyball Player.',
              1500,
              'Food Photographer.',
              1500,
              'Fashion Inspirer.',
              1500,
              'Photography Learner.',
              1500,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-white"
          />
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.25 }}
          className="text-gray-300 text-sm sm:text-base font-mono"
        >
          Crafting digital experiences with modern technologies and creative solutions
        </motion.p>
      </motion.div>

      {/* PFP left, Introduction center, Resume / GitHub / LinkedIn right */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 pb-4 sm:pb-6 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6"
        >
          {/* Left: PFP */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-green-400 blur-lg opacity-20 rounded-full -translate-y-0.5" />
            <div className="relative rounded-full overflow-hidden border-2 border-green-400 shadow-lg w-[min(40vw,200px)] h-[min(40vw,200px)] sm:w-[180px] sm:h-[180px]">
              <img src="/Grad_Ammaar.jpeg" alt="Ammaar Saadat" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-green-400" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-green-400" />
          </div>

          {/* Center: Introduction (from About) — rounded card like other sections */}
          <div
            className="flex-1 min-w-0 rounded-lg border-2 border-[#FFB347] p-3 sm:p-4 text-center sm:text-left"
            style={{
              backgroundColor: 'rgba(255, 236, 179, 0.1)',
              boxShadow: '0 0 12px rgba(255, 179, 71, 0.08)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <h2
              className="text-base sm:text-lg font-bold mb-2 sm:mb-3 pb-2 border-b-2 border-[#FFB347]"
              style={{
                background: 'linear-gradient(to right, #FFB347, #FFCC33)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              About Me
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto sm:mx-0">
            I'm a new grad software engineer from the University of Michigan with a Bachelor's Degree of Engineering. I've worked on scaling microservices as an software intern at KLA for developer semiconductor analysis, 
            and have worked as a founding software engineer at Sarf, where I raised up to $200k within 5 months by developing the platform via implementing Next.js, Typescript, and AI prototypes  demoing to partners. I'm looking for a fulltime role. 
              {/* I'm a passionate software engineer and AI enthusiast based in Ann Arbor, Michigan.
              With a strong foundation in computer science and a keen interest in emerging technologies,
              I specialize in building innovative solutions that push the boundaries of what's possible.
              I love collaborating on projects that blend creativity, technology, and real-world impact. */}
            </p>
          </div>

          {/* Right: Resume, GitHub, LinkedIn buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[160px] flex-shrink-0">
            <motion.a
              href="/Ammaar_Saadat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#FFB347] text-[#FFB347] text-sm font-semibold hover:bg-[#FFB347]/10 transition-colors"
              style={{ backgroundColor: 'rgba(255,236,179,0.08)', backdropFilter: 'blur(8px)' }}
            >
              Resume
            </motion.a>
            <motion.a
              href="https://github.com/saadatam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#FFB347] text-[#FFB347] text-sm font-semibold hover:bg-[#FFB347]/10 transition-colors"
              style={{ backgroundColor: 'rgba(255,236,179,0.08)', backdropFilter: 'blur(8px)' }}
            >
              <img src="/icons/github_icon.png" alt="" className="w-5 h-5 object-contain opacity-90" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ammaar-saadat-0867a822a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#FFB347] text-[#FFB347] text-sm font-semibold hover:bg-[#FFB347]/10 transition-colors"
              style={{ backgroundColor: 'rgba(255,236,179,0.08)', backdropFilter: 'blur(8px)' }}
            >
              <img src="/icons/linkedin_icon.png" alt="" className="w-5 h-5 object-contain opacity-90" />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Experience (left) + Projects (right) — one card each, underlined titles */}
      <div className="relative z-10 w-full py-4 sm:py-5 pointer-events-auto">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
          >
            {/* Left: Professional Experience — one card, tight spacing */}
            <div
              className="rounded-lg border-2 border-[#FFB347] p-3 sm:p-4 flex flex-col flex-1 min-h-0"
              style={{
                backgroundColor: 'rgba(255, 236, 179, 0.1)',
                boxShadow: '0 0 12px rgba(255, 179, 71, 0.08)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <h2
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3 pb-2 border-b-2 border-[#FFB347]"
                style={{
                  background: 'linear-gradient(to right, #FFB347, #FFCC33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Professional Experience
              </h2>
              <ul className="flex flex-col gap-2 sm:gap-2.5 list-none p-0 m-0">
                {experiences.map((exp, index) => {
                  const isExp = expandedExperiences.has(index);
                  const firstLine = exp.description[0] ? firstSentence(exp.description[0]) : '';
                  return (
                    <li key={exp.company} className="border-b border-[#FFB347]/30 pb-2 last:border-0 last:pb-0 last:mb-0">
                      <div className="flex items-center gap-2">
                        {exp.logo && (
                          <img src={exp.logo} alt="" className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded bg-white border border-gray-200 flex-shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base font-bold text-[#FFB347]">{exp.role}</h3>
                          <p className="text-gray-300 text-xs sm:text-sm">{exp.company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[#FFB347] text-[10px] sm:text-xs font-medium">{exp.duration}</p>
                          <p className="text-gray-400 text-[10px] sm:text-xs">{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-snug mt-1">{isExp ? null : firstLine}</p>
                      {isExp && (
                        <ul className="text-gray-300 text-xs sm:text-sm list-disc ml-4 space-y-0.5 mt-1">
                          {exp.description.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                      <div className="flex justify-center mt-2">
                        <button
                          type="button"
                          onClick={() => toggleExperience(index)}
                          aria-label={isExp ? 'Collapse' : 'Expand'}
                          className="text-[#FFB347] min-w-[72px] py-1 px-3 rounded-full flex justify-center items-center transition-colors bg-white/10 hover:bg-white/18 text-xs"
                        >
                          <motion.span animate={{ rotate: isExp ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-block">▼</motion.span>
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-[#FFB347]/10 text-[#FFB347] px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Featured Projects — one card */}
            <div
              className="rounded-lg border-2 border-[#FFB347] p-3 sm:p-4 flex flex-col"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                boxShadow: '0 0 12px rgba(255, 179, 71, 0.08)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <h2
                className="text-base sm:text-lg font-bold mb-4 pb-2 border-b-2 border-[#FFB347]"
                style={{
                  background: 'linear-gradient(to right, #FFB347, #FFCC33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Featured Projects
              </h2>
              <ul className="flex flex-col gap-2 sm:gap-2.5 list-none p-0 m-0">
                {projects.map((project, index) => {
                  const isExp = expandedProjects.has(index);
                  const summary = firstSentence(project.description);
                  return (
                    <li key={project.title} className="border-b border-[#FFB347]/30 pb-2 last:border-0 last:pb-0 last:mb-0" style={{ wordBreak: 'break-word' }}>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-sm sm:text-base font-bold text-[#FFB347]">{project.title}</h3>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} on GitHub`}
                          className="text-[#FFB347] hover:text-[#FFCC33] transition-colors flex-shrink-0"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                      <p className="text-gray-400 text-[10px] sm:text-xs italic">{project.date}</p>
                      <p className="text-gray-300 text-xs sm:text-sm leading-snug mt-0.5">
                        {isExp ? project.description : summary}
                      </p>
                      <div className="flex justify-center mt-2">
                        <button
                          type="button"
                          onClick={() => toggleProject(index)}
                          aria-label={isExp ? 'Collapse' : 'Expand'}
                          className="text-[#FFB347] min-w-[72px] py-1 px-3 rounded-full flex justify-center items-center transition-colors bg-white/10 hover:bg-white/18 text-xs"
                        >
                          <motion.span animate={{ rotate: isExp ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-block">▼</motion.span>
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="bg-[#FFB347]/10 text-[#FFB347] px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education - from resume */}
      <div className="relative z-10 w-full py-4 sm:py-5 pointer-events-auto">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-lg border-2 border-[#FFB347] p-3 sm:p-4"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                boxShadow: '0 0 12px rgba(255, 179, 71, 0.08)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <h2
                className="text-base sm:text-lg font-bold mb-3 pb-2 border-b-2 border-[#FFB347]"
                style={{
                  background: 'linear-gradient(to right, #FFB347, #FFCC33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Education & Awards
              </h2>
              <ul className="space-y-3 list-none p-0 m-0">
                {education.map((ed) => (
                  <li key={ed.school} className="text-gray-300 text-sm">
                    <p className="text-[#FFB347] font-bold">{ed.school}</p>
                    <p className="text-gray-300">{ed.degree}</p>
                    {ed.distinction && <p className="text-gray-400 text-xs italic">{ed.distinction}</p>}
                    <p className="text-gray-400 text-xs mt-0.5">{ed.expected} · {ed.location}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-xs mt-3 pt-2 border-t border-[#FFB347]/30">
                <span className="text-[#FFB347] font-medium">Relevant Coursework:</span> Operating Systems, Web Systems, Computer Security, User Interface Development, Computer Architecture, Info Retrieval, Human-Centered Software, Data Driven Software, Linear Algebra, Calc I–III
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section - compact */}
      <div className="relative z-10 w-full py-4 sm:py-6 pointer-events-auto">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} viewport={{ once: true }}>
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Technical Skills
            </h2>
            <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="rounded-lg border-2 border-[#FFB347] p-3 sm:p-4 flex flex-col items-center text-center w-full"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      boxShadow: '0 0 12px rgba(255, 179, 71, 0.08)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#FFB347] mb-2">{skillCategory.category}</h3>
                    <div className="flex flex-col gap-1 w-full">
                      {skillCategory.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex justify-center items-center py-1 px-2 bg-[#FFB347]/10 rounded text-[#FFB347]">
                          <span className="text-[10px] sm:text-xs font-medium">{tech.name}</span>
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

      {/* Contact Section - compact */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8"
      >
        <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center" style={{
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