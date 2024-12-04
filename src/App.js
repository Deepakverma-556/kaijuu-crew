import React from 'react'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Hero from './components/Hero'
import About from './components/About'
import Traits from './components/Traits'
import Team from './components/Team'
import Classes from './components/Classes'
import Roadmap from './components/Roadmap'
import Faq from './components/Faqs'
import BackToTop from './components/common/BackToTop'


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
      <Faq />
      <BackToTop/>
    </div>

  )
}
export default App