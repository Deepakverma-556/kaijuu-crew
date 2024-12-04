import React from 'react'
import TopLine from '../assets/images/webp/roadmap-top-line.webp'
import BottomLine from '../assets/images/webp/roadmap-botom-line.webp'
import Line2 from '../assets/images/webp/roadmap-line-2.webp'
import Line4 from '../assets/images/webp/roadmap-line-4.webp'
import Line from '../assets/images/webp/roadmap-line.webp'
import PenLine from '../assets/images/webp/roadmap-pentagon-line.webp'
import Pentagon from '../assets/images/webp/roadmap-pentagon.webp'

const Roadmap = () => {
  return (
    <div id='roadmap' className='py-[89px]'>
      <div className='max-w-[1320px] px-4 mx-auto'>
        <h2 className='text-[72px] font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none text-center pb-[95px]'>ROADMAP</h2>
        <div className='relative w-full h-[660px] max-xl:hidden'>

          <ul className='list-disc text-white font-oswald text-[22px] absolute top-0 left-8'>
            <li>Ut eu ac sed duis nec amet.</li>
            <li>Sed elementum a tortor eros.</li>
          </ul>
          <img src={TopLine} alt="topline" className='absolute top-20 left-28' />
          <img src={Pentagon} alt="pentagon" className='absolute top-28 h-[245px]' />
          <p className='font-oswald text-[40px] text-white absolute top-[197px] left-[55px]'>Phase-1</p>

          <img src={PenLine} alt="penline" className='absolute top-32 left-60' />
          <ul className='list-disc text-white font-oswald text-[22px] absolute top-0 left-[42%]'>
            <li>Adipiscing velit turpis pretium, tellus.</li>
            <li>Ornare urna arcu, dolor vestibulum.</li>
          </ul>
          <img src={TopLine} alt="topline" className='absolute top-20 left-[47.6%]' />
          <img src={BottomLine} alt="bottomline" className='absolute bottom-[40%] left-[47.7%]' />
          <img src={Pentagon} alt="pentagon" className='absolute top-28 h-[245px] left-[39%]' />
          <p className='font-oswald text-[40px] text-white absolute top-[197px] left-[43%]'>Phase-3</p>

          <img src={PenLine} alt="penline" className='absolute top-32 left-[58%]' />
          <ul className='list-disc text-white font-oswald text-[22px] absolute top-0 right-0'>
            <li className='max-w-[216px]'>Elementum elementum sit mauris amet non.</li>
          </ul>
          <img src={TopLine} alt="topline" className='absolute top-20 right-[11.4%]' />
          <img src={BottomLine} alt="bottomline" className='absolute bottom-[40%] right-[11.3%]' />
          <img src={Pentagon} alt="pentagon" className='absolute top-28 h-[245px] right-[3%]' />
          <p className='font-oswald text-[40px] text-white absolute top-[197px] right-[7%]'>Phase-5</p>

          <img src={Line} alt="Line" className='absolute bottom-[45.4%] left-[15.7%]' />
          <img src={BottomLine} alt="bottoline" className='absolute bottom-[15%] left-[28.1%]' />
          <img src={Pentagon} alt="pentagon" className='absolute bottom-[19.5%] h-[245px] left-[19.4%]' />
          <p className='font-oswald text-[40px] text-white absolute bottom-[34%] left-[23.4%]'>Phase-2</p>
          <ul className='list-disc text-white font-oswald text-[22px] absolute bottom-0 left-[23%]'>
            <li >Sagittis tristique molestie eu pharetra.</li>
            <li className='max-w-[367px]'>Nibh convallis ornare fringilla diam proin volutpat aliquet nunc.</li>
          </ul>
          <img src={Line2} alt="line2" className='absolute bottom-[45.7%] left-[35.2%]' />

          <img src={Line} alt="Line" className='absolute bottom-[45.4%] left-[54.7%]' />
          <img src={BottomLine} alt="bottoline" className='absolute bottom-[15%] left-[67.2%]' />
          <img src={Pentagon} alt="pentagon" className='absolute bottom-[19.5%] h-[245px] left-[58.5%]' />
          <p className='font-oswald text-[40px] text-white absolute bottom-[34%] left-[62.5%]'>Phase-4</p>
          <ul className='list-disc text-white font-oswald text-[22px] absolute bottom-0 left-[61%]'>
            <li >Eget imperdiet mauris interdum ut egestas lacinia lacus.</li>
            <li className='max-w-[367px]'>Non ipsum, cursus consectetur fringilla aliquam.</li>
          </ul>
          <img src={Line4} alt="line4" className='absolute bottom-[45.5%] right-[18.6%]' />
        </div>
        
        <div className='xl:hidden'>
          <div className='flex items-center gap-9 max-sm:gap-6'>
            <div className='relative max-w-max'>
              <img src={Pentagon} alt="pentagon" className='max-md:h-48 max-sm:h-32 max-sm:min-w-[115px]' />
              <p className='font-oswald text-[40px] max-lg:text-4xl text-white absolute top-[40%] left-[25%] max-lg:left-[27%] max-md:left-[21%] max-sm:top-[38%] max-sm:left-[25%] max-sm:text-xl'>Phase-1</p>
              <img src={TopLine} alt="topline" className='absolute left-[50.5%] -bottom-3 -z-10' />
            </div>
            <div>
              <ul className='list-disc text-white font-oswald text-[22px] max-lg:text-xl max-md:text-base max-sm:text-sm'>
                <li>Ut eu ac sed duis nec amet.</li>
                <li>Sed elementum a tortor eros.</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-9 max-sm:gap-6'>
            <div className='relative max-w-max'>
              <img src={Pentagon} alt="pentagon" className='max-md:h-48 max-sm:h-32 max-sm:min-w-[115px] ' />
              <p className='font-oswald text-[40px] max-lg:text-4xl text-white absolute top-[40%] left-[25%] max-lg:left-[27%] max-md:left-[21%] max-sm:top-[38%] max-sm:left-[25%] max-sm:text-xl'>Phase-2</p>
              <img src={TopLine} alt="topline" className='absolute left-[50.5%] -bottom-3 -z-10' />
            </div>
            <div>
              <ul className='list-disc text-white font-oswald text-[22px] max-lg:text-xl max-md:text-base max-sm:text-sm'>
                <li>Sagittis tristique molestie eu pharetra.</li>
                <li>Nibh convallis ornare fringilla diam proin volutpat aliquet nunc.</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-9 max-sm:gap-6'>
            <div className='relative max-w-max'>
              <img src={Pentagon} alt="pentagon" className='max-md:h-48 max-sm:h-32 max-sm:min-w-[115px]' />
              <p className='font-oswald text-[40px] max-lg:text-4xl text-white absolute top-[40%] left-[25%] max-lg:left-[27%] max-md:left-[21%] max-sm:top-[38%] max-sm:left-[25%] max-sm:text-xl'>Phase-3</p>
              <img src={TopLine} alt="topline" className='absolute left-[50.5%] -bottom-3 -z-10' />
            </div>
            <div>
              <ul className='list-disc text-white font-oswald text-[22px] max-lg:text-xl max-md:text-base max-sm:text-sm'>
                <li>Adipiscing velit turpis pretium, tellus.</li>
                <li>Ornare urna arcu, dolor vestibulum.</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-9 max-sm:gap-6'>
            <div className='relative max-w-max'>
              <img src={Pentagon} alt="pentagon" className='max-md:h-48 max-sm:h-32 max-sm:min-w-[115px]' />
              <p className='font-oswald text-[40px] max-lg:text-4xl text-white absolute top-[40%] left-[25%] max-lg:left-[27%] max-md:left-[21%] max-sm:top-[38%] max-sm:left-[25%] max-sm:text-xl'>Phase-4</p>
              <img src={TopLine} alt="topline" className='absolute left-[50.5%] -bottom-3 -z-10' />
            </div>
            <div>
              <ul className='list-disc text-white font-oswald text-[22px] max-lg:text-xl max-md:text-base max-sm:text-sm'>
                <li>Eget imperdiet mauris interdum ut egestas lacinia lacus.</li>
                <li>Non ipsum, cursus consectetur fringilla aliquam.</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-9 max-sm:gap-6'>
            <div className='relative max-w-max'>
              <img src={Pentagon} alt="pentagon" className='max-md:h-48 max-sm:h-32 max-sm:min-w-[115px]' />
              <p className='font-oswald text-[40px] max-lg:text-4xl text-white absolute top-[40%] left-[25%] max-lg:left-[27%] max-md:left-[21%] max-sm:top-[38%] max-sm:left-[25%] max-sm:text-xl'>Phase-5</p>
            </div>
            <div>
              <ul className='list-disc text-white font-oswald text-[22px] max-lg:text-xl max-md:text-base max-sm:text-sm'>
                <li>Elementum elementum sit mauris amet non.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap