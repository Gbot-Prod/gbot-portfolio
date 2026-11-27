import type { Skill } from '../../types/portfolio'
import './SkillCard.css'

type SkillCardProps = {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card grid h-32 w-32 place-items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-4 font-bold text-white shadow-xl">
      {/* Decorative: the skill name is rendered as text right below */}
      <img src={skill.iconUrl} alt="" width={50} height={50} loading="lazy" />
      <span>{skill.name}</span>
    </div>
  )
}

export default SkillCard
