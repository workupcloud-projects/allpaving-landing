import { Phone, MapPin } from "lucide-react"

interface OfficeLocation {
  city: string
  isHQ?: boolean
  address: string
  phone: string
  additionalPhone?: string
}

const locations: OfficeLocation[] = [
  {
    city: "Boca Raton",
    isHQ: true,
    address: "23123 FL-7 #250, Boca Raton, FL 33428",
    phone: "954-688-9600",
    additionalPhone: "1-888-439-ROAD"
  },
  {
    city: "Jupiter",
    address: "4300 S. US Hwy 1, Ste 203, Jupiter, FL 33477",
    phone: "561-288-4482"
  },
  {
    city: "Naples",
    address: "6200 Shirley St. Unit 204, Naples, FL 34116",
    phone: "239-207-3644"
  },
  {
    city: "Orlando",
    address: "13750 W Colonial Dr., Ste 350 #237, Orlando, FL 34787",
    phone: "407-440-1381"
  },
  {
    city: "Tampa",
    address: "10006 Cross Creek Blvd. #64, Tampa, FL 33647",
    phone: "813-820-0002"
  }
]

export function CoverageArea() {
  return (
    <section id="locations" className="py-16 bg-background sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4 sm:text-3xl lg:text-4xl">
            Coverage Area and Locations
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto sm:text-lg lg:text-xl">
            We proudly serve all of South Florida, with five convenient offices:
          </p>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* City Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  {location.city}
                </h3>
                {location.isHQ && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    HQ
                  </span>
                )}
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {location.address}
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {location.phone}
                  </a>
                </div>
                {location.additionalPhone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a 
                      href={`tel:${location.additionalPhone.replace(/[^0-9]/g, '')}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {location.additionalPhone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground sm:text-base">
            Serving all of South Florida with professional paving solutions
          </p>
        </div>
      </div>
    </section>
  )
} 