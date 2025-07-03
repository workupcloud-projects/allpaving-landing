interface ServiceItem {
  title: string
  description: string
}

interface ServiceCategory {
  category: string
  services: ServiceItem[]
}

const servicesData: ServiceCategory[] = [
  {
    category: "Asphalt Services",
    services: [
      {
        title: "New Asphalt Paving",
        description: "Smooth, fortified surfaces built to top industry standards."
      },
      {
        title: "Asphalt Repair & Patching",
        description: "Professional fixes for cracks, potholes, and wear before damage worsens."
      },
      {
        title: "Asphalt Milling",
        description: "Cost-effective removal of old layers, preserving existing slopes and foundations."
      },
      {
        title: "Asphalt Overlay",
        description: "Eco-friendly resurfacing that refreshes and reinforces your pavement."
      },
      {
        title: "Road Widening",
        description: "Extending road edges to improve vehicle capacity and safety."
      }
    ]
  },
  {
    category: "Concrete Services",
    services: [
      {
        title: "Concrete Slabs & Parking Lots",
        description: "Durable surfaces reinforced with wire- or fiber-mesh for lasting strength."
      },
      {
        title: "Pedestrian Sidewalks",
        description: "ADA-compliant walkways formed and poured to engineering specifications."
      },
      {
        title: "Curbing, Ramps & Stairs",
        description: "Protect landscaping and provide safe access with custom curbs, ramps, and staircases."
      }
    ]
  },
  {
    category: "Sealcoating & Striping",
    services: [
      {
        title: "Sealcoating",
        description: "Protective emulsion layer that restores asphalt's black appearance and extends life."
      },
      {
        title: "Pavement Markings",
        description: "Federal- and state-compliant striping for safe, efficient traffic flow."
      },
      {
        title: "Thermoplastic Markings",
        description: "Highly reflective, long-lasting lines for highways, streets, and stop bars."
      },
      {
        title: "Reflective Pavement Markers & Signage",
        description: "Lane separators, fire-lane curbs, ADA signage—and more."
      }
    ]
  },
  {
    category: "ADA Compliance",
    services: [
      {
        title: "Handicap Ramps & Handrails",
        description: "Proper slope, clearance, handrails, and detectable warning mats."
      },
      {
        title: "ADA Signage & Pavement Markings",
        description: "All mandated signs and markings to avoid penalties (up to $75,000 first violation)."
      },
      {
        title: "Detectable Warning Mats",
        description: "Surface‐mounted mats at entrances and intersections for user safety."
      }
    ]
  },
  {
    category: "Drainage Solutions",
    services: [
      {
        title: "Catch Basins & Inline Drains",
        description: "Installation, adjustment, cleaning, and repair for effective water management."
      },
      {
        title: "Drainage Piping Maintenance",
        description: "Five-year certification cleaning and repairs to prevent costly failures."
      },
      {
        title: "Retention & Dewatering Systems",
        description: "Design, install, and certify retention ponds and pump systems to local DEP standards."
      }
    ]
  },
  {
    category: "Parking Lot & Property Maintenance",
    services: [
      {
        title: "Design & Layout Planning",
        description: "Traffic-flow optimization, ADA considerations, and speed bump installation."
      },
      {
        title: "Pressure & Power Washing",
        description: "Keep surfaces clean and prolong pavement life."
      },
      {
        title: "Ongoing Maintenance",
        description: "Sealcoating, striping refresh, and pothole repair to protect your investment."
      }
    ]
  }
]

// Helper function to create URL-friendly IDs
const createServiceId = (category: string) => {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')
}

export function CoreServices() {
  return (
    <section id="services" className="py-16 bg-muted/30 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-4 sm:text-3xl lg:text-4xl">
            Core Services
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {servicesData.map((category, categoryIndex) => (
            <div key={categoryIndex} id={createServiceId(category.category)} className="bg-background rounded-lg border border-border p-6 sm:p-8">
              {/* Category Header */}
              <h3 className="text-xl font-bold text-foreground mb-6 sm:text-2xl lg:text-2xl">
                {category.category}
              </h3>
              
              {/* Services List */}
              <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 