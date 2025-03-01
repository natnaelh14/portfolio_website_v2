"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface NavLinkProps {
  href: string
  number: string
  label: string
  className?: string
}

export function NavLink({ href, number, label, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center space-x-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      <span className="text-primary">{number}</span>
      <span className="opacity-50 group-hover:opacity-100">{"// "}</span>
      <span>{label}</span>
      <motion.span
        className="absolute -bottom-1 left-0 h-px w-0 bg-primary"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  )
}

