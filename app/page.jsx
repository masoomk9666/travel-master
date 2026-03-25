import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import DestinationCard from '@/components/DestinationCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FeaturedConcerts from '../components/FeaturedConcerts'
import TabSection from '../components/TabSection'
import NewsletterSection from '../components/NewsletterSection'
import TravelMasterInfo from '../components/TravelMasterInfo'
import VenuesSlider from '../components/VenuesSlider'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import NetflixStatsSection from '../components/StatsSection'
import CTASection from '../components/cta'

export default function Home() {
  // Is variable ko hum style prop mein use karenge
  const fontStyle = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    <div style={fontStyle} className=" min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedConcerts />
        <HowItWorks />
        <VenuesSlider />
        <TabSection />
        <NetflixStatsSection />
        <NewsletterSection />
        <CTASection />
        <FAQ />
        {/* <TravelMasterInfo /> */}
      </main>

      <Footer />
    </div>
  )
}