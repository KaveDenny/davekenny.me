import Image from 'next/image'

type PhoneShotProps = {
  src: string
  alt: string
  width: number
  height: number
  /** Rendered width in CSS pixels at each breakpoint, for `sizes`. */
  sizes: string
  /** Tailwind width classes, e.g. "w-[200px] md:w-[250px]". */
  className: string
  priority?: boolean
}

/**
 * A screen capture inside a drawn device frame.
 *
 * Use this for bare screenshots. Renders that already include a handset on a
 * transparent background should be placed with a plain <Image> instead —
 * wrapping those gives you two bezels.
 */
export default function PhoneShot({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
}: PhoneShotProps) {
  return (
    <div
      className={`shrink-0 rounded-[2.5rem] bg-ink p-[5px] shadow-2xl sm:rounded-[2.75rem] sm:p-1.5 ${className}`}
    >
      <div className="overflow-hidden rounded-[2.15rem] bg-white sm:rounded-[2.35rem]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
