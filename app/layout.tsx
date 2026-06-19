import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import DisguiseMode from "@/components/DisguiseMode"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s — Projeto Aurora",
    default:
      "Projeto Aurora — Conscientização e Combate à Violência Doméstica",
  },
  description:
    "Informação, acolhimento e canais oficiais de combate à violência doméstica.",
  openGraph: {
    title: "Projeto Aurora",
    description:
      "Conscientização e combate à violência doméstica. Informação, acolhimento e canais oficiais de ajuda.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full">
        <Sidebar />
        <DisguiseMode>
          <div className="flex flex-1 flex-col md:ml-60">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </DisguiseMode>
      </body>
    </html>
  )
}
