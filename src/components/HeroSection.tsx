import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--ap-bg-dark)]">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-lg blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-lg blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 backdrop-blur border border-white/10 text-sm text-accent">
              <SparklesIcon className="w-4 h-4" />
              65+ Years of Excellence
            </div>
            
            {/* Main heading with minimal gradient */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">
                Building the
              </span>
              <br />
              <span className="text-accent">
                Future
              </span>
              <br />
              <span className="text-white/90">
                Restoring the Past
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-lg">
              Revolutionary roadway solutions that transform South Florida's infrastructure with 
              <span className="text-primary font-semibold"> precision engineering</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-md border-white/20 text-white hover:bg-white/10 backdrop-blur transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">65+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-slate-400">FL Locations</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image with professional styling */}
          <div className="relative">
            <div className="relative group">
              {/* Simplified border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Main image */}
              <div className="relative bg-[var(--ap-bg-dark)] rounded-lg p-2">
                <img 
                  src="https://picsum.photos/600/400?random=1" 
                  alt="Modern paving construction with advanced technology" 
                  className="rounded-md shadow-2xl w-full h-auto object-cover"
                />
                
                {/* Professional floating elements */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <div className="text-white font-bold text-lg">99.8%</div>
                  <div className="text-accent text-sm">Quality Score</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <div className="text-white font-bold text-lg">24/7</div>
                  <div className="text-primary text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-md flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
} 