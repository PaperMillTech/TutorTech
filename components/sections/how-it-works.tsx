import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: '1',
    title: 'Free consultation',
    body: 'We talk through your child\u2019s needs and whether my approach is the right fit. No pressure, no obligation.',
  },
  {
    n: '2',
    title: 'A personalised plan',
    body: 'I design a bespoke programme around your child\u2019s profile, interests, learning style and goals.',
  },
  {
    n: '3',
    title: 'Clear, timely updates',
    body: 'You\u2019ll always know how your child is progressing.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-mint px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-white/60 bg-card p-7 shadow-sm">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-sage-deep font-serif text-xl font-semibold text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
