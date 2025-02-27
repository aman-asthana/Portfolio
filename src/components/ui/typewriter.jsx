import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "text-cyan-400",
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = Array.isArray(text) ? text : [text]

  useEffect(() => {
    let timeout

    const currentText = texts[currentTextIndex]

    if (initialDelay > 0 && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay)
      return
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        if (currentTextIndex === texts.length - 1 && !loop) return
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        timeout = setTimeout(() => {}, waitTime)
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, deleteSpeed)
      }
    } else {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, speed)
      } else if (texts.length > 1 || loop) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
          setCurrentIndex(0)
        }, waitTime)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, currentTextIndex, texts, speed, deleteSpeed, waitTime, loop, initialDelay])

  return (
    <span className={cn("inline-flex", className)}>
      {displayText}
      {showCursor && (!hideCursorOnType || displayText.length === 0) && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cursorClassName}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
} 