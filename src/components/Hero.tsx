import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroImages } from '@/data/images';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax for background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // DEMO DATA — Replace with actual Javaphile hero photography
  const heroImageSrc = heroImages.main.src;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background with Zoom-out & Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y, opacity }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageSrc})` }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.4)]" />
        {/* Base dark tint to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariants}
          className="text-white text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase mb-6"
        >
          Javaphile
        </motion.span>
        
        <h1 className="font-serif text-white font-light text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
          <motion.div variants={itemVariants} className="overflow-hidden">
            BREWED FOR
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            COFFEE LOVERS
          </motion.div>
        </h1>
        
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
        >
          <a 
            href="#menu" 
            className="px-8 py-3 border border-white text-white font-sans text-xs tracking-widest hover:bg-white hover:text-[#211712] transition-colors duration-300"
            data-cursor="pointer"
          >
            EXPLORE MENU →
          </a>
          <a 
            href="#visit" 
            className="text-white font-sans text-xs tracking-widest relative group overflow-hidden"
            data-cursor="pointer"
          >
            VISIT US
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 delay-75" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-white text-[10px] font-sans tracking-widest mb-3">SCROLL</span>
        <motion.div 
          className="w-px h-12 bg-white/30 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ 
              y: ["-100%", "200%"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "circInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
