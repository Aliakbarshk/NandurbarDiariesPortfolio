import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, PlayCircle, ChevronDown, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [5, 15]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <MapPin size={16} className="text-brand-500" />
              <span className="text-brand-400 text-sm font-semibold tracking-wide">NANDURBAR, MAHARASHTRA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6">
              Nandurbar's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-yellow-400">
                Digital Storyteller
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-4 max-w-lg leading-relaxed">
              <span className="text-white font-semibold">Nawed Qaazi</span> | Storyteller 🎥
            </p>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed border-l-4 border-brand-500 pl-6">
              Join me on a journey through my hometown's heart and soul. We cover local stories, festivals, and help businesses grow.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://www.instagram.com/nandurbar_diaries/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand-600/30 flex items-center justify-center group transform hover:scale-105"
              >
                Promote Your Brand
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.instagram.com/nandurbar_diaries" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold backdrop-blur-sm transition-all flex items-center justify-center group hover:border-brand-500/30">
                <Instagram size={20} className="mr-2 text-brand-500" />
                Visit Instagram
              </a>
            </div>
          </motion.div>

          {/* 3D Visuals */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-container">
             {/* Floating Card 1 - Festivals/Culture */}
             <motion.div 
               style={{ y: y1, rotate: 6 }}
               className="absolute top-10 right-10 w-72 h-[450px] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10 z-20 group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=900&fit=crop&q=80" 
                  alt="Nandurbar Festival" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 text-brand-500 text-xs font-bold uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                    <span>Viral Story</span>
                  </div>
                  <p className="text-white text-xl font-bold leading-tight">Capturing the Spirit of Utsav</p>
                </div>
             </motion.div>

             {/* Floating Card 2 - Food/Business */}
             <motion.div 
               style={{ y: y2, rotate: -6 }}
               className="absolute bottom-20 left-10 w-64 h-80 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-white/10 z-10 group"
             >
                <img 
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=800&fit=crop&q=80" 
                  alt="Nandurbar Food" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-bold">Local Food Vlogs</p>
                </div>
             </motion.div>

             {/* Floating Badge */}
             <motion.div
              style={{ rotate }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-xl border border-brand-500/50 p-6 rounded-2xl shadow-2xl shadow-brand-500/20"
             >
               <div className="text-center">
                 <span className="block text-4xl font-extrabold text-white">18.3K+</span>
                 <span className="text-brand-500 text-xs font-bold uppercase tracking-widest">Followers</span>
               </div>
             </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;