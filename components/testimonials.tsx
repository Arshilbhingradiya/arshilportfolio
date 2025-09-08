import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Alex delivered our MVP ahead of schedule and exceeded our expectations. His attention to detail and technical expertise made our launch a huge success.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, InnovateCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Working with Alex was a game-changer for our project. He understood our vision perfectly and brought it to life with clean, scalable code.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Founder, DesignStudio",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Alex's full-stack expertise helped us build a robust platform that handles thousands of users daily. Highly recommend his services!",
      rating: 5,
    },
    {
      name: "David Park",
      role: "CTO, GrowthLabs",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Professional, reliable, and incredibly skilled. Alex transformed our outdated system into a modern, efficient application.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director, BrandCo",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The website Alex built for us increased our conversion rate by 40%. His understanding of both design and development is impressive.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Entrepreneur",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Alex helped me turn my idea into reality. His guidance throughout the development process was invaluable for a first-time founder like me.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What my clients say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
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
