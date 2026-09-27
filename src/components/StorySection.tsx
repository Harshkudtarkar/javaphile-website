import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { storyImages } from '@/data/images';
import AnimatedText from './AnimatedText';

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const isImageInView = useInView(imageRef, { once: true, margin: '-20% 0px' });

  // DEMO DATA — Replace with actual Javaphile story photography
  const imageUrl = storyImages.main.src;
  const imageAlt = storyImages.main.alt;

  return (
    <section id="story" ref={containerRef} className="w-full py-24 md:py-32 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Image Side - 55% */}
        <div className="w-full md:w-[55%] relative" ref={imageRef}>
          <motion.div
            className="w-full h-full relative overflow-hidden"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isImageInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <motion.div style={{ y }} className="w-full h-full">
              {/* DEMO DATA - Replace with actual content */}
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-[3/4]"
                data-cursor="view"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Text Side - 45% */}
        <div className="w-full md:w-[45%] flex flex-col justify-center">
          <motion.span 
            className="text-sm font-semibold tracking-widest text-[#A66A3F] uppercase mb-6 block font-sans"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR STORY
          </motion.span>
          
          <AnimatedText
            as="h2"
            text="THE JAVAPHILE STORY"
            className="font-serif text-3xl md:text-5xl font-light text-[#211712] mb-8 leading-tight"
            animation="reveal"
            splitBy="words"
          />

          <div className="flex flex-col gap-6">
            {/* DEMO DATA - Replace with actual content */}
            <AnimatedText
              as="p"
              text="Born from a deep love of specialty coffee and inspired by the world's finest café cultures — from Tokyo's kissaten to Melbourne's laneways — Javaphile was created to bring an exceptional coffee experience to every cup."
              className="font-sans text-base md:text-lg text-[#75685F] leading-relaxed"
              animation="fade"
              splitBy="words"
              delay={0.2}
            />
            
            {/* DEMO DATA - Replace with actual content */}
            <AnimatedText
              as="p"
              text="We source our beans directly from farmers who share our passion for quality. Every roast is carefully profiled, every drink crafted with intention. This isn't just coffee — it's our craft, our obsession, our love letter to the bean."
              className="font-sans text-base md:text-lg text-[#75685F] leading-relaxed"
              animation="fade"
              splitBy="words"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
