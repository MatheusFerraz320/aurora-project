import Link from "next/link"
import { Heart, BookOpen, Shield, ChevronRight } from "lucide-react"
import ImpactCard from "./ImpactCard"
import FadeInView from "./FadeInView"

const stats = [
  {
    value: "4.212",
    label: "Mulheres acolhidas",
    subtitle: "Rede de acolhimento 2025 (DF)",
    fonte: "Observatório da Mulher",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    value: "86.025",
    label: "Denúncias registradas",
    subtitle: "Ligue 180 — jan a jul 2025",
    fonte: "Ministério das Mulheres",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    value: "594.118",
    label: "Atendimentos realizados",
    subtitle: "Ligue 180 — jan a jul 2025",
    fonte: "Ministério das Mulheres",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    value: "27%",
    label: "Sofreram violência no Brasil",
    subtitle: "23,6 milhões de brasileiras",
    fonte: "DataSenado 2025",
    icon: <Shield className="h-5 w-5" />,
  },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-aurora-blush blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-aurora-rose-light/30 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
        <FadeInView className="mx-auto max-w-3xl text-center" y={24}>
          <span className="mb-4 inline-block rounded-full bg-aurora-rose-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-aurora-rose">
            Conscientização & Acolhimento
          </span>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-aurora-text md:text-5xl lg:text-6xl">
            Você não está
            <br />
            <span className="bg-gradient-to-r from-aurora-rose to-aurora-burgundy bg-clip-text text-transparent">
              sozinha
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-aurora-text-light">
            Informação, acolhimento e canais oficiais de combate à violência doméstica.
            Um recomeço é possível — e você merece.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/ajuda"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_8px_25px_rgba(212,74,122,0.35)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
            >
              <Heart className="h-5 w-5" />
              Preciso de Ajuda Agora
            </Link>
            <Link
              href="/plano-seguranca"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-aurora-rose-light/50 bg-white/80 px-8 py-3.5 text-base font-semibold text-aurora-text backdrop-blur-sm transition-all duration-300 hover:border-aurora-rose-light hover:bg-aurora-blush focus:outline-none focus:ring-2 focus:ring-aurora-rose/30 focus:ring-offset-2"
            >
              <Shield className="h-5 w-5" />
              Criar Plano de Segurança
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeInView>

        <div className="mt-14">
          <FadeInView y={16}>
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-aurora-text-muted">
              Dados oficiais — Brasil 2025
            </p>
          </FadeInView>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <ImpactCard key={stat.label} {...stat} delay={0.1 * idx} />
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] text-aurora-text-muted/50">
            Fontes: Ministério das Mulheres (Painel Ligue 180), DataSenado, Observatório da Mulher/DF. Dados de janeiro a julho de 2025.
          </p>
        </div>

        <FadeInView delay={0.3} y={16} className="mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-aurora-rose-light/30 bg-gradient-to-r from-aurora-blush to-white p-6 shadow-sm md:p-8">
            <p className="text-center text-sm leading-relaxed text-aurora-text-light">
              <span className="font-semibold text-aurora-rose">Você sabia?</span> A cada minuto,
              uma mulher denuncia violência doméstica no Brasil. Mas também: a cada dia,
              dezenas encontram acolhimento e recomeçam. <strong>A informação salva vidas.</strong>
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
