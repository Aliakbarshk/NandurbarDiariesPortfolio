import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Store, ChevronRight, Eye } from 'lucide-react';

type ReelType = 'viral' | 'promo';

interface Reel {
  id: number;
  type: ReelType;
  title: string;
  views: string;
  image: string;
}

const reelsData: Reel[] = [
  {
    id: 1,
    type: 'promo',
    title: 'Sparshh Nursing Home & IVF',
    views: '459K',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 2,
    type: 'viral',
    title: 'Jamiat Ulama Procession',
    views: '261K',
    image: 'https://images.unsplash.com/photo-1579294291244-998846c48386?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 3,
    type: 'viral',
    title: 'Truck Transport Life',
    views: '163K',
    image: 'https://images.unsplash.com/photo-1605218427360-6925922e43d7?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 4,
    type: 'promo',
    title: 'Fashion Hub Collection',
    views: '35.9K',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 5,
    type: 'viral',
    title: 'Local Smiles & Stories',
    views: '535K',
    image: 'https://images.unsplash.com/photo-1489712310660-687291369465?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 6,
    type: 'promo',
    title: 'Sagar Sweets & Food Vlog',
    views: '35.9K',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 7,
    type: 'viral',
    title: 'Holi Celebrations',
    views: '597K',
    image: 'https://images.unsplash.com/photo-1615462211910-c0529452b144?w=500&h=800&fit=crop&q=80'
  },
  {
    id: 8,
    type: 'viral',
    title: 'Farming Life in Nandurbar',
    views: '15.4K',
    image: 'https://images.unsplash.com/photo-1619980562916-d820c78950d8?w=500&h=800&fit=crop&q=80'
  }
];

const ReelsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'viral' | 'promo'>('all');

  const filteredReels = activeTab === 'all' 
    ? reelsData 
    : reelsData.filter(reel => reel.type === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-2">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Stories That Went Viral</h3>
            <p className="text-gray-400 text-lg">
              From documenting the vibrant festivals of Nandurbar to helping brands like Sparshh Nursing Home and local fashion outlets reach thousands.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex bg-white/5 p-1 rounded-xl mt-6 md:mt-0 backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'all' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              All Reels
            </button>
            <button
              onClick={() => setActiveTab('viral')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'viral' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <TrendingUp size={16} /> Viral Stories
            </button>
            <button
              onClick={() => setActiveTab('promo')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'promo' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <Store size={16} /> Client Work
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredReels.map((reel) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={reel.id}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-dark-card border border-white/5 shadow-2xl hover:shadow-brand-500/20 hover:border-brand-500/50 transition-all duration-300"
              >
                {/* Image */}
                <img 
                  src={reel.image} 
                  alt={reel.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                    <Play fill="white" className="text-white ml-1 w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-md mb-2 ${reel.type === 'viral' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {reel.type === 'viral' ? <TrendingUp size={10} /> : <Store size={10} />}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{reel.type === 'viral' ? 'Viral' : 'Client'}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2">{reel.title}</h4>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Eye size={14} className="mr-1.5" />
                    <span className="font-medium">{reel.views} Views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
           <a 
             href="https://www.instagram.com/nandurbar_diaries" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center space-x-2 text-white border border-white/10 px-6 py-3 rounded-full hover:bg-brand-600 hover:border-transparent transition-all group"
           >
             <span className="font-semibold">View all reels on Instagram</span>
             <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsShowcase;