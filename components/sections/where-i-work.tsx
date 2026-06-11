import { Home, Car, Monitor } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TILES = [
  { icon: Home, label: 'Woodbridge Studio' },
  { icon: Car, label: 'Home Visits — A12 corridor' },
  { icon: Monitor, label: 'Online' },
]

export function WhereIWork() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Where I work
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
            Sessions take place in the comfort of your own home so that your
            child feels comfortable and safe in familiar surroundings. Alternative
            locations to best meet your child&apos;s needs can be discussed during
            your free consultation, including pricing &amp; payment, time &amp;
            travel arrangements.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {TILES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-mint">
                  <Icon className="size-6 text-sage-deep" />
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
