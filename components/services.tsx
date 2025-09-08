import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Flutter for iOS and Android platforms.",
      features: ["Native Performance", "Cross-Platform", "App Store Ready"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions with Node.js, Python, and cloud services integration.",
      features: ["API Development", "Database Design", "Cloud Integration"],
    },
    {
      icon: Code,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment, handling both frontend and backend.",
      features: ["Complete Solutions", "Modern Stack", "Deployment Ready"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience through optimization.",
      features: ["Speed Improvements", "Code Optimization", "User Experience"],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your applications running smoothly.",
      features: ["24/7 Support", "Regular Updates", "Bug Fixes"],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
