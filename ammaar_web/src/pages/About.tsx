import { motion } from 'framer-motion';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const funFacts = [
    { text: "I'm an avid Raspberry-Pi 5 owner and developer. Some projects include a DNS Ad tracking blocker.", imageUrl: '/fact_images/computer_rasp.jpeg' },
    { text: "I'm a co-founder at Takhat Cafe, a cultural Ice Cream Shop in Westland MI, where I lead marketing, outreach at events, manage customer relations for catering orders, and have networked at the University of Michigan to coordinate 4-5 events on-campus with our signature traditional ice cream.", imageUrl: '/fact_images/takhat_cafe.JPG' },
    { text: "I've grown a 9 year old peach tree.", imageUrl: '/fact_images/peachs.jpeg' },
    { text: "I love to play volleyball (grass or indoor!) with friends, especially in the Summer :)", imageUrl: '/fact_images/volleyball.png' },
    { text: "My favorite ice cream flavor is Mint Chocolate Chip.", imageUrl: '/fact_images/mint_chocolate.png' },
    { text: "I love to rock climb in Ann Arbor.", imageUrl: '/fact_images/rock_climbing_a2.jpeg' },
    { text: "I snowboard in the Winter at Brighton, Michigan.", imageUrl: '/fact_images/snowboarding.jpeg' },
    { text: "I've been jet skiing in Lake Michigan near Traverse City.", imageUrl: '/fact_images/jet_ski.png' },
    { text: "Thankfully, I have never had COVID-19.", imageUrl: '/fact_images/covid_negative.png' },
    { text: "I've been to 17 US States.", imageUrl: '/fact_images/NYC_Pin.png' },
    { text: "I've hiked in Denver Colorado with walkie talkies, and also visited the top of a 14k foot mountain in the rocky mountains.", imageUrl: '/fact_images/denver_valley.jpg' },
    { text: "I've visited 3 cities in Alaska: Sitka, Juneau, and Skagway (the windy city).", imageUrl: '/fact_images/Skagway.jpeg' },
    { text: "I've won a Super Smash Bros tournament at the University of Michigan and won a sweater.", imageUrl: '/fact_images/sweater_award.jpeg' },
    { text: "I've seen a brown bear, along with a black bear, a whale (wagging its tail), and a bald eagle in Alaska.", imageUrl: '/fact_images/bear.jpeg' },
    { text: "I journal. I love the feeling of writing with a pencil on paper.", imageUrl: '/fact_images/writing_aesthetic.png' },
    { text: "I'm quad-lingual: English (fluent), Urdu (Fluent), Arabic (Moderate), and Spanish (Moderate, haven't spoken for a while).", imageUrl: '/fact_images/quadlingual.png' }
  ];

  const modalImages = funFacts.map(fact => ({ src: fact.imageUrl, alt: fact.text }));

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const interests = [
    "Volleyball", "Hiking", "Gardening", "Pokemon Go", "Raspberry Pi-5", "Networking"
  ];
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
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
      {/* Animated grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10"></div>
      {/* Glowing orb effect */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl z-20"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-40 flex flex-col items-start justify-center min-h-screen px-8 sm:px-12 md:px-16 lg:px-20 text-left pt-24"
      >
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}
          >
            About Me
          </motion.h1>

          {/* Personal Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-[#FFB347] shadow-lg overflow-hidden">
              <img
                src="/Alaska_Ammaar4.jpeg"
                alt="Ammaar Saadat"
                className="w-full h-full object-cover transform scale-150"
              />
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 bg-black bg-opacity-50 p-6 rounded-xl border-2 border-[#FFB347]"
          >
            <h2 className="text-2xl font-semibold text-[#FFB347] mb-4">Bio</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software engineer and AI enthusiast based in Ann Arbor, Michigan. 
              With a strong foundation in computer science and a keen interest in emerging technologies, 
              I specialize in building innovative solutions that push the boundaries of what's possible. 
              I love collaborating on projects that blend creativity, technology, and real-world impact.
            </p>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Fun Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => {
                const isImageOnLeft = index % 2 === 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isImageOnLeft ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 bg-black bg-opacity-50 rounded-lg border-2 border-[#FFB347]`}
                  >
                    <div
                      className={`cursor-pointer ${isImageOnLeft ? 'order-first' : 'order-last'} w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-md bg-black/20 flex items-center justify-center overflow-hidden`}
                      onClick={() => openModal(index)}
                    >
                      <img
                        src={fact.imageUrl}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="text-gray-300 flex-grow">{fact.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4" style={{
              background: 'linear-gradient(to right, #FFB347, #FFCC33)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(255, 179, 71, 0.3)'
            }}>
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-black bg-opacity-50 text-[#FFB347] rounded-full text-sm border-2 border-[#FFB347]"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Back Button
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-[#FFB347] text-black font-bold rounded-lg hover:bg-[#FFCC33] transition-colors"
            >
              Back to Home
            </Link>
          </motion.div> */}
        </div>
        <Footer />
      </motion.div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalImages}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
}