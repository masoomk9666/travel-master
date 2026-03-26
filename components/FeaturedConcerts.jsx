// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const concerts = [
//   { id: 1, artist: "ONE PIECE", image: "/image01.png" },
//   { id: 2, artist: "DHURANDHAR", image: "/image02.png" },
//   { id: 3, artist: "WAR MACHINE", image: "/image03.png" },
//   { id: 4, artist: "TASKARRE", image: "/image04.png" },
//   { id: 5, artist: "MADE IN KOREA", image: "/image05.png" },
//    { id: 6, artist: "WAR MACHINE", image: "/image06.png" },
//   // { id: 7, artist: "TASKARRE", image: "/image01.png" },
//   // { id: 8, artist: "MADE IN KOREA", image: "/image02.png" },
// ];

// export default function FeaturedConcerts() {
//   const containerRef = useRef(null);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);

//   const checkScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setShowLeftArrow(scrollLeft > 20);
//       setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
//     }
//   };

//   const handleScroll = (direction) => {
//     if (containerRef.current) {

//       const scrollAmount = containerRef.current.clientWidth;
//       containerRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <section className="bg-black py-10 md:py-16 overflow-hidden group/section">
//       {/* --- WRAPPER FOR PADDING & ALIGNMENT --- */}
//       <div className="max-w-7xl mx-auto px-15 ">

//         {/* --- HEADING --- */}
//         <h2 className="text-xl md:text-[24px] font-medium text-white mb-6 tracking-tight">
//           Trending Now
//         </h2>

//         {/* --- SLIDER MAIN AREA --- */}
//         <div className="relative flex items-center">

//           {/* LEFT ARROW (Netflix Styled) */}
//           {showLeftArrow && (
//             <button
//               onClick={() => handleScroll('left')}
//               className="absolute -left-4 md:-left-6 z-50 h-[40%] w-8 md:w-10 bg-zinc-900/80 backdrop-blur-md rounded-full opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10 "
//             >
//               <ChevronLeft size={24} strokeWidth={3} />
//             </button>
//           )}

//           {/* CARDS CONTAINER */}
//           <div
//             ref={containerRef}
//             onScroll={checkScroll}
//             className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth no-scrollbar w-full py-6"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {concerts.map((concert) => (
//               <div
//                 key={concert.id}
//                 // Desktop: 100% / 5 cards minus gaps
//                 className="relative flex-shrink-0 cursor-pointer transition-transform duration-300  z-10
//                            w-[160px] md:w-[17%]"
//               >
//                 <div className="w-full h-full hover:scale-105 transition-all duration-700">
//                   <img
//                     src={concert.image}
//                     alt={concert.artist}
//                     className="w-full h-full object-contain rounded-2xl"
//                   />

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT ARROW (Netflix Styled) */}
//           {showRightArrow && (
//             <button
//               onClick={() => handleScroll('right')}
//               className="absolute -right-4 md:-right-6 z-50 h-[40%] w-8 md:w-10 bg-zinc-900/80 backdrop-blur-md rounded-full opacity-0 group-hover/section:opacity-100 transition-all duration-300 flex items-center justify-center text-white border border-white/10"
//             >
//               <ChevronRight size={24} strokeWidth={3} />
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const concerts = [
  { id: 1, image: "/calvin-Harris.jpg" },
  { id: 2, image: "/metalica.jpg" },
  { id: 3, image: "/Olivia-Dean.jpg" },
  { id: 4, image: "/Weeknd.jpg" },
  { id: 5, image: "/Zach-Bryan.jpg" },
  { id: 6, image: "/Luke-Combs.jpg" },
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
    <section className="bg-black py-10 md:py-16 overflow-hidden group/section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
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
                  {/* <span 
                  className="absolute -left-8 bottom-6 z-100 text-[100px] font-black leading-none select-none transition-transform duration-500"
                  style={{
                    color: '#414141',
                    WebkitTextStroke: '2.5px rgba(255,255,255,1)',
                  }}
                >
                  {index + 1}
                </span> */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-15" />
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
