// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Ticket } from 'lucide-react';

// const TABS = ['CONCERTS', 'SPORTS', 'FESTIVALS'];

// // --- YAHAN APNI IMAGES KA PATH DALAIN ---
// const CONCERT_DATA = [
//   { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item1.png' },
//   { id: 2, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
//   { id: 3, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
//   { id: 4, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
//    { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item2.png' },
//   { id: 2, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
//   { id: 3, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
//   { id: 4, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
//    { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item2.png' },
//   { id: 2, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item3.png' },
//   { id: 3, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item4.png' },
//   { id: 4, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
// ];

// const SPORTS_DATA = [
//   { id: 101, title: 'CHAMPIONS LEAGUE', venue: 'Wembley Stadium', date: 'May 2026', image: '/item2.png' },
//   { id: 102, title: 'WIMBLEDON', venue: 'London', date: 'June 2026', image: '/item3.png' },
// ];

// const FESTIVAL_DATA = [
//   { id: 201, title: 'COACHELLA', venue: 'California, USA', date: 'April 2026', image: '/item1.png' },
// ];

// const SHOW_DATA = {
//   'CONCERTS': CONCERT_DATA,
//   'SPORTS': SPORTS_DATA,
//   'FESTIVALS': FESTIVAL_DATA,
// };

// export default function EventTabs() {
//   const [activeTab, setActiveTab] = useState('CONCERTS');

//   return (
//     <section className="bg-black text-white py-12 px-6 min-h-screen font-sans">
//       <div className="max-w-7xl mx-auto px-15">
        
//         {/* Navigation Tabs */}
//         <div className="flex w-full mb-12 gap-[2px]">
//           {TABS.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 py-5 text-[11px] font-black tracking-[0.25em] transition-all ${
//                 activeTab === tab ? 'bg-[#2a2a2a] text-white' : 'bg-[#121212] text-zinc-500 hover:bg-[#181818]'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <h2 className="text-3xl font-bold mb-8 tracking-tight ">Trending Now</h2>

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
//                 className="group relative flex flex-col bg-[#161616] overflow-hidden cursor-pointer"
//               >
//                 {/* Image Section */}
//                 <div className="relative aspect-[3/4.2] overflow-hidden bg-zinc-900">
//                   <img 
//                     src={show.image} 
//                     alt={show.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     // Agar image load na ho toh ye error handle karega
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/500x700?text=No+Image'; }}
//                   />
//                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             
//                 </div>

//                 {/* Info Block */}
//               <div className="relative h-[100px] p-4 flex flex-col justify-center overflow-hidden transition-colors duration-300 group-hover:bg-[#1a1a1a] rounded-b-[10px]">
//                   <div className="transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0">
//                     <h3 className="text-[13px] font-black leading-tight tracking-wide mb-1 truncate uppercase">
//                       {show.title}
//                     </h3>
//                     <p className="text-[10px] text-zinc-300 font-medium truncate">{show.venue}</p>
//                     <p className="text-[10px] text-zinc-300">{show.date}</p>
//                   </div>

//                   {/* Hover Button */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4">
//                     <button className="w-full bg-[#006DF2] text-white py-3 text-[11px] font-medium rounded-[6px] tracking-widest  hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
//                         BOOK NOW
//                     </button>
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





'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, 
  Trophy, 
  Star, 
  Infinity, 
  ChevronRight 
} from 'lucide-react';
import { useRouter } from 'next/navigation'; // Redirect ke liye

const TABS = [
  { name: 'CONCERTS', icon: Music },
  { name: 'SPORTS', icon: Trophy },
  { name: 'FESTIVALS', icon: Star },
  { name: 'EXPLORE ALL', icon: Infinity, isLink: true } // New Tab
];

// --- DATA SECTIONS ---
const CONCERT_DATA = [
  { id: 1, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item1.png' },
  { id: 2, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
  { id: 3, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
  { id: 4, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
  { id: 5, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item2.png' },
  { id: 6, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
  { id: 7, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
  { id: 8, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
  { id: 9, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item1.png' },
  { id: 10, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
  { id: 11, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
  { id: 12, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
  { id: 13, title: 'CALVIN HARRIS', venue: 'Malahide Castle, Dublin', date: 'July 2026', tag: 'LAST SEATS', image: '/item2.png' },
  { id: 14, title: 'KESHA', venue: 'Malahide Castle, Dublin', date: 'July 2026', image: '/item2.png' },
  { id: 15, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
  { id: 16, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
  { id: 17, title: 'BON JOVI', venue: 'Arena, London', date: 'August 2026', image: '/item3.png' },
  { id: 18, title: 'CMAT', venue: 'Olympia Theatre', date: 'Sept 2026', image: '/item1.png' },
];

const SPORTS_DATA = [
  { id: 101, title: 'CHAMPIONS LEAGUE', venue: 'Wembley Stadium', date: 'May 2026', image: '/item2.png' },
  { id: 102, title: 'WIMBLEDON', venue: 'London', date: 'June 2026', image: '/item3.png' },
];

const FESTIVAL_DATA = [
  { id: 201, title: 'COACHELLA', venue: 'California, USA', date: 'April 2026', image: '/item1.png' },
];

const SHOW_DATA = {
  'CONCERTS': CONCERT_DATA,
  'SPORTS': SPORTS_DATA,
  'FESTIVALS': FESTIVAL_DATA,
};

export default function EventTabs() {
  const [activeTab, setActiveTab] = useState('CONCERTS');
  const router = useRouter();

  const handleTabClick = (tab) => {
    if (tab.isLink) {
      router.push('/explore'); // Aap yahan apna path change kar sakte hain
    } else {
      setActiveTab(tab.name);
    }
  };

  return (
    <section className="bg-black text-white py-12 px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-15">
        
        {/* Navigation Tabs */}
        <div className="flex w-full mb-12 gap-[2px]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={`flex-1 py-3 text-[18px] text-[#FFFFFF] transition-all flex items-center justify-center gap-5 cursor-pointer ${
                  activeTab === tab.name && !tab.isLink
                    ? 'bg-[#333333] text-white' 
                    : 'bg-[#0D0D0D]  hover:bg-[#181818]'
                }`}
              >
                <Icon size={25} strokeWidth={2.5} />
                {tab.name}
              </button>
            );
          })}
        </div>

        <h2 className="text-[24px] font-medium mb-8 tracking-tight">Concerts </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                <div className="relative aspect-[3/4.2] overflow-hidden bg-zinc-900">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/500x700?text=No+Image'; }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Block */}
                <div className="relative h-[100px] p-4 flex flex-col justify-center overflow-hidden transition-colors duration-300 group-hover:bg-[#1a1a1a] rounded-b-[10px]">
                  <div className="transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0">
                    <h3 className="text-[14px] font-bold leading-tight tracking-wide mb-1 truncate uppercase">
                      {show.title}
                    </h3>
                    <p className="text-[12px] text-zinc-300  truncate">{show.venue}</p>
                    <p className="text-[10px] text-zinc-300">{show.date}</p>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4">
                    <button className="w-full bg-[#006DF2] text-white py-3 text-[11px] font-medium rounded-[6px] tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}