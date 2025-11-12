import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { NBASpotlight } from '@/components/NBA-Spotlight'
import { Itinerary } from '@/components/Itinerary'
import { Highlights } from '@/components/Highlights'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NBASpotlight />
      <Itinerary />
      <Highlights />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

