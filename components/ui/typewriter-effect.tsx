"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  text: string | string[]
  speed?: number
  delay?: number
  loop?: boolean
  cursor?: boolean
  className?: string
  onComplete?: () => void
}

export function Typewriter({
  text,
  speed = 50,
  delay = 1000,
  loop = false,
  cursor = true,
  className,
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const textArray = Array.isArray(text) ? text : [text]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        if (loop) {
          setIsTyping(true)
          setCurrentIndex(0)
          setDisplayText("")
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
        }
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (isTyping) {
      const currentText = textArray[currentTextIndex]
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, speed)
      } else {
        setIsTyping(false)
        setIsPaused(true)
        if (onComplete && !loop) {
          onComplete()
        }
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isTyping, isPaused, loop, onComplete, speed, text, textArray, currentTextIndex])

  return (
    <p className={cn("inline-block", className)}>
      {displayText}
      {cursor && isTyping && (
        <span className="ml-0.5 inline-block h-4 w-0.5 animate-blink bg-current align-text-bottom" />
      )}
    </p>
  )
}

