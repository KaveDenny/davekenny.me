import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

/**
 * Shared Open Graph card. Instrument Serif is vendored in /assets so image
 * generation never depends on a network fetch at build time.
 */
export async function renderOgImage({
  title,
  subtitle,
  eyebrow,
  accent = '#b45309',
}: {
  title: string
  subtitle: string
  eyebrow: string
  accent?: string
}) {
  const serif = await readFile(join(process.cwd(), 'assets/InstrumentSerif-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#faf8f4',
          padding: '72px 80px',
          fontFamily: 'Instrument Serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 44, height: 3, backgroundColor: accent, marginRight: 20 }} />
          <div style={{ fontSize: 26, color: '#6b6659', letterSpacing: 3 }}>{eyebrow}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, color: '#16150f', lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 36, color: '#3d3a32', marginTop: 24, lineHeight: 1.35 }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid #e8e3d8',
            paddingTop: 28,
            fontSize: 24,
            color: '#6b6659',
          }}
        >
          <div>davekenny.me</div>
          <div>Marketing · Video · iOS apps</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: 'Instrument Serif', data: serif, style: 'normal', weight: 400 }],
    }
  )
}
