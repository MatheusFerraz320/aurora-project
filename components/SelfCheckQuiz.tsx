"use client"

import { useState } from "react"

const perguntas = [
  {
    id: 1,
    texto: "Você sente medo com frequência perto do(a) seu/sua parceiro(a)?",
  },
  {
    id: 2,
    texto: "Você já foi humilhada(o), xingada(o) ou menosprezada(o) em público ou em particular?",
  },
  {
    id: 3,
    texto: "Já foi empurrada(o), sacudida(o) ou agredida(o) fisicamente?",
  },
  {
    id: 4,
    texto: "Você é impedida(o) de trabalhar, estudar ou sair com amigos e familiares?",
  },
  {
    id: 5,
    texto: "Seu/Sua parceiro(a) controla seu dinheiro ou impede que você tenha acesso a recursos financeiros?",
  },
  {
    id: 6,
    texto: "Você já foi forçada(o) a ter relações sexuais contra sua vontade?",
  },
  {
    id: 7,
    texto: "Seu/Sua parceiro(a) ameaça você, seus familiares ou seus animais de estimação?",
  },
  {
    id: 8,
    texto: "Você já teve celular, documentos ou objetos pessoais danificados ou tomados?",
  },
  {
    id: 9,
    texto: "Você se sente isolada(o) de amigos e familiares por influência do(a) seu/sua parceiro(a)?",
  },
  {
    id: 10,
    texto: "Você sente que anda 'pisando em ovos' para evitar conflitos?",
  },
]

interface Resultado {
  sim: number
  total: number
}

export default function SelfCheckQuiz() {
  const [respostas, setRespostas] = useState<Record<number, boolean>>({})
  const [resultado, setResultado] = useState<Resultado | null>(null)

  const alternarResposta = (id: number, valor: boolean) => {
    setRespostas((prev) => ({ ...prev, [id]: valor }))
    setResultado(null)
  }

  const calcular = () => {
    const sim = Object.values(respostas).filter(Boolean).length
    setResultado({ sim, total: perguntas.length })
  }

  const respondidas = Object.keys(respostas).length
  const podeCalcular = respondidas === perguntas.length

  const reiniciar = () => {
    setRespostas({})
    setResultado(null)
  }

  const getNivel = (sim: number, total: number) => {
    const pct = sim / total
    if (pct < 0.2) return { cor: "text-emerald-600", nivel: "Baixo" }
    if (pct < 0.4) return { cor: "text-amber-600", nivel: "Moderado" }
    if (pct < 0.6) return { cor: "text-orange-600", nivel: "Preocupante" }
    return { cor: "text-aurora-danger", nivel: "Sinais de alerta importantes" }
  }

  const nivel = resultado ? getNivel(resultado.sim, resultado.total) : null

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>Atenção:</strong> esta checklist ajuda a reconhecer sinais,
          mas não substitui atendimento profissional. Nenhuma resposta é salva
          ou armazenada.
        </p>
      </div>

      <div className="space-y-3">
        {perguntas.map((p, idx) => (
          <div
            key={p.id}
            className="rounded-xl border border-aurora-lilac/10 bg-white p-4"
          >
            <p className="mb-2.5 text-sm font-medium text-aurora-text">
              <span className="text-aurora-lilac">{idx + 1}.</span>{" "}
              {p.texto}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => alternarResposta(p.id, true)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                  respostas[p.id] === true
                    ? "bg-aurora-teal text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Sim
              </button>
              <button
                onClick={() => alternarResposta(p.id, false)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                  respostas[p.id] === false
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Não
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={calcular}
          disabled={!podeCalcular}
          className={`rounded-xl px-6 py-3 font-semibold text-white transition-all ${
            podeCalcular
              ? "bg-aurora-lilac hover:bg-aurora-lilac-light focus:outline-none focus:ring-2 focus:ring-aurora-lilac focus:ring-offset-2"
              : "cursor-not-allowed bg-gray-300"
          }`}
        >
          Ver Resultado
        </button>
        <button
          onClick={reiniciar}
          className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-aurora-text-light transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-aurora-lilac/50"
        >
          Reiniciar
        </button>
      </div>

      {resultado && nivel && (
        <div
          className={`rounded-2xl border p-6 ${
            resultado.sim >= 6
              ? "border-red-200 bg-red-50"
              : resultado.sim >= 3
                ? "border-amber-200 bg-amber-50"
                : "border-emerald-200 bg-emerald-50"
          }`}
        >
          <p className={`text-lg font-bold ${nivel.cor}`}>
            {nivel.nivel}
          </p>
          <p className="mt-1 text-sm text-aurora-text-light">
            Você respondeu &quot;Sim&quot; para{" "}
            <strong>
              {resultado.sim} de {resultado.total}
            </strong>{" "}
            perguntas.
          </p>
          {resultado.sim >= 3 && (
            <div className="mt-3 space-y-1">
              <p className="text-sm font-medium text-aurora-text">
                Se você está reconhecendo situações de violência, saiba que
                não está sozinha(o).
              </p>
              <p className="text-sm text-aurora-text-light">
                Ligue para{" "}
                <a href="tel:180" className="font-bold text-aurora-teal hover:underline">
                  180
                </a>{" "}
                (Central de Atendimento à Mulher) ou{" "}
                <a href="tel:190" className="font-bold text-aurora-teal hover:underline">
                  190
                </a>{" "}
                (Emergência) se houver risco imediato.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
