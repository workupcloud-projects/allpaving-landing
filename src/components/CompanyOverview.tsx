export function CompanyOverview() {
  return (
    <section id="about" className="py-16 bg-background sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Heading */}
          <h2 className="text-2xl font-bold text-foreground mb-8 sm:text-3xl lg:text-4xl">
            Company Overview
          </h2>
          
          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-8">
              All Paving provides full-spectrum paving solutions across South Florida, specializing in asphalt, concrete, sealcoating, ADA compliance, drainage, and property maintenance.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-8 mt-4">
              We service <span className="font-semibold text-foreground">Fort Lauderdale, Jupiter, Naples, Orlando, and Tampa</span>.
            </p>
          </div>
          
          {/* Subtle accent line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 