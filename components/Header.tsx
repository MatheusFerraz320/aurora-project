"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

const primaryLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/identificar", label: "Identificar" },
  { href: "/ajuda", label: "Ajuda" },
]

const moreLinks = [
  { href: "/rede-de-apoio", label: "Rede de Apoio" },
  { href: "/recursos", label: "Recursos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre-o-projeto", label: "O Projeto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const pathname = usePathname()
  const moreRef = useRef<HTMLDivElement>(null)
  const prevPath = useRef(pathname)

  if (pathname !== prevPath.current) {
    prevPath.current = pathname
    setOpen(false)
    setMoreOpen(false)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`
        sticky top-0 z-40
        border-b border-aurora-lilac/10
        bg-white/70 backdrop-blur-xl
      `}
    >
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-aurora-teal via-aurora-lilac to-aurora-gold"
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <AuroraLogo />
          <span
            className="text-lg font-semibold tracking-tight text-aurora-text"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Aurora
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Navegação principal">
          {primaryLinks.map((link) => (
            <NavLink key={link.href} href={link.href} active={isActive(link.href)}>
              {link.label}
            </NavLink>
          ))}

          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`
                flex items-center gap-1 rounded-lg px-3 py-2
                text-sm font-medium transition-colors
                text-aurora-text-light
                hover:bg-aurora-bg-alt hover:text-aurora-teal
              `}
            >
              Mais
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className={`
                    absolute right-0 top-full mt-1
                    w-48 rounded-xl border border-aurora-lilac/10
                    bg-white shadow-lg
                  `}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`
                        block px-4 py-2.5 text-sm transition-colors
                        first:rounded-t-xl last:rounded-b-xl
                        ${
                          isActive(link.href)
                            ? "bg-aurora-lilac/10 font-medium text-aurora-lilac-dark"
                            : "text-aurora-text-light hover:bg-aurora-bg-alt hover:text-aurora-teal"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className={`
            rounded-lg p-2
            text-aurora-text-light
            transition-colors
            hover:bg-aurora-bg-alt hover:text-aurora-teal
            focus:outline-none focus:ring-2 focus:ring-aurora-lilac/50
            md:hidden
          `}
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className={`
                fixed inset-y-0 right-0 z-50
                w-72 border-l border-aurora-lilac/10
                bg-white shadow-2xl
                md:hidden
              `}
              aria-label="Navegação móvel"
            >
              <div className="flex items-center justify-between border-b border-aurora-lilac/10 px-4 py-4">
                <span
                  className="text-lg font-semibold text-aurora-text"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Aurora
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1.5 text-aurora-text-light transition-colors hover:bg-aurora-bg-alt hover:text-aurora-teal"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-3 py-4">
                <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-wider text-gray-400">
                  Navegação
                </p>
                {[...primaryLinks, ...moreLinks].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`
                      block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                      ${
                        isActive(link.href)
                          ? "bg-aurora-lilac/10 text-aurora-lilac-dark"
                          : "text-aurora-text-light hover:bg-aurora-bg-alt hover:text-aurora-teal"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`
        relative rounded-lg px-3 py-2
        text-sm font-medium transition-colors
        ${
          active
            ? "text-aurora-teal"
            : "text-aurora-text-light hover:bg-aurora-bg-alt hover:text-aurora-teal"
        }
      `}
    >
      {children}
      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-aurora-teal"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  )
}

function AuroraLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aurora-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#1A6B75" />
          <stop offset="50%" stopColor="#7C5FBF" />
          <stop offset="100%" stopColor="#E8954A" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#aurora-grad)" opacity="0.15" />
      <path
        d="M16 6c-4.42 0-8 3.58-8 8 0 5.33 8 13.33 8 13.33s8-8 8-13.33c0-4.42-3.58-8-8-8zm0 11.33c-1.84 0-3.33-1.49-3.33-3.33s1.49-3.33 3.33-3.33 3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33z"
        fill="#E8954A"
      />
      <path
        d="M10 14l4-4m4 4l4-4m-8 8l4-4"
        stroke="#1A6B75"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
