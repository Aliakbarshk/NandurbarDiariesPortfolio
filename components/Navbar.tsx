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

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-brand-500/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-yellow-500 rounded-lg transform rotate-3 shadow-lg shadow-brand-500/50"></div>
            <span className="text-xl font-bold tracking-wider text-white">
              Nandurbar<span className="text-brand-500">Diaries</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-500 transition-colors text-sm uppercase tracking-widest font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/nandurbar_diaries"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full flex items-center space-x-2 transition-transform hover:scale-105 shadow-lg shadow-brand-600/30"
            >
              <Instagram size={18} />
              <span>Follow Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
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
            className="md:hidden bg-dark-card border-b border-brand-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-600/20"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.instagram.com/nandurbar_diaries"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-brand-600 text-white px-3 py-3 rounded-md font-medium"
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