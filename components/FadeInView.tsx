"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.5,
}: FadeInViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
