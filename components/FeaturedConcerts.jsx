'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const concerts = [
  { id: 1, artist: "ONE PIECE", image: "/image01.png" },
  { id: 2, artist: "DHURANDHAR", image: "/image02.png" },
  { id: 3, artist: "WAR MACHINE", image: "/image03.png" },
  { id: 4, artist: "TASKARRE", image: "/image04.png" },
  { id: 5, artist: "MADE IN KOREA", image: "/image05.png" },
   { id: 6, artist: "WAR MACHINE", image: "/image06.png" },
  // { id: 7, artist: "TASKARRE", image: "/image01.png" },
  // { id: 8, artist: "MADE IN KOREA", image: "/image02.png" },
];

export default function FeaturedConcerts() {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const handleScroll = (direction) => {
    if (containerRef.current) {
   
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-black py-10 md:py-16 overflow-hidden group/section">
      {/* --- WRAPPER FOR PADDING & ALIGNMENT --- */}
      <div className="max-w-7xl mx-auto px-15 ">
        
        {/* --- HEADING --- */}
        <h2 className="text-xl md:text-[24px] font-medium text-white mb-6 tracking-tight">
          Trending Now
        </h2>

        {/* --- SLIDER MAIN AREA --- */}
        <div className="relative flex items-center">
          
          {/* LEFT ARROW (Netflix Styled) */}
          {showLeftArrow && (
            <button 
              onClick={() => handleScroll('left')}
              className="absolute -left-4 md:-left-6 z-50 h-[40%] w-8 md:w-10 bg-zinc-900/80 backdrop-blur-md rounded-full opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10 "
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
          )}

          {/* CARDS CONTAINER */}
          <div 
            ref={containerRef}
            onScroll={checkScroll}
            className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full py-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {concerts.map((concert) => (
              <div 
                key={concert.id} 
                // Desktop: 100% / 5 cards minus gaps
                className="relative flex-shrink-0 cursor-pointer transition-transform duration-300  z-10
                           w-[160px] md:w-[17%]" 
              >
                <div className="w-full h-full hover:scale-105 transition-all duration-700">
                  <img 
                    src={concert.image} 
                    alt={concert.artist}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                 
                  
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW (Netflix Styled) */}
          {showRightArrow && (
            <button 
              onClick={() => handleScroll('right')}
              className="absolute -right-4 md:-right-6 z-50 h-[40%] w-8 md:w-10 bg-zinc-900/80 backdrop-blur-md rounded-full opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}