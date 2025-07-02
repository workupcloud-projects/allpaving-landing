import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building } from "lucide-react"

export function ContactForm() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["(954) 688-9600", "1-888-439-ROAD"],
      bgColor: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@allpaving.com", "quotes@allpaving.com"],
      bgColor: "bg-accent"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["23123 FL-7 #250", "Boca Raton, FL 33428"],
      bgColor: "bg-secondary"
    }
  ]

  return (
    <section className="py-24 px-4 bg-[var(--ap-bg-dark)] relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-lg blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-lg blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 backdrop-blur border border-accent/20 text-sm text-accent mb-8">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Let's Discuss
            <br />
            <span className="text-accent">
              Your Project
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with our experts for a 
            <span className="text-primary font-semibold"> free consultation</span> and personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our team is ready to help you with your paving project. Reach out through any of these channels.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group p-6 rounded-lg bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${info.bgColor} p-3 group-hover:scale-110 transition-transform shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="p-6 rounded-lg bg-primary/10 backdrop-blur border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-accent">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-accent">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur border-white/10 shadow-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary p-2">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Request Your Free Quote
                </CardTitle>
                <p className="text-slate-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white flex items-center gap-2">
                      <Building className="w-4 h-4 text-accent" />
                      Company (Optional)
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="Your company name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-accent focus:ring-accent/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    Project Details *
                  </Label>
                  <Textarea 
                    id="project" 
                    placeholder="Tell us about your paving project, including location, scope, timeline, and any specific requirements..."
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-accent focus:ring-accent/20 resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-slate-400 text-sm text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-slate-300 mb-6">
              For urgent matters or immediate quotes, call our main line directly.
            </p>
            <a 
              href="tel:954-688-9600" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (954) 688-9600
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 