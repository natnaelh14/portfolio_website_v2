"use client";

import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { ScrollAnimation } from "@/components/scroll-animation";
import { StaggerAnimation } from "@/components/stagger-animation";
import { NavLink } from "@/components/nav-link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavDropdown } from "@/components/nav-dropdown";
import { SingleTypewriter } from "@/components/single-typewriter";
import Image from "next/image";
import {
  backEndTech,
  frontEndTech,
  navigationLinks,
  otherTech,
  workExperience,
  education,
  projects,
} from "@/constants";
import { useEffect, useState } from "react";
import { LoadAnimation } from "@/components/LoadAnimation/load-animation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <LoadAnimation />;

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-hidden">
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-18 items-center justify-between">
          <Link href="/" className="font-mono text-lg">
            <Image src="/images/logo.png" alt="" height={75} width={75} />
          </Link>
          <nav className="hidden xl:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                number={link.number}
                label={link.label}
              />
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
                  <SingleTypewriter
                    text="NATNAEL HAILE"
                    className="text-foreground"
                  />
                </h1>
                <p className="font-mono text-xl text-muted-foreground tracking-wide">
                  FULL STACK SOFTWARE ENGINEER.
                </p>
              </div>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#about">About Me</Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/natnaelh14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/natnaelhaile/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://x.com/NatnaelH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:haile.natnael@natnaeldev.com">
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
                    <div className="font-mono text-sm text-primary">
                      02 // about me
                    </div>
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                      WHO I AM
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-center">
                    I am a Full-Stack Software Engineer with a Bachelor's Degree
                    and 3 years of professional development experience.
                    Proactive team player with great adaptability in dynamic
                    environments, and proven track record of delivering
                    products. Passionate, detail-oriented, and curious developer
                    leveraging professional and technical skills to solve
                    problems. I like to bring unique ideas to life using the
                    tools below.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation className="lg:w-1/2">
                <div className="flex items-center justify-center">
                  <div className="overflow-hidden rounded-2xl border bg-card/30 backdrop-blur-sm">
                    <img
                      src="/images/portrait.png"
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {frontEndTech.map((skill) => (
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {backEndTech.map((skill) => (
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
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {otherTech.map((skill) => (
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
                  <div className="font-mono text-sm text-primary">
                    03 // experience
                  </div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                    WHERE I'VE WORKED
                  </h2>
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
                    {workExperience.map((job, index) => {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                          <Card className="bg-[#1a1a1a] border-0">
                            <CardContent className="p-6">
                              <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                  <div className="flex items-center">
                                    <div>
                                      <h3 className="text-2xl font-semibold text-white">
                                        {job.title}
                                      </h3>
                                      <p className="text-[#e64861] text-lg">
                                        {job.company}
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm text-muted-foreground shrink-0 pt-2">
                                    {job.date}
                                  </span>
                                </div>
                                <ul className="space-y-4">
                                  {job.description?.map((item, index) => (
                                    <li
                                      key={index}
                                      className="text-[#888] pl-6 relative before:absolute before:left-0 before:top-[0.5em] before:h-2 before:w-2 before:rounded-full before:bg-primary/80 before:ring-[2px] before:ring-primary/20 before:transition-all hover:before:scale-125 hover:before:bg-primary"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </TabsContent>
                  <TabsContent value="education" className="mt-6 space-y-6">
                    {education.map((edu, index) => {
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                          <Card className="bg-[#1a1a1a] border-0">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                  <Avatar>
                                    <AvatarImage src={edu.logoUrl} />
                                    <AvatarFallback>CN</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-2xl font-semibold text-white">
                                      {edu.degree}
                                    </h3>
                                    <p className="text-[#e64861] text-lg">
                                      {edu.school}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-sm text-muted-foreground shrink-0 pt-2">
                                  {edu.graduation}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
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
                  <div className="font-mono text-sm text-primary">
                    04 // projects
                  </div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                    WHAT I'VE BUILT
                  </h2>
                  <p className="font-mono text-muted-foreground md:text-lg">
                    Check out some of my recent work
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
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
                  <div className="font-mono text-sm text-primary">
                    05 // contact
                  </div>
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
                    GET IN TOUCH
                  </h2>
                  <p className="font-mono text-muted-foreground md:text-lg">
                    Have a project in mind? Let's work together!
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid gap-8 lg:grid-cols-2">
                <ScrollAnimation>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold font-mono">
                        Contact Information
                      </h3>
                      <p className="text-muted-foreground">
                        Feel free to reach out through the contact form or
                        directly via email or phone.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="font-mono">
                          haile.natnael@natnaeldev.com
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-primary" />
                        <Link
                          href="https://github.com/natnaelh14"
                          className="font-mono hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/natnaelh14
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <Link
                          href="https://www.linkedin.com/in/natnaelhaile/"
                          className="font-mono hover:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.linkedin.com/in/natnaelhaile/
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
            © {new Date().getFullYear()} Natnael Haile. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/natnaelhaile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:haile.natnael@natnaeldev.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
