import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Followers', value: '18.3K+' },
  { label: 'Posts & Stories', value: '122+' },
  { label: 'Highest Reach', value: '459K+' },
  { label: 'Happy Clients', value: '50+' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;