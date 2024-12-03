import React from 'react'

const Heading = ({ RedText, WhiteText }) => {
  return (
    <div>
      <p className='text-[72px] font-godzilla font-normal text-dark-red'>{RedText} <span className='text-white text-[72px] font-godzilla font-normal'>{WhiteText}</span> </p>
    </div>
  )
}

export default Heading