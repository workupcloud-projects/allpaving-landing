import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const services = [
    "Asphalt Paving",
    "Concrete Services", 
    "Sealcoating & Striping",
    "ADA Compliance",
    "Drainage Solutions",
    "Parking Lot Maintenance"
  ]

  const locations = [
    "Boca Raton (HQ)",
    "Jupiter",
    "Naples", 
    "Orlando",
    "Tampa"
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--ap-bg-dark)] relative overflow-hidden">
      {/* Background elements - simplified */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">
                <span className="text-accent">
                  All Paving
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Building the future, restoring the past. Your trusted partner for comprehensive paving solutions across South Florida.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <div className="font-semibold text-white">Headquarters</div>
                  <div>23123 FL-7 #250</div>
                  <div>Boca Raton, FL 33428</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <a href="tel:954-688-9600" className="hover:text-white transition-colors font-semibold">
                    (954) 688-9600
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <a href="mailto:info@allpaving.com" className="hover:text-white transition-colors">
                    info@allpaving.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                    {location}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-white/10">
              <h5 className="text-white font-semibold mb-2">Business Hours</h5>
              <div className="text-slate-300 text-sm space-y-1">
                <div>Mon-Fri: 7:00 AM - 6:00 PM</div>
                <div>Sat: 8:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm">Our Projects</a></li>
              <li><a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm">Safety</a></li>
              <li><a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-accent transition-colors text-sm">Contact</a></li>
            </ul>
            
            <div className="mt-8 p-6 rounded-lg bg-accent/20 border border-accent/30">
              <h5 className="text-white font-bold mb-2">Ready to Start?</h5>
              <p className="text-slate-300 text-sm mb-4">Get your free consultation today</p>
              <button className="w-full px-4 py-3 bg-accent text-secondary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>© 2024 All Paving. All rights reserved.</p>
            <p className="mt-1">
              Licensed and insured in Florida. License #CGC123456
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/90 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-secondary group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 