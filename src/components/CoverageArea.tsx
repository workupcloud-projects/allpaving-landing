import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhoneIcon, MapPinIcon, Navigation, Building2, Clock, ArrowRightIcon } from "lucide-react"

export function CoverageArea() {
      const offices = [
      {
        name: "Boca Raton",
        subtitle: "Headquarters",
        address: "23123 FL-7 #250\nBoca Raton, FL 33428",
        phones: ["954-688-9600", "1-888-439-ROAD"],
        bgColor: "bg-primary",
        isHQ: true
      },
      {
        name: "Jupiter",
        subtitle: "North Palm Beach",
        address: "4300 S. US Hwy 1, Ste 203\nJupiter, FL 33477",
        phones: ["561-288-4482"],
        bgColor: "bg-primary",
        isHQ: false
      },
      {
        name: "Naples",
        subtitle: "Southwest Florida",
        address: "6200 Shirley St. Unit 204\nNaples, FL 34116",
        phones: ["239-207-3644"],
        bgColor: "bg-accent",
        isHQ: false
      },
      {
        name: "Orlando",
        subtitle: "Central Florida",
        address: "13750 W Colonial Dr., Ste 350 #237\nOrlando, FL 34787",
        phones: ["407-440-1381"],
        bgColor: "bg-secondary",
        isHQ: false
      },
      {
        name: "Tampa",
        subtitle: "Tampa Bay Area",
        address: "10006 Cross Creek Blvd. #64\nTampa, FL 33647",
        phones: ["813-820-0002"],
        bgColor: "bg-accent",
        isHQ: false
      }
    ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-light-subtle)] relative overflow-hidden">
      {/* Simplified background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-lg blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/30 text-sm text-secondary mb-8">
            <Navigation className="w-4 h-4" />
            Our Locations
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
            Coverage Area
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Serving South Florida with <span className="font-bold text-primary">5 strategic locations</span> for 
            rapid response and comprehensive coverage across the region
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${office.isHQ ? 'lg:col-span-1 lg:row-span-1' : ''} bg-white border-0 shadow-lg`}>
              
              {/* HQ Badge */}
              {office.isHQ && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-secondary text-xs font-bold rounded-md shadow-lg">
                  HQ
                </div>
              )}
              
              <CardHeader className="relative z-10 pb-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${office.bgColor} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {office.isHQ ? (
                    <Building2 className="w-8 h-8 text-white" />
                  ) : (
                    <MapPinIcon className="w-8 h-8 text-white" />
                  )}
                </div>
                
                <CardTitle className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors mb-1">
                  {office.name}
                </CardTitle>
                <p className="text-sm text-slate-500 font-medium">{office.subtitle}</p>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm">{office.address}</p>
                </div>
                
                {/* Phones */}
                <div className="space-y-2">
                  {office.phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center gap-3">
                      <PhoneIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <a href={`tel:${phone}`} className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm">
                       {phone}
                     </a>
                    </div>
                  ))}
                </div>
                
                {/* Hours */}
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <p className="text-slate-600 font-medium text-sm">Mon-Fri: 7AM-6PM</p>
                </div>
                
                {/* Action button */}
                <button className={`w-full mt-6 px-4 py-3 ${office.bgColor} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2`}>
                  Get Directions
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </CardContent>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-[var(--ap-bg-dark)] rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Location to Contact?
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Call our main line and we'll connect you with the right team for your project location and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:954-688-9600" className="px-8 py-4 bg-accent text-secondary font-bold rounded-md hover:bg-accent/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  Call (954) 688-9600
                </a>
                <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-md hover:bg-accent hover:text-secondary transition-colors flex items-center justify-center gap-2">
                  Request Quote Online
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 