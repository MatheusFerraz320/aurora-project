import { Search, Heart, BookOpen, ArrowRight, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/HeroSection"
import FadeInView from "@/components/FadeInView"

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />

      <section className="bg-aurora-bg-alt px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeInView>
            <h2 className="mb-2 text-center text-2xl font-bold text-aurora-text md:text-3xl">
              Como podemos ajudar?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-center text-sm text-aurora-text-light">
              Informação, ferramentas e apoio para cada etapa do caminho.
            </p>
          </FadeInView>

          <div className="grid gap-6 md:grid-cols-3">
            <FadeInView delay={0.1}>
              <CardLink
                href="/plano-seguranca"
                icon={<Shield className="h-6 w-6" />}
                titulo="Plano de Segurança"
                descricao="Monte um plano personalizado e discreto para sua situação."
              />
            </FadeInView>
            <FadeInView delay={0.2}>
              <CardLink
                href="/identificar"
                icon={<Search className="h-6 w-6" />}
                titulo="Identifique os Sinais"
                descricao="Conheça os tipos de violência e faça uma autoavaliação anônima."
              />
            </FadeInView>
            <FadeInView delay={0.3}>
              <CardLink
                href="/rede-de-apoio"
                icon={<Heart className="h-6 w-6" />}
                titulo="Rede de Apoio"
                descricao="Canais oficiais do governo federal prontos para atender você."
              />
            </FadeInView>
            <FadeInView delay={0.15}>
              <CardLink
                href="/recursos"
                icon={<BookOpen className="h-6 w-6" />}
                titulo="Materiais Educativos"
                descricao="Cartilhas e cartazes para download e distribuição."
              />
            </FadeInView>
            <FadeInView delay={0.25}>
              <CardLink
                href="/ajuda"
                icon={<Heart className="h-6 w-6" />}
                titulo="Buscar Ajuda"
                descricao="Passos práticos para buscar apoio imediato."
              />
            </FadeInView>
            <FadeInView delay={0.35}>
              <CardLink
                href="/sobre"
                icon={<BookOpen className="h-6 w-6" />}
                titulo="Sobre a Violência"
                descricao="Entenda os tipos, o ciclo e seus direitos."
              />
            </FadeInView>
            <FadeInView delay={0.4}>
              <CardLink
                href="/numeros"
                icon={<BarChart3 className="h-6 w-6" />}
                titulo="Dados 2025"
                descricao="Números oficiais que mostram que a ajuda funciona e você não está sozinha."
              />
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInView>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aurora-rose to-aurora-burgundy text-white shadow-lg">
              <Shield className="h-7 w-7" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-aurora-text md:text-3xl">
              Você não precisa passar por isso sozinha
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-aurora-text-light">
              O Projeto Aurora existe para conectar você com informação de qualidade
              e canais oficiais de acolhimento. Tudo é gratuito, sigiloso e
              feito pensando na sua segurança.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/ajuda"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:shadow-[0_8px_25px_rgba(212,74,122,0.35)] hover:scale-[1.02]"
              >
                <Heart className="h-5 w-5" />
                Preciso de Ajuda
              </Link>
              <Link
                href="/sobre-o-projeto"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-aurora-rose-light/50 bg-white px-8 py-3.5 text-base font-semibold text-aurora-text transition-all hover:border-aurora-rose-light hover:bg-aurora-blush"
              >
                Conheça o Projeto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInView>
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
        group flex flex-col gap-3
        rounded-2xl border border-aurora-rose-light/30
        bg-white p-6
        shadow-[0_4px_20px_rgba(212,74,122,0.04)]
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(212,74,122,0.10)]
        hover:border-aurora-rose-light
        hover:-translate-y-0.5
      `}
    >
      <div
        className={`
          flex h-10 w-10 items-center justify-center rounded-xl
          bg-gradient-to-br from-aurora-blush to-aurora-rose-light
          text-aurora-rose
          transition-all duration-300
          group-hover:scale-110 group-hover:from-aurora-rose-light group-hover:to-aurora-rose
          group-hover:text-white
        `}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-semibold text-aurora-text transition-colors group-hover:text-aurora-rose"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {titulo}
      </h3>
      <p className="text-sm leading-relaxed text-aurora-text-light">
        {descricao}
      </p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-aurora-rose transition-colors">
        Acessar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
