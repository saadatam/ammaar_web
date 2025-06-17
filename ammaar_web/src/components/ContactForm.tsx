import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  useEffect(() => {
    // Set visible after a short delay to ensure proper mounting
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      // Check if environment variables are available
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || 
          !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 
          !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        location: formData.location,
        message: formData.message,
        to_email: 'saadatam@umich.edu'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Message sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        location: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, error: false, message: '' }));
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full bg-black bg-opacity-50 py-20 pointer-events-auto"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Contact Me</h2>
          <div style={{
            maxWidth: '50vw',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Column - Contact Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Get in Touch</h2>
                <p className="text-sm text-gray-300">
                  Have a question or want to work together? Feel free to reach out!
                </p>
              </div>

              {/* Right Column - Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-black bg-opacity-50 border border-green-400 rounded-md focus:ring-1 focus:ring-green-400 focus:border-transparent text-white text-sm"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-black bg-opacity-50 border border-green-400 rounded-md focus:ring-1 focus:ring-green-400 focus:border-transparent text-white text-sm"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-xs font-medium text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="w-full px-3 py-1.5 bg-black bg-opacity-50 border border-green-400 rounded-md focus:ring-1 focus:ring-green-400 focus:border-transparent text-white text-sm"
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-1.5 bg-black bg-opacity-50 border border-green-400 rounded-md focus:ring-1 focus:ring-green-400 focus:border-transparent text-white text-sm"
                    required
                    disabled={status.submitting}
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-2 rounded-md text-xs ${
                      status.error ? 'bg-red-500 bg-opacity-20' : 'bg-green-500 bg-opacity-20'
                    }`}
                  >
                    <p className={`${status.error ? 'text-red-400' : 'text-green-400'}`}>
                      {status.message}
                    </p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full px-4 py-2 text-sm font-bold rounded-md transition-colors flex items-center justify-center ${
                    status.submitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-green-400 hover:bg-green-500 text-black'
                  }`}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 