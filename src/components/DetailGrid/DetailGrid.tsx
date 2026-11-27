import type { ReactNode } from 'react'
import './DetailGrid.css'

type DetailGridProps = {
  children: ReactNode
}

/** Two-column grid (one column on mobile) of titled detail blocks. */
export function DetailGrid({ children }: DetailGridProps) {
  return <div className="detail-grid">{children}</div>
}

type DetailItemProps = {
  title: string
  children: ReactNode
}

export function DetailItem({ title, children }: DetailItemProps) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
