import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og'

export const alt = 'Sundial: sunny skies, cold beers, perfect gardens'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  return renderOgImage({
    eyebrow: 'iOS · PRIVATE BETA',
    title: 'Sundial',
    subtitle: 'Finds the beer gardens where the sun is actually shining.',
    accent: '#b45309',
  })
}
