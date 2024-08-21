import React from 'react'
import './contactForm.css'

export const  ContactForm = ( ) => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <input type="text" name="email" placeholder="email" />
            <textarea type="text" name="message"  placeholder="Message" rows={3}></textarea>

            <button>Send</button>
        </form>
    </div>
  )
}


