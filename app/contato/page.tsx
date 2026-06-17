import type { Metadata } from "next"
import { Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Disclaimer from "@/components/Disclaimer"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Contato Institucional",
}

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold text-aurora-text md:text-4xl">
            <Mail className="h-8 w-8 text-aurora-gold" />
            Contato Institucional
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            Este canal é para parcerias, imprensa e duvidas institucionais. Não
            é canal de emergência ou denúncia.
          </p>
        </section>
      </FadeInView>

      <Disclaimer>
        <p className="font-semibold">
          Este NÃO é um canal de denúncia ou emergência.
        </p>
        <p className="mt-1">
          Se você precisa de ajuda, ligue{" "}
          <a href="tel:180" className="font-bold underline">
            180
          </a>{" "}
          (Central de Atendimento à Mulher) ou{" "}
          <a href="tel:190" className="font-bold underline">
            190
          </a>{" "}
          (Emergência Policial).
        </p>
      </Disclaimer>

      <FadeInView delay={0.1}>
        <ContactForm />
      </FadeInView>
    </div>
  )
}
