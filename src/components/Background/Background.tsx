import { useRef } from 'react'
import { useMouseFollow } from '../../hooks/useMouseFollow'
import './Background.css'

const GRADIENT_BLOBS = ['g1', 'g2', 'g3', 'g4', 'g5']

/** Animated gradient backdrop with a bubble that follows the cursor. */
function Background() {
  const interactiveRef = useRef<HTMLDivElement>(null)
  useMouseFollow(interactiveRef)

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(40deg,var(--color-bg1),var(--color-bg2))] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)]" />

      <div className="gradient-bg pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="gradients-container">
          {GRADIENT_BLOBS.map((blob) => (
            <div key={blob} className={blob} />
          ))}
          <div ref={interactiveRef} className="interactive" />
        </div>
      </div>
    </div>
  )
}

export default Background
