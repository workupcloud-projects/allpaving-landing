import {
  HeroSection,
  CompanyOverview,
  CoreServices,
  CoverageArea,
  SafetyCommitment,
  TestimonialsSection,
  FeaturedProject,
  WhyChooseSection,
  ContactForm,
  Footer
} from "@/components"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CompanyOverview />
      <CoreServices />
      <CoverageArea />
      <SafetyCommitment />
      <TestimonialsSection />
      <FeaturedProject />
      <WhyChooseSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
