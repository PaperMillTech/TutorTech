import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const CHIPS = [
  'First Class BA (Hons) Primary Education with Qualified Teacher Status',
  'Postgraduate National Award for SEN Coordination (Level 7)',
  'Senior Mental Health Lead',
  'Level 3 Elklan Supporting Language and Learning for 5-11s',
  "Member of The Tutors' Association",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1fr] md:gap-14">
        <Reveal>
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-border shadow-md">
              <Image
                src="/images/kate-portrait.jpg"
                alt="Portrait of Kate, a warm and smiling primary tutor wearing a staff lanyard"
                width={560}
                height={747}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 hidden size-28 rounded-3xl bg-peach md:block"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Hello, I&apos;m Kate.
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/80">
            <p>
              As a dedicated teacher and SENDCo, I aim to promote a life-long
              love of learning so that every child is able to reach their full
              potential and achieve their hopes, dreams and aspirations
              regardless of their learning differences. I am a passionate
              educator with a nurturing, supportive and calm approach to
              learning.
            </p>
            <p>
              I believe in the importance of laying the foundations for future
              learning and understand that children can face many barriers along
              the way. As well as improved progress, my role is to encourage your
              child to develop their confidence and overall self-esteem whilst
              also aiming to promote independent and resilient learners. Dedicated
              time, patience and encouragement helps to establish a positive
              mindset and an improved attitude to learning.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="rounded-full bg-mint px-4 py-2 text-sm font-medium text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
