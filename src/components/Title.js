import React, { useEffect, useState } from 'react'

const Title = () => {

    const [offSetX, setOffSetX] = useState(0);
    const handleScroll = () => setOffSetX(window.scrollY)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])




    return (
        <div className="container">
            <h1 className='chris' style={{ transform: `translateX(${- offSetX * 5}px)` }}>CHRIS </h1>
            <h1 className='holt' style={{ transform: `translateX(${offSetX * 5}px)` }}> HOLT </h1>

        </div>
    )
}

export default Title