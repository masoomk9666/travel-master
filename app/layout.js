// import { Inter, DM_Sans } from 'next/font/google'
// import localFont from 'next/font/local';
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'
// import GlobalGrid from '@/components/GlobalGrid'


// // Inter font config - Jo Helvetica Neue ka premium alternative hai
// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-inter',
//   display: 'swap',
// })
// const googleSans = localFont({
//   src: './fonts/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght', // Aapki file ka sahi path
//   variable: '--font-google-sans',      // CSS variable ka naam
//   display: 'swap',
// });

// export const dmSans = DM_Sans({
//   subsets: ['latin'],
//   variable: '--font-dm-sans',
// });

// export const metadata = {
//   title: 'Travel Master - The Event Travel Specialist',
//   description: 'Book your bus seats for the biggest concerts',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${dmSans.variable} ${googleSans.variable}`}>
//       <body className={`${inter.className} antialiased bg-black text-white relative`}>
//         <GlobalGrid />

//         <div className="relative z-10 bg-transparent">
//           {children}
//         </div>
        
//         {/* Analytics component add kar diya hai */}
//         <Analytics />
//       </body>
//     </html>
//   )
// }




import { Inter, DM_Sans } from 'next/font/google'
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GlobalGrid from '@/components/GlobalGrid'

// Font Configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const googleSans = localFont({
  // Note: Make sure the file extension (.woff2 or .ttf) is included in the path
  src: './fonts/GoogleSansFlex.ttf', 
  variable: '--font-google-sans',
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  ${googleSans.variable}`}>
      <body className={`${googleSans.className} antialiased bg-black text-white relative`}>
        {/* GlobalGrid should handle its own "use client" directive inside its file */}
        <GlobalGrid />

        <div className="relative z-10 bg-transparent">
          {children}
        </div>
        
        <Analytics />
      </body>
    </html>
  )
}