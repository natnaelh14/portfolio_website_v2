"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  frontendGithub?: string
  backendGithub?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  frontendGithub,
  backendGithub,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="default" className="bg-secondary text-secondary-foreground font-medium">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                View Project
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>

            <div className="flex gap-2">
              {frontendGithub && (
                <Button asChild variant="outline" className="flex-1 gap-2">
                  <Link href={frontendGithub} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Frontend
                  </Link>
                </Button>
              )}
              {backendGithub && (
                <Button asChild variant="outline" className="flex-1 gap-2">
                  <Link href={backendGithub} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Backend
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

