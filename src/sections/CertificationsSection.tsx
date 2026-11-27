import DetailEntryList from '../components/DetailGrid/DetailEntryList'
import GlassPanel from '../components/GlassPanel/GlassPanel'
import Section from '../components/Section/Section'
import { certifications } from '../data/experience'
import type { SectionProps } from './types'

function CertificationsSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="Credentials" title="Certifications">
      <GlassPanel>
        <DetailEntryList entries={certifications} />
      </GlassPanel>
    </Section>
  )
}

export default CertificationsSection
