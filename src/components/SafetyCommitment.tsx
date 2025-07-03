import { Shield, Users, CheckCircle } from "lucide-react"

export function SafetyCommitment() {
  return (
    <section className="py-16 bg-muted/30 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4 sm:text-3xl lg:text-4xl">
            Commitment to Safety
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="bg-background rounded-lg border border-border p-8 sm:p-10 lg:p-12">
          {/* Safety Shield Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 rounded-full p-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center mb-10">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:leading-9">
              Safety isn't just a priority—it's our <span className="font-semibold text-foreground">standard</span>. 
              All Paving maintains stringent safety protocols on every project, from daily toolbox talks to ongoing training. 
              We ensure every crew member returns home safely and your property is protected throughout construction.
            </p>
          </div>

          {/* Safety Highlights */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                  Crew Safety
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                  Daily toolbox talks and ongoing training ensure every team member returns home safely.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                  Property Protection
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                  Stringent protocols protect your property and minimize disruption during construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 