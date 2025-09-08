import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration, and analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack",
    },
    {
      title: "Restaurant Mobile App",
      description: "Cross-platform mobile app for restaurant ordering with real-time tracking and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile Development",
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with data visualization, reporting, and real-time metrics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization",
    },
    {
      title: "Social Media Platform",
      description: "A social networking platform with user profiles, posts, messaging, and content moderation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "GraphQL", "AWS", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Social Platform",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive content.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent projects and client work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
