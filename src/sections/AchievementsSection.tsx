import DetailEntryList from '../components/DetailGrid/DetailEntryList'
import GlassPanel from '../components/GlassPanel/GlassPanel'
import Section from '../components/Section/Section'
import { achievements } from '../data/experience'
import type { SectionProps } from './types'

function AchievementsSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="Experience" title="Achievements & Training">
      <GlassPanel>
        <DetailEntryList entries={achievements} />
      </GlassPanel>
    </Section>
  )
}

export default AchievementsSection
