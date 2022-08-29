import React, { useState, useEffect } from 'react'


const SubTitle = () => {


    const [opacity, setOpacity] = useState(1);
    const handleScroll = () => setOpacity(1 - (window.scrollY * 0.004))

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    window.onscroll = () => {

    }


    return (
        <div className='sub-title' style={{ opacity: `${opacity}` }}>
            <h1>Creative developer</h1>
        </div>

    )
}

export default SubTitle