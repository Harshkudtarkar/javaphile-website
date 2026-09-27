import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { siteConfig } from '@/data/site';

export default function VisitSection() {
  // DEMO DATA — All contact info from siteConfig is placeholder
  const { contact, hours, links } = siteConfig;
  const phoneLink = `tel:${contact.phone.replace(/\D/g, '')}`;

  return (
    <section id="visit" className="py-24 md:py-40 bg-[#211712] text-[#FFF9F0]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionHeading light label="FIND US" title="COME HAVE A CUP." />
        </motion.div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFF9F0] opacity-50 mb-4">
                Address
              </h3>
              <p className="font-sans text-base leading-relaxed text-[#FFF9F0] opacity-90">
                {contact.address}
              </p>
              <p className="font-sans text-base leading-relaxed text-[#FFF9F0] opacity-90">
                {contact.city}
              </p>
            </div>
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFF9F0] opacity-50 mb-4">
                Hours
              </h3>
              <div className="font-sans text-base leading-relaxed text-[#FFF9F0] opacity-90 space-y-2">
                <p>Mon — Fri: {hours.weekdays}</p>
                <p>Sat — Sun: {hours.weekends}</p>
                <p className="text-sm opacity-60">{hours.special}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFF9F0] opacity-50 mb-4">
                Contact
              </h3>
              <div className="font-sans text-base leading-relaxed text-[#FFF9F0] opacity-90 space-y-2">
                <p>
                  <a
                    href={phoneLink}
                    className="hover:text-[#A66A3F] transition-colors duration-300"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={contact.email ? `mailto:${contact.email}` : '#'}
                    className="hover:text-[#A66A3F] transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                </p>
                <p>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#A66A3F] transition-colors duration-300"
                  >
                    {contact.instagram}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 md:mt-24 flex flex-wrap gap-4"
        >
          <a
            href={links.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-8 border border-white/30 font-sans text-sm uppercase tracking-wider text-[#FFF9F0] hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center w-full md:w-auto"
          >
            Get Directions
          </a>
          <a
            href={phoneLink}
            className="py-3 px-8 border border-white/30 font-sans text-sm uppercase tracking-wider text-[#FFF9F0] hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center w-full md:w-auto"
          >
            Call
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-8 border border-white/30 font-sans text-sm uppercase tracking-wider text-[#FFF9F0] hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center w-full md:w-auto"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
