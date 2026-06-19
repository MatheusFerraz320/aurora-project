"use client"

import { Phone, Globe, Home, Smartphone, ExternalLink } from "lucide-react"
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
              group flex flex-col gap-3
              rounded-2xl border border-aurora-rose-light/30
              bg-white p-5
              shadow-[0_4px_20px_rgba(212,74,122,0.04)]
              transition-all duration-300
              hover:shadow-[0_8px_30px_rgba(212,74,122,0.10)]
              hover:border-aurora-rose-light
            `}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora-blush text-aurora-rose transition-all duration-300 group-hover:scale-110 group-hover:bg-aurora-rose-light group-hover:text-white">
                  {iconMap[item.icone] || <Phone className="h-5 w-5" />}
                </span>
                <div>
                  <h3
                    className="text-sm font-semibold text-aurora-text transition-colors group-hover:text-aurora-rose"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.nome}
                  </h3>
                  <span className="text-[11px] text-aurora-text-muted">{item.orgao}</span>
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
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
                  className="inline-flex items-center gap-1 rounded-xl border border-aurora-rose-light/30 px-3 py-2 text-sm font-medium text-aurora-text-light transition-colors hover:bg-aurora-blush hover:text-aurora-rose"
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
