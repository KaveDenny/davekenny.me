import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from '../lib/og'

export const alt = 'Alculator: real-time blood alcohol tracking for iPhone and Apple Watch'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function Image() {
  return renderOgImage({
    eyebrow: 'iOS · watchOS · COMING SOON',
    title: 'Alculator',
    subtitle: 'Real-time blood alcohol tracking, calculated entirely on device.',
    accent: '#6d28d9',
  })
}
