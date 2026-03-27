"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const concerts = [
  { id: 1, name:"Calvin Harris", image: "/calvin-Harris.jpg" },
  { id: 2, name:"Metalica", image: "/metalica.jpg" },
  { id: 3, name:"Olivia Dean", image: "/Olivia-Dean.jpg" },
  { id: 4, name:"Weeknd", image: "/Weeknd.jpg" },
  { id: 5, name:"Zach Bryan", image: "/Zach-Bryan.jpg" },
  { id: 6, name:"Luke Combs", image: "/Luke-Combs.jpg" },
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
      const scrollAmount = containerRef.current.clientWidth * 0.6;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black py-8 sm:py-12 px-4 sm:px-6  overflow-hidden group/section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-[32px] font-bold text-white mb-3 tracking-tight">
          Trending Now
        </h2>

        <div className="relative flex items-center">
          {/* LEFT ARROW */}
          {showLeftArrow && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute -left-2 md:-left-5 z-50 h-14 w-10 bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-md opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10 cursor-pointer"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* CARDS CONTAINER */}
          <div
            ref={containerRef}
            onScroll={checkScroll}
            className="flex gap-12 md:gap-8 overflow-y-hidden overflow-x-auto scroll-smooth no-scrollbar w-full py-0 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {concerts.map((concert, index) => (
              <div
                key={concert.id}
                className="relative flex-shrink-0 flex items-end group/card"
                style={{ width: "180px", height: "260px" }}
              >
                {/* 2. THE CARD */}
                <div className="relative w-[160px] h-[230px] ml-auto  rounded-lg z-10 bg-neutral-900 border border-white/5 transition-all duration-500 group-hover/card:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  {/* 3. TOP BLUE GLOW (Code based) */}
                  {/* <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue-500/40 via-blue-500/5 to-transparent z-20 pointer-events-none" /> */}
                  {/* 1. BIG NUMBER (Hollow Outline Style) */}

                  {/* IMAGE */}
                  <img
                    src={concert.image}
                    alt="concert"
                    className="w-full h-full object-cover transition-transform duration-700 rounded-lg"
                  />
                  <h3 className="absolute bottom-1 left-2">
                    {concert.name && concert.name}  
                  </h3>
                  <span
                    className="absolute -left-8 bottom-30 z-100 text-[100px] font-black leading-none select-none transition-transform duration-500"
                    style={{
                      color: "#414141",
                      position: "relative", // Zaroori hai pseudo-element ke liye
                    }}
                    // Hum CSS class ya inline style ke bajaye pseudo-element use karenge
                  >
                    <span
                      className="absolute bottom-[10px]"
                      style={{
                        WebkitTextStroke: "6px rgba(255,255,255,1)", // Stroke thoda thick rakhein
                        zIndex: -1,
                      }}
                    >
                      {index + 1}
                    </span>
                    {index + 1}
                  </span>
                  
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-15" /> */}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          {showRightArrow && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute -right-2 md:-right-5 z-50 h-14 w-10 bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-md opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10 cursor-pointer"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
