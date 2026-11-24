import { useEffect, useRef } from 'react'

function Background() {
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interBubble = interactiveRef.current

    if (!interBubble) {
      return undefined
    }

    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0
    let animationFrameId = 0

    const move = () => {
      animationFrameId = 0
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`

      if (Math.abs(tgX - curX) > 0.5 || Math.abs(tgY - curY) > 0.5) {
        animationFrameId = window.requestAnimationFrame(move)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX
      tgY = event.clientY
      if (!animationFrameId) {
        animationFrameId = window.requestAnimationFrame(move)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(40deg,var(--color-bg1),var(--color-bg2))] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)]" />

      <div className="gradient-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div ref={interactiveRef} className="interactive" />
        </div>
      </div>
    </div>
  )
}

export default Background
