import { Reveal } from '@/components/reveal'

const WORRIES = [
  'My child is bright, but they\u2019ve started to lose confidence.',
  'There are gaps in their learning and school can\u2019t give them one-to-one time.',
  'Mornings are a battle \u2014 getting them through the school gate is getting harder.',
  'We\u2019re waiting months for support and don\u2019t know where to turn.',
  'They\u2019re neurodivergent and need teaching that actually fits how they think.',
  'They\u2019re not in mainstream school right now and I want to keep their learning going.',
]

export function Empathy() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Does this sound familiar?
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            If any of this rings true, you&apos;re in exactly the right place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {WORRIES.map((worry, i) => (
            <Reveal key={worry} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-pretty text-lg leading-relaxed text-ink/85">
                  &ldquo;{worry}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg text-ink/80">
            Whatever brought you here, you don&apos;t have to work it out alone.{' '}
            <a
              href="#contact"
              className="font-medium text-sage-deep underline decoration-sage/50 underline-offset-4 transition-colors hover:decoration-sage-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep"
            >
              Tell me a little about your child
            </a>{' '}
            and we&apos;ll take it from there.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
