import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { signatureItems } from '@/data/menu';

export default function SignatureSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FFF9F0] w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <SectionHeading label="CURATED" title="SIGNATURES" />
      </div>
      
      <div className="w-full pl-4 md:pl-8 lg:pl-16 flex gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {signatureItems.map((item, index) => {
          const isHovered = hoveredId === item.id;
          const isOtherHovered = hoveredId !== null && hoveredId !== item.id;
          
          return (
            <motion.div
              key={item.id}
              className="relative flex-none w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] snap-center md:snap-start group cursor-pointer"
              data-cursor="pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] as const }}
              animate={{
                opacity: isOtherHovered ? 0.5 : 1,
              }}
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#F5F0E8] mb-6 rounded-sm">
                {/* DEMO DATA - Replace with actual product photography */}
                <motion.img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  loading="lazy"
                />
              </div>
              
              <div className="flex flex-col gap-2 pr-4 md:pr-0">
                <div className="flex justify-between items-baseline gap-4">
                  <motion.h3 
                    className="font-serif text-2xl text-[#211712]"
                    animate={{ letterSpacing: isHovered ? "0.02em" : "0em" }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.name}
                  </motion.h3>
                  <span className="font-sans text-[#A66A3F] font-medium shrink-0">{item.price}</span>
                </div>
                <p className="font-sans text-sm text-[#75685F] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <motion.div 
                  className="mt-4 flex items-center text-sm font-sans tracking-widest uppercase text-[#7A4F35]"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore <span className="ml-2">→</span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
