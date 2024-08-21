
import './App.css'
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
      </div>
    </>
  )
}

export default App
