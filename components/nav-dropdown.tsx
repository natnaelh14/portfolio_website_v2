"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

interface NavDropdownProps {
  links: {
    href: string
    label: string
    number: string
  }[]
}

export function NavDropdown({ links }: NavDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border"
        sideOffset={8}
      >
        {links.map(({ href, label, number }) => (
          <DropdownMenuItem key={href} asChild className="focus:bg-muted">
            <Link href={href} className="flex items-center px-3 py-2 text-sm cursor-pointer">
              <span className="font-mono text-primary mr-2">{number}</span>
              <span className="font-mono text-muted-foreground opacity-50">//</span>
              <span className="font-mono ml-2 text-muted-foreground hover:text-foreground">{label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

