import React from 'react'
import eng from '../assets/images/eng-flag.webp'
import hin from '../assets/images/hin-flag.webp'

const Navbar = () => {
  return (
    <section className='bg-black'>
      <div className='max-w-[1320px] px-4 mx-auto'>
        <div className='py-[35px] flex items-center justify-between'>
          <a href="#logo" className='font-godzilla text-4xl text-dark-red'>KAIJUU<span className='text-white'>CREW</span></a>
          <ul className='flex items-center gap-[53px]'>
            <li>
              <a href="#about" className='font-oswald text-[22px] text-white relative group'>About Us
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#story" className='font-oswald text-[22px] text-white relative group'>Story
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#traits" className='font-oswald text-[22px] text-white relative group'>Traits
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#roadmap" className='font-oswald text-[22px] text-white relative group'>Roadmap
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#team" className='font-oswald text-[22px] text-white relative group'>Team
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#faq" className='font-oswald text-[22px] text-white relative group'>FAQ
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <select name="language" id="language" className='bg-transparent text-[22px] font-oswald text-white outline-none'>
                <option value="eng" className='text-[22px] font-oswald text-white bg-black'><span className='h-[33px] w-[33px] rounded-full'><img src={eng} alt="eng"/></span>ENG</option>
                <option value="hin" className='text-[22px] font-oswald text-white bg-black'>HIN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar