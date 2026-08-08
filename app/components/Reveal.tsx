'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'

/** useLayoutEffect warns during SSR; fall back to useEffect on the server. */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Stagger, in ms, applied when the element enters. */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Fades content up as it scrolls into view.
 *
 * Content renders visible by default and is only hidden once we've confirmed
 * on the client that we can animate it back in. If JS never runs, or the
 * visitor prefers reduced motion, everything simply stays visible.
 */
export default function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) return

    el.dataset.reveal = 'armed'

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const target = entry.target as HTMLElement
          target.style.transitionDelay = `${delay}ms`
          target.dataset.reveal = 'in'
          observer.unobserve(target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  )
}
