import type { Skill } from '../types/portfolio'

const DEVICON_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon@2.18.0/icons'

const devicon = (path: string) => `${DEVICON_BASE_URL}/${path}.svg`

export const skills: Skill[] = [
  { name: 'JavaScript', iconUrl: devicon('javascript/javascript-plain') },
  { name: 'TypeScript', iconUrl: devicon('typescript/typescript-plain') },
  { name: 'React', iconUrl: devicon('react/react-original') },
  { name: 'npm', iconUrl: devicon('npm/npm-original-wordmark') },
  { name: 'Next.js', iconUrl: devicon('nextjs/nextjs-original') },
  { name: 'Python', iconUrl: devicon('python/python-plain') },
  { name: 'PostgreSQL', iconUrl: devicon('postgresql/postgresql-plain') },
  { name: 'Git', iconUrl: devicon('git/git-plain') },
  { name: 'GitHub', iconUrl: devicon('github/github-original') },
  { name: 'Kotlin', iconUrl: devicon('kotlin/kotlin-original') },
  { name: 'Docker', iconUrl: devicon('docker/docker-plain') },
]
