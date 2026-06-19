import Link from "next/link"
import { Calendar, Tag, ArrowRight } from "lucide-react"

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
        rounded-2xl border border-aurora-rose-light/30
        bg-white p-6
        shadow-[0_4px_20px_rgba(212,74,122,0.04)]
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(212,74,122,0.10)]
        hover:border-aurora-rose-light
        hover:-translate-y-0.5
      `}
    >
      <div className="mb-2 flex items-center gap-3 text-xs text-aurora-text-muted">
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {new Date(data).toLocaleDateString("pt-BR")}
        </span>
        {tags && tags.length > 0 && (
          <span className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-0.5 rounded-full bg-aurora-blush px-2 py-0.5 text-[11px] text-aurora-rose"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </span>
        )}
      </div>

      <h3
        className="text-lg font-semibold text-aurora-text transition-colors group-hover:text-aurora-rose"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {titulo}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-aurora-text-light">
        {resumo}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-aurora-rose transition-colors">
        Ler mais
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
