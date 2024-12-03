import React from 'react'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Hero from './components/Hero'
import About from './components/About'
import Traits from './components/Traits'
import Team from './components/Team'
import Classes from './components/Classes'

const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Classes/>
      <Story />
      <Traits />
      <Team/>
    </div>

  )
}
export default App