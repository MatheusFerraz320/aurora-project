# Projeto Aurora

**Conscientização e combate à violência doméstica.**

Aplicação web desenvolvida como atividade de extensão universitária, em parceria com a rede de assistência social (CRAS, ONGs, delegacias especializadas). O projeto une conhecimento acadêmico e compromisso social no enfrentamento à violência contra a mulher.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v4 — paleta Aurora |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Conteúdo | MDX + JSON estático |
| Formulário | Formspree (configurável) |
| Build | SSG — 100% estático |

## Funcionalidades

- **Hero com dados oficiais** — estatísticas reais do Ligue 180, DataSenado e Observatório da Mulher
- **Plano de Segurança Interativo** — wizard anônimo que gera um plano personalizado para download
- **Autoavaliação de Risco** — quiz anônimo com orientação imediata
- **Rede de Apoio** — diretório de canais oficiais do governo federal
- **Modo Disfarce** — transforma o site em previsão do tempo (Ctrl+Shift+D)
- **Saída Segura** — botão de fuga com atalho Esc 3×
- **Blog** — artigos educativos em MDX

## Estrutura

```
app/
├── page.tsx                 # Home — Hero + cards de navegação
├── layout.tsx               # Sidebar + Modo Disfarce + Footer
├── plano-seguranca/         # Plano de Segurança Interativo
├── sobre/                   # Sobre a Violência Doméstica
├── identificar/             # Sinais + Autoavaliação
├── ajuda/                   # Canais de emergência e denúncia
├── rede-de-apoio/           # Diretório de instituições
├── recursos/                # Materiais educativos para download
├── blog/                    # Artigos em MDX
├── sobre-o-projeto/         # Institucional
└── contato/                 # Formulário institucional

components/                  # 18 componentes reutilizáveis
content/                     # Dados estáticos editáveis (JSON + MDX)
```

## Privacidade

Zero coleta de dados. O quiz e o plano de segurança são 100% client-side — nenhuma resposta sai do dispositivo. O formulário de contato é institucional e usa Formspree como serviço externo.

## Comandos

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de produção (SSG)
npm run start     # Servir build
npm run lint      # ESLint
```

## Sobre

O nome **Aurora** simboliza o recomeço — um novo amanhecer depois da escuridão da violência. Este projeto foi desenvolvido por estudantes sob orientação docente, como parte de atividade de extensão do curso superior.
