import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import firstImage from '../assets/images/webp/team-image-1.webp';
import secondImage from '../assets/images/webp/team-image-2.webp';
import thirdImage from '../assets/images/webp/team-image-2.webp';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Team = () => {
  const CARDS = [
    {
      Image: firstImage,
      Title: 'Boss Kaijuu',
      content: 'KJC#29'
    },
    {
      Image: secondImage,
      Title: '???',
      content: 'KJC#29'
    },
    {
      Image: thirdImage,
      Title: '???',
      content: 'KJC#29'
    },
    {
      Image: firstImage,
      Title: 'Boss Kaijuu',
      content: 'KJC#29'
    },
    {
      Image: secondImage,
      Title: '???',
      content: 'KJC#29'
    },
    {
      Image: thirdImage,
      Title: '???',
      content: 'KJC#29'
    },
  ];

  return (
    <div id='team' className='bg-dark-blue overflow-hidden pb-[123px] max-lg:pb-16 max-md:pb-10'>
      <div className="max-w-[1320px] mx-auto px-4 relative">
        <div className='text-center pt-[72px] pb-14 max-lg:pt-16 max-md:pt-10 max-lg:pb-8 max-sm:pb-5'>
          <p className='text-[72px] font-normal font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none'>Team</p>
        </div>
        <button className="custom-prev-btn absolute left-[-7%] top-[61.5%] max-lg:hidden  max-2xl:hidden">
          <svg width="83" height="30" viewBox="0 0 83 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M83 4H9L30.4926 27" stroke="#FF002A" strokeWidth="7.11905" />
          </svg>
        </button>
        <button className="custom-next-btn  absolute right-[-7%] top-[59%]  max-xl:hidden max-2xl:hidden">
          <svg width="83" height="30" viewBox="0 0 83 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 26H74L52.5074 3" stroke="#FF002A" strokeWidth="7.11905" />
          </svg>
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >

          {CARDS.map((object, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col '>
                <img src={object.Image} alt="SliderImage" className='w-[424px] mx-auto' />
                <p className='text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl leading-[44.7px] text-white font-Righteous text-center'>{object.Title}</p>
                <p className='text-lg max-lg:text-base text-white text-center font-Righteous mt-2 max-md:mt-1'>{object.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
