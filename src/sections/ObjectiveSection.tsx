import GlassPanel from '../components/GlassPanel/GlassPanel'
import Section from '../components/Section/Section'
import { profile } from '../data/profile'
import type { SectionProps } from './types'

function ObjectiveSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="Direction" title="Career Objective">
      <GlassPanel>
        <p>{profile.objective}</p>
      </GlassPanel>
    </Section>
  )
}

export default ObjectiveSection
