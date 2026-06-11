import {
  Award,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Clock,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ITEMS = [
  { icon: Clock, label: "13 years' primary teaching experience" },
  { icon: GraduationCap, label: 'Level 7 SENDCo', highlight: true },
  { icon: HeartHandshake, label: 'Senior Mental Health Lead' },
  { icon: MessageCircle, label: 'Level 3 Elklan Supporting Language and Learning for 5-11s' },
  { icon: Users, label: "Member of The Tutors' Association" },
  { icon: ShieldCheck, label: 'Enhanced DBS checked' },
  { icon: Award, label: 'Fully insured' },
  { icon: Stethoscope, label: 'Paediatric First Aid' },
]

export function TrustBar() {
  return (
    <section aria-label="Credentials and assurances" className="bg-mint">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 py-5 md:px-8">
        {ITEMS.map(({ icon: Icon, label, highlight }) => (
          <div
            key={label}
            className={cn(
              'flex items-center gap-2 text-ink/85',
              highlight
                ? 'rounded-full bg-white/70 px-3 py-1.5 text-[0.95rem] font-semibold text-ink'
                : 'text-sm',
            )}
          >
            <Icon
              className={cn(highlight ? 'size-5' : 'size-4', 'text-sage-deep')}
              aria-hidden="true"
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
