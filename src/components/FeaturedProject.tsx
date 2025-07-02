import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

export function FeaturedProject() {
  const projectStats = [
    { label: "Square Footage", value: "50,000+", icon: TrendingUp },
    { label: "Completion Time", value: "6 Weeks", icon: Calendar },
    { label: "Team Size", value: "15 Experts", icon: Users },
    { label: "Client Rating", value: "5 Stars", icon: CheckCircle }
  ]

  const projectHighlights = [
    "Complete structural assessment and planning",
    "Advanced drainage system installation", 
    "ADA-compliant accessibility features",
    "High-durability surface treatments",
    "24/7 project monitoring and support"
  ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-dark)] relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 backdrop-blur border border-accent/20 text-sm text-accent mb-8">
            <TrendingUp className="w-4 h-4" />
            Featured Case Study
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Project Spotlight
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we transformed a challenging parking garage renovation into a 
            <span className="text-primary font-semibold"> showcase of modern engineering</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Project Image */}
          <div className="relative">
            <div className="relative group">
              {/* Simplified border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Main image container */}
              <div className="relative bg-[var(--ap-bg-dark)] rounded-lg p-2">
                <img 
                  src="https://picsum.photos/600/400?random=3" 
                  alt="Downtown Miami parking garage renovation project showcasing modern paving techniques" 
                  className="rounded-md shadow-2xl w-full h-auto object-cover"
                />
                
                {/* Professional floating project info */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <div className="text-white font-bold text-lg">Miami</div>
                  <div className="text-accent text-sm">Downtown District</div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur rounded-lg p-4 border border-primary/20">
                  <div className="text-white font-bold text-lg">Complete</div>
                  <div className="text-green-100 text-sm">On Schedule</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Project Title */}
            <div>
              <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                Commercial Project
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Downtown Miami
                <span className="block text-2xl md:text-3xl text-primary">
                  Parking Garage Renovation
                </span>
              </h3>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Miami, FL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-lg text-slate-300 leading-relaxed">
              A comprehensive renovation of a 50,000+ square foot parking garage in downtown Miami, 
              featuring advanced drainage systems, ADA compliance upgrades, and high-durability 
              surface treatments designed to withstand heavy urban traffic.
            </p>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-6">
              {projectStats.map((stat, index) => (
                <div key={index} className="group p-4 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-accent" />
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Highlights */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Project Highlights</h4>
              <div className="space-y-3">
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
              View Full Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur rounded-lg p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a Similar Project in Mind?
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Every project is unique, but our approach remains consistent: exceptional quality, 
              innovative solutions, and complete client satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-secondary font-bold rounded-md hover:bg-accent/90 transition-colors shadow-lg">
                Get Project Estimate
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent hover:text-secondary transition-colors">
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 