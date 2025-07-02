export function CompanyOverview() {
  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-light)] relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-lg blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/30 text-sm text-secondary mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            About All Paving
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 leading-tight">
            Your Trusted Partner for
            <span className="block text-primary">
              Comprehensive Paving Solutions
            </span>
          </h2>
          
          {/* Description with better typography */}
          <div className="text-xl md:text-2xl text-slate-600 leading-relaxed space-y-6 max-w-4xl mx-auto">
            <p>
              All Paving is your trusted partner for comprehensive paving solutions across South Florida. 
              With over <span className="font-bold text-primary">65 years of combined experience</span>, our expert teams specialize in 
              asphalt paving, concrete services, ADA compliance, drainage systems, and parking lot design.
            </p>
            <p className="text-lg">
              We deliver reliable, high-quality results on time and within budget—
              <span className="font-semibold text-secondary">no shortcuts, just solid results.</span>
            </p>
          </div>
          
          {/* Key highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group p-6 rounded-lg bg-white/50 backdrop-blur border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-secondary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Premium Quality</h3>
              <p className="text-slate-600">Industry-leading materials and precision craftsmanship</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/50 backdrop-blur border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">On-Time Delivery</h3>
              <p className="text-slate-600">Reliable project completion within agreed timelines</p>
            </div>
            
            <div className="group p-6 rounded-lg bg-white/50 backdrop-blur border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Budget Friendly</h3>
              <p className="text-slate-600">Transparent pricing with no hidden costs or surprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 