import Link from 'next/link'
import type { Project } from '../lib/projects'

type ProjectCardProps = {
  project: Project
  /** The artwork shown in the card's panel. */
  visual: React.ReactNode
  index: number
  /**
   * Spans the full grid width and switches the panel to landscape. The caller
   * is responsible for the column span; this only handles the card itself.
   */
  featured?: boolean
}

export default function ProjectCard({ project, visual, index, featured = false }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={project.href} className="block focus-visible:outline-offset-4">
        {/* A ratio rather than a fixed height, so the artwork can be sized as a
            percentage of the panel and stay right at every column count. The
            featured card goes landscape once there is width for it. */}
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-sm ${
            featured ? 'aspect-4/5 sm:aspect-16/9' : 'aspect-4/5'
          } ${project.panelClass}`}
        >
          {/* Only the index sits over the panel. The artwork is centred and can
              be tall, so anything on the right-hand side collides with it. */}
          <span className="absolute top-4 left-4 text-eyebrow uppercase text-muted tabular-nums">
            {String(index).padStart(2, '0')}
          </span>
          {visual}
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3
            className={`font-serif text-ink ${
              featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
            }`}
          >
            {project.name}
          </h3>
          <span
            aria-hidden="true"
            className="text-lg text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink"
          >
            ↗
          </span>
        </div>
      </Link>

      <p
        className={`mt-2 max-w-md leading-relaxed text-body ${featured ? 'text-lead' : 'text-base'}`}
      >
        {project.summary}
      </p>
      <p className="mt-3 text-eyebrow uppercase text-muted">
        {project.platform} <span className="text-faint">·</span> {project.year}{' '}
        <span className="text-faint">·</span>{' '}
        <span className={project.accentText}>{project.status}</span>
      </p>
    </article>
  )
}
