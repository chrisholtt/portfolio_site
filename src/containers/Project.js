import React, { useState } from 'react'

const Project = ({ color, lang, title, description }) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='project' onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <div className="project-colour-bar" style={{ background: color }}>
                    {show && <img src="textures/sick-normal.jpeg" alt="" className='sick-banner' />}
                </div>
                <h3 style={{ color: color }}>{lang}</h3>
                <h1>{title}</h1>
                <p>{description}</p>

            </div>
        </>
    )
}

export default Project