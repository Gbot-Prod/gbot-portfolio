import type { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
  id: string
  kicker: string
  title?: string
  hint?: ReactNode
  contentClassName?: string
  children: ReactNode
}

/** Full-height, scroll-snapped page section with a consistent header layout. */
function Section({ id, kicker, title, hint, contentClassName, children }: SectionProps) {
  const contentClasses = ['section-content', contentClassName].filter(Boolean).join(' ')

  return (
    <section id={id} className="portfolio-section">
      <div className={contentClasses}>
        <p className="section-kicker">{kicker}</p>
        {title && <h2 className="section-title">{title}</h2>}
        {children}
        {hint && <p className="section-hint">{hint}</p>}
      </div>
    </section>
  )
}

export default Section
