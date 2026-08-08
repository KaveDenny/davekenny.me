import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from './lib/og'

export const alt = 'Dave Kenny: marketing, video, and things I build myself'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  return renderOgImage({
    eyebrow: 'CREATIVE · MARKETING, VIDEO & APPS',
    title: 'Dave Kenny',
    subtitle: 'Marketing, video, and the weird exciting edge of building things myself.',
  })
}
