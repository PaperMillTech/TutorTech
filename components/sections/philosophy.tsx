import { Reveal } from '@/components/reveal'

export function Philosophy() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-3xl bg-sage-deep px-7 py-12 md:px-14 md:py-16">
            <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold text-cream md:text-4xl">
              Why I don&apos;t do 11+ cramming.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">
              Every child deserves to genuinely understand their learning — not
              just pass a test. My focus is deep, lasting curriculum fluency and
              real confidence: the kind that serves a child for life, long after
              exam day. Strong results become the by-product of genuine mastery,
              not the goal.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
