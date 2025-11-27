import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Store, ChevronRight, Eye, Pin, Heart } from 'lucide-react';
import { Reel } from '../types';

type ReelType = 'viral' | 'promo' | 'all';

// Initial data with approximate like counts based on views
const initialReelsData: Reel[] = [
  // Pinned Row (from Screenshot 1)
  {
    id: 1,
    type: 'viral',
    title: 'Holi Celebrations with Nawed',
    views: '597K',
    likes: 45200,
    image: 'https://images.unsplash.com/photo-1615462211910-c0529452b144?w=500&h=800&fit=crop&q=80',
    category: 'Festival',
    isPinned: true
  },
  {
    id: 2,
    type: 'viral',
    title: 'Pure Joy: Local Smile',
    views: '535K',
    likes: 41800,
    image: 'https://images.unsplash.com/photo-1489712310660-687291369465?w=500&h=800&fit=crop&q=80',
    category: 'Portrait',
    isPinned: true
  },
  {
    id: 3,
    type: 'promo',
    title: 'Fashion Hub: 100% Quality',
    views: '126K',
    likes: 8500,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=800&fit=crop&q=80',
    category: 'Fashion',
    isPinned: true
  },

  // Row 2 (from Screenshot 2)
  {
    id: 4,
    type: 'viral',
    title: 'Sparshh IVF Success Story',
    views: '459K',
    likes: 32400,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=800&fit=crop&q=80',
    category: 'Healthcare'
  },
  {
    id: 5,
    type: 'viral',
    title: 'Grand Procession',
    views: '261K',
    likes: 19200,
    image: 'https://images.unsplash.com/photo-1566807810030-31e141401fca?w=500&h=800&fit=crop&q=80',
    category: 'Event'
  },
  {
    id: 6,
    type: 'viral',
    title: 'Truck Life Documentary',
    views: '163K',
    likes: 12100,
    image: 'https://images.unsplash.com/photo-1605218427360-6925922e43d7?w=500&h=800&fit=crop&q=80',
    category: 'Vlog'
  },

  // Row 3 (from Screenshot 2 & 3)
  {
    id: 7,
    type: 'viral',
    title: 'Village Family Stories',
    views: '69.4K',
    likes: 5400,
    image: 'https://images.unsplash.com/photo-1541535881962-3bb380b08458?w=500&h=800&fit=crop&q=80',
    category: 'Story'
  },
  {
    id: 8,
    type: 'promo',
    title: 'Sagar Sweets Food Vlog',
    views: '35.9K',
    likes: 2800,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=800&fit=crop&q=80',
    category: 'Food'
  },
  {
    id: 9,
    type: 'promo',
    title: 'Sparshh Nursing Home',
    views: '24.7K',
    likes: 1900,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=800&fit=crop&q=80',
    category: 'Health'
  },

  // Row 4 (from Screenshot 2 & 3)
  {
    id: 10,
    type: 'viral',
    title: 'Monsoon Farming',
    views: '15.4K',
    likes: 1200,
    image: 'https://images.unsplash.com/photo-1619980562916-d820c78950d8?w=500&h=800&fit=crop&q=80',
    category: 'Nature'
  },
  {
    id: 11,
    type: 'promo',
    title: 'Latest Dress Collection',
    views: '21K',
    likes: 1500,
    image: 'https://images.unsplash.com/photo-1583391733958-e02685791c1e?w=500&h=800&fit=crop&q=80',
    category: 'Fashion'
  },
  {
    id: 12,
    type: 'viral',
    title: 'Urs e Hazrat Celebration',
    views: '38K',
    likes: 3100,
    image: 'https://images.unsplash.com/photo-1588663806132-47517173e658?w=500&h=800&fit=crop&q=80',
    category: 'Event'
  }
];

const ReelsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ReelType>('all');
  const [reels, setReels] = useState<Reel[]>(initialReelsData);
  const [votedReels, setVotedReels] = useState<number[]>([]);

  const filteredReels = activeTab === 'all' 
    ? reels 
    : reels.filter(reel => reel.type === activeTab);

  const handleVote = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();

    if (votedReels.includes(id)) {
      // Remove vote
      setReels(prev => prev.map(reel => 
        reel.id === id ? { ...reel, likes: reel.likes - 1 } : reel
      ));
      setVotedReels(prev => prev.filter(reelId => reelId !== id));
    } else {
      // Add vote
      setReels(prev => prev.map(reel => 
        reel.id === id ? { ...reel, likes: reel.likes + 1 } : reel
      ));
      setVotedReels(prev => [...prev, id]);
    }
  };

  const formatLikes = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section id="portfolio" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-brand-500"></span>
              Our Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Stories That Went Viral</h3>
            <p className="text-gray-400 text-lg">
              From documenting the vibrant festivals of Nandurbar to helping brands like Sparshh Nursing Home and local fashion outlets reach thousands.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex bg-white/5 p-1.5 rounded-2xl mt-8 md:mt-0 backdrop-blur-md border border-white/10 shadow-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Reels
            </button>
            <button
              onClick={() => setActiveTab('viral')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'viral' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp size={16} /> Viral Stories
            </button>
            <button
              onClick={() => setActiveTab('promo')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'promo' 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Store size={16} /> Client Work
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
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
              >
                <a 
                  href="https://www.instagram.com/nandurbar_diaries" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-dark-card border border-white/5 shadow-2xl hover:shadow-brand-500/20 hover:border-brand-500/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <img 
                    src={reel.image} 
                    alt={reel.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Pin Icon if pinned */}
                  {reel.isPinned && (
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/20 z-10">
                      <Pin size={12} fill="currentColor" className="text-white transform rotate-45" />
                    </div>
                  )}

                  {/* Vote / Like Button */}
                  <button 
                    onClick={(e) => handleVote(e, reel.id)}
                    className="absolute top-3 right-3 z-20 group/heart"
                    aria-label={`Like ${reel.title}`}
                  >
                     <div className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${votedReels.includes(reel.id) ? 'bg-red-500/20 border border-red-500/50' : 'bg-black/30 border border-white/10 hover:bg-white/20'}`}>
                        <Heart 
                          size={16} 
                          className={`transition-all duration-300 ${votedReels.includes(reel.id) ? 'fill-red-500 text-red-500 scale-110' : 'text-white group-hover/heart:scale-110'}`} 
                        />
                     </div>
                  </button>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 pointer-events-none">
                    <div className="w-14 h-14 bg-brand-600/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                      <Play fill="white" className="text-white ml-1 w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300">
                    <div className="flex justify-between items-end mb-2">
                       <div className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-md border ${reel.type === 'viral' ? 'bg-red-500/20 border-red-500/30 text-red-200' : 'bg-blue-500/20 border-blue-500/30 text-blue-200'}`}>
                        {reel.type === 'viral' ? <TrendingUp size={10} /> : <Store size={10} />}
                        <span className="text-[9px] font-bold uppercase tracking-wider">{reel.type === 'viral' ? 'Viral' : 'Client'}</span>
                       </div>
                       <span className="text-[10px] font-bold text-gray-300 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                         {reel.category}
                       </span>
                    </div>
                    
                    <h4 className="text-white font-bold text-base leading-tight mb-2 line-clamp-2 drop-shadow-md">{reel.title}</h4>
                    
                    <div className="flex items-center justify-between mt-1 border-t border-white/10 pt-2">
                      <div className="flex items-center text-gray-300 text-xs font-medium">
                          <Eye size={12} className="mr-1.5 text-brand-500" />
                          <span>{reel.views}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-xs font-medium">
                          <Heart size={12} className={`mr-1.5 ${votedReels.includes(reel.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                          <span>{formatLikes(reel.likes)}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
           <a 
             href="https://www.instagram.com/nandurbar_diaries" 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center space-x-2 text-white border border-white/20 bg-white/5 px-8 py-4 rounded-full hover:bg-brand-600 hover:border-transparent transition-all group shadow-lg hover:shadow-brand-500/25 cursor-pointer"
           >
             <span className="font-semibold tracking-wide">Explore All Reels on Instagram</span>
             <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsShowcase;