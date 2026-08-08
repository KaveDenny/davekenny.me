import DynamicIsland from './DynamicIsland'

/**
 * A drawn iPhone for mockups built from markup rather than screenshots.
 *
 * Screenshots go through <PhoneShot> instead. Both draw the same
 * <DynamicIsland>, so the handsets stay consistent across the site.
 */
export default function PhoneFrame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative rounded-[2.25rem] border-[7px] border-ink bg-white px-4 pt-8 pb-4 shadow-2xl ${className}`}
    >
      <DynamicIsland variant="drawn" className="top-[7px]" />
      {children}
    </div>
  )
}
