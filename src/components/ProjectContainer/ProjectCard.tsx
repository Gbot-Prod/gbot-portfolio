import type { Project } from '../../types/portfolio'

type ProjectCardProps = {
  project: Project
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, '')

function ProjectCard({ project }: ProjectCardProps) {
  const { name, period, description, tech = [], link } = project

  return (
    <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-white shadow-lg backdrop-blur-md">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        {period && <span className="text-sm text-white/60">{period}</span>}
      </div>

      {description && <p className="justified-text mt-2 text-white/75">{description}</p>}

      {tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
              {item}
            </li>
          ))}
        </ul>
      )}

      {link && (
        <a className="mt-3 inline-block text-sm underline" href={link} target="_blank" rel="noreferrer">
          {stripProtocol(link)}
        </a>
      )}
    </article>
  )
}

export default ProjectCard
