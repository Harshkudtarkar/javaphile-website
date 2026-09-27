import { useRef, type ElementType } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  splitBy?: 'words' | 'lines' | 'chars';
  animation?: 'reveal' | 'fade' | 'slide';
  once?: boolean;
}

export default function AnimatedText({
  text,
  as: Tag = 'p',
  className = '',
  delay = 0,
  splitBy = 'words',
  animation = 'reveal',
  once = true,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });
  const shouldReduceMotion = useReducedMotion();

  let segments: string[] = [];
  if (splitBy === 'words') {
    segments = text.split(' ');
  } else if (splitBy === 'chars') {
    segments = text.split('');
  } else if (splitBy === 'lines') {
    segments = text.split('\n');
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const getSegmentVariants = () => {
    switch (animation) {
      case 'reveal':
        return {
          hidden: { y: '100%', opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
          },
        };
      case 'slide':
        return {
          hidden: { x: '-20px', opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
          },
        };
      case 'fade':
      default:
        return {
          hidden: { y: '10px', opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
          },
        };
    }
  };

  if (shouldReduceMotion) {
    const StaticTag = Tag as ElementType;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      role="text"
      aria-label={text}
    >
      {segments.map((segment, index) => {
        const isLine = splitBy === 'lines';
        return (
          <span
            key={index}
            className={`${isLine ? 'block' : 'inline-block'} ${
              animation === 'reveal' ? 'overflow-hidden' : ''
            }`}
            style={{ paddingRight: splitBy === 'words' ? '0.25em' : '0px' }}
          >
            <motion.span
              className={isLine ? 'block' : 'inline-block'}
              variants={getSegmentVariants()}
            >
              {segment === ' ' && splitBy === 'chars' ? '\u00A0' : segment}
            </motion.span>
          </span>
        );
      })}
    </motion.div>
  );
}
