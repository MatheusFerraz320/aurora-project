import { notFound } from "next/navigation"
import { Calendar, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import FadeInView from "@/components/FadeInView"

const slugs = ["lei-maria-da-penha", "ciclo-da-violencia"]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  if (!slugs.includes(slug)) {
    notFound()
  }

  let Post: React.ComponentType
  let metadata: { titulo: string; data: string; tags?: string[] }

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`)
    Post = mod.default
    metadata = mod.metadata
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 md:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-aurora-text-light transition-colors hover:text-aurora-rose"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para o Blog
      </Link>

      <FadeInView>
        <article>
          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-aurora-text-muted">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(metadata.data).toLocaleDateString("pt-BR")}
              </span>
              {metadata.tags?.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-0.5 rounded-full bg-aurora-blush px-2.5 py-0.5 text-[11px] text-aurora-rose"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold leading-tight text-aurora-text md:text-4xl">
              {metadata.titulo}
            </h1>
          </header>

          <div
            className={`
              prose prose-gray max-w-none
              prose-headings:text-aurora-text prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-8
              prose-h3:text-xl prose-h3:mt-6
              prose-p:text-aurora-text-light prose-p:leading-relaxed
              prose-a:text-aurora-rose prose-a:no-underline hover:prose-a:underline
              prose-strong:text-aurora-text
              prose-blockquote:border-aurora-rose-light prose-blockquote:bg-aurora-blush
              prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-xl
              prose-li:text-aurora-text-light prose-li:leading-relaxed
            `}
          >
            <Post />
          </div>
        </article>
      </FadeInView>

      <div className="pt-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-aurora-text-light transition-colors hover:text-aurora-rose"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o Blog
        </Link>
      </div>
    </div>
  )
}
