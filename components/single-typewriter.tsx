"use client"

import { useEffect, useRef } from "react"
import Typewriter from "typewriter-effect/dist/core"

interface SingleTypewriterProps {
  text: string
  className?: string
}

export function SingleTypewriter({ text, className = "" }: SingleTypewriterProps) {
  const typewriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        delay: 75,
        cursor: "_",
      })

      typewriter.typeString(text).start()
    }
  }, [text])

  return <div ref={typewriterRef} className={className} />
}

