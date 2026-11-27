import type { ReactNode } from 'react'
import './GlassPanel.css'

type GlassPanelProps = {
  /** Center all text instead of justifying paragraphs. */
  centered?: boolean
  children: ReactNode
}

function GlassPanel({ centered = false, children }: GlassPanelProps) {
  return <div className={`glass-panel${centered ? ' is-centered' : ''}`}>{children}</div>
}

export default GlassPanel
