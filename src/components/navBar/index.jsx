import React, { useState } from 'react'
import './navBar.css'
import { MobileNav } from './mobileNav/mobileNav';

export  const NavBar = () => {

    const [openMenu,setOpenMenu] = useState(false);

    const toggleMenu = () =>{
      setOpenMenu(!openMenu);
    }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbol-outlined"}
                  style={{fontSize:"1.8rem"}}>
                  
                  {openMenu ? "close":"menu"}
            </span>
          </button>

        </div>
      </nav>
    </>
  )
}




