"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const AppSection = () => {
  const [currentImg, setCurrentImg] = useState(0);

  // Images for the front phone slider
  const sliderImages = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500", // Event/Concert
    "https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=500", // Crowd
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500", // Stage
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Track your bus live on the map",
    "Access QR e-tickets instantly",
    "Find your coach after the concert",
    "View all upcoming trip details",
  ];

  return (
    <section className="relative bg-[#0D0D0D] text-white pb-20 pt-35 px-16 overflow-hidden">
      <div className="absolute top-0 -right-20  w-[400px] h-[400px] bg-[#006DF269] blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center px-15">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-[45px] font-medium leading-tight">
              Your Event Travel <br /> in Your Pocket
            </h2>
            <p className="text-white text-[17px] ">
              Track your coach in real-time, access your e-tickets, find your
              pickup point, and locate your bus after the concert.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 group border-b border-white/10 group-last:border-none pb-5"
              >
                <div className="p-1 bg-[#006DF2] rounded-full">
                  <Check className="text-white w-4 h-4 fill-blue-500/10" />
                </div>
                <span className="text-gray-300  w-full ">{item}</span>
              </li>
            ))}
          </ul>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#" className="hover:opacity-80 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-12 border border-[#3D3D3D] rounded-lg"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 border border-[#3D3D3D] rounded-lg"
              />
            </a>
          </div>
        </div>

        {/* Right Content - Phone Mockups */}
        <div className="relative flex justify-center lg:justify-end items-center h-[600px]">
          {/* Blue Radial Glow Background */}
          <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#A871F454] blur-[120px] rounded-full"></div>

          {/* Front Phone (With Image Slider) */}
          <div className="relative z-20">
            <img src="/gif/app.gif" className="h-100" />

            {/* <div className="w-[260px] h-[520px] rounded-[3rem] border-[6px] border-[#D9794C] bg-black overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={sliderImages[currentImg]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[60%] object-cover"
                />
            <img src='/gif/app.gif' />

              </AnimatePresence>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full border border-white/10"></div>
            </div> */}
          </div>
          {/* Back Phone (Static Map) */}
          <div className="relative z-10 ">
            <img src="/booking-ui/app.png" className="-ml-2 h-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
