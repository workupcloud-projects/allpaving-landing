import { Navbar } from "@/components/Navbar"
import { FloatingCTA } from "@/components/FloatingCTA"
import { HeroSection } from "@/components/HeroSection"
import { CompanyOverview } from "@/components/CompanyOverview"
import { CoreServices } from "@/components/CoreServices"
import { CoverageArea } from "@/components/CoverageArea"
import { SafetyCommitment } from "@/components/SafetyCommitment"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCTA />
      <HeroSection />
      <CompanyOverview />
      <CoreServices />
      <CoverageArea />
      <SafetyCommitment />
      <Footer />
    </div>
  )
}

export default App
