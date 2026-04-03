"use client";

import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Link,
} from "lucide-react";

const concerts = [
  {
    id: 1,
    name: "CALVIN HARRIS",
    location: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/calvin-Harris.png",
  },
  {
    id: 2,
    name: "METALLICA",
    location: "Stade de France, Paris",
    date: "August 2026",
    image: "/metalica.png",
  },
  {
    id: 3,
    name: "OLIVIA DEAN",
    location: "Hammersmith, London",
    date: "June 2026",
    image: "/Olivia-Dean.png",
  },
  {
    id: 4,
    name: "THE WEEKND",
    location: "Wembley Stadium, London",
    date: "September 2026",
    image: "/Weeknd.png",
  },
  {
    id: 5,
    name: "ZACH BRYAN",
    location: "Red Rocks, Colorado",
    date: "May 2026",
    image: "/Zach-Bryan.png",
  },
  {
    id: 6,
    name: "LUKE COMBS",
    location: "Nissan Stadium, Nashville",
    date: "October 2026",
    image: "/Luke-Combs.png",
  },
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
    <section className="bg-black py-8 sm:py-12 px-4 sm:px-6 overflow-hidden group/section">
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
            className="flex gap-12 md:gap-8 overflow-y-hidden overflow-x-auto scroll-smooth no-scrollbar w-full py-0 px-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {concerts.map((concert, index) => (
              <div
                key={concert.id}
                className="relative flex-shrink-0 flex items-end group/card"
                style={{ width: "200px", height: "290px" }}
              >
                {/* THE CARD */}
                <div className="relative w-[180px] h-[250px] ml-auto rounded-lg z-10 bg-neutral-900  transition-all duration-500 group-hover/card:-translate-y-4  ">
                  {/* IMAGE */}
                  <img
                    src={concert.image}
                    alt={concert.name}
                    className="w-full h-full object-cover transition-transform duration-700 rounded-lg"
                  />

                  {/* CONTENT OVERLAY (Bilkul Image jaisa) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-7 pb-4">
                    <h3 className="text-white font-medium text-[15px] mb-1">
                      {concert.name}
                    </h3>

                    <div className="flex items-center gap-1 text-[12px] text-white mb-0.5">
                      <MapPin size={12} className="flex-shrink-0" />
                      <span className="truncate">{concert.location}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[12px] text-white mb-3">
                      <Calendar size={12} className="flex-shrink-0" />
                      <span>{concert.date}</span>
                    </div>
                    <a href="/booking">
                      <button className="w-full bg-[#0072F5] text-white text-[10px] font-medium py-1.5 rounded-md hover:bg-blue-600 transition-colors cursor-pointer flex justify-center items-center gap-1">
                        <img
                          src="/icons/seat.svg"
                          alt="Seat Icon"
                          width="12"
                          height="12"
                          className="brightness-200" // Agar color white karna ho toh filter use kar sakte hain
                        />
                        <span>Book Your Seat</span>
                      </button>
                    </a>
                  </div>

                  <div className="absolute -left-13 bottom-4 z-20 pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 120 120">
                      <defs>
                        {/* 1. Dynamic Gradient */}
                        <linearGradient
                          id={`gradStroke-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#0772F2" />
                          <stop offset="100%" stopColor="#86C6FF" />
                        </linearGradient>

                        {/* 2. White Glow/Shadow Filter */}
                        <filter
                          id={`whiteGlow-${index}`}
                          x="-20%"
                          y="-20%"
                          width="140%"
                          height="140%"
                        >
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite
                            in="blur"
                            in2="SourceGraphic"
                            operator="out"
                          />
                          <feComponentTransfer>
                            <feFuncA type="linear" slope="0.8" />
                          </feComponentTransfer>
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Outline Text with Glow Filter */}
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        stroke={`url(#gradStroke-${index})`}
                        strokeWidth="4"
                        fill="transparent"
                        fontSize="100"
                        fontWeight="900"
                        className="select-none"
                        filter={`url(#whiteGlow-${index})`} // Filter yahan apply ho raha hai
                        style={{
                          filter: `drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.4))`,
                        }} // Additional soft shadow
                      >
                        {index + 1}
                      </text>

                      {/* Main Black Fill Text */}
                      <text
                        x="50%"
                        y="60%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#000000"
                        fontSize="100"
                        fontWeight="900"
                        className="select-none"
                      >
                        {index + 1}
                      </text>
                    </svg>
                  </div>
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
