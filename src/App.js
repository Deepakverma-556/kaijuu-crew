import React from 'react'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      {/* <Story /> */}
    </div>
  )
}
export default App