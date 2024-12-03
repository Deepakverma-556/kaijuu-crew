import React from 'react'
import Heading from './common/Heading'
import Button from './common/Button'
import aboutImg1 from '../assets/images/webp/about-image-1.webp'
import aboutImg2 from '../assets/images/webp/about-image-2.webp'
import aboutImg3 from '../assets/images/webp/about-image-3.webp'
import aboutImg4 from '../assets/images/webp/about-image-4.webp'

const About = () => {
  return (
    <div id='about' className='pt-[61px] pb-[135px] bg-dark-blue'>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2'>
            <div>
              <div className='max-w-[]'> <Heading RedText='ABOUT' WhiteText='US' /> </div>
              <p className='font-oswald text-[22px] text-white leading-8 pt-[29px] pb-[34px] max-lg:pt-5 max-md:pt-4 max-sm:pt-2 max-lg:pb-7 max-md:pb-5 max-sm:pb-3 max-lg:text-xl max-md:text-lg max-sm:text-base'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div>
                <Button text='MINT NFT' />
              </div>
            </div>
          </div>
          <div className='w-1/2 px-3'>
            <div>
              <div className='flex items-center'>
                  <img src={aboutImg1} alt="about-img-1" />
                  <img src={aboutImg2} alt="about-img-2" />
              </div>
              <div className='flex items-center'>
                  <img src={aboutImg3} alt="about-img-3" />
                  <img src={aboutImg4} alt="about-img-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About