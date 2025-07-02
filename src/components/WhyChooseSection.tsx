import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Users, Shield, Lightbulb, Target } from "lucide-react"

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "65+ years of combined experience delivering exceptional results across South Florida",
      bgColor: "bg-accent"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time project completion with efficient planning and execution",
      bgColor: "bg-primary"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with specialized training and industry expertise",
      bgColor: "bg-secondary"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "OSHA-compliant safety protocols and comprehensive insurance coverage",
      bgColor: "bg-primary"
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge techniques and materials for long-lasting results",
      bgColor: "bg-accent"
    }
  ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-light)] relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-lg blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/30 text-sm text-secondary mb-8">
            <Target className="w-4 h-4" />
            Why Choose Us
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
            Why Choose
            <br />
            <span className="text-primary">
              All Paving?
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in the paving industry and why leading organizations 
            <span className="font-bold text-primary"> trust us</span> with their most important projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="relative z-10 pb-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg ${benefit.bgColor} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </CardContent>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2 group-hover:text-accent transition-colors">
              500+
            </div>
            <div className="text-slate-600 font-semibold">Projects Completed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
              65+
            </div>
            <div className="text-slate-600 font-semibold">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2 group-hover:text-accent transition-colors">
              100%
            </div>
            <div className="text-slate-600 font-semibold">Client Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
              5
            </div>
            <div className="text-slate-600 font-semibold">FL Locations</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-[var(--ap-bg-dark)] rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience the All Paving Difference?
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Join hundreds of satisfied clients who have trusted us with their paving projects. 
                Let's discuss how we can bring excellence to your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Your Free Quote
                </button>
                <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent hover:text-secondary transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 