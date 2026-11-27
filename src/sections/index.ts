import type { ComponentType } from 'react'
import AchievementsSection from './AchievementsSection'
import ContactSection from './ContactSection'
import CoverSection from './CoverSection'
import ObjectiveSection from './ObjectiveSection'
import ProfileSection from './ProfileSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import type { SectionProps } from './types'

type SectionConfig = {
  id: string
  label: string
  Component: ComponentType<SectionProps>
}

/**
 * Single source of truth for page order, section ids, and nav labels.
 * Add, remove, or reorder sections here.
 */
export const sections: SectionConfig[] = [
  { id: 'cover', label: 'Cover Page', Component: CoverSection },
  { id: 'profile', label: 'Professional Profile', Component: ProfileSection },
  { id: 'skills', label: 'Key Skills', Component: SkillsSection },
  { id: 'projects', label: 'Projects & Work Samples', Component: ProjectsSection },
  { id: 'achievements', label: 'Achievements & Training', Component: AchievementsSection },
  { id: 'objective', label: 'Career Objective', Component: ObjectiveSection },
  // TODO: re-enable once real certifications are in data/experience.ts
  // { id: 'certifications', label: 'Certifications', Component: CertificationsSection },
  { id: 'contact', label: 'Contact Information', Component: ContactSection },
]

export const sectionIds = sections.map((section) => section.id)
