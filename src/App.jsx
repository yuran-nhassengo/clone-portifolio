
import './App.css'
import { Hero } from './components/hero/hero'

import {NavBar} from './components/navBar'

function App() {

  return (
    <>
      <NavBar/>
      <div className="container">
        <Hero/>
      </div>
    </>
  )
}

export default App
