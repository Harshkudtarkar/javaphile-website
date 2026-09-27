import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { galleryImages } from '@/data/images';

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  const images = galleryImages;

  return (
    <>
      {/* Desktop Version */}
      <section 
        className="w-full bg-[#211712] relative hidden md:block" 
        ref={containerRef}
        style={{ height: `${images.length * 50}vh` }}
        aria-label="Gallery Desktop"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden py-16">
          <motion.div 
            className="flex gap-8 px-24"
            style={{ x }}
          >
            {images.map((img, idx) => (
              <div 
                key={idx}
                className="relative shrink-0 w-[45vw] h-[60vh] rounded-sm overflow-hidden"
                data-cursor="view"
              >
                <img
                  src={img?.src || ''}
                  alt={img?.alt || `Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Version */}
      <section 
        className="w-full bg-[#211712] md:hidden py-16"
        aria-label="Gallery Mobile"
      >
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="relative shrink-0 w-[80vw] h-[50vh] rounded-sm overflow-hidden snap-center"
              data-cursor="view"
            >
              <img
                src={img?.src || ''}
                alt={img?.alt || `Gallery image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
