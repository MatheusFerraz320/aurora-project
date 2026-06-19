import { Phone, Shield } from "lucide-react"
import canais from "@/content/canais-oficiais.json"

export default function EmergencyBanner() {
  return (
    <div
      className="w-full bg-gradient-to-r from-aurora-burgundy to-aurora-rose-deep px-4 py-3 text-white"
      role="banner"
      aria-label="Canais oficiais de emergência"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
        <span className="flex items-center gap-1.5 text-sm font-semibold">
          <Shield className="h-4 w-4" />
          Emergência:
        </span>
        {canais.map((canal) => (
          <a
            key={canal.numero}
            href={`tel:${canal.numero}`}
            className="flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-bold transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`${canal.nome}: ${canal.numero}`}
          >
            <Phone className="h-3.5 w-3.5" />
            {canal.numero}
          </a>
        ))}
      </div>
    </div>
  )
}
