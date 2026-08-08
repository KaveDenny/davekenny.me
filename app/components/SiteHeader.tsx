import Link from 'next/link'
import { SITE, SOCIAL } from '../lib/projects'

type SiteHeaderProps = {
  /** Renders a back link instead of the site name — used on project pages. */
  back?: boolean
  /** Shown centre-right on project pages so you know where you are. */
  current?: string
}

const linkClass =
  'text-eyebrow font-medium uppercase text-muted transition-colors hover:text-ink'

export default function SiteHeader({ back = false, current }: SiteHeaderProps) {
  return (
    <header className="border-b border-rule">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8"
      >
        {back ? (
          <Link href="/" className={linkClass}>
            <span aria-hidden="true">←</span> Dave Kenny
          </Link>
        ) : (
          <Link href="/" className="text-eyebrow font-medium uppercase text-ink">
            {SITE.name}
          </Link>
        )}

        <div className="flex items-center gap-5 sm:gap-7">
          {current ? (
            <span className="text-eyebrow uppercase text-faint">{current}</span>
          ) : (
            <>
              <Link href="/#work" className={linkClass}>
                Work
              </Link>
              <Link href="/#about" className={linkClass}>
                About
              </Link>
            </>
          )}
          <a href={`mailto:${SOCIAL.email}`} className={linkClass}>
            Email
          </a>
        </div>
      </nav>
    </header>
  )
}
