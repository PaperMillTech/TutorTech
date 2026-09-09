import { Reveal } from '@/components/reveal'

const IMAGES = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-04%20at%2012.41.43-chKEtRnMfm9WJjOYNb8jGHrF0mPIuO.jpeg',
    alt: 'Bright sunflowers and colourful mugs in the tutoring space',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-04%20at%2012.41.42%20%281%29-l86J6W87HkUo5ZsbU99tBSVH1csNNa.jpeg',
    alt: 'A notebook, pen and cheerful stationery prepared for learning',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-04%20at%2012.41.42-5v2r90hrgnBHV7uJ7o1JHIzR1TPgxj.jpeg',
    alt: 'The Woodbridge Tutor lanyard and notebook on a teaching desk',
  },
]

export function TutorGallery() {
  return (
    <section aria-label="Inside the tutoring space" className="bg-cream-deep px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-deep">A welcoming space</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            Calm, child-centred and ready for learning.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {IMAGES.map((image, index) => (
            <Reveal key={image.src} delay={index * 80}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
