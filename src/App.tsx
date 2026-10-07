import { motion } from "framer-motion"
import {
  ArrowRight, Zap, Palette, Rocket, Accessibility, Globe2, ShieldCheck, Check, Sparkles, Star, GitBranch,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Starfield } from "@/components/Starfield"
import { Reveal } from "@/components/Reveal"
import { SpotlightCard } from "@/components/SpotlightCard"
import { CountUp } from "@/components/CountUp"

const features = [
  { icon: Zap, title: "Instant everything", desc: "Edge-cached and featherweight. Pages load before you finish blinking.", span: "md:col-span-2" },
  { icon: Palette, title: "Gorgeous by default", desc: "Glass cards, living gradients and buttery motion out of the box." },
  { icon: Rocket, title: "Push to launch", desc: "Commit to Git and it's live. Zero config, zero drama." },
  { icon: Globe2, title: "Global by design", desc: "Served from the edge, close to every one of your users.", span: "md:col-span-2" },
  { icon: Accessibility, title: "Kind to users", desc: "Responsive, keyboard friendly, honors reduced-motion." },
  { icon: ShieldCheck, title: "Secure & private", desc: "No trackers, no cookies, no nonsense. HTTPS everywhere.", span: "md:col-span-2" },
]

const plans = [
  { name: "Hobby", price: "$0", note: "For side projects", perks: ["1 project", "Community support", "Global CDN"], featured: false },
  { name: "Pro", price: "$19", note: "For shipping teams", perks: ["Unlimited projects", "Priority support", "Custom domains", "Analytics"], featured: true },
  { name: "Scale", price: "$99", note: "For serious orbit", perks: ["Everything in Pro", "SSO & audit logs", "99.99% SLA", "Dedicated engineer"], featured: false },
]

const faqs = [
  { q: "Is this really a real product?", a: "It's a demo landing page — but the stack under it is the real deal: React, Tailwind CSS v4 and shadcn/ui, deployed on Vercel." },
  { q: "How do I customize it?", a: "Edit src/App.tsx for content and src/index.css for the theme tokens. Everything is Tailwind utility classes." },
  { q: "How does deployment work?", a: "Push to GitHub. Vercel detects Vite, runs the build, and serves the static output from its edge network." },
  { q: "Can I add more shadcn components?", a: "Yes — components.json is already configured. Run npx shadcn@latest add <component>." },
]

const marquee = ["Vercel", "React", "Tailwind", "shadcn/ui", "Vite", "TypeScript", "Radix", "Framer Motion"]

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Starfield />

      <nav className="sticky top-0 z-50 border-b border-transparent backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight">🪐 <span className="text-gradient">Orbit</span></a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {["features", "pricing", "faq"].map((l) => (
              <a key={l} href={`#${l}`} className="capitalize transition-colors hover:text-foreground">{l}</a>
            ))}
          </div>
          <Button size="sm" asChild><a href="#pricing">Get started</a></Button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl overflow-x-clip px-6 pt-24 pb-16 text-center md:pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge><span className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" /> v1.0 has landed <ArrowRight className="size-3" /></Badge>
            <h1 className="mx-auto mt-8 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-tighter sm:text-7xl md:text-8xl">
              Ship ideas at the <span className="text-gradient">speed of thought</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Orbit is a blazing-fast launchpad for your next big thing. Beautiful by default, effortless to deploy, impossible to ignore.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild><a href="#pricing">Get started <ArrowRight /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="#features"><Sparkles /> See features</a></Button>
            </div>
          </motion.div>

          {/* Orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }}
            className="relative mx-auto mt-20 aspect-square w-[min(520px,88vw)]" aria-hidden
          >
            {[0, 14, 28].map((inset, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-dashed border-white/15 animate-spin-slow"
                style={{ inset: `${inset}%`, animationDuration: ["30s", "20s", "12s"][i], animationDirection: i === 1 ? "reverse" : "normal" }}
              >
                <span
                  className="absolute -top-1.5 left-1/2 size-3.5 rounded-full"
                  style={{ background: ["#00e5ff", "#ff4ecd", "#7c5cff"][i], boxShadow: `0 0 20px ${["#00e5ff", "#ff4ecd", "#7c5cff"][i]}` }}
                />
              </div>
            ))}
            <div className="absolute inset-[40%] animate-float rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#00e5ff_25%,#7c5cff_60%,#120a40)] shadow-[0_0_90px_#7c5cff,inset_-10px_-10px_30px_rgba(0,0,0,.5)]" />
          </motion.div>
        </section>

        {/* Marquee */}
        <section className="overflow-hidden border-y py-6 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-3 text-lg font-semibold text-muted-foreground/70">
                <Star className="size-4 text-violet" /> {m}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-32">
          <Reveal className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Built for <span className="text-gradient">lift-off</span></h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Everything you need to go from zero to launched, nothing you don't.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className={f.span}>
                <SpotlightCard className="h-full">
                  <CardHeader>
                    <div className="mb-2 grid size-12 place-items-center rounded-xl bg-linear-to-br from-violet/40 to-cyan/20">
                      <f.icon className="size-6" />
                    </div>
                    <CardTitle>{f.title}</CardTitle>
                    <CardDescription>{f.desc}</CardDescription>
                  </CardHeader>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-6 pt-32">
          <Reveal className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { n: 100, s: "", l: "Lighthouse score" },
              { n: 12000, s: "+", l: "Launches" },
              { n: 99, s: ".99%", l: "Uptime" },
              { n: 45, s: "ms", l: "Median TTFB" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-gradient text-5xl font-extrabold tracking-tight"><CountUp to={s.n} suffix={s.s} /></div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-32">
          <Reveal className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Simple, <span className="text-gradient">honest</span> pricing</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Start free. Upgrade when you're ready to go interstellar.</p>
          </Reveal>
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <SpotlightCard className={p.featured ? "h-full border-violet/60 shadow-[0_0_60px_-15px] shadow-violet" : "h-full"}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{p.name}</CardTitle>
                      {p.featured && <Badge className="border-violet/50 text-violet">Popular</Badge>}
                    </div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    <CardDescription>{p.note}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    <ul className="space-y-3 text-sm">
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-3"><Check className="size-4 text-cyan" /> {perk}</li>
                      ))}
                    </ul>
                    <Button variant={p.featured ? "default" : "outline"} className="w-full">Choose {p.name}</Button>
                  </CardContent>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-6 pt-32">
          <Reveal className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Questions, <span className="text-gradient">answered</span></h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-6 py-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-violet/20 to-pink/15 px-6 py-20 text-center backdrop-blur-md">
              <div aria-hidden className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-violet/40 blur-[100px]" />
              <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-6xl">Ready to <span className="text-gradient">orbit</span>?</h2>
              <p className="relative mx-auto mt-4 mb-10 max-w-md text-muted-foreground">Push your first commit and watch it go live in seconds.</p>
              <div className="relative flex flex-wrap justify-center gap-4">
                <Button size="lg">Launch now 🚀</Button>
                <Button size="lg" variant="outline"><GitBranch /> View on GitHub</Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Orbit. Made with ✨ and Claude Code.
      </footer>
    </div>
  )
}
