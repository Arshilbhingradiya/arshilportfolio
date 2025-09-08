import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export function About() {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Projects Completed", value: "100+" },
    { icon: MapPin, label: "Countries Served", value: "15+" },
  ]

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "Figma",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey from corporate developer to successful freelancer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-8 flex items-center justify-center">
                <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Freelancing Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my career as a software engineer at a Fortune 500 company, where I honed my skills in full-stack
                development. After 3 years, I took the leap into freelancing to have more creative freedom and work
                directly with clients to solve their unique challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since going independent, I've helped startups launch their MVPs, assisted established businesses
                modernize their tech stack, and collaborated with agencies on complex projects. My focus is on
                delivering high-quality, scalable solutions that drive real business results.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
