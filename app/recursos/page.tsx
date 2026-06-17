import type { Metadata } from "next"
import { Download } from "lucide-react"
import recursos from "@/content/recursos.json"
import ResourceCard from "@/components/ResourceCard"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Recursos e Materiais",
}

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold text-aurora-text md:text-4xl">
            <Download className="h-8 w-8 text-aurora-gold" />
            Recursos e Materiais
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            Cartilhas, cartazes e materiais educativos para download. Todo o
            conteúdo pode ser impresso e distribuido pela rede de apoio.
          </p>
        </section>
      </FadeInView>

      <div className="grid gap-4">
        {recursos.map((recurso, idx) => (
          <FadeInView key={recurso.titulo} delay={idx * 0.1}>
            <ResourceCard {...recurso} />
          </FadeInView>
        ))}
      </div>
    </div>
  )
}
