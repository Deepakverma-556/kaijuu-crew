import React from 'react'

const Button = ({text, svg, gap}) => {
  return (
    <div>
      <button className={`px-9 py-3 bg-dark-red font-oswald font-bold text-lg leading-[27px] transition-all duration-300 hover:scale-90 ${gap}`}>{svg}{text}</button>
    </div>
  )
}

export default Button