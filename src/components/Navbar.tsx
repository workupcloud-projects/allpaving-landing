import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { 
    name: "Services", 
    href: "#services",
    dropdown: [
      "Asphalt Paving",
      "Concrete Services", 
      "Sealcoating & Striping",
      "ADA Compliance",
      "Drainage Solutions",
      "Parking Lot Design"
    ]
  },
  { name: "Locations", href: "#locations" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-xl font-bold text-primary sm:text-2xl">All Paving</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem} className="cursor-pointer">
                        <a href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                          {subItem}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <a href="tel:954-688-9600">
                <Phone className="mr-2 h-4 w-4" />
                Get a Quote
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-4">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <div className="text-foreground font-medium text-lg mb-2">{item.name}</div>
                          <div className="ml-4 space-y-2">
                            {item.dropdown.map((subItem) => (
                              <a
                                key={subItem}
                                href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-border">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                      <a href="tel:954-688-9600">
                        <Phone className="mr-2 h-4 w-4" />
                        Get a Quote
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
} 