import Reveal from './Reveal'

type FeatureRowProps = {
  num: string
  title: string
  body: string
  bullets?: string[]
  visual: React.ReactNode
  /** Puts the visual on the left at md and up. Ignored on mobile, which always stacks. */
  flip?: boolean
  /** Tailwind text-colour class for the eyebrow and bullet dots. */
  accentText: string
  accentDot: string
}

export default function FeatureRow({
  num,
  title,
  body,
  bullets,
  visual,
  flip = false,
  accentText,
  accentDot,
}: FeatureRowProps) {
  return (
    <Reveal
      as="section"
      className="grid items-center gap-10 border-t border-rule py-14 md:grid-cols-2 md:gap-16 md:py-24"
    >
      <div className={flip ? 'md:order-2' : undefined}>
        <p className={`text-eyebrow uppercase ${accentText}`}>Feature {num}</p>
        <h2 className="mt-4 font-serif text-title text-balance text-ink">{title}</h2>
        <p className="mt-5 max-w-md text-lead text-body">{body}</p>
        {bullets && (
          <ul className="mt-7 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-muted">
                <span
                  aria-hidden="true"
                  className={`mt-2 size-1.5 shrink-0 rounded-full ${accentDot}`}
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={`flex justify-center ${flip ? 'md:order-1' : ''}`}>{visual}</div>
    </Reveal>
  )
}
