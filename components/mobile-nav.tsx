"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

interface MobileNavProps {
  links: {
    href: string
    label: string
    number: string
  }[]
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-mono text-lg">
            <span className="text-primary">Menu</span>
            <span className="text-muted-foreground">._</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-6">
          {links.map(({ href, label, number }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="group flex items-center text-base">
              <span className="font-mono text-sm text-primary mr-2">{number}</span>
              <span className="font-mono text-muted-foreground opacity-50 group-hover:opacity-100">// </span>
              <span className="font-mono text-muted-foreground group-hover:text-foreground">{label}</span>
            </Link>
          ))}
          <Button variant="outline" size="sm" className="gap-1 w-full" asChild>
            <Link href="/resume.pdf" download>
              Resume
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

