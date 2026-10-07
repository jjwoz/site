import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <Card
      ref={ref as never}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`)
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`)
      }}
      className={cn("group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/25", className)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),rgba(124,92,255,.25),transparent_60%)]" />
      <div className="relative h-full">{children}</div>
    </Card>
  )
}
