import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <Button 
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
      >
        <a href="tel:954-688-9600">
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </a>
      </Button>
    </div>
  )
} 