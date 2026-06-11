'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SUPPORT_OPTIONS = [
  'English / Phonics / Maths',
  'SEND & SEMH support',
  'Communication & Language',
  'Personal, social & emotional development',
  'Assessment preparation (Y1 / Y4 / Y6)',
  'Support beyond mainstream school',
  'General enquiry',
]

const PREFERENCES = ['central Woodbridge', 'Home visit', 'Online']

const fieldClass =
  'w-full rounded-xl border border-input bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-deep'

const labelClass = 'mb-1.5 block text-sm font-medium text-ink'

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend wired up — ready for Formspree.
    // Replace this with: <form action="https://formspree.io/f/XXXX" method="POST">
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-md md:p-10">
            <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
              Book your free consultation.
            </h2>

            {submitted ? (
              <div
                role="status"
                className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-mint px-6 py-12 text-center"
              >
                <CheckCircle2 className="size-12 text-sage-deep" />
                <p className="font-serif text-2xl text-ink">Thank you.</p>
                <p className="max-w-sm text-base text-ink/75">
                  Your enquiry is on its way. Kate personally reads every message
                  and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="parent-name" className={labelClass}>
                        Parent name
                      </label>
                      <input
                        id="parent-name"
                        name="parentName"
                        type="text"
                        required
                        autoComplete="name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="child-age" className={labelClass}>
                        Child&apos;s age / school year
                      </label>
                      <input
                        id="child-age"
                        name="childAge"
                        type="text"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className={labelClass}>
                      What kind of support are you looking for?
                    </legend>
                    <p className="mb-2 text-sm text-ink/55">
                      Select all that apply.
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {SUPPORT_OPTIONS.map((opt) => (
                        <label
                          key={opt}
                          className="flex cursor-pointer items-start gap-2.5 text-base text-ink/85"
                        >
                          <input
                            type="checkbox"
                            name="support"
                            value={opt}
                            className="mt-1 size-4 accent-sage-deep"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className={labelClass}>
                      Where would you prefer your consultation?
                    </legend>
                    <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:gap-5">
                      {PREFERENCES.map((pref, i) => (
                        <label
                          key={pref}
                          className="flex cursor-pointer items-center gap-2.5 text-base text-ink/85"
                        >
                          <input
                            type="radio"
                            name="preference"
                            value={pref}
                            defaultChecked={i === 0}
                            className="size-4 accent-sage-deep"
                          />
                          {pref}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${fieldClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-sage-deep px-6 py-4 text-base font-medium text-white shadow-sm transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    Send my enquiry
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-ink/65">
                  Kate personally reads every enquiry and responds within 24
                  hours.
                </p>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
