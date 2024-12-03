import React from 'react'
import scouts from '../assets/images/webp/crew-class-scouts.webp'
import heavies from '../assets/images/webp/crew-class-heavies.webp'
import legends from '../assets/images/webp/crew-class-legends.webp'
import elementals from '../assets/images/webp/crew-class-elementals.webp'

const Classes = () => {
  return (
    <div className='bg-crew-bg pt-[171px] pb-[225px] bg-no-repeat bg-cover max-lg:py-20 max-md:py-16 max-sm:py-10'>
      <div className='px-4'>
        <h2 className='text-[72px] font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none max-md:text-center text-center'>KAIJUU <span className='text-white'>CREW CLASSES</span></h2>
        <div className='flex items-center justify-center gap-[131px] pt-[85px] max-lg:pt-20 max-md:pt-12 max-sm:pt-8 max-[1440px]:gap-10 max-md:gap-8 max-sm:gap-5 max-lg:flex-wrap'>
          <div>
            <img src={scouts} alt="scouts" className=' h-[254px] max-[1440px]:h-40 rounded-[20px] max-lg:w-40 max-sm:w-32 max-sm:h-32 object-cover' />
            <p className='text-center text-white font-oswald font-semibold text-4xl leading-[54px] pt-[18px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>Scouts</p>
          </div>
          <div>
            <img src={heavies} alt="heavies" className=' h-[254px] max-[1440px]:h-40 rounded-[20px] max-lg:w-40 max-sm:w-32 max-sm:h-32 object-cover' />
            <p className='text-center text-white font-oswald font-semibold text-4xl leading-[54px] pt-[18px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>Heavies</p>
          </div>
          <div>
            <img src={legends} alt="legends" className=' h-[254px] max-[1440px]:h-40 rounded-[20px] max-lg:w-40 max-sm:w-32 max-sm:h-32 object-cover' />
            <p className='text-center text-white font-oswald font-semibold text-4xl leading-[54px] pt-[18px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>Legends</p>
          </div>
          <div>
            <img src={elementals} alt="elementals" className=' h-[254px] max-[1440px]:h-40 rounded-[20px] max-lg:w-40 max-sm:w-32 max-sm:h-32 object-cover' />
            <p className='text-center text-white font-oswald font-semibold text-4xl leading-[54px] pt-[18px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>Elementals</p>
          </div>
          <div>
            <img src={legends} alt="legends" className=' h-[254px] max-[1440px]:h-40 rounded-[20px] max-lg:w-40 max-sm:w-32 max-sm:h-32 object-cover' />
            <p className='text-center text-white font-oswald font-semibold text-4xl leading-[54px] pt-[18px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-lg:pt-4 max-md:pt-3 max-sm:pt-2'>???</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes