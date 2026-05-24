import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'About Me', path: '/about' },
    { name: 'RasProjects', path: '/rasprojects' },
    { name: 'My Plants', path: '/plants' },
    { name: 'Travel', path: '/travel' },
    { name: 'Books', path: '/books' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '/icons/github_icon.png', link: 'https://github.com/saadatam' },
    { name: 'LinkedIn', icon: '/icons/linkedin_icon.png', link: 'https://www.linkedin.com/in/ammaar-saadat-0867a822a/' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-green-400">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo/Name - smaller */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-green-400 font-bold text-base sm:text-lg">
              Ammaar Saadat
            </Link>
          </div>

          {/* Desktop: Nav + Social */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-green-400 text-gray-900'
                      : 'text-gray-300 hover:bg-green-400 hover:text-gray-900'
                  } px-2 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-2 flex items-center gap-1 border-l border-gray-600 pl-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-90 hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - smaller */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex gap-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain opacity-90" />
                </motion.a>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded text-yellow-400 hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-5 w-5`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - compact */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.15 }}
      >
        <div className="px-2 pt-1 pb-2 space-y-0.5 sm:px-3 bg-gray-900 bg-opacity-95">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`${
                location.pathname === item.path
                  ? 'bg-green-400 text-gray-900'
                  : 'text-gray-300 hover:bg-green-400 hover:text-gray-900'
              } block px-2 py-1.5 rounded text-sm font-medium transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
} 