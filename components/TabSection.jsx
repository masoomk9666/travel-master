// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Music,
//   Trophy,
//   Star,
//   Infinity,
//   ChevronRight
// } from 'lucide-react';
// import { useRouter } from 'next/navigation'; // Redirect ke liye
// import Link from 'next/link';

// const TABS = [
//   { name: 'CONCERTS', icon: Music },
//   { name: 'SPORTS', icon: Trophy },
//   { name: 'FESTIVALS', icon: Star },
//   { name: 'EXPLORE ALL', icon: Infinity, isLink: true } // New Tab
// ];

// // --- DATA SECTIONS ---
// const CONCERT_DATA = [
//   { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/calvin-Harris.jpg' },
//   { id: 2, title: 'Metalica', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/metalica.jpg' },
//   { id: 3, title: 'Olivia Dean', venue: 'Arena, London', date: 'August 2026', image: '/Olivia-Dean.jpg' },
//   { id: 4, title: 'Weeknd', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/Weeknd.jpg' },
//   { id: 5, title: 'Zach Bryan', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/Zach-Bryan.jpg' },
//   { id: 6, title: 'Luke Combs', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/Luke-Combs.jpg' },
//    { id: 7, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/calvin-Harris.jpg' },
//   { id: 8, title: 'Metalica', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/metalica.jpg' },
//   { id: 9, title: 'Olivia Dean', venue: 'Arena, London', date: 'August 2026', image: '/Olivia-Dean.jpg' },
//   { id: 10, title: 'Weeknd', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/Weeknd.jpg' },
//   { id: 11, title: 'Zach Bryan', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/Zach-Bryan.jpg' },
//   { id: 12, title: 'Luke Combs', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/Luke-Combs.jpg' },
// ];

// const SPORTS_DATA = [
//    { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/calvin-Harris.jpg' },
//   { id: 2, title: 'Metalica', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/metalica.jpg' },
// ];

// const FESTIVAL_DATA = [
//   { id: 8, title: 'Metalica', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/metalica.jpg' },
//   { id: 9, title: 'Olivia Dean', venue: 'Arena, London', date: 'August 2026', image: '/Olivia-Dean.jpg' },
// ];

// const SHOW_DATA = {
//   'CONCERTS': CONCERT_DATA,
//   'SPORTS': SPORTS_DATA,
//   'FESTIVALS': FESTIVAL_DATA,
// };

// export default function EventTabs() {
//   const [activeTab, setActiveTab] = useState('CONCERTS');
//   const router = useRouter();

//   const handleTabClick = (tab) => {
//     if (tab.isLink) {
//       router.push('/explore'); // Aap yahan apna path change kar sakte hain
//     } else {
//       setActiveTab(tab.name);
//     }
//   };

//   return (
//     <section className="bg-black text-white py-12 px-6 min-h-screen font-sans " id='concerts'>
//       <div className="max-w-7xl mx-auto px-15">

//         {/* Navigation Tabs */}
//         <div className="flex w-full mb-12 gap-[2px]" >
//           {TABS.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.name}
//                 onClick={() => handleTabClick(tab)}
//                 className={`flex-1 py-3 text-[18px] text-[#FFFFFF] transition-all flex items-center justify-center gap-5 cursor-pointer ${
//                   activeTab === tab.name && !tab.isLink
//                     ? 'bg-[#333333] text-white'
//                     : 'bg-[#0D0D0D]  hover:bg-[#181818]'
//                 }`}
//               >
//                 <Icon size={25} strokeWidth={2.5} />
//                 {tab.name}
//               </button>
//             );
//           })}
//         </div>

//         <h2 className="text-[32px] font-bold mb-10 tracking-tight" >Concerts </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           <AnimatePresence mode="popLayout">
//             {SHOW_DATA[activeTab]?.map((show) => (
//               <motion.div
//                 layout
//                 key={show.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.2 }}
//                 className="group relative flex flex-col bg-[#161616] overflow-hidden cursor-pointer rounded-lg"
//               >
//                 {/* Image Section */}
//                 <div className="relative aspect-[3/4.2] overflow-hidden bg-zinc-900">
//                   <img
//                     src={show.image}
//                     alt={show.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/500x700?text=No+Image'; }}
//                   />
//                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 {/* Info Block */}
//                 <div className="relative h-[100px] p-4 flex flex-col justify-center overflow-hidden transition-colors duration-300 group-hover:bg-[#1a1a1a] rounded-b-[10px] ">
//                   <div className="transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0">
//                     <h3 className="text-[14px] font-bold leading-tight tracking-wide mb-1 truncate uppercase">
//                       {show.title}
//                     </h3>
//                     <p className="text-[12px] text-zinc-300  truncate">{show.venue}</p>
//                     <p className="text-[10px] text-zinc-300">{show.date}</p>
//                   </div>

//                   {/* Hover Button */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4">
//                   <Link
//                   href="/booking"
//                   >
//                     <button className="w-full bg-[#006DF2] text-white py-3 px-5 text-[11px] font-medium rounded-[6px] tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 cursor-pointer">
//                       BOOK NOW
//                     </button>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Trophy,
  Star,
  Infinity,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TABS = [
  { name: "CONCERTS", icon: Music },
  { name: "SPORTS", icon: Trophy },
  { name: "FESTIVALS", icon: Star },
  { name: "EXPLORE ALL", icon: Infinity, isLink: true },
];

// --- DATA SECTIONS ---
const CONCERT_DATA = [
  {
    id: 1,
    title: "CALVIN HARRIS",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    tag: "LAST SEATS",
    image: "/calvin-Harris.jpg",
  },
  {
    id: 2,
    title: "Metalica",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/metalica.jpg",
  },
  {
    id: 3,
    title: "Olivia Dean",
    venue: "Arena, London",
    date: "August 2026",
    image: "/Olivia-Dean.jpg",
  },
  {
    id: 4,
    title: "Weeknd",
    venue: "Olympia Theatre",
    date: "Sept 2026",
    image: "/Weeknd.jpg",
  },
  {
    id: 5,
    title: "Zach Bryan",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    tag: "LAST SEATS",
    image: "/Zach-Bryan.jpg",
  },
  {
    id: 6,
    title: "Luke Combs",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/Luke-Combs.jpg",
  },
  {
    id: 7,
    title: "CALVIN HARRIS",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    tag: "LAST SEATS",
    image: "/calvin-Harris.jpg",
  },
  {
    id: 8,
    title: "Metalica",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/metalica.jpg",
  },
  {
    id: 9,
    title: "Olivia Dean",
    venue: "Arena, London",
    date: "August 2026",
    image: "/Olivia-Dean.jpg",
  },
  {
    id: 10,
    title: "Weeknd",
    venue: "Olympia Theatre",
    date: "Sept 2026",
    image: "/Weeknd.jpg",
  },
  {
    id: 11,
    title: "Zach Bryan",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    tag: "LAST SEATS",
    image: "/Zach-Bryan.jpg",
  },
  {
    id: 12,
    title: "Luke Combs",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/Luke-Combs.jpg",
  },
];

const SPORTS_DATA = [
  {
    id: 1,
    title: "CALVIN HARRIS",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/calvin-Harris.jpg",
  },
  {
    id: 2,
    title: "Metalica",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/metalica.jpg",
  },
];

const FESTIVAL_DATA = [
  {
    id: 8,
    title: "Metalica",
    venue: "Malahide Castle, Dublin",
    date: "July 2026",
    image: "/metalica.jpg",
  },
  {
    id: 9,
    title: "Olivia Dean",
    venue: "Arena, London",
    date: "August 2026",
    image: "/Olivia-Dean.jpg",
  },
];

const SHOW_DATA = {
  CONCERTS: CONCERT_DATA,
  SPORTS: SPORTS_DATA,
  FESTIVALS: FESTIVAL_DATA,
};

export default function EventTabs() {
  const [activeTab, setActiveTab] = useState("CONCERTS");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabsContainerRef = useRef(null);
  const router = useRouter();

  const handleTabClick = (tab) => {
    if (tab.isLink) {
      router.push("/explore");
    } else {
      setActiveTab(tab.name);
    }
  };

  // Handle scroll arrows visibility
  const checkScrollButtons = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
      window.addEventListener("resize", checkScrollButtons);

      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, []);

  // Update active tab title
  const getActiveTitle = () => {
    switch (activeTab) {
      case "CONCERTS":
        return "Concerts";
      case "SPORTS":
        return "Sports";
      case "FESTIVALS":
        return "Festivals";
      default:
        return "Events";
    }
  };

  return (
    <section
      className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6  font-sans"
      id="concerts"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs - Horizontal Scroll */}
        <div className="relative mb-4 sm:mb-6">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scrollTabs("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black rounded-full p-2 backdrop-blur-sm transition-all md:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Tabs Container */}
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-[2px] snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab)}
                  className={`w-full py-3 px-4 text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF] transition-all flex items-center justify-center gap-2 sm:gap-5 cursor-pointer snap-start rounded-[4px] ${
                    activeTab === tab.name && !tab.isLink
                      ? "bg-[#333333] text-white"
                      : "bg-[#0D0D0D] hover:bg-[#181818]"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2.5}
                    className="sm:w-[22px] sm:h-[22px] md:w-[25px] md:h-[25px]"
                  />
                  <span className="whitespace-nowrap text-[12px] sm:text-[14px] md:text-[16px]">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scrollTabs("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black rounded-full p-2 backdrop-blur-sm transition-all md:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Section Title */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-6 sm:mb-8 md:mb-10 tracking-tight px-2">
          {getActiveTitle()}
        </h2>

        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 px-2">
          <AnimatePresence mode="popLayout">
            {SHOW_DATA[activeTab]?.map((show) => (
              <motion.div
                layout
                key={show.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col bg-[#161616] overflow-hidden cursor-pointer rounded-lg"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/3.5] overflow-hidden bg-zinc-900">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/500x700?text=No+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag Badge */}
                  {show.tag && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] sm:text-[10px] font-bold px-2 py-1 rounded">
                      {show.tag}
                    </div>
                  )}
                </div>

                {/* Info Block */}
                <div className="relative h-[90px] sm:h-[100px] p-3 sm:p-4 flex flex-col justify-center overflow-hidden transition-colors duration-300 group-hover:bg-[#1a1a1a] rounded-b-[10px]">
                  <div className="transition-all duration-300 transform group-hover:-translate-y-8 sm:group-hover:-translate-y-10 group-hover:opacity-0">
                    <h3 className="text-[12px] sm:text-[14px] font-bold leading-tight tracking-wide mb-1 truncate uppercase">
                      {show.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Calendar width={12} className="text-[#E335EC]" />
                      <p className="text-[10px] sm:text-[12px] text-zinc-300 truncate">
                        {" "}
                        {show.venue}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin width={12} className="text-[#E335EC]" />
                      <p className="text-[8px] sm:text-[10px] text-zinc-300">
                        {show.date}
                      </p>
                    </div>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-8 sm:translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-3 sm:px-4">
                    <Link href="/booking" className="w-full">
                      <button className="w-full bg-[#006DF2] text-white py-2.5 sm:py-3 px-3 sm:px-5 text-[10px] sm:text-[11px] font-medium rounded-[6px] tracking-widest  transition-colors flex items-center justify-center gap-2 cursor-pointer flex items-center gap-2">
                        <img
                          src="/icons/seat.svg"
                          alt="Seat Icon"
                          width="12"
                          height="12"
                          className="brightness-200" // Agar color white karna ho toh filter use kar sakte hain
                        />
                        <span>Book Now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
