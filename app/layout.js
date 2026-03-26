import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GlobalGrid from '@/components/GlobalGrid'

// Inter font config - Jo Helvetica Neue ka premium alternative hai
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

// export const metadata = {
//   title: 'Travel Master - The Event Travel Specialist',
//   description: 'Book your bus seats for the biggest concerts',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className={`${inter.className} antialiased bg-black text-white relative`}>
        <GlobalGrid />

        <div className="relative z-10 bg-transparent">
          {children}
        </div>
        
        {/* Analytics component add kar diya hai */}
        <Analytics />
      </body>
    </html>
  )
}