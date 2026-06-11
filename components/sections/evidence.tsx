import { Lightbulb, SearchCheck, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const POINTS = [
  { icon: Lightbulb, label: 'Evidence-informed methods' },
  { icon: SearchCheck, label: 'Misconceptions caught early' },
  { icon: UserRound, label: 'Built around your child' },
]

export function Evidence() {
  return (
    <section className="bg-cream-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Why one-to-one works.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">
            One-to-one tuition is one of the most strongly evidenced ways to help
            a child make progress — the Education Endowment Foundation finds it can
            deliver several additional months of progress, with the greatest
            impact at primary level. My teaching is evidence-informed throughout:
            small, well-sequenced steps, regular checks to catch misconceptions
            early, worked examples, and lots of structured practice — all adapted
            to how your individual child learns best.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-mint">
                  <Icon className="size-5 text-sage-deep" />
                </span>
                <span className="font-medium text-ink">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
