export function SiteFooter() {
  const badges = [
    'Enhanced DBS',
    'Fully insured',
    'Paediatric First Aid',
    'ICO registered',
  ]

  return (
    <footer className="bg-sage-deep px-5 py-14 text-cream md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold">
              The Woodbridge Tutor
            </p>
            <p className="mt-3 text-cream/85">
              Specialist primary tuition in Woodbridge, Suffolk.
            </p>
            <a
              href="mailto:kate@thewoodbridgetutor.co.uk"
              className="mt-3 inline-block rounded-md text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              kate@thewoodbridgetutor.co.uk
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/70">
              Areas served
            </p>
            <p className="mt-3 max-w-xs text-cream/85">
              Woodbridge · Ipswich · Colchester · the A12 corridor · online
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/70">
              Assurances
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full bg-cream/15 px-3 py-1 text-sm text-cream"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/20 pt-6 text-sm text-cream/75 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-5">
            <a
              href="#"
              className="rounded-md underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="rounded-md underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Safeguarding
            </a>
          </div>
          <p>© The Woodbridge Tutor</p>
        </div>
      </div>
    </footer>
  )
}
