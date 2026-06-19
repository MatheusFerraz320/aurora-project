import type { Metadata } from "next"
import SafetyPlan from "@/components/SafetyPlan"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Plano de Segurança",
  description:
    "Monte um plano de segurança personalizado para sua situação. Anônimo, discreto e sem armazenamento de dados.",
}

export default function PlanoSegurancaPage() {
  return (
    <div className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <FadeInView>
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold text-aurora-text md:text-4xl">
              Plano de Segurança
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-aurora-text-light">
              Um guia personalizado e discreto para ajudar você a se preparar,
              proteger seus documentos e saber quais passos tomar em cada
              situação. Nada é salvo — tudo fica no seu dispositivo.
            </p>
          </div>
        </FadeInView>

        <SafetyPlan />
      </div>
    </div>
  )
}
