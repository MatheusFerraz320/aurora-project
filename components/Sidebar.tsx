"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Info,
  Search,
  Heart,
  Share2,
  BookOpen,
  Newspaper,
  FileText,
  Mail,
  Menu,
  X,
  Phone,
  LogOut,
  ChevronLeft,
  Shield,
} from "lucide-react"

const navLinks = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: Info },
  { href: "/identificar", label: "Identificar", icon: Search },
  { href: "/ajuda", label: "Ajuda", icon: Heart },
  { href: "/rede-de-apoio", label: "Rede de Apoio", icon: Share2 },
  { href: "/recursos", label: "Recursos", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/sobre-o-projeto", label: "O Projeto", icon: FileText },
  { href: "/contato", label: "Contato", icon: Mail },
]

const SAFE_SITE = "https://www.google.com/search?q=clima+hoje"

export default function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [exitCount, setExitCount] = useState(0)
  const [lastExitTime, setLastExitTime] = useState(0)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleExit = useCallback(() => {
    try {
      sessionStorage.clear()
    } catch {}
    window.location.replace(SAFE_SITE)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const now = Date.now()
        if (now - lastExitTime < 1500) {
          setExitCount((prev) => prev + 1)
        } else {
          setExitCount(1)
        }
        setLastExitTime(now)
        if (exitCount >= 2) {
          handleExit()
          setExitCount(0)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [exitCount, lastExitTime, handleExit])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-3 z-40 rounded-xl bg-aurora-rose/90 p-2.5 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-aurora-rose md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 hidden w-60 flex-col
          bg-gradient-to-b from-aurora-blush via-aurora-rose-light to-aurora-rose-deep
          shadow-[2px_0_20px_rgba(212,74,122,0.12)]
          md:flex
        `}
      >
        <div className="flex items-center gap-2.5 border-b border-white/20 px-5 py-5">
          <AuroraLogoSmall />
          <div>
            <span
              className="block text-base font-bold text-aurora-burgundy"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Aurora
            </span>
            <span className="text-[10px] font-medium text-aurora-text-light/70">
              Conscientização
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative flex items-center gap-3 rounded-xl px-3 py-2.5
                  text-sm font-medium transition-all duration-200
                  ${
                    active
                      ? "bg-white/70 text-aurora-burgundy shadow-sm"
                      : "text-aurora-text-light/80 hover:bg-white/40 hover:text-aurora-text"
                  }
                `}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{link.label}</span>
                {active && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute right-2 h-1.5 w-1.5 rounded-full bg-aurora-rose"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-white/20 px-4 py-4">
          <div className="mb-3 rounded-xl bg-white/60 px-3 py-2.5 backdrop-blur-sm">
            <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-aurora-crimson">
              <Shield className="h-3 w-3" />
              Emergência
            </p>
            <div className="space-y-1">
              {[
                { num: "180", label: "Central da Mulher" },
                { num: "190", label: "Polícia" },
              ].map((c) => (
                <a
                  key={c.num}
                  href={`tel:${c.num}`}
                  className="flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-bold text-aurora-text-light transition-colors hover:bg-white/50 hover:text-aurora-rose"
                >
                  <Phone className="h-3 w-3" />
                  {c.num} — {c.label}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={handleExit}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-aurora-danger/90 px-3 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-aurora-danger"
            title="Clique ou pressione Esc 3 vezes para sair rapidamente"
          >
            <LogOut className="h-4 w-4" />
            Saída Segura
          </button>
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-gradient-to-b from-aurora-blush via-aurora-rose-light to-aurora-rose-deep shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/20 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <AuroraLogoSmall />
                  <span className="text-lg font-bold text-aurora-burgundy" style={{ fontFamily: "var(--font-serif)" }}>
                    Aurora
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-1.5 text-aurora-text-light/70 transition-colors hover:bg-white/40 hover:text-aurora-text"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-0.5 overflow-y-auto px-4 py-4">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex items-center gap-3 rounded-xl px-3 py-3
                        text-sm font-medium transition-all duration-200
                        ${
                          active
                            ? "bg-white/70 text-aurora-burgundy shadow-sm"
                            : "text-aurora-text-light/80 hover:bg-white/40 hover:text-aurora-text"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="border-t border-white/20 px-4 py-4">
                <div className="mb-3 rounded-xl bg-white/60 px-3 py-2.5">
                  <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-aurora-crimson">
                    <Shield className="h-3 w-3" />
                    Emergência
                  </p>
                  {[
                    { num: "180", label: "Central da Mulher" },
                    { num: "190", label: "Polícia" },
                  ].map((c) => (
                    <a
                      key={c.num}
                      href={`tel:${c.num}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-bold text-aurora-text-light transition-colors hover:bg-white/50 hover:text-aurora-rose"
                    >
                      <Phone className="h-3 w-3" />
                      {c.num} — {c.label}
                    </a>
                  ))}
                </div>
                <button
                  onClick={handleExit}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-aurora-danger/90 px-3 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-aurora-danger"
                >
                  <LogOut className="h-4 w-4" />
                  Saída Segura
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function AuroraLogoSmall() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="side-logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#D44A7A" />
          <stop offset="100%" stopColor="#8B2252" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#side-logo-grad)" opacity="0.15" />
      <path
        d="M16 6c-4.42 0-8 3.58-8 8 0 5.33 8 13.33 8 13.33s8-8 8-13.33c0-4.42-3.58-8-8-8zm0 11.33c-1.84 0-3.33-1.49-3.33-3.33s1.49-3.33 3.33-3.33 3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33z"
        fill="#D44A7A"
      />
      <path
        d="M10 14l4-4m4 4l4-4m-8 8l4-4"
        stroke="#8B2252"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
