import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-no-repeat bg-cover pt-[55px]'>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3'>
            <div>
              <h2 className='font-godzilla text-[145px] text-dark-red leading-[126px]'>KAIJUU <span className='text-white'>CREW</span></h2>
              <p className='font-oswald text-[22px] text-white leading-8 max-w-[368px] py-[18px]'>The ocean surges with spray and foam,
                As Kaijuu rise from depth to roam.
                Thirty-three hundred, and thirty-three more,
                Decked in garbs from days of yore.
                We scour the earth and sea and air,
                Our mission so grave few would dare.
                In search of untold wealth to hoard?
                Nay, but 'cause your Apes are Bored.
              </p>
              <p className='font-oswald font-bold text-5xl text-white leading-[72px]'>10:20:15:10</p>
              <p className='text-white font-oswald text-lg leading-7 text-opacity-60'>Days left</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero