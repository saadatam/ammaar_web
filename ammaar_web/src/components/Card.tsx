import { motion } from 'framer-motion';
import { useState } from 'react';
import ImageModal from './ImageModal';

interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  description: string;
  tags?: string[];
  metadata?: {
    label: string;
    value: string;
    icon?: string;
  }[];
}

export default function Card({
  title,
  subtitle,
  imageUrl,
  description,
  tags = [],
  metadata = []
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        style={{
          width: '100%',
          backgroundColor: '#111827', // bg-gray-900
          borderRadius: '1rem', // rounded-2xl
          overflow: 'hidden',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
          border: '2px solid #4ade80', // border-2 border-green-400
        }}
      >
        {/* Image - Clickable */}
        <div 
          style={{
            position: 'relative',
            height: '12rem', // h-48
            width: '100%',
            cursor: 'pointer'
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          {/* Click indicator */}
          <div style={{
            position: 'absolute',
            top: '0.5rem',
            left: '0.5rem',
            backgroundColor: 'rgba(255, 179, 71, 0.8)',
            color: '#1a1a1a',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            opacity: 0,
            transition: 'opacity 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
          >
            Click to expand
          </div>
          {tags.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '0.75rem', // top-3
              right: '0.75rem', // right-3
              backgroundColor: '#4ade80', // bg-green-400
              color: '#111827', // text-gray-900
              padding: '0.25rem 0.75rem', // px-3 py-1
              borderRadius: '9999px', // rounded-full
              fontSize: '0.875rem', // text-sm
              fontWeight: 'bold'
            }}>
              {tags[0]}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{
          padding: '1rem', // p-4
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.125rem', // text-lg
            fontWeight: 'bold',
            color: '#4ade80', // text-green-400
            marginBottom: '0.25rem' // mb-1
          }}>
            {title}
          </h3>
          
          {subtitle && (
            <p style={{
              color: '#9ca3af', // text-gray-400
              fontStyle: 'italic',
              fontSize: '0.875rem', // text-sm
              marginBottom: '1rem' // mb-4
            }}>
              {subtitle}
            </p>
          )}
          
          {metadata.length > 0 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem', // space-y-2
              marginBottom: '1rem' // mb-4
            }}>
              {metadata.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#d1d5db', // text-gray-300
                  fontSize: '0.875rem' // text-sm
                }}>
                  {item.icon && <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>}
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          )}

          <p style={{
            color: '#d1d5db', // text-gray-300
            fontSize: '0.875rem' // text-sm
          }}>
            {description}
          </p>
        </div>
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={[{ src: imageUrl, alt: title }]}
        currentIndex={0}
        setCurrentIndex={() => {}}
      />
    </>
  );
} 