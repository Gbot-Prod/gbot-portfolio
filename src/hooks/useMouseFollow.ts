import { useEffect, type RefObject } from 'react'

const EASING_DIVISOR = 20
const SETTLE_DISTANCE_PX = 0.5

/**
 * Smoothly moves an element toward the mouse cursor using requestAnimationFrame.
 * The animation loop only runs while the element is still catching up to the cursor.
 */
export function useMouseFollow(elementRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0
    let frameId = 0

    const step = () => {
      frameId = 0
      currentX += (targetX - currentX) / EASING_DIVISOR
      currentY += (targetY - currentY) / EASING_DIVISOR
      element.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`

      const isSettled =
        Math.abs(targetX - currentX) <= SETTLE_DISTANCE_PX &&
        Math.abs(targetY - currentY) <= SETTLE_DISTANCE_PX

      if (!isSettled) frameId = window.requestAnimationFrame(step)
    }

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!frameId) frameId = window.requestAnimationFrame(step)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [elementRef])
}
