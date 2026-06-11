'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'What ages do you teach?',
    a: 'Children aged 4 to 11, across the whole primary range. This may include older children depending on their level of need.',
  },
  {
    q: 'Do you have SEND experience?',
    a: 'Yes — I\u2019m a Level 7 SENDCo and Senior Mental Health Lead, and I support a wide range of SEND and SEMH needs.',
  },
  {
    q: 'Do you offer 11+ preparation?',
    a: 'No. I focus on deep curriculum understanding and confidence rather than exam cramming.',
  },
  {
    q: 'Where do sessions happen?',
    a: 'Sessions take place in the comfort of your own home so that your child feels comfortable and safe in familiar surroundings. Alternative locations to best meet your child\u2019s needs can be discussed during your free consultation, including pricing & payment, time & travel arrangements.',
  },
  {
    q: 'Are you DBS checked and insured?',
    a: 'Yes — Enhanced DBS checked, fully insured, and Paediatric First Aid trained.',
  },
  {
    q: 'What\u2019s your cancellation policy?',
    a: 'I ask for 48 hours\u2019 notice to cancel or rearrange a session.',
  },
  {
    q: 'How do we start?',
    a: 'Book a free consultation. I\u2019ll get back to you within 24 hours.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 bg-cream-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Questions parents often ask.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep"
                    >
                      <span className="text-lg font-medium text-ink">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          'size-5 shrink-0 text-sage-deep transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-base leading-relaxed text-ink/75">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
