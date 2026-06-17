# Projeto Aurora 🌅

Site institucional de conscientização e combate à violência doméstica, desenvolvido como atividade de extensão universitária em parceria com a rede de assistência social (CRAS, ONGs, delegacias especializadas).

## Stack

- **Next.js 16** — App Router, SSG
- **TypeScript**
- **Tailwind CSS v4** — Aurora palette personalizada
- **Lucide React** — ícones
- **MDX** — blog com conteúdo estático
- **Formspree** — formulário de contato institucional (configurável)

## Estrutura de Pastas

```
app/                    — Páginas (App Router)
├── page.tsx            — Home
├── layout.tsx          — Layout global (Header, Footer, Saída Segura)
├── sobre/              — Sobre a Violência Doméstica
├── identificar/        — Como Identificar + Checklist
├── ajuda/              — Como Buscar Ajuda
├── rede-de-apoio/      — Rede de Apoio (diretório filtrável)
├── recursos/           — Materiais para download
├── blog/               — Blog (MDX dinâmico)
├── sobre-o-projeto/    — Sobre o Projeto
└── contato/            — Contato institucional

components/             — Componentes reutilizáveis
content/                — Conteúdo estático editável
├── rede-de-apoio.json  — Instituições parceiras
├── canais-oficiais.json — Canais de emergência
├── recursos.json       — Materiais de download
└── blog/*.mdx         — Artigos do blog

public/downloads/       — PDFs e materiais para download
```

## Como Editar Conteúdo

### Rede de Apoio

Edite `content/rede-de-apoio.json`. Cada entrada precisa de:
- `nome`, `tipo`, `cidade`, `estado`, `endereco`, `telefone`, `horario`

### Canais Oficiais

Edite `content/canais-oficiais.json`. Cada entrada: `nome`, `numero`, `descricao`.

### Recursos/Materiais

Edite `content/recursos.json`. Coloque os arquivos PDF em `public/downloads/`.

### Blog

Adicione arquivos `.mdx` em `content/blog/`. O frontmatter usa exports nomeados:

```mdx
export const metadata = {
  titulo: "Título do Artigo",
  data: "2025-03-08",
  resumo: "Descrição curta...",
  tags: ["Tag1", "Tag2"],
}

## Conteúdo em Markdown
```

Depois, registre o slug no array `artigos` em `app/blog/page.tsx` e na função `generateStaticParams` em `app/blog/[slug]/page.tsx`.

## Configurar Formulário de Contato

1. Crie uma conta gratuita em [Formspree](https://formspree.io)
2. Crie um formulário e copie o endpoint (ex.: `https://formspree.io/f/xxxxxxxx`)
3. Crie um arquivo `.env.local` na raiz:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Sem essa variável, o formulário exibirá um fallback com e-mail institucional.

## Comandos

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servir build
npm run lint     # ESLint
```

## Deploy

### Vercel (recomendado)

Conecte o repositório à Vercel. Configure a variável de ambiente `NEXT_PUBLIC_FORMSPREE_ENDPOINT` no dashboard.

### Exportação Estática

```bash
# next.config.ts já inclui suporte a output: export se necessário
# Para habilitar, adicione ao next.config.ts:
#   output: "export"
npm run build
# O conteúdo estará em ./out/
```

## Aviso de Privacidade

Este site **não coleta, armazena ou processa dados sensíveis de usuários**. Nenhum formulário solicita relatos de vítimas. A checklist de autoavaliação é 100% client-side e **não persiste respostas** em localStorage, cookies ou qualquer outro meio. O formulário de contato envia dados apenas para o serviço externo configurado (Formspree) e é destinado exclusivamente a assuntos institucionais.

## Acessibilidade

- HTML semântico com hierarquia correta de headings
- Contraste mínimo AA (WCAG 2.1)
- Navegação 100% por teclado
- Botão de saída rápida com atalho de teclado (Esc 3x)
- `alt` descritivo em todas as imagens

## Performance

- SSG (Static Site Generation) para todas as páginas
- Carregamento instantâneo em conexões lentas
- Lighthouse mobile ≥ 90 (alvo)

## Trade-off de SEO

Os títulos de página e meta descrições descrevem o conteúdo de forma acolhedora, mas sem termos que possam expor a intenção de busca da vítima. Isso é um trade-off consciente entre encontrabilidade e segurança.
