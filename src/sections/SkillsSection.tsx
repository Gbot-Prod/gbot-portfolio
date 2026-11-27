import Section from '../components/Section/Section'
import SkillContainer from '../components/SkillContainer/SkillContainer'
import { skills } from '../data/skills'
import type { SectionProps } from './types'

function SkillsSection({ id }: SectionProps) {
  return (
    <Section
      id={id}
      kicker="Capabilities"
      title="Key Skills"
      hint="Also experienced in SQL, SQLite, Postman, and Android Studio, plus security work in cryptography, network forensics, and web exploitation."
    >
      <SkillContainer skills={skills} />
    </Section>
  )
}

export default SkillsSection
