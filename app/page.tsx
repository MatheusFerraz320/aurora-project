import Link from "next/link"
import {
  Shield,
  Heart,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react"
import StatCard from "@/components/StatCard"
import FadeInView from "@/components/FadeInView"

export default function Home() {
  return (
    <div className="space-y-0">
      <section
        className={`
          relative overflow-hidden
          bg-gradient-to-br
          from-aurora-teal via-aurora-lilac to-aurora-bg-alt
          px-4 py-20 text-white md:py-32
        `}
      >
        <FadeInView className="relative z-10 mx-auto max-w-3xl text-center" y={32}>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Você não está
            <br />
            <span className="text-aurora-gold">sozinha(o)</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/85">
            Aqui você encontra informação, acolhimento e os canais oficiais de
            ajuda. Um recomeço é possível.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/ajuda"
              className={`
                inline-flex items-center gap-2
                rounded-xl bg-aurora-gold
                px-8 py-3.5 text-base font-bold text-white shadow-lg
                transition-all
                hover:bg-aurora-gold-light
                focus:outline-none focus:ring-2
                focus:ring-aurora-gold focus:ring-offset-2
                focus:ring-offset-aurora-teal
              `}
            >
              <Heart className="h-5 w-5" />
              Preciso de Ajuda Agora
            </Link>
            <Link
              href="/sobre"
              className={`
                inline-flex items-center gap-2
                rounded-xl border-2 border-white/40
                bg-white/10 px-8 py-3.5
                text-base font-semibold text-white
                backdrop-blur-sm transition-all
                hover:bg-white/20
                focus:outline-none focus:ring-2
                focus:ring-white/50 focus:ring-offset-2
                focus:ring-offset-aurora-teal
              `}
            >
              <BookOpen className="h-5 w-5" />
              Quero Entender Mais
            </Link>
          </div>
        </FadeInView>

        <div
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-aurora-gold/10 blur-3xl"
          aria-hidden
        />
      </section>

      <section className="bg-aurora-bg-alt px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <h2 className="mb-8 text-center text-2xl font-bold text-aurora-text md:text-3xl">
              A realidade no Brasil
            </h2>
          </FadeInView>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "31.000+",
                label: "Ligações para o 180 por mês (média 2023)",
                fonte: "Ouvidoria Nacional dos Direitos Humanos",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                value: "18,6 milhões",
                label: "Mulheres sofreram violência no Brasil (2023)",
                fonte: "DataSenado",
                icon: <Search className="h-6 w-6" />,
              },
              {
                value: "72,4%",
                label: "Dos agressores são parceiros ou ex-parceiros",
                fonte: "Fórum Brasileiro de Segurança Pública",
                icon: <Heart className="h-6 w-6" />,
              },
              {
                value: "1 a cada 4",
                label: "Mulheres sofreram violência no último ano",
                fonte: "DataSenado",
                icon: <BookOpen className="h-6 w-6" />,
              },
            ].map((stat, idx) => (
              <FadeInView key={stat.label} delay={idx * 0.1}>
                <StatCard {...stat} />
              </FadeInView>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Dados referentes a mulheres a partir de 16 anos. Fontes oficiais
            citadas.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeInView delay={0.1}>
              <CardLink
                href="/identificar"
                icon={<Search className="h-6 w-6" />}
                titulo="Identifique os Sinais"
                descricao="Conheça os tipos de violencia e faca uma autoavaliacao anonima."
              />
            </FadeInView>
            <FadeInView delay={0.2}>
              <CardLink
                href="/rede-de-apoio"
                icon={<Heart className="h-6 w-6" />}
                titulo="Rede de Apoio"
                descricao="Canais oficiais do governo federal prontos para atender voce."
              />
            </FadeInView>
            <FadeInView delay={0.3}>
              <CardLink
                href="/recursos"
                icon={<BookOpen className="h-6 w-6" />}
                titulo="Materiais Educativos"
                descricao="Cartilhas e cartazes para download e distribuicao."
              />
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  )
}

function CardLink({
  href,
  icon,
  titulo,
  descricao,
}: {
  href: string
  icon: React.ReactNode
  titulo: string
  descricao: string
}) {
  return (
    <Link
      href={href}
      className={`
        group flex flex-col gap-3 rounded-2xl
        border border-aurora-lilac/10 bg-white p-6 shadow-sm
        transition-all hover:shadow-md hover:border-aurora-lilac/30
      `}
    >
      <div className="text-aurora-lilac transition-colors group-hover:text-aurora-teal">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-aurora-text transition-colors group-hover:text-aurora-teal">
        {titulo}
      </h3>
      <p className="text-sm leading-relaxed text-aurora-text-light">
        {descricao}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-aurora-teal transition-colors group-hover:text-aurora-teal-light">
        Acessar <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
