import { useRef } from 'react'
import Background from './components/Background/Background'
import SectionIndicator from './components/SectionIndicator/SectionIndicator'
import { useActiveSection } from './hooks/useActiveSection'
import { sectionIds, sections } from './sections'
import './App.css'

function App() {
  const scrollerRef = useRef<HTMLElement>(null)
  const { activeId, scrollToSection } = useActiveSection(scrollerRef, sectionIds)

  return (
    <div className="portfolio-shell relative h-screen overflow-hidden text-white">
      <Background />

      <main ref={scrollerRef} className="portfolio-scroller relative z-10 h-full overflow-y-auto">
        {sections.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
      </main>

      <SectionIndicator sections={sections} activeId={activeId} onSelect={scrollToSection} />
    </div>
  )
}

export default App
