import React from 'react'
import './skills.css'
import { SKILLS } from '../../utils/data'
import { SkillCard } from './skillCard/skillCard'
export const Skills = () => {
  return (
    <section className="skills-conteiner">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills"></div>
                {SKILLS.map((item) =>(
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icons}
                        title={item.title}
                    />
                ))}
            <div className="skills-info"></div>
        </div>
    </section>
  )
}


