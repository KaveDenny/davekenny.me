import type { Metadata } from 'next'
import FeatureRow from '../components/FeatureRow'
import SharedPhoneFrame from '../components/PhoneFrame'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { SOCIAL } from '../lib/projects'

export const metadata: Metadata = {
  title: 'Alculator',
  description:
    'Alculator is real-time blood alcohol tracking for iPhone and Apple Watch, calculated entirely on device with the Widmark formula. An app by Dave Kenny.',
  alternates: { canonical: '/alculator' },
  openGraph: {
    type: 'website',
    url: '/alculator',
    title: 'Alculator: know when you are clear',
    description:
      'Real-time BAC tracking for iPhone and Apple Watch. Every calculation happens on device. Coming soon.',
  },
}

export default function Alculator() {
  return (
    <>
      <SiteHeader back current="Alculator" />

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
          <p className="text-eyebrow uppercase text-violet">
            iOS · watchOS <span className="text-faint">·</span> Coming soon
          </p>
          <h1 className="mt-6 font-serif text-display text-ink">Alculator</h1>
          <p className="mt-6 max-w-xl text-lead text-body">
            Log a drink. Watch the curve rise. Get a tap on the wrist the moment
            you&rsquo;re clear.
          </p>

          <ul className="mt-9 flex flex-wrap gap-2">
            {['Widmark formula', 'On-device only', 'Watch haptics', 'iPhone · watchOS'].map(
              (chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-rule bg-violet-tint px-3 py-1.5 text-eyebrow uppercase text-violet"
                >
                  {chip}
                </li>
              )
            )}
          </ul>
        </section>

        {/* PRIVACY STRAP */}
        <section className="border-y border-rule bg-tint">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            <p className="max-w-3xl font-serif text-title text-ink">
              Every calculation happens on your phone.{' '}
              <em className="italic text-violet">Nothing leaves the device.</em>
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FeatureRow
            num="01"
            title="Live BAC card"
            body="Your current blood alcohol level, calculated in real time with the Widmark formula. A countdown tells you exactly when you hit zero."
            bullets={[
              'Widmark formula using sex, age and weight',
              'Three states: idle, rising, clearing',
              'Conservative mode alerts at 80% of the legal limit',
              'IE/EU, UK and zero-tolerance limits',
            ]}
            accentText="text-violet"
            accentDot="bg-violet"
            visual={<LiveBacScreen />}
          />

          <FeatureRow
            num="02"
            title="BAC curve"
            body="A live chart of the whole session, from first drink to zero. The projected elimination curve redraws every time you add a drink."
            bullets={[
              'Full session chart with projected curve',
              'Legal limit drawn on the graph',
              'History of past sessions with peak BAC',
            ]}
            flip
            accentText="text-violet"
            accentDot="bg-violet"
            visual={<CurveScreen />}
          />

          <FeatureRow
            num="03"
            title="Apple Watch companion"
            body="The watch is a terminal, not a second app. See your live BAC ring, log a drink in two taps, and feel a haptic the moment you're safe to drive."
            bullets={[
              'Live BAC ring on the watch face',
              'Drink picker with haptic confirmation',
              'Safe-to-drive haptic notification',
              'The iPhone does the actual work',
            ]}
            accentText="text-violet"
            accentDot="bg-violet"
            visual={<WatchPair />}
          />

          <FeatureRow
            num="04"
            title="Private by design"
            body="Every calculation runs on your device against your own profile. Nothing is sent to a server. Nothing is stored anywhere but your phone."
            bullets={[
              'Zero network requests during a session',
              'Profile stored locally on device',
              'Apple Health integration planned',
              'Save or discard sessions, your call',
            ]}
            flip
            accentText="text-violet"
            accentDot="bg-violet"
            visual={<SettingsScreen />}
          />
        </div>

        {/* PLATFORM STATUS */}
        <section className="mt-16 border-t border-rule sm:mt-24">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="text-eyebrow uppercase text-muted">Where it&rsquo;s at</h2>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-sm bg-rule sm:grid-cols-3">
              {[
                ['iPhone', 'Design complete · Xcode next', true],
                ['Apple Watch', 'Design complete · Xcode next', true],
                ['Apple Health', 'Integration planned', false],
              ].map(([name, status, active]) => (
                <div key={name as string} className="bg-paper p-6">
                  <dt className="font-serif text-2xl text-ink">{name}</dt>
                  <dd
                    className={`mt-2 text-eyebrow uppercase ${active ? 'text-violet' : 'text-faint'}`}
                  >
                    {status}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-rule bg-violet-tint">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-display text-ink">
                Know when you&rsquo;re <em className="italic text-violet">clear.</em>
              </h2>
              <p className="mt-6 max-w-lg text-lead text-body">
                Alculator is coming to the App Store. Be the first to know when it lands.
              </p>
              <a
                href={`mailto:${SOCIAL.email}?subject=Alculator`}
                className="mt-9 inline-block rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
              >
                Notify me
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

/* -------------------------------------------------------------------------
   Mockups. Alculator has no screenshots yet, so these stand in for them —
   plain markup, no images, and they scale with the layout.
------------------------------------------------------------------------- */

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return <SharedPhoneFrame className="w-[215px] md:w-[250px]">{children}</SharedPhoneFrame>
}

function LiveBacScreen() {
  return (
    <PhoneFrame>
      <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-muted">Right now</p>

      <div className="mt-3 rounded-xl bg-violet-tint p-4 text-center">
        <p className="font-serif text-4xl leading-none text-violet tabular-nums">0.062</p>
        <p className="mt-2 text-[0.5rem] uppercase tracking-[0.12em] text-muted">
          Blood alcohol (‰)
        </p>
        <p className="mt-3 inline-block rounded-full bg-white px-2.5 py-1 text-[0.5rem] uppercase tracking-[0.1em] text-violet">
          Clearing · above limit
        </p>
      </div>

      <dl className="mt-3 flex justify-between rounded-lg border border-rule px-3 py-2.5">
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

      <ul className="mt-3 flex gap-1.5">
        {['Beer', 'Wine', 'Spirit', 'Custom'].map((drink) => (
          <li
            key={drink}
            className="flex-1 rounded-lg border border-rule py-2 text-center text-[0.4375rem] uppercase tracking-[0.08em] text-muted"
          >
            {drink}
          </li>
        ))}
      </ul>
    </PhoneFrame>
  )
}

function CurveScreen() {
  return (
    <PhoneFrame>
      <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-muted">Session BAC</p>
      <p className="mt-1 font-serif text-2xl leading-none text-violet tabular-nums">0.062</p>

      <div className="relative mt-4">
        <svg viewBox="0 0 180 110" className="w-full" role="img" aria-label="A chart of blood alcohol over the session, peaking after the third drink and falling below the legal limit at about 2am">
          <defs>
            <linearGradient id="bacFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* legal limit */}
          <line x1="0" y1="72" x2="180" y2="72" stroke="#c9c2b2" strokeWidth="1" strokeDasharray="3,3" />

          <path
            d="M0,110 Q20,110 30,74 Q50,26 70,17 Q90,12 100,20 Q120,33 140,66 Q160,96 180,110"
            fill="url(#bacFill)"
          />
          <path
            d="M0,110 Q20,110 30,74 Q50,26 70,17 Q90,12 100,20"
            fill="none"
            stroke="#6d28d9"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M100,20 Q120,33 140,66 Q160,96 180,110"
            fill="none"
            stroke="#6d28d9"
            strokeWidth="2"
            strokeDasharray="4,3"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="20" r="3.5" fill="#6d28d9" />

          <line x1="0" y1="110" x2="180" y2="110" stroke="#e8e3d8" strokeWidth="1" />
        </svg>
        <span className="absolute top-[54%] right-0 text-[0.4375rem] uppercase tracking-[0.08em] text-muted">
          Legal limit
        </span>
      </div>

      <div className="mt-1 flex justify-between text-[0.4375rem] text-faint tabular-nums">
        {['10pm', '11pm', '12am', '1am', '2am'].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <p className="mt-3 rounded-lg bg-violet-tint px-3 py-2 text-[0.5rem] uppercase tracking-[0.1em] text-violet">
        Safe to drive in 2h 14m
      </p>
    </PhoneFrame>
  )
}

function WatchPair() {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <figure className="text-center">
        <figcaption className="mb-3 text-[0.5rem] uppercase tracking-[0.14em] text-muted">
          Active
        </figcaption>
        <div className="flex h-[150px] w-[125px] flex-col items-center justify-center rounded-[1.75rem] border-[6px] border-ink bg-white p-3 shadow-xl">
          <div className="relative size-[68px]">
            <svg viewBox="0 0 36 36" className="size-full -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#efeafb" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#6d28d9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="73 97"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-base leading-none text-violet tabular-nums">
                0.062
              </span>
              <span className="text-[0.4375rem] uppercase tracking-[0.1em] text-muted">BAC</span>
            </div>
          </div>
          <p className="mt-2 text-[0.4375rem] uppercase tracking-[0.1em] text-muted">
            Safe to drive
          </p>
          <p className="text-xs font-semibold text-ink tabular-nums">2:14</p>
        </div>
      </figure>

      <figure className="text-center">
        <figcaption className="mb-3 text-[0.5rem] uppercase tracking-[0.14em] text-muted">
          Clear
        </figcaption>
        <div className="flex h-[150px] w-[125px] flex-col items-center justify-center rounded-[1.75rem] border-[6px] border-ink bg-ink p-3 text-center shadow-xl">
          <span aria-hidden="true" className="text-2xl text-[#4ade80]">
            ✓
          </span>
          <p className="mt-2 text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-[#4ade80]">
            Safe to drive
          </p>
          <p className="mt-1 text-[0.4375rem] uppercase tracking-[0.1em] text-faint tabular-nums">
            BAC 0.000
          </p>
        </div>
      </figure>
    </div>
  )
}

function SettingsScreen() {
  return (
    <PhoneFrame>
      <p className="text-[0.5625rem] uppercase tracking-[0.14em] text-muted">Settings</p>
      <p className="mt-1 font-serif text-xl text-ink">Your profile</p>

      <dl className="mt-3 space-y-2">
        {[
          ['Legal limit', 'IE/EU · 0.050'],
          ['Conservative mode', 'On'],
          ['Notifications', 'Enabled'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-lg border border-rule px-3 py-2.5"
          >
            <dt className="text-[0.5rem] uppercase tracking-[0.08em] text-muted">{label}</dt>
            <dd className="text-[0.5rem] font-semibold text-violet">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 rounded-lg bg-tint p-3">
        <p className="text-[0.4375rem] uppercase tracking-[0.12em] text-muted">Privacy</p>
        <p className="mt-1.5 text-[0.5rem] leading-relaxed text-body">
          All data is stored on this device. No account required. Nothing is ever sent to a
          server.
        </p>
      </div>
    </PhoneFrame>
  )
}
