"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ImpactCardProps {
  value: string
  label: string
  subtitle?: string
  fonte?: string
  icon?: ReactNode
  delay?: number
}

export default function ImpactCard({
  value,
  label,
  subtitle,
  fonte,
  icon,
  delay = 0,
}: ImpactCardProps) {
  const [counted, setCounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCounted(true), delay * 1000)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`
        group relative
        flex flex-col items-center gap-3
        rounded-2xl border border-aurora-rose-light/50
        bg-white p-6 text-center
        shadow-[0_4px_20px_rgba(212,74,122,0.06)]
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(212,74,122,0.12)]
        hover:border-aurora-rose-light
        ${counted ? "animate-fade-in" : "opacity-0"}
      `}
    >
      <div
        className={`
          flex h-12 w-12 items-center justify-center rounded-xl
          bg-gradient-to-br from-aurora-blush to-aurora-rose-light
          text-aurora-rose
          transition-all duration-300
          group-hover:scale-110 group-hover:from-aurora-rose-light group-hover:to-aurora-rose
          group-hover:text-white
        `}
      >
        {icon}
      </div>

      <span
        className={`
          text-3xl font-bold tracking-tight
          bg-gradient-to-r from-aurora-burgundy to-aurora-rose
          bg-clip-text text-transparent
          ${counted ? "animate-count" : ""}
        `}
      >
        {counted ? value : "—"}
      </span>

      <span className="text-sm font-medium leading-snug text-aurora-text-light">
        {label}
      </span>

      {subtitle && (
        <span className="text-xs text-aurora-text-muted">{subtitle}</span>
      )}

      {fonte && (
        <span className="mt-auto text-[10px] leading-tight text-aurora-text-muted/60">
          Fonte: {fonte}
        </span>
      )}

      <div
        className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-aurora-rose-light to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </div>
  )
}
