import type { Metadata } from "next"
import { Newspaper } from "lucide-react"
import ArticleCard from "@/components/ArticleCard"
import FadeInView from "@/components/FadeInView"

const artigos = [
  {
    slug: "lei-maria-da-penha",
    titulo: "Lei Maria da Penha: Seus Direitos",
    data: "2025-03-08",
    resumo:
      "Conheça os principais pontos da Lei nº 11.340/2006 e como ela protege mulheres em situação de violência doméstica.",
    tags: ["Lei Maria da Penha", "Direitos", "Violência Doméstica"],
  },
  {
    slug: "ciclo-da-violencia",
    titulo: "O Ciclo da Violência Doméstica",
    data: "2025-04-15",
    resumo:
      "Entender o ciclo da violência é o primeiro passo para reconhecer o abuso e buscar ajuda. Conheça as três fases.",
    tags: ["Ciclo da Violência", "Identificação", "Ajuda"],
  },
]

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:py-16">
      <section>
        <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold text-aurora-text md:text-4xl">
          <Newspaper className="h-8 w-8 text-aurora-rose" />
          Blog
        </h1>
        <p className="text-lg leading-relaxed text-aurora-text-light">
          Artigos sobre politicas publicas, prevenção, campanhas e atualizações
          legais sobre o combate a violencia domestica.
        </p>
      </section>

      <div className="grid gap-4">
        {artigos.map((artigo, idx) => (
          <FadeInView key={artigo.slug} delay={idx * 0.1}>
            <ArticleCard {...artigo} />
          </FadeInView>
        ))}
      </div>
    </div>
  )
}
