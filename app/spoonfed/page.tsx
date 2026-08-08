import type { Metadata } from 'next'
import FeatureRow from '../components/FeatureRow'
import PhoneShot from '../components/PhoneShot'
import Reveal from '../components/Reveal'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { SOCIAL } from '../lib/projects'

export const metadata: Metadata = {
  title: 'SpoonFed',
  description:
    'SpoonFed is a recipe app for two people. You each swipe through meals on your own, and when you both like the same one it becomes a match. An iOS app by Dave Kenny, in private beta.',
  alternates: { canonical: '/spoonfed' },
  openGraph: {
    type: 'website',
    url: '/spoonfed',
    title: 'SpoonFed: dinner, decided',
    description:
      'A recipe app for two people. Swipe separately; what you both like becomes your week. In private beta on TestFlight.',
  },
}

const STEPS = [
  ['Pair up', 'One person invites the other by email. They accept on their own phone.'],
  [
    'Swipe separately',
    'You each go through recipes at your own pace. Neither of you sees what the other picked.',
  ],
  ['Match', "Like the same meal and it becomes a match. You're both told."],
  ['Plan the week', 'Matched meals go into a shared plan you can drag into order.'],
  ['Shop', 'The plan becomes a shopping list grouped by aisle, scaled to your household.'],
  ['Cook', 'Full method with step-by-step photos. Tick meals off as you go.'],
]

const accent = { accentText: 'text-coral', accentDot: 'bg-coral' }

/**
 * Two swipe cards, overlapped and tilted, so the row reads as a deck you work
 * through rather than a single static screen. The back card is decorative
 * repetition, so it drops away on small screens where there is no room.
 */
function SwipeDeck() {
  return (
    <div className="flex items-center justify-center">
      {/* Peeking out behind — the same card the hero already showed. */}
      <div className="hidden -rotate-6 sm:block" aria-hidden="true">
        <PhoneShot
          src="/images/spoonfed/00-swipe-deck.png"
          alt=""
          width={1206}
          height={2622}
          sizes="190px"
          className="w-[170px] md:w-[190px]"
        />
      </div>
      <PhoneShot
        src="/images/spoonfed/00b-swipe-deck-alt.png"
        alt="A SpoonFed swipe card: a full-screen photo of Cheesy Spiced Beef Meatballs, 40 minutes, 2 servings, with a cross to reject it and a tick to like it"
        width={1206}
        height={2622}
        sizes="(min-width: 768px) 230px, 200px"
        className="w-[200px] sm:-ml-12 sm:rotate-3 md:w-[230px]"
      />
    </div>
  )
}

export default function SpoonFed() {
  return (
    <>
      <SiteHeader back current="SpoonFed" />

      <main id="main">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
            <div>
              <p className="text-eyebrow uppercase text-coral">
                iOS <span className="text-faint">·</span> Private beta
              </p>
              <h1 className="mt-6 font-serif text-display text-ink">SpoonFed</h1>
              <p className="mt-6 max-w-xl text-lead text-body">
                A recipe app for two people. You each swipe through meals on your own, and
                when you both like the same one it becomes a match.
              </p>
              <p className="mt-6 font-serif text-2xl text-coral italic sm:text-3xl">
                Dinner, decided.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <PhoneShot
                src="/images/spoonfed/00-swipe-deck.png"
                alt="The SpoonFed swipe deck: a full-screen photo of Pak Choi Teriyaki Noodles with its cooking time and servings, and buttons to reject or like it"
                width={1206}
                height={2622}
                sizes="(min-width: 768px) 300px, 240px"
                className="w-[240px] md:w-[300px]"
                priority
              />
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="border-y border-rule bg-coral-tint">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="max-w-3xl font-serif text-title text-ink">
              &ldquo;What do you fancy?&rdquo; &ldquo;I don&rsquo;t mind, what do you
              fancy?&rdquo; And then you order a takeaway.
            </p>
            <p className="mt-6 max-w-xl text-lead text-body">
              Deciding what to eat with someone else is a negotiation nobody wants to have
              while hungry, and most recipe apps are built for one person browsing alone.
              SpoonFed takes the negotiation out of it: a meal only surfaces once you have
              both, separately, said yes to it.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="text-eyebrow uppercase text-muted">How it works</h2>
          <ol className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                {/* The real brand gradient, used decoratively. Numerals are large
                    and bold, which clears AA on the darker end of the ramp. */}
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-coral-deep to-coral text-sm font-bold text-white tabular-nums"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-body">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FEATURES */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FeatureRow
            title="One meal at a time. Yes or no."
            body="This is the whole interaction. A photo, how long it takes, how many it feeds, then yes or no. No lists to compare, no scrolling through options together, no talking anyone into anything. You go through the deck on your own phone, at your own pace."
            bullets={[
              'One meal on screen at a time',
              'Neither of you sees what the other picked',
              'Your likes stay yours until they match',
            ]}
            {...accent}
            visual={<SwipeDeck />}
          />

          <FeatureRow
            title="Or browse the whole catalogue"
            body="If you would rather go looking than be shown, the full catalogue is there: by cuisine, by mood, by how long you have got. Liking works the same way from anywhere."
            bullets={[
              'Around 4,300 meals with photos, ingredients and method',
              'Browse by cuisine, mood or cooking time',
              'Like from the grid or from the recipe itself',
            ]}
            flip
            {...accent}
            visual={
              <PhoneShot
                src="/images/spoonfed/02-explore-browse.png"
                alt="Browsing the Quick category in SpoonFed, a grid of meals each with a photo, cooking time and a like button"
                width={1179}
                height={2556}
                sizes="(min-width: 768px) 250px, 210px"
                className="w-[210px] md:w-[250px]"
              />
            }
          />

          <FeatureRow
            title="What you both like becomes your week"
            body="When you have both liked the same meal it becomes a match, and you are both told. The matching runs on the server, so it works whether or not either of you has the app open."
            bullets={[
              'Matches arrive as a notification',
              'Matched meals collect in one shared list',
              'No negotiating, no one has to be the decider',
            ]}
            {...accent}
            visual={
              <PhoneShot
                src="/images/spoonfed/03-matched-meals.png"
                alt="The My Meals screen in SpoonFed, listing matched meals with cooking times and servings"
                width={1206}
                height={2622}
                sizes="(min-width: 768px) 250px, 210px"
                className="w-[210px] md:w-[250px]"
              />
            }
          />

          <FeatureRow
            title="Make it with what suits you"
            body="Plenty of dishes come in a few versions: beef, turkey, veggie. You match on the dish, then choose which version you are actually cooking. The ingredients and the shopping list follow your choice."
            bullets={[
              'Swap the protein after you have matched',
              'Ingredients update with the version you pick',
              'Add it straight to the week from the recipe',
            ]}
            flip
            {...accent}
            visual={
              <PhoneShot
                src="/images/spoonfed/04-recipe-variant-picker.png"
                alt="A SpoonFed recipe page with a Make it with picker offering two protein versions of the same dish"
                width={1206}
                height={2622}
                sizes="(min-width: 768px) 250px, 210px"
                className="w-[210px] md:w-[250px]"
              />
            }
          />

          <FeatureRow
            title="A week that shops well"
            body="Matched meals go into a shared weekly plan you can drag into order. It leans towards sets of meals that reuse the same ingredients, so you buy one bunch of coriander instead of three. Less on the bill and less in the bin."
            bullets={[
              'Drag meals into the order you will cook them',
              'Shopping list grouped by supermarket aisle',
              'Quantities scaled to your household size',
            ]}
            {...accent}
            visual={
              <PhoneShot
                src="/images/spoonfed/05-this-week.png"
                alt="The This Week screen in SpoonFed showing two planned meals and a link to the shopping list"
                width={1206}
                height={2622}
                sizes="(min-width: 768px) 250px, 210px"
                className="w-[210px] md:w-[250px]"
              />
            }
          />

          <FeatureRow
            title="Cook what you've got"
            body="Tell it what is in the fridge and it ranks meals by how close you are, naming exactly what is still missing. It answers “what is worth a quick shop?” rather than pretending you can cook from nothing."
            bullets={[
              'Ranked by how few ingredients you are missing',
              'Names what is missing, meal by meal',
              'Search and tick off what you already have',
            ]}
            flip
            {...accent}
            visual={
              <PhoneShot
                src="/images/spoonfed/07-pantry-results.png"
                alt="SpoonFed listing the closest meals to what is in your kitchen, each showing how many more ingredients are needed and which ones"
                width={1206}
                height={2622}
                sizes="(min-width: 768px) 250px, 210px"
                className="w-[210px] md:w-[250px]"
              />
            }
          />
        </div>

        {/* TWO PEOPLE, TWO DIETS */}
        <section className="mt-16 border-t border-rule bg-tint sm:mt-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 className="text-eyebrow uppercase text-muted">Two people, two diets</h2>
            <Reveal className="max-w-2xl">
              <p className="font-serif text-title text-ink">
                Allergies are shared. Taste stays personal.
              </p>
              <p className="mt-6 text-lead text-body">
                Each of you sets your own diet and allergies. Allergies apply to both of
                you: a meal one of you cannot eat is not a meal you can cook together.
                Everything else stays yours, so you can still like a steak your vegetarian
                partner is never going to match on.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA — honest about status */}
        <section className="border-t border-rule bg-coral-tint">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <h2 className="max-w-2xl font-serif text-display text-ink">
                In <em className="italic text-coral">private beta.</em>
              </h2>
              <p className="mt-6 max-w-xl text-lead text-body">
                SpoonFed is a personal project, currently on TestFlight and used by two
                people. It is not on the App Store. If it sounds like something you would
                use, say hello.
              </p>
              <a
                href={`mailto:${SOCIAL.email}?subject=SpoonFed`}
                className="mt-9 inline-block rounded-sm bg-ink px-6 py-3 text-eyebrow font-medium uppercase text-paper transition-opacity hover:opacity-85"
              >
                Get in touch
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
