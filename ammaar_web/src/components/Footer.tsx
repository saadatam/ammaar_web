import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="relative z-10 w-full py-4 sm:py-6"
    >
      <p className="text-center text-gray-400 text-xs sm:text-sm">
        © {currentYear} Ammaar Saadat. All rights reserved.
      </p>
    </motion.footer>
  );
}
