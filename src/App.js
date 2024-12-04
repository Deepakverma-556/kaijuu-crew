import React from 'react'
import Story from './components/Story'
import Traits from './components/Traits'
import Team from './components/Team'
import Faq from './components/Faqs'
import BackToTop from './components/common/BackToTop'

const app = () => {
  return (
    <div>
      <Story />
      <Traits />
      <Team />
      <Faq />
      <BackToTop/>
    </div>

  )
}

export default app