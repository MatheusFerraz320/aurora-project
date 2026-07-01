import type { Metadata } from "next"
import { Phone, Shield, Scale, Heart, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"
import numeros from "@/content/numeros.json"
import ImpactCard from "@/components/ImpactCard"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Dados Oficiais 2025",
}

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  gavel: <Scale className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  "alert-triangle": <AlertTriangle className="h-6 w-6" />,
}

export default function NumerosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 text-3xl font-bold text-aurora-text md:text-4xl">
            Dados Oficiais 2025
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-aurora-text-light">
            A violência tem números — mas cada número representa uma mulher
            que buscou ajuda. Os dados mostram que o acolhimento funciona,
            a Justiça age e a saída existe.
          </p>
        </section>
      </FadeInView>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {numeros.map((item, idx) => (
          <FadeInView key={item.icone + idx} delay={0.1 * idx}>
            <ImpactCard
              value={item.valor}
              label={item.rotulo}
              subtitle={item.subtitulo}
              fonte={item.fonte}
              icon={iconMap[item.icone]}
              delay={0.1 * idx}
            />
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.4}>
        <div className="mx-auto max-w-3xl rounded-2xl border border-aurora-rose-light/30 bg-gradient-to-r from-aurora-blush to-white p-8 text-center shadow-sm">
          <p className="mb-4 text-lg leading-relaxed text-aurora-text-light">
            <span className="font-semibold text-aurora-rose">Você não está sozinha.</span>
            Milhares de mulheres já deram o primeiro passo e tiveram suas
            vidas transformadas pelo acolhimento e pela proteção da lei.
            A maioria das que denunciam consegue medidas protetivas.
          </p>
          <p className="text-base font-medium text-aurora-text">
            A violência acaba. A ajuda funciona. Você merece ser cuidada.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.5}>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/ajuda"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:shadow-[0_8px_25px_rgba(212,74,122,0.35)] hover:scale-[1.02]"
          >
            <Heart className="h-5 w-5" />
            Preciso de Ajuda
          </Link>
          <Link
            href="/rede-de-apoio"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-aurora-rose-light/50 bg-white px-8 py-3.5 text-base font-semibold text-aurora-text transition-all hover:border-aurora-rose-light hover:bg-aurora-blush"
          >
            Ver Rede de Apoio
          </Link>
        </div>
      </FadeInView>

      <FadeInView delay={0.6}>
        <p className="text-center text-xs text-aurora-text-muted">
          Fontes: Ministério das Mulheres (Painel Ligue 180), DataSenado,
          Conselho Nacional de Justiça, Fórum Brasileiro de Segurança Pública,
          Observatório da Mulher/DF.
        </p>
      </FadeInView>
    </div>
  )
}
