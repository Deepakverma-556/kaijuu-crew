import React from 'react'
import TraitsImage from '../assets/images/webp/Traits.webp'

const Traits = () => {
  return (
    <div className='bg-no-repeat overflow-hidden bg-cover bg-center pb-[156px] max-lg:pb-16 max-sm:pb-10 bg-traits-bg'>
      <div className='text-center pt-24 pb-10 max-lg:pt-16 max-sm:pt-10 max-lg:pb-5  gradient-color'>
        <h2 className='text-[72px] font-normal font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none'>Traits</h2>
      </div>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-wrap items-center flex-row '>
          <div className='w-full lg:w-7/12 max-lg:flex max-lg:justify-center'>
            <img src={TraitsImage} alt="Traits-image" className='w-[738px] max-[1200px]:w-[550px]' />
          </div>
          <div className='w-full lg:w-5/12 max-lg:flex max-lg:justify-center max-lg:pt-3'>
            <div className='p-[42px] max-sm:p-8 grident-border gradient-bg rounded-[30px] max-w-[590px] w-full !backdrop-blur-[35px]'>
              <p className='font-godzilla font-normal text-[48px] leading-[41.6px] text-white border-b border-white pb-[26px] max-lg:text-4xl max-lg:pb-3 max-md:text-3xl max-sm:text-2xl max-md:leading-none'>Traits</p>
              <div className='flex pt-[26px] pb-14 max-lg:pt-5 max-lg:pb-10 max-md:pb-5'>
                <ul className='w-1/2'>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Background:8</li>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Skins:19</li>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Headwear:37</li>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Clothes:44</li>
                </ul>
                <ul className='w-1/2'>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Eyes:23</li>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Mouth:33</li>
                  <li className='text-[22px] font-normal font-oswald leading-33px text-white max-sm:text-base'>Accessories:7</li>
                </ul>
              </div>
              <p className='font-godzilla font-normal text-[48px] leading-[41.6px] text-white border-b border-white pb-[26px] max-lg:text-4xl max-lg:pb-3 max-md:text-3xl max-sm:text-2xl max-md:leading-none'>Stats</p>
              <div className='flex pt-4'>
                <div className='w-5/12'>
                  <p className='leading-[72px] text-white font-oswald font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>9,999</p>
                  <p className='font-oswald font-normal text-[22px] leading-[33px] text-white max-sm:text-base'>Total Kaijuu</p>
                </div>
                <div className='w-7/12'>
                  <div className='flex items-center gap-3'> 
                    <p className='leading-[72px] text-white font-oswald font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>0.0555</p>
                    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_67_224)">
                        <path d="M19.4937 16.3L10 22.1L0.5 16.3L10 0L19.4937 16.3ZM10 23.9625L0.5 18.1625L10 32L19.5 18.1625L10 23.9625Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_67_224">
                          <rect className='' width="20" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className='font-oswald font-normal text-[22px] leading-[33px] text-white max-sm:text-base'>Mint Cost</p>
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traits