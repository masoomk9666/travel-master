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
//     <section className="relative min-h-[80vh] md:min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-center overflow-hidden text-white !py-20 px-4 sm:px-6 ">
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

//       <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-between">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key="hero-content"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="flex flex-col space-y-3 md:space-y-8"
//           >
//             <h1 className="text-[30px] md:text-[62px] font-[700] text-center md:text-start max-w-xl leading-tight">
//               {currentEvent.title}
//             </h1>
//             <p className="text-[16px] md:text-[20px] text-center md:text-start text-white ">{currentEvent.subtext} <br/><span>
//               {currentEvent.priceText}
//               </span></p>

//             <div className="flex max-w-2xl bg-[#323232] border border-white/10 rounded-sm overflow-hidden backdrop-blur-md group focus-within:border-[#007bff] transition-all">
//               <input
//                 type="text"
//                 placeholder="Search for an event or venue"
//                 className="bg-transparent px-6 py-2 w-full outline-none text-[16px] placeholder:text-[#FFFFFF73]"
//               />
//               <button className="bg-[#006DF2] px-4 md:px-10 flex items-center gap-2 hover:bg-blue-600 transition-all shrink-0 font-medium uppercase text-[16px] tracking-widest text-white cursor-pointer">
//                 <Search size={20} /> <span className="hidden md:block font-bold">Search</span>
//               </button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-[5%]"
//             >
//               <h1 className="text-[40px] md:text-[80px] lg:text-[151px] font-bold uppercase tracking-tighter leading-none opacity-60 select-none whitespace-nowrap">
//                 {currentEvent?.artist}
//               </h1>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* --- NEW INDICATOR COMPLEX (Exactly as per image_1.png style) --- */}

//       <div className="absolute bottom-10 right-[0px] md:bottom-30 md:right-10 z-40 flex flex-col items-center md:items-end gap-5 w-full ">

//         {/* The Dot & Pill Indicators with Arrows */}
//         <div className="flex items-center gap-8">
//           <div className="flex gap-2.5 items-center">
//             {events.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className="focus:outline-none cursor-pointer"
//               >
//                 {currentIndex === i ? (
//                   /* Active State: Long Pill with Yellow-to-Green Gradient */
//                   <div
//                     className="h-2.5 w-12 rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(100,255,100,0.3)] bg-white"
//                     style={{
//                       // background: 'linear-gradient(90deg, #E6FF80 0%, #20E382 100%)',
//                     }}
//                   />
//                 ) : (
//                   /* Inactive State: Dark Grey Semi-transparent Dot */
//                   <div className="h-2.5 w-2.5 bg-[#7e7575] rounded-full hover:bg-white/30 transition-colors duration-300" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- BOTTOM FIXED GLOW IMAGE --- */}
//       <div className="absolute bottom-[-40] left-0 w-full z-[60] leading-[0]">
//         <img
//           src="/glow.png"
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
import { Search, MapPin, Calendar, Users } from "lucide-react";

// Custom Triangle Play Icon (As per image)
const PlayArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
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
    artist: "Calvin Harris",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    bg: "/hero-bg.png",
    thumbnail: "/hero-bg.png", // Replace with your image path
    price: "€40.00",
    date: "Aug 2026",
    venue: "3Arena Dublin",
  },
  {
    id: 1,
    isHero: true,
    title: "Bus Travel to Ireland's Biggest Events",
    subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    artist: "The Weeknd",
    location: "MALAHIDE CASTLE 2026",
    bg: "/hero-bg02.png",
    thumbnail: "/hero-bg02.png", // Replace with your image path
    subheading: "BUS TO CASTLE",
    price: "€45.00",
    date: "July 2026",
    venue: "Malahide Castle",
  },
  {
    id: 3,
    isHero: true,
    title: "Bus Travel to Ireland's Biggest Events",
    subtext: "Concerts. Festivals. Sports. 80+ pickup points nationwide.",
    priceText: "From €28. Book anytime. QR e-ticket instantly.",
    artist: "Kesha",
    location: "MALAHIDE CASTLE 2026",
    bg: "/hero-bg03.png",
    thumbnail: "/hero-bg03.png", // Replace with your image path
    subheading: "BUS TO CASTLE",
    price: "€35.00",
    date: "June 2026",
    venue: "Malahide Castle",
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

  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-center overflow-hidden text-white px-4 sm:px-6 skHero">
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

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent?.id + "content"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="flex flex-col space-y-3 md:space-y-8"
          >
            <h1 className="text-[30px] md:text-[62px] font-[700] text-center md:text-start max-w-xl leading-tight">
              {currentEvent.title}
            </h1>
            <p className="text-[16px] md:text-[20px] text-center md:text-start text-white ">
              {currentEvent.subtext} <br />
              <span>{currentEvent.priceText}</span>
            </p>

            <div className="flex max-w-2xl bg-[#323232]  rounded-sm overflow-hidden backdrop-blur-md group focus-within:border-[#007bff] transition-all">
              <input
                type="text"
                placeholder="Search for an event or venue"
                className="bg-transparent px-6 py-2 w-full outline-none text-[16px] placeholder:text-[#FFFFFF73] border border-white/10"
              />
              <button className="bg-[#006DF2] px-4 md:px-10 flex items-center gap-2 hover:bg-blue-600 transition-all shrink-0 font- text-[16px] tracking-widest text-white cursor-pointer">
                <Search size={20} />{" "}
                <span className="hidden md:block font-medium">Search</span>
              </button>
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-[5%]"
            >
              <h1 className="text-[40px] md:text-[80px] lg:text-[151px] font-bold uppercase tracking-tighter leading-none opacity-60 select-none whitespace-nowrap">
                {currentEvent?.artist}
              </h1>
            </motion.div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- UPDATED NAVIGATION (As per Image 1) --- */}
      {/* <div className="absolute bottom-5 md:bottom-20 lg:bottom-30  right-1/6 md:right-10 z-40 "> */}
      <div className="absolute bottom-5 md:bottom-20 lg:bottom-30 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 2xl:right-50 z-40 w-full md:w-[fit-content]">
        <div className="flex flex-col items-center md:items-end gap-4 w-full">
          {/* Event Details Overlay */}
          <div className="text-center md:text-right mb-2 w-full">
            <h3 className="text-[28px] md:text-[35px] font-[600]">
              {currentEvent.artist}
            </h3>
            <div className="flex flex-col items-center md:items-end gap-1 mt-2 text-[16px] md:text-[18px] opacity-90">
              <div className="flex items-center md:items-center gap-2">
                {/* <Users size={16} /> */}
                <img
                  src="/icons/seat.svg"
                  alt="Seat Icon"
                  width="18"
                  height="18"
                  className="brightness-200" // Agar color white karna ho toh filter use kar sakte hain
                />
                <span>Seats from {currentEvent.price}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {/* <Calendar size={16} /> */}
                  <img
                  src="/icons/calander.svg"
                  alt="Seat Icon"
                  width="18"
                  height="18"
                  className="brightness-200" // Agar color white karna ho toh filter use kar sakte hain
                />
                  <span>{currentEvent.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  {/* <MapPin size={16} /> */}
                  <img
                  src="/icons/mapPin.svg"
                  alt="Seat Icon"
                  width="18"
                  height="18"
                  className="brightness-200" // Agar color white karna ho toh filter use kar sakte hain
                />
                  <span>{currentEvent.venue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center gap-3">
            {events.map((event, i) => (
              <button
                key={event.id}
                onClick={() => setCurrentIndex(i)}
                className={`relative w-16 h-10 md:w-24 md:h-14 rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? "border-transparent scale-110 z-10"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={event.thumbnail}
                  alt={event.artist}
                  className="w-full h-full object-cover"
                />
                {/* {currentIndex === i && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayArrow />
                </div>
              )} */}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* --- BOTTOM FIXED GLOW IMAGE --- */}
      <div className="absolute bottom-[-40px] left-0 w-full z-[60] leading-[0]">
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
