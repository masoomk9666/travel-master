import React from 'react';
import Link from 'next/link';

const BookingCta = () => {
  return (
    <div className='relative  px-3 md:px-5  py-10 md:py-20 bg-black'>
        <div className="absolute top-10 right-0 w-full h-[100px]  bg-black blur-[20px]  z-20 "></div>
    <section className="relative min-h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-20 right-0 w-full h-[200px]  bg-gradient-to-b from-[#FD6422] to-[#970C1070] blur-[120px] rounded-full z-10 "></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/booking-ui/cta-bg.png')`, // Aap apni image yahan replace kar sakte hain
        }}
      >
        {/* Gradient Overlay: Dark top/bottom and purple/orange tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/40 to-black/90"></div>
        <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4 text-center space-y-2 md:space-y-4">
        <h1 className=" text-[24px] md:text-[45px] font-bold tracking-tight ">
          Travel With The Fans
        </h1>
        
        <h2 className=" text-[24px] font-medium">
          The Journey Is Part of the Experience
        </h2>
        
        <p className="mx-auto mb-5 md:mb-10 max-w-2xl text-base leading-relaxed opacity-90 md:text-[17px]">
          Travel with people going to the same show as you. 
          Share the excitement on the way there and the stories on the way back.
        </p>

        {/* CTA Button */}
        <Link
        href="/booking">
        <button className="rounded-lg bg-white px-8 py-3 text-[14px] font-medium text-black transition-transform cursor-pointer">
          Book Your Bus
        </button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default BookingCta;