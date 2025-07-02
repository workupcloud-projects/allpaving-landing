import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircleIcon,
  ConstructionIcon,
  BuildingIcon,
  PaintbrushIcon,
  AccessibilityIcon,
  DropletsIcon,
  CarIcon,
  ArrowRightIcon,
  SparklesIcon
} from "lucide-react"

const services = [
  {
    icon: ConstructionIcon,
    title: "Asphalt Services",
    bgColor: "bg-accent",
    items: [
      { name: "New Asphalt Paving", desc: "Smooth, fortified surfaces built to top industry standards." },
      { name: "Asphalt Repair & Patching", desc: "Professional fixes for cracks, potholes, and wear." },
      { name: "Asphalt Milling", desc: "Cost-effective removal preserving existing foundations." },
      { name: "Asphalt Overlay & Road Widening", desc: "Eco-friendly resurfacing and capacity improvements." }
    ]
  },
  {
    icon: BuildingIcon,
    title: "Concrete Services",
    bgColor: "bg-secondary",
    items: [
      { name: "Concrete Slabs & Parking Lots", desc: "Durable surfaces reinforced for lasting strength." },
      { name: "Pedestrian Sidewalks", desc: "ADA-compliant walkways to engineering specifications." },
      { name: "Curbing, Ramps & Stairs", desc: "Custom solutions for safe access and landscaping protection." }
    ]
  },
  {
    icon: PaintbrushIcon,
    title: "Sealcoating & Striping",
    bgColor: "bg-primary",
    items: [
      { name: "Sealcoating", desc: "Protective layer that restores and extends asphalt life." },
      { name: "Pavement Markings", desc: "Federal and state-compliant striping for safe traffic flow." },
      { name: "Thermoplastic & Reflective Markings", desc: "Long-lasting, highly reflective highway solutions." }
    ]
  },
  {
    icon: AccessibilityIcon,
    title: "ADA Compliance",
    bgColor: "bg-primary",
    items: [
      { name: "Handicap Ramps & Handrails", desc: "Proper slope, clearance, and detectable warning mats." },
      { name: "ADA Signage & Markings", desc: "Avoid penalties up to $75,000 with compliant installations." }
    ]
  },
  {
    icon: DropletsIcon,
    title: "Drainage Solutions",
    bgColor: "bg-accent",
    items: [
      { name: "Catch Basins & Inline Drains", desc: "Installation, adjustment, and maintenance for water management." },
      { name: "Retention & Dewatering Systems", desc: "Design and certify systems to local DEP standards." }
    ]
  },
  {
    icon: CarIcon,
    title: "Parking Lot Maintenance",
    bgColor: "bg-secondary",
    items: [
      { name: "Design & Layout Planning", desc: "Traffic-flow optimization and ADA considerations." },
      { name: "Preventive Maintenance", desc: "Regular inspections and proactive repairs." },
      { name: "Emergency Repairs", desc: "24/7 response for urgent maintenance needs." }
    ]
  }
]

export function CoreServices() {
  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-dark)] relative overflow-hidden">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Minimal floating elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-lg blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 backdrop-blur border border-white/10 text-sm text-accent mb-8">
            <SparklesIcon className="w-4 h-4" />
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Core Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive paving and infrastructure solutions tailored to meet your specific needs with 
            <span className="text-primary font-semibold"> cutting-edge technology</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden h-full">
              <CardHeader className="relative z-10 pb-4">
                {/* Icon with solid background */}
                <div className={`w-16 h-16 rounded-lg ${service.bgColor} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 group/item">
                    <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <div className="space-y-1">
                      <p className="font-semibold text-white text-sm group-hover/item:text-accent transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Learn more link */}
                <div className="flex items-center text-accent text-sm font-semibold group-hover:text-primary transition-colors pt-4 border-t border-white/10">
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Our expert team can design and implement specialized paving solutions tailored to your unique requirements.
            </p>
            <button className="group px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Discuss Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 