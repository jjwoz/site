import { useEffect, useRef } from "react"

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current!
    const ctx = cv.getContext("2d")!
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches
    let W = 0, H = 0, mx = 0, my = 0, raf = 0
    let stars: { x: number; y: number; z: number; t: number }[] = []

    const resize = () => {
      W = cv.width = innerWidth
      H = cv.height = innerHeight
      stars = Array.from({ length: Math.min(200, Math.floor((W * H) / 9000)) }, () => ({
        x: Math.random() * W, y: Math.random() * H, z: Math.random() * 1.8 + 0.2, t: Math.random() * 6.28,
      }))
    }
    const move = (e: PointerEvent) => { mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5 }
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = "#fff"
      for (const s of stars) {
        s.t += 0.02
        if (!still) s.y -= s.z * 0.08
        if (s.y < 0) s.y = H
        ctx.globalAlpha = 0.4 + Math.sin(s.t) * 0.3
        ctx.beginPath()
        ctx.arc(s.x - mx * s.z * 30, s.y - my * s.z * 30, s.z * 0.7, 0, 6.28)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    resize(); draw()
    addEventListener("resize", resize)
    addEventListener("pointermove", move)
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", move) }
  }, [])

  return (
    <>
      <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />
      <div aria-hidden className="pointer-events-none fixed -top-[25vmax] -left-[15vmax] z-0 size-[60vmax] animate-pulse rounded-full bg-violet opacity-25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none fixed -right-[20vmax] -bottom-[30vmax] z-0 size-[60vmax] rounded-full bg-pink opacity-20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </>
  )
}
