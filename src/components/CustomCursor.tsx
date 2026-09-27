import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to avoid flash on mobile
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.body.classList.add('cursor-none');
      } else {
        document.body.classList.remove('cursor-none');
      }
    };

    checkTouch();

    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for 'view' cursor
      if (target.closest('[data-cursor="view"]')) {
        setCursorVariant('view');
        return;
      }

      // Check for interactive elements
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]');

      if (isInteractive) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-none');
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 20,
      height: 20,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'transparent',
      borderColor: '#211712',
    },
    hover: {
      width: 50,
      height: 50,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(33, 23, 18, 0.1)',
      borderColor: '#211712',
    },
    view: {
      width: 80,
      height: 80,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(255, 249, 240, 0.9)',
      borderColor: '#211712',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference overflow-hidden"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        borderColor: '#211712'
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.span 
        className="text-[#211712] text-[10px] font-medium tracking-widest pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'view' ? 1 : 0 }}
      >
        VIEW
      </motion.span>
    </motion.div>
  );
}
