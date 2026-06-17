import Link from "next/link"
import { Calendar, Tag } from "lucide-react"

interface ArticleCardProps {
  slug: string
  titulo: string
  data: string
  resumo: string
  tags?: string[]
}

export default function ArticleCard({
  slug,
  titulo,
  data,
  resumo,
  tags,
}: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`
        group block
        rounded-2xl
        border border-aurora-lilac/10
        bg-white p-6
        shadow-sm
        transition-all
        hover:shadow-md hover:border-aurora-lilac/30
      `}
    >
      <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(data).toLocaleDateString("pt-BR")}
        </span>
        {tags && tags.length > 0 && (
          <span className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-0.5 rounded-full bg-aurora-lilac/10 px-2 py-0.5 text-[11px] text-aurora-lilac-dark"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </span>
        )}
      </div>

      <h3
        className={`
          text-lg font-semibold text-aurora-text
          transition-colors
          group-hover:text-aurora-teal
        `}
      >
        {titulo}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-aurora-text-light">
        {resumo}
      </p>

      <span
        className={`
          mt-3 inline-flex items-center gap-1
          text-sm font-medium text-aurora-teal
          transition-colors
          group-hover:text-aurora-teal-light
        `}
      >
        Ler mais &rarr;
      </span>
    </Link>
  )
}
