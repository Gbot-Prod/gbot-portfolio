import type { Project } from '../../types/portfolio'
import ProjectCard from './ProjectCard'

type ProjectContainerProps = {
  projects: Project[]
}

function ProjectContainer({ projects }: ProjectContainerProps) {
  return (
    <div className="w-full rounded-3xl border border-white/15 bg-slate-950/40 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectContainer
