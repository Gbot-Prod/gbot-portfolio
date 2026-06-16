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
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      animationFrameId = window.requestAnimationFrame(move)
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX
      tgY = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = window.requestAnimationFrame(move)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(40deg,var(--color-bg1),var(--color-bg2))] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)]" />


      <div className="gradient-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0   0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
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
