import Image from 'next/image'
import PhoneFrame from './components/PhoneFrame'
import PhoneShot from './components/PhoneShot'
import ProjectCard from './components/ProjectCard'
import Reveal from './components/Reveal'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { PROJECTS, SOCIAL, type Project } from './lib/projects'

/**
 * Card artwork, sized as a percentage of the panel so it holds up at one, two
 * and three columns. Framed screenshots and bare device renders need very
 * different widths — the latter carry a lot of transparent margin.
 */
function projectVisual(project: Project, featured: boolean) {
  if (featured) return <FeaturedDeck project={project} />

  if (project.cover?.framed) {
    return (
      <PhoneShot
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes="(min-width: 1024px) 200px, (min-width: 640px) 240px, 170px"
        className="w-[46%]"
      />
    )
  }

  if (project.cover) {
    return (
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 360px, 270px"
        className="w-[76%] drop-shadow-2xl"
      />
    )
  }

  return <AlculatorPreview />
}

/**
 * Artwork for the featured card. Its panel is landscape from `sm` up, too wide
 * for one handset, so two more fan out behind. Widths are percentages of the
 * panel — hence `w-full` here, so they resolve against the panel and not
 * against a shrink-to-fit wrapper. The flanking screens are decorative and
 * drop away on mobile, where only the swipe card is shown.
 */
function FeaturedDeck({ project }: { project: Project }) {
  if (!project.cover) return null

  return (
    <div className="flex w-full items-center justify-center">
      <PhoneShot
        src="/images/spoonfed/11-home.png"
        alt=""
        width={1206}
        height={2622}
        sizes="(min-width: 640px) 19vw, 1px"
        className="hidden w-[19%] -rotate-6 sm:block"
      />
      <PhoneShot
        src={project.cover.src}
        alt={project.cover.alt}
        width={project.cover.width}
        height={project.cover.height}
        sizes="(min-width: 640px) 24vw, 48vw"
        className="w-[46%] sm:relative sm:z-10 sm:-mx-[3%] sm:w-[24%]"
      />
      <PhoneShot
        src="/images/spoonfed/03-matched-meals.png"
        alt=""
        width={1206}
        height={2622}
        sizes="(min-width: 640px) 19vw, 1px"
        className="hidden w-[19%] rotate-6 sm:block"
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
          <h1 className="max-w-4xl font-serif text-display text-ink">
            Marketing, video, and the{' '}
            <em className="italic text-amber">weird exciting edge</em> of building things
            myself.
          </h1>

          <p className="mt-8 max-w-2xl text-lead text-body">
            By day I work on brand, story and video. The rest of the time I build small
            iOS apps, mostly to find out whether I can.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#work"
              className="rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
            >
              See the work
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="text-eyebrow uppercase text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              {SOCIAL.email}
            </a>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-8 border-t border-rule">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-title text-ink">Things I&rsquo;ve built</h2>
              <span className="text-eyebrow uppercase text-muted tabular-nums">
                {String(PROJECTS.length).padStart(2, '0')} projects
              </span>
            </div>

            {/* Two columns, with the first project spanning both. Three equal
                cards left one stranded on its own row. */}
            <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2">
              {PROJECTS.map((project, i) => {
                const featured = i === 0
                return (
                  <Reveal
                    key={project.slug}
                    delay={i * 90}
                    className={featured ? 'sm:col-span-2' : undefined}
                  >
                    <ProjectCard
                      project={project}
                      index={i + 1}
                      featured={featured}
                      visual={projectVisual(project, featured)}
                    />
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-8 border-t border-rule">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 className="text-eyebrow uppercase text-muted">About</h2>
            <Reveal className="max-w-2xl">
              <p className="font-serif text-title text-ink">
                Side projects, passion projects, and everything in between.
              </p>
              <p className="mt-6 text-lead text-body">
                Most of my work lives at the intersection of marketing and video:
                figuring out what a brand is actually trying to say, then making
                something people want to watch.
              </p>
              <p className="mt-4 text-lead text-body">
                The apps are the other half. I&rsquo;m not a trained engineer; I build
                them the way I build everything else, by starting and seeing what
                happens. Sundial and Alculator both came out of that.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-rule bg-tint">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <h2 className="max-w-3xl font-serif text-display text-ink">
              Got something worth <em className="italic">making?</em>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
              >
                {SOCIAL.email}
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-eyebrow uppercase text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                Find me on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

/**
 * Alculator has no screenshots yet, so the card shows its core UI in a drawn
 * handset — the same frame the other two cards use, so all three read as iOS.
 */
function AlculatorPreview() {
  return (
    <PhoneFrame className="w-[56%]">
      <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-muted">Right now</p>

      <div className="mt-3 rounded-xl bg-violet-tint p-3 text-center">
        <p className="font-serif text-3xl leading-none text-violet tabular-nums">0.062</p>
        <p className="mt-1.5 text-[0.5rem] uppercase tracking-[0.12em] text-muted">
          Blood alcohol
        </p>
        <p className="mt-2 inline-block rounded-full bg-white px-2 py-0.5 text-[0.5rem] uppercase tracking-[0.1em] text-violet">
          Clearing
        </p>
      </div>

      <dl className="mt-3 flex justify-between rounded-lg border border-rule px-2.5 py-2">
        {[
          ['Clear in', '2h 14m'],
          ['Peak', '0.094'],
          ['Drinks', '3'],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-[0.4375rem] uppercase tracking-[0.1em] text-muted">{label}</dt>
            <dd className="mt-0.5 text-[0.625rem] font-semibold text-ink tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-2.5 flex gap-1">
        {['Beer', 'Wine', 'Spirit', '+'].map((drink) => (
          <li
            key={drink}
            className="flex-1 rounded-md border border-rule py-1.5 text-center text-[0.4375rem] uppercase tracking-[0.06em] text-muted"
          >
            {drink}
          </li>
        ))}
      </ul>
    </PhoneFrame>
  )
}
