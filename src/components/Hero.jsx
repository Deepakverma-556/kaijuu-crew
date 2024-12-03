import React, {useState, useEffect} from 'react'
import Button from './common/Button'
import heroImg from '../assets/images/webp/hero-img.webp'
import KaijuuImage1 from '../assets/images/webp/kaijuu-image-1.webp'
import KaijuuImage2 from '../assets/images/webp/kaijuu-image-2.webp'
import KaijuuImage3 from '../assets/images/webp/kaijuu-image-3.webp'
import KaijuuImage4 from '../assets/images/webp/kaijuu-image-4.webp'
import KaijuuImage5 from '../assets/images/webp/kaijuu-image-5.webp'
import KaijuuImage6 from '../assets/images/webp/kaijuu-image-6.webp'

const Hero = () => {
   const HERO_SLIDER = [
    {
      imgSrc: KaijuuImage1,
    },
    {
      imgSrc: KaijuuImage2,

    },
    {
      imgSrc: KaijuuImage3,

    },
    {
      imgSrc: KaijuuImage4,
    },
    {
      imgSrc: KaijuuImage5,
    },
    {
      imgSrc: KaijuuImage6,
    },
    {
      imgSrc: KaijuuImage1,
    },
    {
      imgSrc: KaijuuImage2,

    },
    {
      imgSrc: KaijuuImage3,

    },
    {
      imgSrc: KaijuuImage4,
    },
    {
      imgSrc: KaijuuImage5,
    },
    {
      imgSrc: KaijuuImage6,
    },
  ]


  const [time, setTime] = useState(20 * 3600 + 15 * 60 + 10); // Initial time in seconds (10:20:15) 

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60; 
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
  return (
    <div className='bg-hero-bg bg-no-repeat bg-cover pt-[55px] max-md:pt-12 max-sm:pt-10'>
      <div className='max-w-[1320px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3 max-md:w-full'>
            <div>
              <h2 className='font-godzilla text-[145px] max-lg:text-[100px] max-lg:leading-[90px] text-dark-red leading-[126px] max-md:text-7xl max-md:leading-none max-sm:text-5xl'>KAIJUU <span className='text-white'>CREW</span></h2>
              <p className='font-oswald text-[22px] text-white leading-8 md:max-w-[368px] py-[18px] max-lg:py-3 max-lg:text-xl max-md:py-2 max-md:text-lg max-sm:text-base max-sm:py-1'>The ocean surges with spray and foam,
                As Kaijuu rise from depth to roam.
                Thirty-three hundred, and thirty-three more,
                Decked in garbs from days of yore.
                We scour the earth and sea and air,
                Our mission so grave few would dare.
                In search of untold wealth to hoard?
                Nay, but 'cause your Apes are Bored.
              </p>
              <p className='font-oswald font-bold text-5xl text-white leading-[72px] max-lg:text-[40px] max-lg:leading-[50px] max-md:text-4xl max-md:leading-none max-sm:text-3xl'>10:{formatTime(time)}</p>
              <p className='text-white font-oswald text-lg leading-7 text-opacity-60 pb-[18px] max-lg:pb-4 max-md:text-base max-md:pb-2 max-sm:text-sm max-sm:pb-2'>Days left</p>
              <div className='flex items-center gap-4'>
                <Button svg={<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6246 1.99704C17.1981 1.34235 15.6928 0.875097 14.1462 0.606912C14.1322 0.604552 14.1178 0.60659 14.105 0.612746C14.0922 0.618901 14.0816 0.628872 14.0747 0.641287C13.8809 0.985037 13.6664 1.43466 13.5165 1.78666C11.8494 1.53367 10.1538 1.53367 8.48673 1.78666C8.31955 1.39454 8.13042 1.01214 7.92023 0.641287C7.91318 0.629008 7.90257 0.619152 7.88981 0.613017C7.87705 0.606881 7.86273 0.604753 7.84873 0.606912C6.30186 0.873662 4.79623 1.34116 3.37036 1.99704C3.35816 2.00169 3.34795 2.01044 3.34148 2.02179C0.489732 6.28291 -0.292643 10.4395 0.0909822 14.5439C0.0923572 14.5632 0.104732 14.5824 0.119857 14.5948C1.78048 15.8249 3.63792 16.7641 5.61298 17.3723C5.62693 17.3767 5.64191 17.3765 5.65576 17.3718C5.66961 17.3671 5.68159 17.3581 5.68998 17.3462C6.11348 16.7687 6.49023 16.1595 6.81473 15.5188C6.8215 15.5056 6.82381 15.4906 6.82133 15.4759C6.81886 15.4613 6.81172 15.4479 6.80098 15.4377C6.79388 15.431 6.78545 15.4258 6.77623 15.4225C6.18383 15.1949 5.61009 14.9213 5.06023 14.6044C5.04487 14.5957 5.03345 14.5814 5.02833 14.5645C5.02321 14.5476 5.02479 14.5294 5.03273 14.5137C5.03741 14.5034 5.04449 14.4945 5.05336 14.4875C5.16886 14.4009 5.28436 14.3102 5.39436 14.2194C5.40407 14.2116 5.41573 14.2066 5.42809 14.2049C5.44044 14.2032 5.45302 14.2049 5.46448 14.2098C9.06561 15.8543 12.9637 15.8543 16.5209 14.2098C16.5327 14.2046 16.5458 14.2028 16.5586 14.2045C16.5715 14.2062 16.5836 14.2114 16.5937 14.2194C16.7037 14.3102 16.8192 14.4009 16.9347 14.4875C16.9441 14.4944 16.9516 14.5034 16.9566 14.5139C16.9616 14.5243 16.964 14.5359 16.9634 14.5475C16.9629 14.559 16.9595 14.5703 16.9535 14.5802C16.9475 14.5902 16.9392 14.5985 16.9292 14.6044C16.3806 14.9242 15.8062 15.1974 15.2119 15.4212C15.2024 15.4246 15.1938 15.4301 15.1866 15.4372C15.1795 15.4443 15.174 15.4529 15.1706 15.4624C15.1674 15.4716 15.1662 15.4813 15.1669 15.491C15.1676 15.5007 15.1702 15.5102 15.1747 15.5188C15.5047 16.1582 15.8829 16.7687 16.2981 17.3462C16.3065 17.3581 16.3185 17.3671 16.3323 17.3718C16.3462 17.3765 16.3612 17.3767 16.3751 17.3723C18.3535 16.7659 20.2139 15.8267 21.8765 14.5948C21.8848 14.589 21.8917 14.5815 21.8967 14.5726C21.9017 14.5638 21.9047 14.554 21.9054 14.5439C22.3646 9.79879 21.1367 5.67654 18.6521 2.02316C18.6496 2.01713 18.6459 2.01169 18.6411 2.00719C18.6364 2.00269 18.6308 1.99923 18.6246 1.99704ZM7.35236 12.0442C6.26748 12.0442 5.37511 11.0487 5.37511 9.82766C5.37511 8.60529 6.25098 7.60979 7.35236 7.60979C8.46198 7.60979 9.34611 8.61354 9.32961 9.82766C9.32961 11.0487 8.45373 12.0442 7.35236 12.0442ZM14.6619 12.0442C13.5784 12.0442 12.6846 11.0487 12.6846 9.82766C12.6846 8.60529 13.5605 7.60979 14.6619 7.60979C15.7715 7.60979 16.657 8.61354 16.6391 9.82766C16.6391 11.0487 15.7715 12.0442 14.6619 12.0442Z" fill="white" />
                </svg>
                } text={"JOIN DISCORD"} gap='gap-[11px]' />
                <Button text='CONNECT WALLET' />
              </div>
            </div>
          </div>
          <div className='w-1/2 px-3 max-md:w-full max-md:pt-6'>
            <div>
              <img src={heroImg} alt="hero-img" className='h-[707px] w-full object-cover max-lg:h-[500px] max-lg:w-96 max-sm:h-80 max-lg:mx-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-transparent to-dark-blue'>
        <div className='flex overflow-hidden'>
          <div className='hero-slider flex'>
            {HERO_SLIDER.map((item, index) => <img key={index} className='w-full object-cover max-h-[295px]' src={item.imgSrc} alt="Image1" />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero