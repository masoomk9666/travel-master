'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bus, Users, ShieldCheck } from 'lucide-react';

const STATS_DATA = [
  {
    id: 1,
    number: "1",
    label: "DIRECT TO VENUE",
    description: "No parking stress. No complicated transport.",
    icon: <MapPin size={24} className="text-[#006DF2]" />
  },
  {
    id: 2,
    number: "2",
    label: "RETURN TRAVEL",
    description: "Your journey there and back is covered.",
    icon: <Bus size={24} className="text-[#006DF2]" />
  },
  {
    id: 3,
    number: "3",
    label: "80+ LOCATIONS",
    description: "Convenient pickup points nationwide.",
    icon: <Users size={24} className="text-[#006DF2]" />
  },
  {
    id: 4,
    number: "4",
    label: "900K+ TRUSTED",
    description: "Over 900,000 concertgoers transported.",
    icon: <ShieldCheck size={24} className="text-[#006DF2]" />
  }
];

export default function NetflixStatsSection() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          Why Fans Choose Us
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS_DATA.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.1 }}
              className="relative group flex items-start gap-4"
            >
              {/* Netflix Large Number Style */}
              <div className="relative flex-shrink-0">
                <span className="text-[120px] font-black leading-none text-black select-none"
                      style={{ 
                        WebkitTextStroke: '2px #555',
                        fontFamily: 'sans-serif' 
                      }}>
                  {stat.number}
                </span>
              </div>

              {/* Content Area */}
              <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  {stat.icon}
                  <h3 className="text-lg font-bold tracking-wider uppercase text-zinc-100">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
                  {stat.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-red-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}