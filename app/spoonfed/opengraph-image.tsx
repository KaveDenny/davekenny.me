import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og'

export const alt = 'SpoonFed: a recipe app for two people'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  return renderOgImage({
    eyebrow: 'iOS · PRIVATE BETA',
    title: 'SpoonFed',
    subtitle: 'A recipe app for two people. Swipe separately; what you both like becomes dinner.',
    accent: '#b93815',
  })
}
