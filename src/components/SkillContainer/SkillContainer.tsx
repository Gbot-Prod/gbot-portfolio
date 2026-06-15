
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-wrap justify-center items-center gap-6">
      {skills.map((skill, index) => (
        <div className='skill grid place-items-center gap-2 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/10 shadow-xl text-white font-bold w-32 h-32' key={index}>
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SkillContainer;