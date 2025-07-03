import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero_image.jpg')`
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Hero Content - Mobile First */}
      <div className="relative z-10 w-full max-w-sm mx-auto px-4 text-center text-white sm:max-w-lg sm:px-6 md:max-w-2xl lg:max-w-4xl lg:px-8">
        <h1 className="text-3xl font-bold leading-tight mb-4 sm:text-4xl sm:mb-5 md:text-5xl md:mb-6 lg:text-6xl xl:text-7xl">
          Building the Future,{" "}
          <span className="text-primary">Restoring the Past</span>
        </h1>
        
        <p className="text-base font-medium text-gray-200 mb-6 sm:text-lg sm:mb-7 md:text-xl md:mb-8 lg:text-2xl lg:max-w-2xl lg:mx-auto">
          Expert Roadway Solutions for South Florida
        </p>
        
        <Button 
          asChild
          size="default"
          className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
        >
          <a href="tel:954-688-9600">
            Request Your Free Consultation
          </a>
        </Button>
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/20 to-transparent sm:h-24 lg:h-32" />
    </section>
  )
} 