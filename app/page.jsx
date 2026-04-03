import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import FeaturedConcerts from '../components/FeaturedConcerts'
import TabSection from '../components/TabSection'
import VenuesSlider from '../components/VenuesSlider'
import HowItWorks from '../components/HowItWorks'
import AppSection from '../components/AppSection'
import BookingCta from '../components/BookingCta';
import TravelMasterLocations from '../components/TravelMasterLocations';
import FAQ from "../components/FAQ";

export default function Home() {
  // Is variable ko hum style prop mein use karenge
  // const fontStyle = { fontFamily: "'Space Grotesk', sans-serif" };

  return (
    <div 
    // style={fontStyle} 
    className=" min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedConcerts />
        <TabSection />
        <VenuesSlider />
        <HowItWorks />
        <AppSection />
        <BookingCta />
      <TravelMasterLocations />
      <FAQ />
        {/* <NetflixStatsSection /> */}
        {/* <NewsletterSection /> */}
        {/* <AppSection />
        <CTASection />
        <FAQ /> */}
        {/* <TravelMasterInfo /> */}
      </main>

      <Footer />
    </div>
  )
}