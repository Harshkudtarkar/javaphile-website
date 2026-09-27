import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition, useLockBodyScroll } from '@/hooks/useAnimations';
import { siteConfig } from '@/data/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();

  useLockBodyScroll(isMobileMenuOpen);

  useEffect(() => {
    setIsScrolled(scrollY > 80);
  }, [scrollY]);

  const navLinks = siteConfig.navigation;

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1] as const,
      },
    }),
  };

  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const line2Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFF9F0]/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`font-serif text-2xl tracking-[0.2em] uppercase z-50 relative transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? 'text-[#211712]' : 'text-white'
          }`}
          aria-label="Javaphile Home"
          data-cursor="pointer"
        >
          Javaphile
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-[11px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                isScrolled
                  ? 'text-[#211712] hover:text-[#A66A3F]'
                  : 'text-white/80 hover:text-white'
              }`}
              data-cursor="pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#menu"
            className={`px-6 py-2.5 font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
              isScrolled
                ? 'border-[#211712] text-[#211712] hover:bg-[#211712] hover:text-[#FFF9F0]'
                : 'border-white/60 text-white hover:bg-white hover:text-[#211712]'
            }`}
            data-cursor="pointer"
          >
            Order
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <motion.span
            variants={line1Variants}
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            className={`w-6 h-px block mb-1.5 ${
              isMobileMenuOpen || isScrolled ? 'bg-[#211712]' : 'bg-white'
            }`}
          />
          <motion.span
            variants={line2Variants}
            animate={isMobileMenuOpen ? 'open' : 'closed'}
            className={`w-6 h-px block ${
              isMobileMenuOpen || isScrolled ? 'bg-[#211712]' : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-[#FFF9F0] z-40 flex flex-col justify-center items-center min-h-[100vh]"
          >
            <nav
              className="flex flex-col items-center space-y-8"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-[#211712] tracking-wider hover:text-[#A66A3F] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                href="#menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 border border-[#211712] text-[#211712] px-8 py-3 font-sans text-sm tracking-widest hover:bg-[#211712] hover:text-[#FFF9F0] transition-colors duration-300 uppercase"
              >
                Order Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
