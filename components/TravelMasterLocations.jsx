// import React from 'react';

// const TravelMasterLocations = () => {
//   return (
//     // Main full-screen background container
//     <section className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black text-white p-6 md:p-12">

//       {/* 2. FOREGROUND CONTENT CONTAINER (Centered) */}
//       <div className=" relative z-10 flex flex-col items-center justify-center text-center gap-0 w-full"
//       id='pickupPoints'
//       >
        
//         {/* Subtitle / Stat Text */}
//         <h2 className="text-2xl md:text-[32px] font-bold tracking-wide opacity-90 ">
//           80+ Pickup Locations Nationwide
//         </h2>
//         <h1 
//         style={{
//           // Font size adjusted for large display
//           // fontSize: '151px',
//         //   fontSize: 'clamp(3rem, 10vw, 10rem)',
//           fontWeight: 900,
//           textTransform: 'uppercase',
//           letterSpacing: '-0.03em',
//           // Optional: Add slight gradient to match original image text
//           background: 'linear-gradient(to bottom, #777 0%, #333 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//         }}
//         className='lg:text-[110px] xl:text-[150px] sk-text'
//         >TRAVEL MASTER</h1>

//           {/* B. The Map Image (Provided) */}
//           <div className="relative z-10 w-full h-full flex items-center justify-center p-2 -ml-20">
//             <img 
//               src="/booking-ui/locations-img.png" // Placeholder with image provided by user
//               alt="Ireland map with pickup locations"
//               className="object-contain w-auto h-full max-h-[70vh] block mx-auto -mt-25 "
//             />
//           </div>
//         {/* --------------------------------- */}

//       </div>
//     </section>
//   );
// };

// export default TravelMasterLocations;


import React from 'react';

const TravelMasterLocations = () => {
  return (
    // Main full-screen background container
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
      
      {/* Foreground Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-0 w-full"
      id='pickupPoints'
      >
        
        {/* Subtitle / Stat Text */}
        <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold tracking-wide opacity-90 px-4 mb-3">
          80+ Pickup Locations Nationwide
        </h2>
        
        {/* Main Title */}
        <h1 
        style={{
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(to bottom, #777 0%, #333 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[150px] sk-text leading-none"
        >
          TRAVEL MASTER
        </h1>

        {/* Map Image */}
        <div className="relative z-10 w-full flex items-center justify-center px-2 sm:px-4 md:px-6">
          <img 
            src="/booking-ui/locations-img.png"
            alt="Ireland map with pickup locations"
            className="object-contain w-full sm:w-auto h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] block mx-auto mt-0  md:-mt-5 lg:-mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default TravelMasterLocations;