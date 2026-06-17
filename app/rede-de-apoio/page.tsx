import type { Metadata } from "next"
import { Heart } from "lucide-react"
import FederalSupportGrid from "@/components/FederalSupportGrid"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Rede de Apoio",
}

export default function RedeDeApoioPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold text-aurora-text md:text-4xl">
            <Heart className="h-8 w-8 text-aurora-gold" />
            Rede de Apoio
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            Canais oficiais do governo federal prontos para atender você. Cada
            orgão tem um numero direto e gratuito.
          </p>
        </section>
      </FadeInView>

      <FederalSupportGrid />
    </div>
  )
}
