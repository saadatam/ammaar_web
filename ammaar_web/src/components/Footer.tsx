import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="relative z-10 w-full bg-black bg-opacity-50 py-4 sm:py-6 border-t border-green-400"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-3 sm:mb-4">
            {[
              { name: 'GitHub', icon: '/icons/github_icon.png', link: 'https://github.com/saadatam' },
              { name: 'LinkedIn', icon: '/icons/linkedin_icon.png', link: 'https://www.linkedin.com/in/ammaar-saadat-0867a822a/' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5 text-gray-300 hover:text-green-400 transition-colors"
              >
                <img src={social.icon} alt={`${social.name} icon`} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                <span className="text-xs sm:text-sm">{social.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">© {currentYear} Ammaar Saadat. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
} 