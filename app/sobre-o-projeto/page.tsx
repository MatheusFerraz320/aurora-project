import type { Metadata } from "next"
import { GraduationCap, Users, Heart, Shield } from "lucide-react"
import FadeInView from "@/components/FadeInView"

export const metadata: Metadata = {
  title: "Sobre o Projeto",
}

export default function SobreProjetoPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 md:py-16">
      <FadeInView>
        <section>
          <h1 className="mb-4 text-3xl font-bold text-aurora-text md:text-4xl">
            Sobre o Projeto Aurora
          </h1>
          <p className="text-lg leading-relaxed text-aurora-text-light">
            O Projeto Aurora une conhecimento academico e compromisso social
            no combate a violencia domestica.
          </p>
        </section>
      </FadeInView>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            icon: <GraduationCap className="h-6 w-6" />,
            titulo: "Atividade de Extensão",
            descricao:
              "Desenvolvido como atividade de extensão universitária, integrando ensino, pesquisa e ação comunitária.",
          },
          {
            icon: <Users className="h-6 w-6" />,
            titulo: "Parceria Institucional",
            descricao:
              "Realizado em parceria com a rede de assistência social, incluindo CRAS e ONGs da região.",
          },
          {
            icon: <Heart className="h-6 w-6" />,
            titulo: "Missão",
            descricao:
              "Informar sobre os tipos de violência, ajudar no reconhecimento de sinais de abuso e direcionar para canais oficiais de apoio.",
          },
          {
            icon: <Shield className="h-6 w-6" />,
            titulo: "Compromisso Ético",
            descricao:
              "Total respeito a privacidade. Nenhum dado sensível é coletado. O site não substitui atendimento profissional.",
          },
        ].map((item, idx) => (
          <FadeInView key={item.titulo} delay={idx * 0.1}>
            <div className="flex flex-col gap-3 rounded-2xl border border-aurora-rose/10 bg-white p-6 shadow-sm">
              <div className="text-aurora-rose">{item.icon}</div>
              <h3 className="font-semibold text-aurora-text">{item.titulo}</h3>
              <p className="text-sm leading-relaxed text-aurora-text-light">
                {item.descricao}
              </p>
            </div>
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.2}>
        <section className="rounded-2xl border border-aurora-rose/10 bg-white p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-aurora-text">Equipe</h2>
          <p className="text-aurora-text-light">
            Estudantes, professores e profissionais da rede de apoio parceira,
            comprometidos com a causa.
          </p>
        </section>
      </FadeInView>

      <FadeInView delay={0.3}>
        <section className="rounded-2xl border border-aurora-rose/10 bg-white p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-aurora-text">
            Créditos Acadêmicos
          </h2>
          <p className="text-sm leading-relaxed text-aurora-text-light">
            Este projeto foi desenvolvido como atividade de extensão do curso
            superior, sob orientação docente. O nome &ldquo;Aurora&rdquo;
            simboliza o recomeço: um novo amanhecer depois da escuridão da
            violência.
          </p>
        </section>
      </FadeInView>
    </div>
  )
}
