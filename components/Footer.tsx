import Link from "next/link"
import { Phone, Shield, Heart, BookOpen, Info } from "lucide-react"
import EmergencyBanner from "./EmergencyBanner"
import SecurityModal from "./SecurityModal"
import FadeInView from "./FadeInView"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      <EmergencyBanner />

      <div className="bg-aurora-text px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <FadeInView delay={0}>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aurora-rose-light">
                <Shield className="h-4 w-4" />
                Projeto Aurora
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Site institucional de conscientização e combate à violência
                doméstica. Projeto de extensão universitária em parceria com a
                rede de assistência social.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aurora-rose-light">
                <BookOpen className="h-4 w-4" />
                Navegue
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/sobre" className="transition-colors hover:text-white">
                    Sobre a Violência
                  </Link>
                </li>
                <li>
                  <Link href="/identificar" className="transition-colors hover:text-white">
                    Como Identificar
                  </Link>
                </li>
                <li>
                  <Link href="/ajuda" className="transition-colors hover:text-white">
                    Buscar Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/plano-seguranca" className="transition-colors hover:text-white">
                    Plano de Segurança
                  </Link>
                </li>
                <li>
                  <Link href="/rede-de-apoio" className="transition-colors hover:text-white">
                    Rede de Apoio
                  </Link>
                </li>
                <li>
                  <Link href="/numeros" className="transition-colors hover:text-white">
                    Dados 2025
                  </Link>
                </li>
                <li>
                  <Link href="/recursos" className="transition-colors hover:text-white">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aurora-rose-light">
                <Heart className="h-4 w-4" />
                Ajuda Imediata
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:180"
                    className="flex items-center gap-2 font-bold text-white transition-colors hover:text-aurora-rose-light"
                  >
                    <Phone className="h-3.5 w-3.5" /> 180 — Central da Mulher
                  </a>
                </li>
                <li>
                  <a
                    href="tel:100"
                    className="flex items-center gap-2 font-bold text-white transition-colors hover:text-aurora-rose-light"
                  >
                    <Phone className="h-3.5 w-3.5" /> 100 — Disque Direitos Humanos
                  </a>
                </li>
                <li>
                  <a
                    href="tel:190"
                    className="flex items-center gap-2 font-bold text-white transition-colors hover:text-aurora-rose-light"
                  >
                    <Phone className="h-3.5 w-3.5" /> 190 — Emergência Policial
                  </a>
                </li>
              </ul>
            </div>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aurora-rose-light">
                <Info className="h-4 w-4" />
                Institucional
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/sobre-o-projeto" className="transition-colors hover:text-white">
                    Sobre o Projeto
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="transition-colors hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <SecurityModal>
                    <span className="cursor-pointer transition-colors hover:text-white">
                      Navegação Segura
                    </span>
                  </SecurityModal>
                </li>
              </ul>
            </div>
          </FadeInView>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <p>
            Este site não substitui atendimento profissional. Em caso de
            emergência, ligue 190.
          </p>
          <p className="mt-2">
            &copy; {year} Projeto Aurora — atividade de extensão universitária.
          </p>
        </div>
      </div>
    </footer>
  )
}
