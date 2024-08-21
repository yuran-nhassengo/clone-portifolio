
import './App.css'
import { ContactMe } from './components/contactMe/contactMe'
import { Footer } from './components/footer/footer'
import { Hero } from './components/hero/hero'

import {NavBar} from './components/navBar'
import { Skills } from './components/skills'
import { WorkExperience } from './components/workExperience/workExperience'

function App() {

  return (
    <>
      <NavBar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
         <Footer/>
      </div>
    </>
  )
}

export default App
