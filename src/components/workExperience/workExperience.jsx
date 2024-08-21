import React, { useRef } from 'react'
import './workExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import { ExperienceCard } from './experienceCard/experienceCard'
import Slider from 'react-slick'

export const WorkExperience = () => {

    const sliderRef = useRef();

    const settings ={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive: [
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,

                },
            },
        ],
    };

  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

