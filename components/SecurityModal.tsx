"use client"

import { useState, useEffect, useCallback, ReactNode } from "react"
import { Shield, X } from "lucide-react"

interface SecurityModalProps {
  children: ReactNode
}

export default function SecurityModal({ children }: SecurityModalProps) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [open, close])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <span onClick={() => setOpen(true)}>{children}</span>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Dicas de navegação segura"
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />
          <div
            className={`
              relative z-10 max-w-lg
              rounded-2xl bg-white p-6
              shadow-2xl
            `}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-aurora-rose">
                <Shield className="h-5 w-5" />
                Navegação Segura
              </h2>
              <button
                onClick={close}
                className={`
                  rounded-lg p-1.5
                  text-gray-400
                  transition-colors
                  hover:bg-gray-100 hover:text-gray-600
                  focus:outline-none focus:ring-2 focus:ring-aurora-lilac/50
                `}
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-aurora-text-light">
              <p>
                Sabemos que acessar informações sobre violência doméstica pode
                colocar você em risco se alguém monitora seu dispositivo. Aqui
                estão algumas recomendações:
              </p>

              <div>
                <h3 className="mb-1.5 font-semibold text-aurora-text">
                  Modo Anônimo / Privado
                </h3>
                <p>
                  Navegar em modo anônimo (Chrome) ou privado (Firefox, Edge)
                  impede que o histórico, cookies e dados de formulários sejam
                  salvos no seu dispositivo.
                </p>
              </div>

              <div>
                <h3 className="mb-1.5 font-semibold text-aurora-text">
                  Botão de Saída Segura
                </h3>
                <p>
                  Use o botão &ldquo;Saída Segura&rdquo; (canto superior direito)
                  para trocar instantaneamente esta aba por uma página de clima.
                  Você também pode pressionar a tecla <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs">Esc</kbd> três vezes rapidamente.
                </p>
              </div>

              <div>
                <h3 className="mb-1.5 font-semibold text-aurora-text">
                  Limpar Histórico Recente
                </h3>
                <p>
                  Após acessar nosso site, você pode limpar o histórico recente
                  do navegador (geralmente em Histórico &rarr; Limpar dados de
                  navegação).
                </p>
              </div>

              <div
                className={`
                  rounded-xl border
                  border-amber-200 bg-amber-50
                  p-3 text-xs text-amber-900
                `}
              >
                <strong>Lembre-se:</strong> este site não controla o histórico
                do seu navegador. As dicas acima são práticas recomendadas, mas
                a segurança do seu dispositivo depende do seu ambiente.
              </div>
            </div>

            <button
              onClick={close}
              className={`
                mt-5 w-full rounded-xl
                bg-aurora-rose py-2.5
                text-sm font-semibold text-white
                transition-colors
                hover:bg-aurora-rose-light
                focus:outline-none focus:ring-2
                focus:ring-aurora-rose focus:ring-offset-2
              `}
            >
              Entendi, fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
