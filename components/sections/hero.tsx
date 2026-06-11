import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-2 text-sm font-medium text-ink">
            <span className="size-2 rounded-full bg-sage-deep" aria-hidden="true" />
            Level 7 SENDCo · held by fewer than 5% of UK educators
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.1] text-ink md:text-5xl lg:text-[3.4rem]">
            Specialist primary tuition for children who learn in their own way.
          </h1>

          <p className="mt-6 max-w-prose text-pretty text-lg leading-relaxed text-ink/80">
            One-to-one English, phonics and maths — plus expert support for SEND
            and anxiety — from a former school leader and Level 7 SENDCo. Offering
            sessions at home in East Suffolk and North East Essex.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-sage-deep px-6 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Book a Free Consultation
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border-2 border-sage-deep px-6 py-3.5 text-base font-medium text-sage-deep transition-colors hover:bg-cream-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep"
            >
              See how it works
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-md">
              <Image
                src="/images/hero-studio.png"
                alt="A calm, light-filled tutoring studio with a tidy wooden desk, open children's books and a small plant by the window"
                width={720}
                height={820}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 -z-10 hidden size-32 rounded-3xl bg-mint md:block"
              aria-hidden="true"
            />
            <div
              className="absolute -right-4 -top-4 -z-10 hidden size-24 rounded-3xl bg-peach-soft md:block"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
