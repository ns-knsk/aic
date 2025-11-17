import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { OptraHealthIntro } from "@/components/optrahealth-intro"
import { Features } from "@/components/features"
import { HowToUse } from "@/components/how-to-use"
import { DoctorBenefits } from "@/components/doctor-benefits"
import { DownloadCTA } from "@/components/download-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <OptraHealthIntro />
        <HowToUse />
        <Features />
        <DoctorBenefits />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
