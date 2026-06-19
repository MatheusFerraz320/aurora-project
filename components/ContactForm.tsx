"use client"

import { useState } from "react"
import { Send, AlertTriangle } from "lucide-react"

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ""

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro("")
    setCarregando(true)

    if (!FORMSPREE_ENDPOINT) {
      setErro(
        "Formulário não configurado. Envie um e-mail para contato@exemplo.com."
      )
      setCarregando(false)
      return
    }

    try {
      const form = e.currentTarget
      const data = new FormData(form)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setEnviado(true)
        form.reset()
      } else {
        setErro("Erro ao enviar. Tente novamente ou use nosso e-mail.")
      }
    } catch {
      setErro("Erro de conexão. Tente novamente ou use nosso e-mail.")
    } finally {
      setCarregando(false)
    }
  }

  if (enviado) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Mensagem enviada com sucesso!
        </p>
        <p className="mt-2 text-sm text-green-600">
          Agradecemos seu contato. Responderemos em breve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div
        className={`
          flex items-start gap-3
          rounded-xl border
          border-red-200 bg-red-50
          p-4
        `}
      >
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-aurora-danger" />
        <div className="text-sm text-red-900">
          <p className="font-semibold">
            Este não é um canal de emergência ou denúncia.
          </p>
          <p className="mt-1">
            Em caso de perigo imediato, ligue{" "}
            <a href="tel:190" className="font-bold underline">190</a>. Para
            orientação, ligue{" "}
            <a href="tel:180" className="font-bold underline">180</a>.
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-aurora-text">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          className={`
            w-full rounded-xl border
            border-gray-200 bg-white px-4 py-3
            text-sm
            placeholder:text-gray-400
            focus:border-aurora-rose focus:outline-none
            focus:ring-2 focus:ring-aurora-rose/20
          `}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-aurora-text">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`
            w-full rounded-xl border
            border-gray-200 bg-white px-4 py-3
            text-sm
            placeholder:text-gray-400
            focus:border-aurora-rose focus:outline-none
            focus:ring-2 focus:ring-aurora-rose/20
          `}
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium text-aurora-text">
          Assunto
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          required
          className={`
            w-full rounded-xl border
            border-gray-200 bg-white px-4 py-3
            text-sm
            placeholder:text-gray-400
            focus:border-aurora-rose focus:outline-none
            focus:ring-2 focus:ring-aurora-rose/20
          `}
          placeholder="Parceria, imprensa, dúvidas institucionais"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-aurora-text">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className={`
            w-full rounded-xl border
            border-gray-200 bg-white px-4 py-3
            text-sm
            placeholder:text-gray-400
            focus:border-aurora-rose focus:outline-none
            focus:ring-2 focus:ring-aurora-rose/20
          `}
          placeholder="Sua mensagem (apenas para assuntos institucionais)"
        />
      </div>

      <button
        type="submit"
        disabled={carregando}
        className={`
          inline-flex items-center gap-2
          rounded-xl bg-aurora-rose
          px-6 py-3
          font-semibold text-white
          transition-all
          hover:bg-aurora-rose-light
          focus:outline-none focus:ring-2
          focus:ring-aurora-rose focus:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-60
        `}
      >
        <Send className="h-4 w-4" />
        {carregando ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {erro && (
        <p className="text-sm font-medium text-aurora-danger">{erro}</p>
      )}
    </form>
  )
}
