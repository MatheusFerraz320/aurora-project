"use client"

import { useEffect, useCallback, useState } from "react"
import { LogOut } from "lucide-react"

const SAFE_SITE = "https://www.google.com/search?q=clima+hoje"

export default function QuickExitButton() {
  const [exitCount, setExitCount] = useState(0)
  const [lastExitTime, setLastExitTime] = useState(0)

  const handleExit = useCallback(() => {
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

  return (
    <button
      onClick={handleExit}
      className={`
        fixed top-3 right-3 z-50
        flex items-center gap-2
        rounded-lg
        bg-aurora-danger px-4 py-2.5
        text-sm font-bold text-white shadow-lg
        transition-all duration-150
        hover:bg-red-700 focus:outline-none focus:ring-2
        focus:ring-aurora-danger focus:ring-offset-2
        lg:top-4 lg:right-4
      `}
      aria-label="Saída rápida — abre uma página segura"
      title="Clique ou pressione Esc 3 vezes para sair rapidamente"
    >
      <LogOut className="h-4 w-4" />
      <span>Saída Segura</span>
    </button>
  )
}
