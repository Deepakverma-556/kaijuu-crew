import React from 'react'
import Image from '../assets/images/webp/story-image.webp'

const Story = () => {
  return (
    <div className='bg-dark-blue pt-16 pb-24 max-lg:pb-16 max-sm:py-10'>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-row flex-wrap items-center'>
          <div className='w-full lg:w-1/2 px-3 max-lg:flex max-lg:justify-center'>
            <img src={Image} alt="story-image" className='w-[619px]  max-lg:w-[550px]' />
          </div>
          <div className='w-full lg:w-1/2 px-3 max-lg:pt-5'>
            <div>
              <h2 className='text-[72px] font-normal font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none'>Story</h2>
              <p className='font-oswald font-normal text-[22px] text-white pt-[28px] max-lg:pt-5 max-md:pt-2 max-lg:text-xl max-md:text-lg max-sm:text-base'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story