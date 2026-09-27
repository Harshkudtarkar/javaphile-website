import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // DEMO DATA - Replace with actual content
  const currentTestimonials = testimonials || [
    { id: 1, quote: "This café changed my morning routine completely. The attention to detail in every cup is simply unmatched.", author: "Jane Doe" },
    { id: 2, quote: "An absolute gem in the city. The atmosphere is as rich and inviting as their signature espresso.", author: "John Smith" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonials.length]);

  return (
    <section className="py-24 md:py-32 bg-[#FFF9F0] relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-12 font-serif text-[6rem] opacity-15 text-[#211712] pointer-events-none select-none">
          &quot;
        </div>

        <div className="min-h-[220px] flex flex-col items-center justify-center relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-center w-full flex flex-col items-center"
            >
              <p className="font-serif text-2xl md:text-4xl font-light text-[#211712] italic leading-relaxed md:leading-snug">
                "{currentTestimonials[currentIndex]?.quote}"
              </p>
              
              <div className="mt-8 flex flex-col items-center">
                <span className="font-sans text-sm text-[#75685F] uppercase tracking-wider">
                  {currentTestimonials[currentIndex]?.author}
                </span>
                <span className="font-sans text-xs text-[#75685F] opacity-70 mt-2">
                  — Demo testimonial
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12 relative z-10">
          {currentTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="w-2 h-2 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#A66A3F] focus:ring-offset-4 focus:ring-offset-[#FFF9F0]"
              style={{
                backgroundColor: currentIndex === idx ? '#A66A3F' : '#E5DFD3'
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={currentIndex === idx ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
