import React from 'react'
import './hero.css'

export const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually stunning Web Solution
            </p>
        </div>
        
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="" alt="icons01" />
                </div>
                <img src="" alt="icons11" />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="" alt="icons22" />
                </div>
                <div className="tech-icon">
                    <img src="" alt="icons22" />
                </div>
                <div className="tech-icon">
                    <img src="" alt="icons22" />
                </div>
            </div>
        </div>
    </section>
  )
}

