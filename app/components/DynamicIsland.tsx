/**
 * The iPhone Dynamic Island.
 *
 * Measured off the real screenshots in public/images/spoonfed (iPhone 16 Pro,
 * 1206x2622): the island is 376px wide and 110px tall, centred, with its top
 * edge 42px down. Those give the ratios below.
 *
 * Drawing it at exactly that position means the overlay lands on top of the
 * islands already captured in some screenshots — covering them seamlessly —
 * while adding one to the screenshots that were taken without it.
 */

const WIDTH_RATIO = '31.2%' // 376 / 1206
const ASPECT = '376 / 110'

type Props = {
  /**
   * `image` sits over a screenshot whose box has the handset's exact aspect,
   * so the offset can be a share of height. `drawn` sits in a mockup whose
   * height depends on its content, so the offset is fixed and only the width
   * drives the size.
   */
  variant: 'image' | 'drawn'
  /** Top offset for `drawn`, which cannot derive one from content height. */
  className?: string
}

export default function DynamicIsland({ variant, className = '' }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black ${className}`}
      style={
        variant === 'image'
          ? { top: '1.6%', width: WIDTH_RATIO, height: '4.2%' }
          : { width: WIDTH_RATIO, aspectRatio: ASPECT }
      }
    />
  )
}
