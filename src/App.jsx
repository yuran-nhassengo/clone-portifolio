
import './App.css'
import { Hero } from './components/hero/hero'

import {NavBar} from './components/navBar'
import { Skills } from './components/skills'

function App() {

  return (
    <>
      <NavBar/>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>
    </>
  )
}

export default App
