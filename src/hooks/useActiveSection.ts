import { useCallback, useEffect, useState, type RefObject } from 'react'

const CENTER_LINE_MARGIN = '-50% 0px -50% 0px'

/**
 * Tracks which section is crossing the middle of a scroll container and
 * provides a helper to scroll a section into view.
 */
export function useActiveSection(
  scrollerRef: RefObject<HTMLElement | null>,
  sectionIds: readonly string[],
) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const observer = new IntersectionObserver(
      (entries) => {
        const crossing = entries.find((entry) => entry.isIntersecting)
        if (crossing) setActiveId(crossing.target.id)
      },
      // Shrink the observed area to a line across the middle of the scroller, so
      // the active section is whichever one crosses it — regardless of its height.
      { root: scroller, rootMargin: CENTER_LINE_MARGIN, threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [scrollerRef, sectionIds])

  const scrollToSection = useCallback((id: string) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  return { activeId, scrollToSection }
}
