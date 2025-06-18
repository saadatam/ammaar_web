import { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryCardProps {
  title: string;
  images: { src: string; alt: string }[];
  description: string;
  subtitle?: string;
  tags?: string[];
  metadata?: { label: string; value: string; icon?: string }[];
}

export default function GalleryCard({
  title,
  images,
  description,
  subtitle,
  tags = [],
  metadata = []
}: GalleryCardProps) {
  const [modal, setModal] = useState<{ idx: number } | null>(null);

  return (
    <>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-green-400 w-[300px]">
        {/* Main Image */}
        <div className="relative h-48 w-full cursor-pointer" onClick={() => setModal({ idx: 0 })}>
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2 bg-[#FFB347] bg-opacity-80 text-gray-900 px-2 py-1 rounded text-xs font-bold opacity-0 hover:opacity-100 transition-opacity duration-200">
            Click to expand
          </div>
          {tags.length > 0 && (
            <div className="absolute top-3 right-3 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
              {tags[0]}
            </div>
          )}
        </div>
        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-2 mb-2">
          {images.map((img, idx) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`w-10 h-10 object-cover rounded cursor-pointer border-2 ${modal?.idx === idx ? 'border-yellow-400' : 'border-transparent'}`}
              onClick={() => setModal({ idx })}
              style={{ opacity: modal?.idx === idx ? 1 : 0.7 }}
            />
          ))}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-green-400 mb-1">{title}</h3>
          {subtitle && <p className="text-gray-400 italic text-sm mb-2">{subtitle}</p>}
          {metadata.length > 0 && (
            <div className="flex flex-col items-center gap-1 mb-2">
              {metadata.map((item, i) => (
                <div key={i} className="flex items-center text-gray-300 text-sm">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          )}
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
      {modal && (
        <ImageModal
          isOpen={!!modal}
          onClose={() => setModal(null)}
          images={images}
          currentIndex={modal.idx}
          setCurrentIndex={idx => setModal({ idx })}
        />
      )}
    </>
  );
} 