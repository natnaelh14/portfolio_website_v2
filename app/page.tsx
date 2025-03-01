"use client"

import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { ScrollAnimation } from "@/components/scroll-animation"
import { StaggerAnimation } from "@/components/stagger-animation"
import { NavLink } from "@/components/nav-link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NavDropdown } from "@/components/nav-dropdown"
import { SingleTypewriter } from "@/components/single-typewriter"

const navigationLinks = [
  { href: "#home", label: "home", number: "01" },
  { href: "#about", label: "about", number: "02" },
  { href: "#experience", label: "experience", number: "03" },
  { href: "#projects", label: "projects", number: "04" },
  { href: "#contact", label: "contact", number: "05" },
]

const skills = {
  frontend: ["HTML5", "CSS3", "Styled Components", "React", "TypeScript"],
  backend: ["JavaScript", "Redux"],
  other: ["Tailwind", "jQuery", "Next.js"],
}

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-lg">
            <span className="text-primary">John</span>
            <span className="text-muted-foreground">Doe</span>
            <span className="text-primary">._</span>
          </Link>
          <nav className="hidden xl:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href} number={link.number} label={link.label} />
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <Link href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </Button>
            <NavDropdown links={navigationLinks} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[64rem] space-y-8"
            >
              <div className="space-y-4">
                <h1 className="font-heading text-7xl sm:text-8xl font-bold tracking-tight">
                  <SingleTypewriter text="JOHN DOE" className="text-foreground" />
                </h1>
                <p className="font-mono text-xl text-muted-foreground tracking-wide">
                  SOFTWARE ENGINEER, FRONT END & FULL STACK DEVELOPER.
                </p>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:email@example.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-[64rem] flex flex-col lg:flex-row items-center gap-8">
              <ScrollAnimation className="lg:w-1/2">
                <div className="space-y-4">
                  <div className="space-y-2 text-center">
                    <div className="font-mono text-sm text-primary">02 // about me</div>
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">WHO I AM</h2>
                  </div>
                  <p className="text-muted-foreground">
                    I'm a passionate web developer with a focus on creating beautiful, functional, and accessible
                    websites. With over 5 years of experience in the industry, I've worked on a variety of projects from
                    small business websites to large-scale web applications.
                  </p>
                  <p className="text-muted-foreground">
                    My expertise includes front-end development with React, Next.js, and TypeScript, as well as back-end
                    development with Node.js and Express. I'm always eager to learn new technologies and improve my
                    skills.
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
                    kitchen.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation className="lg:w-1/2">
                <div className="flex items-center justify-center">
                  <div className="overflow-hidden rounded-xl border bg-card/30 backdrop-blur-sm">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Profile"
                      className="aspect-square object-cover transition-all hover:scale-105"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="container relative mt-24">
            <div className="mx-auto max-w-[64rem]">
              <ScrollAnimation>
                <Tabs defaultValue="frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="frontend" className="font-mono">
                      Front-End
                    </TabsTrigger>
                    <TabsTrigger value="backend" className="font-mono">
                      Back-End
                    </TabsTrigger>
                    <TabsTrigger value="other" className="font-mono">
                      Other Tech
                    </TabsTrigger>
                  </TabsList>
                  <div className="mt-8">
                    <TabsContent value="frontend" className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.frontend.map((skill) => (
                          <div
                            key={skill}
                            className="p-4 text-center rounded-md bg-gradient-to-br from-card/30 via-card/30 to-secondary/5 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(249,191,63,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="backend" className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.backend.map((skill) => (
                          <div
                            key={skill}
                            className="p-4 text-center rounded-md bg-gradient-to-br from-card/30 via-card/30 to-secondary/5 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(249,191,63,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="other" className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.other.map((skill) => (
                          <div
                            key={skill}
                            className="p-4 text-center rounded-md bg-gradient-to-br from-card/30 via-card/30 to-secondary/5 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(249,191,63,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section id="experience" className="relative py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-[64rem] space-y-8">
              <ScrollAnimation>
                <div className="space-y-2 text-center">
                  <div className="font-mono text-sm text-primary">03 // experience</div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">WHERE I'VE WORKED</h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation>
                <Tabs defaultValue="experience" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="experience" className="font-mono">
                      Work Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="font-mono">
                      Education
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="experience" className="mt-6 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="bg-[#1a1a1a] border-0">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">Senior Frontend Developer</h3>
                                  <p className="text-[#e64861] text-lg">Tech Innovations Inc.</p>
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground shrink-0">2021 - Present</span>
                            </div>
                            <ul className="space-y-2">
                              {[
                                "Led the development of the company's flagship web application using Next.js and TypeScript",
                                "Implemented CI/CD pipelines using GitHub Actions and Vercel",
                                "Mentored junior developers and conducted code reviews",
                                "Reduced page load times by 40% through performance optimizations",
                              ].map((item, index) => (
                                <li key={index} className="text-[#888]">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Card className="bg-[#1a1a1a] border-0">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">Frontend Developer</h3>
                                  <p className="text-[#e64861] text-lg">Web Solutions Co.</p>
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground shrink-0">2018 - 2021</span>
                            </div>
                            <ul className="space-y-2">
                              {[
                                "Developed responsive websites for clients across various industries",
                                "Collaborated with designers to implement pixel-perfect UI components",
                                "Built reusable code and libraries for future use",
                                "Optimized applications for maximum speed and scalability",
                              ].map((item, index) => (
                                <li key={index} className="text-[#888]">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="education" className="mt-6 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="bg-[#1a1a1a] border-0">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">Master of Computer Science</h3>
                                  <p className="text-[#e64861] text-lg">University of Technology</p>
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground shrink-0">2016 - 2018</span>
                            </div>
                            <p className="text-[#888]">
                              Specialized in Web Technologies and Human-Computer Interaction. Thesis: "Improving Web
                              Accessibility Through Automated Testing"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <Card className="bg-[#1a1a1a] border-0">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <div>
                                  <h3 className="text-2xl font-semibold text-white">
                                    Bachelor of Science in Computer Science
                                  </h3>
                                  <p className="text-[#e64861] text-lg">State University</p>
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground shrink-0">2012 - 2016</span>
                            </div>
                            <p className="text-[#888]">
                              Graduated with honors. Participated in the Web Development Club and contributed to
                              open-source projects.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section id="projects" className="relative py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-[64rem] space-y-8">
              <ScrollAnimation>
                <div className="space-y-2 text-center">
                  <div className="font-mono text-sm text-primary">04 // projects</div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">WHAT I'VE BUILT</h2>
                  <p className="font-mono text-muted-foreground md:text-lg">Check out some of my recent work</p>
                </div>
              </ScrollAnimation>

              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "E-commerce Platform",
                    description:
                      "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
                    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
                    image: "/placeholder.svg?height=300&width=400",
                    link: "#",
                    frontendGithub: "https://github.com/username/ecommerce-frontend",
                    backendGithub: "https://github.com/username/ecommerce-backend",
                  },
                  {
                    title: "Task Management App",
                    description: "A collaborative task management application with real-time updates using WebSockets.",
                    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                    image: "/placeholder.svg?height=300&width=400",
                    link: "#",
                    frontendGithub: "https://github.com/username/task-manager-frontend",
                    backendGithub: "https://github.com/username/task-manager-backend",
                  },
                ].map((project, index) => (
                  <StaggerAnimation key={project.title} delay={index * 0.1}>
                    <ProjectCard {...project} />
                  </StaggerAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-[64rem] space-y-8">
              <ScrollAnimation>
                <div className="space-y-2 text-center">
                  <div className="font-mono text-sm text-primary">05 // contact</div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">GET IN TOUCH</h2>
                  <p className="font-mono text-muted-foreground md:text-lg">
                    Have a project in mind? Let's work together!
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid gap-8 lg:grid-cols-2">
                <ScrollAnimation>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold font-mono">Contact Information</h3>
                      <p className="text-muted-foreground">
                        Feel free to reach out through the contact form or directly via email or phone.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-mono">email@example.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-primary" />
                        <Link
                          href="https://github.com"
                          className="font-mono hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/username
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <Link
                          href="https://linkedin.com"
                          className="font-mono hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          linkedin.com/in/username
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation>
                  <Card className="bg-card/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <ContactForm />
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm font-mono leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

