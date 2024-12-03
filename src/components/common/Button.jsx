import React from 'react'

const Button = ({text, svg, gap}) => {
  return (
    <div>
      <button className={`px-9 py-3 bg-dark-red font-oswald font-bold text-lg leading-[27px] transition-all duration-300 hover:scale-90 flex items-center text-white rounded-lg text-nowrap max-lg:text-base max-lg:py-2 max-lg:px-7 max-sm:text-sm ${gap}`}>{svg}{text}</button>
    </div>
  )
}

export default Button