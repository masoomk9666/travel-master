// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Play } from 'lucide-react';

// const venues = [
//   { id: 1, name: "Venue One", sub: "Dublin", events: "3 events", image: "/one.png" },
//   { id: 2, name: "Venue Two", sub: "London", events: "8 events", image: "/two.png" },
//   { id: 3, name: "Venue Three", sub: "Cork", events: "12 events", image: "/three.png" },
//   { id: 4, name: "Venue Four", sub: "Belfast", events: "15 events", image: "/one.png" },
// ];

// export default function VenuesSlider() {
//   const [isPaused, setIsPaused] = useState(false);
//   const duplicatedVenues = [...venues, ...venues, ...venues, ...venues];

//   return (
//     <section className="bg-black py-8 sm:py-12 px-4 sm:px-6  border-t border-white/5">
//       <div className="max-w-7xl mx-auto ">
        
//         {/* --- HEADING --- */}
//         <div className="mb-10 text-left">
//           <h2 className="text-lg md:text-[32px] font-bold text-white/90 tracking-tight ">
//             Venues We Travel To
//           </h2>
//         </div>

//         {/* --- SLIDER CONTAINER --- */}
//         <div 
//           className="relative overflow-hidden group"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <motion.div 
//             className="flex gap-4 md:gap-5" 
//             animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{ 
//               width: "max-content",
//               // CSS fallback for smoother pausing
//               animationPlayState: isPaused ? 'paused' : 'running' 
//             }}
//           >
//             {duplicatedVenues.map((venue, index) => (
//               <div 
//                 key={index} 
//                 className="relative group/card cursor-pointer shrink-0"
//               >
//                 {/* --- THE CARD --- */}
//                 <div className="relative w-[140px] h-[196px] md:w-[180px] md:h-[252px] overflow-hidden rounded-xl z-10 bg-neutral-900 border border-white/5 transition-all duration-300">
                  
//                   {/* 1. TOP BADGE */}
//                   <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
//                     <span className="bg-[#2a2a2a]/80 backdrop-blur-md border border-white/10 text-white/90 text-[8px] md:text-[9px] font-medium px-4 py-1 rounded-full whitespace-nowrap">
//                       {venue.events}
//                     </span>
//                   </div>

//                   {/* 2. IMAGE */}
//                   <img 
//                     src={venue.image} 
//                     alt={venue.name}
//                     className="w-full h-full object-cover grayscale-[0.2] group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-110"
//                   />

//                   {/* 3. HOVER OVERLAY */}
//                   <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/60 transition-all duration-300 z-20" />
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Side Fades */}
//           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import React from 'react';
import { Play } from 'lucide-react';

const venues = [
  { id: 1, name: "Venue One", sub: "Dublin", events: "3 events", image: "/one.png" },
  { id: 2, name: "Venue Two", sub: "London", events: "8 events", image: "/two.png" },
  { id: 3, name: "Venue Three", sub: "Cork", events: "12 events", image: "/three.png" },
  { id: 4, name: "Venue Four", sub: "Belfast", events: "15 events", image: "/one.png" },
  { id: 5, name: "Venue Five", sub: "Dublin", events: "8 events", image: "/two.png" },
  { id: 6, name: "Venue Six", sub: "Cork", events: "12 events", image: "/three.png" },
];

export default function VenuesSlider() {
  return (
    <section className="bg-black py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADING --- */}
        <div className="mb-10 text-left">
          <h2 className="text-lg md:text-[32px] font-bold text-white/90 tracking-tight">
            Venues We Travel To
          </h2>
        </div>

        {/* --- STATIC GRID CONTAINER --- */}
        <div className="relative group">
          {/* Changed to grid to ensure cards cover the row width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-8">
            {venues.map((venue, index) => (
              <div 
                key={index} 
                className="relative group/card cursor-pointer"
              >
                {/* --- THE CARD --- */}
                {/* Removed fixed width w-[140px]/w-[180px] so it fills grid cell width */}
                <div className="relative w-full h-[196px] md:h-[320px] lg:h-[252px] overflow-hidden rounded-lg z-10 bg-neutral-900 border border-white/5 transition-all duration-300">
                  
                  {/* 1. TOP BADGE */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
                    <span className="bg-[#2a2a2a]/80 backdrop-blur-md border border-white/10 text-white/90 text-[8px] md:text-[9px] font-medium px-4 py-1 rounded-full whitespace-nowrap">
                      {venue.events}
                    </span>
                  </div>

                  {/* 2. IMAGE */}
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-110"
                  />

                  {/* 3. HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/60 transition-all duration-300 z-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}