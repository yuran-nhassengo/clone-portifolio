import React from 'react'
import './contactInfoCard.css'

export  const ContactInfoCard = (iconUrl,text) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

