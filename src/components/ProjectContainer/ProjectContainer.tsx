
const projects = [
  { name: 'carabao', description: 'An Ecommerce website tailored to link farmers to buyers in luzon', link:'carabao.online'},
  { name: 'sophenema', description: '', link:''},
  { name: 'componentry', description: '', link:'' },
  { name: 'DAPriceScraper', description: '', link:'' },
]

function ProjectContainer() {
  return (
    <section className="project-container w-full rounded-3xl border border-white/15 bg-slate-950/40 p-6 shadow-xl backdrop-blur-md">
      <h2 className="mb-4 text-center text-4xl font-bold">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-white shadow-lg backdrop-blur-md" key={project.name}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            {project.description && <p className="mt-2 text-white/75">{project.description}</p>}
            {project.link && <a href="carabao.online">{project.link}</a>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectContainer;