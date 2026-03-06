import { HeroSection } from "@/components/hero-section"
import { ElevatorPitch } from "@/components/elevator-pitch"
import { WhatMakesDifferent } from "@/components/what-makes-different"
import { SoundInfluences } from "@/components/sound-influences"
import { MediaSection } from "@/components/media-section"
import { BandCredentials } from "@/components/band-credentials"
import { Instrumentation } from "@/components/instrumentation"
import { BookingSection } from "@/components/booking-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ElevatorPitch />
      <WhatMakesDifferent />
      <SoundInfluences />
      <MediaSection />
      <BandCredentials />
      <Instrumentation />
      <BookingSection />
      <SiteFooter />
    </main>
  )
}
