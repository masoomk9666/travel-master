import React from 'react';
import { Ticket, MapPin, Armchair, Bus } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Choose Your Event',
    description: 'Browse concerts, festivals & sports events. Find your favourite artist or event.',
    icon: "/icon01.png",
  },
  {
    number: '2',
    title: 'Pick Your Pickup',
    description: 'Select from 80+ nationwide pickup points. We’ll pick you up close to home.',
    icon: "/icon02.png",
  },
  {
    number: '3',
    title: 'Book Your Seat',
    description: 'Pay securely online. Instant e-ticket with QR code sent to your phone.',
    icon: '/icon03.png',
  },
  {
    number: '4',
    title: 'Show Ticket & Travel',
    description: 'Scan your QR code and board. We drop you at the venue and bring you home.',
    icon: "/icon04.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black pb-8 md:pb-20  px-4 sm:px-6  text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[32px] font-bold mb-10 tracking-tight">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group flex items-start">
              
              {/* Large Background Number */}
              <span className="text-[100px] font-bold leading-none select-none opacity-30 text-[#838383] transition-opacity group-hover:opacity-50">
                {step.number}
              </span>

              {/* Card Content */}
              <div className="relative z-10 pl-4">
                {/* Icon Container */}
                <div className="mb-3 flex items-center">
                  <img src={step.icon}  className='w-10'/>
                </div>

                {/* Text Content */}
                <h3 className="text-[17px] font-bold mb-2 tracking-tight whitespace-nowrap">
                  {step.title}
                </h3>
                <p className="text-[#9996A0] text-[14px]  ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;