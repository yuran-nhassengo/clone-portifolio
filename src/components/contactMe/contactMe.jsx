import React from 'react'
import './contactMe.css'
import { ContactInfoCard } from './contactInfoCard/contactInfoCard'

export const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                
                    iconUrl="/l/temp"
                    text="yurannhassengo@gmail.com"
                />
                <ContactInfoCard
               
                    iconUrl="/assets"
                    text="https://github.com/yuran-nhassengo"
                />
            </div>
            <div style={{flex:1}}></div>
        </div>
    </section>
  )
}


