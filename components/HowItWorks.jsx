import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Event',
    description: 'Browse concerts, festivals & sports events. Find your favourite artist or event.',
    icon: '/event.png',
    bgImg: '/background.png', 
  },
  {
    number: '02',
    title: 'Pick Your Pickup',
    description: 'Select from 80+ nationwide pickup points. We’ll pick you up close to home.',
    icon: '/pin.png',
    bgImg: '/background.png', 
  },
  {
    number: '03',
    title: 'Book Your Seat',
    description: 'Pay securely online. Instant e-ticket with QR code sent to your phone.',
    icon: '/seat.png',
    bgImg: '/background.png', 
  },
  {
    number: '04',
    title: 'Show Ticket & Travel',
    description: 'Scan your QR code and board. We drop you at the venue and bring you home.',
    icon: '/travel.png',
   bgImg: '/background.png', 
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black py-16 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 ml-4  uppercase tracking-wider">How It Works</h2>
        
        <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-1 min-w-[280px]">
              {/* Card Container */}
              <div 
                className="p-10 flex flex-col h-full w-full relative overflow-hidden"
                style={{
                  backgroundImage: `url(${step.bgImg})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  /* Radius: Top-Left: 10px, Bottom-Left: 10px, Others: 0 */
                  borderRadius: '10px 0px 0px 10px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
            

                {/* Top Row: Icon and Large Number */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="w-12 h-12">
                    <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                  </div>
                  <span 
                    className="text-6xl font-black leading-none select-none opacity-20"
                    style={{ color: '#686868' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto relative z-10">
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Icon */}
              {index !== steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#006DF2] border-2 border-black shadow-lg">
                  <ArrowRight size={16} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;