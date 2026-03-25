"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What is TravelMaster?",
    answer: "TravelMaster is Ireland's leading event travel specialist, providing direct coach travel to the biggest concerts, festivals, and sporting events nationwide."
  },
  {
    question: "How much does a bus ticket cost?",
    answer: "Prices vary depending on your pickup location and the specific event. You can find exact pricing by selecting your event and pickup point on our homepage."
  },
  {
    question: "Where can I be picked up?",
    answer: "We have over 80+ nationwide pickup points across Ireland. During the booking process, you can select the one closest to your home."
  },
  {
    question: "How does the e-ticket work?",
    answer: "Once you book, an e-ticket with a unique QR code is sent to your phone. Simply show this QR code to the driver when boarding your coach."
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Changes and cancellations depend on our refund policy. Generally, requests made within a certain timeframe before the event can be processed via our support team."
  },
  {
    question: "Do you offer group bookings?",
    answer: "Yes! We cater to groups of all sizes. For large private hires or group discounts, please reach out through our contact page."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 px-6 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-[45px] font-medium text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0A0A0C] border border-white/5 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 md:p-5 flex justify-between items-center text-left bg-[#0A0A0C] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="text-lg md:text-[20px] font-medium pr-4">
                  {item.question}
                </span>
                <span className="shrink-0">
                  {activeIndex === index ? (
                    <Minus size={24} className="text-gray-400" />
                  ) : (
                    <Plus size={24} className="text-gray-400" />
                  )}
                </span>
              </button>

              {/* Expandable Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pt-4 pb-8 text-gray-200 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;