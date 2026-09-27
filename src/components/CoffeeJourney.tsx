import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { journeyImages } from '@/data/images';

const stages = [
  {
    num: '01',
    title: 'BEAN',
    desc: "Sourced from the world's finest growing regions",
    imgKey: 'bean' as keyof typeof journeyImages
  },
  {
    num: '02',
    title: 'GRIND',
    desc: 'Precision-ground for optimal extraction',
    imgKey: 'grind' as keyof typeof journeyImages
  },
  {
    num: '03',
    title: 'BREW',
    desc: 'Crafted with care, one cup at a time',
    imgKey: 'brew' as keyof typeof journeyImages
  },
  {
    num: '04',
    title: 'CUP',
    desc: 'Served to perfection, ready to enjoy',
    imgKey: 'cup' as keyof typeof journeyImages
  }
];

const JourneyStage = ({ stage, index }: { stage: typeof stages[0], index: number }) => {
  const isEven = index % 2 !== 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 relative flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 0.1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute font-serif text-[8rem] md:text-[10rem] text-[#FFF9F0] -top-12 md:-top-20 -left-4 md:-left-8 z-0"
          style={{ pointerEvents: 'none' }}
        >
          {stage.num}
        </motion.div>
        
        <div className="relative z-10 space-y-4 pt-16 md:pt-0">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-serif text-3xl md:text-5xl text-[#FFF9F0] tracking-wide"
          >
            {stage.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-sans text-lg md:text-xl text-[#FFF9F0]/60 max-w-md"
          >
            {stage.desc}
          </motion.p>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
          animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full md:w-[90%] aspect-[4/3] overflow-hidden rounded-sm"
        >
          <img 
            src={journeyImages[stage.imgKey]?.src || ''} 
            alt={journeyImages[stage.imgKey]?.alt || stage.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function CoffeeJourney() {
  return (
    <section className="w-full bg-[#211712] py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
        {stages.map((stage, index) => (
          <JourneyStage key={stage.num} stage={stage} index={index} />
        ))}
      </div>
    </section>
  );
}
