import {
  BookOpen,
  SpellCheck,
  Calculator,
  MessagesSquare,
  Sparkles,
  HeartPulse,
  ClipboardCheck,
  Trees,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CORE = [
  {
    icon: BookOpen,
    title: 'English',
    body: 'Tailored support for reading, writing, grammar, punctuation and spelling — plus fine-motor skills (pencil and scissor control) and handwriting.',
  },
  {
    icon: SpellCheck,
    title: 'Phonics',
    body: 'Systematic Synthetic Phonics (SSP) to build strong foundations in early reading and writing, and grow confidence and fluency at all levels.',
  },
  {
    icon: Calculator,
    title: 'Maths',
    body: 'Targeted teaching from Reception to Year 6 that scaffolds learning and clears up misconceptions, with greater-depth challenge — fluency, reasoning and problem-solving at mastery level.',
  },
]

const COMMUNICATION = [
  {
    icon: MessagesSquare,
    title: 'Communication & Language',
    body: 'Strategies for speech, language and communication needs, drawing on Elklan training, deep EYFS knowledge and experience working alongside speech and language therapists.',
  },
  {
    icon: Sparkles,
    title: 'Personal, Social & Emotional Development',
    body: 'Self-regulation support to help your child understand and manage their feelings, build perseverance, improve turn-taking and form positive attachments.',
  },
]

const ASSESSMENTS = [
  'Year 1 Phonics Screening Check',
  'Year 4 Multiplication Tables Check',
  'Year 6 SATs',
]

function CardItem({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-mint">
        <Icon className="size-6 text-sage-deep" />
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-ink/75">{body}</p>
    </div>
  )
}

function GroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-sage-deep">
      {children}
    </h3>
  )
}

export function Offer() {
  return (
    <section id="offer" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-ink md:text-4xl">
            What I offer
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            Every programme is built around your child — but here&apos;s the range
            of support I provide.
          </p>
        </Reveal>

        {/* Group A */}
        <div className="mt-12">
          <Reveal>
            <GroupHeading>Core Curriculum</GroupHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {CORE.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <CardItem {...item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Group B */}
        <div className="mt-12">
          <Reveal>
            <GroupHeading>Communication, Language &amp; Wellbeing</GroupHeading>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {COMMUNICATION.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <CardItem {...item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Group C — feature panel */}
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-peach-soft p-8 md:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white">
                <HeartPulse className="size-7 text-sage-deep" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  Specialist SEND &amp; SEMH Support
                </h3>
                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink/80">
                  Consistent, child-centred support for children with SEND and/or
                  social, emotional and mental health needs — guided by individual
                  support plans and the provision set out in a child&apos;s
                  Education, Health and Care Plan (EHCP). This includes
                  Emotionally Based School Avoidance (EBSA), anxiety,
                  neurodivergence (ADHD, autism, sensory processing disorder,
                  dyslexia, dyspraxia, dyscalculia) and learning disabilities.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Group D */}
        <div className="mt-12">
          <Reveal>
            <GroupHeading>Assessment Preparation</GroupHeading>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {ASSESSMENTS.map((label, i) => (
              <Reveal key={label} delay={i * 70}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <ClipboardCheck className="size-5 shrink-0 text-sage-deep" />
                  <span className="font-medium text-ink">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-4 text-base italic text-ink/70">
              Calm, confidence-first preparation — never high-pressure drilling.
            </p>
          </Reveal>
        </div>

        {/* Group E */}
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-mint">
                <Trees className="size-7 text-sage-deep" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  Support beyond mainstream school
                </h3>
                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink/80">
                  Practical, play-based learning shaped around your child&apos;s
                  individual interests, including support for children who are not
                  currently in mainstream education.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
