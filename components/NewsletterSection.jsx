'use client';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const NewsletterSection = () => {
  const features = [
    "Track your bus live on the map",
    "Access QR e-tickets instantly",
    "Find your coach after the concert",
    "View all upcoming trip details"
  ];

  return (
    <section 
      className="relative min-h-[120vh] w-full text-white flex items-center overflow-hidden"
      style={{
        // Replace this URL with your actual background image
        backgroundImage: "url('app.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
  

      {/* Optional: Subtle Blue Glow for atmosphere (z-10) */}
    

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Side: Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tighter">
            Your Event Travel 
            <span className="text-gray-100">in Your Pocket</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
            Track your coach in real-time, access your e-tickets, find your pickup point, and locate your bus after the concert.
          </p>

          {/* Bullet Points with Borders */}
          <div className="space-y-0 mb-10 max-w-md">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 py-4 border-b border-white/10 last:border-0"
              >
                {/* Custom Check Icon */}
                <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#006DF2]">
                  <CheckCircle2 className="text-white" size={16} />
                </div>
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* App Buttons Row */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img 
                src="/appg.png" // Replace with your image
                alt="Download on App Store" 
                className="h-12 w-auto object-contain"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img 
                src="/google.png" // Replace with your image
                alt="Get it on Google Play" 
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>

          {/* Right Side: Phone Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[500px] mt-12 md:mt-0">
              <img 
                src="/phone.png" // Replace with your phone mockup
                alt="App Mockup" 
                className="w-full h-auto object-contain drop-shadow-3xl"
              />
            </div>
          </div>

      </div>
    </section>
  );
};

export default NewsletterSection;