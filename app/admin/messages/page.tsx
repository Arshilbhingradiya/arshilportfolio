"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Clock, User, MessageSquare } from "lucide-react"

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  read: boolean
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contact-db")
      const data = await response.json()
      setMessages(data.messages || [])
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading messages...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
          <p className="text-muted-foreground">
            You have {messages.length} message{messages.length !== 1 ? "s" : ""}
          </p>
        </div>

        {messages.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">
                When visitors send messages through your contact form, they'll appear here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {messages.map((message) => (
              <Card key={message.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{message.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {message.email}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {formatDate(message.timestamp)}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    {!message.read && <Badge variant="default">New</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">SUBJECT</h4>
                      <p className="font-medium">{message.subject}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">MESSAGE</h4>
                      <p className="leading-relaxed whitespace-pre-wrap">{message.message}</p>
                    </div>
                    <div className="flex space-x-2 pt-4">
                      <Button asChild>
                        <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}>Reply via Email</a>
                      </Button>
                      <Button variant="outline">Mark as Read</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
