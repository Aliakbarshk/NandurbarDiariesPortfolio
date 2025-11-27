import React from 'react';
import { Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
               <div className="relative w-11 h-11 bg-[#0f2e2e] rounded-full flex items-center justify-center border-[1.5px] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] overflow-hidden">
                 <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#d4af37]" fill="currentColor">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5l6-4.5-6-4.5v9z"/>
                   <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-50"/>
                   <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0.5" fill="none" className="opacity-30"/>
                 </svg>
               </div>
               <div>
                  <span className="text-2xl font-bold tracking-wider text-white block leading-none font-sans">
                    Nandurbar<span className="text-[#d4af37]">Diaries</span>
                  </span>
               </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              The premier digital platform for Nandurbar. We bridge the gap between local culture and modern business promotion through compelling visual storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nandurbar_diaries" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-brand-500 hover:to-yellow-500 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@nandurbardiaries.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-600 transition-colors hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-brand-500 mr-3 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center hover:translate-x-1 duration-200">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center hover:translate-x-1 duration-200">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center hover:translate-x-1 duration-200">Portfolio & Reels</a></li>
              <li><a href="https://www.instagram.com/nandurbar_diaries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d4af37] transition-colors flex items-center hover:translate-x-1 duration-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-brand-500 mr-3 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 group cursor-pointer">
                <div className="w-8 h-8l rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <MapPin className="text-brand-500" size={16} />
                </div>
                <span className="mt-1 group-hover:text-white transition-colors">Nandurbar City, Maharashtra, India - 425412</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="text-brand-500" size={16} />
                </div>
                <a href="mailto:hello@nandurbardiaries.com" className="mt-1 hover:text-white transition-colors">hello@nandurbardiaries.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nandurbar Diaries. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-brand-500 text-sm font-bold hover:text-brand-400 transition-colors px-4 py-2 rounded-full hover:bg-brand-500/10"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;