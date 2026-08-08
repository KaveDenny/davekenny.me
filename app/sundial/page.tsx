import type { Metadata } from 'next'
import Image from 'next/image'
import FeatureRow from '../components/FeatureRow'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { SOCIAL } from '../lib/projects'

export const metadata: Metadata = {
  title: 'Sundial',
  description:
    'Sundial finds the beer gardens where the sun is actually shining. Real-time sunshine ratings, curated spots and interactive maps. An iOS app by Dave Kenny.',
  alternates: { canonical: '/sundial' },
  openGraph: {
    type: 'website',
    url: '/sundial',
    title: 'Sundial: sunny skies, cold beers, perfect gardens',
    description:
      'Real-time sunshine ratings for beer gardens near you. An iOS app by Dave Kenny, now in private beta.',
  },
}

const FEATURES = [
  {
    num: '01',
    title: 'Curated recommendations',
    body: 'Hidden gems and obvious hotspots, picked by people who care about both the beer and the sunshine. Every spot has a rating, the details that matter, and a table you can book.',
    bullets: ['Community-curated venues', 'Ratings and reviews', 'Book a table without leaving the app'],
    img: '/images/iphone-15-pro-main.png',
    alt: 'The Sundial venue page for a rooftop bar, showing its rating, description, sunshine hours and a book-a-table button',
  },
  {
    num: '02',
    title: 'Plan your sunshine',
    body: 'Not just whether a garden is sunny now, but when the sun arrives, when it disappears behind the building opposite, and how many hours you actually get.',
    bullets: ['Sunshine start and end times', 'Total sunlit hours per venue', 'Pre-book while the sun lasts'],
    img: '/images/iphone-15-pro-order.png',
    alt: 'The Sundial sunshine planner, showing a venue currently in sunshine with sunshine beginning at 12.06pm, ending at 8.31pm, and eight total hours',
  },
  {
    num: '03',
    title: 'Directions that know the sun',
    body: 'Everything nearby on one map, with live directions. It will also tell you whether your destination is still going to be in the sun by the time you get there.',
    bullets: ['Turn-by-turn directions', 'Live arrival countdown', 'Sunshine forecast for where you are headed'],
    img: '/images/iphone-15-pro-map.png',
    alt: 'The Sundial map navigating to a rooftop bar with ten minutes left, noting the destination stays in sunshine until 8pm',
  },
  {
    num: '04',
    title: 'Exclusive deals',
    body: 'Discounts and promotions from partner gardens, surfaced right in the feed alongside the places nearest to you.',
    bullets: ['Partner discounts', 'Filter by rooftop, garden or indoor', 'Loyalty perks at your regulars'],
    img: '/images/iphone-15-pro-promo.png',
    alt: 'The Sundial home feed with a buy-one-get-one promotion banner above nearby rooftop venues',
  },
]

export default function Sundial() {
  return (
    <>
      <SiteHeader back current="Sundial" />

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
          <p className="text-eyebrow uppercase text-amber">iOS <span className="text-faint">·</span> Private beta</p>
          <h1 className="mt-6 font-serif text-display text-ink">Sundial</h1>
          <p className="mt-6 max-w-xl text-lead text-body">
            Sunny skies, cold beers, perfect gardens. Sundial tells you exactly where the
            sun is shining, and where the cold pints are waiting.
          </p>
          <a
            href={`mailto:${SOCIAL.email}?subject=Sundial%20beta`}
            className="mt-9 inline-block rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
          >
            Request an invite
          </a>
        </section>

        {/* HERO IMAGE — a product shot on a transparent background, so it is
            contained on the panel rather than cropped to fill it. */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-amber-tint sm:aspect-[16/9]">
            <Image
              src="/images/sundial-hero.png"
              alt="Three iPhones showing the Sundial app: a listings feed, the sunshine home screen, and a booking view"
              fill
              sizes="(min-width: 1152px) 1088px, 100vw"
              priority
              className="object-contain p-4 sm:p-8"
            />
          </div>
        </div>

        {/* STRAP */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="max-w-3xl font-serif text-title text-ink">
            An app for one very specific problem: finding the beer garden that still has{' '}
            <em className="italic text-amber">sun on it</em> at half six.
          </p>
        </section>

        {/* FEATURES */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {FEATURES.map((feature, i) => (
            <FeatureRow
              key={feature.num}
              num={feature.num}
              title={feature.title}
              body={feature.body}
              bullets={feature.bullets}
              flip={i % 2 === 1}
              accentText="text-amber"
              accentDot="bg-amber"
              visual={
                <Image
                  src={feature.img}
                  alt={feature.alt}
                  width={1077}
                  height={2250}
                  sizes="(min-width: 768px) 220px, 175px"
                  className="h-[365px] w-auto drop-shadow-2xl md:h-[460px]"
                />
              }
            />
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 border-t border-rule bg-amber-tint sm:mt-24">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-display text-ink">
                Be first to the <em className="italic text-amber">sunshine.</em>
              </h2>
              <p className="mt-6 max-w-lg text-lead text-body">
                Sundial is in private beta. Join it and help shape how people find a sunny
                spot for a pint.
              </p>
              <a
                href={`mailto:${SOCIAL.email}?subject=Sundial%20beta`}
                className="mt-9 inline-block rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
              >
                Request an invite
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
