export type Project = {
  slug: string
  name: string
  href: string
  year: string
  platform: string
  /** One line, used on the homepage card. */
  summary: string
  status: string
  /** Tailwind text-colour class for the project's accent. */
  accentText: string
  /** Tailwind background class for the project's card panel. */
  panelClass: string
  cover?: {
    src: string
    width: number
    height: number
    alt: string
    /**
     * True when the source is a bare screen capture and needs a device frame
     * drawn around it. False when the PNG is already a device render on a
     * transparent background and should be placed as-is.
     */
    framed: boolean
  }
}

export const PROJECTS: Project[] = [
  {
    slug: 'spoonfed',
    name: 'SpoonFed',
    href: '/spoonfed',
    year: '2026',
    platform: 'iOS',
    summary: 'A recipe app for two people. Swipe separately; what you both like becomes dinner.',
    status: 'Private beta',
    accentText: 'text-coral',
    panelClass: 'bg-coral-tint',
    cover: {
      src: '/images/spoonfed/00-swipe-deck.png',
      width: 1206,
      height: 2622,
      alt: 'The SpoonFed swipe deck showing a meal card for Pak Choi Teriyaki Noodles with reject and accept buttons',
      framed: true,
    },
  },
  {
    slug: 'sundial',
    name: 'Sundial',
    href: '/sundial',
    year: '2026',
    platform: 'iOS',
    summary: 'Finds the beer gardens where the sun is actually shining.',
    status: 'Private beta',
    accentText: 'text-amber',
    panelClass: 'bg-amber-tint',
    cover: {
      src: '/images/iphone-15-pro-main.png',
      width: 1077,
      height: 2250,
      alt: 'The Sundial app showing curated beer garden recommendations',
      framed: false,
    },
  },
  {
    slug: 'alculator',
    name: 'Alculator',
    href: '/alculator',
    year: '2026',
    platform: 'iOS · watchOS',
    summary: 'Real-time blood alcohol tracking, calculated entirely on device.',
    status: 'Coming soon',
    accentText: 'text-violet',
    panelClass: 'bg-violet-tint',
  },
]

export const SOCIAL = {
  email: 'hello@davekenny.me',
  linkedin: 'https://linkedin.com/in/davejameskenny',
}

export const SITE = {
  url: 'https://davekenny.me',
  name: 'Dave Kenny',
  tagline: 'Marketing, video, and small apps built for the fun of it.',
}
