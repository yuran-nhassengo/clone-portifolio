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

          <button className="menu-btn" onClick={() =>{}}>
            <span className={"material-symbol-outlined"}
                  style={{fontSize:"1.8rem"}}>
            menu
            </span>
          </button>

        </div>
      </nav>
    </>
  )
}




