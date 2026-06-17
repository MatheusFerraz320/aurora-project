"use client"

import { Phone, Globe, Home, Smartphone } from "lucide-react"
import { ExternalLink } from "lucide-react"
import rede from "@/content/rede-de-apoio.json"
import FadeInView from "./FadeInView"

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  home: <Home className="h-5 w-5" />,
  smartphone: <Smartphone className="h-5 w-5" />,
}

export default function FederalSupportGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {rede.map((item, idx) => (
        <FadeInView key={item.nome} delay={idx * 0.08}>
          <div
            className={`
              flex flex-col gap-3
              rounded-2xl border border-aurora-lilac/10
              bg-white p-5 shadow-sm
              transition-all hover:shadow-md
            `}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora-lilac/10 text-aurora-lilac">
                  {iconMap[item.icone] || <Phone className="h-5 w-5" />}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-aurora-text">
                    {item.nome}
                  </h3>
                  <span className="text-[11px] text-gray-400">{item.orgao}</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-aurora-text-light">
              {item.descricao}
            </p>

            <div className="mt-auto flex items-center gap-3 pt-1">
              {item.numero && (
                <a
                  href={`tel:${item.numero}`}
                  className={`
                    inline-flex items-center gap-1.5 rounded-lg
                    bg-aurora-teal px-4 py-2
                    text-sm font-bold text-white
                    transition-colors
                    hover:bg-aurora-teal-light
                    focus:outline-none focus:ring-2 focus:ring-aurora-teal focus:ring-offset-2
                  `}
                >
                  <Phone className="h-3.5 w-3.5" />
                  {item.numero}
                </a>
              )}
              {item.site && (
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-1 rounded-lg
                    border border-gray-200 px-3 py-2
                    text-sm font-medium text-aurora-text-light
                    transition-colors
                    hover:bg-gray-50 hover:text-aurora-teal
                  `}
                >
                  Acessar
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </FadeInView>
      ))}
    </div>
  )
}
