// import React from 'react';

// const StageoFooterSection = () => {
//   return (
//     <footer className="relative w-full text-white overflow-hidden">
//       <div className="absolute -top-15 -right-5 w-[115%] h-[100px]  bg-black blur-[20px] z-20 "></div>
//       {/* 1. CLEAN BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="/footer-bg.png" 
//           alt="Crowd background" 
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* 2. CONTENT CONTAINER */}
//       <div className="relative z-10 pt-30 pb-12 px-6 md:px-20">
        
//         {/* CTA SECTION */}
//         <div className="flex flex-col items-center text-center mb-24">
//           <h2 className="text-4xl md:text-[45px] font-medium mb-6 tracking-tight">
//             Don't Miss the <span className="text-[#006DF2]">Event.</span>
//           </h2>
//           <p className="max-w-xl text-gray-300 text-[14px] md:text-[14px] mb-10 ">
//             Join 900,000+ fans who've travelled with TravelMaster. <br />
//             Stress-free, door-to-door event travel across Ireland.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="bg-[#006DF2] hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
//               Find Your Bus <span className="text-xl">→</span>
//             </button>
//             <button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
//               Browse Events
//             </button>
//           </div>
//         </div>

//         {/* LINKS GRID */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-20 max-w-7xl mx-auto px-15">
//           {/* Column 1: Brand */}
//           <div className="space-y-6">
//             <img src="/travel-logo.png" alt="TravelMaster" className="h-10 w-auto" />
//             <p className="text-gray-200 text-[14px] leading-relaxed md:max-w-[250px]">
//               Ireland's favourite event travel specialist since 2016. Coach travel to concerts, festivals & sports events nationwide.
//             </p>
//           </div>

//           {/* Column 2: Events */}
//           <div>
//             <h4 className="text-[12px] uppercase font-bold text-gray-400 mb-6">Events</h4>
//             <ul className="space-y-3 text-[14px] text-gray-300">
//               <li className="hover:text-white cursor-pointer">Concerts</li>
//               <li className="hover:text-white cursor-pointer">Festivals</li>
//               <li className="hover:text-white cursor-pointer">Sports Events</li>
//               <li className="hover:text-white cursor-pointer">3Arena Events</li>
//               <li className="hover:text-white cursor-pointer">Cork Events</li>
//             </ul>
//           </div>

//           {/* Column 3: Company */}
//           <div>
//             <h4 className="text-[12px]  uppercase font-bold text-gray-400 mb-6">Company</h4>
//             <ul className="space-y-3 text-[14px] text-gray-300">
//               <li className="hover:text-white cursor-pointer">About Us</li>
//               <li className="hover:text-white cursor-pointer">Group Bookings</li>
//               <li className="hover:text-white cursor-pointer">Pickup Points</li>
//               <li className="hover:text-white cursor-pointer">Travel Info</li>
//               <li className="hover:text-white cursor-pointer">FAQ</li>
//             </ul>
//           </div>
   
//           {/* Column 4: Support */}
//           <div>
//             <h4 className="text-[12px]  uppercase font-bold text-gray-400 mb-6">Support</h4>
//             <ul className="space-y-3 text-[14px] text-gray-300">
//               <li className="hover:text-white cursor-pointer">Contact Us</li>
//               <li className="hover:text-white cursor-pointer">My Account</li>
//               <li className="hover:text-white cursor-pointer">Newsletter</li>
//               <li className="hover:text-white cursor-pointer">Affiliate Area</li>
//             </ul>
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px]  tracking-widest text-white ">
//           <p>© 2026 TravelMaster.ie — All rights reserved</p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms & Conditions</a>
//             <a href="#" className="hover:text-white">Cookies</a>
//             <a href="#" className="hover:text-white">Refunds</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default StageoFooterSection;




import React from 'react';

const StageoFooterSection = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      <div className="absolute -top-15 -right-5 w-[115%] h-[100px] bg-black blur-[20px] z-20"></div>
      
      {/* 1. CLEAN BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer-bg.png" 
          alt="Crowd background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-30 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* CTA SECTION */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 md:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-medium mb-4 sm:mb-5 md:mb-6 tracking-tight">
            Don't Miss the <span className="text-[#006DF2]">Event.</span>
          </h2>
          <p className="max-w-xl text-gray-300 text-[13px] sm:text-[14px] md:text-[14px] mb-6 sm:mb-8 md:mb-10 px-2">
            Join 900,000+ fans who've travelled with TravelMaster. <br className="hidden sm:block" />
            Stress-free, door-to-door event travel across Ireland.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="bg-[#006DF2] hover:bg-blue-600 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-all text-sm sm:text-base">
              Find Your Bus <span className="text-lg sm:text-xl">→</span>
            </button>
            <button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base">
              Browse Events
            </button>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-18 md:mb-20 max-w-7xl mx-auto px-4 sm:px-8 md:px-15">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center sm:text-left">
            <img src="/travel-logo.png" alt="TravelMaster" className="h-8 sm:h-9 md:h-10 w-auto mx-auto sm:mx-0" />
            <p className="text-gray-200 text-[13px] sm:text-[14px] leading-relaxed md:max-w-[250px] px-4 sm:px-0">
              Ireland's favourite event travel specialist since 2016. Coach travel to concerts, festivals & sports events nationwide.
            </p>
          </div>

          {/* Column 2: Events */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] sm:text-[12px] uppercase font-bold text-gray-400 mb-4 sm:mb-5 md:mb-6">Events</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[13px] sm:text-[14px] text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Concerts</li>
              <li className="hover:text-white cursor-pointer transition-colors">Festivals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sports Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">3Arena Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cork Events</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] sm:text-[12px] uppercase font-bold text-gray-400 mb-4 sm:mb-5 md:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[13px] sm:text-[14px] text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Group Bookings</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pickup Points</li>
              <li className="hover:text-white cursor-pointer transition-colors">Travel Info</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
   
          {/* Column 4: Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] sm:text-[12px] uppercase font-bold text-gray-400 mb-4 sm:mb-5 md:mb-6">Support</h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-[13px] sm:text-[14px] text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">My Account</li>
              <li className="hover:text-white cursor-pointer transition-colors">Newsletter</li>
              <li className="hover:text-white cursor-pointer transition-colors">Affiliate Area</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 sm:pt-7 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6 text-[12px] sm:text-[13px] md:text-[14px] tracking-widest text-white px-4">
          <p className="text-center sm:text-left">© 2026 TravelMaster.ie — All rights reserved</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StageoFooterSection;