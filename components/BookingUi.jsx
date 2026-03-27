// "use client";
// import React, { useState, useMemo } from "react";
// import {
//   Check,
//   Calendar,
//   ArrowRight,
//   Minus,
//   Plus,
// } from "lucide-react";
// import IrelandMap from "./IrelandMap";

// const STEPS = ["Date", "County", "Pick up", "Seats"];

// const BookingUi = () => {
//   // Form States
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedDate, setSelectedDate] = useState({
//     id: 1,
//     date: "12th March 2026",
//     time: "7 : 00 pm",
//   });
//   const [selectedProvince, setSelectedProvince] = useState(null);
//   const [selectedCounty, setSelectedCounty] = useState(null);
//   const [selectedPickup, setSelectedPickup] = useState(null);
//   const [seats, setSeats] = useState(1);
//   const [activeProvince, setActiveProvince] = useState(null);
//   const pricePerSeat = 35;

//   // Data
//   const provinces = {
//     connacht: ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"],
//     munster: ["Cork", "Clare", "Kerry", "Limerick", "Tipperary", "Waterford"],
//     leinster: ["Dublin", "Kildare", "Meath", "Wicklow", "Louth", "Carlow", "Laois", "Longford", "Westmeath", "Wexford", "Kilkenny", "Offaly"],
//     ulster: ["Donegal", "Cavan", "Monaghan", "Antrim", "Armagh", "Derry", "Down", "Fermanagh", "Tyrone"],
//   };

//   const pickupPoints = [
//     {
//       id: 1,
//       name: "Dublin City Center",
//       address: "O Connell Street",
//       time: "7 : 00 pm",
//     },
//     {
//       id: 2,
//       name: "Dun Laoghaire",
//       address: "Harbour Road",
//       time: "7 : 00 pm",
//     },
//     { id: 3, name: "Greystones", address: "Main Street", time: "7 : 00 pm" },
//   ];

//   const features = [
//     "Return fare — both ways included",
//     "50+ pickup points nationwide",
//     "Instant e-ticket to your inbox",
//     "24-hr support on event day",
//     "No toilets on board",
//     "No parking at pickup points",
//   ];

//   const totalAmount = useMemo(() => seats * pricePerSeat, [seats]);

//   const handleNext = () => {
//     if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
//   };

//   const handleTabClick = (index) => {
//     setCurrentStep(index);
//   };

//   const handleProvinceClick = (province) => {
//     setSelectedProvince(province.id);
//     setActiveProvince(province.id);
//     setSelectedCounty(null);
//   };

//   const getProvinceName = (id) => {
//     const names = {
//       connacht: "Connacht",
//       munster: "Munster",
//       leinster: "Leinster",
//       ulster: "Ulster",
//     };
//     return names[id] || "";
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white p-6 !pt-50 !pb-30 md:p-16 font-sans selection:bg-blue-500">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
//         {/* LEFT SIDE - EVENT INFO */}
//         <div className="lg:col-span-6 space-y-8">
//           <div>
//             <h1 className="text-[62px] font-bold tracking-tighter">
//               Calvin Harris
//             </h1>
//             <p className="text-white text-[17px]">
//               Malahide Castle, Dublin • {selectedDate.date}
//             </p>
//           </div>

//           <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
//             {features.map((item, i) => (
//               <li
//                 key={i}
//                 className="flex items-center gap-3 text-[#9996A0] text-[17px]"
//               >
//                 <div className="p-1 bg-blue-500 rounded-full">
//                   <Check className="w-3 h-3 text-white fill-blue-500/10" />
//                 </div>
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* DYNAMIC SUMMARY */}
//           <div className="grid grid-cols-4 bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
//             <div className="flex flex-col items-center py-3 border-r border-white/5">
//               <span className="text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
//                 County
//               </span>
//               <span className="font-medium text-[13px]">
//                 {selectedCounty || "-"}
//               </span>
//             </div>
//             <div className="flex flex-col items-center py-3 border-r border-white/5">
//               <span className="text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
//                 Pickup
//               </span>
//               <span className="font-medium text-[13px]">
//                 {selectedPickup?.name || "-"}
//               </span>
//             </div>
//             <div className="flex flex-col items-center py-3 border-r border-white/5">
//               <span className="text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
//                 Seats
//               </span>
//               <span className="font-medium text-[13px]">{seats} Seat</span>
//             </div>
//             <div className="flex flex-col items-center py-3 bg-white text-black">
//               <span className="text-[14px] uppercase tracking-widest font-[500] mb-1">
//                 Pay
//               </span>
//               <span className="font-medium text-[13px]">${totalAmount}</span>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-xl font-bold border-b border-white/10 pb-2">
//               Description:
//             </h3>
//             <p className="text-[#9996A0] leading-[38px] text-[18px]">
//               Bus to Calvin Harris Malahide Castle Dublin 2026 – Nationwide
//               Return – Sun, 28th Jun 2026. With TravelMaster's Bus to Calvin
//               Harris Malahide Castle Dublin, you can purchase tickets for a seat
//               on the dedicated concert bus from over 50 pick up points.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE - FORM */}
//         <div className="lg:col-span-6">
//           <div className="bg-[radial-gradient(circle_at_bottom_right,#006df2a1,transparent_50%)] bg-[#0D0D0D] via-[#0D0D0D] to-[#006df2a1] rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden">
//             {/* INTERACTIVE TABS */}
//             <div className="grid grid-cols-4 gap-2 mb-10 bg-white/5 rounded-xl">
//               {STEPS.map((step, idx) => (
//                 <button
//                   key={step}
//                   onClick={() => handleTabClick(idx)}
//                   className={`py-2 text-[16px] rounded-lg transition-all cursor-pointer ${currentStep === idx ? "bg-[#333] text-white shadow-lg" : "text-gray-500 hover:text-gray-300"}`}
//                 >
//                   {step}
//                 </button>
//               ))}
//             </div>

//             {/* STEP 0: DATE */}
//             {currentStep === 0 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//                 <div className="flex justify-between items-center mb-3">
//                   <h2 className="text-[24px]">Available Dates</h2>
//                   <p className="text-[14px]">6 available</p>
//                 </div>

//                 <div className="space-y-4">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       onClick={() =>
//                         setSelectedDate({
//                           id: i,
//                           date: `${10 + i * 4}th March 2026`,
//                           time: "7:00 pm",
//                         })
//                       }
//                       className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${selectedDate.id === i ? "bg-[#1D1D1D] border-blue-500" : "bg-[#1D1D1D] border-transparent"}`}
//                     >
//                       <div className="flex items-start gap-4">
//                         <Calendar className="w-7 h-7 text-white mt-1" />
//                         <div className="space-y-2">
//                           <p className="text-[18px]">{10 + i * 4}th March 2026</p>
//                           <p className="text-[16px] text-[#FFFFFF99]">
//                             8:00 pm
//                           </p>
//                         </div>
//                       </div>
//                       <div
//                         className={`w-5 h-5 rounded-full border-2 ${selectedDate.id === i ? "bg-blue-500 border-blue-500" : "border-gray-600"}`}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* STEP 1: COUNTY */}
//             {currentStep === 1 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//                 <h2 className="text-[24px] mb-1">
//                   Where are you travelling from?
//                 </h2>
//                 <p className="text-gray-500 text-[18px] mb-6">
//                   Tap your province on the map & choose county from the list.
//                 </p>
//                 <div className="relative w-full max-w-[200px] mx-auto mb-6">
//                   <IrelandMap
//                     width="100%"
//                     activeProvince={activeProvince}
//                     onClick={handleProvinceClick}
//                     className="max-w-sm"
//                   />
//                 </div>

//                 {selectedProvince && (
//                   <>
//                     <h3 className="text-[24px] mb-4">
//                       {getProvinceName(selectedProvince)} Counties
//                     </h3>
//                     <div className="flex flex-wrap gap-2">
//                       {provinces[selectedProvince]?.map((c) => (
//                         <button
//                           key={c}
//                           onClick={() => setSelectedCounty(c)}
//                           className={`px-6 py-2 rounded-full text-[16px] transition-all cursor-pointer ${selectedCounty === c ? "bg-[#505050] text-white" : "bg-[#1D1D1D] text-[#9C9C9C] hover:bg-white/10"}`}
//                         >
//                           {c}
//                         </button>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}

//             {/* STEP 2: PICKUP */}
//             {currentStep === 2 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//                 <h2 className="text-[24px] mb-1">Choose your pickup point</h2>
//                 <p className="text-gray-500 text-[18px] mb-6">
//                   Select where we should pick you up.
//                 </p>
//                 <div className="flex justify-between items-center mb-3">
//                   <h2 className="text-[24px]">Available Pickup Points</h2>
//                   <p className="text-[14px]">3 available</p>
//                 </div>
//                 <div className="space-y-4">
//                   {pickupPoints.map((p) => (
//                     <div
//                       key={p.id}
//                       onClick={() => setSelectedPickup(p)}
//                       className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${selectedPickup?.id === p.id ? "bg-blue-600/10 border-blue-500" : "bg-[#151515] border-transparent"}`}
//                     >
//                       <div className="flex items-start gap-4">
//                         <div
//                           className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-1 ${selectedPickup?.id === p.id ? "border-blue-500" : "border-gray-700"}`}
//                         >
//                           {selectedPickup?.id === p.id && (
//                             <div className="w-5 h-5 bg-blue-500 rounded-full" />
//                           )}
//                         </div>
//                         <div>
//                           <p className="text-[18px] text-gray-100 mb-2">{p.name}</p>
//                           <p className="text-[16px] text-[#D0D0D0]">
//                             {p.address}
//                           </p>
//                         </div>
//                       </div>
//                       <span className="text-[16px] text-gray-400">
//                         {p.time}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* STEP 3: SEATS */}
//             {currentStep === 3 && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
//                 <h2 className="text-[24px] mb-8">How many Seats</h2>
//                 <div className="bg-[#151515] p-8 rounded-2xl flex items-center justify-between mb-10">
//                   <span className="text-[22px] text-gray-300">
//                     Number of seats
//                   </span>
//                   <div className="flex items-center gap-6">
//                     <button
//                       onClick={() => setSeats(Math.max(1, seats - 1))}
//                       className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 cursor-pointer"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="text-[24px] font-bold font-black">
//                       {seats.toString().padStart(2, "0")}
//                     </span>
//                     <button
//                       onClick={() => setSeats(seats + 1)}
//                       className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 cursor-pointer"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ACTION BUTTON */}
//             <button
//               onClick={handleNext}
//               className="relative w-full bg-[#006DF2] hover:bg-[#0060d0] text-[18px] text-white font-bold py-4 rounded-2xl mt-8 flex items-center justify-center transition-all active:scale-95 shadow-[0_10px_20px_rgba(0,112,243,0.3)] cursor-pointer"
//             >
//               <span>
//                 {currentStep === 0 && "Choose your county"}
//                 {currentStep === 1 && "Choose Pickup Point"}
//                 {currentStep === 2 && "Select Seat"}
//                 {currentStep === 3 && "Complete Booking"}
//               </span>
//               <ArrowRight className="w-5 h-5 absolute right-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 ">
//         <ul className="text-[#9996A0] leading-[38px] text-[18px] space-y-0">
//           <li>
//             Choose from: Cork, Kerry, Waterford, Tipperary, Limerick, Kilkenny,
//             Carlow, Laois, Wexford, Wicklow, Galway, Sligo, Leitrim, Longford,
//             Mayo, Roscommon, Westmeath, and Meath.
//           </li>
//           <li>
//             This is a same-day return Bus to Calvin Harris Malahide Castle
//             Dublin with TravelMaster. Your bus will drop you at the coach
//             parking for the Malahide Castle Dublin – just a short walk to the
//             entry doors of the arena and will collect you at the same place
//             right after the event.
//           </li>
//           <li>
//             This is a RETURN bus service (Price includes BOTH WAYS) We do not
//             offer one-way seats.
//           </li>
//           <li>
//             You can use this Bus to Calvin Harris Malahide Castle Dublin 2026 to
//             travel one way – just add a note when booking to make the driver
//             aware not to expect you.
//           </li>
//           <li>
//             We provide 24 hour customer service on the day of the event. If you
//             have any problems locating your bus after the event, simply contact
//             us on 021-2347268.
//           </li>
//           <li>
//             For common questions and queries, check our FAQ here and Travel Info
//             here or if you still have questions contact us now on our Contact us
//             Page Here
//           </li>
//         </ul>
//       </div>

//       {/* BOTTOM GLOW */}
//       <div className="absolute -bottom-15 left-0 w-full z-2">
//         <img
//           src="/glow.png"
//           alt="Bottom Glow"
//           className="w-full h-auto object-bottom pointer-events-none"
//           style={{ display: "block" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BookingUi;





"use client";
import React, { useState, useMemo } from "react";
import {
  Check,
  Calendar,
  ArrowRight,
  Minus,
  Plus,
} from "lucide-react";
import IrelandMap from "./IrelandMap";

const STEPS = ["Date", "County", "Pick up", "Seats"];

const BookingUi = () => {
  // Form States
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState({
    id: 1,
    date: "12th March 2026",
    time: "7 : 00 pm",
  });
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [seats, setSeats] = useState(1);
  const [activeProvince, setActiveProvince] = useState(null);
  const pricePerSeat = 35;

  // Data
  const provinces = {
    connacht: ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"],
    munster: ["Cork", "Clare", "Kerry", "Limerick", "Tipperary", "Waterford"],
    leinster: ["Dublin", "Kildare", "Meath", "Wicklow", "Louth", "Carlow", "Laois", "Longford", "Westmeath", "Wexford", "Kilkenny", "Offaly"],
    ulster: ["Donegal", "Cavan", "Monaghan", "Antrim", "Armagh", "Derry", "Down", "Fermanagh", "Tyrone"],
  };

  const pickupPoints = [
    {
      id: 1,
      name: "Dublin City Center",
      address: "O Connell Street",
      time: "7 : 00 pm",
    },
    {
      id: 2,
      name: "Dun Laoghaire",
      address: "Harbour Road",
      time: "7 : 00 pm",
    },
    { id: 3, name: "Greystones", address: "Main Street", time: "7 : 00 pm" },
  ];

  const features = [
    "Return fare — both ways included",
    "50+ pickup points nationwide",
    "Instant e-ticket to your inbox",
    "24-hr support on event day",
    "No toilets on board",
    "No parking at pickup points",
  ];

  const totalAmount = useMemo(() => seats * pricePerSeat, [seats]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleTabClick = (index) => {
    setCurrentStep(index);
  };

  const handleProvinceClick = (province) => {
    setSelectedProvince(province.id);
    setActiveProvince(province.id);
    setSelectedCounty(null);
  };

  const getProvinceName = (id) => {
    const names = {
      connacht: "Connacht",
      munster: "Munster",
      leinster: "Leinster",
      ulster: "Ulster",
    };
    return names[id] || "";
  };

  return (
    <div className="relative min-h-screen bg-black text-white p-4 sm:p-6 !pt-32 sm:!pt-40 md:!pt-50 !pb-20 sm:!pb-24 md:!pb-30 font-sans selection:bg-blue-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
        
        {/* LEFT SIDE - EVENT INFO */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 md:space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold tracking-tighter">
              Calvin Harris
            </h1>
            <p className="text-white text-[15px] sm:text-[16px] md:text-[17px]">
              Malahide Castle, Dublin • {selectedDate.date}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:gap-4">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[#9996A0] text-[15px] sm:text-[16px] md:text-[17px]"
              >
                <div className="p-1 bg-blue-500 rounded-full flex-shrink-0">
                  <Check className="w-3 h-3 text-white fill-blue-500/10" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          {/* DYNAMIC SUMMARY */}
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <div className="flex flex-col items-center py-2 sm:py-3 border-r border-white/5">
              <span className="text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
                County
              </span>
              <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px]">
                {selectedCounty || "-"}
              </span>
            </div>
            <div className="flex flex-col items-center py-2 sm:py-3 border-r border-white/5">
              <span className="text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
                Pickup
              </span>
              <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px]">
                {selectedPickup?.name || "-"}
              </span>
            </div>
            <div className="flex flex-col items-center py-2 sm:py-3 border-r border-white/5">
              <span className="text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-widest text-[#D0D0D0] font-[500] mb-1">
                Seats
              </span>
              <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px]">
                {seats} Seat
              </span>
            </div>
            <div className="flex flex-col items-center py-2 sm:py-3 bg-white text-black">
              <span className="text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-widest font-[500] mb-1">
                Pay
              </span>
              <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px]">
                ${totalAmount}
              </span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold border-b border-white/10 pb-2">
              Description:
            </h3>
            <p className="text-[#9996A0] leading-[28px] sm:leading-[32px] md:leading-[38px] text-[15px] sm:text-[16px] md:text-[18px]">
              Bus to Calvin Harris Malahide Castle Dublin 2026 – Nationwide
              Return – Sun, 28th Jun 2026. With TravelMaster's Bus to Calvin
              Harris Malahide Castle Dublin, you can purchase tickets for a seat
              on the dedicated concert bus from over 50 pick up points.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="lg:col-span-6">
          <div className="bg-[radial-gradient(circle_at_bottom_right,#006df2a1,transparent_50%)] bg-[#0D0D0D] via-[#0D0D0D] to-[#006df2a1] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden">
            
            {/* INTERACTIVE TABS */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-6 sm:mb-8 md:mb-10 bg-white/5 rounded-xl">
              {STEPS.map((step, idx) => (
                <button
                  key={step}
                  onClick={() => handleTabClick(idx)}
                  className={`py-1.5 sm:py-2 text-[12px] sm:text-[14px] md:text-[16px] rounded-lg transition-all cursor-pointer ${
                    currentStep === idx 
                      ? "bg-[#333] text-white shadow-lg" 
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>

            {/* STEP 0: DATE */}
            {currentStep === 0 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px]">Available Dates</h2>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px]">6 available</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      onClick={() =>
                        setSelectedDate({
                          id: i,
                          date: `${10 + i * 4}th March 2026`,
                          time: "7:00 pm",
                        })
                      }
                      className={`p-3 sm:p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedDate.id === i 
                          ? "bg-[#1D1D1D] border-blue-500" 
                          : "bg-[#1D1D1D] border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white mt-1" />
                        <div className="space-y-1 sm:space-y-2">
                          <p className="text-[15px] sm:text-[16px] md:text-[18px]">
                            {10 + i * 4}th March 2026
                          </p>
                          <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#FFFFFF99]">
                            8:00 pm
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${
                          selectedDate.id === i 
                            ? "bg-blue-500 border-blue-500" 
                            : "border-gray-600"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: COUNTY */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] mb-1">
                  Where are you travelling from?
                </h2>
                <p className="text-gray-500 text-[15px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-5 md:mb-6">
                  Tap your province on the map & choose county from the list.
                </p>
                <div className="relative w-full max-w-[180px] sm:max-w-[200px] mx-auto mb-4 sm:mb-5 md:mb-6">
                  <IrelandMap
                    width="100%"
                    activeProvince={activeProvince}
                    onClick={handleProvinceClick}
                    className="max-w-sm"
                  />
                </div>

                {selectedProvince && (
                  <>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] mb-3 sm:mb-4">
                      {getProvinceName(selectedProvince)} Counties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {provinces[selectedProvince]?.map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedCounty(c)}
                          className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14px] md:text-[16px] transition-all cursor-pointer ${
                            selectedCounty === c 
                              ? "bg-[#505050] text-white" 
                              : "bg-[#1D1D1D] text-[#9C9C9C] hover:bg-white/10"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* STEP 2: PICKUP */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] mb-1">Choose your pickup point</h2>
                <p className="text-gray-500 text-[15px] sm:text-[16px] md:text-[18px] mb-4 sm:mb-5 md:mb-6">
                  Select where we should pick you up.
                </p>
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px]">Available Pickup Points</h2>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px]">3 available</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {pickupPoints.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPickup(p)}
                      className={`p-3 sm:p-4 md:p-5 rounded-2xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                        selectedPickup?.id === p.id 
                          ? "bg-blue-600/10 border-blue-500" 
                          : "bg-[#151515] border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center mt-1 ${
                            selectedPickup?.id === p.id 
                              ? "border-blue-500" 
                              : "border-gray-700"
                          }`}
                        >
                          {selectedPickup?.id === p.id && (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full" />
                          )}
                        </div>
                        <div>
                          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-100 mb-1 sm:mb-2">
                            {p.name}
                          </p>
                          <p className="text-[13px] sm:text-[14px] md:text-[16px] text-[#D0D0D0]">
                            {p.address}
                          </p>
                        </div>
                      </div>
                      <span className="text-[13px] sm:text-[14px] md:text-[16px] text-gray-400 sm:ml-auto">
                        {p.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: SEATS */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] mb-6 sm:mb-7 md:mb-8">How many Seats</h2>
                <div className="bg-[#151515] p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <span className="text-[18px] sm:text-[20px] md:text-[22px] text-gray-300">
                    Number of seats
                  </span>
                  <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                    <button
                      onClick={() => setSeats(Math.max(1, seats - 1))}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 cursor-pointer"
                    >
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <span className="text-[20px] sm:text-[22px] md:text-[24px] font-bold font-black">
                      {seats.toString().padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => setSeats(seats + 1)}
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 cursor-pointer"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ACTION BUTTON */}
            <button
              onClick={handleNext}
              className="relative w-full bg-[#006DF2] hover:bg-[#0060d0] text-[15px] sm:text-[16px] md:text-[18px] text-white font-bold py-3 sm:py-3.5 md:py-4 rounded-2xl mt-6 sm:mt-7 md:mt-8 flex items-center justify-center transition-all active:scale-95 shadow-[0_10px_20px_rgba(0,112,243,0.3)] cursor-pointer"
            >
              <span>
                {currentStep === 0 && "Choose your county"}
                {currentStep === 1 && "Choose Pickup Point"}
                {currentStep === 2 && "Select Seat"}
                {currentStep === 3 && "Complete Booking"}
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 absolute right-3 sm:right-4 md:right-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* INFO SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12">
        <ul className="text-[#9996A0] leading-[26px] sm:leading-[30px] md:leading-[38px] text-[14px] sm:text-[15px] md:text-[18px] space-y-2 sm:space-y-3 md:space-y-0 ">
          <li>
            Choose from: Cork, Kerry, Waterford, Tipperary, Limerick, Kilkenny,
            Carlow, Laois, Wexford, Wicklow, Galway, Sligo, Leitrim, Longford,
            Mayo, Roscommon, Westmeath, and Meath.
          </li>
          <li>
            This is a same-day return Bus to Calvin Harris Malahide Castle
            Dublin with TravelMaster. Your bus will drop you at the coach
            parking for the Malahide Castle Dublin – just a short walk to the
            entry doors of the arena and will collect you at the same place
            right after the event.
          </li>
          <li>
            This is a RETURN bus service (Price includes BOTH WAYS) We do not
            offer one-way seats.
          </li>
          <li>
            You can use this Bus to Calvin Harris Malahide Castle Dublin 2026 to
            travel one way – just add a note when booking to make the driver
            aware not to expect you.
          </li>
          <li>
            We provide 24 hour customer service on the day of the event. If you
            have any problems locating your bus after the event, simply contact
            us on 021-2347268.
          </li>
          <li>
            For common questions and queries, check our FAQ here and Travel Info
            here or if you still have questions contact us now on our Contact us
            Page Here
          </li>
        </ul>
      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-7 md:bottom-5 md:-bottom-15 left-0 w-full z-2 pointer-events-none">
        <img
          src="/glow.png"
          alt="Bottom Glow"
          className="w-full h-auto object-bottom"
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
};

export default BookingUi;