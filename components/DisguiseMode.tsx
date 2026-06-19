"use client"

import { useState, useEffect, useCallback } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function DisguiseMode({ children }: { children: React.ReactNode }) {
  const [disguised, setDisguised] = useState(false)

  const toggle = useCallback(() => {
    setDisguised((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" && e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggle])

  if (disguised) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 to-blue-50 p-8">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-400 p-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-700">Previsão do Tempo</h1>
            <p className="text-sm text-gray-500">Atualizado há 5 minutos</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-4 text-center">
              <div className="text-5xl font-light text-gray-700">23°</div>
              <p className="text-sm text-gray-500">Sensação: 21°</p>
              <p className="text-sm font-medium text-gray-600">Nublado com aberturas de sol</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                <div key={day} className="rounded-xl bg-gray-50 p-2">
                  <p className="font-medium text-gray-600">{day}</p>
                  <p className="text-gray-400">22° / 18°</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={toggle}
            className="mt-4 w-full rounded-xl bg-gray-200/70 px-4 py-2.5 text-sm font-medium text-gray-500 backdrop-blur-sm transition-colors hover:bg-gray-200"
            title="Ctrl+Shift+D para sair do modo disfarce"
          >
            Modo seguro ativado — clique para sair
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-white/80 p-3 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg"
        title="Ativar modo disfarce (Ctrl+Shift+D)"
        aria-label="Ativar modo disfarce"
      >
        <EyeOff className="h-4 w-4 text-aurora-text-muted" />
      </button>
      {children}
    </>
  )
}
