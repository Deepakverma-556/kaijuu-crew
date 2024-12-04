import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [scrollTop, setToTop] = useState(false)
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHandler = () => {
        setToTop(window.scrollY > 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", setHandler)
    }, [])


    return (
        <div>
            {scrollTop && (<button onClick={handleClick} className='fixed bottom-5 right-5 bg-dark-red text-white p-4 rounded-full hover:scale-110 transition-all duration-300'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
            </svg></button>)
            }
        </div>
    )
}

export default BackToTop