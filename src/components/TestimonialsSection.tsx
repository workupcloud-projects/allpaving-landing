import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Users, TrendingUp } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Property Manager, Sunset Plaza",
      text: "All Paving transformed our parking lot beyond expectations. Professional, timely, and the quality is outstanding.",
      rating: 5,
      bgColor: "bg-primary"
    },
    {
      name: "Michael Chen",
      company: "Facilities Director, Tech Campus",
      text: "Their ADA compliance work was flawless. Every detail was handled with precision and care.",
      rating: 5,
      bgColor: "bg-primary"
    },
    {
      name: "Lisa Rodriguez",
      company: "HOA Board President",
      text: "Exceptional service from start to finish. The team was courteous and the results speak for themselves.",
      rating: 5,
      bgColor: "bg-accent"
    }
  ]

  const clientLogos = [
    { name: "Miami-Dade County", logo: "🏛️" },
    { name: "Broward Schools", logo: "🎓" },
    { name: "Palm Beach Gardens", logo: "🌴" },
    { name: "Florida DOT", logo: "🛣️" },
    { name: "Retail Partners", logo: "🏪" },
    { name: "Healthcare Systems", logo: "🏥" }
  ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-light-subtle)] relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-lg blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/30 text-sm text-secondary mb-8">
            <Users className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
            What Our Clients
            <br />
            <span className="text-primary">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say about their 
            <span className="font-bold text-primary"> exceptional experiences</span> with All Paving.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8 relative z-10">
                {/* Quote icon */}
                <div className={`w-12 h-12 rounded-lg ${testimonial.bgColor} p-3 mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="font-bold text-secondary group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 border border-slate-200 text-sm text-slate-700 mb-12">
            <TrendingUp className="w-4 h-4" />
            Trusted by Leading Organizations
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="group flex flex-col items-center p-6 rounded-lg bg-white/50 backdrop-blur border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <div className="text-sm font-semibold text-slate-600 text-center group-hover:text-slate-900 transition-colors">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-[var(--ap-bg-dark)] rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Experience the All Paving difference for yourself. Let's discuss your project today.
              </p>
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 