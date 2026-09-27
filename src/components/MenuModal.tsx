import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem } from '@/data/menu';
import { useLockBodyScroll } from '@/hooks/useAnimations';

interface MenuModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}

export default function MenuModal({ item, isOpen, onClose }: MenuModalProps) {
  useLockBodyScroll(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      modalRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Panel */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-2xl bg-[#FFF9F0] rounded-sm shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-[#75685F] hover:text-[#211712] bg-[#FFF9F0]/80 backdrop-blur-md rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#A66A3F]"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Content Container */}
            <div className="overflow-y-auto w-full flex flex-col">
              {/* Image Header */}
              <div className="w-full aspect-[16/9] relative bg-[#E5DFD3] shrink-0">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Body */}
              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <h2
                  id="modal-title"
                  className="font-serif text-3xl md:text-4xl font-light text-[#211712]"
                >
                  {item.name}
                </h2>

                <span className="font-sans text-lg text-[#A66A3F] mt-2 block font-medium">
                  {item.price}
                </span>

                <p className="font-sans text-base text-[#75685F] mt-6 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* DEMO — Replace with actual cart/ordering functionality */}
                <button
                  className="mt-10 w-full font-sans text-sm md:text-base uppercase tracking-wider bg-[#211712] text-[#FFF9F0] py-4 px-8 hover:bg-[#A66A3F] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#A66A3F] focus:ring-offset-2 focus:ring-offset-[#FFF9F0]"
                  type="button"
                >
                  Add to Order →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
