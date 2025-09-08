import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Arshil Bhingradiya</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer & Freelancer helping businesses build amazing digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <Link href="portfolio">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="ghost" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          <div className="animate-bounce">
            <Link href="about">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
