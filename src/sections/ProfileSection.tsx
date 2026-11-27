import { DetailGrid, DetailItem } from '../components/DetailGrid/DetailGrid'
import GlassPanel from '../components/GlassPanel/GlassPanel'
import Section from '../components/Section/Section'
import { profile } from '../data/profile'
import type { SectionProps } from './types'

function ProfileSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="About" title="Professional Profile">
      <GlassPanel>
        <p>{profile.summary}</p>
        <DetailGrid>
          <DetailItem title="Education">
            {profile.education.map((entry) => (
              <p key={entry}>{entry}</p>
            ))}
          </DetailItem>
          <DetailItem title="Career interests">
            <p>{profile.careerInterests.join(' | ')}</p>
          </DetailItem>
        </DetailGrid>
      </GlassPanel>
    </Section>
  )
}

export default ProfileSection
