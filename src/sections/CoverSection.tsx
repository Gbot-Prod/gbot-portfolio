import Section from '../components/Section/Section'
import { profile } from '../data/profile'
import type { SectionProps } from './types'
import './CoverSection.css'

function CoverSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="Professional Portfolio" contentClassName="cover-content">
      <h1 className="cover-title">{profile.name}</h1>
      <p className="cover-subtitle">{profile.role}</p>
      <p className="cover-prompt">{profile.stack.join(' · ')}. Scroll to explore ↓</p>
    </Section>
  )
}

export default CoverSection
