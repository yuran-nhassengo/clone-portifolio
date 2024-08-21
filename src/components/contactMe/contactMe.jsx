import React from 'react'
import './contactMe.css'
import { ContactInfoCard } from './contactInfoCard/contactInfoCard'
import frontendImage from '../../../public/teste2.png';


export const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                
                    iconUrl={frontendImage}
                    text="yurannhassengo@gmail.com"
                />
                <ContactInfoCard
               
                    iconUrl={frontendImage}
                    text="https://github.com/yuran-nhassengo"
                />
            </div>
            <div style={{flex:1}}></div>
        </div>
    </section>
  )
}





