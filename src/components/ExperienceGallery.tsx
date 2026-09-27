import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experienceImages } from '@/data/images';
import SectionHeading from '@/components/SectionHeading';

const galleryItems = [
  {
    id: 1,
    imgKey: 'interior1' as keyof typeof experienceImages,
    className: 'md:col-span-7 md:row-span-1 aspect-[16/9] md:aspect-auto',
    caption: 'Morning Light',
  },
  {
    id: 2,
    imgKey: 'barista' as keyof typeof experienceImages,
    className: 'md:col-span-5 md:row-span-2 aspect-[3/4] md:aspect-auto',
    caption: 'Pour Over Excellence',
  },
  {
    id: 3,
    imgKey: 'interior2' as keyof typeof experienceImages,
    className: 'md:col-span-4 md:row-span-1 aspect-square md:aspect-auto',
    caption: 'Cozy Corners',
  },
  {
    id: 4,
    imgKey: 'detail' as keyof typeof experienceImages,
    className: 'md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto',
    caption: 'The Details',
  },
];

function GalleryImage({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const imageData = experienceImages[item.imgKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={`relative group overflow-hidden rounded-sm bg-[#F5F0E8] ${item.className} h-full min-h-[300px] md:min-h-0`}
      data-cursor="view"
    >
      <img
        src={imageData?.src ?? ''}
        alt={imageData?.alt ?? item.caption}
        className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#211712]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="font-sans text-sm tracking-widest text-[#FFF9F0] uppercase">
          {item.caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function ExperienceGallery() {
  return (
    <section
      id="experience"
      className="w-full bg-[#F5F0E8] py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <SectionHeading label="ATMOSPHERE" title="THE EXPERIENCE" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 md:h-[800px]">
          {galleryItems.map((item, index) => (
            <GalleryImage key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
