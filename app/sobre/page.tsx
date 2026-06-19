import type { Metadata } from "next"
import { Heart, Brain, Eye, Wallet, Scale } from "lucide-react"
import Disclaimer from "@/components/Disclaimer"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Sobre a Violência Doméstica",
}

const tipos = [
  {
    icon: <Heart className="h-6 w-6" />,
    titulo: "Física",
    descricao:
      "Tapas, socos, empurrões, chutes, queimaduras, estrangulamento ou qualquer ato que ofenda a integridade do corpo.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    titulo: "Psicológica",
    descricao:
      "Ameaças, humilhação, isolamento, perseguição, chantagem, vigilância constante, ridicularização.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    titulo: "Sexual",
    descricao:
      "Relação sexual forcada, imposição de atos contra a vontade, impedimento do uso de contraceptivos.",
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    titulo: "Econômica/Patrimonial",
    descricao:
      "Controlar ou reter dinheiro, destruir objetos pessoais, documentos, impedir o trabalho ou o estudo.",
  },
]

const ciclo = [
  {
    numero: "1",
    titulo: "Aumento da Tensão",
    descricao:
      "Conflitos menores, agressões verbais, humilhações. A vitima tenta apaziguar e anda sobre cascas de ovos.",
    cor: "border-amber-300 bg-amber-50",
  },
  {
    numero: "2",
    titulo: "Ato de Violência",
    descricao:
      "A tensão acumulada explode em agressão fisica, sexual ou psicologica grave. Pode durar horas ou dias.",
    cor: "border-red-200 bg-red-50",
  },
  {
    numero: "3",
    titulo: "Lua de Mel",
    descricao:
      "O agressor se mostra arrependido, promete mudar, faz juras de amor. A vitima acredita e o ciclo recomeça.",
    cor: "border-emerald-200 bg-emerald-50",
  },
]

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 text-3xl font-bold text-aurora-text md:text-4xl">
            Sobre a Violência Doméstica
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            Violência doméstica é qualquer ação que cause sofrimento fisico,
            sexual, psicologico, moral ou patrimonial dentro de casa ou em
            relações intimas de afeto. Não importa se o agressor é
            parceiro(a), ex-parceiro(a), familiar ou pessoa que convive com a
            vitima.
          </p>
        </section>
      </FadeInView>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-aurora-text">
          Tipos de Violência
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tipos.map((t, idx) => (
            <FadeInView key={t.titulo} delay={idx * 0.1}>
              <div className="flex flex-col gap-2 rounded-2xl border border-aurora-rose/10 bg-white p-5 shadow-sm">
                <div className="text-aurora-rose">{t.icon}</div>
                <h3 className="font-semibold text-aurora-text">{t.titulo}</h3>
                <p className="text-sm leading-relaxed text-aurora-text-light">
                  {t.descricao}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      <FadeInView>
        <section>
          <h2 className="mb-6 text-2xl font-bold text-aurora-text">
            O Ciclo da Violência
          </h2>
          <div className="space-y-4">
            {ciclo.map((c) => (
              <div
                key={c.numero}
                className={`flex items-start gap-4 rounded-xl border p-5 ${c.cor}`}
              >
                <span
                  className={`
                    flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full text-lg font-bold
                    ${
                      c.cor.includes("amber")
                        ? "bg-amber-200 text-amber-800"
                        : c.cor.includes("red")
                          ? "bg-red-200 text-red-800"
                          : "bg-emerald-200 text-emerald-800"
                    }
                  `}
                >
                  {c.numero}
                </span>
                <div>
                  <h3 className="font-semibold">{c.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed opacity-80">
                    {c.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-aurora-text">
            Lei Maria da Penha (Lei nº 11.340/2006)
          </h2>
          <div className="space-y-3 leading-relaxed text-aurora-text-light">
            <p>
              A Lei Maria da Penha é a legislação brasileira que define regras
              para proteger, punir e prevenir a violência domestica contra a
              mulher.
            </p>
            <div className="flex items-start gap-3 rounded-xl border border-aurora-rose/10 bg-white p-5">
              <Scale className="mt-0.5 h-5 w-5 shrink-0 text-aurora-rose" />
              <div>
                <p className="font-semibold text-aurora-text">
                  Principais Direitos:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-aurora-text-light">
                  <li>
                    <strong>Medidas Protetivas</strong> — afastamento do
                    agressor, proibição de contato e aproximação
                  </li>
                  <li>
                    <strong>Atendimento Especializado</strong> — delegacias da
                    mulher, juizados especializados, equipe multidisciplinar
                  </li>
                  <li>
                    <strong>Ação Penal Publica</strong> — não depende da
                    vontade da vitima para ser iniciada
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Para solicitar medida protetiva, procure a Delegacia da Mulher
              ou qualquer delegacia. Não precisa de advogado(a).
            </p>
          </div>
        </section>
      </FadeInView>

      <Disclaimer>
        Este conteúdo tem caráter informativo. Em caso de violência, procure
        ajuda profissional. Ligue{" "}
        <a href="tel:180" className="font-bold underline">
          180
        </a>{" "}
        para orientação.
      </Disclaimer>
    </div>
  )
}
