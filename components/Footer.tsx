import React from 'react';
import { Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-yellow-500 rounded-lg transform rotate-3"></div>
              <span className="text-2xl font-bold tracking-wider text-white">
                Nandurbar<span className="text-brand-500">Diaries</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The premier digital platform for Nandurbar. We bridge the gap between local culture and modern business promotion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nandurbar_diaries" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@nandurbardiaries.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-brand-500 transition-colors">Portfolio & Reels</a></li>
              <li><a href="https://www.instagram.com/nandurbar_diaries" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                <span>Nandurbar City, Maharashtra, India - 425412</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:hello@nandurbardiaries.com" className="hover:text-white transition-colors">hello@nandurbardiaries.com</a>
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
            className="flex items-center space-x-2 text-brand-500 text-sm font-bold hover:text-brand-400 transition-colors"
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