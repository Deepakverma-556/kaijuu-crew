import React from 'react'
import Button from './common/Button'
import aboutImg1 from '../assets/images/webp/about-image-1.webp'
import aboutImg2 from '../assets/images/webp/about-image-2.webp'
import aboutImg3 from '../assets/images/webp/about-image-3.webp'
import aboutImg4 from '../assets/images/webp/about-image-4.webp'

const About = () => {
  return (
    <div id='about' className='pt-[61px] pb-[135px] bg-dark-blue max-lg:py-16 max-md:py-10'>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3 items-center'>
          <div className='w-1/2 px-3 max-md:w-full'>
            <div>
              <h2 className='text-[72px] font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none max-md:text-center'>ABOUT <span className='text-white'>US</span></h2>
              <p className='font-oswald text-[22px] text-white leading-8 pt-[29px] pb-[34px] max-lg:pt-5 max-md:pt-4 max-sm:pt-2 max-lg:pb-7 max-md:pb-5 max-sm:pb-3 max-lg:text-xl max-md:text-lg max-sm:text-base max-md:text-center'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div className='max-md:flex max-md:justify-center'>
                <Button text='MINT NFT' />
              </div>
            </div>
          </div>
          <div className='w-1/2 px-3 max-md:w-full max-md:pt-6'>
            <div >
              <div className='flex items-center justify-center'>
                <img src={aboutImg1} alt="about-img-1" className='max-lg:h-48 max-md:h-44' />
                <img src={aboutImg2} alt="about-img-2" className='max-lg:h-48 max-md:h-44' />
              </div>
              <div className='flex items-center justify-center'>
                <img src={aboutImg3} alt="about-img-3" className='max-lg:h-48 max-md:h-44' />
                <img src={aboutImg4} alt="about-img-4" className='max-lg:h-48 max-md:h-44' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About