import React, { useState, useEffect } from 'react'
import USA from '../assets/images/webp/eng-flag.webp'
import HindiLogo from '../assets/images/webp/hindi-logo.webp'
const Navbar = () => {
  const [open, setOpen] = useState()

  const [language, setLanguage] = useState('ENG');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const logo = language === 'ENG' ? USA : HindiLogo;
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1024) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);


  return (
    <section className='bg-black'>
      <div className='max-w-[1320px] px-4 mx-auto'>
        <div className='py-[35px] max-lg:py-7 max-md:py-4 flex items-center justify-between'>
          <a href="#logo" className='font-godzilla text-4xl text-dark-red max-lg:text-3xl leading-none'>KAIJUU<span className='text-white'>CREW</span></a>
          <ul className='flex items-center gap-[53px] max-lg:gap-7 max-md:hidden'>
            <li>
              <a href="#about" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>About Us
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#story" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>Story
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#traits" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>Traits
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#roadmap" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>Roadmap
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#team" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>Team
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li>
              <a href="#faq" className='font-oswald text-[22px] max-lg:text-xl text-white relative group'>FAQ
                <div className='group-hover:border border-dark-red group-hover:border-dark-red absolute left-1/2 right-1/2 group-hover:right-0 group-hover:left-0 transition-all duration-300'></div>
              </a>
            </li>
            <li className='flex items-center gap-[11px] max-lg:gap-1'>
              <div className='cursor-not-allowed'>
                <img className='max-w-[31px] max-lg:max-w-7 pointer-events-none' src={logo} alt="language logo" />
              </div>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="text-white text-[22px] max-lg:text-xl max-md:text-xl cursor-pointer hover:text-ferrari-red transition-all duration-300 group outline-none font-oswald bg-transparent"
              >
                <option value="ENG" className="text-black cursor-pointer bg-transparent">ENG</option>
                <option value="HIN" className="text-black cursor-pointer bg-transparent">Hindi</option>
              </select>
            </li>
          </ul>
          <div
            className={`md:hidden z-30 text-3xl max-sm:text-2xl font-bold text-white  cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
          <div
            className={`w-full h-full transition-all duration-500 left-0 md:-top-full z-20 fixed flex bg-black justify-center items-center ${open ? "top-0 left-0" : "-top-full"
              }`}
          >
            <ul className='flex items-center gap-6 flex-col justify-between w-full z-20'>
              <li>
                <ul className='flex flex-col items-center gap-6'>
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
                  <li className='flex items-center gap-[11px]'>
                    <div className='cursor-not-allowed'>
                      <img className='max-w-[31px] pointer-events-none' src={logo} alt="language logo" />
                    </div>
                    <select
                      value={language}
                      onChange={handleLanguageChange}
                      className="text-white text-[22px] max-md:text-xl cursor-pointer hover:text-ferrari-red transition-all duration-300 group outline-none font-oswald bg-transparent"
                    >
                      <option value="ENG" className="text-black cursor-pointer bg-transparent">ENG</option>
                      <option value="HIN" className="text-black cursor-pointer bg-transparent">Hindi</option>
                    </select>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar