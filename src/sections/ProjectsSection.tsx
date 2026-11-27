import ProjectContainer from '../components/ProjectContainer/ProjectContainer'
import Section from '../components/Section/Section'
import { projects } from '../data/projects'
import type { SectionProps } from './types'

// Projects without a description are still placeholders, so keep them off the page.
const publishedProjects = projects.filter((project) => project.description)

function ProjectsSection({ id }: SectionProps) {
  return (
    <Section
      id={id}
      kicker="Project Display"
      title="Projects & Work Samples"
      hint="More of my work is on GitHub."
    >
      <ProjectContainer projects={publishedProjects} />
    </Section>
  )
}

export default ProjectsSection
