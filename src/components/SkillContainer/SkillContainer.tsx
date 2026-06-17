
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
    name: 'Node.js',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" width={50} height={50} />
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
    name: 'Java',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" width={50} height={50} />
  },
  {
    name: 'Kotlin',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain.svg" width={50} height={50} />
  },
  {
    name: 'C++',
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" width={50} height={50} />
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

function SkillContainer() {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl">
      <h1 className="col-span-full text-7xl font-bold text-center mb-4">Skills</h1>
      {skills.map((skill, index) => (
        <div className='skillIcon grid place-items-center gap-2 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl text-white font-bold w-32 h-32' key={index}>
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SkillContainer;
