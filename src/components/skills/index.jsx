import React, { useState } from 'react'
import './skills.css'
import { SKILLS } from '../../utils/data'
import { SkillCard } from './skillCard/skillCard'
import { SkillsInfoCard } from './skillsInfoCard/skillsInfoCard'
export const Skills = () => {

    const [selectedSkill,setSelectedSkill] =useState(SKILLS[0]);

    const handleSelectSkill = (data) =>{
        setSelectedSkill(data);
    };


  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) =>(
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icons}
                        title={item.title}
                        isActive={selectedSkill.title ===item.title}
                        onClick={()=>{
                            handleSelectSkill(item);
                        }}
                    />
                ))}
                </div>
            <div className="skills-info">
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>
    </section>
  )
}


