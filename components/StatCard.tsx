import { ReactNode } from "react"

interface StatCardProps {
  value: string
  label: string
  fonte?: string
  icon?: ReactNode
}

export default function StatCard({ value, label, fonte, icon }: StatCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center gap-2
        rounded-2xl
        border border-aurora-lilac/10
        bg-white p-6
        text-center
        shadow-sm
        transition-shadow
        hover:shadow-md
      `}
    >
      {icon && <div className="text-aurora-lilac">{icon}</div>}
      <span className="text-3xl font-bold text-aurora-teal">{value}</span>
      <span className="text-sm font-medium text-aurora-text-light">{label}</span>
      {fonte && (
        <span className="text-[10px] leading-tight text-gray-400">Fonte: {fonte}</span>
      )}
    </div>
  )
}
