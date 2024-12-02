import React from 'react'

const Heading = ({ RedText, WhiteText }) => {
  return (
    <div>
      <p className='leading-[86px] max-sm:leading-[100%] text-[72px] font-godzilla font-normal text-dark-red'>{RedText} <span className='text-white leading-86 text-[72px] font-godzilla font-normal'>{WhiteText}</span> </p>
    </div>
  )
}

export default Heading