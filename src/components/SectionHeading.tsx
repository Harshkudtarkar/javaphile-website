import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } },
  };

  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-full ${alignClass} ${light ? 'text-[#FFF9F0]' : 'text-[#211712]'}`}
    >
      {label && (
        <motion.p 
          variants={itemVariants}
          className="font-sans text-[0.75rem] uppercase tracking-[0.15em] text-[#A66A3F] mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2 
        variants={itemVariants}
        className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={itemVariants}
          className={`font-sans text-lg mt-6 max-w-2xl ${light ? 'text-[#FFF9F0]/80' : 'text-[#75685F]'} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
