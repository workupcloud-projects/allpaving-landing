import { ShieldCheckIcon, Shield, CheckCircle, Award, Users } from "lucide-react"

export function SafetyCommitment() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "OSHA-Certified Protocols",
      description: "All team members follow strict OSHA safety guidelines and protocols"
    },
    {
      icon: Users,
      title: "Regular Safety Training",
      description: "Continuous education and safety updates for our entire workforce"
    },
    {
      icon: Award,
      title: "Comprehensive Insurance",
      description: "Full coverage protection for every project and client"
    },
    {
      icon: CheckCircle,
      title: "Zero-Tolerance Policy",
      description: "Unwavering commitment to maintaining the highest safety standards"
    }
  ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-dark)] relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 backdrop-blur border border-primary/20 text-sm text-primary">
              <ShieldCheckIcon className="w-4 h-4" />
              Safety First
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Safety is Our
              <br />
              <span className="text-accent">
                Top Priority
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Safety isn't just a priority—it's our standard. All Paving maintains stringent 
              safety protocols on every project, from daily toolbox talks to ongoing training. 
              We ensure every crew member returns home safely and your property is protected 
              throughout construction with <span className="text-primary font-semibold">industry-leading practices</span>.
            </p>
            
            {/* Safety features grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="group p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-primary p-3 mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-slate-400">Safety Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">0</div>
                <div className="text-sm text-slate-400">Major Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Safety Support</div>
              </div>
            </div>
          </div>
          
          {/* Image section with professional styling */}
          <div className="relative">
            <div className="relative group">
              {/* Simplified border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Main image container */}
              <div className="relative bg-[var(--ap-bg-dark)] rounded-lg p-2">
                <img 
                  src="https://picsum.photos/600/400?random=2" 
                  alt="Professional safety equipment and protocols in action" 
                  className="rounded-md shadow-2xl w-full h-auto object-cover"
                />
                
                {/* Professional safety badges */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur rounded-lg p-4 border border-primary/20">
                  <div className="text-white font-bold text-lg">OSHA</div>
                  <div className="text-green-100 text-sm">Certified</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur rounded-lg p-4 border border-accent/20">
                  <div className="text-secondary font-bold text-lg">5★</div>
                  <div className="text-secondary/80 text-sm">Safety Rating</div>
                </div>
                
                <div className="absolute top-1/2 left-4 bg-white/90 backdrop-blur rounded-lg p-3 border border-white/20">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 