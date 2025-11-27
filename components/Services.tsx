import React from 'react';
import { Video, Megaphone, Camera, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-brand-500" />,
    title: 'Business Promotion',
    description: 'Targeted shoutouts to our engaged local audience to skyrocket your footfall.',
  },
  {
    icon: <Video className="w-8 h-8 text-brand-500" />,
    title: 'Reels Production',
    description: 'High-quality, trending reels editing and shooting for your products or cafe.',
  },
  {
    icon: <Camera className="w-8 h-8 text-brand-500" />,
    title: 'Event Coverage',
    description: 'Professional photography and live coverage for grand openings and local events.',
  },
  {
    icon: <Share2 className="w-8 h-8 text-brand-500" />,
    title: 'Social Strategy',
    description: 'Consultation on how to grow your own brand presence in the Nandurbar region.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Grow with Nandurbar Diaries</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark-card border border-dark-border p-8 rounded-2xl hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="w-16 h-16 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
