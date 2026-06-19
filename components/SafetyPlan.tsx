"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Heart,
  Shield,
  FileText,
  Phone,
  MapPin,
  Users,
  Download,
  AlertTriangle,
} from "lucide-react"

interface Respostas {
  moraComAgressor: boolean | null
  temFilhos: boolean | null
  trabalhaFora: boolean | null
  jaDenunciou: boolean | null
  temMedidaProtetiva: boolean | null
  precisaEmergencia: boolean | null
}

const steps = [
  {
    id: "boas-vindas",
    title: "Seu Plano de Segurança",
    icon: Shield,
    description:
      "Este plano ajuda você a se preparar para diferentes situações. Você responde algumas perguntas e no final pode baixar um PDF personalizado. Nada é salvo online.",
  },
  {
    id: "mora-com-agressor",
    title: "Sua Situação",
    question: "Você mora com a pessoa que comete a violência?",
    field: "moraComAgressor" as const,
    icon: MapPin,
  },
  {
    id: "tem-filhos",
    title: "Filhos",
    question: "Você tem filhos ou filhas?",
    field: "temFilhos" as const,
    icon: Users,
  },
  {
    id: "trabalha-fora",
    title: "Trabalho",
    question: "Você trabalha fora de casa ou estuda?",
    field: "trabalhaFora" as const,
    icon: FileText,
  },
  {
    id: "ja-denunciou",
    title: "Denúncia",
    question: "Você já fez um boletim de ocorrência ou denúncia?",
    field: "jaDenunciou" as const,
    icon: AlertTriangle,
  },
  {
    id: "medida-protetiva",
    title: "Medida Protetiva",
    question: "Você possui medida protetiva?",
    field: "temMedidaProtetiva" as const,
    icon: Shield,
  },
  {
    id: "emergencia",
    title: "Emergência",
    question: "Você está em perigo agora ou sente que pode estar correndo risco iminente?",
    field: "precisaEmergencia" as const,
    icon: Phone,
  },
]

function generatePlan(respostas: Respostas) {
  const items: string[] = []

  if (respostas.precisaEmergencia) {
    items.push("[URGENTE] LIGUE 190 AGORA ou vá para a delegacia mais próxima")
    items.push("[CONTATO] Se não puder falar, mande um alerta para um contato de confiança")
  }

  if (respostas.moraComAgressor) {
    items.push("[CHAVES] Mantenha chaves de casa e do carro sempre acessíveis")
    items.push("[BOLSA] Prepare uma bolsa de emergência com documentos, remédios, roupas e dinheiro")
    items.push("[CELULAR] Deixe o celular sempre carregado e com saldo")
    items.push("[ROTA] Identifique cômodos com saída fácil e evite ficar em áreas sem saída")
    items.push("[CODIGO] Combine um código ou palavra de segurança com alguém de confiança")
  } else {
    items.push("[DOCUMENTOS] Mantenha seus documentos em local seguro fora de casa")
    items.push("[REGISTRO] Registre todos os incidentes com data, hora e detalhes")
    items.push("[CONTATOS] Mantenha contatos de emergência salvos com nomes fictícios")
  }

  if (respostas.temFilhos) {
    items.push("[CRIANCAS] Ensine as crianças a pedir ajuda (ligar para avós, tios, vizinhos de confiança)")
    items.push("[DOCUMENTOS] Inclua documentos dos filhos na bolsa de emergência")
    items.push("[ESCOLA] Converse com a escola sobre uma pessoa autorizada a buscar as crianças")
  }

  if (respostas.trabalhaFora) {
    items.push("[TRAJETO] Varie seus horários e trajetos de ida e volta")
    items.push("[COLEGA] Avise um colega de confiança sobre sua situação")
    items.push("[CONTATO] Mantenha contato com alguém ao sair e ao chegar")
  }

  if (!respostas.jaDenunciou) {
    items.push("[B.O.] Registre um boletim de ocorrência na Delegacia da Mulher (DEAM) ou online")
    items.push("[APP] App SP Mulher Segura (SP) ou Rede Lilás (AL) — botão do pânico integrado")
  }

  if (!respostas.temMedidaProtetiva && !respostas.precisaEmergencia) {
    items.push("[MEDIDA] Solicite medida protetiva de urgência — você não precisa de advogado")
    items.push("[DEFENSORIA] Procure a Defensoria Pública ou a Delegacia da Mulher mais próxima")
  }

  items.push("[LIGUE 180] Central de Atendimento à Mulher, 24h, gratuito e sigiloso")
  items.push("[APOIO] Você não está sozinha. Busque apoio em amigos, familiares ou grupos de apoio")

  return items
}

export default function SafetyPlan() {
  const [step, setStep] = useState(0)
  const [respostas, setRespostas] = useState<Respostas>({
    moraComAgressor: null,
    temFilhos: null,
    trabalhaFora: null,
    jaDenunciou: null,
    temMedidaProtetiva: null,
    precisaEmergencia: null,
  })
  const [showPlan, setShowPlan] = useState(false)
  const [planItems, setPlanItems] = useState<string[]>([])

  const isQuestionStep = step >= 0 && step < steps.length

  const handleAnswer = (value: boolean) => {
    const currentStep = steps[step]
    if (currentStep && "field" in currentStep && currentStep.field) {
      setRespostas((prev) => ({ ...prev, [currentStep.field]: value }))
    }

    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      const finalRespostas = { ...respostas }
      if (currentStep && "field" in currentStep && currentStep.field) {
        finalRespostas[currentStep.field] = value
      }
      const items = generatePlan(finalRespostas)
      setPlanItems(items)
      setShowPlan(true)
    }
  }

  const handleDownload = () => {
    const text = [
      "MEU PLANO DE SEGURANÇA — Projeto Aurora",
      "=====================================",
      `Gerado em: ${new Date().toLocaleDateString("pt-BR")}`,
      "",
      ...planItems.map((item, i) => `${i + 1}. ${item}`),
      "",
      "---",
      "Projeto Aurora — Conscientização e Combate à Violência Doméstica",
      "Ligue 180 | 190 | 100",
    ].join("\n")

    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `plano-seguranca-aurora-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleRestart = () => {
    setStep(0)
    setRespostas({
      moraComAgressor: null,
      temFilhos: null,
      trabalhaFora: null,
      jaDenunciou: null,
      temMedidaProtetiva: null,
      precisaEmergencia: null,
    })
    setShowPlan(false)
    setPlanItems([])
  }

  if (showPlan) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="rounded-2xl border border-aurora-rose-light/40 bg-white p-6 shadow-[0_4px_20px_rgba(212,74,122,0.06)] md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-aurora-rose to-aurora-burgundy text-white">
              <Check className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-aurora-text">
                Seu Plano de Segurança
              </h2>
              <p className="text-sm text-aurora-text-light">
                Personalizado para sua situação
              </p>
            </div>
          </div>

          {respostas.precisaEmergencia && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-aurora-danger">
                <AlertTriangle className="h-4 w-4" />
                Se você está em perigo agora, ligue 190 imediatamente.
              </p>
            </div>
          )}

          <ul className="space-y-3">
            {planItems.map((item, i) => (
              <li
                key={i}
                className="animate-fade-in rounded-xl border border-aurora-rose-light/20 bg-aurora-blush/50 px-4 py-3 text-sm leading-relaxed text-aurora-text"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
            >
              <Download className="h-4 w-4" />
              Baixar Plano (.txt)
            </button>
            <button
              onClick={handleRestart}
              className="rounded-xl border border-aurora-rose-light/40 bg-white px-6 py-3 text-sm font-semibold text-aurora-text-light transition-colors hover:bg-aurora-blush focus:outline-none focus:ring-2 focus:ring-aurora-rose/30"
            >
              Refazer
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm leading-relaxed text-amber-900">
            <strong>Atenção:</strong> este plano é um guia informativo e não substitui
            atendimento profissional. Nenhum dado é salvo ou armazenado em servidores.
            Sua segurança é a prioridade — se estiver em perigo, ligue 190.
          </p>
        </div>
      </div>
    )
  }

  const currentStep = steps[step] as (typeof steps)[number] | undefined
  if (!currentStep) return null

  const progress = ((step) / steps.length) * 100

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="rounded-xl p-2 text-aurora-text-light transition-colors hover:bg-aurora-blush focus:outline-none focus:ring-2 focus:ring-aurora-rose/30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        <div className="flex-1">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-medium text-aurora-text-muted">
              Etapa {step + 1} de {steps.length}
            </span>
            <span className="text-xs font-medium text-aurora-rose">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-aurora-rose-light/30">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-aurora-rose to-aurora-burgundy"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-aurora-rose-light/40 bg-white p-8 shadow-[0_4px_20px_rgba(212,74,122,0.06)]"
        >
          {step === 0 ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-rose to-aurora-burgundy text-white shadow-lg">
                <Shield className="h-7 w-7" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-aurora-text">
                {currentStep.title}
              </h2>
              <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-aurora-text-light">
                {currentStep.description}
              </p>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-8 py-3 text-base font-bold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
              >
                Começar
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-aurora-blush text-aurora-rose">
                <currentStep.icon className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-aurora-text">{currentStep.title}</h2>
              <p className="mb-6 text-sm text-aurora-text-light">
                {currentStep.question}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className="min-w-[120px] rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
                >
                  Sim
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="min-w-[120px] rounded-xl border-2 border-aurora-rose-light/50 bg-white px-6 py-3 text-sm font-bold text-aurora-text transition-colors hover:bg-aurora-blush focus:outline-none focus:ring-2 focus:ring-aurora-rose/30"
                >
                  Não
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-sm leading-relaxed text-amber-900">
          <strong>Privacidade:</strong> nenhuma resposta sai do seu dispositivo.
          Você pode parar quando quiser e baixar apenas o plano final.
        </p>
      </div>
    </div>
  )
}
