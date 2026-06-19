import { Download, FileText } from "lucide-react"

interface ResourceCardProps {
  titulo: string
  descricao: string
  arquivo: string
  formato: string
  tamanho: string
}

export default function ResourceCard({
  titulo,
  descricao,
  arquivo,
  formato,
  tamanho,
}: ResourceCardProps) {
  return (
    <div
      className={`
        group flex flex-col gap-3
        rounded-2xl border border-aurora-rose-light/30
        bg-white p-6
        shadow-[0_4px_20px_rgba(212,74,122,0.04)]
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(212,74,122,0.10)]
        hover:border-aurora-rose-light
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aurora-blush text-aurora-rose transition-all duration-300 group-hover:scale-110 group-hover:bg-aurora-rose-light group-hover:text-white">
          <FileText className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3
            className="text-lg font-semibold text-aurora-text transition-colors group-hover:text-aurora-rose"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {titulo}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-aurora-text-light">
            {descricao}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-xs text-aurora-text-muted">
          {formato} &middot; {tamanho}
        </span>
        <a
          href={arquivo}
          download
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-aurora-rose to-aurora-burgundy px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-aurora-rose focus:ring-offset-2"
        >
          <Download className="h-4 w-4" />
          Baixar
        </a>
      </div>
    </div>
  )
}
