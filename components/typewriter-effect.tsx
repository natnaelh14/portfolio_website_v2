"use client"

import { useEffect, useRef } from "react"
import Typewriter from "typewriter-effect/dist/core"

interface TypewriterEffectProps {
  text: string[]
}

export function TypewriterEffect({ text }: TypewriterEffectProps) {
  const typewriterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        strings: text,
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      })
    }
  }, [text])

  return <div ref={typewriterRef} className="text-primary" />
}

