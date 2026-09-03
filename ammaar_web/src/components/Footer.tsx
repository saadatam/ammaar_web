import { motion } from 'framer-motion';

type Props = {
  message?: string;
};

export default function Footer({ message }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="relative z-10 w-full py-4 sm:py-6 px-4"
    >
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-3 text-center">
        {message && (
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {message}
          </p>
        )}
        <p className="text-gray-400 text-xs sm:text-sm">
          © {currentYear} Ammaar Saadat. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
