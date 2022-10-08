import React, { useState, useEffect } from 'react'


const SubTitle = () => {


    const [opacity, setOpacity] = useState(1);
    const [offSetY, setOffSetY] = useState(null)

    const handleScroll = () => setOpacity(1 - (window.scrollY * 0.004))
    const handleScroll2 = () => setOffSetY(window.scrollY * 0.3)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll2);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    window.onscroll = () => {

    }

    return (
        <div className="sub-title-wrapper">
            <div className='sub-title' style={{ opacity: `${opacity}`, transform: `translateY(${- offSetY}px)` }}>
                <h1 className='sub-title-text'>Creative developer</h1>
            </div>
        </div>

    )
}

export default SubTitle