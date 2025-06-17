import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 w-full bg-black bg-opacity-50 py-8 border-t border-green-400"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          {/* Social Media Links */}
          <div className="flex gap-6 mb-6">
            {[
              { name: 'GitHub', icon: '/icons/github_icon.png', link: 'https://github.com/saadatam' },
              { name: 'LinkedIn', icon: '/icons/linkedin_icon.png', link: 'https://www.linkedin.com/in/ammaar-saadat-0867a822a/' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <img 
                  src={social.icon} 
                  alt={`${social.name} icon`} 
                  className="w-[100px] h-[100px] object-contain"
                />
                <span className="text-sm">{social.name}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Copyright Text */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Ammaar Saadat. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 