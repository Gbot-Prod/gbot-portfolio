
const skills = [
  {
    name: 'JavaScript',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width={50} height={50} />
  },
  {
    name: 'TypeScript',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" width={50} height={50} />
  },
  {
    name: 'React',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width={50} height={50} />
  },
  {
    name: 'npm',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" width={50} height={50} />
  },
  {
    name: 'Next.js',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={50} height={50} />
  },
  {
    name: 'Python',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" width={50} height={50} />
  },
  {
    name: 'PostgreSQL',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" width={50} height={50} />
  },
  {
    name: 'Git',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" width={50} height={50} />
  },
  {
    name: 'GitHub',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={50} height={50} />
  },
  {
    name: 'Docker',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" width={50} height={50} />
  }
]

const midpoint = Math.ceil(skills.length / 2)
const skillRows = [skills.slice(0, midpoint), skills.slice(midpoint)]

function SkillContainer() {
  return (
    <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
      <h2 className="mb-4 text-center text-7xl font-bold">Skills</h2>
      <div className="flex flex-col gap-y-6">
        {skillRows.map((row, rowIndex) => (
          <div className="flex flex-wrap justify-between gap-y-6" key={rowIndex}>
            {row.map((skill) => (
              <div className='skillIcon grid place-items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-xl font-bold w-32 h-32' key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillContainer;
