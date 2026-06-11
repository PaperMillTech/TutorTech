import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TESTIMONIALS = [
  { attribution: 'Parent of a Year 4 pupil' },
  { attribution: 'Parent of a Year 1 pupil' },
  { attribution: 'Parent of a Year 6 pupil' },
]

export function Testimonials() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            What families say.
          </h2>
          <p className="mt-3 text-base text-ink/60">
            Placeholder quotes — to be replaced with genuine family testimonials.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.attribution} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-dashed border-sage/60 bg-card p-7 shadow-sm">
                <Quote className="size-8 text-peach" aria-hidden="true" />
                <blockquote className="mt-4 grow text-pretty text-lg leading-relaxed text-ink/70">
                  &ldquo;Your words here — a warm, specific note from a parent
                  about the difference one-to-one support made for their
                  child.&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-sage-deep">
                  — {t.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
