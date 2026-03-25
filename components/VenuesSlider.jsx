// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const venues = [
//   { id: 1, events: "3 events", image: "/one.png" },
//   { id: 2,  events: "8 events", image: "/two.png" },
//   { id: 3,  events: "12 events", image: "/three.png" },
//   { id: 4,   events: "15 events", image: "/one.png" },
// ];

// export default function VenuesSlider() {
//   // Seamless loop for 4 cards
//   const duplicatedVenues = [...venues, ...venues, ...venues];

//   return (
//     <section className="bg-black py-10 md:py-16 overflow-hidden border-t border-white/5">
//       {/* --- HEADING --- */}
//       <div className="max-w-7xl mx-auto px-6 md:px-15 mb-8 text-left !overflow-hidden">
//         <h2 className="text-lg md:text-[24px] font-medium text-white/90 tracking-tight">
//           Venues We Travel To
//         </h2>
//       </div>

//       {/* --- SLIDER --- */}
//       <div className="relative flex overflow-hidden">
//         <motion.div 
//           className="flex gap-4 md:gap-5 px-6 md:px-10 overflow-hidden" 
//           animate={{ x: ["0%", "-33.33%"] }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         >
//           {duplicatedVenues.map((venue, index) => (
//             <div 
//               key={index} 
//               className="relative group cursor-pointer"
//               style={{ minWidth: '140px', width: 'auto' }}
//             >
//               {/* --- THE CARD --- */}
//               <div className="relative w-[140px] h-[196px] md:w-[180px] md:h-[252px] overflow-hidden rounded-xl z-10 bg-neutral-900 border border-white/5 transition-all duration-300">
                
//                 {/* 1. TOP BADGE (Gray Rounded) */}
//                 <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
//                   <span className="bg-[#2a2a2a]/80 backdrop-blur-md border border-white/10 text-white/90 text-[8px] md:text-[9px] font-medium px-4 py-1 rounded-full ">
//                     {venue.events}
//                   </span>
//                 </div>

//                 {/* 2. IMAGE */}
//                 <img 
//                   src={venue.image} 
//                   alt={venue.name}
//                   className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
//                 />

//                 {/* 3. HOVER OVERLAY (Black Tint) */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 z-20" />
                
             
//                 {/* 4. VENUE TEXT (Bottom Center) */}
//                 <div className="absolute bottom-4 left-0 right-0 text-center px-2 z-25 group-hover:opacity-0 transition-opacity duration-300">
//                   <h3 className="text-white font-black text-sm md:text-lg leading-tight uppercase tracking-tighter">
//                     {venue.name}
//                   </h3>
//                   <p className="text-white/60 text-[8px] md:text-[10px] font-medium uppercase tracking-widest">
//                     {venue.sub}
//                   </p>
//                 </div>

//                 {/* 5. HOVER BUTTON (Center-Bottom) */}
//                 <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50">
//                    <button className="bg-[#007bff] text-white text-[9px] rounded-[5px] font-medium  tracking-widest px-5 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors shadow-2xl">
//                      View Venue
//                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
//                    </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }






// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// const venues = [
//   { id: 1, name: "Venue One", sub: "Dublin", events: "3 events", image: "/one.png" },
//   { id: 2, name: "Venue Two", sub: "London", events: "8 events", image: "/two.png" },
//   { id: 3, name: "Venue Three", sub: "Cork", events: "12 events", image: "/three.png" },
//   { id: 4, name: "Venue Four", sub: "Belfast", events: "15 events", image: "/one.png" },
// ];

// export default function VenuesSlider() {
//   // Seamless loop ke liye array ko duplicate kiya
//   const duplicatedVenues = [...venues, ...venues, ...venues, ...venues];

//   return (
//     <section className="bg-black py-10 md:py-16 border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-6 md:px-15">
        
//         {/* --- HEADING --- */}
//         <div className="mb-8 text-left">
//           <h2 className="text-lg md:text-[24px] font-medium text-white/90 tracking-tight">
//             Venues We Travel To
//           </h2>
//         </div>

//         {/* --- SLIDER CONTAINER (Limited to max-w-7xl) --- */}
//         <div className="relative overflow-hidden group">
//           <motion.div 
//             className="flex gap-4 md:gap-5" 
//             animate={{ x: ["0%", "-50%"] }} // 50% animate karega kyunki cards repeated hain
//             transition={{
//               duration: 40,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{ width: "max-content" }} // Content ke hisab se width lega
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
                  
//                   {/* 4. VENUE TEXT (Bottom Center) */}
//                   {/* <div className="absolute bottom-4 left-0 right-0 text-center px-2 z-25 group-hover/card:opacity-0 transition-opacity duration-300">
//                     <h3 className="text-white font-black text-sm md:text-lg leading-tight uppercase tracking-tighter">
//                       {venue.name}
//                     </h3>
//                     <p className="text-white/60 text-[8px] md:text-[10px] font-medium uppercase tracking-widest">
//                       {venue.sub}
//                     </p>
//                   </div> */}

//                   {/* 5. HOVER BUTTON */}
//                   <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 z-50">
//                      <button className="bg-[#007bff] text-white text-[9px] rounded-[5px] font-medium tracking-widest px-5 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors shadow-2xl uppercase">
//                        View Venue
//                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
//                      </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* Optional: Side Fades (Agar aap chahte hain edges soft lagein) */}
//           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const venues = [
  { id: 1, name: "Venue One", sub: "Dublin", events: "3 events", image: "/one.png" },
  { id: 2, name: "Venue Two", sub: "London", events: "8 events", image: "/two.png" },
  { id: 3, name: "Venue Three", sub: "Cork", events: "12 events", image: "/three.png" },
  { id: 4, name: "Venue Four", sub: "Belfast", events: "15 events", image: "/one.png" },
];

export default function VenuesSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedVenues = [...venues, ...venues, ...venues, ...venues];

  return (
    <section className="bg-black py-10 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        
        {/* --- HEADING --- */}
        <div className="mb-8 text-left">
          <h2 className="text-lg md:text-[24px] font-medium text-white/90 tracking-tight">
            Venues We Travel To
          </h2>
        </div>

        {/* --- SLIDER CONTAINER --- */}
        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex gap-4 md:gap-5" 
            animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ 
              width: "max-content",
              // CSS fallback for smoother pausing
              animationPlayState: isPaused ? 'paused' : 'running' 
            }}
          >
            {duplicatedVenues.map((venue, index) => (
              <div 
                key={index} 
                className="relative group/card cursor-pointer shrink-0"
              >
                {/* --- THE CARD --- */}
                <div className="relative w-[140px] h-[196px] md:w-[180px] md:h-[252px] overflow-hidden rounded-xl z-10 bg-neutral-900 border border-white/5 transition-all duration-300">
                  
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
                  
                  {/* 4. HOVER BUTTON */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 z-50">
                     <button className="bg-[#007bff] text-white text-[9px] rounded-[5px] font-medium tracking-widest px-5 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors shadow-2xl uppercase">
                       View Venue
                       <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}