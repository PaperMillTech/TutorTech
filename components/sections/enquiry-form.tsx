import { Reveal } from '@/components/reveal'

export function EnquiryForm() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream-deep px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-md md:p-10">
            <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
              Arrange your free consultation.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              Email{' '}
              <a
                href="mailto:kate@thewoodbridgetutor.co.uk"
                className="font-semibold text-sage-deep underline underline-offset-4"
              >
                kate@thewoodbridgetutor.co.uk
              </a>{' '}
              or phone me directly on{' '}
              <a
                href="tel:07469541313"
                className="font-semibold text-sage-deep underline underline-offset-4"
              >
                07469541313
              </a>
              . Feel free to leave a voicemail and I will respond to your enquiry as soon as possible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
