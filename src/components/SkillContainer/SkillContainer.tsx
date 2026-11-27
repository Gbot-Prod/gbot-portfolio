import type { Skill } from '../../types/portfolio'
import SkillCard from './SkillCard'

type SkillContainerProps = {
  skills: Skill[]
}

function SkillContainer({ skills }: SkillContainerProps) {
  return (
    <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] justify-items-center gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillContainer
