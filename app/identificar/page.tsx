import type { Metadata } from "next"
import { AlertTriangle, ListChecks } from "lucide-react"
import SelfCheckQuiz from "@/components/SelfCheckQuiz"
import Disclaimer from "@/components/Disclaimer"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Como Identificar a Violência",
}

const sinais = [
  "Críticas constantes e humilhações em público ou em particular",
  "Ciúme excessivo e acusações de traição sem fundamento",
  "Controle do celular, redes sociais e senhas",
  "Impedimento de sair, trabalhar ou estudar",
  "Ameaças de agressão, de morte ou de tirar os filhos",
  "Pressão para ter relações sexuais sem vontade",
  "Destruição de objetos pessoais ou documentos",
  "Controle do dinheiro e das contas",
  "Isolamento de amigos e familiares",
  "Medo constante da reação do parceiro(a)",
]

export default function IdentificarPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 text-3xl font-bold text-aurora-text md:text-4xl">
            Como Identificar a Violência
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
A violência doméstica nem sempre começa com agressão física. Ela
pode ser sutil, gradual e difícil de reconhecer, especialmente
quando vem de alguém próximo.
          </p>
        </section>
      </FadeInView>

      <FadeInView delay={0.1}>
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-aurora-text">
            <AlertTriangle className="h-5 w-5 text-aurora-rose" />
            Sinais de Alerta
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {sinais.map((sinal, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-aurora-rose-light/30 bg-white p-4 text-sm leading-relaxed text-aurora-text-light"
              >
                {sinal}
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      <FadeInView delay={0.2}>
        <section>
          <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-aurora-text">
            <ListChecks className="h-5 w-5 text-aurora-rose" />
            Checklist de Autoavaliação
          </h2>
          <p className="mb-6 text-sm text-aurora-text-light">
            Responda as perguntas abaixo de forma anônima. Nenhuma resposta é
            salva. Ao final, você recebe uma orientação inicial.
          </p>
          <SelfCheckQuiz />
        </section>
      </FadeInView>

      <Disclaimer>
        Esta checklist ajuda a reconhecer sinais, mas não substitui
        atendimento profissional. Se você está em perigo, ligue{" "}
        <a href="tel:190" className="font-bold underline">
          190
        </a>
        .
      </Disclaimer>
    </div>
  )
}
