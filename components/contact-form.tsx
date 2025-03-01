"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="font-mono">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="font-mono">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formState.email}
            onChange={handleChange}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject" className="font-mono">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formState.subject}
            onChange={handleChange}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="font-mono">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formState.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>
      </div>

      <div>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-md bg-primary/10 backdrop-blur-sm text-primary font-mono text-center"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        ) : (
          <Button type="submit" className="w-full font-mono" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        )}
      </div>
    </form>
  )
}

