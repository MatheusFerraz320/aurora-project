import type { Metadata } from "next"
import { Phone, Shield, AlertTriangle, ArrowRight } from "lucide-react"
import canais from "@/content/canais-oficiais.json"
import Disclaimer from "@/components/Disclaimer"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Como Buscar Ajuda",
}

export default function AjudaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 text-3xl font-bold text-aurora-text md:text-4xl">
            Como Buscar Ajuda
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            Não enfrente isso sozinha(o). Ligue para um dos canais abaixo. São
            gratuitos, sigilosos e funcionam 24 horas.
          </p>
        </section>
      </FadeInView>

      <FadeInView delay={0.1}>
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 md:p-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-aurora-danger">
            <AlertTriangle className="h-6 w-6" />
            Emergência — Risco Imediato
          </h2>
          <p className="mb-4 text-base leading-relaxed text-red-900">
            Se há perigo agora (agressão em andamento, ameaça com arma,
            violência grave iminente) ligue imediatamente:
          </p>
          <a
            href="tel:190"
            className={`
              inline-flex items-center gap-3 rounded-xl bg-aurora-danger
              px-8 py-4 text-xl font-bold text-white shadow-lg
              transition-all hover:bg-red-700
              focus:outline-none focus:ring-2 focus:ring-aurora-danger focus:ring-offset-2
            `}
          >
            <Phone className="h-6 w-6" />
            190 — Polícia Militar
          </a>
          <p className="mt-3 text-sm text-red-800">
            A PM vai até você, faz o boletim de ocorrência e garante sua
            segurança no momento.
          </p>
        </section>
      </FadeInView>

      <FadeInView delay={0.2}>
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-aurora-text">
            <Shield className="h-6 w-6 text-aurora-rose" />
            Canais de Apoio e Orientação
          </h2>
          <div className="grid gap-4">
            {canais.map((canal, idx) => (
              <FadeInView key={canal.numero} delay={idx * 0.1}>
                <div className="flex flex-col gap-3 rounded-2xl border border-aurora-rose-light/30 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                  <a
                    href={`tel:${canal.numero}`}
                    className={`
                      flex h-14 w-14 shrink-0 items-center justify-center
                      rounded-xl bg-aurora-rose text-xl font-bold text-white
                      transition-colors hover:bg-aurora-rose-deep
                    `}
                  >
                    {canal.numero}
                  </a>
                  <div className="flex-1">
                    <h3 className="font-semibold text-aurora-text">
                      {canal.nome}
                    </h3>
                    <p className="mt-0.5 text-sm text-aurora-text-light">
                      {canal.descricao}
                    </p>
                  </div>
                  <a
                    href={`tel:${canal.numero}`}
                    className={`
                      inline-flex items-center gap-1 rounded-lg
                      bg-aurora-rose/10 px-4 py-2
                      text-sm font-semibold text-aurora-rose
                      transition-colors hover:bg-aurora-rose hover:text-white
                    `}
                  >
                    Ligar <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </FadeInView>
            ))}
          </div>
        </section>
      </FadeInView>

      <FadeInView delay={0.3}>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-aurora-text">
            Como Denunciar Formalmente
          </h2>
          <div className="space-y-4 leading-relaxed text-aurora-text-light">
            <div className="rounded-xl border border-aurora-rose-light/30 bg-white p-5">
              <h3 className="mb-2 font-semibold text-aurora-text">
                1. Boletim de Ocorrência (B.O.)
              </h3>
              <p className="text-sm">
                Pode ser registrado em qualquer delegacia ou pela internet na{" "}
                <a
                  href="https://www.delegaciavirtual.sinesp.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-aurora-rose underline"
                >
                  Delegacia Virtual
                </a>{" "}
                (em alguns estados). Não precisa de advogado(a).
              </p>
            </div>
            <div className="rounded-xl border border-aurora-rose-light/30 bg-white p-5">
              <h3 className="mb-2 font-semibold text-aurora-text">
                2. Medida Protetiva de Urgência
              </h3>
              <p className="text-sm">
                Ao registrar o B.O., você pode pedir a medida protetiva. O juiz
                tem ate 72 horas para decidir. Pode incluir afastamento do
                agressor, proibição de contato e aproximação.
              </p>
            </div>
            <div className="rounded-xl border border-aurora-rose-light/30 bg-white p-5">
              <h3 className="mb-2 font-semibold text-aurora-text">
                3. Acompanhamento Psicossocial
              </h3>
              <p className="text-sm">
                A vítima tem direito a atendimento psicológico e social pelo
                SUS, CRAS e CREAS. Procure o CRAS mais proximo para ser
                encaminhada(o).
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      <Disclaimer>
        Este site não coleta denúncias nem substitui o atendimento dos canais
        oficiais. Se você está em perigo, ligue{" "}
        <a href="tel:190" className="font-bold underline">
          190
        </a>
        .
      </Disclaimer>
    </div>
  )
}
