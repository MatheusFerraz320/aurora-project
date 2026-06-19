import { AlertTriangle } from "lucide-react"

interface DisclaimerProps {
  children: React.ReactNode
  variant?: "warning" | "info"
}

export default function Disclaimer({
  children,
  variant = "warning",
}: DisclaimerProps) {
  const styles = {
    warning:
      "border-amber-200 bg-amber-50 text-amber-900",
    info: "border-aurora-rose-light/30 bg-aurora-blush text-aurora-text-light",
  }

  return (
    <div
      className={`
        flex items-start gap-3
        rounded-xl border p-4 text-sm
        leading-relaxed ${styles[variant]}
      `}
    >
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-aurora-rose" />
      <div>{children}</div>
    </div>
  )
}
