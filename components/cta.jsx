'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section className="bg-black w-full py-20 px-6">
      {/* Main Container with Background Image */}
      <div 
        className="max-w-[1400px] mx-auto relative h-[450px] rounded-[8px] overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
        style={{ 
          // Yahan apni image ka path lagayen
          backgroundImage: `url('/cta.png')` 
        }}
      >
       
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Area */}
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Travel With The Fans
          </h2>
          
          <h3 className="text-xl md:text-xl font-semibold text-white mb-4">
            The Journey Is Part of the Experience
          </h3>
          
          <p className="text-zinc-200 text-sm md:text-base mb-8 leading-relaxed">
            Travel with people going to the same show as you. 
            Share the excitement on the way there and the stories on the way back.
          </p>

          <button className="bg-[#0070f3] hover:bg-[#0060d3] text-white font-bold py-3 px-8 rounded-[6px] transition-all duration-300  text-sm tracking-wider">
            Book Your Bus
          </button>
        </div>
      </div>
    </section>
  );
}