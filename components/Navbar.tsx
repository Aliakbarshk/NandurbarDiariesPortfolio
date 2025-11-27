import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      scrollToTop();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      // Calculate position with offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-brand-500/20 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Click to scroll top */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={scrollToTop}
            role="button"
            aria-label="Scroll to top"
          >
            {/* Custom Logo imitating the Instagram Profile Pic */}
            <div className="relative w-11 h-11 bg-[#0f2e2e] rounded-full flex items-center justify-center border-[1.5px] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-transform group-hover:scale-105 overflow-hidden">
               <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#d4af37]" fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5l6-4.5-6-4.5v9z"/>
                 <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-50"/>
                 <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.5" fill="none" className="opacity-30"/>
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white leading-none font-sans group-hover:text-[#d4af37] transition-colors">
                Nandurbar<span className="text-[#d4af37] group-hover:text-white transition-colors">Diaries</span>
              </span>
              <span className="text-[9px] text-gray-400 font-medium tracking-[0.25em] uppercase mt-0.5">The Voice of City</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-widest font-semibold relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://www.instagram.com/nandurbar_diaries"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full flex items-center space-x-2 transition-transform hover:scale-105 shadow-lg shadow-brand-600/30 border border-brand-500/50 cursor-pointer"
            >
              <Instagram size={18} />
              <span>Follow Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-card border-b border-brand-500/20 overflow-hidden absolute w-full shadow-2xl z-40"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-600/20 border-l-2 border-transparent hover:border-[#d4af37] transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.instagram.com/nandurbar_diaries"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-brand-600 hover:bg-brand-700 text-white px-3 py-4 rounded-md font-medium shadow-md transition-colors cursor-pointer"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;