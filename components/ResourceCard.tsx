import { Download } from "lucide-react"

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
        flex flex-col gap-3
        rounded-2xl
        border border-aurora-lilac/10
        bg-white p-6
        shadow-sm
        transition-all
        hover:shadow-md
      `}
    >
      <h3 className="text-lg font-semibold text-aurora-text">
        {titulo}
      </h3>
      <p className="text-sm leading-relaxed text-aurora-text-light">
        {descricao}
      </p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="text-xs text-gray-400">
          {formato} &middot; {tamanho}
        </span>
        <a
          href={arquivo}
          download
          className={`
            inline-flex items-center gap-1.5
            rounded-lg
            bg-aurora-teal px-4 py-2
            text-sm font-semibold text-white
            transition-colors
            hover:bg-aurora-teal-light
            focus:outline-none focus:ring-2
            focus:ring-aurora-teal focus:ring-offset-2
          `}
        >
          <Download className="h-4 w-4" />
          Baixar
        </a>
      </div>
    </div>
  )
}
