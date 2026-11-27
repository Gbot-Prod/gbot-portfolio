import './SectionIndicator.css'

type SectionLink = {
  id: string
  label: string
}

type SectionIndicatorProps = {
  sections: readonly SectionLink[]
  activeId: string
  onSelect: (id: string) => void
}

const formatIndex = (index: number) => String(index + 1).padStart(2, '0')

/** Fixed side navigation that highlights the section currently in view. */
function SectionIndicator({ sections, activeId, onSelect }: SectionIndicatorProps) {
  return (
    <nav className="section-indicator" aria-label="Portfolio sections">
      {sections.map(({ id, label }, index) => {
        const isActive = id === activeId

        return (
          <button
            key={id}
            type="button"
            className={`indicator-link${isActive ? ' is-active' : ''}`}
            aria-label={`Go to ${label}`}
            aria-current={isActive ? 'location' : undefined}
            onClick={() => onSelect(id)}
          >
            <span className="indicator-number">{formatIndex(index)}</span>
            <span className="indicator-label">{label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default SectionIndicator
