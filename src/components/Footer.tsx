import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-[#211712] border-t border-white/10 py-16 md:py-24" role="contentinfo">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col items-center justify-center text-center">
        {/* Top Branding */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-[#FFF9F0] tracking-wide">
            JAVAPHILE
          </h2>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-[#FFF9F0] opacity-50 mt-4">
            BREWED FOR COFFEE LOVERS
          </p>
        </div>

        {/* Middle Navigation */}
        <nav className="mb-16 w-full" aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {siteConfig.navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-[#FFF9F0] opacity-60 hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social & Bottom */}
        <div className="flex flex-col items-center space-y-12">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-sans text-sm text-[#FFF9F0] opacity-60 hover:opacity-100 transition-opacity duration-300 tracking-wider uppercase"
          >
            Instagram
          </a>

          <p className="font-sans text-xs text-[#FFF9F0] opacity-30 mt-8">
            &copy; {new Date().getFullYear()} Javaphile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
