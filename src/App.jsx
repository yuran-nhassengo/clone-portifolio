
import './App.css'
import { ContactMe } from './components/contactMe/contactMe'
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
      </div>
    </>
  )
}

export default App
