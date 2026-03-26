// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// // Custom Triangle Play Icon (As per image_6c6b44.png)
// const PlayArrow = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className="ml-2"
//   >
//     <path d="M5 3l14 9-14 9V3z" />
//   </svg>
// );

// const events = [
//   {
//     id: 0,
//     isHero: true,
//     title: "Bus Travel to Ireland's Biggest Events",
//     subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
//     artist: "CALVIN HARRIS ",
//     priceText: "From €28. Book anytime. QR e-ticket instantly.",
//     bg: "/hero-bg.png",
//   },
//   {
//     id: 1,
//     isHero: true,
//     title: "Bus Travel to Ireland's Biggest Events",
//     subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
//     priceText: "From €28. Book anytime. QR e-ticket instantly.",
//     artist: "THE WEEKND",
//     location: "MALAHIDE CASTLE 2026",
//     bg: "/hero-bg02.png",
//     subheading: "BUS TO CASTLE",
//   },
//   {
//     id: 3,
//     isHero: true,
//     title: "Bus Travel to Ireland's Biggest Events",
//     subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
//     priceText: "From €28. Book anytime. QR e-ticket instantly.",
//     artist: "kesha",
//     location: "MALAHIDE CASTLE 2026",
//     bg: "/hero-bg03.png",
//     subheading: "BUS TO CASTLE",
//   },
// ];

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Safety Fallback: currentEvent ko hamesha define rakhta hai
//   const currentEvent = events[currentIndex] || events[0];

//   useEffect(() => {
//     const autoScroll = setInterval(() => {
//       nextSlide();
//     }, 6000);
//     return () => clearInterval(autoScroll);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
//   };

//   return (
//     <section className="relative min-h-[108vh] flex flex-col justify-center overflow-hidden text-white py-20">
//       {/* Background Image Transition (Fixed 'bg' Error) */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentEvent?.id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.5 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 z-0"
//         >
//           {currentEvent?.bg && (
//             <img
//               src={currentEvent.bg}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           )}
//           <div className="absolute inset-0" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-20 w-full max-w-7xl mx-auto px-0 h-[65vh] flex flex-col justify-between">
//         <AnimatePresence mode="wait">
//           {/* {currentEvent?.isHero ? ( */}
//           <motion.div
//             key="hero-content"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="flex flex-col space-y-8"
//           >
//             <h1 className="text-6xl md:text-[62px] font-[700] max-w-2xl">
//               {currentEvent.title}
//             </h1>
//             <p className="text-[20px] text-white ">{currentEvent.subtext}</p>
//             <p className="text-[20px] text-white ">{currentEvent.priceText}</p>

//             <div className="flex max-w-lg bg-[#323232] border border-white/10 rounded-sm overflow-hidden backdrop-blur-md group focus-within:border-[#007bff] transition-all">
//               <input
//                 type="text"
//                 placeholder="Search for an event or venue"
//                 className="bg-transparent px-6 py-3 w-full outline-none text-[16px] placeholder:text-[#FFFFFF73]"
//               />
//               <button className="bg-[#006DF2] px-10 flex items-center gap-2 hover:bg-blue-600 transition-all shrink-0 font-mediumuppercase text-[16px] tracking-widest text-white">
//                 <Search size={20} /> Search
//               </button>
//             </div>
//             {/* Bottom Large Artist Name */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-[5%]"
//             >
//               <h1 className="text-[151px] font-bold uppercase tracking-tighter leading-none opacity-60 select-none whitespace-nowrap">
//                 {currentEvent?.artist}
//               </h1>
//             </motion.div>
//           </motion.div>
//           {/* ) : (
//             <div className="flex flex-col h-full justify-between">
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="self-end mt-10 text-left" 
//               >
//                 <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 max-w-xl ml-auto leading-[1.1]">
                  
//                   {currentEvent?.subheading}{" "}
//                   <span className="block text-white/90">2026</span>
//                 </h2>

//                 <Link
//                   href="/booking"
//                   className="inline-flex items-center justify-between bg-[#006DF2] hover:bg-white hover:text-black text-white px-8 py-4 text-[18px] font-medium transition-all duration-300 min-w-[30px]"
//                 >
//                   <span>Book Your Bus Seat</span>
//                   <PlayArrow />
//                 </Link>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-[-3%]"
//               >
//                 <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-none opacity-90 select-none whitespace-nowrap">
//                   {currentEvent?.artist}
//                 </h1>
//               </motion.div>
//             </div>
//           )} */}
//         </AnimatePresence>
//       </div>

//       {/* --- MINIMAL RIGHT-SIDE INDICATOR --- */}
//       {/* <div className="absolute bottom-16 right-10 z-40 flex flex-col items-end gap-3">
//         <div className="flex items-center gap-4 mb-2">
//           <span className="text-[10px] tracking-[0.4em] font-bold text-white uppercase">
//             0{currentIndex + 1}
//           </span>
//           <div className="w-10 h-[1px] bg-white/20" />
//           <span className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">
//             0{events.length}
//           </span>
//         </div>
//         <div className="flex items-center gap-8">
//           <div className="flex gap-2">
//             {events.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`h-[2px] transition-all duration-500 rounded-full 
//             ${currentIndex === i ? "w-8 bg-[#007bff]" : "w-4 bg-white/20 hover:bg-white/40"}`}
//               />
//             ))}
//           </div>
//           <div className="flex gap-2 border-l border-white/10 pl-6">
//             <button
//               onClick={prevSlide}
//               className="text-white/40 hover:text-[#007bff] transition-all duration-300"
//             >
//               <ChevronLeft size={22} strokeWidth={1.5} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="text-white/40 hover:text-[#007bff] transition-all duration-300"
//             >
//               <ChevronRight size={22} strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>
//       </div> */}
//       {/* --- UPDATED RIGHT-SIDE INDICATOR with BLUR (Inspired by image_0.png) --- */}
//       <div className="absolute bottom-16 right-10 z-40 flex flex-col items-end gap-3">
//         {/* Slide Numbering - Clean & Uppercase */}
//         <div className="flex items-center gap-4 mb-2">
//           <span className="text-[10px] tracking-[0.4em] font-bold text-white uppercase">
//             0{currentIndex + 1}
//           </span>
//           <div className="w-10 h-[1px] bg-white/20" />
//           <span className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">
//             0{events.length}
//           </span>
//         </div>

//         {/* Progress Lines & Navigation Container */}
//         <div className="flex items-center gap-8">
//           {/* Minimal Dots/Lines with Hover Interaction */}
//           <div className="flex gap-2">
//             {events.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`h-[2px] transition-all duration-500 rounded-full group`}
//                 style={{ width: currentIndex === i ? "32px" : "16px" }} // Explicit width management
//               >
//                 {/* Active / Current indicator line */}
//                 <div
//                   className={`h-full rounded-full transition-colors duration-500 
//             ${
//               currentIndex === i
//                 ? "bg-[#007bff]" // Active color (Blue)
//                 : "bg-white/20 hover:bg-white/40" // Inactive/Hover state
//             }`}
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Chevron Controls */}
//           <div className="flex gap-2 border-l border-white/10 pl-6">
//             <button
//               onClick={prevSlide}
//               className="text-white/40 hover:text-[#007bff] transition-all duration-300"
//             >
//               <ChevronLeft size={22} strokeWidth={1.5} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="text-white/40 hover:text-[#007bff] transition-all duration-300"
//             >
//               <ChevronRight size={22} strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- BOTTOM FIXED GLOW IMAGE --- */}
//       <div className="absolute bottom-[-40] left-0 w-full z-[60] leading-[0]">
//         <img
//           src="/glow.png" // Apni image ka sahi path yahan likhein
//           alt="Bottom Glow"
//           className="w-full h-auto object-bottom pointer-events-none"
//           style={{ display: "block" }}
//         />
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Custom Triangle Play Icon (As per image_6c6b44.png)
const PlayArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="ml-2"
  >
    <path d="M5 3l14 9-14 9V3z" />
  </svg>
);

const events = [
  {
    id: 0,
    isHero: true,
    title: "Bus Travel to Ireland's Biggest Events",
    subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
    artist: "CALVIN HARRIS ",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    bg: "/hero-bg.png",
  },
  {
    id: 1,
    isHero: true,
    title: "Bus Travel to Ireland's Biggest Events",
    subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    artist: "THE WEEKND",
    location: "MALAHIDE CASTLE 2026",
    bg: "/hero-bg02.png",
    subheading: "BUS TO CASTLE",
  },
  {
    id: 3,
    isHero: true,
    title: "Bus Travel to Ireland's Biggest Events",
    subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    artist: "kesha",
    location: "MALAHIDE CASTLE 2026",
    bg: "/hero-bg03.png",
    subheading: "BUS TO CASTLE",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentEvent = events[currentIndex] || events[0];

  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden text-white !py-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEvent?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {currentEvent?.bg && (
            <img
              src={currentEvent.bg}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-15 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-6xl md:text-[62px] font-[700] max-w-2xl">
              {currentEvent.title}
            </h1>
            <p className="text-[20px] text-white ">{currentEvent.subtext}</p>
            <p className="text-[20px] text-white ">{currentEvent.priceText}</p>

            <div className="flex max-w-lg bg-[#323232] border border-white/10 rounded-sm overflow-hidden backdrop-blur-md group focus-within:border-[#007bff] transition-all">
              <input
                type="text"
                placeholder="Search for an event or venue"
                className="bg-transparent px-6 py-3 w-full outline-none text-[16px] placeholder:text-[#FFFFFF73]"
              />
              <button className="bg-[#006DF2] px-10 flex items-center gap-2 hover:bg-blue-600 transition-all shrink-0 font-medium uppercase text-[14px] tracking-widest text-white cursor-pointer">
                <Search size={20} /> Search
              </button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-[5%]"
            >
              <h1 className="text-[151px] font-bold uppercase tracking-tighter leading-none opacity-60 select-none whitespace-nowrap">
                {currentEvent?.artist}
              </h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- NEW INDICATOR COMPLEX (Exactly as per image_1.png style) --- */}
      <div className="absolute bottom-30 right-10 z-40 flex flex-col items-end gap-5">

        {/* The Dot & Pill Indicators with Arrows */}
        <div className="flex items-center gap-8">
          <div className="flex gap-2.5 items-center">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="focus:outline-none cursor-pointer"
              >
                {currentIndex === i ? (
                  /* Active State: Long Pill with Yellow-to-Green Gradient */
                  <div 
                    className="h-2.5 w-12 rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(100,255,100,0.3)] bg-white"
                    style={{
                      // background: 'linear-gradient(90deg, #E6FF80 0%, #20E382 100%)', 
                    }}
                  />
                ) : (
                  /* Inactive State: Dark Grey Semi-transparent Dot */
                  <div className="h-2.5 w-2.5 bg-[#7e7575] rounded-full hover:bg-white/30 transition-colors duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Chevron Controls (Restored Arrow positioning and style) */}
          {/* <div className="flex gap-2 border-l border-white/10 pl-6">
            <button
              onClick={prevSlide}
              className="text-white/40 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white/40 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </div> */}
        </div>
      </div>

      {/* --- BOTTOM FIXED GLOW IMAGE --- */}
      <div className="absolute bottom-[-40] left-0 w-full z-[60] leading-[0]">
        <img
          src="/glow.png"
          alt="Bottom Glow"
          className="w-full h-auto object-bottom pointer-events-none"
          style={{ display: "block" }}
        />
      </div>
    </section>
  );
}