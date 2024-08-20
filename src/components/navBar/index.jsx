import React from 'react'
import './navBar.css'

export  const NavBar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="" alt="imagem" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() =>{}}>
              Hire Me  
            </button>
          </ul>
        </div>
      </nav>
    </>
  )
}




