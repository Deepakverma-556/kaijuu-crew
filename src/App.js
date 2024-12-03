import React from 'react'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Hero from './components/Hero'
import About from './components/About'
import Traits from './components/Traits'
import Team from './components/Team'
import Classes from './components/Classes'
import Roadmap from './components/Roadmap'

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Classes/>
      <Story />
      <Traits />
      <Roadmap/>
      <Team/>
    </div>

  )
}
export default App