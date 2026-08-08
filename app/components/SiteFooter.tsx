import { SITE, SOCIAL } from '../lib/projects'

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-eyebrow uppercase text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={`mailto:${SOCIAL.email}`} className="transition-colors hover:text-ink">
            {SOCIAL.email}
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
