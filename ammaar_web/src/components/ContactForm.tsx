import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from '../config/emailjs';

export default function ContactForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      // Replace these with your actual EmailJS credentials
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
        message: 'Failed to send message. Please try again.'
      });
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-2xl mx-auto mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-green-400 mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {/* <span className="text-green-400">📍</span> */}
              {/* <span className="text-sm text-gray-300">San Francisco, CA</span> */}
            </div>
            <div className="flex items-center space-x-2">
              {/* <span className="text-green-400">📧</span> */}
              {/* <span className="text-sm text-gray-300">saadatam@umich.edu</span> */}
            </div>
          </div>
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
              placeholder="City, Country"
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
            className={`w-full px-4 py-2 text-sm font-bold rounded-md transition-colors ${
              status.submitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-green-400 hover:bg-green-500 text-black'
            }`}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
} 