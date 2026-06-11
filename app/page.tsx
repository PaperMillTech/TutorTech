import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { Empathy } from '@/components/sections/empathy'
import { About } from '@/components/sections/about'
import { Offer } from '@/components/sections/offer'
import { Evidence } from '@/components/sections/evidence'
import { Philosophy } from '@/components/sections/philosophy'
import { HowItWorks } from '@/components/sections/how-it-works'
import { WhereIWork } from '@/components/sections/where-i-work'
import { Faq } from '@/components/sections/faq'
import { Testimonials } from '@/components/sections/testimonials'
import { EnquiryForm } from '@/components/sections/enquiry-form'
import { SiteFooter } from '@/components/sections/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-sage-deep focus:px-5 focus:py-3 focus:text-white focus:shadow-md"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Empathy />
        <About />
        <Offer />
        <Evidence />
        <Philosophy />
        <HowItWorks />
        <WhereIWork />
        <Faq />
        <Testimonials />
        <EnquiryForm />
      </main>
      <SiteFooter />
    </>
  )
}
