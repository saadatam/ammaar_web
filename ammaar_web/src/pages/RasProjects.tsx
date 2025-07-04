import { motion } from 'framer-motion';
import { useState } from 'react';
import Grid from '../components/Grid';
import ImageModal from '../components/ImageModal';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
}

const projects: Project[] = [
  {
    title: "Smart Home Automation",
    description: "A comprehensive home automation system using Raspberry Pi 5 with IoT sensors and automated controls.",
    imageUrl: "/projects/smart_home.jpg",
    category: "IoT",
    technologies: ["Raspberry Pi 5", "Python", "MQTT", "Node.js", "React"],
    githubUrl: "https://github.com/username/smart-home",
    keyFeatures: [
      "Temperature and humidity monitoring",
      "Automated lighting control",
      "Security camera integration",
      "Mobile app dashboard"
    ]
  },
  {
    title: "Network Monitoring Tool",
    description: "Real-time network monitoring and analytics dashboard built with Raspberry Pi.",
    imageUrl: "/projects/network_monitor.jpg",
    category: "Networking",
    technologies: ["Raspberry Pi 5", "Python", "Grafana", "InfluxDB", "Docker"],
    githubUrl: "https://github.com/username/network-monitor",
    keyFeatures: [
      "Real-time network traffic analysis",
      "Bandwidth monitoring",
      "Device discovery",
      "Alert system"
    ]
  },
  {
    title: "Media Server",
    description: "Personal media streaming server with transcoding capabilities and remote access.",
    imageUrl: "/projects/media_server.jpg",
    category: "Media",
    technologies: ["Raspberry Pi 5", "Plex", "Docker", "Python", "Shell Scripting"],
    githubUrl: "https://github.com/username/media-server",
    keyFeatures: [
      "4K video transcoding",
      "Remote streaming access",
      "Automatic media organization",
      "Multi-device support"
    ]
  },
  {
    title: "Weather Station",
    description: "DIY weather station with environmental sensors and data logging capabilities.",
    imageUrl: "/projects/weather_station.jpg",
    category: "Environmental",
    technologies: ["Raspberry Pi 5", "Python", "SQLite", "Chart.js", "HTML/CSS"],
    githubUrl: "https://github.com/username/weather-station",
    keyFeatures: [
      "Temperature, humidity, pressure sensors",
      "Data logging and visualization",
      "Weather forecasting",
      "Historical data analysis"
    ]
  },
  {
    title: "Security Camera System",
    description: "Multi-camera security system with motion detection and cloud storage.",
    imageUrl: "/projects/security_camera.jpg",
    category: "Security",
    technologies: ["Raspberry Pi 5", "OpenCV", "Python", "AWS S3", "WebRTC"],
    githubUrl: "https://github.com/username/security-camera",
    keyFeatures: [
      "Motion detection and alerts",
      "Cloud video storage",
      "Mobile app access",
      "Night vision support"
    ]
  },
  {
    title: "Retro Gaming Console",
    description: "Classic gaming emulator with custom controller support and game library management.",
    imageUrl: "/projects/retro_gaming.jpg",
    category: "Gaming",
    technologies: ["Raspberry Pi 5", "RetroArch", "Python", "GPIO", "Shell Scripting"],
    githubUrl: "https://github.com/username/retro-gaming",
    keyFeatures: [
      "Multiple console emulation",
      "Custom controller support",
      "Game library management",
      "HDMI output optimization"
    ]
  }
];

const raspberryPiImages = [
  { src: "/computer_rasp.jpeg", alt: "Raspberry Pi 5 - Main" },
  { src: "/Warm_Tech.png", alt: "Raspberry Pi 5 - Warm Tech" },
  { src: "/Warm_Tech2.png", alt: "Raspberry Pi 5 - Warm Tech 2" },
  { src: "/Warm_Tech3.png", alt: "Raspberry Pi 5 - Warm Tech 3" },
  { src: "/Warm_Tech4.png", alt: "Raspberry Pi 5 - Warm Tech 4" }
];

function RaspberryPi5SpecsSlideshow() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-xl">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-yellow-400/40 via-yellow-300/30 to-yellow-500/40 blur-lg opacity-80 animate-pulse pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center bg-gradient-to-br from-yellow-900/80 via-yellow-800/80 to-yellow-700/80 border-4 border-yellow-400 rounded-2xl shadow-2xl p-6">
          {/* Slideshow Main Image */}
          <div
            className="relative h-40 w-64 sm:h-56 sm:w-96 mb-3 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={raspberryPiImages[selectedIdx].src}
              alt={raspberryPiImages[selectedIdx].alt}
              className="w-full h-full object-cover rounded-xl border-2 border-yellow-300 shadow-lg transition-transform duration-200 hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-[#FFB347] bg-opacity-80 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-200">
              Click to expand
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-2 mb-2">
            {raspberryPiImages.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`w-10 h-10 object-cover rounded cursor-pointer border-2 ${selectedIdx === idx ? 'border-yellow-400' : 'border-transparent'}`}
                onClick={() => setSelectedIdx(idx)}
                style={{ opacity: selectedIdx === idx ? 1 : 0.7 }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-extrabold text-yellow-300 drop-shadow-lg">Raspberry Pi 5</span>
            <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow">NEW</span>
            <span className="ml-2 text-yellow-200 text-lg">⚡</span>
          </div>
          <p className="text-yellow-100 text-sm font-medium text-center mb-2">
            The latest and most powerful Raspberry Pi yet—perfect for IoT, automation, and creative projects.
          </p>
          <div className="w-full mt-2 bg-black/70 border-2 border-yellow-400 rounded-xl p-4 shadow-lg">
            <h3 className="text-yellow-200 font-bold mb-3 text-center text-lg tracking-wide uppercase">Key Specs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-yellow-100 text-base font-medium">
              <div>• Quad-core 64-bit Arm Cortex-A76 CPU @ 2.4GHz</div>
              <div>• VideoCore VII GPU, dual 4Kp60 HDMI output</div>
              <div>• Up to 8GB LPDDR4X-4267 RAM</div>
              <div>• PCIe 2.0 x1 interface, 2 × USB 3.0, 2 × USB 2.0</div>
              <div>• Gigabit Ethernet, Wi-Fi 802.11ac, Bluetooth 5.0</div>
              <div>• Real-time clock, power button, active cooling support</div>
              <div>• microSD card slot for storage</div>
              <div>• 40-pin GPIO header, camera/display connectors</div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-gray-300 text-center text-base max-w-2xl">
        A collection of my Raspberry Pi 5 projects showcasing IoT, automation, and creative solutions.
      </span>
      {/* Modal for full-size slideshow */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={raspberryPiImages}
        currentIndex={selectedIdx}
        setCurrentIndex={setSelectedIdx}
      />
    </div>
  );
}

function ProjectCard({ project, onImageClick }: { project: Project; onImageClick: () => void }) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400" style={{ width: '350px' }}>
      <div className="relative h-48 w-full">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={onImageClick}
        />
        {/* Click indicator */}
        <div className="absolute top-2 left-2 bg-[#FFB347] bg-opacity-80 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-200">
          Click to expand
        </div>
        <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{
          background: 'linear-gradient(to right, #FFB347, #FFCC33)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
        }}>
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-yellow-400 font-semibold text-sm mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-yellow-400 font-semibold text-sm mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start">
                <span className="mr-2 mt-1" style={{
                  background: 'linear-gradient(to right, #FFB347, #FFCC33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
                }}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 text-green-400 text-center py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-400 text-gray-900 text-center py-2 rounded-lg hover:bg-green-300 transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RasProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen w-full relative">
      <Grid
        title="Raspberry Pi Projects"
        description={<RaspberryPi5SpecsSlideshow />}
      >
        <div className="w-full col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard project={project} onImageClick={() => openModal(project)} />
              </motion.div>
            ))}
          </div>
        </div>
      </Grid>

      {/* Image Modal */}
      {selectedProject && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={[{ src: selectedProject.imageUrl, alt: selectedProject.title }]}
          currentIndex={0}
          setCurrentIndex={() => {}}
        />
      )}
    </div>
  );
} 