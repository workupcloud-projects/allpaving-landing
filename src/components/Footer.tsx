import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center space-y-6">
          {/* Company Name and Licensing */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              All Paving, Inc.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
              Licensed & Insured U-22269, 17-3B-20871-X, 31362, MC1800090, 23233, C-11328, CDPR2307
            </p>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground sm:text-base">
              © 2025 All Paving, Inc. — South Florida Asphalt Paving & Sealcoating Company
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-1">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 sm:text-base"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 sm:text-base"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Media Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 sm:text-base">
              Connect with us:
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 